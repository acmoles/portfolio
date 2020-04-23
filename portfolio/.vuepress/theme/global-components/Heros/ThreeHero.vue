<template>
<div ref="presentation" class="presentation"></div>
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

    import('../../application/three/threeComposition.js').then(module => {
      this.threeComposition = new module.ThreeComposition(this.$refs.presentation)

      this.threeComposition.addEventListener('comp-loaded', () => {
        console.log('three scene ready')
        this.doLoad()
      })

      this.threeComposition.init()
    })

  },

  methods: {

  },
}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  .presentation
    height: 100%
    width: 100%
    position: relative

</style>
