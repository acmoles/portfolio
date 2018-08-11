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
        <button v-if="canGoHome" @click="backHome('work')" class="hamburger" type="button">
          <span class="icon"><i class="icon-left-open-big full-opacity nav-icons"></i></span>
        </button>
        <!-- <div v-else class="logotype">
          ANTHONY MOLES
        </div> -->
      </transition>
    </div>
    <div
      @click="menuToggle"
      class="burger-wrapper"
      v-if="canGoHome"
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
    scrollTo (event) {

      this.currentScrollLocation = event;

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
      this.navColorScheme = 'is-dark';
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
