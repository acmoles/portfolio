<template>
  <section class="section" :class="padding">
      <div class="container is-fullhd">

        <div class="columns">

          <div class="column is-two-thirds content">
            <slot></slot>
          </div>

          <div class="column">
            <figure class="image" :class="$imageClass">
              <img class="lazyload medium-zoom" :data-src="url" :alt="alt">
            </figure>
            <figcaption>
              {{ caption }}
            </figcaption>
          </div>

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
    padding: String,
    imageClass: String,
  }

}

</script>

<style lang="sass">
  @import "../../../styles/variables.sass"
  @import "../../../styles/mixins.sass"


</style>
