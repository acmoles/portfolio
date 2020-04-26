<template>
<div class="beads-background">
  <span v-for="n in amount"/>
</div>
</template>

<script>

import { loadableHero } from '../../mixins/loadableHero.js'
import { getViewport } from '../../util'

export default {

  mixins: [loadableHero],

  data () {
    return {
      amount: 20
    }
  },

  computed: {
  },

  mounted() {
    const x = getViewport('x')
    if (x >= 1600) {
      this.amount = 40
    } else if (x >= 1200) {
      this.amount = 30
    }
    this.$forceNextTick(() => {
      this.doLoad()
    })
  },

  methods: {
  }
}

</script>

<style lang="sass">
@import "../../styles/variables.sass"
@import "../../styles/mixins.sass"

@keyframes move
  100%
    transform: rotate3d(0, 1, 0, 360deg)

$particleHeight: 9em
$particleWidth: 5em
$animationDuration: 12s
$amount: 40
$colors: #583C87, #E45A84, #FFACAC

.beads-background
  position: absolute
  top: 0
  right: 0
  width: 50%
  height: 100%
  span
    backface-visibility: hidden
    animation-name: move
    animation-duration: $animationDuration
    animation-iteration-count: infinite
    animation-timing-function: ease-in-out
    position: absolute
    @for $i from 1 through $amount
      &:nth-child(#{$i})
        $heightModifier: (random() + 0.5) * 0.8
        $widthModifier: (random() + 0.5) * 2
        width: $particleWidth * $widthModifier
        height: $particleHeight * $heightModifier
        top: (random(75) - 10) * 1%
        left: (random(75) + 10) * 1%
        // background: nth($colors, random(length($colors)))
        $backgroundImage: if(random() > 0.5, '/images/makielab/bead-sag.svg', '/images/makielab/bead.svg')
        background: url($backgroundImage)
        background-size: $particleWidth * $widthModifier $particleHeight * $heightModifier
        opacity: random(42) * 0.01 + 0.05
        animation-duration: (random($animationDuration * 10) / 10) * 1s + 10s
        animation-delay: random(($animationDuration + 10s) * 10) / 10 * -1s
        // color: nth($colors, random(length($colors)))
        // transform-origin: (random(50) - 25) * 1vw (random(50) - 25) * 1vh
        // $blurRadius: (random() + 0.1) * $particleSize * 0.5
        // $x: if(random() > 0.5, -1, 1)
        // box-shadow: ($particleSize * 2 * $x) 0 $blurRadius currentColor


</style>
