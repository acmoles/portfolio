<template>
  <transition name="revealer-content-fade">
    <div v-show="show" class="revealer-content">
      <div class="container content">
        <h1 class="main-title">{{ title.title }}</h1>
        <h3 class="subtitle">{{ title.subtitle }}</h3>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  data () {
    return {
      show: true,
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },

    title () {
      return this.$store.state.revealerTitle
    },

    useLastProject () {
      return this.$store.state.useLastProject
    },
  },

  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === last) {
        return
      }

      if (this.useLastProject) {
        this.show = false
      }
      else if (latest === 'loading' || latest === 'covering') {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}

</script>

<style lang="sass">
@import '../../styles/variables.sass'
@import '../../styles/mixins.sass'
@import '../../styles/animations.sass'

.revealer-content
  pointer-events: none
  @include cover-screen
  @include make3d
  filter: opacity(100%)
  z-index: 100
  padding-top: 11em
  transform: translate3D(0, 0, 0) scale3d(1, 1, 1)


.revealer-content-fade-enter-active, .revealer-content-fade-leave-active
  transition: filter $fadeTime $fadeTime ease
  // transition: opacity $fadeTime $fadeTime ease

.revealer-content-fade-enter, .revealer-content-fade-leave-to
  filter: opacity(0%)
  // opacity: 0




</style>
