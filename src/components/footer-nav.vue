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

  .grid-wrapper
    cursor: pointer

  .gridicon
  	width: 1.5em
  	height: 1.5em
  	display: inline-flex
  	align-items: center
  	justify-content: center

  .gridicon > span
  	transition: opacity, box-shadow .2s ease
    // font-family: icon

  .gridicon > span
  	background: $white
  	width: 3px
  	height: 3px
  	box-shadow: -.6em -.6em $white, 0 -.6em $white, .6em -.6em $white, -.6em 0 $white, .6em 0 $white, -.6em .6em $white, 0 .6em $white, .6em .6em $white


  .gridicon:hover > span
  	box-shadow: -.8em -.8em $white, 0 -.8em $white, .8em -.8em $white, -.8em 0 $white, .8em 0 $white, -.8em .8em $white, 0 .8em $white, .8em .8em $white


  .gridicon:active > span, .gridicon:focus > span
  	box-shadow: -1em -1em $white, 0 -1em $white, 1em -1em $white, -1em 0 $white, 1em 0 $white, -1em .8em $white, 0 1em $white, 1em 1em $white

  .gridicon:active > span
    opacity: 0.5

</style>
