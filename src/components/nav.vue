<template>
  <nav
    id="nav"
    class="nav navbar"
    :class="navColorScheme"
    role="navigation"
    aria-label="main navigation"
  >
  <transition name="fade">
    <div
      v-if="canGoHome"
      class="navbar-brand"
    >
      <button
        @click="backHome('work')"
        class="navbar-item back-wrapper hamburger"
        type="button"
      >
          <span class="icon"><i class="icon-left-open-big full-opacity nav-icons"></i></span>
      </button>
      <button
        @click="menuOpen"
        class="navbar-item burger-wrapper hamburger"
        type="button"
      >
        <span class="icon is-large">
          <template v-if="navColorScheme === 'dark'">
            <img src="/img/homepage/grid-dark.svg" alt="">
          </template>
          <template v-else>
            <img src="/img/homepage/grid.svg" alt="">
          </template>
        </span>
      </button>
    </div>
  </transition>

  </nav>
</template>

<script>

import * as smoothScroll from 'smoothscroll'

export default {
  name: 'Nav',
  data () {
    return {
      canGoHome: false,
      navColorScheme: 'light',
      menuActive: false,
      currentScrollLocation: 'about'
    }
  },
  created () {
    this.$events.$on('navigate-project', (event) => {
      // Navigate to a project from anywhere
      setTimeout(() => {
        // Avoid popin mix layers
        this.ensureMenuDismiss();
        setTimeout(() => {
          this.canGoHome = true;
        }, 300);
      }, 500);
      if (event === '2016') {
        this.navColorScheme = 'dark';
      } else {
        this.navColorScheme = 'light';
      }
    });
    this.$events.$on('scroll-trigger', (value) => {
      // Get scroll events from any component
      this.scrollTo(value);
    });
    this.$events.$on('navigate-footer', (value) => {
      // Navigate home events from footer nav
      this.scrollTo({
        location: 'top',
        smooth: true
      });
      setTimeout(() => {
        this.backHome(value);
      }, 750);
    });
  },
  methods: {
    scrollTo (event) {

      this.currentScrollLocation = event.location;

      let scrollTarget;
      if (event.location === 'top') {
        scrollTarget = 0;
      } else {
        scrollTarget = document.getElementById(event);
      }
      let time = 750;

      if (event.smooth) {
        smoothScroll(scrollTarget, time);
      } else {
        if (event.location === 'top') {
          window.scrollTo(0, 0);
        } else {
          scrollTarget.scrollIntoView();
        }
      }

    },
    ensureMenuDismiss() {
      // ensure menu is dismissed
      this.$events.$emit('toggle-overlay-off', {
        transition: 'slidedown'
      });
    },
    menuOpen () {
      this.$events.$emit('toggle-overlay-on', {
        transition: 'slidedown',
        type: 'nav-menu'
      });
    },
    backHome () {
      this.canGoHome = false;
      this.$events.$emit('cant-go-home');

      this.$router.push('/');
    }
  }
}
</script>

<style lang="sass">

  // @import '../sass/variables'

</style>
