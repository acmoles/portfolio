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
        <div
          class="column"
          v-for="(image, i) in images"
        >
          <figure class="image is-square">
            <LazyImage :src="image.url" :alt="image.alt" :iframe="image.iframe" x="256" y="256"/>
          </figure>
          <figcaption class="content">
            <slot v-if="image.slot" :name="image.slot"></slot>
            <template v-else>
              {{ image.caption }}
            </template>
          </figcaption>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

import LazyImage from '@theme/global-components/content/Lazyimage.vue'

export default {

  components: { LazyImage },

  props: {
    images: Array,
    padding: String,
    content: Boolean,
  },

}

</script>

<style lang="sass">
  @import "../../../styles/variables.sass"
  @import "../../../styles/mixins.sass"


</style>
