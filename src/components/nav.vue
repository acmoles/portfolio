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
    <div
      @click="menuToggle"
      class="burger-wrapper"
    >
      <div
        class="gridicon"
        :class="{ 'in-project' : canGoHome }"
      >
        <span></span>
      </div>
    </div>

    <transition name="slidedown">
      <template v-if="menuActive">

        <MenuNav
          :footer="false"
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
      navColorScheme: 'is-dark',
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
      }, 500);
      if (event === '2016') {
        this.navColorScheme = 'is-dark';
      } else {
        this.navColorScheme = 'is-light';
      }
      this.canGoHome = true;
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
    navigate (event) {
      if (this.canGoHome) {
        this.backHome(event);
      } else {
        this.scrollTo(event);
      }
    },
    scrollTo (event) {
      this.currentScrollLocation = event;
      this.ensureMenuDismiss();

      if (!this.canGoHome) {
        this.navColorScheme = 'is-dark';
      }

      let scrollTarget;
      if (event === 'top') {
        scrollTarget = 0;
      } else {
        scrollTarget = document.getElementById(event);
      }

      let time = 750;
      let scrollContext = document.getElementById('app');

      smoothScroll(scrollTarget, time, undefined, scrollContext);
    },
    ensureMenuDismiss() {
      // ensure menu is dismissed
      this.menuActive = false;
      this.$events.$emit('exit-scroll-lock');
      this.$events.$emit('footer-menu-dismiss');
    },
    menuToggle () {
      this.$events.$emit('toggle-scroll-lock');
      this.menuActive = !this.menuActive;
    },
    backHome (event) {
      this.navColorScheme = 'is-dark';
      this.canGoHome = false;
      this.$events.$emit('cant-go-home');

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

  // @import '../sass/variables'

</style>
