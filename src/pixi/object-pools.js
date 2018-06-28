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
    this.colors.push(colors.orange);
    this.colors.push(colors.yellow);
    for (var i = 0; i < 2; i++) {
      this.colors.push(colors.blue);
      this.colors.push(colors.green);
    }

    this.types = [
      'box',
      'pentagon',
      'triangle'
    ]

    this.objectPool = []

    this.makeObjects(this.objectsPerLayer);
    this.removedObjectCount = 0;
    this.checkAllVisible();

    this.checkVisibleTimer = setInterval(() => {
      this.checkAllVisible();
    }, 5000);

    this.replaceAllTimer = setInterval(() => {
      this.removeAllReplace();
    }, 10000);
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
        // larger layers
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
    var color = this.colors[anime.random(0, this.colors.length - 1)];

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

    var i = this.objectPool.length;
    while (i--) {
      let visible = this.objectPool[i].checkVisible();

      if (!visible) {
        this.objectPool[i].graphics.parent.removeChild(this.objectPool[i].graphics);
        this.objectPool.splice(i, 1);
        this.removedObjectCount ++;
      }
    }

    // console.log('objects removed count: ', this.removedObjectCount);

    if (this.removedObjectCount > this.layers.length) {
      this.makeObjects(2);
      // console.log('replaced objects: ', this.removedObjectCount);
      this.removedObjectCount = 0;
    }

  }

  removeAllReplace() {

    var i = this.objectPool.length;
    while (i--) {
      this.objectPool[i].outtro();
      this.objectPool.splice(i, 1);
    }

    setTimeout(() => {
      // console.log('remove all, ', this.objectPool);

      this.makeObjects(this.objectsPerLayer);
      // console.log('replace all, ', this.objectPool);

    }, 3000);

    // TODO: How have some survived?
  }

}
