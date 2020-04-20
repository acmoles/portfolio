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
      <!-- <div class="container is-fullhd"> -->
        <div class="navbar-brand" :class="{ burgered: navbarBurgered }">
          <router-link
            :to="$localePath"
            class="home-link"
          >
            <!-- <Logo
              class="logo-site-title"
              :class="{ burgered: navbarBurgered }"
            /> -->
            <ArrowIcon class="back-arrow"/>
            <transition name="fade-fast">
              <span
                class="text-site-title"
                :class="{ burgered: navbarBurgered }"
                v-show="!navbarBurgered"
              >
                <strong>Anthony Moles</strong>
                <!-- <span>design, product and technology</span> -->
              </span>
            </transition>
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
      <!-- </div> -->
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
// import debounce from 'lodash.debounce'

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
        window.requestAnimationFrame(() => {
          this.handleScroll( progress )
        })
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
      return this.$store.state.isSidebarOpen || this.scrollPosition >= (this.windowHeight - 48)
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
  height: 6em
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
  display: flex
  align-items: center
  justify-content: center
  white-space: nowrap
  pointer-events: all
  min-width: 6em

.nav-sidebar-button
  position: absolute
  right: 0
  pointer-events: all

.navbar-end, .navbar-start
  align-items: center

// .container.is-fullhd > .navbar-brand
//   margin-left: 0


// Light/dark

// .dark:not(.force)
//   .back-arrow
//     #ArrowIcon
//       polygon
//         fill: $steel

// .dark:not(.force)
//   .hamburger
//       .hamburger-inner::before,
//       .hamburger-inner::after
//         background-color: $steel

// .dark:not(.force)
//   .navbar-item:not(.dropdown-item), .navbar-link
//     color: $slate
//   .navbar-link:not(.is-arrowless)::after
//     border-color: $slate

.light
  .text-site-title
    span
      color: $white
  .navbar-item, .navbar-link
    color: $white
  .navbar-link:not(.is-arrowless)::after
    border-color: $white


.layout.home
  .back-arrow
    display: none
  .home-link
    pointer-events: none

.back-arrow
  transform: rotate(180deg)
  display: none

.burgered
  .home-link
    pointer-events: all
  .back-arrow
    display: block


.logo-site-title
  filter: opacity(0%)
  &.burgered
    filter: opacity(100%)

.text-site-title
  color: $white-ter
  left: 2em
  margin-left: 2.25em
  span
    margin-left: 1em
    color: $button-custom-text-color


</style>
