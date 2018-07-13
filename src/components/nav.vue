<template>
  <nav id="nav" class="navbar" role="navigation" aria-label="main navigation">
    <transition name="fade">
      <div
        v-if="canGoHome"
        class="back-wrapper"
        >
        <button @click="backHome" class="hamburger" type="button">
          <span class="icon"><i class="icon-left-open-big full-opacity nav-icons"></i></span>
        </button>
      </div>
    </transition>
    <div class="burger-wrapper">
      <div v-if="navActive" class="burger-options">
        <a class="bulge-in-animation" @click="scrollTo('about')">
          About
        </a>
        <a class="bulge-in-animation" @click="scrollTo('work')">
          Work
        </a>
        <a class="bulge-in-animation" @click="scrollTo('contact')">
          Contact
        </a>
      </div>
      <button @click="navToggle" :class="{ 'is-active': navActive }" class="hamburger hamburger--3dx" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/onboarding">Onboarding</router-link> | -->
  </nav>
</template>

<script>

import * as smoothScroll from 'smoothscroll'

export default {
  name: 'Nav',
  data () {
    return {
      canGoHome: true,
      navColorScheme: 'dark',
      navActive: false,
    }
  },
  beforeMount () {
    this.$events.$on('load', (value) => {

    });
  },
  methods: {
    scrollTo () {
      console.log('scroll');
      let scrollContext = document.getElementById('app');
      smoothScroll(0, 500, undefined, scrollContext);
    },
    navToggle () {
      this.navActive = !this.navActive;
    },
    backHome () {
      this.$router.push('/');
    }
  }
}
</script>

<style lang="sass">

  @import '../sass/variables'

  #nav
    position: absolute
    padding: 15px
    width: 100%
    display: flex
    justify-content: space-between
    z-index: 1
    pointer-events: none
    transition: color 0.8s ease
    @media screen and (min-width: $desktop)
      padding: 20px

  #nav.is-white
    color: $white
    a
      color: $white
      &:hover, &:focus, &:active
        color: $white-ter

  .burger-wrapper, .back-wrapper
    pointer-events: all

  .burger-wrapper
    display: flex

  .burger-options
    display: flex
    align-items: center
    justify-content: space-around
    position: relative
    top: -5px
    a
      font-weight: bold
      color: $steel
      margin-right: 1em
      @for $i from 0 through 2
        &:nth-child(#{$i})
         animation-delay: (400ms - (100ms * $i))
      &.router-link-exact-active
        color: $blue
        // border-bottom: 2px solid $blue
      &:hover, &:focus, &:active
        color: $black

</style>
