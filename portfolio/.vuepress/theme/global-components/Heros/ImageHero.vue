<template>
    <img ref="image" :src="src" :alt="alt">
</template>

<script>

// TODO enable floating png images on background

// :style="{backgroundImage: backgroundSrc}"
// :class="{'noise-light': noise}"

import { loadableHero } from '../../mixins/loadableHero.js'

export default {

  mixins: [loadableHero],

  props: {
    src: String,
    alt: String,
    noise: Boolean
  },

  computed: {
    backgroundSrc () {
      // TODO not used - remove?
      return 'url("' + this.src + '")'
    }
  },

  mounted() {
    this.loadImage(this.name)
  },

  methods: {
    loadImage(name) {
      this.$refs['image'].onload = () => {
        this.doLoad()
      };
      this.$refs['image'].onerror = (err) => {console.error(err)}
    }
  }
}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

</style>
