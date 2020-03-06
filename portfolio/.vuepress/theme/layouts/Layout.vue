<template>
  <div
    class="layout"
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

      <Content class="container is-fullhd"/>

      <PageNav/>

      <Footer v-if="hasFooter"/>
    </main>
  </div>
</template>

<script>

// v-on:content-loaded="onEnlargeText"
import Navbar from '@theme/components/nav/Navbar.vue'
import Footer from '@theme/components/home/Footer.vue'
import PageNav from '@theme/components/nav/PageNav.vue'
import Sidebar from '@theme/components/nav/Sidebar.vue'

export default {
  components: { Sidebar, Navbar, Footer, PageNav },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      const linkStyle = this.$page.frontmatter.navStyle.links
      return [
        this.pageLoadingStatus,
        linkStyle,
        userPageClass
      ]
    },

    hasFooter () {
      return this.$page.frontmatter.hasFooter
    }

  }
}
</script>

<style lang="sass">
@import "../styles/variables.sass"
@import "../styles/mixins.sass"


.page-content
  // TODO fix timing - ensuring height 100% shows next page behind the transition
  // height: 100%
  min-height: 100%
  display: flex
  flex-direction: column
  align-content: space-between

  &.content__default
    padding: 0 2em
    flex-grow: 1

// .loading
//   display: none

.revealing, .covering, .loading
  .page-content
    overflow: hidden

.layout
  &::after
    @include cover-screen
    position: fixed
    content: ' '
    display: block
    background: $black
    transition: filter .4s linear
    filter: opacity(0%)
    pointer-events: none

.layout.covering, .layout.loading
  &::after
    filter: opacity(100%)


</style>
