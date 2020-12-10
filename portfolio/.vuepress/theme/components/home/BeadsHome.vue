<template>
<div class="beads-home">
  <span v-for="n in amount"/>
</div>
</template>

<script>

import { loadableHero } from '@theme/mixins/loadableHero.js'
import { getViewport } from '@theme/util'

export default {
  name: 'BeadsHome',
  mixins: [loadableHero],

  data () {
    return {
      amount: 20
    }
  },
}

</script>

<style lang="sass">
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"

@keyframes move
  0%
    transform: rotate3d(0, 1, 0, 0deg) translateZ(1em)
  100%
    transform: rotate3d(0, 1, 0, 360deg) translateZ(1em)

$particleHeight: 6em
$particleWidth: 3em
$animationDuration: 12s
$amount: 20
$colors: #583C87, #E45A84, #FFACAC

.beads-home
  position: absolute
  bottom: 0
  right: 0
  width: 100%
  height: 100%
  overflow: hidden
  perspective: 420px
  transform-style: preserve-3d
  border-radius: 0 0 $radius $radius
  span
    backface-visibility: hidden
    animation-name: move
    animation-duration: $animationDuration
    animation-iteration-count: infinite
    animation-timing-function: ease-in-out
    position: absolute
    @for $i from 1 through $amount
      &:nth-child(#{$i})
        $heightModifier: (random() + 0.32) * 0.8
        $widthModifier: (random() + 0.32) * 2
        width: $particleWidth * $widthModifier
        height: $particleHeight * $heightModifier
        bottom: (random(32) - 10) * 1%
        left: (random(100) - 10) * 1%
        // background: nth($colors, random(length($colors)))
        $backgroundImage: if(random() > 0.5, '/images/makielab/bead-sag.svg', '/images/makielab/bead.svg')
        background: url($backgroundImage)
        background-size: $particleWidth * $widthModifier $particleHeight * $heightModifier
        opacity: random(42) * 0.01 + 0.42
        animation-duration: (random($animationDuration * 10) / 10) * 1s + 10s
        animation-delay: random(($animationDuration) * 10) / 10 * -1s
        // color: nth($colors, random(length($colors)))
        // transform-origin: (random(50) - 25) * 1vw (random(50) - 25) * 1vh
        // $blurRadius: (random() + 0.1) * $particleSize * 0.5
        // $x: if(random() > 0.5, -1, 1)
        // box-shadow: ($particleSize * 2 * $x) 0 $blurRadius currentColor

</style>
