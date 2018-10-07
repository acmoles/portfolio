<template>
  <div class="overlay-container">

  <transition :name="transitionName">
    <div
      v-if="overlayVisible"
      id="overlay-content"
      class="overlay"
    >

      <transition name="fade">
        <div class="hero is-fullheight" v-if="bodyVisible">
          <div class="hero-head nav navbar">
            <div class="navbar-brand header-menu">
              <button
                @click="dismiss"
                class="navbar-item hamburger"
                type="button"
              >
                <span class="icon is-medium">
                  <img src="/img/homepage/cross.svg" alt="">
                </span>
              </button>
            </div>
          </div>


          <div id="overlay-nav-menu" class="hero-body menu-container">
            <Work
              :headers="false"
            />
          </div>

        </div>
        </transition>

      </div>
    </transition>
  </div>
</template>

<script>

import Work from '@/components/work.vue'

export default {
  name: 'OverlayMenu',
  components: {
    Work
  },
  data () {
    return {
      transitionName: 'slidedown',
      menuType: 'nav-menu',
      overlayVisible: false,
      bodyVisible: false
    }
  },
  created () {
    this.$events.$on('fade-out-overlay-body', () => {
      this.bodyVisible = false;
    });
    this.$events.$on('toggle-overlay-on', (value) => {
      this.transitionName = value.transition;
      this.menuType = value.type;
      this.bodyVisible = false;
      this.overlayVisible = true;
      setTimeout(() => {
        this.bodyVisible = true;
      }, 600);
    });
    this.$events.$on('toggle-overlay-off', (value) => {
      this.transitionName = value.transition;
      this.overlayVisible = false;
    });
  },
  methods: {
    dismiss() {
      this.overlayVisible = false;
    }
  }
}
</script>

<style scoped lang="sass">

  @import '../sass/variables'

  .overlay
    position: fixed
    bottom: 0
    top: 0
    left: 0
    right: 0
    z-index: 2
    background: $steel
    @media screen and (max-width: $desktop)
      overflow-y: scroll
      .hero-body
        padding-top: 4em
        padding-bottom: 6.5em

  .header-menu
    display: flex
    justify-content: flex-end
    width: 100%
    position: relative
    z-index: 3

  .navbar-item
    padding: 1.1em 1.25em
    &:hover
      background-color: lighten($steel, 4%)

  .menu-container
    @media screen and (min-width: $desktop)
      padding: 0 6em
    @media screen and (min-width: $fullhd)
      padding: 0 7em

  .content
    color: $white
    text-align: left
    max-width: 40em
    margin: 0 auto
    padding: 0.75em
    h3, h4
      color: $white
    p span
      white-space: nowrap

</style>
