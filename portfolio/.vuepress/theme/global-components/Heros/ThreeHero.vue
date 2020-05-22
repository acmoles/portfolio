<template>
  <div class="container is-fullhd presentation-wrapper">
    <div class="columns visual-columns">
      <div class="column is-one-third">
        <div ref="presentation" class="presentation"></div>
      </div>
    </div>
  </div>
</template>

<script>

import { loadableHero } from '../../mixins/loadableHero.js'
// import { ThreeComposition } from '../application/three/threeComposition.js'

export default {

  mixins: [loadableHero],

  data () {
    return {
      threeComposition: null
    }
  },

  computed: {
  },

  mounted() {

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
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  .presentation-wrapper
    height: 100%

  .columns.visual-columns
    height: 100%
    justify-content: flex-end

  .presentation
    padding-top: 188%
    width: 920px
    position: relative
    margin-left: 50%
    transform: translateX(-50%)
    canvas
      position: absolute
      top: 0
      left: 0

</style>
