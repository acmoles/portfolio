<template>

  <section class="stage" :class="navStyle">

    <div
      class="visual project-card"
      :class="background"
      ref="visual"
      :style="{height: checkedHeight + 'px'}"
    >
      <div
        ref="parallax"
        v-if="!hasVisulColumnSlot"
        class="parallax"
        :style="{transform: transform}"
        v-on:transitionend="stageTransitionEnd()"
      >
        <slot name="visual-background"></slot>
      </div>
    </div>

    <div ref="stage-intro" class="stage-intro container is-fullhd">
      <div class="columns">
        <div
          class="column stage-column"
          :class="[titleColumnClass]"
        >
          <p class="small-title">{{ processedTitle(subtitle) }}</p>
          <h1 class="stage-title" :class="ragTitle">{{ title }}</h1>
          <p class="subtitle" :class="rag">
            {{ description }}
          </p>
        </div>
        <div
          v-if="hasVisulColumnSlot"
          class="column is-one-third visual-column"
          :style="{transform: transform}"
        >
            <slot name="visual-column"></slot>
        </div>
      </div>
    </div>

    <div
      class="overview content"
    >
    <div class="overview-upper">
      <div v-if="!minimal" class="modal-background-only upper-mask"></div>
      <div class="container is-fullhd">

        <div class="columns is-vcentered is-gapless">
          <div class="column is-two-thirds is-overview-row" v-if="hasOverview">
            <div class="columns is-gapless">
              <div class="column">
                <strong>{{ platform }}</strong>
              </div>
              <div class="column">
                <strong>{{ team }}</strong>
              </div>
              <div class="column">
                <strong>{{ myRole }}</strong>
              </div>
              <div class="column">
                <strong>{{ timeframe }}</strong>
              </div>
            </div>
          </div>

          <div class="column is-action-row">
            <template v-if="ctaLabel !== 'none'">
              <ProjectExternalModal
                v-if="hasModal"
                :label="ctaLabel"
              >
                <slot name="modal"></slot>
              </ProjectExternalModal>
              <ProjectExternalLink
                v-else
                :label="ctaLabel"
                :href="ctaUrl"
              />
            </template>
            <CopyButton v-if="!minimal"/>
          </div>
        </div>

      </div>
    </div>

    <div class="overview-lower background-noise">
      <div class="container is-fullhd">

        <div class="columns is-gapless overview-lower-row" v-if="hasOverview">
          <div class="column is-two-thirds">
            <div class="columns is-gapless overview-desktop-columns">
              <div class="column">
                <slot name="platform"></slot>
              </div>
              <div class="column">
                <slot name="team"></slot>
              </div>
              <div class="column">
                <slot name="my-role"></slot>
              </div>
              <div class="column">
                <slot name="timeframe"></slot>
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-mobile is-variable is-1 is-multiline overview-lower-mobile background-noise" v-if="hasOverview">
            <div class="column is-half">
              <strong>{{ platform }}</strong>
              <slot name="platform"></slot>
            </div>
            <div class="column is-half">
              <strong>{{ timeframe }}</strong>
              <slot name="timeframe"></slot>
            </div>
            <div class="column is-half">
              <strong>{{ team }}</strong>
              <slot name="team"></slot>
            </div>
            <div class="column is-half">
              <strong>{{ myRole }}</strong>
              <slot name="my-role"></slot>
            </div>
        </div>

      </div>
    </div>
  </div>

</section>

</template>

<script>
import ProjectExternalLink from '@theme/components/ProjectExternalLink.vue'
import ProjectExternalModal from '@theme/components/ProjectExternalModal.vue'
import CopyButton from '@theme/components/CopyButton.vue'

import { fadeUpInLoad } from '@theme/mixins/fadeUpInLoad.js'
// import { browserDetection } from '@theme/mixins/browserDetection.js'
import { processedTitle } from '@theme/mixins/processedTitle.js'

import updateOnScroll from 'uos'
import throttle from 'lodash/throttle'
import { getScrollTop, getViewport } from '@theme/util'
import config from '@theme/../config.js'

export default {
  name: 'ProjectStage',
  components: { ProjectExternalLink, ProjectExternalModal, CopyButton },

  props: {
    ctaLabel: String,
    ctaUrl: String,
    description: String,
    fadeless: Boolean,
    upless: Boolean,
    rag: String,
    ragTitle: String,
    hasModal: Boolean,
    platform: {
      type: String,
      default: 'Platform'
    },
    platform: {
      type: String,
      default: 'Platform'
    },
    team: {
      type: String,
      default: 'Team'
    },
    myRole: {
      type: String,
      default: 'My role'
    },
    timeframe: {
      type: String,
      default: 'Timeframe'
    },
    titleColumnClass: {
      type: String,
      default: 'is-two-thirds'
    },
    doParallax: {
      type: Boolean,
      default: true
    },
    minimal: Boolean
  },

  mixins: [fadeUpInLoad, processedTitle],

  data () {
    return {
      transform: ``,
      oneTime: true,
      checkedHeight: null
    }
  },

  computed: {
    // TODO make description slot pull from page metadata? Could also be used for SEO
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
    navStyle () {
      return this.$page.frontmatter.navStyle.style
    },
    hasVisulColumnSlot () {
      return !!this.$slots['visual-column']
    },
    hasOverview () {
      return !!this.$slots['platform']
    },
    background () {
      return this.$page.frontmatter.background
    },
    title () {
      return this.$page.frontmatter.subtitle
    },
    subtitle () {
      return this.$page.frontmatter.title
    },
    isModalOpen () {
      return this.$store.state.isModalOpen
    },
    $window () {
      return this.$store.state.window
    },
    isMobile () {
      return config.breakpoints.tablet >= this.$window.width
    },
  },

  mounted () {
    // let throttledScroll = throttle(() => {
    //   if (this.visible && !this.isModalOpen) {
    //     this.animateElement()
    //   }
    // }, 16)
    //
    // this.$nextTick(() => {
    //     updateOnScroll(0, 1, progress => {
    //       throttledScroll()
    //     })
    // })

    this.$nextTick(() => {
        this.checkHeight()

        updateOnScroll(0, 1, progress => {
          window.requestAnimationFrame(() => {
            if (this.visible && !this.isModalOpen && this.pageLoadingStatus === 'finished' && this.doParallax) {
              this.animateElement()
            }
          })
        })
    })
  },

  methods: {
    animateElement () {
      let animationValue = (getScrollTop() * 0.2) // speed factor
      if (animationValue >= 0 && animationValue <= 300) {
        this.transform = `translate3d(0, ${animationValue}px, 0)`
      }
    },
    checkHeight () {
      let visual = this.$refs['visual'].getBoundingClientRect().height
      // console.log('check visual ', visual)
      let naturalStage = this.$refs['stage-intro'].getBoundingClientRect().height
      // console.log('check natural stage ', naturalStage)
      if (naturalStage >= visual) {
        this.checkedHeight = naturalStage + 96 + 24
        // console.log('given total height ', this.checkedHeight)
      }
    }
  }
}

</script>

<style lang="sass">
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"

// Stage

.stage
  display: flex
  flex-direction: column
  overflow: hidden
  .stage-column
    position: relative
    z-index: 2
  .subtitle
    margin-bottom: 2rem
  &.light
    color: $white
    .subtitle
      color: $white
      opacity: 0.78
  @media screen and (min-width: $tablet)
    min-height: 100vh

  .stage-intro
    height: 100vh
    padding-top: 7em
    position: relative
    pointer-events: none
    .subtitle
      margin-bottom: 0
    .columns
      pointer-events: all
      grid-row-start: 2
      justify-content: space-between
      will-change: transform, opacity
      position: relative
    @media screen and (min-width: $tablet)
      padding-top: 0
      display: grid
      grid-template-rows: 1.618fr 1fr
      .columns
        top: -4em

  .stage-title
    font-size: 2em
    line-height: 1.15
    margin-bottom: 0.25em
    @media screen and (min-width: $tablet)
      font-size: 3.5em

// In-column hero
.column.visual-column
  position: relative
  display: flex
  justify-content: center
  align-items: center

// Overview

.overview
  display: flex
  flex-grow: 1
  flex-direction: column
  position: relative
  top: 1px

.overview-upper
  height: 6em
  position: relative
  display: flex
  flex-direction: column
  justify-content: center
  // Webkit hack fix
  box-shadow: 1px 0 1px 1px transparent
  .columns.is-gapless
    width: 100%
    .column
      display: flex
      height: 100%
  .columns.is-vcentered
    height: 6em
    .column.is-overview-row
      height: 100%
      display: none
      .column, .columns
        height: 100%
        align-items: flex-end
      strong
        margin-bottom: 0.9em
      @media screen and (min-width: $tablet)
        display: block
  .is-action-row
    justify-content: flex-end
    .button
      margin-top: auto
      margin-bottom: auto

  @media screen and (min-width: $tablet)
    .project-external-link
      margin-left: 2.5em
  .copy-button
    margin-left: 1em

.overview-lower
  flex-grow: 1
  padding: 3em 0 4em 0
  min-height: 16em
  background-color: $black
  @media screen and (min-width: $tablet)
    padding: 1em 0
  border-top: 1px solid rgba($pitch, 0.42)
  position: relative
  color: $extraDarkSmoke
  p, dl
    width: 80%
  .overview-lower-row
    display: none
    @media screen and (min-width: $tablet)
      display: block
  .overview-desktop-columns .column
    margin-right: 1em

.overview-lower-mobile
  background-color: $black
  strong
    display: block
    margin-bottom: 0.5em
  @media screen and (min-width: $tablet)
    display: none !important


// Overview modal shading

.modal-background-only.upper-mask
  @include cover-screen
  @include make3d
  background-image: url('../../plugins/plugin-outside-content/dark-noise-heavy-2extra.png')


// Background

.visual, .parallax
  height: 100%
  width: 100%
  position: absolute
  top: -24px

.visual
  height: calc(100vh + 24px + 6em)
  overflow: hidden

.visual .parallax, .column.visual-column, .column.stage-column
  @include make3d
  will-change: transform
  // will-change: transform, opacity
  // &.appear-fade-up, &.appear-fade
  //   transition-duration: 1.6s

figure.full-screen
  height: 100%
  img
    object-fit: cover
    width: 100%
    max-width: none
    height: 100%
    // top: 0px
    // right: 0px
    //
    // // width: auto
    // // height: 100vh
    // //
    // // max-height: none
    // // max-width: none
    //
    // min-height: 100%
    // min-width: 100%

@media screen and (max-width: $desktop)
  figure.full-screen
    height: 100%
    // img
    //   height: 100%
    //   max-width: none

</style>
