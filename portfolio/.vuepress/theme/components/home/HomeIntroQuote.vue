<template>
  <div
    class="home-intro"
    :class="[{'in-view': visible}, {'appear-fade-up': homeFadeUpMotion}]"
    :style="{ paddingTop: paddingTop }"
  >
    <div ref="container" class="intro-container">
      <p class="subtitle">
          I'm a multidisciplinary designer creating useful and playful experiences centred on people
          <WavingHand/>
      </p>
    </div>
  </div>
</template>

<script>
import WavingHand from '@theme/components/home/WavingHand.vue'

import { fadeUpInLoad } from '@theme/mixins/fadeUpInLoad.js'
import { topPadding } from '@theme/mixins/topPadding.js'

export default {
  components: { WavingHand },

  mixins: [fadeUpInLoad, topPadding],

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
    padding: 6em 0 5em 0
    display: grid
    grid-template-columns: repeat(3, 1fr)
    column-gap: $columnGap
    .intro-container
      margin-left: 1.75em
      grid-column-start: 1
      grid-column-end: 3
      width: 80%
    .subtitle
      position: relative
</style>
