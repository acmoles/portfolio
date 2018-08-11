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
        @click="menuToggle"
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

    <transition name="slidedown">
      <template v-if="menuActive">

        <MenuNav
          :menuId="'header-nav'"
          @dismiss="menuToggle"
        />

      </template>
    </transition>

  </nav>
</template>

<script>

import * as smoothScroll from 'smoothscroll'
import MenuNav from '@/components/nav-menu.vue'

export default {
  name: 'Nav',
  components: {
    MenuNav
  },
  data () {
    return {
      canGoHome: false,
      navColorScheme: 'dark',
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
        this.canGoHome = true;
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
      this.scrollTo('top');
      setTimeout(() => {
        this.backHome(value);
      }, 750);
    });
  },
  methods: {
    scrollTo (event) {

      this.currentScrollLocation = event;

      let scrollTarget;
      if (event === 'top') {
        scrollTarget = 0;
      } else {
        scrollTarget = document.getElementById(event);
      }
      let time = 750;

      smoothScroll(scrollTarget, time, () => {
        this.ensureMenuDismiss();
      });
    },
    ensureMenuDismiss() {
      // ensure menu is dismissed
      this.menuActive = false;
      this.$events.$emit('footer-menu-dismiss');
    },
    menuToggle () {
      this.menuActive = !this.menuActive;
    },
    backHome (event) {
      this.navColorScheme = 'dark';
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
