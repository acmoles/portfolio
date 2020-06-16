<template>
  <section class="page-nav about-nav background-noise">

    <div class="container is-fullhd content">

      <div class="page-nav-column columns">
        <button class="column action">
          <div class="background background-noise"></div>
          <div class="text-group">
            <h2 class="item-title">Get in touch <WavingHand/></h2>
            <p class="small-title">I’m glad you dropped by. I’d love to chat about design, technology, startups or opportunities. Shoot me a message and we <span class="no-wrap">can work</span> something out.</p>
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
    .item-title
      display: inline-flex
      align-items: center
    .action
      @include button-override
      text-align: left
      cursor: pointer
      .small-title
        color: $extraDarkSmoke
        opacity: 1
    .photo
      &::after
        content: ' '
        display: block
        padding-bottom: 100%
      .image
        position: relative
        margin-top: 0
        width: 100%
        @media screen and (min-width: $desktop)
          width: 20em
          left: 2px
      .background
        background-color: $steel
        position: absolute
        top: 0
        bottom: 0
        width: 50vw
        border-left: 2px solid $black

  @media screen and (max-width: $desktop)
    .page-nav.about-nav, .page-nav.about-nav .container
      height: auto

    .page-nav.about-nav
      .photo .background
        display: none
      .column.action
        padding-top: 3em

    .photo
      padding-top: 1.25em



</style>
