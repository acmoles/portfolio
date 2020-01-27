<template>
  <transition name="header-transition">
    <header
      class="navbar"
      ref="navbar"
      :style="{ position: cssPosition, top: cssTop + 'px' }"
    >
      <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

      <router-link
        :to="$localePath"
        class="home-link"
      >
        <img
          class="logo"
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
        >
        <span
          ref="siteName"
          class="site-name"
          v-if="$siteTitle"
          :class="{ 'can-hide': $site.themeConfig.logo }"
        >{{ $siteTitle }}</span>
      </router-link>

      <div class="links">
        <NavLinks/>
      </div>
    </header>
  </transition>
</template>

<script>
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import updateOnScroll from 'uos'

export default {
  components: { SidebarButton, NavLinks },
  data () {
    return {
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
    },
  },

  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === 'covering' || latest === 'loading') {
        this.show = false
      } else {
        this.show = true
        this.navbarHeight = this.$refs.navbar.offsetHeight
      }
    }
  },

  methods: {
    handleScroll ( progress ) {
      this.scrollPosition = window.pageYOffset
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
    }
  }
}

</script>

<style lang="sass">
@import "../styles/variables.sass"

.navbar
  position: absolute
  transform: translate3d(0px, -100%, 0px)
  opacity: 0
  transition: transform $fadeTime ease, opacity $fadeTime ease

.finished
  .navbar
    opacity: 1
    transform: translate3d(0px, 0px, 0px)
</style>
