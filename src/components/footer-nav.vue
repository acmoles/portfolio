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
        @click="navigate('about')"
        class="hamburger"
        type="button">
        <span class="icon"><i class="icon-left-open-big full-opacity nav-icons"></i></span>
      </button>
    </div>
    <div class="grid-wrapper">
      <a
        @click="menuToggle"
        class="gridicon"
      ><span></span></a>
    </div>

    <transition name="slide">
      <div
          v-if="menuActive"
          id="footer-work"
          class="hero is-fullheight footer-nav-menu"
        >

        <div class="hero-head modal-menu">
          <div class="burger-wrapper">
            <button
              @click="menuToggle"
              class="hamburger hamburger--3dx is-active"
              type="button"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>

        <div class="hero-body">
          <Work
            :headers="false"
          />
        </div>

        </div>
      </div>
    </transition>
  </nav>
</template>

<script>

import Work from '@/components/homepage/work.vue'

export default {
  name: 'FooterNav',
  components: {
    Work
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
      this.menuActive = !this.menuActive;
      this.$events.$emit('toggle-scroll-lock', event);
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

  a.gridicon
  	width: 1.5em
  	height: 1.5em
  	display: inline-flex
  	align-items: center
  	justify-content: center

  a.gridicon > span
  	transition: opacity, box-shadow .2s ease
    // font-family: icon

  a.gridicon > span
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

  // Footer menu

  .footer-nav-menu
    position: fixed
    bottom: 0
    top: 0
    left: 0
    right: 0
    z-index: 2
    pointer-events: all
    background: rgba( $steel, 0.85)
    overflow-y: scroll
    .hero-body
      animation: fade 400ms ease-in-out both
      animation-delay: 400ms
      @media screen and (max-width: $tablet)
        padding-top: 3.5em

  .modal-menu
    display: flex
    justify-content: flex-end
    width: 100%
    position: absolute
    padding: 20px 15px
    z-index: 2

</style>
