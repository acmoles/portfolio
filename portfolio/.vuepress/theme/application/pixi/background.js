import * as PIXI from 'pixi.js'
import * as filters from 'pixi-filters'

import { ObjectPool } from './object-pools.js'

export class Background {

  // TODO could see how performance is when interaction is turned off - seemed to be a drain

  constructor(canvas) {

    this.canvas = canvas;

    this.init();

    this.resizeCanvas();

    this.layers = [];
    for (var i = 0; i < 3; i++) {
      // 0 smallest (closest) 3 biggest (furthest)
      let layer = new PIXI.Container();
      this.layers.push(layer);

      this.app.stage.addChild(layer);
    }

    if (this.checkUserAgent() === 'Firefox') {
      this.addSoftwareBlurEffects();
    }

    this.objects = new ObjectPool(this.app, this.layers);
  }

  init() {
    this.app = new PIXI.Application({
      autoStart: false,
      autoResize: true,
      resolution: 0.5,
      backgroundColor: 0x1F2D3D,
      interactive: false,
      // devicePixelRatio
      // transparent: true
    });
  }

  appendCanvas(callback) {
    this.canvas.append(this.app.view);
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

  addSoftwareBlurEffects() {
    // Global blur filter
    let filterAll = new filters.KawaseBlurFilter();
    filterAll.blur = 13;
    filterAll.quality = 4;
    filterAll.padding = 50;
    this.app.stage.filters = [filterAll];
  }

  resizeCanvas() { // On resize event
    this.app.renderer.resize(this.canvas.offsetWidth, this.canvas.offsetHeight);
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

  checkUserAgent() {
    if (navigator.userAgent.indexOf('Firefox') > -1) {
     //"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
     return 'Firefox';
   } else if (navigator.userAgent.indexOf('Chrome') > -1) {
     this.addCanvasBlur();
     return 'Chrome';
   } else {
      this.addCanvasBlur();
      return 'Other';
    }
  }

  addCanvasBlur() {
    this.canvas.classList.add('blur');
  }

}
