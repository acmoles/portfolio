<template>
  <nav
    id="footer-nav"
    class="nav navbar"
    :class="color"
    role="navigation"
    aria-label="footer navigation"
  >
    <div class="back-wrapper">
      <transition name="fade">
        <button v-if="back" @click="navigate('about')" class="hamburger" type="button">
          <span class="icon"><i class="icon-left-open-big full-opacity nav-icons"></i></span>
        </button>
      </transition>
    </div>
    <div class="burger-wrapper">
      <transition name="fade">
        <div v-if="navActive" class="burger-options">
          <a class="bulge-in-animation" @click="navigate('about')">
            About
          </a>
          <a class="bulge-in-animation" @click="navigate('work')">
            Work
          </a>
          <a class="bulge-in-animation" @click="navigate('contact')">
            Contact
          </a>
        </div>
      </transition>
      <button @click="navToggle" :class="{ 'is-active': navActive }" class="hamburger hamburger--3dx" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'FooterNav',
  props: {
    color: {
      type: String,
      default: 'is-dark'
    },
    back: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      navActive: false
    }
  },
  methods: {
    navigate (event) {
      this.$events.$emit('navigate-footer', event);
    },
    navToggle () {
      this.navActive = !this.navActive;
    }
  }
}
</script>

<style scoped lang="sass">

  .nav
    bottom: 0

</style>
