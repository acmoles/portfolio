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

      <Content class="container is-fluid"/>

      <PageNav class="container is-fluid"/>

      <Content class="container is-fluid" slot-key="bottom"/>
      <Footer class="container is-fluid"/>
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

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        this.pageLoadingStatus,
        userPageClass
      ]
    },

  }
}
</script>

<style lang="sass">
@import "../styles/variables.sass"

.page-content
  min-height: 100vh
  display: flex
  flex-direction: column
  align-content: space-between
  // transform: translateY(100vh)
  animation-timing-function: cubic-bezier(0.8, 0, 0.2, 1)

  &.content__default
    padding: 0 2em
    flex-grow: 1

.loading
  display: none

.revealing
  .page-content
    // animation: animateIn $revealTime forwards

.finished
  .page-content
    // transform: translateY(0vh)

.covering
  .page-content
    // transform: translateY(0vh)
    // animation: animateOut $revealTime forwards;

</style>
