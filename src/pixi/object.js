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

    this.animatableProps = {
      alpha: 0,
      scale: 0.8
    }
    this.updateProps();

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
        this.graphics.y += 0.2 * delta * yDirection;
        this.bounds = this.graphics.getBounds();
    });

    // causing webgl error?
    // this.graphics.cacheAsBitmap = true;
  }

  checkVisible() {
    return this.bounds.x >= 0 - this.bounds.width // visible if off screen left up to own width
    && this.bounds.x <= this.app.screen.width;
  }

  intro() {
    anime({
      targets: this.animatableProps,
      alpha: 1,
      scale: 1,
      duration: 2000,
      delay: anime.random(0, 1000),
      easing: 'easeInOutQuart',
      update: () => {
        this.updateProps();
      }
    });
  }

  introNoAnimation() {
    this.animatableProps.alpha = 1;
    this.animatableProps.scale = 1;
    this.updateProps();
  }

  outtro() {
    anime({
      targets: this.animatableProps,
      alpha: 0,
      scale: 0.9,
      duration: 2000,
      delay: anime.random(0, 1000),
      easing: 'easeInOutQuad',
      update: () => {
        this.updateProps();
      },
      complete: () => {
        this.graphics.parent.removeChild(this.graphics);
      }
    });
  }

  updateProps() {
    this.graphics.alpha = this.animatableProps.alpha;
    this.graphics.scale.x = this.graphics.scale.y = this.animatableProps.scale;
  }

  drawBox() {
    let responsiveScaleFactor = (64 * this.app.screen.width) / 1000,
        objectSizeConstant = this.scale * anime.random(0.9, 1.1),
        scaledSide =  responsiveScaleFactor * objectSizeConstant,
        scaledCorner = objectSizeConstant * 12;
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
    let responsiveScaleFactor = (64 * this.app.screen.width) / 1000,
        objectSizeConstant = this.scale * anime.random(0.9, 1.1),
        size = responsiveScaleFactor * objectSizeConstant,
        step  = 2 * Math.PI / numberOfSides, // Precalculate step value
        shift = (Math.PI / 180.0) * -18;

    this.graphics.moveTo(0, 0);
    this.graphics.beginFill(this.color, 0);
    this.graphics.lineStyle(15 * objectSizeConstant, this.color, 1);

    for (var i = 0; i <= numberOfSides + 1; i++) {
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
