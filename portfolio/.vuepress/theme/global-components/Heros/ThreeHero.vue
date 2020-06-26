<template>
  <div ref="presentation" class="presentation"></div>
</template>

<script>

import { loadableHero } from '@theme/mixins/loadableHero.js'
// import { ThreeComposition } from '../application/three/threeComposition.js'


// TODO maybe left align in column?

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

      this.threeComposition.addEventListener('comp-loaded', () => {
        console.log('three scene ready')
        this.doLoad()
      })

      this.threeComposition.init()
    })

  },

  beforeDestroy() {
    this.threeComposition.destroy()
    console.log('destroyed')
  },
}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .presentation
    height: 44em
    canvas
      position: absolute
      top: 0
      left: 0

</style>
