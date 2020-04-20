<template>
  <div ref="parent" class="visual project-card noise-light" :class="background">
    <div ref="parallax" class="parallax" :style="{transform: transform}">
      <slot name="visual-background"></slot>
    </div>
  </div>
</template>

<script>

import updateOnScroll from 'uos'
// import debounce from 'lodash.debounce'

export default {

  computed: {
    background () {
      return this.$page.frontmatter.background
    },
  },

  data () {
    return {
      el: null,
      transform: ''
    }
  },

  mounted () {
    this.el = this.$refs.parallax

    updateOnScroll(0, 1, progress => {
      window.requestAnimationFrame(() => {
        if (this.isInView(this.el)) {
          this.animateElement()
        }
      })
    })
  },

  methods: {
    animateElement () {
      // const parentHeight = this.$refs.parent.offsetHeight
      // const parallaxHeight = this.$refs.parallax.offsetHeight
      // const availableOffset = parallaxHeight - parentHeight
      const availableOffset = 96
      let animationValue = (window.pageYOffset * 0.15) // speed factor
      if (animationValue <= availableOffset && animationValue >= 0) {
        console.log('animating')
        this.transform = `translate3d(0, ${animationValue}px ,0)`
      }
    },
    isInView (el) {
      let rect = el.getBoundingClientRect()
      return (
        rect.bottom >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      )
    },
  }


}

</script>

<style lang="sass">
  @import "../styles/variables.sass"
  @import "../styles/mixins.sass"

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
    img
      object-fit: cover
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
