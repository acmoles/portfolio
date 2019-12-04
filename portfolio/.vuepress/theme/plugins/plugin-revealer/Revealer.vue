<template>
  <transition
    name="revealer-animation"
    v-on:after-enter="finishedCovering"
    v-on:after-leave="finishedRevealing"
  >
    <div
      v-if="show"
      class="revealer"
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
      show: true,
      nextGuardCallback: null
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },

    title () {
      return this.$store.state.revealerTitle
    },
  },

  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === 'covering' || latest === 'loading') {
        this.show = true
      } else {
        this.show = false
      }
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

    }
  }
}

</script>

<style lang="sass">

@import '../../styles/variables.sass'

.revealer
  position: fixed
  display: flex
  justify-content: center
  align-items: center
  top: 0px
  left: 0px
  bottom: 0px
  right: 0px
  transform: translateY(0px)
  background: #f3f3f3
  cursor: wait
  z-index: 20

  .revealer-page-title
    color: #0e0e0e
    text-align: center
    width: 80%
    cursor: wait

.revealer-animation-enter-active
  animation: animateIn $revealTime forwards

.revealer-animation-leave-active
  animation: animateOut $revealTime forwards


</style>
