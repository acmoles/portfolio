<template>
  <transition name="fade">
    <div
      v-show="isSidebarOpen"
      class="modal-background sidebar-container"
      >
      <transition name="fade">
        <aside
          v-show="!isSearchboxOpen"
          class="sidebar"
          >
          <slot name="top"/>
          <SidebarLinks :depth="0" :items="sidebarItems"/>
          <slot name="bottom"/>
        </aside>
      </transition>
      <SidebarButton
        purpose="search"
        class="search-sidebar-button"
        @sidebar-button-event="toggleSearch"
      />
      <SidebarButton
        purpose="goto-top"
        class="goto-top-sidebar-button"
        @sidebar-button-event="gotoTop"
      />
      <transition name="fade">
        <SearchboxContainer
          v-show="isSearchboxOpen"
        />
      </transition>
    </div>
  </transition>
</template>

<script>
import SearchboxContainer from '@theme/components/SearchboxContainer.vue'
import SidebarButton from '@theme/components/SidebarButton.vue'
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import { resolveSidebarItems } from '../util'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks, SidebarButton, SearchboxContainer },

  data () {
    return {
      searchPurpose: 'search'
    }
  },

  computed: {
    isSidebarOpen () {
      return this.$store.state.isSidebarOpen
    },
    isSearchboxOpen () {
      return this.$store.state.isSearchboxOpen
    },
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
  },
  methods: {
    toggleSearch () {
      this.$store.dispatch('setSearchboxStatus', !this.isSearchboxOpen)
    },
    gotoTop () {
      const onScroll = function () {
          if (window.pageYOffset === 0) {
              window.removeEventListener('scroll', onScroll.bind(this))
              this.$store.dispatch('setSidebarStatus', false)
          }
      }
      window.addEventListener('scroll', onScroll.bind(this))
      onScroll()
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
    }
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

.search-sidebar-button
  position: absolute
  bottom: 0
  left: 0

.goto-top-sidebar-button
  position: absolute
  bottom: 0
  right: 0
</style>
