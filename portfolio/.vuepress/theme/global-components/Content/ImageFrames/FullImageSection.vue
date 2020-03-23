<template>
    <section class="section is-medium">
      <div class="container is-fullhd">
        <div class="figure-container max-80">
          <figure class="image is-16by9 zoom-wrapper">

          <img data-src="/images/wesen/grid.jpg" loading="lazy" class="lazyload" width="1920" height="1080">

          </figure>
          <figcaption>
            Photography credit: toucanBox Creative Team
          </figcaption>
        </div>
      </div>
    </section>
</template>

<script>

import ExternalIcon from '@theme/components/icons/ExternalIcon.vue'

export default {

  components: { ExternalIcon },

  props: {
    label: String
  },

  computed: {
  },

  mounted() {
  },

  methods: {
  }
}

</script>

<style lang="sass">
  @import "../../../styles/variables.sass"
  @import "../../../styles/mixins.sass"


</style>
