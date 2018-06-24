import * as PIXI from 'pixi.js'
import anime from 'animejs'

export class BackgroundObject {

  constructor(app, color, type, scale, x, y, rotation) {
    this.app = app;
    this.color = color;
    this.scale = scale;
    this.type = type;
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.init();
  }

  init() {
    this.graphics = new PIXI.Graphics();

    if (this.type === 'pentagon') {
      this.drawPolygon(5);
    } else if (this.type === 'triangle') {
      this.drawPolygon(3);
    } else {
      this.drawBox();
    }

    this.graphics.x = this.x;
    this.graphics.y = this.y;
    this.graphics.rotation = this.rotation;

    this.bounds = this.graphics.getBounds();
    this.checkVisible();

    let xDirection = anime.random(-1, 1) / this.scale;
    let yDirection = anime.random(-1, 1) / this.scale;

    this.app.ticker.add((delta) => {
        this.graphics.x += 0.4 * delta * xDirection;
        this.graphics.y += 0.4 * delta * yDirection;
        // this.checkVisible();
    });

    // causing webgl error?
    // this.graphics.cacheAsBitmap = true;
  }

  checkVisible() {
    // let visible = this.bounds.x >= this.app.screen.x &&
    //               this.bounds.y >= this.app.screen.y &&
    //               this.bounds.x + this.bounds.width <= this.app.screen.height &&
    //               this.bounds.y + this.bounds.height <= this.app.screen.width;
    let visible = this.bounds.x >= 0 && this.bounds.x + this.bounds.width <= this.app.screen.width;
    console.log('visible?', visible);
    if (!visible) {
      console.log('Not visible me');
    }
  }

  drawBox() {
    let scaledSide = this.scale * 64;
    let scaledCorner = this.scale * 12;
    this.graphics.beginFill(this.color);
    this.graphics.drawRoundedRect(
      -scaledSide / 2,
      -scaledSide / 2,
      scaledSide,
      scaledSide,
      scaledCorner
    );
    this.graphics.endFill();
  }

  drawPolygon(numberOfSides) {
    let size = 64 * this.scale,
        step  = 2 * Math.PI / numberOfSides, // Precalculate step value
        shift = (Math.PI / 180.0) * -18;

    this.graphics.moveTo(0, 0);
    this.graphics.beginFill(this.color, 0);
    this.graphics.lineStyle(10 * this.scale, this.color, 1);

    for (var i = 0; i <= numberOfSides; i++) {
      var curStep = i * step + shift;

      if (i === 0) {
        this.graphics.moveTo( size * Math.cos(curStep), size * Math.sin(curStep));
      } else {
        this.graphics.lineTo( size * Math.cos(curStep), size * Math.sin(curStep));
      }
    }
    this.graphics.endFill();
  }

}
