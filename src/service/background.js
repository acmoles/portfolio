import * as PIXI from 'pixi.js'
import * as filters from 'pixi-filters'

import { ObjectPool } from './object-pools.js'
import { BackgroundGradientCanvas } from './gradient-canvas.js'

export class Background {

  constructor(userAgent) {

    this.canvas = document.getElementById('canvas');
    this.canvasFader = document.getElementById('canvas-fader');

    this.canvasFaderVisible = false;

    this.init();

    this.backgroundGradient = new BackgroundGradientCanvas(this.app);

    this.resizeCanvas();

    this.layers = [];
    for (var i = 0; i < 3; i++) {
      // 0 smallest (closest) 3 biggest (furthest)
      let layer = new PIXI.Container();
      this.layers.push(layer);

      this.app.stage.addChild(layer);
    }

    if (userAgent === 'Firefox') {
      this.addSoftwareBlurEffects();
    }

    this.objects = new ObjectPool(this.app, this.layers);
  }

  init() {
    this.app = new PIXI.Application({
      autoStart: false,
      autoResize: true,
      resolution: 0.5,
      backgroundColor: 0xEFF2F7,
      // devicePixelRatio
      // transparent: true
    });
  }

  appendCanvas(callback) {
    let fader = document.getElementById('canvas-fader');
    this.canvas.insertBefore(this.app.view, fader);
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

  addSoftwareBlurEffects() {
    // Global blur filter
    let filterAll = new filters.KawaseBlurFilter();
    filterAll.blur = 20;
    filterAll.quality = 4;
    filterAll.padding = 50;
    this.app.stage.filters = [filterAll];
  }

  resizeCanvas() { // On resize event
    this.app.renderer.resize(this.canvas.offsetWidth, this.canvas.offsetHeight);

    this.backgroundGradient.backgroundSprite.width = this.app.screen.width;
    this.backgroundGradient.backgroundSprite.height = this.app.screen.height;
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
}
