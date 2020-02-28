<template>
  <transition name="navbar-transition">
    <header
      v-show="show"
      class="navbar"
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
          <div class="home-link-circle">
            <Logo/>
          </div>
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
// TODO add tilt effect to nav-link-circle

import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import Logo from '@theme/components/Logo.vue'
import updateOnScroll from 'uos'
import debounce from 'lodash.debounce'

export default {
  components: { SidebarButton, NavLinks, Logo },
  data () {
    return {
      show: true,
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
      updateOnScroll(0, 1, progress => {
        this.handleScroll( progress )
      });
    })
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
    navStyle () {
      return this.$store.state.navStyle
      // TODO respond to navStyle (also in nprogress)
    },
    isSidebarOpen () {
      return this.$store.state.isSidebarOpen
    },
    isSearchboxOpen () {
      return this.$store.state.isSearchboxOpen
    },
  },

  watch: {
    pageLoadingStatus (latest, last) {
      // if (latest === 'finished') {
      //   this.show = true
      //   // this.navbarHeight = this.$refs.navbar.offsetHeight
      // } else {
      //   this.show = false
      // }
    }
  },

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

      this.scrollPosition = this.getScrollTop()
      this.navbarPosition = this.getOffsetY(this.$refs.navbar)

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

    },
    getOffsetY(el) {
        var rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset;
        return rect.top + scrollTop
    },
    getScrollTop () {
      return window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop || 0
    },
  }
}

</script>

<style lang="sass">
@import "../styles/variables.sass"
@import "../styles/mixins.sass"

.navbar
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
  .home-link-circle
    width: 3em
    height: 3em
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    background-color: $blue
    box-shadow: $element-shadow
    transition: transform 0.3s ease-out

.home-link:hover .home-link-circle
  transform: translateY(-0.25em)

.home-link-circle::after
  @include pseudo-full
  border-radius: 50%
  box-shadow: 0 0.5em 1.25em 0 rgba($blue, 0.42)
  opacity: 0
  transition: opacity 0.3s ease-in-out

.home-link:hover .home-link-circle::after
  opacity: 1


.nav-sidebar-button
  position: absolute
  right: 0

.home-link, .sidebar-button
  pointer-events: all

.navbar-end
  align-items: center

</style>
