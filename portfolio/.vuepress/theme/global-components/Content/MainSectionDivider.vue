<template>
  <section class="section divider is-large project-card" :class="[background]" :id="title">
    <div class="container is-fullhd content">
      <p class="small-title">{{ aside }}</p>
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<script>

export default {

  props: {
    aside: String,
    title: String,
  },

  computed: {
    background () {
      return this.$page.frontmatter.background
    },
  }

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .project-card .content h1
    margin: 0

  .section.divider::after, .section.divider::before
    content: ' '
    position: absolute
    width: 100%

  .section.divider::after
    height: 4em
    background-image: linear-gradient(0deg, rgba($pitch,0.00) 0%, rgba($pitch,0.42) 60%, $pitch 100%)
    bottom: -4em
    opacity: 0.16

  .section.divider::before
    height: 2em
    background-image: linear-gradient(0deg, $pitch 0%, rgba($pitch,0.42) 20%, rgba($pitch,0.00) 100%)
    top: -2em
    opacity: 0.06


</style>
