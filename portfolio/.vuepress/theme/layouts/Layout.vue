<template>
  <div
    class="content"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <Sidebar
      :items="sidebarItems"
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

    <main class="page">
      <Content slot-key="top"/>

      <Content/>

      <PageNav/>

      <Content slot-key="bottom"/>
    </main>

    <Footer
      v-if="shouldShowNavbar"
    />
  </div>
</template>

<script>
// v-on:content-loaded="onEnlargeText"
import Navbar from '@theme/components/Navbar.vue'
import Footer from '@theme/components/Footer.vue'
import PageNav from '@theme/components/PageNav.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'

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

    shouldShowNavbar () {
      const { frontmatter } = this.$page
      if (frontmatter.navbar === false) {
        return frontmatter.navbar
      } else {
        return true
      }
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
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

<style lang="stylus">

@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}

.content {
    min-height: 100%;
    transform: translateY(100vh);
    animation-timing-function: cubic-bezier(0.8, 0, 0.2, 1);
    &.revealing {
      animation: animateIn $revealTime forwards;
    }
    &.finished {
      transform: translateY(0vh);
    }
    &.covering {
      animation: animateOut $revealTime forwards;
    }
}

</style>
