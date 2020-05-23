<template>
  <section class="section is-large background-noise quote-section">
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

}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  .quote-section
    background-color: rgba($pitch, 0.2)
</style>
