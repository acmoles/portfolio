<template>
  <div
    class="noise-adjust"
    :style="{ height: noiseHeight, position: noisePosition }"
  >
    <div></div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      noiseHeight: '100%',
      noisePosition: 'absolute',
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
    pageHeight () {
      return this.$store.state.documentHeight
    }
  },
  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === 'loading') {
        this.noiseHeight = window.innerHeight + 'px'
      }

      if (latest === 'finished') {
        var html = document.documentElement
        var height = Math.max( html.clientHeight, html.scrollHeight, html.offsetHeight )

        this.$store.dispatch('setDocumentHeight', height)
      }
    },
    pageHeight (latest, last) {
      if (latest === 0 || latest === null) {
        this.noiseHeight = window.innerHeight + 'px'
      } else {
        this.noiseHeight = latest + 'px'
      }
    }
  }
}

</script>

<style lang="sass">

@import '../../styles/mixins.sass'
@import '../../styles/animations.sass'

.noise-adjust
  @include cover-screen
  transform: translate3d(0,0,0)
  z-index: 200
  pointer-events: none
  animation: fadeIn 1.5s linear
  div
    @include cover-screen
    background-image: url('dark-noise.png')
    background-size: 256px 256px
    animation: flip .3s steps(1) infinite
    mix-blend-mode: overlay
    opacity: .05

</style>
