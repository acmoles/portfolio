<template>
  <div
    class="noise-adjust"
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

      if (latest === 'revealing') {
        this.$nextTick(() => {
            var html = document.documentElement
            var height = Math.max( html.clientHeight, html.scrollHeight, html.offsetHeight )

            this.$store.dispatch('setDocumentHeight', height)
        })
      }
    },
    pageHeight (latest, last) {
        this.noiseHeight = latest + 'px'
    }
  }
}

</script>
<!-- :style="{ height: noiseHeight, position: noisePosition }" -->

<style lang="sass">
@import '../../styles/variables.sass'
@import '../../styles/mixins.sass'
@import '../../styles/animations.sass'

.noise-adjust
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
