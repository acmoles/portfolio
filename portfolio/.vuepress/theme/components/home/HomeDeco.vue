<template>
  <div ref="canvas" class="canvas"></div>
</template>

<script>
import updateOnScroll from 'uos'

export default {

  data () {
    return {
        initialized: false
    }
  },

  mounted () {
    this.$nextTick(() => {

      updateOnScroll(0, 1, progress => {
        if (progress > 0.8 && !this.initialized) {
          this.initialized = true
          this.startBackground()
        }
      })

    })
  },

  methods: {
    startBackground() {
      import('../../application/pixi/background.js').then(module => {
        this.background = new module.Background(this.$refs.canvas)

        this.background.appendCanvas(() => {
          // background ready callback
          this.background.addFirstBatch()
        })

      })
    }
  }

}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  .canvas
    @include cover-screen
    height: 32em
    bottom: 0
    top: auto
    filter: opacity(25%)

    &::after
      @include pseudo-full
      top: -2em
      height: 8em
      z-index: 0
      background: linear-gradient(0deg, rgba($black,0) 0%, rgba($black,1) 75%, rgba($black,1) 100%)
    //   background-color: rgba(0,0,0, 0.8)
    //   backdrop-filter: blur(10px) opacity(100%)
    //   --webkit-backdrop-filter: blur(10px) opacity(100%)


    &.blur
      canvas
        filter: blur(0.75em)
        // @media screen and (min-width: $desktop)
        //   filter: blur(1em)
        // @media screen and (min-width: $largeformat)
        //   filter: blur(1.25em)
</style>
