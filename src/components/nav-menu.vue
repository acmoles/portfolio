<template>
  <div id="nav-menu-work" class="nav-menu">
    <transition name="fade">

      <div class="hero is-fullheight" v-if="menuVisible">
        <div class="hero-head header-menu">
          <div class="burger-wrapper">
            <button
              @click="$emit('dismiss')"
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

    </transition>

    </div>
</template>

<script>

import Work from '@/components/homepage/work.vue'

export default {
  name: 'MenuNav',
  components: {
    Work
  },
  data () {
    return {
      menuVisible: false
    }
  },
  created () {
    this.$events.$on('fade-out-nav-menu', () => {
      this.menuVisible = false;
    });
  },
  mounted () {
    setTimeout(() => {
      this.menuVisible = true;
    }, 600);
  },
  beforeDestroy () {
    this.menuVisible = false;
  }
}
</script>

<style scoped lang="sass">

  @import '../sass/variables'

  .nav-menu
    position: fixed
    bottom: 0
    top: 0
    left: 0
    right: 0
    z-index: 2
    pointer-events: all
    background: $steel
    overflow-y: scroll
    .hero-body
      @media screen and (max-width: $tablet)
        padding-top: 4em
        padding-bottom: 6.5em

  .header-menu
    display: flex
    justify-content: flex-end
    width: 100%
    position: absolute
    padding: 20px
    z-index: 2

</style>
