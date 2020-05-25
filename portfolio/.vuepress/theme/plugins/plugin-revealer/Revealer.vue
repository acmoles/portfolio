<template>
  <transition
    name="revealer-fade-animation"
    v-on:after-leave="finishedRevealing"
    v-on:after-enter="finishedCovering"
    :duration="{ enter: enterTime, leave: 800 }"
  >
    <div
      class="revealer-container"
      v-show="show"
      :class="[revealerParentClass]"
      ref="revealerParent"
    >
      <div
        class="revealer project-card noise-light"
        :class="[revealerClass, backgroundClass]"
        :style="{ transform: transformString, WebkitTransform: transformString, borderRadius: radiusString }"
        ref="revealer"
      >
    </div>
  </div>
  </transition>
</template>

<script>
import nprogress from 'nprogress'
import config from '../../../config.js'
import { getViewport, getViewportInner, getScrollTop } from '../../util'
import { disableScroll } from '@theme/mixins/disableScroll.js'

// import IncomingTitle from './IncomingTitle.vue'

export default {

  // components: { IncomingTitle },
  mixins: [disableScroll],

  data () {
    return {
      show: true,
      backgroundClass: '',
      revealerParentClass: 'revealer-fixed-active',
      revealerClass: '',
      transformString: 'translate3D(0, 0, 0) scale3d(1, 1, 1)',
      radiusString: '0px',
      enterTime: 400,
      scrollEnabled: true
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

      if (latest === 'loading') {
        nprogress.start()
      } else if (latest === 'loading-increment') {
        nprogress.inc()
      } else {
        nprogress.done()
      }

      // disallow scroll & ensure instant scroll
      if (latest === 'finished') {
        document.documentElement.style.scrollBehavior = 'smooth'
      } else if (latest === 'revealing') {
        this.scrollEnabled = true
        this.enableScrolling(false)
        document.documentElement.style.scrollBehavior = 'auto'
      } else {
        // Loading, Covering
        if (this.scrollEnabled) {
          this.disableScrolling(true)
          this.scrollEnabled = false
          document.documentElement.style.scrollBehavior = 'auto'
        }
      }



      //// revealer state

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
              this.radiusString = this.generateRadiusString()

              // TODO - followup - tested and didn't seem to make a difference
              // setTimeout(() => {
              //   this.radiusString = this.generateRadiusString()
              // }, 500) // delay set radius string

              setTimeout(() => {
                this.show = false
                this.$store.dispatch('useLastProject', false)
              }, 400) // delay fade out

            }, 400) // pause before reveal animation
        })

      }

      else {
        this.radiusString = '0px'
        this.show = false
      }

    },

    projectPosition (latest, last) {
      // activates special transition to projects
      this.enterTime = 800
      this.revealerParentClass = 'revealer-absolute-active'
      this.revealerClass = 'revealer-cover-animation-active'
      this.transformString = this.generateTransformStringPlacement()
      this.radiusString = this.generateRadiusString()

      // setTimeout(() => {
      //   this.radiusString = this.generateRadiusString()
      // }, 600) // delay set radius string

      setTimeout(() => {
        this.transformString = 'translate3d(0px, ' + this.projectPosition.scroll + 'px, 0px) scale3d(1, 1, 1)'
        this.radiusString = '0px'
        this.enterTime = 400
      }, 200)
    },

    lastProject (latest, last) {
      this.backgroundClass = latest.background
    },

  },

  mounted() {
    nprogress.configure({
      showSpinner: false,
      trickleSpeed: 100,
    })

    // Start first load
    nprogress.start()

    // Set initial scroll styles
    document.documentElement.style.overflowY = 'scroll'
    document.documentElement.style.scrollBehavior = 'smooth'

    this.$nextTick(() => {
      this.setBodyEl()
      document.documentElement.classList.add('ready')
      this.$store.dispatch('setRevealerInit', true)
    })
  },

  methods: {
    finishedCovering() {
      this.nextGuardCallback()
    },

    finishedRevealing() {
      this.$store.dispatch('setLoadingPageContent', 'finished')
      this.$store.dispatch('useLastProject', false)       // TODO is this needed?
      this.revealerParentClass = 'revealer-fixed-active'
      this.revealerClass = ''
      this.transformString = 'translate3D(0, 0, 0) scale3d(1, 1, 1)'
    },

    generateTransformStringPlacement() {
      // TODO even more robust for browsers with scrollbars?
      const translateX = this.projectPosition.childLeft
      const translateY = this.projectPosition.childTop
      const scaleX = this.projectPosition.childWidth / getViewport('x')
      const scaleY = this.projectPosition.childHeight / getViewport('y')

      return 'translate3D(' + translateX + 'px, ' + translateY + 'px, 0px) scale3d(' + scaleX + ',' + scaleY + ',1)'
    },

    generateRadiusString() {
      const scaleX = this.projectPosition.childWidth / getViewport('x')
      const scaleY = this.projectPosition.childHeight / getViewport('y')

      return (10/scaleX) + 'px / ' + (10/scaleY) + 'px'
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
  // TODO border-radius transition doesn't work on webkit - slows down things in general - any way to spoof?
  // Tested but not much improvement - main problem is Firefox

// revealer transition states

.revealer-cover-animation-active
  transition: border-radius 100ms linear, transform $revealTime - 200ms $coverTransition
  // transition: transform $revealTime - 200ms $coverTransition

.revealer-reveal-animation-active
  transition: border-radius 100ms $revealTime - 200ms linear, transform $revealTime $coverTransition
  // transition: transform $revealTime $coverTransition


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
