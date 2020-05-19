<template>
  <div
    ref="parent"
    class="visual project-card"
    :class="[background, {'noise-light': noise}]">
    <div
      ref="parallax"
      class="parallax"
      :class="[{'in-view': visible}, {'appear-fade-up': animating && !fadeless}]"
      :style="{transform: transform}">
      <slot name="visual-background"></slot>
    </div>
  </div>
</template>

<script>

import updateOnScroll from 'uos'
// import debounce from 'lodash.debounce'
import { getScrollTop, getViewport } from '../../util'
import { fadeUpInLoad } from '@theme/mixins/fadeUpInLoad.js'

export default {

  props: {
    noise: Boolean,
    fadeless: Boolean
  },
  // TODO only do parallax and show div if needed (slot)
  // TODO some comps want to be present at first e.g. abstract

  mixins: [fadeUpInLoad],

  computed: {
    background () {
      return this.$page.frontmatter.background
    },
    hasSlot () {
      return !!this.$slots['visual-background']
    },
  },

  data () {
    return {
      el: null,
      transform: ``,
      oneTime: false,
      animating: true,
    }
  },

  mounted () {
    // if (this.hasSlot) {

      updateOnScroll(0, 1, progress => {
        window.requestAnimationFrame(() => {
          if (this.visible) {
            this.animateElement()
          }
        })
      })

      this.$nextTick(() => {

        this.el = this.$refs.parallax
        this.el.addEventListener('transitionend', () => {
          console.log('Transition ended - listener')
          this.animating = false
        })

      })

    // }
  },

  methods: {
    animateElement () {
      let animationValue = (getScrollTop() * 0.2) // speed factor
      if (animationValue >= 0) {
        this.transform = `translate3d(0, ${animationValue}px ,0)`
      }
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
      height: 100vh
      width: 100%
      position: absolute
      will-change: transform
      top: -24px

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

  html:not(.disable-motion)
    .parallax.appear-fade-up
      transition-delay: $base-project-delay + $project-wipe-time + $first-mover-delay + 0.4s
      transition-duration: 2s

</style>
