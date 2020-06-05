<template>
  <section class="page-nav about-nav background-noise">

    <div class="container is-fullhd content">

      <div class="page-nav-column columns">
        <button class="column action">
          <div class="background background-noise"></div>
          <div class="text-group">
            <h2 class="item-title">Get in touch <WavingHand/></h2>
            <p class="small-title">I’m glad you dropped by. I’d love to chat about design, technology, startups or opportunities. Shoot me an email and we <span class="no-wrap">can work</span> something out.</p>
          </div>
        </button>
        <div class="column photo is-narrow">
          <div class="background background-noise"></div>
          <figure class="image is-square">
            <img class="lazyload" data-src="/images/about/me-photo.jpg" alt="Photo of me">
          </figure>
        </div>
      </div>

    </div>

  </section>
</template>

<script>

import WavingHand from '@theme/components/home/WavingHand.vue'

export default {

  components: { WavingHand },

  data () {
    return {
      title: 'Projects'
    }
  },

  computed: {
    projects () {
      return true
    },
  },

  mounted() {
  },

  methods: {
  }
}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .page-nav.about-nav
    .page-nav-column
      top: 0
    .action
      @include button-override
      text-align: left
      cursor: pointer
      .small-title
        color: $extraDarkSmoke
        filter: opacity(100%)
    .photo
      &::after
        content: ' '
        display: block
        padding-bottom: 100%
      .image
        margin-top: 0
        width: 20em
        position: relative
        left: 2px
      .background
        background-color: $steel
        position: absolute
        top: 0
        bottom: 0
        width: 50vw
        border-left: 2px solid $black

</style>
