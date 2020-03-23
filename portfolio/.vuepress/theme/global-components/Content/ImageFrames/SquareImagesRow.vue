<template>
  <section class="section is-medium">
    <div class="container is-fullhd">
      <div class="columns">

        <div
          class="column"
          v-for="(image, i) in images"
        >
          <figure class="image is-square zoom-wrapper">
            <img :data-src="image.url" :alt="image.alt" loading="lazy" class="lazyload" width="256" height="256">
          </figure>
          <figcaption>
            {{ image.caption }}
          </figcaption>
        </div>

      </div>
    </div>
  </section>
</template>

<script>


export default {

  props: {
    images: Array,
  },

}

</script>

<style lang="sass">
  @import "../../../styles/variables.sass"
  @import "../../../styles/mixins.sass"


</style>
