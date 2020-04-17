<template>
  <div class="visual project-card noise-light" :class="background">
    <slot name="visual-background"></slot>
  </div>
</template>

<script>

export default {

  computed: {
    // TODO make description slot pull from page metadata? Could also be used for SEO

    background () {
      return this.$page.frontmatter.background
    },
  }

}

</script>

<style lang="sass">
  @import "../styles/variables.sass"
  @import "../styles/mixins.sass"

  .visual.project-card
    height: 100vh
    margin-bottom: 8em
    position: absolute
    overflow: hidden

    img
      object-fit: cover
      max-width: none
      height: 100%
      // top: 0px
      // right: 0px
      //
      // // width: auto
      // // height: 100vh
      // //
      // // max-height: none
      // // max-width: none
      //
      // min-height: 100%
      // min-width: 100%


</style>
