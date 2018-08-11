<template>
  <div :id="menuId" class="nav-menu">
    <transition name="fade">

      <div class="hero is-fullheight" v-if="menuVisible">
        <div class="hero-head nav navbar">
          <div class="navbar-brand header-menu">
            <button
              @click="$emit('dismiss')"
              class="navbar-item burger-wrapper hamburger"
              type="button"
            >
              <span class="icon is-medium">
                <img src="/img/homepage/cross.svg" alt="">
              </span>
            </button>
          </div>
        </div>

        <template v-if="menuId === 'about-popup'">
          <div class="hero-body">
            <div class="content about-copy">
              <h3>
                I help companies build useful and pleasing products
              </h3>
              <p>
                Over the past three years I’ve been working with <a href="https://www.toucanbox.com" target="_blank">toucanBox</a>, a
                subscription / <span>e-commerce</span> start-up based in London.
                I’ve just arrived in Berlin.
              </p>
              <p>
                This portfolio consists of five case studies, three from toucanBox
                and two side projects. It also includes an overview of select work
                dating from before 2016.
              </p>
              <h4>Product Design</h4>
              <p>
                I use the design process to bring clarity to complex problems. I sketch and
                build prototypes to test hypotheses. I gather feedback and iterate.
              </p>
              <p>
                My training in human-centred product design, originally focussing on physical objects, helps
                me uncover users' fundamental needs and make systematic decisions.
              </p>
              <p>
                I work alongside developers, speaking their language, to ensure products ship with
                the highest possible level of polish.
              </p>
            </div>
          </div>
          </template>
          <template v-else>
            <div class="hero-body menu-container">
              <Work
                :headers="false"
              />
            </div>
          </template>

      </div>

    </transition>

    </div>
</template>

<script>

import Work from '@/components/work.vue'

export default {
  name: 'MenuNav',
  components: {
    Work
  },
  props: {
    menuId: {
      type: String,
      default: 'header-nav'
    }
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
    @media screen and (max-width: $tablet)
      overflow-y: scroll
      .hero-body
        padding-top: 4em
        padding-bottom: 6.5em

  .header-menu
    display: flex
    justify-content: flex-end
    width: 100%
    position: relative
    z-index: 2

  .navbar-item
    padding: 1.1em 1.25em

  .menu-container
    @media screen and (min-width: $desktop)
      padding: 0 6.5em

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
