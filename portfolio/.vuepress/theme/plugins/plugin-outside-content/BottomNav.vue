<template>
  <transition name="fade">
    <div
      class="bottom-nav"
      :style="{ bottom: cssBottom + 'px' }"
      v-if="show"
    >
      <div
        class="bottom-nav-item go-to-search"
        @click="triggerSearch"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.484 28.284">
          <g transform="translate(-229 -126.358)">
            <rect fill="currentColor" width="35" height="5" rx="2" transform="translate(229 151.107) rotate(-45)"/>
            <rect fill="currentColor" width="35" height="5" rx="2" transform="translate(274.949 154.642) rotate(-135)"/>
          </g>
        </svg>
      </div>

      <div
        class="bottom-nav-item go-to-top"
        @click="scrollToTop"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.484 28.284">
          <g transform="translate(-229 -126.358)">
            <rect fill="currentColor" width="35" height="5" rx="2" transform="translate(229 151.107) rotate(-45)"/>
            <rect fill="currentColor" width="35" height="5" rx="2" transform="translate(274.949 154.642) rotate(-135)"/>
          </g>
        </svg>
      </div>
    </div>

  </transition>
</template>

<script>

export default {
  
// TODO move bottom nav into sidebar overlay

  data () {
    return {
      initialised: false,
      progress: 0,
      cssBottom: 0,
      threshold: 0.25
    }
  },

  mounted () {
    this.$events.on('navScroll', (eventData) => {
      if (!this.initialised && eventData.position === 'fixed') {
        this.initialised = true
      }
      this.progress = eventData.scrollProgress
      this.cssBottom = eventData.navBarToViewport
    });
  },

  methods: {
    scrollToTop () {
      window.scrollTo( {top: 0, behavior: 'smooth'} )
      this.progress = 0
    },
    triggerSearch () {
      console.log('trigger search')
      this.$store.dispatch('setSearchboxStatus', true)
    }
  },

  computed: {
    show () {
      return this.progress > this.threshold && !this.isSidebarOpen && this.initialised
    },
    isSidebarOpen () {
      return this.$store.state.isSidebarOpen
    }
  }
}


</script>

<style lang='sass' scoped>
@import '../../styles/variables.sass'
@import '../../styles/animations.sass'

.bottom-nav
  position: fixed
  width: 100%
  height: 6em
  pointer-events: none

.bottom-nav-item
  position: absolute
  pointer-events: all
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer
  bottom: 0
  width: 6em
  height: 6em
  color: $white-ter
  z-index: 2
  svg
    width: 1.5em
.bottom-nav-item:hover
  color: $grey-lighter

.go-to-top
  right: 0

.go-tosearch
  left: 0

@media (max-width: $desktop)
  .bottom-nav
    display: none

</style>
