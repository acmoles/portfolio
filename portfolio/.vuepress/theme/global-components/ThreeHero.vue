<template>
<div class="project-background-three"></div>
</template>

<script>

import { loadableHero } from '../mixins/loadableHero.js'

export default {

  mixins: [loadableHero],

  data () {
    return {
      title: 'Three'
    }
  },

  computed: {
  },

  mounted() {
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
