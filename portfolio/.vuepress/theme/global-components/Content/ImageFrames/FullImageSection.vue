<template>
  <section class="section full-image">
    <figure class="image" :class="imageClass ? imageClass : 'is-2by1'">
      <img class="lazyload" :data-src="url" :alt="alt">
    </figure>
    <div v-if="hasCaption" class="container is-fullhd">
      <figcaption><slot name="caption"></slot></figcaption>
    </div>
  </section>
</template>

<script>

export default {

  // TODO responsive image sizes

  props: {
    url: String,
    alt: String,
    imageClass: String,
  },

  computed: {
    hasCaption () {
      return !!this.$slots['caption']
    },
  }

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .section.full-image
    padding: 0

</style>
