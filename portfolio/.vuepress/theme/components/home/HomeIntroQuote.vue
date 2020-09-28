<template>
  <div
    class="home-intro"
    :class="[{'in-view': visible}, {'appear-fade-up': homeFadeUpMotion}]"
  >
    <div ref="container" class="intro-container">
      <p class="subtitle">
          I'm a designer and leader creating useful and playful experiences centred on people
          <!-- <WavingHand/> -->
      </p>
    </div>
  </div>
</template>
<script>
import WavingHand from '@theme/components/home/WavingHand.vue'

import { fadeUpInLoad } from '@theme/mixins/fadeUpInLoad.js'
// import { topPadding } from '@theme/mixins/topPadding.js'
// :style="{ paddingTop: paddingTop }"

export default {
  components: { WavingHand },

  mixins: [fadeUpInLoad],

  computed: {
    homeFadeUpMotion () {
      return this.$store.state.homeFadeUpMotion
    }
  }

}

</script>

<style scoped lang="sass">

  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .home-intro
    padding: 9em 0 3.5em 0
    .subtitle
      position: relative
    .intro-container
      margin-left: 1rem
      width: 88%
    @media screen and (min-width: $tablet)
      // padding: 8em 0 4em 0
      display: grid
      grid-template-columns: repeat(3, 1fr)
      column-gap: $columnGap
      .intro-container
        margin-left: 1.75em
        grid-column-start: 1
        grid-column-end: 3
        width: 80%
    @media screen and (min-width: $fullhd + 1)
      // padding: 12em 0 4em 0

</style>
