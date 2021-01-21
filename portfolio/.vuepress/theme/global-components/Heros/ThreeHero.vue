<template>
  <div ref="presentation" class="presentation"></div>
</template>

<script>

import { loadableHero } from '@theme/mixins/loadableHero.js'
// import { ThreeComposition } from '../application/three/threeComposition.js'

import { EventTarget } from 'event-target-shim/dist/event-target-shim.mjs';

export default {

  mixins: [loadableHero],

  data () {
    return {
      threeComposition: null
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
    window () {
      return this.$store.state.window
    },
  },

  watch: {
    window (latest, last) {
      if (this.threeComposition) {
        this.threeComposition.onWindowResize()
      }
    }
  },

  mounted() {
    // this.doLoad()
    import('@application/three/threeComposition.js').then(module => {
      this.threeComposition = new module.ThreeComposition(this.$refs.presentation)

      var promise = new Promise((resolve, reject) => {
        this.threeComposition.addEventListener('comp-loaded', () => {
          this.doLoad()
        })
        resolve()
      })

      promise.then(() => {
        this.threeComposition.init()
      })
    })

  },

  beforeDestroy() {
    this.threeComposition.destroy()
    // console.log('destroyed')
  },
}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .presentation:not(.abstract)
    position: relative
    height: 100%
    top: 12em
    @media screen and (min-width: $tablet)
      top: 0
    canvas
      position: absolute
      top: 0
      left: 0

</style>
