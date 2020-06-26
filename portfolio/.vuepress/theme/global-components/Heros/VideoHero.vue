<template>
<div class="project-background-video"></div>
</template>

<script>

import { loadableHero } from '../../mixins/loadableHero.js'

export default {

  mixins: [loadableHero],

  data () {
    return {
      title: 'Video'
    }
  },

  computed: {
  },

  mounted() {
    this.doLoad()
  },

  methods: {
  }
}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

</style>
