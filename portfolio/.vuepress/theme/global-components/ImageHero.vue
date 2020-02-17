<template>
  <div
    class="project-background-image"
    :class="[imageKey]"
  >
    <img :ref="imageKey" v-if="imageKey === 'wesen'" src="~@assets/images/content/wesen/grid.jpg" alt="">
    <img :ref="imageKey" v-else-if="imageKey === 'ecosia'" src="~@assets/images/content/wesen/grid.jpg" alt="">
    <img :ref="imageKey" v-else-if="imageKey === 'stompy-robot'" src="~@assets/images/content/wesen/grid.jpg" alt="">
    <img :ref="imageKey" v-else-if="imageKey === 'blkbrd'" src="~@assets/images/content/wesen/grid.jpg" alt="">
    <img :ref="imageKey" v-else-if="imageKey === 'toucan-rnd'" src="~@assets/images/content/wesen/grid.jpg" alt="">
    <img :ref="imageKey" v-else-if="imageKey === 'toucan'" src="~@assets/images/content/wesen/grid.jpg" alt="">
    <img :ref="imageKey" v-else-if="imageKey === 'makielab'" src="~@assets/images/content/wesen/grid.jpg" alt="">
    <img :ref="imageKey" v-else-if="imageKey === 'random'" src="~@assets/images/content/wesen/grid.jpg" alt="">
    <img :ref="imageKey" v-else-if="imageKey === 'lego'" src="~@assets/images/content/wesen/grid.jpg" alt="">
    <img :ref="imageKey" v-else-if="imageKey === 'als'" src="~@assets/images/content/wesen/grid.jpg" alt="">
  </div>
</template>

<script>

import { loadableHero } from '../mixins/loadableHero.js'

export default {

  mixins: [loadableHero],

  props: {
    imageKey: {
      required: true
    }
  },

  mounted() {
    this.loadImage(this.imageKey)
  },

  methods: {
    loadImage(imageKey) {
      this.$refs[imageKey].onload = () => {
        this.doLoad()
      };
      this.$refs[imageKey].onerror = (err) => {console.error(err)}
    }
  }
}

</script>

<style lang="sass">
  @import "../styles/variables.sass"
  @import "../styles/mixins.sass"

  .project-background-image
    @include cover-screen
    background-size: cover
    background-repeat: no-repeat
    background-position: center
    img
      visibility: hidden

    &.wesen
      background-image: url("~@assets/images/content/wesen/grid.jpg")
    &.ecosia
      background-image: url("~@assets/images/content/wesen/grid.jpg")
    &.stompy-robot
      background-image: url("~@assets/images/content/wesen/grid.jpg")
    &.blkbrd
      background-image: url("~@assets/images/content/wesen/grid.jpg")
    &.toucan-rnd
      background-image: url("~@assets/images/content/wesen/grid.jpg")
    &.toucan
      background-image: url("~@assets/images/content/wesen/grid.jpg")
    &.makielab
      background-image: url("~@assets/images/content/wesen/grid.jpg")
    &.random
      background-image: url("~@assets/images/content/wesen/grid.jpg")
    &.lego
      background-image: url("~@assets/images/content/wesen/grid.jpg")
    &.als
      background-image: url("~@assets/images/content/wesen/grid.jpg")


</style>
