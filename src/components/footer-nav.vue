<template>
  <nav
    id="footer-nav"
    class="nav navbar"
    :class="color"
    role="navigation"
    aria-label="footer navigation"
  >
    <div class="back-wrapper">
      <button
        v-if="!menuActive"
        @click="navigate('about')"
        class="hamburger"
        type="button">
        <span class="icon"><i class="icon-left-open-big full-opacity nav-icons"></i></span>
      </button>
    </div>
    <div v-if="!menuActive" class="grid-wrapper">
      <div
        @click="menuToggle"
        class="gridicon"
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
  </nav>
</template>

<script>

import MenuNav from '@/components/nav-menu.vue'

export default {
  name: 'FooterNav',
  components: {
    MenuNav
  },
  props: {
    color: {
      type: String,
      default: 'is-light'
    }
  },
  data () {
    return {
      menuActive: false
    }
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
