<template>
  <div
    class="noise-adjust"
  >
    <div></div>
  </div>
</template>

<script>

export default {

}

</script>

<style lang="sass">
@import '../../styles/variables.sass'
@import '../../styles/mixins.sass'
@import '../../styles/animations.sass'

#app::before
  @include cover-screen
  position: fixed
  content: " "
  display: none
  background-image: url('dark-noise.png')
  background-size: 256px 256px
  background-position: 128px 128px
  animation: flip .3s steps(1) infinite
  opacity: .1
  pointer-events: none

.noise-adjust
  display: none
  @include cover-screen
  position: fixed
  transform: translate3d(0,0,0)
  z-index: 200
  pointer-events: none
  animation: fadeIn 1.5s linear
  div
    @include cover-screen
    // background: rgba($pink, 0.5)
    background-image: url('dark-noise.png')
    background-size: 256px 256px
    animation: flip .3s steps(1) infinite
    // mix-blend-mode: overlay
    opacity: .05

</style>
