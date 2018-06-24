import anime from 'animejs'
import { colors } from './colors.js'
// import { greys } from './greys.js'
import { BackgroundObject } from './object.js'


export class ObjectPool {

  constructor(app, layers) {
    this.app = app;
    this.layers = layers;

    this.objectsPerLayer = 5;

    this.colors = [];
    for (var property in colors) {
      this.colors.push(colors[property]);
    }

    this.types = [
      'box',
      'pentagon',
      'triangle'
    ]

    this.objectPool = []

    this.makeObjects(this.objectsPerLayer);
    this.objectsToReplace = 0;
    this.checkAllVisible();

    setInterval(() => {
      this.checkAllVisible();
    }, 5000);
  }

  takeObject(layerIndex) {
    return this.objectPools[layerIndex].shift();
  }

  returnObject(layerIndex, object) {
    this.objectPools[layerIndex].push(object);
  }

  makeObjects(amount) {
    this.layers.forEach((layer, index) => {
      var scale, type;
      if (index >= 3) {
        scale = index * anime.random(1.8, 2.2);
        type = this.types[anime.random(0, this.types.length - 2)];
        amount -= 2;
      } else {
        scale = index;
        type = this.types[anime.random(0, this.types.length - 1)];
      }

      for (var i = 0; i < amount; i++) {
        this.makeObject(scale, layer, type, i);
      }
    });
  }

  makeObject(scale, layer, type, i) {
    var color;
    if (anime.random(-1, 1) > 0) {
      color = this.colors[anime.random(0, this.colors.length - 5)];
    } else {
      color = this.colors[anime.random(0, this.colors.length - 1)];
    }

    let backgroundObject = new BackgroundObject(
      this.app, // app
      color, // color
      type, // type
      scale, // scale
      anime.random(0, window.innerWidth), // x
      (window.innerHeight * i) + anime.random(-300, 300), // y
      anime.random(1, Math.PI) // rotation
    );
    layer.addChild(backgroundObject.graphics);
    backgroundObject.intro();
    this.objectPool.push(backgroundObject);
  }

  checkAllVisible() {

    this.objectPool.forEach((object, index, array) => {
      let visible = object.checkVisible();
      if (!visible) {
        object.graphics.parent.removeChild(object);
        array.splice(index, 1);
        this.objectsToReplace ++;
      }
    });

    console.log('objects removed count: ', this.objectsToReplace);

    if (this.objectsToReplace > this.layers.length) {
      this.makeObjects(2);
      console.log('replaced objects: ', this.objectsToReplace);
      this.objectsToReplace = 0;
    }

  }

}
