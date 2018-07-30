import anime from 'animejs'
import { colors } from './colors.js'
import { greys } from './greys.js'
import { BackgroundObject } from './object.js'


export class ObjectPool {

  constructor(app, layers) {
    this.app = app;
    this.layers = layers;

    this.isPaused = false;
    this.isGrey = false;

    if (window.innerWidth < 1500) {
      this.objectsPerLayer = 6;
    } else {
      this.objectsPerLayer = 4;
    }
    this.firstMake = true;

    this.colors = [];
    for (var property in colors) {
      this.colors.push(colors[property]);
    }
    this.colorsLarge = [];
    this.colorsLarge.push(colors.orange);
    this.colorsLarge.push(colors.yellow);
    this.colorsLarge.push(colors.green);
    for (var i = 0; i < 2; i++) {
      this.colorsLarge.push(colors.blue);
    }
    this.greys = [];
    for (var propertyGrey in greys) {
      this.greys.push(greys[propertyGrey]);
    }

    this.types = [
      'box',
      'pentagon',
      'triangle'
    ];

    this.objectPool = [];

    this.setVisibilityApi();
  }

  makeObjects(amount) {
    this.layers.forEach((layer, index) => {
      var scale, large;

      if (index === 2) {
        // larger layer
        amount = 2;
        large = true;
      }
      scale = (index + 1) * 1.5;

      let intro = true;
      // if (this.firstMake) {
      //   intro = false;
      //   this.firstMake = false;
      // } else {
      //   intro = true;
      // }

      for (var i = 0; i < amount; i++) {
        this.makeObject(scale, layer, i, intro, large);
      }
    });
  }

  makeObject(scale, layer, i, intro, large) {

    let color;
    if (this.isGrey) {
      color = this.greys[anime.random(0, this.greys.length - 1)];
    } else if (large) {
      color = this.colorsLarge[anime.random(0, this.colorsLarge.length - 1)];
    } else {
      color = this.colors[anime.random(0, this.colors.length - 1)];
    }

    let backgroundObject = new BackgroundObject(
      this.app, // app
      color, // color
      this.types[anime.random(0, this.types.length - 1)], // type
      scale, // scale
      anime.random(0, this.app.screen.width), // x
      (this.app.screen.height * anime.random(0, i)) + anime.random(-300, 300), // y
      anime.random(1, Math.PI) // rotation
    );
    layer.addChild(backgroundObject.graphics);
    if (intro) {
      backgroundObject.intro();
    } else {
      backgroundObject.introNoAnimation();
    }

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

  removeAll() {
    var i = this.objectPool.length;
    while (i--) {
      this.objectPool[i].outtro();
      this.objectPool.splice(i, 1);
    }
  }

  replaceAll() {
    this.makeObjects(this.objectsPerLayer);
  }

  removeAllReplace() {
    this.removeAll();
    this.isGrey = true;

    setTimeout(() => {
      // console.log('remove all, ', this.objectPool);
      this.replaceAll();
      // console.log('replace all, ', this.objectPool);
    }, 3000);
  }

  addFirstBatch() {
    this.makeObjects(this.objectsPerLayer);
    this.removedObjectCount = 0;
    this.checkAllVisible();

    this.checkVisibleTimer = setInterval(() => {
      if (!this.isPaused) {
        this.checkAllVisible();
      }
    }, 5000);

    this.replaceAllTimer = setInterval(() => {
      if (!this.isPaused) {
        this.removeAllReplace();
      }
    }, 60000);

    document.addEventListener(this.visibilityChange, () => {
      if (document[this.hidden]) {
        this.isPaused = true;
        this.app.stop();
      } else {
        this.isPaused = false;
        this.app.start();
      }
    }, false);

  }

  setVisibilityApi() {
  // Set the name of the hidden property and the change event for visibility
  this.hidden = '';
  this.visibilityChange = '';
  if (typeof document.hidden !== 'undefined') { // Opera 12.10 and Firefox 18 and later support
    this.hidden = 'hidden';
    this.visibilityChange = 'visibilitychange';
  } else if (typeof document.msHidden !== 'undefined') {
    this.hidden = 'msHidden';
    this.visibilityChange = 'msvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefined') {
    this.hidden = 'webkitHidden';
    this.visibilityChange = 'webkitvisibilitychange';
  }

  }

}
