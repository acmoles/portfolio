<template>
  <section class="section full-image">
    <figure class="image is-2by1">
      <img class="lazyload" :data-src="url" :alt="alt">
    </figure>
  </section>
</template>

<script>

export default {

  props: {
    url: String,
    alt: String,
  }

}

</script>

<style lang="sass">
  @import "../../../styles/variables.sass"
  @import "../../../styles/mixins.sass"

  .section.full-image
    padding: 0

</style>
