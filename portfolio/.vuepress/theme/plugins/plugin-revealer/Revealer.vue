<template>
  <transition
    name="revealer-fade-animation"
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
      projectRoutingFlag: false,
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

    nextGuardCallback () {
      return this.$store.state.nextGuardCallback
    }
  },

  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === 'covering' || latest === 'loading') {
        this.show = true
      } else if (latest === 'revealing' && this.lastProject.hasLastProject) {
        // TODO Do scale down
        console.log('should scale');
        this.revealerClass = 'revealer-cover-animation-active'
        this.transformString = this.generateTransformStringPlacement()
        setTimeout(() => {
          this.show = false
        }, config.revealTransitionTime)
      } else {
        this.show = false
      }

      if (latest === 'loading') {
        this.revealerClass = 'revealer-fixed-active'
        this.transformString = ''
      }

    },

    projectPosition (latest, last) {
      this.projectRoutingFlag = true
      this.revealerClass = 'revealer-cover-animation-active'
      this.transformString = this.generateTransformStringPlacement()

      setTimeout(() => {
        this.transformString = 'translate3d(0px, ' + this.projectPosition.scroll + 'px, 0px)'
      }, config.fadeTransitionTime / 2)
    },

    lastProject (latest, last) {
        console.log('Has last project: ', latest);
    }
  },

  mounted() {
    console.log('Next guard callback in revealer: ', this.nextGuardCallback);
    this.$store.dispatch('setRevealerInit', true)
  },

  methods: {
    finishedCovering() {
      if (this.projectRoutingFlag) {

        // route to project from homepage
        this.projectRoutingFlag = false
        // gains special back to homepage behaviour
        this.$store.dispatch('setLastProject', {
          hasLastProject: true,
          background: this.backgroundClass
        })
        this.nextGuardCallback()
      } else {
        // all other routing
        this.nextGuardCallback()
        // loses special back to homepage behaviour
        this.$store.dispatch('setLastProject', {
          hasLastProject: false,
          background: ''
        })

      }
    },

    finishedRevealing() {
      this.$store.dispatch('setLoadingPageContent', 'finished')
      this.revealerClass = 'revealer-fixed-active'
      this.backgroundClass = ''
    },

    generateTransformStringPlacement() {
      let translateX = this.projectPosition.child.offsetLeft
      let translateY = this.projectPosition.child.offsetTop
      let scaleX = this.projectPosition.child.offsetWidth / this.projectPosition.parent.offsetWidth
      let scaleY = this.projectPosition.child.offsetHeight / this.getViewport('y')

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

.revealer-cover-animation-active
  // animation: animateIn $revealTime forwards
  transition: transform $revealTime
  transition-timing-function: $cubicTransition

.revealer-fixed-active
  position: fixed

.revealer-animation-leave-active
  // animation: animateOut $revealTime forwards
  transition: transform $revealTime


.revealer-fade-animation-enter-active
  animation: fadeIn $fadeTime forwards

.revealer-fade-animation-leave-active
  animation: fadeOut $fadeTime forwards

</style>
