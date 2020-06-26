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


</style>
