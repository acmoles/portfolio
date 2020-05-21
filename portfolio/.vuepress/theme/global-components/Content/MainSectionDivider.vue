<template>
  <section class="section is-large project-card" :class="[background]">
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
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  .project-card .content h1
    margin-top: 0


</style>
