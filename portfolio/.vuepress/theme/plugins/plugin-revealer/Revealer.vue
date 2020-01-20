<template>
  <transition
    name="revealer-animation"
    v-on:after-enter="finishedCovering"
    v-on:after-leave="finishedRevealing"
  >
    <div
      v-if="show"
      class="revealer notification"
      :class="revealerClass"
      :style="{ transform: transformString, WebkitTransform: transformString }"
    >
      <h1 class="revealer-page-title">{{ title }}</h1>
    </div>
  </transition>
</template>

<script>
import { resolvePage } from '../../util'

export default {

  data () {
    return {
      show: false,
      nextGuardCallback: null,
      dummyClass: 'test',
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
    }
  },

  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === 'covering' || latest === 'loading') {
        this.show = true
      } else {
        this.show = false
      }
    },
    projectPosition (latest, last) {
      this.show = true
      this.revealerClass = latest.color
      this.transformString = this.generateTransformString()
    }
  },

  mounted() {

    this.$router.beforeEach((to, from, next) => {

      if (to.path !== from.path) {
        this.$store.dispatch('setLoadingPageContent', 'covering')
        let title = this.findPageTitle(this.$site.pages, to.path)
        this.$store.dispatch('setTitleStatus', title)
        this.nextGuardCallback = next
      } else {
        next()
      }

    })
  },

  methods: {
    finishedCovering() {
      this.nextGuardCallback()
    },
    finishedRevealing() {
      this.$store.dispatch('setLoadingPageContent', 'finished')
    },
    findPageTitle(pages, path) {

      for (let i = 0; i < pages.length; i++) {
        if (pages[i].path === path) {
          return pages[i].title
        }
      }

    },
    generateTransformString() {
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

.revealer-animation-enter-active
  // animation: animateIn $revealTime forwards
  transition: transform $revealTime
  animation-timing-function: cubic-bezier(0.8, 0, 0.2, 1)

.revealer-animation-leave-active
  // animation: animateOut $revealTime forwards
  transition: transform $revealTime

</style>
