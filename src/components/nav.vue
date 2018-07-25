<template>
  <nav
    id="nav"
    class="nav navbar"
    :class="navColorScheme"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="back-wrapper">
      <transition name="fade">
        <button v-if="canGoHome" @click="backHome('about')" class="hamburger" type="button">
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
          <!-- <a class="bulge-in-animation" @click="navigate('contact')">
            Contact
          </a> -->
        </div>
      </transition>
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
        let scrollContext = document.getElementById('app');
        smoothScroll(0, 500, undefined, scrollContext);
      }, 200);
    });
    this.$events.$on('scroll-trigger', (value) => {
      // Get scroll events from any component
      this.scrollTo(value);
    });
    this.$events.$on('current-scroll-location', (value) => {
      // Update current scroll position // TODO: Is this the best system?
      console.log('set current scroll location');
      // set by home component?
      this.currentScrollLocation = value;
    });
    this.$events.$on('navigate-footer', (value) => {
      // Navigate home events from footer nav
      let scrollContext = document.getElementById('app');
      smoothScroll(0, 750, undefined, scrollContext);
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
      this.currentScrollTarget = event;

      let time = 750;
      let scrollTarget = document.getElementById(event);
      let scrollContext = document.getElementById('app');

      smoothScroll(scrollTarget, time, undefined, scrollContext);
    },
    navToggle () {
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
</style>
