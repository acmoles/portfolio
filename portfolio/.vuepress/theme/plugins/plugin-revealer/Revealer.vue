<template>
  <transition
    name="revealer-fade-animation"
    v-on:after-leave="finishedRevealing"
    v-on:after-enter="finishedCovering"
  >
    <div
      class="revealer-container"
      v-if="show"
      :class="[revealerParentClass]"
      ref="revealerParent"
    >
      <div
        class="revealer notification"
        :class="[revealerClass, backgroundClass]"
        :style="{ transform: transformString, WebkitTransform: transformString }"
        ref="revealer"
      >
    </div>
  </div>
  </transition>
</template>

<script>
import config from '../../../config.js'
// import IncomingTitle from './IncomingTitle.vue'

export default {

  // components: { IncomingTitle },

  data () {
    return {
      show: true,
      backgroundClass: '',
      revealerParentClass: 'revealer-fixed-active',
      revealerClass: '',
      transformString: 'translate3D(0, 0, 0) scale3d(1, 1, 1)'
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },

    projectPosition () {
      return this.$store.state.projectPosition
    },

    lastProject () {
      return this.$store.state.lastProject
    },

    useLastProject () {
      return this.$store.state.useLastProject
    },

    nextGuardCallback () {
      return this.$store.state.nextGuardCallback
    }
  },

  watch: {
    pageLoadingStatus (latest, last) {

      if (latest === last) {
        return
      }

      if (latest === 'covering' || latest === 'loading') {
        this.show = true
        if (latest === 'loading') {
          this.revealerParentClass = 'revealer-fixed-active'
          this.revealerClass = ''
          this.transformString = 'translate3D(0, 0, 0) scale3d(1, 1, 1)'
        }
      }

      else if (latest === 'revealing' && this.useLastProject) {
        // activates special transition from projects
        this.$forceNextTick(() => {
          document.documentElement.scrollTop = this.projectPosition.scroll
          this.revealerParentClass = 'revealer-absolute-active'
          this.revealerClass = ''
          this.transformString = 'translate3d(0px, ' + this.projectPosition.scroll + 'px, 0px) scale3d(1, 1, 1)'

            setTimeout(() => {
              // wait a fraction - DOM render if prioritised over setTimout callback - nprogress finished
              this.revealerClass = 'revealer-reveal-animation-active'
              this.transformString = this.generateTransformStringPlacement()

                setTimeout(() => {
                  this.show = false
                  this.$store.dispatch('useLastProject', false)
                }, config.fadeTransitionTime / 2) // transition time

            }, config.fadeTransitionTime)
        })

      }

      else {
        this.show = false
      }

    },

    projectPosition (latest, last) {
      // activates special transition to projects
      // TODO Vue doesn't detect the extra transition automatically and waits to call v-on:after-enter
      this.revealerParentClass = 'revealer-absolute-active'
      this.revealerClass = 'revealer-cover-animation-active'
      this.transformString = this.generateTransformStringPlacement()

      setTimeout(() => {
        this.transformString = 'translate3d(0px, ' + this.projectPosition.scroll + 'px, 0px) scale3d(1, 1, 1)'
      }, config.fadeTransitionTime / 2)
    },

    lastProject (latest, last) {
      this.backgroundClass = latest.background
    },

  },

  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('setRevealerInit', true)
    })
  },

  methods: {
    finishedCovering() {
      this.nextGuardCallback()
    },

    finishedRevealing() {
      this.$store.dispatch('setLoadingPageContent', 'finished')
      this.$store.dispatch('useLastProject', false)
      this.revealerParentClass = 'revealer-fixed-active'
      this.revealerClass = ''
      this.transformString = 'translate3D(0, 0, 0) scale3d(1, 1, 1)'
    },

    generateTransformStringPlacement() {
      let translateX = this.projectPosition.childLeft
      let translateY = this.projectPosition.childTop
      let scaleX = this.projectPosition.childWidth / this.getViewport('x')
      let scaleY = this.projectPosition.childHeight / this.getViewport('y')

      return 'translate3D(' + translateX + 'px, ' + translateY + 'px, 0px) scale3d(' + scaleX + ',' + scaleY + ',1)'
    },

    getViewport( axis ) {
      var client, inner
      if( axis === 'x' ) {
        client = window.document.documentElement['clientWidth']
        inner = window['innerWidth']
      }
      else if( axis === 'y' ) {
        client = window.document.documentElement['clientHeight']
        inner = window['innerHeight']
      }

      return client < inner ? inner : client
    }
  }
}

</script>

<style lang="sass">

@import '../../styles/variables.sass'
@import '../../styles/mixins.sass'

.revealer-container
  pointer-events: none
  @include cover-screen
  z-index: 99
  filter: opacity(100%)

.revealer
  @include cover-screen
  @include make3d
  transform-origin: 0 0
  border-radius: 0
  transition-property: transform

// revealer transition states

.revealer-cover-animation-active, .revealer-reveal-animation-active
  transition-duration: $revealTime
  transition-timing-function: $cubicTransition

// fixed position toggle

.revealer-fixed-active
  position: fixed

.revealer-absolute-active
  position: absolute


// revealer vue transition states

.revealer-fade-animation-enter-active
  animation: fadeIn $fadeTime forwards

.revealer-fade-animation-leave-active
  animation: fadeOut $fadeTime $fadeTime forwards
</style>
