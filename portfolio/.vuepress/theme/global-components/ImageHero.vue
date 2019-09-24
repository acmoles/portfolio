<template>
  <div class="hero">
    <h1 class="hero-title">{{ title }}</h1>
  </div>
</template>

<script>

import { loadableHero } from '../mixins/loadableHero.js'

export default {

  mixins: [loadableHero],

  data () {
    return {
      title: 'Image'
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

<style lang="stylus">
</style>
