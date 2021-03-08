<template>
  <transition name="fade-fast-delay">
    <header
      v-show="!isModalOpen"
      v-if="burgerBottom"
      class="navbar"
      :class="[
        navStyle,
        { force: forceLight },
        { burgered: navbarBurgered },
        {'modal-background-only': hasModalBackground } ]"
      ref="navbar"
      :style="{ position: cssPosition, top: cssTop + 'px' }"
      role="navigation"
      aria-label="main navigation"
    >

      <div class="container is-fullhd">
        <div class="navbar-brand">

          <transition name="fade-fast-delay">
            <router-link
              :to="$localePath"
              class="home-link home-link-arrow"
              v-if="(navbarBurgered || isModalOpen) && !isMobileHome"
            >
              <ArrowIcon class="back-arrow"/>
            </router-link>
          </transition>

          <transition name="fade-fast-delay">
          <router-link
            :to="$localePath"
            class="home-link"
            v-if="!(navbarBurgered || isModalOpen) && pageLoadingStatus !== 'covering' || isMobileHome"
          >
            <Logo :white="navStyle === 'light'" class="logo-site-title"/>
              <span class="text-site-title">
                <strong>Anthony Moles</strong>
                <!-- <span>design, product and technology</span> -->
              </span>
            </router-link>
          </transition>

          <transition name="fade-fast-delay">
            <div
              class="nav-sidebar-button-wrapper"
              v-if="navbarBurgered"
              >
              <SidebarButton
                purpose="menu"
                @sidebar-button-event="toggleSidebar"
              />
            </div>
          </transition>

        </div>

        <NavLinks
          :active="isSidebarOpen"
          :burgered="navbarBurgered"
        />
      </div>
    </header>
  </transition>
</template>

<script>

import SidebarButton from '@theme/components/nav/SidebarButton.vue'
import NavLinks from '@theme/components/nav/NavLinks.vue'
import Logo from '@theme/components/icons/Logo.vue'
import ArrowIcon from '@theme/components/icons/ArrowIcon.vue'

import updateOnScroll from 'uos'
// import debounce from 'lodash.debounce'
import { disableScroll } from '@theme/mixins/disableScroll.js'

import { getScrollTop, getOffsetY, getViewport } from '@theme/util'
import config from '@theme/../config.js'

export default {
  components: { SidebarButton, NavLinks, Logo, ArrowIcon },
  mixins: [ disableScroll ],

  data () {
    return {
      navbarBurgered: false,
      isNarrow: false,
      navbarHeight: 16 * 6,
      navbarPosition: 0,
      scrollPosition: 0,
      lastScrollPosition: 0,
      scrollDirection: 'down',
      cssPosition: 'absolute',
      cssTop: 0,
      burgerBottom: true
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
    $window () {
      return this.$store.state.window
    },
    isSidebarOpen () {
      return this.$store.state.isSidebarOpen
    },
    isModalOpen () {
      return this.$store.state.isModalOpen
    },
    navStyle () {
      return this.$page.frontmatter.navStyle.style
    },
    isMobileHome () {
      return this.$page.frontmatter.home && config.breakpoints.tablet >= this.$window.width
    },
    forceLight () {
      return this.$store.state.isSidebarOpen || this.scrollPosition >= (this.$window.height - 48)
    },
    hasModalBackground () {
      return config.breakpoints.tablet >= this.$window.width
    }
  },

  watch: {
    $window (latest, last) {
      this.onWindowResize(latest.width)
    }
  },

  mounted () {
    this.onWindowResize(this.$window.width)
    this.setBodyEl()

    this.$router.beforeEach((to, from, next) => {
      // console.log('nav router guard');
      this.cssPosition = 'absolute'
      this.cssTop = 0
      next()
    })

    this.$nextTick(() => {

      updateOnScroll(0, 1, progress => {
        window.requestAnimationFrame(() => {
          this.handleScroll( progress )
        })
      })

    })
  },

  methods: {
    onWindowResize (width) {
      // console.log('resize ', width);
      if (width <= config.breakpoints.tablet) {
        this.isNarrow = true
        this.navbarBurgered = true
      } else {
        this.isNarrow = false
      }
    },
    toggleSidebar (to) {
      let status = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$store.dispatch('setSidebarStatus', status)

      // TODO fix effect of scroll lock on nav links...
      // if (status === true) {
      //   this.disableScrolling(true)
      // } else {
      //   this.enableScrolling(true)
      // }
    },
    handleScroll ( progress ) {
      // TODO // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
      // Perhaps uos already offers this?
      // https://lodash.com/docs/#debounce
      if (this.isSidebarOpen) {
        this.cssPosition = 'fixed'
        this.cssTop = 0
        return
      }

      this.scrollPosition = getScrollTop()
      if (this.$refs.navbar) {
        this.navbarPosition = getOffsetY(this.$refs.navbar)
      }

      if ( this.scrollPosition > (this.$window.height / 1.618) && this.navbarBurgered === false ) {
        this.navbarBurgered = true
      } else if (progress === 0 && !this.isNarrow) {
        this.navbarBurgered = false
      }

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
        if ( this.navbarPosition < 0 ) {
          console.log('navbar check')
          this.cssPosition = 'absolute'
          this.cssTop = 0
          return
        }

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

      if ((this.$window.height + this.scrollPosition) >= document.body.offsetHeight) {
        this.burgerBottom = false
        this.$forceNextTick(() => {
          this.cssPosition = 'fixed'
          this.cssTop = 0
          this.burgerBottom = true
          // console.log('bottom')
        })
      }

      this.lastScrollPosition = this.scrollPosition

    }
  }
}

</script>

<style lang="sass">
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"

.navbar
  @include make3d
  user-select: none
  text-rendering: geometricPrecision
  pointer-events: none
  position: absolute
  height: 6em
  width: 100%
  z-index: 3    

.home-link
  display: flex
  align-items: center
  justify-content: center
  white-space: nowrap
  pointer-events: all
  padding: 0 0.75em
  min-width: 6em

.nav-sidebar-button-wrapper
  position: absolute
  right: 0
  pointer-events: all

.home-link-arrow
  position: absolute
  left: 0
  height: 6em

.navbar-end, .navbar-start
  align-items: center

// logo desktop, text mobile

.logo-site-title
  display: none

@media screen and (min-width: $tablet)
  .text-site-title
    display: none
  .logo-site-title
    display: block



.text-site-title
  color: $white-ter
  .dot
    opacity: 0.42
    margin: 0 0.1em
    position: relative
    top: 0.056em

.light
  .text-site-title
    color: $white
    opacity: 0.9
  a.navbar-item, a.navbar-link, span.label
    opacity: 0.75
    color: $white
    &.router-link-active
      opacity: 1
    &:hover
      color: $white

.layout.home
  .back-arrow
    display: none
  .navbar-end
    margin-right: 1.5em
  .home-link
    pointer-events: none
    &:active
      opacity: 1
    @media screen and (min-width: $tablet)
      margin-left: .5em

.back-arrow
  transform: rotate(180deg)

.burgered .home-link
  pointer-events: all

@media screen and (max-width: $tablet - 1px)
  .navbar-menu
    box-shadow: none
    justify-content: flex-end
    margin-right: -1em
    .navbar-item
      text-align: right

@media screen and (max-width: $desktop - 1px)
  .navbar-menu.burgered
    .navbar-end
      margin-right: 6em

</style>
