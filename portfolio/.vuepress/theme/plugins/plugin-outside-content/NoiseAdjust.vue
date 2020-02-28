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

.ready
  #app::before
    @include cover-screen
    position: fixed
    content: ' '
    background-image: url('dark-noise.png')
    background-size: 256px 256px
    background-position: 128px 128px
    animation: flip .3s steps(1) infinite
    filter: opacity(5%)
    pointer-events: none

  .noise-adjust
    @include cover-screen
    position: fixed
    transform: translate3d(0,0,0)
    z-index: 200
    pointer-events: none
    filter: opacity(0%)
    animation: fadeIn 1s linear forwards
    div
      @include cover-screen
      background-image: url('dark-noise.png')
      background-size: 256px 256px
      animation: flip .3s steps(1) infinite
      filter: opacity(5%)

</style>
