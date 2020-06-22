<template>
  <section class="section full-image">
    <figure class="image" :class="imageClass ? imageClass : 'is-2by1'">
      <img class="lazyload" :data-src="url" :alt="alt">
    </figure>
  </section>
</template>

<script>

export default {

  props: {
    url: String,
    alt: String,
    imageClass: String,
  }

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .section.full-image
    padding: 0

</style>
