import * as PIXI from 'pixi.js'
import anime from 'animejs'
import Rellax from 'rellax'

// import { greys } from './greys.js'

import { ObjectPool } from './object-pools.js'
import { BackgroundGradientCanvas } from './gradient-canvas.js'

export class Background {

  constructor() {

    this.init();

    this.backgroundGradient = new BackgroundGradientCanvas(this.app);

    this.resizeCanvas();

    this.blurLayerSmall = new PIXI.Container();
    this.app.stage.addChild(this.blurLayerSmall);
    this.blurLayerLarge = new PIXI.Container();
    this.app.stage.addChild(this.blurLayerLarge);

    this.layers = [];
    for (var i = 0; i < 4; i++) {
      // 0 smallest (closest) 3 biggest (furthest)
      let layer = new PIXI.Container();
      this.layers.push(layer);

      if (i < 3) {
        this.blurLayerSmall.addChild(layer);
      } else {
        this.blurLayerLarge.addChild(layer);
      }
    }

    let filterSmall = new PIXI.filters.BlurFilter();
    filterSmall.blur = 10;
    filterSmall.quality = 2;
    this.blurLayerSmall.filters = [filterSmall];

    let filterLarge = new PIXI.filters.BlurFilter();
    filterLarge.blur = 25;
    filterLarge.quality = 2;
    this.blurLayerLarge.filters = [filterLarge];

    // let filterAll = new PIXI.filters.BlurFilter();
    // filterAll.blur = 20;
    // this.app.stage.filters = [filterAll];

    this.objects = new ObjectPool(this.app, this.layers);

    this.relaxInstances = [];
    this.startRelax();

    this.appendCanvas();
  }

  init() {
    console.log('new init');
    this.app = new PIXI.Application({
      autoStart: true,
      autoResize: true,
      resolution: 0.1,
      // devicePixelRatio
      // transparent: true
    });
  }

  appendCanvas() {

    let canvas = document.getElementById('canvas');
    canvas.appendChild(this.app.view);
    window.addEventListener('resize', this.resizeCanvas.bind(this));
    this.objects.addFirstBatch();

    this.ball = document.getElementById('ball');
    this.ball.classList.add('active');

    let ticks = 0;
    this.app.ticker.add(() => {
      ticks += 1;

      if (ticks === 120) {
        this.sequence();
      }
    });

  }

  sequence() {
    this.slideLoader('out', () => {
      this.ball.classList.remove('active');
      setTimeout(() => {
        this.loader = document.getElementById('loader')
        this.loader.classList.add('none');
      }, 400);
    });
  }

  slideLoader(direction, callback) {

    var slide = anime({
      targets: '.loader-bar',
      translateX: '100%',
      easing: 'easeOutExpo',
      autoplay: 'false',
      duration: 800,
      delay: function(el, i) {
        return i * 100;
      },
      complete: function() {
        callback();
      }
    });

    if (direction === 'out') {
      slide.play();
    } else if (direction === 'in') {
      slide.reverse();
      slide.play();
    }

  }

  startRelax() {
    let app = document.getElementById('app');
    let relax = document.querySelectorAll('.relax');

    let self = this;

    relax.forEach((relax, index) => {
      let relaxInstance = new Rellax(relax, {
        speed: index * 1.1,
        wrapper: app,
        callback: function(positions) {
          // callback every position change
          self.layers[index].y = positions.y;
        }
      });
      self.relaxInstances.push(relaxInstance);
      relax.remove();
    });
  }

  resizeCanvas() {
    this.app.renderer.resize(window.innerWidth, window.innerHeight);

    this.backgroundGradient.backgroundSprite.width = this.app.screen.width;
    this.backgroundGradient.backgroundSprite.height = this.app.screen.height;

    // position rectangle
    // this.rect.position.set(this.app.screen.width, this.app.screen.height);
  }
}
