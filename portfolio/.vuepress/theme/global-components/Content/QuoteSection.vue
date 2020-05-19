<template>
  <section class="section is-large project-card noise-light" :class="[background]">
    <div class="container is-fullhd content">
      <p class="subtitle">{{ quote }}</p>
      <p class="attribute">{{ attribute }}</p>
    </div>
  </section>
</template>

<script>

export default {

  props: {
    quote: String,
    attribute: String,
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

</style>
