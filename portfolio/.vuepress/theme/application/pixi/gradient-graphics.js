import * as PIXI from 'pixi.js'
import { greys } from './greys.js'

export class BackgroundGradientGraphics {

  constructor(app) {
    this.app = app;
    this.init();
  }

  init() {
    this.gradient = new PIXI.Graphics();
    this.app.stage.addChild(this.gradient);

    var colorFromData = this.prepareColorData(greys.snow, 1);
    var colorToData = this.prepareColorData(greys.extraDarkSnow, 1);

    var rect = {
      width: 200,
      height: 200
    };

    var stepCoef;
    var stepColor;
    var stepsCount = 100;
    var stepHeight = rect.height / stepsCount;
    for (var stepIndex = 0; stepIndex < stepsCount; stepIndex++) {
      stepCoef = stepIndex / stepsCount;
      stepColor = this.getColorOfGradient(colorFromData, colorToData, stepCoef);

      this.gradient.beginFill(stepColor.color, stepColor.alpha);
      this.gradient.drawRect(
        0,
        rect.height * stepCoef,
        rect.width,
        stepHeight
      );
    }
  }

  // param color is a number (e.g. 255)
  // return value is a string (e.g. ff)
  prepareRGBChannelColor (channelColor) {
    var colorText = channelColor.toString(16);
    if (colorText.length < 2) {
      while (colorText.length < 2) {
        colorText = "0" + colorText;
      }
    }

    return colorText;
  }

  // Getting RGB channels from a number color
  // param color is a number
  // return an RGB channels object {red: number, green: number, blue: number}
  getRGBChannels (color) {
    var colorText = color.toString(16);
    if (colorText.length < 6) {
      while (colorText.length < 6) {
        colorText = "0" + colorText;
      }
    }

    var result = {
      red: parseInt(colorText.slice(0, 2), 16),
      green: parseInt(colorText.slice(2, 4), 16),
      blue: parseInt(colorText.slice(4, 6), 16)
    };
    return result;
  }

  // Preparaiton of a color data object
  // param color is a number [0-255]
  // param alpha is a number [0-1]
  // return the color data object {color: number, alpha: number, channels: {red: number, green: number, blue: number}}
  prepareColorData (color, alpha) {
    return {
      color: color,
      alpha: alpha,
      channels: this.getRGBChannels(color)
    }
  }

  // Getting the color of a gradient for a very specific gradient coef
  // param from is a color data object
  // param to is a color data object
  // return value is of the same type
  getColorOfGradient (from, to, coef) {
    if (!from.alpha && from.alpha !== 0) {
      from.alpha = 1;
    }
    if (!from.alpha && from.alpha !== 0) {
      to.alpha = 1;
    }

    var colorRed = Math.floor(from.channels.red + coef * (to.channels.red - from.channels.red));
    colorRed = Math.min(colorRed, 255);
    var colorGreen = Math.floor(from.channels.green + coef * (to.channels.green - from.channels.green));
    colorGreen = Math.min(colorGreen, 255);
    var colorBlue = Math.floor(from.channels.blue + coef * (to.channels.blue - from.channels.blue));
    colorBlue = Math.min(colorBlue, 255);

    var rgb = this.prepareRGBChannelColor(colorRed) + this.prepareRGBChannelColor(colorGreen) + this.prepareRGBChannelColor(colorBlue);

    return {
      color: parseInt(rgb, 16),
      alpha: from.alpha + coef * (to.alpha - from.alpha)
    };
  }


}
