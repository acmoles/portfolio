<template>
  <div
    class="layout background-noise"
    :class="pageClasses"
  >
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

import config from '@theme/../config.js'

export default {
  components: { Sidebar, Navbar, Footer, PageNav },

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
      return [
        this.pageLoadingStatus,
        tintStyle,
        userPageClass
      ]
    },

    hasFooter () {
      return this.$page.frontmatter.hasFooter
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
            location.href = anchor
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


</style>
