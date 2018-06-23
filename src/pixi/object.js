import * as PIXI from 'pixi.js'

export class BackgroundObject {

  constructor(app, color, type, blurAmount, scale, speed, x, y) {
    this.app = app;
    this.color = color;
    this.speed = speed;
    this.scale = scale;
    this.type = type;
    this.blurAmount = blurAmount;
    this.x = x;
    this.y = y;
    this.init();
  }

  init() {
    this.graphics = new PIXI.Graphics();

    this.drawBox();

    this.graphics.x = this.x;
    this.graphics.y = this.y;

    this.graphics.cacheAsBitmap = true;

    this.blurFilter = new PIXI.filters.BlurFilter();
    this.graphics.filters = [this.blurFilter];
    this.blurFilter.blur = this.blurAmount;
    this.blurFilter.quality = 10;

    let self = this;

    this.app.ticker.add(function(delta) {
        // self.graphics.x += 0.01 * delta * anime.random(10, 40);
        // self.graphics.y += 0.01 * delta * anime.random(1, 20);
    });
  }

  drawBox() {
    let scaledSide = this.scale * 100;
    let scaledCorner = this.scale * 12;
    this.graphics.beginFill(this.color);
    this.graphics.moveTo(scaledSide / 2, scaledSide / 2);
    this.graphics.drawRoundedRect(scaledSide, scaledSide, scaledSide, scaledSide, scaledCorner);
    this.graphics.endFill();
    this.app.stage.addChild(this.graphics);
  }

}
