<template>
  <div class="home-intro">
      <h1 class="title is-spaced home-title">Hello <WavingHand/></h1>
      <p class="small-title home-subtitle">
          <strong>Anthony Moles</strong> is a multidisciplinary designer creating useful and playful experiences centred on people.
          <!-- <router-link to="/about"><ArrowIcon/></router-link> -->
          <!-- <router-link to="/about">Anthony Moles</router-link> -->
      </p>
  </div>
</template>

<script>
import WavingHand from '@theme/components/home/WavingHand.vue'
import ArrowIcon from '@theme/components/icons/ArrowIcon.vue'

export default {

  components: { WavingHand, ArrowIcon }

}

</script>

<style scoped lang="sass">

  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  // .layout.home::before
  //   @include pseudo-full
  //   height: 32em
  //   z-index: 0
  //   background: linear-gradient(345deg, rgba($pink,0) 0%, rgba($pink,0) 50%, rgba($pink,0.24) 100%)

  .home-intro
    padding: 7em 0 3em 0
    display: grid
    grid-template-columns: repeat(3, 1fr)
    column-gap: $columnGap
    h1.home-title, .home-subtitle
      margin: 0 0 0 1.5rem
    h1.home-title
      font-size: 5em
      line-height: 1
    .home-subtitle
      margin-top: 0.75em
      grid-column-start: 2
      grid-column-end: 4
      width: 80%
      a
        color: $pink
      .icon
        position: relative
        top: 0.1em
        left: 0.1em
        filter: opacity(100%)
        @include opacity-filter-transition
</style>
