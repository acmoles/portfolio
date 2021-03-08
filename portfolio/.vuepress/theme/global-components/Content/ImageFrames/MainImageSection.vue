<template>
  <section class="section" :class="padding">
      <div class="container is-fullhd">

        <div v-if="hasContent" class="columns">
          <div class="column is-two-thirds content" :class="rag">
            <slot name="content"></slot>
            <br>
          </div>
        </div>

        <div class="columns">

          <div class="column is-two-thirds">
            <figure class="image parent-loading" :class="$imageClass">
              <Iframer v-if="iframe" :url="url"></Iframer>
              <img v-else class="lazyload medium-zoom" :data-src="url" :alt="alt">
            </figure>
            <figcaption v-if="!aside">
              {{ caption }}
            </figcaption>
          </div>

          <div v-if="aside" class="column content" :class="columnOffset">
            <slot name="aside"></slot>
          </div>

        </div>

      </div>
    </section>
</template>

<script>

import Iframer from '@theme/global-components/Content/ImageFrames/Iframer.vue'

export default {

  components: { Iframer },

  props: {
    url: String,
    alt: String,
    caption: String,
    aside: Boolean,
    padding: String,
    imageClass: String,
    iframe: Boolean,
    columnOffset: String,
    rag: String
  },

  computed: {
    $imageClass () {
      if (this.imageClass) {
        return this.imageClass
      } else {
        return 'is-16by9'
      }
    },
    hasContent () {
      return !!this.$slots['content']
    },
  }


}

</script>

<style lang="sass">
  @import "../../../styles/variables.sass"
  @import "../../../styles/mixins.sass"


</style>
