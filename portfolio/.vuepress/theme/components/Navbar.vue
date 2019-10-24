<template>
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
      //
      cssPosition: 'absolute',
      cssTop: 0
    }
  },
  mounted () {
    this.navbarHeight = this.$refs.navbar.offsetHeight
    console.log('navbar height, ', this.navbarHeight);
    updateOnScroll(0, 1, progress => {
      this.handleScroll( progress )
    });
  },
  computed: {

  },
  methods: {
    handleScroll ( progress ) {
      this.scrollPosition = window.pageYOffset
      this.navbarPosition = offsetY(this.$refs.navbar)

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

// Utility
function offsetY(el) {
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset;
    return rect.top + scrollTop
}

</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem
.navbar
  position: absolute;
  z-index 20
  top 0
  left 0
  right 0
  height $navbarHeight
  background-color #fff
  box-sizing border-box
  border-bottom 1px solid $borderColor

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color white
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top
@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .links
      padding-left 1.5rem
</style>
