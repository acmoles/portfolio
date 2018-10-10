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
        @click="backHome"
        class="navbar-item hamburger"
        type="button"
      >
          <span class="icon"><i class="icon-left-open-big full-opacity nav-icons"></i></span>
      </button>
      <button
        @click="menuOpen"
        class="navbar-item hamburger"
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
      window.scrollTo(0, 0);
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
    this.$events.$on('cant-go-home', () => {
      this.canGoHome = false;
    });
    this.$events.$on('back-home', () => {
      // Navigate home events from UI
      this.$events.$emit('home-sequence', () => {
        this.$router.push('/');
      });
    });
  },
  methods: {
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
      this.$events.$emit('back-home');
    }
  }
}
</script>

<style lang="sass">

  // @import '../sass/variables'

</style>
