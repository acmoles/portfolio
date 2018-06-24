import * as PIXI from 'pixi.js'
import Rellax from 'rellax'

import { ObjectPool } from './object-pools.js'

export class Background {

  constructor() {

    this.init();

    this.allActiveObjects = [];
    this.layers = [];
    for (var i = 0; i < 5; i++) {
      // 0 smallest (closest) 5 biggest (furthest)
      let layer = new PIXI.Container();
      this.layers.push(layer);
      this.app.stage.addChild(layer);

      let activeObjectsOnLayer = [];
      this.allActiveObjects.push(activeObjectsOnLayer);
    }

    this.objects = new ObjectPool(this.app, this.layers);

    this.relaxInstances = [];
    this.startRelax();
  }

  init() {
    this.app = new PIXI.Application({
      autoStart: false,
      autoResize: true,
      resolution: devicePixelRatio,
      // backgroundColor: greys.extraDarkSnow
      transparent: true
    });

  }

  appendCanvas() {
    let filter = new PIXI.filters.BlurFilter();
    filter.blur = 20;
    // filter.quality = 5;
    this.app.stage.filters = [filter];

    this.app.start();

    document.getElementById('canvas').appendChild(this.app.view);

    window.addEventListener('resize', this.resizeCanvas.bind(this));
    this.resizeCanvas();
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
    });
  }

  resizeCanvas() {
    this.app.renderer.resize(window.innerWidth, window.innerHeight);

    // position rectangle
    // this.rect.position.set(this.app.screen.width, this.app.screen.height);
  }
}
