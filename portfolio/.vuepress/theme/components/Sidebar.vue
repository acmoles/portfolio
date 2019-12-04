<template>
  <aside class="sidebar">
    <NavLinks/>
    <slot name="top"/>
    <SidebarLinks :depth="0" :items="sidebarItems"/>
    <slot name="bottom"/>
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import { resolveSidebarItems } from '../util'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  computed: {
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

$borderColor: $silver

.layout.no-sidebar
  .sidebar
    display: none

.sidebar
  position: fixed
  z-index: 20
  top: 8em
  background-color: $white
  ul
    padding: 0
    margin: 0
    list-style-type: none
  a
    display: inline-block
  .nav-links
    display: none
    border-bottom: 1px solid $borderColor
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
