import * as PIXI from 'pixi.js'
// import { greys } from './greys.js'

export class BackgroundGradientCanvas {

  constructor(app) {
    this.app = app;
    this.init();
  }

  init() {
    var canvas = document.createElement('canvas');
    canvas.width  = 400;
    canvas.height = 400;
    var ctx = canvas.getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#E5E9F2');
    gradient.addColorStop(1, '#F9FAFC');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 400);

    this.backgroundSprite = new PIXI.Sprite(PIXI.Texture.fromCanvas(canvas));
    this.backgroundSprite.x = 0;
    this.backgroundSprite.y = 0;
    this.app.stage.addChild(this.backgroundSprite);
  }

}
