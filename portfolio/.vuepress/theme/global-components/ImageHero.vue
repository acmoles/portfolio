<template>
  <figure
    class="project-background-image image is-16by9"
    :class="[name, {'noise-light': noise}]"
  >
    <img :ref="name"  :src="src" :alt="alt">
  </figure>
</template>

<script>

// TODO enable floating png images on background

//     :style="{backgroundImage: backgroundSrc}"

import { loadableHero } from '../mixins/loadableHero.js'

export default {

  mixins: [loadableHero],

  props: {
    name: String,
    noise: Boolean,
    src: String,
    alt: String,
    floating: Boolean
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

  .project-background-image
    width: 100%
    // @include cover-screen
    // background-size: cover
    // background-repeat: no-repeat
    // background-position: center
    // img
    //   visibility: hidden

    &.wesen

    &.ecosia
      background-color: $orange
    &.stompy-robot

    &.blkbrd

    &.toucanbox-rnd

    &.toucanbox
      background-color: $blue
    &.makielab

    &.random

    &.lego

    &.als



</style>
