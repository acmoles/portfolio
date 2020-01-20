<template>
  <div
    class="layout"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <Sidebar
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      />
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar>

    <main class="page-content">
      <Content slot-key="top"/>

      <Content/>

      <PageNav/>

      <Content slot-key="bottom"/>
      <Footer/>
    </main>
  </div>
</template>

<script>
// v-on:content-loaded="onEnlargeText"
import Navbar from '@theme/components/Navbar.vue'
import Footer from '@theme/components/Footer.vue'
import PageNav from '@theme/components/PageNav.vue'
import Sidebar from '@theme/components/Sidebar.vue'

export default {
  components: { Sidebar, Navbar, Footer, PageNav },

  data () {
    return {
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },

    sidebarStatus () {
      return this.$store.state.isSidebarOpen
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'sidebar-open': this.sidebarStatus,
          'no-sidebar': !this.shouldShowSidebar
        },
        this.pageLoadingStatus,
        userPageClass
      ]
    },

  },

  methods: {
    toggleSidebar (to) {
      let status = typeof to === 'boolean' ? to : !this.sidebarStatus
      this.$store.dispatch('setSidebarStatus', status)
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }

  }
}
</script>

<style lang="sass">
@import "../styles/variables.sass"

.page-content
  padding-top: 6em
  min-height: 100vh
  display: flex
  flex-direction: column
  align-content: space-between
  transform: translateY(100vh)
  animation-timing-function: cubic-bezier(0.8, 0, 0.2, 1)

  &.content__default
    padding: 0 2em
    flex-grow: 1


.revealing
  .page-content
    animation: animateIn $revealTime forwards

  .navbar, .sidebar
    opacity: 0


.finished
  .page-content
    transform: translateY(0vh)

  .navbar, .sidebar
    opacity: 1


.covering
  .page-content
    transform: translateY(0vh)
    // animation: animateOut $revealTime forwards;

  .navbar, .sidebar
    opacity: 0


</style>
