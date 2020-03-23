<template>
    <section class="section">
      <div class="container is-fullhd">

        <div class="columns">

          <div class="column is-two-thirds">
            <figure class="image is-16by9 zoom-wrapper">
              <img :data-src="url" :alt="alt" loading="lazy" class="lazyload" width="1920" height="1080">
            </figure>
            <figcaption>
              {{ caption }}
            </figcaption>
          </div>

          <div class="column content">
            <slot></slot>
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
  }

}

</script>

<style lang="sass">
  @import "../../../styles/variables.sass"
  @import "../../../styles/mixins.sass"


</style>
