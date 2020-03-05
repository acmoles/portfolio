<template>
  <transition name="fade">
    <button v-show="show" @click="$emit('toggle-click')" class="toggle-arrow-container">
        <svg height="24" viewBox="0 0 32 24" width="32" xmlns="http://www.w3.org/2000/svg">
        <path
          v-bind:d="'m3 ' + startY + ' 13 ' + centreY + ' 13 ' + endY"
          fill="none"
          stroke="#8492A6"
          stroke-linejoin="round"
          stroke-width="2"
        />
        </svg>
    </button>
  </transition>
</template>

<script>
// import anime from 'animejs'
import updateOnScroll from 'uos'
import { getScrollTop, getViewport } from '../../util'


const startYdown = 10;
const centreYdown = 4;
const endYdown = -4;
const startYup = 14;
const centreYup = -4;
const endYup = 4;
const duration = 1500;

export default {

  props: {
    down: Boolean,
  },
  data () {
    return {
        show: true,
        startY: 12,
        centreY: 0,
        endY: 0,
        startTime: null
    }
  },
  watch: {
    down (boolean) {
        this.toggle(boolean);
    },
  },

  mounted () {
    this.$nextTick(() => {
      this.toggle(this.down)

      updateOnScroll(0, 1, progress => {
        if (getScrollTop() > (getViewport('y') / 2)) {
          this.show = false
        } else {
          this.show = true
        }
      })
    })
  },

  methods: {
    toggle(boolean) {
        if (boolean) {
            // down true, content active
            this.startAnimation(startYdown, centreYdown, endYdown);
            console.log('inactive - active');
        } else {
            // down false (up), content inactive
            this.startAnimation(startYup, centreYup, endYup);
            console.log('active - inactive');
        }
    },
    startAnimation(targetStartY, targetCentreY, targetEndY) {
        this.startTime = performance.now();
        window.requestAnimationFrame(
            () => { this.update(targetStartY, targetCentreY, targetEndY) }
        );
    },
    update(targetStartY, targetCentreY, targetEndY) {
        let timeSinceStart = (performance.now() - this.startTime);
        let l = Math.min(timeSinceStart / duration, 1);
        // it lerps the lerped values - but looks ok :)
        this.startY = this.lerp(this.startY, targetStartY, l);
        this.centreY = this.lerp(this.centreY, targetCentreY, l);
        this.endY = this.lerp(this.endY, targetEndY, l);
        if (l < 0.95) {
            window.requestAnimationFrame(
                () => { this.update(targetStartY, targetCentreY, targetEndY) }
            );
        }
    },
    lerp(v0, v1, t) {
        // cosine easing
        let t2 = (1-Math.cos(t*Math.PI))/2;
        return(v0*(1-t2)+v1*t2);
    },
  }
  }
</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  .toggle-arrow-container
    @include button-override
    @include opacity-filter-transition
    &:hover
      filter: $hover-filter
    &:active
      filter: $active-filter
    cursor: pointer
    display: flex
    justify-content: center
    position: absolute
    width: 100%
    height: 1.5em
    left: 0
    top: -1px
</style>
