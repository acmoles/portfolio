<template>
  <div class="container glass">

    <div class="glass-header"></div>

    <div class="glass-body">

      <div class="glass-ghost-body">
        <div class="glass-body-titles columns is-mobile is-gapless">
          <div class="profile ghost-profile column">
            <figure class="image">
            </figure>
          </div>
        </div>
      </div>

      <div class="glass-body">

        <div class="glass-body-titles columns is-mobile is-gapless">
          <div class="profile column">
            <figure class="image">
              <img src="/img/homepage/photo.jpg">
            </figure>
          </div>
          <div class="glass-body-details column">
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

        <div class="glass-body-content">
          <div class="glass-body-actions columns is-mobile is-variable is-1">
            <div class="column">
              <button
                class="button is-primary is-rounded"
                @click="scrollTo('work')"
                role="button"
              >
                Work
              </button>
            </div>
            <div class="column">
              <div class="dropdown is-up is-right is-active">
                <div class="dropdown-trigger">
                  <button
                    class="button is-success is-rounded is-outlined"
                    v-clipboard:copy="email"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError"
                    role="button"
                    aria-haspopup="true"
                  >
                    Email
                  </button>
                </div>
                <transition name="fade">
                  <div v-if="emailDropdown" class="dropdown-menu email-dropdown" role="menu">
                    <div class="dropdown-content">
                      <div class="dropdown-ghost">
                        <div class="dropdown-arrow center"></div>
                      </div>
                      <div class="dropdown-item">
                        {{ copyTextMessage }}
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
            <div class="column is-narrow">
              <div class="dropdown is-up is-right is-active">
                <div class="dropdown-trigger">
                  <button
                    class="button is-rounded options"
                    @click="toggleOptions"
                    role="button"
                    aria-haspopup="true"
                  >
                    <span class="icon is-small">
                      <i class="icon-dot-3 full-opacity"></i>
                    </span>
                  </button>
                </div>
                <transition name="fade">
                  <div v-if="optionsDropdown" class="dropdown-menu options-dropdown" role="menu">
                    <div class="dropdown-content">
                      <div class="dropdown-ghost">
                        <div class="dropdown-arrow right"></div>
                      </div>
                      <a href="" target="_blank" class="dropdown-item">
                        <span class="icon is-small">
                          <i class="icon-linkedin-squared full-opacity"></i>
                        </span> Linkedin
                      </a>
                      <a href="" target="_blank" class="dropdown-item">
                        <span class="icon is-small">
                          <i class="icon-github-squared full-opacity"></i>
                        </span> Github
                      </a>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <div class="content">
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
                  me uncover user’s fundamental needs and make systematic decisions.
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

      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'About',
  props: {
    prop: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      email: 'info@acmoles.design',
      copyTextMessage: 'Email copied',
      optionsDropdown: false,
      emailDropdown: false,
      blurbName: 'intro'
    }
  },
  methods: {
    scrollTo (event) {
      this.$events.$emit('scroll-trigger', event);
    },
    onCopy () {
      this.emailDropdown = true;
      setTimeout(() => {
        this.emailDropdown = false;
      }, 1500);
    },
    onError () {
      this.copyTextMessage = 'Error';
      this.emailDropdown = true;
      setTimeout(() => {
        this.emailDropdown = false;
      }, 1500);
    },
    toggleOptions () {
      this.optionsDropdown = !this.optionsDropdown;
    },
    blurbToggle () {
      this.blurbName = this.blurbName === 'extra' ? 'intro' : 'extra';
    }
  }
}
</script>

<style scoped lang="sass">

  @import '../../sass/variables'

  .glass
    border-radius: $radius-large
    overflow: hidden
    background: rgba(255, 255, 255, 0.5)
    display: flex
    flex-direction: column

  // Translucent header

  .glass-header
    border-radius: $radius-large $radius-large 0 0
    height: 5.25em
    flex-grow: 0
    @media screen and (min-width: $desktop)
      height: 15em
    @media screen and (min-width: $fullhd)
      height: 12em

  // Body content

  .glass-body
    position: relative
    display: flex
    flex-direction: column
    @media screen and (min-width: $desktop)
      flex-direction: row

  // Profile pic and details

  .glass-ghost-body
    background: $white
    opacity: 0.75
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    flex-grow: 1
    margin-bottom: 0 !important
    border-radius: 0 0 $radius-large $radius-large

  .ghost-profile
    .image
      border-color: $white
      background: $white

  .columns.glass-body-titles
    width: 100%
    margin-bottom: -0.5em
    @media screen and (min-width: $desktop)
      flex-direction: column
      flex: none
      width: 33.3333%

    .profile
      position: relative
      top: -64px
      margin-bottom: -64px
      flex: none
      @media screen and (min-width: $desktop)
        top: -128px
        flex: 1
      @media screen and (min-width: 1600px)
        top: -158px
      .image
        margin: 0 0.75em
        height: 128px
        width: 128px
        border: solid 5px transparent
        border-radius: $radius-rounded
        overflow: hidden
        @media screen and (min-width: $desktop)
          margin: 0 auto
          border-width: 10px
          height: 256px
          width: 256px
        @media screen and (min-width: 1600px)
          height: 320px
          width: 320px
        img
          mix-blend-mode: multiply
          border-radius: $radius-rounded

    .glass-body-details
      position: relative
      @media screen and (min-width: $desktop)
        margin-left: 0
        // top: -128px
        top: -64px
        text-align: center
      @media screen and (min-width: 1600px)
        top: -80px

    .title
      font-size: 1.5rem
      margin-top: 0.25em
      @media screen and (min-width: $tablet)
        font-size: 2rem

    .subtitle
      font-size: 1rem
      margin-bottom: 0.75em
      @media screen and (min-width: $tablet)
        font-size: 1.25rem

    .location
      font-size: 0.75rem
      opacity: 0.5

  // Content

  .glass-body-content
    padding: 0.75em
    padding-bottom: 1.75em
    @media screen and (min-width: $desktop)
      min-height: 22em

  .glass-body-actions
    margin-top: 0.5em
    @media screen and (min-width: $desktop)
      margin-top: 0
      max-width: 400px
    .button
      width: 100%
    .options
      background-color: transparent
      color: $extraDarkSmoke
      border-color: $extraDarkSmoke
      &:active, &:hover
        border-color: darken($extraDarkSmoke, 10%)
        color: darken($extraDarkSmoke, 10%)
      &:focus
        box-shadow: 0 0 0 0.125em rgba($extraDarkSmoke, 0.25)
      padding-left: 0.75em
      padding-right: 0.75em
      .icon
        position: relative
        top: 0.1em

  .content
    p span
      white-space: nowrap

  .blurb-toggle
    display: block
    margin-top: 0.75em

  .blurb-button
    display: inline-block
    width: 8px
    height: 8px
    margin-right: 0.25em
    border-radius: $radius-rounded
    background-color: $smoke
    transition: background-color 0.4s ease
    &.is-active
      background-color: $green
</style>
