import * as PIXI from 'pixi.js'
// import * as filters from 'pixi-filters'
import anime from 'animejs'

import { ObjectPool } from './object-pools.js'
import { BackgroundGradientCanvas } from './gradient-canvas.js'

export class Background {

  constructor() {

    this.canvas = document.getElementById('canvas');
    this.canvasFader = document.getElementById('canvas-fader');

    this.canvasFaderVisible = false;

    this.init();

    this.backgroundGradient = new BackgroundGradientCanvas(this.app);

    this.resizeCanvas();

    // TODO was used for two levels of depth blur
    // this.blurLayerSmall = new PIXI.Container();
    // this.app.stage.addChild(this.blurLayerSmall);
    // this.blurLayerLarge = new PIXI.Container();
    // this.app.stage.addChild(this.blurLayerLarge);

    this.layers = [];
    for (var i = 0; i < 3; i++) {
      // 0 smallest (closest) 3 biggest (furthest)
      let layer = new PIXI.Container();
      this.layers.push(layer);

      // if (i < 2) {
      //   this.blurLayerSmall.addChild(layer);
      // } else {
      //   this.blurLayerLarge.addChild(layer);
      // }
      this.app.stage.addChild(layer);
    }

    // this.addBlurEffects();

    this.objects = new ObjectPool(this.app, this.layers);
  }

  init() {
    this.app = new PIXI.Application({
      autoStart: false,
      autoResize: true,
      resolution: 0.5,
      // devicePixelRatio
      // transparent: true
    });
  }

  appendCanvas(callback) {
    this.canvas.appendChild(this.app.view);
    window.addEventListener('resize', this.resizeCanvas.bind(this));

    this.app.start();

    let ticks = 0;
    this.app.ticker.add(() => {
      ticks += 1;

      if (ticks === 100) {
        // We're happy after 100 ticks
        if (callback) {
          callback();
        }
      }
    });
  }

  toggleCanvasFader(onOff) {
    if (onOff === 'off') {
      this.canvasFader.classList.remove('active');
      this.canvasFaderVisible = false;
    } else {
      this.canvasFader.classList.add('active');
      this.canvasFaderVisible = true;
    }
  }

  // addBlurEffects() {
    // Per layer blur filters
    // let filterSmall = new filters.KawaseBlurFilter();
    // if (window.innerWidth < 600) {
    //   filterSmall.blur = 5;
    // } else if (window.innerWidth > 1600) {
    //   filterSmall.blur = 20;
    // } else if (window.innerWidth > 2000) {
    //   filterSmall.blur = 40;
    // } else {
    //   filterSmall.blur = 10;
    // }
    // filterSmall.quality = 1;
    // filterSmall.autoFit = true;
    // this.blurLayerSmall.filters = [filterSmall];

    // let filterLarge = new filters.KawaseBlurFilter();
    // if (window.innerWidth < 600) {
    //   filterLarge.blur = 10;
    // } else if (window.innerWidth > 1600) {
    //   filterLarge.blur = 40;
    // } else if (window.innerWidth > 2000) {
    //   filterLarge.blur = 60;
    // } else {
    //   filterLarge.blur = 25;
    // }
    // filterLarge.quality = 1;
    // filterLarge.autoFit = true;
    // this.blurLayerLarge.filters = [filterLarge];

    // Global blur filter
    // let filterAll = new PIXI.filters.BlurFilter();
    // filterAll.blur = 20;
    // this.app.stage.filters = [filterAll];
  //
  // }

  resizeCanvas() {
    this.app.renderer.resize(this.canvas.offsetWidth, this.canvas.offsetHeight);

    this.backgroundGradient.backgroundSprite.width = this.app.screen.width;
    this.backgroundGradient.backgroundSprite.height = this.app.screen.height;

    // position rectangle bottom corner of screen (Responsive)
    // this.rect.position.set(this.app.screen.width, this.app.screen.height);
  }

  addFirstBatch() {
    this.objects.addFirstBatch();
  }

  // Remove replace API
  removeAll() {
    this.objects.removeAll();
  }

  replaceAll() {
    this.objects.replaceAll();
  }

  recycleAll() {
    this.objects.removeAllReplace();
  }

  // Animate up / down API

  animateObjects(direction) {
    this.layers.forEach((layer, index) => {

      let amount = this.app.screen.height / (index + 1);
      if (direction === 'up') {
        amount *= 1;
      } else {
        amount *= -1;
      }

      anime({
        targets: layer,
        y: amount,
        easing: 'easeInOutQuart',
        duration: 850
      });
    });
  }

  resetLayerHeight() {
    this.layers.forEach(layer => layer.y = 0);
  }

}
