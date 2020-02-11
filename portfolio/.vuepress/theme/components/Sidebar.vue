<template>
  <transition name="fade">
    <div
      v-show="isSidebarOpen"
      class="modal-background sidebar-container"
      >
      <aside class="sidebar">
        <slot name="top"/>
        <SidebarLinks :depth="0" :items="sidebarItems"/>
        <slot name="bottom"/>
      </aside>
    </div>
  </transition>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import { resolveSidebarItems } from '../util'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  computed: {
    isSidebarOpen () {
      return this.$store.state.isSidebarOpen
    },
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
  }
}
</script>

<style lang="sass">
@import "../styles/variables.sass"
@import "../styles/mixins.sass"

.sidebar-container
  @include cover-screen
  position: fixed

.layout.no-sidebar
  .sidebar
    display: none

.sidebar
  padding: 0 0 0 6em
  background-color: transparent
  ul
    padding: 0
    margin: 0
    list-style-type: none
  a
    display: inline-block
  .nav-links
    display: none
    border-bottom: 1px solid $white-ter
    padding: 0.5rem 0 0.75rem 0
    a
      font-weight: 600
    .nav-item, .repo-link
      display: block
      line-height: 1.25rem
      font-size: 1.1em
      padding: 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding: 1.5rem 0
    & > li > a.sidebar-link
      font-size: 1.1em
      line-height: 1.7
      font-weight: bold
    & > li:not(:first-child)
      margin-top: .75rem

</style>
