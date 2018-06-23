import * as PIXI from 'pixi.js'
import anime from 'animejs'
import { colors } from './colors.js'
import { greys } from './greys.js'

import { BackgroundObject } from './object.js'

export class Background {

  constructor() {
    this.init();
    this.colors = [];
    for (var property in colors) {
      this.colors.push(colors[property]);
    }
    console.log(this.colors);
    this.objects = [];
    this.makeObjects();

    window.addEventListener('resize', this.resizeCanvas.bind(this));
    this.resizeCanvas();

    let self = this;
    // Listen for animate update
    this.app.ticker.add(function(delta) {
        // self.rect.rotation += 0.1 * delta;
    });
  }

  init() {
    this.app = new PIXI.Application({
      autoResize: true,
      resolution: devicePixelRatio,
      antialias: true,
      backgroundColor: greys.darkSnow
    });
    document.getElementById('canvas').appendChild(this.app.view);
  }

  makeObjects() {
    for (var i = 0; i < 20; i++) {
      // app, color, type, blurAmount, scale, speed, x, y
      let backgroundObject = new BackgroundObject(
        this.app,
        this.colors[anime.random(0, this.colors.length - 1)],
        'box',
        anime.random(5, 20),
        anime.random(0.1, 8),
        anime.random(1, 10),
        anime.random(1, 50),
        anime.random(1, 50)
      );
      this.objects.push(backgroundObject);
    }
  }

  makeGradient() {
    this.gradient = new PIXI.Graphics();

  }

  resizeCanvas() {
    this.app.renderer.resize(window.innerWidth, window.innerHeight);

    // position rectangle
    // this.rect.position.set(this.app.screen.width, this.app.screen.height);
  }
}
