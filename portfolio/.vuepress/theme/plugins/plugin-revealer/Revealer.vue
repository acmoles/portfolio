<template>
  <transition
    :name="transitionName"
    v-on:after-enter="finishedCovering"
    v-on:after-leave="finishedRevealing"
  >
    <div
      v-if="show"
      class="revealer notification"
      :class="[revealerClass, backgroundClass]"
      :style="{ transform: transformString, WebkitTransform: transformString }"
      ref="revealer"
    >
      <h1 class="revealer-page-title">{{ title }}</h1>
    </div>
  </transition>
</template>

<script>
import { resolvePage } from '../../util'
import config from '../../config.js'

export default {

  data () {
    return {
      show: true,
      transitionName: '',
      homepageSpecialRoutingFlag: true,
      backgroundClass: '',
      revealerClass: 'revealer-fixed-active',
      transformString: ''
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },

    title () {
      return this.$store.state.revealerTitle
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

      if (latest === 'loading') {
        this.revealerClass = 'revealer-fixed-active'
        this.transformString = ''
      }

      if (latest === 'covering' || latest === 'loading') {
        this.show = true
      }

      else if (latest === 'revealing' && this.useLastProject) {
        // activates special transition from projects

        this.$nextTick(() => { // might need to replace with setTimout
          document.documentElement.scrollTop = this.projectPosition.scroll
          this.revealerClass = ''
          this.transformString = 'translate3d(0px, ' + this.projectPosition.scroll + 'px, 0px)'

            setTimeout(() => {
              // wait a fraction - DOM render if prioritised over setTimout callback
              this.revealerClass = 'revealer-reveal-animation-active'
              this.transformString = this.generateTransformStringPlacement()

                setTimeout(() => {
                  this.show = false
                  this.$store.dispatch('useLastProject', false)
                }, config.revealTransitionTime / 1.5) // transition time

            }, 100)

        })

      }

      else {
        this.show = false
      }

    },

    projectPosition (latest, last) {
      // activates special transition to projects
      // Vue detects the extra transition automatically and waits to call v-on:after-enter
      this.revealerClass = 'revealer-cover-animation-active'
      this.transformString = this.generateTransformStringPlacement()

      setTimeout(() => {
        this.transformString = 'translate3d(0px, ' + this.projectPosition.scroll + 'px, 0px)'
      }, config.fadeTransitionTime / 2)
    },

    lastProject (latest, last) {
      this.backgroundClass = latest.background
    },

  },

  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('setRevealerInit', true)
      this.transitionName = 'revealer-fade-animation'
    })
  },

  methods: {
    finishedCovering() {
      this.nextGuardCallback()
    },

    finishedRevealing() {
      this.$store.dispatch('setLoadingPageContent', 'finished')
      this.$store.dispatch('useLastProject', false)
      this.revealerClass = 'revealer-fixed-active'
      this.transformString = ''
    },

    generateTransformStringPlacement() {
      let translateX = this.projectPosition.childOffsetLeft
      let translateY = this.projectPosition.childOffsetTop
      let scaleX = this.projectPosition.childOffsetWidth / this.projectPosition.parentOffsetWidth
      let scaleY = this.projectPosition.childOffsetHeight / this.getViewport('y')

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

.revealer
  // pointer-events: none
  position: absolute
  width: 100%
  height: 100vh
  z-index: 100
  top: 0
  left: 0
  transform-origin: 0 0

// revealer transition states

.revealer-cover-animation-active
  // animation: animateIn $revealTime forwards
  transition: transform $revealTime
  transition-timing-function: $cubicTransition

.revealer-fixed-active
  position: fixed

.revealer-reveal-animation-active
  // animation: animateOut $revealTime forwards
  transition: transform $revealTime
  transition-timing-function: $cubicTransition

// revealer vue transition states

.revealer-fade-animation-enter-active
  animation: fadeIn $fadeTime forwards

.revealer-fade-animation-leave-active
  animation: fadeOut $fadeTime forwards

// might put transform up animation here - swaps from fade
</style>
