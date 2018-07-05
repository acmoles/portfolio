<template>
  <nav id="nav" class="navbar" role="navigation" aria-label="main navigation">
    <div
      v-if="canGoHome"
      class="back-wrapper"
      >
      <!-- <button @click="backHome" class="hamburger hamburger--arrow is-active" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button> -->
      <button @click="backHome" class="hamburger" type="button">
        <span class="icon"><i class="icon-left-open-big full-opacity nav-icons"></i></span>
      </button>
    </div>
    <div class="burger-wrapper">
      <transition name="fade">
        <div v-if="navActive" class="burger-options">
          <a class="bulge-in" @click="scrollTo('about')">
            About
          </a>
          <a class="bulge-in" @click="scrollTo('work')">
            Work
          </a>
          <a class="bulge-in" @click="scrollTo('contact')">
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
</style>
