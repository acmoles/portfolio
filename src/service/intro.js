import anime from 'animejs'

export class Intro {


  constructor() {
    this.spinner = document.getElementById('spinner');
    this.canvasContainer = document.getElementById('canvas');
    this.loader = document.getElementById('loader');
    // this.loaderBars = document.querySelectorAll('.loader-bar');
    this.loaderBars = document.getElementById('loader-bar');
    this.userAgent = undefined;

    this.checkUserAgent();
    this.beginLoadIntro();
  }

  checkUserAgent() {
    if (navigator.userAgent.indexOf('Firefox') > -1) {
     //"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
     // TODO use pixi blur if firefox
     this.addSoftwareBlur();
     this.userAgent = 'Firefox';
   } else if (navigator.userAgent.indexOf('Chrome') > -1) {
     this.addCanvasBlur();
     this.userAgent = 'Chrome';
   } else {
      this.addCanvasBlur();
      this.userAgent = 'Other';
    }
  }

  addCanvasBlur() {
    this.canvasContainer.classList.add('blur');
  }

  addSoftwareBlur() {
    this.firefox = true;
    this.canvasContainer.classList.add('background-gradient');
  }

  beginLoadIntro() {
    setTimeout(() => {
      this.spinner.removeAttribute('style');
      setTimeout(() => {
        this.spinner.classList.add('active');
      }, 100);
    }, 400);
  }

  introSequence(callback) {
    this.spinner.classList.remove('active');
    setTimeout(() => {
      // TODO sliding bars
      // this.slideLoader('out', true, () => {
      //   this.spinner.classList.add('none');
      //   if (callback) {
      //     callback();
      //   }
      // });
      this.fadeLoader('out', () => {
          this.spinner.classList.add('none');
          this.loaderBars.classList.add('background-gradient');
          // TODO add gradient class
          if (callback) {
            callback();
          }
      })
    }, 400);
  }

  slideLoader(direction, stepped, callback) {

    let tx = direction === 'in' ? '0' : '-100%';

    anime({
      targets: this.loaderBars,
      translateX: tx,
      easing: 'easeInOutExpo',
      duration: 1400,
      delay: function(el, i) {
        if (stepped) {
          return i * 120;
        } else {
          return i;
        }
      },
      complete: function() {
        if (callback) {
          callback();
        }
      }
    });

  }

  resetLoaderBars() {
    this.loaderBars.forEach((bar) => {
      bar.style.opacity = 1;
      bar.style.transform = 'translateX(-100%)'
    });
  }

  fadeLoader(direction, callback) {
    let opacity = direction === 'in' ? '1' : '0';

    anime({
      targets: this.loaderBars,
      opacity: opacity,
      easing: 'easeInOutQuad',
      duration: 400,
      delay: 200,
      complete: () => {
        if (callback) {
          callback();
        }
      }
    });
  }


}
