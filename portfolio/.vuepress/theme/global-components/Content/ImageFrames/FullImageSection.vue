<template>
  <section class="section" :class="padding">
      <div class="container is-fullhd">

        <div v-if="content" class="columns">
          <div class="column is-two-thirds content">
            <slot name="content"></slot>
            <br>
          </div>
        </div>

        <div class="figure-container max-80">
          <figure class="image" :class="$imageClass">
            <img class="lazyload medium-zoom" :data-src="url" :alt="alt">
          </figure>
          <figcaption>
            {{ caption }}
          </figcaption>
        </div>

      </div>
    </section>
</template>

<script>

export default {

  props: {
    url: String,
    alt: String,
    caption: String,
    content: Boolean,
    padding: String,
    imageClass: String,
  },
}

</script>

<style lang="sass">
  @import "../../../styles/variables.sass"
  @import "../../../styles/mixins.sass"


</style>
