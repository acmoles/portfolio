<template>
  <nav
    id="nav"
    class="navbar"
    :class="navColorScheme"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="back-wrapper">
      <transition name="fade">
        <button v-if="canGoHome" @click="backHome" class="hamburger" type="button">
          <span class="icon"><i class="icon-left-open-big full-opacity nav-icons"></i></span>
        </button>
      </transition>
    </div>
    <div class="burger-wrapper">
      <transition name="fade">
        <div v-if="navActive" class="burger-options">
          <a class="bulge-in-animation" @click="navigate('about')">
            About
          </a>
          <a class="bulge-in-animation" @click="navigate('work')">
            Work
          </a>
          <a class="bulge-in-animation" @click="navigate('contact')">
            Contact
          </a>
        </div>
      </transition>
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

// like nav but sends events to nav

export default {
  name: 'Nav',
  data () {
    return {
      canGoHome: false,
      navColorScheme: 'is-dark',
      navActive: false,
      currentScrollLocation: 'about'
    }
  },
  created () {
    this.$events.$on('navigate-project', (value) => {
      this.navColorScheme = 'is-light';
      this.canGoHome = true;
    });
    this.$events.$on('scroll-trigger', (value) => {
      this.scrollTo(value);
    });
    this.$events.$on('current-scroll-location', (value) => {
      console.log('set current scroll location');
      // set by home component?
      this.currentScrollLocation = value;
    });
  },
  methods: {
    navigate (event) {
      if (this.canGoHome) {
        this.backHome();
        // need to act on callback...
        this.scrollTo(event);
      } else {
        this.scrollTo(event);
      }
    },
    scrollTo (event) {
      this.currentScrollTarget = event;
      let scrollContext = document.getElementById('app');
      let scrollTarget = document.getElementById(event);
      let time;
      if (event === 'contact') {
        time = 1250;
      } else {
        time = 500;
      }
      smoothScroll(scrollTarget, time, undefined, scrollContext);
    },
    navToggle () {
      this.navActive = !this.navActive;
    },
    backHome () {
      this.navColorScheme = 'is-dark';
      this.canGoHome = false;
      this.$router.push('/');
    }
  }
}
</script>

<style lang="sass">

  @import '../sass/variables'

  // // TODO: break out nav styles to separate module

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

  #nav.is-light
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
      color: $steel
      margin-right: 1em
      margin-top: 0.1em
      @for $i from 0 through 2
        &:nth-child(#{$i})
         animation-delay: (400ms - (100ms * $i))
      &.router-link-exact-active
        color: $blue
        // border-bottom: 2px solid $blue
      &:hover, &:focus, &:active
        color: $black

  .nav-icons
    font-size: 1.5em
    position: relative
    left: -5px
</style>
