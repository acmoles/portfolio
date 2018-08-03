<template>
  <div class="glass">

    <div class="glass-header"></div>

    <div class="glass-body-container">

      <div class="glass-ghost-body">
        <div class="glass-body-titles">
          <div class="profile ghost-profile">
            <figure class="image">
            </figure>
          </div>
        </div>
      </div>

      <div class="glass-body">

        <div class="glass-body-titles">

          <div class="profile">
            <figure class="image">
              <img src="/img/homepage/photo.jpg">
            </figure>
          </div>

          <div class="glass-body-details">
            <h1 class="title">
              Anthony Moles
            </h1>
            <h2 class="subtitle">
              Product Designer
            </h2>
            <p class="location">
              <span class="icon is-small">
                <i class="icon-location"></i>
              </span>
              Berlin, Germany
            </p>
          </div>

        </div>

        <AboutActions />

        </div>

        <div class="copywrite">
          © Anthony Moles 2018
        </div>

      </div>

      <div v-if="aboutDropdown" class="content">
        <transition name="fade" mode="out-in">
          <div v-if="blurbName === 'intro'" key="intro" class="intro-text">
            <p>
              I help companies build useful and pleasing products.
            </p>
            <p>
              Over the past three years I’ve been working with toucanBox, a
              subscription / <span>e-commerce</span> start-up based in London.
              I’ve just arrived in Berlin.
            </p>
            <p>
              This portfolio consists of five case studies, three from toucanBox
              and two side projects. It also includes an overview of select work
              dating from before 2016.
            </p>
          </div>
          <div v-if="blurbName === 'extra'" key="extra" class="detail-text">
            <p>
              I use the design process to bring clarity to complex problems. I sketch and
              build prototypes to test hypotheses. I gather feedback and iterate.
            </p>
            <p>
              My training in human-centred design, originally focussing on physical objects, helps
              me uncover users' fundamental needs and make systematic decisions.
            </p>
            <p>
              I work alongside developers, speaking their language, to ensure products ship with
              the highest possible level of polish.
            </p>
          </div>
        </transition>
        <a
          class="blurb-toggle"
          @click="blurbToggle"
        >
          <span class="blurb-button" :class="{ 'is-active' : blurbName === 'intro' }"></span>
          <span class="blurb-button" :class="{ 'is-active' : blurbName === 'extra' }"></span>
        </a>
      </div>

    </div>
</template>

<script>

import AboutActions from '@/components/about-actions.vue'

export default {
  name: 'About',
  components: {
    AboutActions
  },
  props: {
    prop: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      aboutDropdown: false,
      blurbName: 'intro'
    }
  },
  methods: {
    scrollTo (event) {
      this.$events.$emit('scroll-trigger', event);
    },
    blurbToggle () {
      this.blurbName = this.blurbName === 'extra' ? 'intro' : 'extra';
    }
  }
}
</script>

<style scoped lang="sass">

  @import '../sass/variables'

  .glass
    width: 100%
    @media screen and (min-width: $desktop)
      width: 13em
    display: flex
    flex-direction: column
    height: 100%

  // Translucent header

  .glass-header
    height: 6.5em
    flex-grow: 0
    background: rgba($white, 0.35)

  // Body content

  .glass-body-container
    position: relative
    height: 100%

  .glass-ghost-body
    background: $white
    opacity: 0.75
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    flex-grow: 1

  // Profile pic and details

  .ghost-profile
    .image
      border-color: $white
      background: $white

  .profile
    position: relative
    margin-bottom: -1em
    text-align: center
    top: -4em
    flex: 1
    // @media screen and (min-width: 1600px)
    //   top: -158px
    .image
      margin: 0 0.75em
      height: 9em
      width: 9em
      border: solid 0.25em transparent
      border-radius: $radius-rounded
      overflow: hidden
      display: inline-flex
      img
        mix-blend-mode: multiply
        border-radius: $radius-rounded

  .glass-body
    text-align: center

  .glass-body-titles
    position: relative

  .glass-body-details
    position: relative
    top: -2.5em
  .title
    font-size: 1.5em
    margin-top: 0.25em

  .subtitle
    font-size: 1em
    margin-bottom: 0.75em

  .location
    font-size: 0.75em
    opacity: 0.5

  .copywrite
    display: none
    @media screen and (min-width: $desktop)
      display: block
    position: absolute
    width: 100%
    bottom: 0
    font-size: 0.5em
    opacity: 0.25
    padding: 0.5em 0.75em

  // Content

  .content
    p span
      white-space: nowrap

  .blurb-toggle
    display: block
    margin-top: 0.75em

  .blurb-button
    display: inline-block
    width: 0.5em
    height: 0.5em
    margin-right: 0.25em
    border-radius: $radius-rounded
    background-color: $smoke
    transition: background-color 0.4s ease
    &.is-active
      background-color: $green
</style>
