<template>
<div ref="presentation" class="project-background-three"></div>
</template>

<script>

import { loadableHero } from '../mixins/loadableHero.js'
import { ThreeComposition } from '../application/three/threeComposition.js'

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
    this.threeComposition = new ThreeComposition(this.$refs.presentation)

    this.threeComposition.addEventListener('comp-loaded', () => {
      console.log('loaded');
    })

    this.threeComposition.init()

    setTimeout(() => {
      this.doLoad()
    }, 100)

  },

  methods: {

  },
}

</script>

<style lang="sass">

</style>
