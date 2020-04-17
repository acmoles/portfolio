<template>
    <img :ref="name" :src="src" :alt="alt">
</template>

<script>

// TODO enable floating png images on background

//     :style="{backgroundImage: backgroundSrc}"

import { loadableHero } from '../mixins/loadableHero.js'

export default {

  mixins: [loadableHero],

  props: {
    name: String,
    src: String,
    alt: String
  },

  computed: {
    backgroundSrc () {
      return 'url("' + this.src + '")'
    }
  },

  mounted() {
    this.loadImage(this.name)
  },

  methods: {
    loadImage(name) {
      this.$refs[name].onload = () => {
        this.doLoad()
      };
      this.$refs[name].onerror = (err) => {console.error(err)}
    }
  }
}

</script>

<style lang="sass">
  @import "../styles/variables.sass"
  @import "../styles/mixins.sass"

</style>
