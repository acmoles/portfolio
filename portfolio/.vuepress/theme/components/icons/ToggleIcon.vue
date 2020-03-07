<template>
    <button
      @click="goDown()"
      class="toggle-arrow-container"
    >
        <svg
          :style="{ filter: opacityString }"
          height="24"
          viewBox="0 0 40 24"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
        <path
          v-bind:d="'m4 ' + startY + ' 16 ' + centreY + ' 16 ' + endY"
          fill="none"
          stroke-linejoin="round"
          stroke-width="4"
        />
        </svg>
    </button>
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

const startYbase = 12;
const centreYbase = 0;
const endYbase = 0;

export default {

  data () {
    return {
        direction: null,
        opacityString: 'opacity(100%)',
        startY: startYbase,
        centreY: centreYbase,
        endY: endYbase,
        startTime: null
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
  },

  watch: {
    pageLoadingStatus (latest, last) {
      // TODO tidy animation logic and use animejs
      if (latest === 'finished') {
        setTimeout(() => {
          this.toggle('down')
        }, 1000)
      }
    }
  },

  mounted () {
    this.$nextTick(() => {

      updateOnScroll(0, (getViewport('y') / 2), progress => {
        this.opacityString = 'opacity(' + (1 - progress)*100 + '%)'
      })

    })
  },

  methods: {
    goDown() {
      console.log('click')
      this.toggle('none')
      window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
      })
    },
    toggle(command) {
        if (command === 'down') {
            // down true, content active
            this.startAnimation(startYdown, centreYdown, endYdown);
        } else if (command === 'up') {
            // down false (up), content inactive
            this.startAnimation(startYup, centreYup, endYup);
        } else {
            this.startAnimation(startYbase, centreYbase, endYbase);
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
    path
      stroke: lighten($slate, 10%)
</style>
