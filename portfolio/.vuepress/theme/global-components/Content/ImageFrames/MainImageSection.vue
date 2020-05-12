<template>
  <section class="section" :class="padding">
      <div class="container is-fullhd">

        <div v-if="content" class="columns">
          <div class="column is-two-thirds content">
            <slot name="content"></slot>
            <br>
          </div>
        </div>

        <div class="columns">

          <div class="column is-two-thirds">
            <figure class="image" :class="$imageClass">
              <img class="lazyload medium-zoom" :data-src="url" data-zoom-src="/images/homepage/art-lebedev-tile-2x.jpg" :alt="alt">
              <!-- <LazyImage :src="url" :alt="alt" :iframe="false" :zoom="true"/> -->
            </figure>
            <figcaption v-if="!aside">
              {{ caption }}
            </figcaption>
          </div>

          <div v-if="aside" class="column content">
            <slot name="aside"></slot>
          </div>

        </div>

      </div>
    </section>
</template>

<script>
// import LazyImage from '@theme/global-components/content/Lazyimage.vue'

export default {

  // components: { LazyImage },

  props: {
    url: String,
    alt: String,
    caption: String,
    content: Boolean,
    aside: Boolean,
    padding: String,
    imageClass: String,
  },

  computed: {
    $imageClass () {
      if (this.imageClass) {
        return this.imageClass
      } else {
        return 'is-16by9'
      }
    }
  }

}

</script>

<style lang="sass">
  @import "../../../styles/variables.sass"
  @import "../../../styles/mixins.sass"


</style>
