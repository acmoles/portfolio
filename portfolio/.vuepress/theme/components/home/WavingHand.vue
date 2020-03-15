<template>
  <button @click="handClick" type="button" name="button" class="hand-button" :class="{ 'animate': active }">
    <svg ref="hand-container" id="hand-container" height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="waveGradient">
          <stop stop-color="#FF51DE" offset="0%"></stop>
          <stop stop-color="#FF51DE" offset="42%"></stop>
          <stop stop-color="#FF0FBC" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        ref="hand-path"
        id="hand-path"
        d="M 29 94 C 22.373 94 17 88.627 17 82 C 17 80.895 17.149 79.826 17.429 78.81 C 17.708 77.794 18.118 76.832 18.638 75.943 C 19.159 75.054 19.791 74.239 20.515 73.515 C 21.239 72.791 22.054 72.159 22.943 71.638 C 23.832 71.118 24.794 70.708 25.81 70.429 C 26.826 70.149 27.895 70 29 70 C 29.288 70 29.574 70.01 29.857 70.03 C 30.14 70.05 30.42 70.08 30.698 70.119 C 30.975 70.158 31.249 70.207 31.52 70.265 C 31.791 70.323 32.059 70.39 32.322 70.466 C 32.586 70.542 32.846 70.626 33.102 70.719 C 33.358 70.813 33.61 70.914 33.857 71.024 C 34.105 71.133 34.348 71.251 34.586 71.377 C 34.825 71.502 35.058 71.636 35.287 71.777 C 35.515 71.918 35.739 72.066 35.957 72.221 C 36.175 72.377 36.388 72.539 36.594 72.708 C 36.801 72.878 37.002 73.054 37.197 73.236 C 37.392 73.419 37.581 73.608 37.764 73.803 C 37.946 73.998 38.122 74.199 38.292 74.406 C 38.461 74.612 38.623 74.825 38.779 75.043 C 38.934 75.261 39.082 75.485 39.223 75.713 C 39.364 75.942 39.498 76.175 39.623 76.414 C 39.749 76.652 39.867 76.895 39.976 77.143 C 40.086 77.39 40.187 77.642 40.281 77.898 C 40.374 78.154 40.458 78.414 40.534 78.678 C 40.61 78.941 40.677 79.209 40.735 79.48 C 40.793 79.751 40.842 80.025 40.881 80.302 C 40.92 80.58 40.95 80.86 40.97 81.143 C 40.99 81.426 41 81.712 41 82 C 41 88.627 35.627 94 29 94 Z"
        fill="url(#waveGradient)"
        fill-rule="evenodd"
      />
    </svg>
  </button>
</template>

<script>
import anime from 'animejs';

// Reference circle
// <circle cx="29" cy="82" r="4" fill="red"/>
//FF52DF

export default {

  data () {
    return {
      downHand: 'M 20.989 91.547 C 15.604 87.777 11.045 81.726 9.964 75.728 C 8.823 69.405 9.08 56.492 8.914 26.045 C 8.912 25.559 8.928 25.072 9.08 24.61 C 9.698 22.729 11.959 21.943 13.84 22.561 C 15.238 23.021 16.47 23.927 17.537 25.278 C 19.425 27.669 20.989 36.598 21.978 47.174 C 22.039 47.819 22.59 48.319 23.121 48.691 C 24.511 49.664 26.427 49.327 27.4 47.937 C 27.4 47.937 62.301 13.502 66.033 10.199 C 67.624 8.791 69.113 8.387 70.959 9.414 C 72.776 10.425 73.048 13.251 71.734 14.881 C 68.016 19.493 49.028 43.824 49.028 43.824 C 48.814 44.254 48.928 44.775 49.301 45.077 C 49.741 45.433 50.386 45.364 50.741 44.924 C 50.741 44.924 81.61 27.997 84.112 26.55 C 86.303 25.283 88.962 25.546 90.248 27.07 C 91.427 28.469 91.451 31.085 88.994 32.758 C 86.514 34.447 59.397 54.334 59.397 54.334 C 59.141 54.74 59.202 55.27 59.543 55.607 C 59.945 56.005 60.593 56.002 60.991 55.6 C 60.991 55.6 89.357 42.7 92.864 41.327 C 94.892 40.534 97.301 40.846 98.16 42.401 C 99.055 44.021 98.806 46.248 97.121 47.174 C 91.978 50 66.033 65.122 66.033 65.122 C 65.729 65.502 65.736 66.044 66.048 66.417 C 66.411 66.851 67.056 66.908 67.49 66.546 C 67.49 66.546 88.093 59.2 93.511 57.312 C 96.049 56.428 98.465 56.884 99.282 58.58 C 100 60.07 99.503 62.287 97.121 63.539 C 85.745 69.518 72.844 71.846 57.724 87.989 C 47.857 98.524 31.614 98.987 20.989 91.547 Z',
      upHand: 'M 20.989 91.547 C 15.604 87.777 11.28 81.68 9.964 75.728 C 9.476 73.522 7.238 55.014 1.15 26.282 C 1.049 25.805 1.163 25.308 1.315 24.846 C 1.934 22.966 3.959 21.943 5.84 22.561 C 7.238 23.021 8.47 23.927 9.537 25.278 C 11.425 27.669 16.238 35.301 19.978 46.174 C 20.19 46.788 20.59 47.319 21.121 47.691 C 22.511 48.664 24.427 48.327 25.4 46.937 C 25.4 46.937 40.369 4.015 40.369 4.015 C 41.087 1.962 42.708 0.45 45.008 0.905 C 47.504 1.399 48.162 3.719 47.935 5.828 C 47.935 5.828 42.028 41.824 42.028 41.824 C 41.814 42.254 41.928 42.775 42.301 43.077 C 42.741 43.433 43.386 43.364 43.741 42.924 C 43.741 42.924 62.842 7.452 62.842 7.452 C 63.913 5.57 65.96 4.959 67.694 5.828 C 69.442 6.705 70.038 9.074 69.422 10.958 C 69.422 10.958 53.397 47.334 53.397 47.334 C 53.141 47.74 53.202 48.27 53.543 48.607 C 53.945 49.005 54.593 49.002 54.991 48.6 C 54.991 48.6 70.595 17.482 70.595 17.482 C 71.498 16.008 72.934 15.019 75.057 16.107 C 76.927 17.065 77.065 19.135 76.376 20.883 C 76.376 20.883 63.311 56.349 63.311 56.349 C 63.008 56.73 63.014 57.271 63.326 57.644 C 63.689 58.078 64.335 58.136 64.769 57.773 C 64.769 57.773 74.424 35.286 75.057 34.187 C 76.066 32.436 77.53 31.799 79.024 32.335 C 80.341 32.807 81.461 34.382 80.924 36.397 C 78.119 46.937 73.168 71.792 57.724 87.989 C 47.78 98.419 31.614 98.987 20.989 91.547 Z',
      midHand: 'M 20.989 91.547 C 15.604 87.777 11.28 81.68 9.964 75.728 C 9.476 73.522 7.871 57.04 5.15 26.282 C 5.107 25.797 5.163 25.308 5.315 24.846 C 5.934 22.966 7.959 21.943 9.84 22.561 C 11.238 23.021 12.47 23.927 13.537 25.278 C 15.425 27.669 18.238 34.301 21.978 45.174 C 22.19 45.788 22.59 46.319 23.121 46.691 C 24.511 47.664 26.427 47.327 27.4 45.937 C 27.4 45.937 54.118 7.682 55.732 5.474 C 56.977 3.771 59.267 3.209 61.113 4.236 C 62.93 5.247 63.599 7.493 62.703 9.371 C 61.63 11.619 47.028 40.824 47.028 40.824 C 46.814 41.254 46.928 41.775 47.301 42.077 C 47.741 42.433 48.386 42.364 48.741 41.924 C 48.741 41.924 72.03 13.025 73.232 11.619 C 74.537 10.093 76.754 9.737 78.4 10.89 C 80.038 12.037 80.316 14.164 79.422 15.958 C 78.4 18.008 58.397 49.334 58.397 49.334 C 58.141 49.74 58.202 50.27 58.543 50.607 C 58.945 51.005 59.593 51.002 59.991 50.6 C 59.991 50.6 83.302 26.837 85.116 25.215 C 86.509 23.97 88.56 23.816 89.959 25.058 C 91.359 26.3 91.43 28.332 90.376 29.883 C 89.419 31.294 65.311 61.349 65.311 61.349 C 65.008 61.73 65.014 62.271 65.326 62.644 C 65.689 63.078 66.335 63.136 66.769 62.773 C 66.769 62.773 87.741 45.174 89.419 43.833 C 90.899 42.65 93.039 42.809 94.256 44.264 C 95.51 45.763 95.44 47.965 94.093 49.381 C 84.967 58.976 72.844 71.846 57.724 87.989 C 47.857 98.524 31.614 98.987 20.989 91.547 Z',
      delayTimeout: null,
      active: false,
      firstAnimation: true
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
  },

  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === 'finished' && this.firstAnimation) {
        setTimeout(() => {
          this.animateHand()
          this.firstAnimation = false
        }, 1000)
      }
    }
  },

  mounted() {

    this.timeline = anime.timeline({
      autoplay: false,
      loop: false,
      complete: () => {
        // this.$refs['hand-container'].style.transform = 'rotateZ(0)';
        this.extraAnimation();
        this.delayTimeout = setTimeout( () => {
          this.timeline2.play();
        }, 6000);
      }
    });

    this.timeline2 = anime.timeline({
      autoplay: false,
      loop: false,
      complete: () => {
        this.restartRandom();
      }
    });

    // this.pauseAnimation();
    this.straightAnimation();
  },

  methods: {
    handClick() {
      clearTimeout(this.delayTimeout);
      this.timeline2.play();
    },

    animateHand() {
      this.timeline.play();
      this.active = true;
    },

    restartRandom() {
      let delay = anime.random(12000, 24000);
      this.delayTimeout = setTimeout( () => {
        this.timeline2.play();
      }, delay);
    },

    straightAnimation() {
      this.timeline
      .add({
        targets: this.$refs['hand-container'],
        translateX: [-40, 0],
        translateY: -3,
        rotateZ: [-360, 24],
        duration: 800,
        delay: 600,
        easing: 'easeOutCubic'
      })
      .add({ //down hand
        targets: this.$refs['hand-path'],
        d: this.downHand,
        duration: 800,
        delay: 0,
        easing: 'easeOutCubic'
      }, '-=600')
      .add({ // up rotation
        targets: this.$refs['hand-container'],
        rotateZ: -24,
        duration: 600,
        easing: 'easeOutCubic'
      }, '-=100')
      .add({ // up hand
        targets: this.$refs['hand-path'],
        d: this.upHand,
        duration: 600,
        delay: 0,
        easing: 'easeOutCubic'
      }, '-=600')
      .add({ // down rotation
        targets: this.$refs['hand-container'],
        rotateZ: 16,
        duration: 600,
        easing: 'easeOutCubic'
      }, '-=100')
      .add({ // down hand
        targets: this.$refs['hand-path'],
        d: this.downHand,
        duration: 600,
        delay: 0,
        easing: 'easeOutCubic'
      }, '-=600')
      .add({ // rest rotation
        targets: this.$refs['hand-container'],
        rotateZ: 0,
        duration: 1000,
          easing: 'easeOutBack'
      }, '-=100')
      .add({ // rest hand
        targets: this.$refs['hand-path'],
        d: this.midHand,
        duration: 1000,
        delay: 0,
        easing: 'easeOutCubic'
      }, '-=1000');
    },

    pauseAnimation() {
      this.timeline
      .add({
        targets: this.$refs['hand-container'],
        translateX: [-40, 0],
        translateY: -4,
        rotateZ: [-360, 10],
        duration: 800,
        delay: 600,
        easing: 'easeOutCubic'
      })
      .add({ //down hand
        targets: this.$refs['hand-path'],
        d: this.downHand,
        duration: 800,
        delay: 0,
        easing: 'easeOutCubic'
      }, '-=600')
      .add({ // rest rotation
        targets: this.$refs['hand-container'],
        rotateZ: 0,
        duration: 600,
        easing: 'easeOutCubic'
      }, '-=100')
      .add({ // rest hand
        targets: this.$refs['hand-path'],
        d: this.midHand,
        duration: 600,
        delay: 0,
        easing: 'easeOutCubic'
      }, '-=600')
      .add({ // down rotation
        targets: this.$refs['hand-container'],
        rotateZ: 40,
        duration: 600,
        easing: 'easeOutCubic'
      }, '+=800')
      .add({ // down hand
        targets: this.$refs['hand-path'],
        d: this.downHand,
        duration: 600,
        delay: 0,
        easing: 'easeOutCubic'
      }, '-=600')
      .add({ // up rotation
        targets: this.$refs['hand-container'],
        rotateZ: -40,
        duration: 600,
        easing: 'easeOutCubic'
      }, '-=100')
      .add({ // up hand
        targets: this.$refs['hand-path'],
        d: this.upHand,
        duration: 600,
        delay: 0,
        easing: 'easeOutCubic'
      }, '-=600')
      .add({ // rest rotation
        targets: this.$refs['hand-container'],
        rotateZ: 0,
        duration: 1000,
          easing: 'easeOutBack'
      }, '-=100')
      .add({ // rest hand
        targets: this.$refs['hand-path'],
        d: this.midHand,
        duration: 1000,
        delay: 0,
        easing: 'easeOutCubic'
      }, '-=1000');
    },

    extraAnimation() {
      this.timeline2
      .add({ // down rotation
        targets: this.$refs['hand-container'],
        rotateZ: 24,
        duration: 600,
        easing: 'easeOutCubic'
      }, '+=100' )
      .add({ // down hand
        targets: this.$refs['hand-path'],
        d: this.downHand,
        duration: 600,
        delay: 0,
        easing: 'easeOutCubic'
      }, '-=600')
      .add({ // up rotation
        targets: this.$refs['hand-container'],
        rotateZ: -24,
        duration: 600,
        easing: 'easeOutCubic'
      }, '-=100')
      .add({ // up hand
        targets: this.$refs['hand-path'],
        d: this.upHand,
        duration: 600,
        delay: 0,
        easing: 'easeOutCubic'
      }, '-=600')
      .add({ // down rotation
        targets: this.$refs['hand-container'],
        rotateZ: 16,
        duration: 600,
        easing: 'easeOutCubic'
      }, '-=100')
      .add({ // down hand
        targets: this.$refs['hand-path'],
        d: this.downHand,
        duration: 600,
        delay: 0,
        easing: 'easeOutCubic'
      }, '-=600')
      .add({ // rest rotation
        targets: this.$refs['hand-container'],
        rotateZ: 0,
        duration: 1000,
          easing: 'easeOutBack'
      }, '-=100')
      .add({ // rest hand
        targets: this.$refs['hand-path'],
        d: this.midHand,
        duration: 1000,
        delay: 0,
        easing: 'easeOutCubic'
      }, '-=1000');
    }
  }
}

</script>

<style lang="sass">
@import "../../styles/variables.sass"
@import "../../styles/mixins.sass"

.hand-button
  @include button-override
  padding: 0
  position: relative
  transform-origin: 0 100%
  transform: scale(0.64)
  &::after
    content: ' '
    position: absolute
    z-index: 1
    width: 1px
    height: 1px
    left: 36%
    top: 42%
    border-radius: 50%
    background: $pink
    box-shadow: 0 0 0.64em 0.32em rgba($pink, 0.76)
    filter: opacity(0%)

.hand-button.animate::after
  animation: handGlow 6s 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86)
  transition: filter 0.6s ease

.hand-button.animate:hover::after
  filter: opacity(100%)

@keyframes handGlow
  0%
    transform: translateX(-48px) scale(0.5)
    filter: opacity(0%)

  13%
    transform: translateX(0) scale(1)
    filter: opacity(100%)

  100%
    transform: translateX(0) scale(1)
    filter: opacity(0%)

#hand-container
  cursor: pointer
  position: relative
  bottom: 38px
  transform-origin: 29px 82px
  display: inline-block
  vertical-align: middle
  transform: translateX(-40px) rotateZ(-360deg)

</style>
