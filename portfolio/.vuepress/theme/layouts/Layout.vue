<template>
  <div
    class="layout background-noise"
    :class="pageClasses"
  >
    <div v-if="navStyle !== 'light'" class="navbar-rule"></div>
    <Navbar/>

    <Sidebar>
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

      <Content class="main"/>

      <PageNav/>

      <Footer v-if="hasFooter"/>
    </main>
  </div>
</template>

<script>

// v-on:content-loaded="onEnlargeText"
import Navbar from '@theme/components/nav/Navbar.vue'
import Footer from '@theme/components/nav/Footer.vue'
import PageNav from '@theme/components/nav/PageNav.vue'
import Sidebar from '@theme/components/nav/Sidebar.vue'
import { browserDetection } from '@theme/mixins/browserDetection.js'

import config from '@theme/../config.js'

export default {
  components: { Sidebar, Navbar, Footer, PageNav },

  mixins: [browserDetection],

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },

    firstLoad () {
      return this.$store.state.firstLoad
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      const tintStyle = this.$page.frontmatter.navStyle.tint
      const Firefox = this.isFirefox ? 'firefox' : null
      return [
        this.pageLoadingStatus,
        tintStyle,
        Firefox,
        userPageClass
      ]
    },

    hasFooter () {
      return this.$page.frontmatter.hasFooter
    },

    navStyle () {
      return this.$page.frontmatter.navStyle.style
    }
  },

  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === 'revealing' && this.firstLoad) {
        // Needed to navigate to anchors in first load cases
        const anchor = this.$router.currentRoute.hash
        const split = anchor.substr(1)

        this.$nextTick( () => {
          if (anchor && document.getElementById(split)) {
            this.$store.dispatch('setFirstLoad', false)
            location.assign(this.$router.currentRoute.fullPath)
          }
        });
      }
    }
  }

}
</script>

<style lang="sass">
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"

.layout
  background-color: $black

.page-content
  display: flex
  flex-direction: column
  align-content: space-between

// Page transitions

.layout.home
  position: relative
  &::after
    @include cover-screen
    position: fixed
    content: ' '
    display: block
    background: darken($black, 8%)
    transition: opacity .4s linear
    opacity: 0
    pointer-events: none
    z-index: 3

.layout.home.covering, .layout.home.loading
  &::after
    opacity: 1

.navbar-rule
  position: absolute
  top: 0
  width: 100%
  height: 6em
  border-bottom: 1px solid $divider


</style>
