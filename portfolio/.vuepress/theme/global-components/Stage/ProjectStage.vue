<template>

  <section class="stage" :class="navStyle">

    <div
      ref="parent"
      class="visual project-card"
      :class="background">
      <div
        ref="parallax"
        v-if="!hasVisulColumnSlot"
        class="parallax"
        :class="[{'in-view': visible}, {'appear-stage-up': animating && !fadeless}]"
        :style="{transform: transform}">
        <slot name="visual-background"></slot>
      </div>
    </div>

    <div ref="stage-intro" class="stage-intro container is-fullhd">
      <div class="columns" :style="{transform: transform}">
        <div
          class="column stage-column"
          :class="[{'in-view': visible}, {'appear-stage-up': animating}, titleColumnClass]"
          v-on:transitionend="stageTransitionEnd()"
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
          :class="[{'in-view': visible}, {'appear-stage-up': animating}]"
        >
            <slot name="visual-column"></slot>
        </div>
      </div>
    </div>

    <div
      class="overview content"
      :class="[ {'wipe-up': readyForWipe} ]"
      :style="{ transform: 'translate3D(0,' + displacement + 'px, 0)' }"
      v-on:transitionend="wipeEnd()"
    >
    <div class="modal-background-only upper-mask" :class="{ 'finished': wipeFinished }"></div>

    <div class="overview-upper">
      <div class="modal-background-only upper-mask-nonblur" :class="{ 'finished': wipeFinished }"></div>
      <div class="container is-fullhd">

        <div class="columns is-vcentered is-gapless">
          <div class="column is-two-thirds is-overview-row" v-if="hasOverview">
            <div class="columns is-gapless">
              <div class="column">
                <strong>{{ platform }}</strong>
              </div>
              <div class="column">
                <strong>Team</strong>
              </div>
              <div class="column">
                <strong>My role</strong>
              </div>
              <div class="column">
                <strong>Timeframe</strong>
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
            <CopyButton/>
          </div>
        </div>

      </div>
    </div>

    <div class="background-noise overview-lower">
      <div class="container is-fullhd">

        <div class="columns is-gapless overview-lower-row" v-if="hasOverview">
          <div class="column is-two-thirds">
            <div class="columns is-gapless">
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

        <div class="columns is-mobile is-variable is-1 is-multiline overview-lower-mobile" v-if="hasOverview">
            <div class="column is-half">
              <strong>{{ platform }}</strong>
              <slot name="platform"></slot>
            </div>
            <div class="column is-half">
              <strong>Timeframe</strong>
              <slot name="timeframe"></slot>
            </div>
            <div class="column is-half">
              <strong>Team</strong>
              <slot name="team"></slot>
            </div>
            <div class="column is-half">
              <strong>My role</strong>
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
// import debounce from 'lodash.debounce'
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
    rag: String,
    ragTitle: String,
    hasModal: Boolean,
    platform: {
      type: String,
      default: 'Platform'
    },
    titleColumnClass: {
      type: String,
      default: 'is-two-thirds'
    },
  },

  mixins: [fadeUpInLoad, processedTitle],

  data () {
    return {
      transform: ``,
      oneTime: true,
      animating: true,
      readyForWipe: false,
      wipeFinished: false,
      displacement: null
    }
  },

  computed: {
    // TODO make description slot pull from page metadata? Could also be used for SEO
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

  watch: {
    pageLoadingStatus (latest, last) {
      if (!this.isMobile) {

        if (latest === 'finished' && this.intersected) {
          this.$forceNextTick(() => {
            this.visible = true
            this.visibleCallback()
          })
        } else if (latest === 'revealing') {
          this.$forceNextTick(() => {
            // console.log('scrolltop: ', getScrollTop());
            if (getScrollTop() === 0) {
              this.displacement = getViewport('y') - this.$refs['stage-intro'].getBoundingClientRect().height
              // console.log('rect is: ', this.$el.getBoundingClientRect().y);
              // console.log('viewport is: ', getViewport('y'));
              // console.log('displacement is: ', this.displacement);
            }
          })
        }

      }
    }
  },

  mounted () {
    this.$nextTick(() => {
        updateOnScroll(0, 1, progress => {
          window.requestAnimationFrame(() => {
            if (this.visible && !this.isModalOpen) {
              this.animateElement()
            }
          })
        })
    })
  },

  methods: {
    animateElement () {
      let animationValue = (getScrollTop() * 0.3) // speed factor
      if (animationValue >= 0 && animationValue <= 300) {
        this.transform = `translate3d(0, ${animationValue}px, 0)`
      }
    },
    visibleCallback () {
      // console.log('visible callback');
      this.readyForWipe = true
      this.$forceNextTick(() => {
        this.displacement = 0
      })
    },
    wipeEnd () {
      // console.log('whipe end');
      this.wipeFinished = true
    },
    stageTransitionEnd () {
      // console.log('stage end');
      this.animating = false
    }
  }

}

</script>

<style lang="sass">
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"

// Stage

.stage
  @include make3d
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
    min-height: 100vh
    display: flex
    flex: none
    padding-top: 7em
    position: relative
    .subtitle
      margin-bottom: 0
    .columns
      justify-content: space-between
      will-change: transform
      @include make3d
      position: relative
    @media screen and (min-width: $tablet)
      padding-top: 8em
      padding-bottom: 3em
      min-height: calc(100vh / 1.618)
      align-items: center

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

// .stage, .stage-intro, .visual
//   transform: translate3d(0,0,0)

// Overview

.overview
  @include make3d
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
  background-color: $black
  flex-grow: 1
  padding: 3em 0 4em 0
  min-height: 16em
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

.overview-lower-mobile
  strong
    display: block
    margin-bottom: 0.5em
  @media screen and (min-width: $tablet)
    display: none !important


// Overview modal shading

.modal-background-only.upper-mask, .modal-background-only.upper-mask-nonblur
  @include cover-screen

.modal-background-only.upper-mask
  @include make3d
  transition: opacity 0.4s ease
  background-color: transparent
  opacity: 0
  &.finished
    opacity: 1

.modal-background-only.upper-mask-nonblur
  backdrop-filter: none
  --webkit-backdrop-filter: none
  // background-image: none


// Background

.visual, .parallax
  height: calc(100vh + 24px + 6em)
  width: 100%
  position: absolute
  will-change: transform
  overflow: hidden
  @include make3d
  top: -24px
  @media screen and (min-width: $tablet)
    height: calc(100vh + 24px)

figure.full-screen
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


// Animations

html:not(.disable-motion)
  // .stage-column
  //   transition: opacity .8s $coverTransition, transform .8s $coverTransition
  //   transition-delay: $base-project-delay + $first-mover-delay

  .appear-stage-up
    transition: opacity .8s $fadeUpTransition ($base-project-delay + $first-mover-delay), transform 1s $coverTransition
    opacity: 0
    transform: translateY(144px)
    // transition: opacity 0.5s $fadeUpTransition, transform 0.5s $fadeUpTransition
    // transition-delay: $base-project-delay + $first-mover-delay

  .appear-stage-up.in-view
    transform: translateY(0)
    opacity: 1



  .overview.wipe-up
    // transition: transform $project-wipe-time $coverTransition
    transition: transform $project-wipe-time $coverTransition
    // cubic-bezier(.215,.61,.355,1)
    transition-delay: $base-project-delay

</style>
