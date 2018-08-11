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
        v-if="!menuActive"
        class="navbar-brand"
      >
        <button
          @click="navigate('work')"
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
            <img src="/img/homepage/grid.svg" alt="">
          </span>
        </button>
      </div>

      <transition name="slideup">
        <template v-if="menuActive">

          <MenuNav
            :menuId="'footer-nav'"
            @dismiss="menuToggle"
          />

        </template>
      </transition>
    </nav>
  </footer>
</template>

<script>

import MenuNav from '@/components/nav-menu.vue'

export default {
  name: 'FooterNav',
  components: {
    MenuNav
  },
  data () {
    return {
      navColorScheme: 'light',
      menuActive: false,
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
    navigate (event) {
      this.$events.$emit('navigate-footer', event);
    },
    menuToggle () {
      this.menuActive = !this.menuActive;
    }
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
