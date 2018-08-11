import anime from 'animejs'

export class Intro {

  constructor() {
    this.spinner = document.getElementById('spinner');
    this.canvasContainer = document.getElementById('canvas');
    this.checkUserAgent();
    this.beginLoadIntro();
  }

  checkUserAgent() {
    if (navigator.userAgent.indexOf('Firefox') > -1) {
     //"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
      this.firefox = true;
    } else {
      this.addCanvasBlur();
    }
  }

  addCanvasBlur() {
    this.canvasContainer.classList.add('blur');
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
      this.slideLoader('out', () => {
        this.loader = document.getElementById('loader')
        this.loader.classList.add('none');
        if (callback) {
          callback();
        }
      });
    }, 400);
  }

  slideLoader(direction, callback) {

    var slide = anime({
      targets: '.loader-bar',
      translateX: '-100%',
      easing: 'easeInOutExpo',
      autoplay: 'false',
      duration: 1400,
      delay: function(el, i) {
        return i * 120;
      },
      complete: function() {
        callback();
      }
    });

    if (direction === 'out') {
      slide.play();
    } else if (direction === 'in') {
      slide.reverse();
      slide.play();
    }

  }


}
