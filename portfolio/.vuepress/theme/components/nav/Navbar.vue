<template>
  <transition name="navbar-transition">
    <header
      v-show="show"
      class="navbar"
      :class="[navStyle, { force: forceLight }]"
      ref="navbar"
      :style="{ position: cssPosition, top: cssTop + 'px' }"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <router-link
          :to="$localePath"
          class="home-link"
        >
            <!-- <Logo
              class="logo-site-tilogtle"
              :class="{ burgered: navbarBurgered }"
            /> -->
            <ArrowIcon
              class="back-arrow"
              :class="{ burgered: navbarBurgered }"
            />
            <!-- <strong
              class="text-site-title"
              :class="{ burgered: navbarBurgered }"
            >
              Anthony Moles
            </strong> -->
        </router-link>

        <SidebarButton
          purpose="menu"
          class="nav-sidebar-button"
          v-if="navbarBurgered"
          @sidebar-button-event="toggleSidebar"
        />
      </div>

      <NavLinks
        :active="isSidebarOpen"
        :burgered="navbarBurgered"
      />
    </header>
  </transition>
</template>

<script>

// TODO switch to in-project back button

import SidebarButton from '@theme/components/nav/SidebarButton.vue'
import NavLinks from '@theme/components/nav/NavLinks.vue'
import Logo from '@theme/components/icons/Logo.vue'
import ArrowIcon from '@theme/components/icons/ArrowIcon.vue'

import updateOnScroll from 'uos'
import debounce from 'lodash.debounce'

import { getScrollTop, getOffsetY, getViewport } from '../../util'

export default {
  components: { SidebarButton, NavLinks, Logo, ArrowIcon },
  data () {
    return {
      show: true,
      windowHeight: null,
      navbarBurgered: false,
      navbarHeight: 16 * 6,
      navbarPosition: 0,
      scrollPosition: 0,
      lastScrollPosition: 0,
      scrollDirection: 'down',
      cssPosition: 'absolute',
      cssTop: 0
    }
  },
  mounted () {
    this.$nextTick(() => {

      this.windowHeight = getViewport('y') // SSR

      updateOnScroll(0, 1, progress => {
        this.handleScroll( progress )
      })

    })
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
    isSidebarOpen () {
      return this.$store.state.isSidebarOpen
    },
    navStyle () {
      return this.$page.frontmatter.navStyle.style
    },
    forceLight () {
      return this.$store.state.isSidebarOpen || this.scrollPosition >= (this.windowHeight - 64)
    }
  },

  // watch: {
  //   pageLoadingStatus (latest, last) {
  //     // if (latest === 'finished') {
  //     //   this.show = true
  //     //   // this.navbarHeight = this.$refs.navbar.offsetHeight
  //     // } else {
  //     //   this.show = false
  //     // }
  //   }
  // },

  methods: {
    toggleSidebar (to) {
      let status = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$store.dispatch('setSidebarStatus', status)
    },
    handleScroll ( progress ) {
      if (this.isSidebarOpen) {
        this.cssPosition = 'fixed'
        this.cssTop = 0
        return
      }

      if (progress > 0.1 && this.navbarBurgered === false) {
        this.navbarBurgered = true
      } else if (progress === 0) {
        this.navbarBurgered = false
      }

      this.scrollPosition = getScrollTop()
      this.navbarPosition = getOffsetY(this.$refs.navbar)

      if ( this.scrollPosition < this.lastScrollPosition && this.scrollDirection !== 'up' ) {
        this.scrollDirection = 'up';

        if( this.scrollPosition >= ( this.navbarPosition + this.navbarHeight ) ) {
          this.cssPosition = 'absolute'
          this.cssTop = this.scrollPosition - this.navbarHeight
        }

      }

      if ( this.scrollPosition <= this.navbarPosition ) {
        this.cssPosition = 'fixed'
        this.cssTop = 0
      }

      if ( this.scrollPosition > this.lastScrollPosition && this.scrollDirection !== 'down') {
        if ( this.navbarPosition < 0 ) return

        this.cssPosition = 'absolute'
        this.cssTop = this.navbarPosition
        this.scrollDirection = 'down';
      }

      // TODO scrolled state for sticky header
      // if( this.scrollPosition > overlap height ) {
      //   Add overlap class
      // } else {
      //   Remove overlap class
      // }

      this.lastScrollPosition = this.scrollPosition

    }
  }
}

</script>

<style lang="sass">
@import "../../styles/variables.sass"
@import "../../styles/mixins.sass"

.navbar
  user-select: none
  text-rendering: geometricPrecision
  pointer-events: none
  position: absolute
  width: 100%
  z-index: 3
  transform: translate3d(0px, -100%, 0px)
  transform: translate3d(0px, 0px, 0px)

.navbar-transition-enter-active, .navbar-transition-leave-active
  // transition: transform $fadeTime ease, opacity $fadeTime ease
  transition: opacity $fadeTime ease

.navbar-transition-enter, .navbar-transition-leave-to
  opacity: 0
  // transform: translate3d(0px, -100%, 0px)


.home-link
  position: relative
  width: 6em
  height: 6em
  display: flex
  align-items: center
  justify-content: center

.layout.home
  .home-link
    pointer-events: none

// .layout.home
//   .home-link:hover
//     filter: $hover-filter
//   .home-link:active
//     filter: $active-filter

.nav-sidebar-button
  position: absolute
  right: 0

.home-link, .sidebar-button
  pointer-events: all

.navbar-end, .navbar-start
  align-items: center


// TODO styles for no site title or logo, back arrow

.layout.home
  .back-arrow
    display: none

.back-arrow
  transform: rotate(180deg)



// TODO styles for text site title:

.logo-site-title
  filter: opacity(0%)
  &.burgered
    filter: opacity(100%)

.text-site-title
  position: absolute
  font-size: 1.25em
  color: $white-ter
  left: 1.75em
  width: 8em
  filter: opacity(100%)
  transition: filter 0.15s ease
  &.burgered
    filter: opacity(0%)


</style>
