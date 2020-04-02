<template>
  <div
    class="home-intro"
    :class="[{'in-view': visible}, {'appear-fade-up': homeFadeUpMotion}]"
  >
    <div class="intro-container">
      <h1>Anthony Moles</h1>
      <p class="small-title">
          Multidisciplinary designer creating useful and playful experiences centred on people.
      </p>
    </div>
  </div>
</template>

<script>
import WavingHand from '@theme/components/home/WavingHand.vue'

import { fadeUpInLoad } from '@theme/mixins/fadeUpInLoad.js'

export default {
// <WavingHand/>
  // components: { WavingHand },

  mixins: [fadeUpInLoad],

  computed: {
    homeFadeUpMotion () {
      return this.$store.state.homeFadeUpMotion
    }
  }

}

</script>

<style scoped lang="sass">

  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  .home-intro
    padding: 6em 0 2.5em 0
    display: grid
    grid-template-columns: repeat(3, 1fr)
    column-gap: $columnGap
    .intro-container
      margin-left: 1.75em
      grid-column-start: 1
      grid-column-end: 3
      width: 80%
    .small-title
      position: relative
    .hand-button
      position: absolute
      bottom: -2px
      transform: scale(0.21) translateX(42px)
      &::after
        z-index: 1
        width: 10px
        height: 10px
        left: 32%
        box-shadow: 0 0 40px 20px rgba($pink, 0.76)
</style>
