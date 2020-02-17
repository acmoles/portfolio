<template>
    <header
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
          <!-- <img
            class="logo"
            :src="$withBase('/images/icons/logo.svg')"
            :alt="$siteTitle"
          > -->
          <!-- <span
            ref="siteName"
            class="site-name"
          >{{ $siteTitle }}</span> -->
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
</template>

<script>
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import updateOnScroll from 'uos'
import debounce from 'lodash.debounce'

export default {
  components: { SidebarButton, NavLinks },
  data () {
    return {
      navbarBurgered: false,
      navbarHeight: 0,
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
      if (latest === 'covering' || latest === 'loading') {
        this.show = false
      } else {
        this.show = true
        this.navbarHeight = this.$refs.navbar.offsetHeight
        this.navbarBurgered = false
      }
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

      // TODO test for burgered when loading status reveals nav
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


      // this.$events.fire('navScroll', {
      //   scrollProgress: progress,
      //   position: this.cssPosition,
      //   navBarToViewport: this.cssTop === 0 ? 0 : this.cssTop - window.pageYOffset
      // });

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

<style scoped lang="sass">
@import "../styles/variables.sass"

.navbar
  position: absolute
  width: 100%
  z-index: 3
  transform: translate3d(0px, -100%, 0px)
  opacity: 0
  transition: transform $fadeTime ease, opacity $fadeTime ease

.finished
  .navbar
    opacity: 1
    transform: translate3d(0px, 0px, 0px)

.home-link
  width: 3em
  height: 3em
  border-radius: 50%
  background-color: $blue
  margin: 1.5em

.nav-sidebar-button
  position: absolute
  right: 0
</style>
