<template>
  <transition name="fade">
    <div
      v-show="isSidebarOpen"
      class="modal-background sidebar-container"
      >
      <transition name="fade">
        <aside
          v-show="!isSearchboxOpen"
          class="container is-fullhd sidebar"
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
        :disabled="disableGotoTop"
        @sidebar-button-event="scrollToTop"
      />
      <transition name="fade">
        <Searchbox
          v-show="isSearchboxOpen"
        />
      </transition>
    </div>
  </transition>
</template>

<script>
import Searchbox from '@theme/components/nav/Searchbox.vue'
import SidebarButton from '@theme/components/nav/SidebarButton.vue'
import SidebarLinks from '@theme/components/nav/SidebarLinks.vue'
import NavLinks from '@theme/components/nav/NavLinks.vue'
import { resolveSidebarItems } from '../../util'
import updateOnScroll from 'uos'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks, SidebarButton, Searchbox },

  data () {
    return {
      searchPurpose: 'search',
      disableGotoTop: true,
      clickScrollFlag: false,
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

  mounted () {
    this.$nextTick(() => {
      // TODO check how many scroll handlers uos actually makes
      updateOnScroll(0, 1, progress => {
        this.handleScroll( progress )
      });
    })
  },

  methods: {
    toggleSearch () {
      this.$store.dispatch('setSearchboxStatus', !this.isSearchboxOpen)
    },
    handleScroll (progress) {
      if (progress === 0) {
        this.disableGotoTop = true
        if (this.clickScrollFlag) {
          this.$store.dispatch('setSidebarStatus', false)
          this.clickScrollFlag = false
        }
      } else {
        this.disableGotoTop = false
      }
    },
    scrollToTop () {
      this.clickScrollFlag = true
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="sass">
@import "../../styles/variables.sass"
@import "../../styles/mixins.sass"

.sidebar-container
  @include cover-screen
  position: fixed

.layout.no-sidebar
  .sidebar
    display: none

.sidebar
  display: flex
  align-items: center
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
