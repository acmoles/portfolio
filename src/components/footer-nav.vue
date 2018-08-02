<template>
  <footer
    id="footer-nav"
    class="footer"
    role="navigation"
    aria-label="footer navigation"
    v-show="canGoHome"
  >
    <div
      class="nav navbar"
      :class="navColorScheme"
    >
      <div class="back-wrapper">
        <button
          v-if="!menuActive"
          @click="navigate('work')"
          class="hamburger"
          type="button">
          <span class="icon"><i class="icon-left-open-big full-opacity nav-icons"></i></span>
        </button>
      </div>
      <div
        v-if="!menuActive"
        @click="menuToggle"
        class="grid-wrapper"
      >
        <div
          class="gridicon in-project"
        >
          <span></span>
        </div>
      </div>

      <transition name="slideup">
        <template v-if="menuActive">

          <MenuNav
            :footer="true"
            @dismiss="menuToggle"
          />

        </template>
      </transition>
    </div>
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
      navColorScheme: 'is-light',
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
        this.navColorScheme = 'is-dark';
      } else {
        this.navColorScheme = 'is-light';
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
      this.$events.$emit('toggle-scroll-lock');
      this.menuActive = !this.menuActive;
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../sass/variables'

  .nav
    bottom: 0

  .icon
    position: relative
    top: 0.25em

</style>
