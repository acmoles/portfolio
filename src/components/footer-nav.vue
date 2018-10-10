<template>
  <footer
    id="footer-nav"
    class="footer"
    v-show="canGoHome"
  >
    <nav
      class="nav navbar"
      role="navigation"
      aria-label="footer navigation"
      :class="navColorScheme"
    >
      <div
        class="navbar-brand"
      >
        <button
          @click="navigate"
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

    </nav>
  </footer>
</template>

<script>

export default {
  name: 'FooterNav',
  data () {
    return {
      navColorScheme: 'light',
      canGoHome: false
    }
  },
  created () {
    this.$events.$on('footer-menu-dismiss', () => {
      this.menuActive = false;
    });
    this.$events.$on('navigate-project', (event) => {
      this.canGoHome = true;
      if (event === '2016') {
        this.navColorScheme = 'dark';
      } else {
        this.navColorScheme = 'light';
      }
    });
    this.$events.$on('cant-go-home', () => {
      this.canGoHome = false;
    });
  },
  methods: {
    navigate () {
      this.$events.$emit('back-home-footer');
    },
    menuOpen () {
      this.$events.$emit('toggle-overlay-on', {
        transition: 'slideup',
        type: 'nav-menu'
      });
    },
  }
}
</script>

<style scoped lang="sass">
  @import '../sass/variables'

  .footer
    position: relative
    padding: 0
    background-color: transparent
    .nav
      align-items: flex-end

  .nav
    bottom: 0

</style>
