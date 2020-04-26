<template>
  <div
    ref="parent"
    class="visual project-card"
    :class="[background, {'noise-light': noise}]">
    <div
      ref="parallax"
      class="parallax"
      :class="{'initial-parallax': readyForInitial}"
      :style="{transform: transform}">
      <slot name="visual-background"></slot>
    </div>
  </div>
</template>

<script>

import updateOnScroll from 'uos'
// import debounce from 'lodash.debounce'
import { getScrollTop, getViewport } from '../../util'

export default {

  props: {
    noise: Boolean
  },

  computed: {
    background () {
      return this.$page.frontmatter.background
    },
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
  },

  data () {
    return {
      el: null,
      transform: `translate3d(0, 0 ,0)`,
      readyForInitial: false,
    }
  },

  mounted () {
    this.el = this.$refs.parallax

    updateOnScroll(0, 1, progress => {
      window.requestAnimationFrame(() => {
        if (this.isInView(this.el) && !this.readyForInitial) {
          this.animateElement()
        }
      })
    })

    this.$forceNextTick(() => {
      if (getScrollTop() === 0) {
        this.transform = `translate3d(0, 0, 0) scale3d(1.025, 1.025, 1)`
      }
    })

  },

  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === 'finished') {
        this.readyForInitial = true
        this.$nextTick(() => {
          this.transform = `translate3d(0, 0, 0) scale3d(1, 1, 1)`
          setTimeout(() => {
            this.readyForInitial = false
            // TODO remove initial
          }, 1900)
        })
      }
    }
  },

  methods: {
    animateElement () {
      let animationValue = (getScrollTop() * 0.2) // speed factor
      if (animationValue >= 0) {
        this.transform = `translate3d(0, ${animationValue}px ,0)`
      }
    },
    isInView (el) {
      // TODO // OPTIMIZE: with IntersectionObserver
      let rect = el.getBoundingClientRect()
      return (
        rect.bottom >= 0 &&
        rect.top <= getViewport('y')
      )
    },
  }


}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  .visual.project-card
    height: 100vh
    width: 100%
    position: absolute
    overflow: hidden
    .parallax
      left: 0
      position: absolute
      will-change: transform
      right: 0
      top: 0
      bottom: 0
      &.initial-parallax
        transition: transform 1.8s $projectWipeTransition
        transition-delay: $base-project-delay - 0.1s
    img
      object-fit: cover
      width: 100%
      max-width: none
      height: 100%
      // top: 0px
      // right: 0px
      //
      // // width: auto
      // // height: 100vh
      // //
      // // max-height: none
      // // max-width: none
      //
      // min-height: 100%
      // min-width: 100%


</style>
