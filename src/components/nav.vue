<template>
  <nav
    id="nav"
    class="nav navbar"
    :class="navColorScheme"
    role="navigation"
    aria-label="main navigation"
  >

    <transition name="slidedown">
      <div v-if="navActive" class="hero is-fullheight burger-options">
        <div class="hero-body">
          <button
            class="button"
            :class="{ 'location-active' : currentScrollLocation === 'about' }"
            @click="navigate('about')"
          >
            About
          </button>
          <button
            class="button"
            :class="{ 'location-active' : currentScrollLocation === 'work' }"
            @click="navigate('work')"
          >
            Work
          </button>
          <!-- <a class="bulge-in-animation" @click="navigate('contact')">
            Contact
          </a> -->
        </div>
      </div>
    </transition>

    <div class="back-wrapper">
      <transition name="fade">
        <button v-if="canGoHome" @click="backHome('about')" class="hamburger" type="button">
          <span class="icon"><i class="icon-left-open-big full-opacity nav-icons"></i></span>
        </button>
      </transition>
    </div>
    <div class="burger-wrapper">
      <button @click="navToggle" :class="{ 'is-active': navActive }" class="hamburger hamburger--3dx" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </nav>
</template>

<script>

import * as smoothScroll from 'smoothscroll'

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
    this.$events.$on('navigate-project', () => {
      // Navigate to a project
      this.navColorScheme = 'is-light';
      this.canGoHome = true;
      setTimeout(() => {
        this.scrollTo('project');
      }, 200);
    });
    this.$events.$on('scroll-trigger', (value) => {
      // Get scroll events from any component
      this.scrollTo(value);
    });
    // this.$events.$on('current-scroll-location', (value) => {
    //   // Update current scroll position // TODO: Is this the best system?
    //   console.log('set current scroll location');
    //   // set by watching home component?
    //   this.currentScrollLocation = value;
    // });
    this.$events.$on('navigate-footer', (value) => {
      // Navigate home events from footer nav
      this.scrollTo('top');
      setTimeout(() => {
        this.backHome(value);
      }, 750);
    });
  },
  methods: {
    navigate (event) {
      if (this.canGoHome) {
        this.backHome(event);
      } else {
        this.scrollTo(event);
      }
    },
    scrollTo (event) {
      this.currentScrollLocation = event;
      console.log('scroll location = ', this.currentScrollLocation);

      // ensure menu is dismissed
      this.navActive = false;
      this.$events.$emit('exit-scroll-lock', event);
      if (!this.canGoHome) {
        this.navColorScheme = 'is-dark';
      }

      let scrollTarget;
      if (event === 'top' || event === 'project') {
        scrollTarget = 0;
      } else {
        scrollTarget = document.getElementById(event);
      }

      let time = 750;
      let scrollContext = document.getElementById('app');

      smoothScroll(scrollTarget, time, undefined, scrollContext);
    },
    navToggle () {
      this.$events.$emit('toggle-scroll-lock', event);
      if (!this.canGoHome) {
        this.navColorScheme = this.navActive ? 'is-dark' : 'is-light';
      }
      this.navActive = !this.navActive;
    },
    backHome (event) {
      this.navColorScheme = 'is-dark';
      this.canGoHome = false;

      let scrollTarget = event;
      this.$router.push('/', () => {
        setTimeout(() => {
          this.scrollTo(scrollTarget);
        }, 1000)
      });
    }
  }
}
</script>

<style lang="sass">

  @import '../sass/variables'

  .hero.burger-options
    position: fixed
    bottom: 0
    top: 0
    left: 0
    right: 0
    pointer-events: all
    background: rgba( $steel, 0.85)
    .hero-body
      animation: fade 400ms ease-in-out both
      animation-delay: 400ms

    // display: flex
    // align-items: center
    // justify-content: space-around
    // position: relative
    // top: -5px
    // a
    //   color: $steel
    //   transition: transform 1s ease
    //   font-weight: 600
    //   margin-right: 1em
    //   border-bottom: 2px solid transparent
    //   @for $i from 0 through 2
    //     &:nth-child(#{$i})
    //      animation-delay: (400ms - (100ms * $i))
    //   &:hover, &:focus, &:active
    //     transform: scale(1.2)
    //     color: $black
    //   &.location-active
    //     color: $black
    //     border-bottom: 2px solid $black
</style>
