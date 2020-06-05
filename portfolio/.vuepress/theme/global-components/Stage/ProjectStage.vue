<template>

  <section class="stage" :class="navStyle" :style="{ paddingTop: paddingTop, paddingBottom: paddingBottom }">

    <div
      ref="parent"
      class="visual project-card"
      :class="background">
      <div
        ref="parallax"
        v-if="!hasVisulColumnSlot"
        class="parallax"
        :class="[{'in-view': visible}, {'appear-fade-up': animating && !fadeless}]"
        :style="{transform: transform}">
        <slot name="visual-background"></slot>
      </div>
    </div>

    <div ref="container" class="container is-fullhd">
      <div class="columns">
        <div
          ref="stage-column"
          class="column stage-column is-two-thirds"
          :class="[{'in-view': visible}, {'appear-fade-up': animating}]"
        >
          <p class="subtitle" :class="ragClass">
            {{ description }}
          </p>
          <ProjectExternalLink
            v-if="ctaLabel !== 'none'"
            :label="ctaLabel"
            :href="ctaUrl"
          />
        </div>
        <div
          ref="column-parallax"
          v-if="hasVisulColumnSlot"
          class="column visual-column"
          :class="[{'in-view': visible}, {'appear-fade-up': animating}]"
          :style="{transform: transform}"
        >
            <slot name="visual-column"></slot>
        </div>
      </div>
    </div>

  </section>

</template>

<script>
import ProjectExternalLink from '@theme/components/ProjectExternalLink.vue'

import { fadeUpInLoad } from '@theme/mixins/fadeUpInLoad.js'
import { topPadding } from '@theme/mixins/topPadding.js'
import updateOnScroll from 'uos'
// import debounce from 'lodash.debounce'
import { getScrollTop, getViewport } from '../../util'

export default {
  components: { ProjectExternalLink },

  props: {
    ctaLabel: String,
    ctaUrl: String,
    description: String,
    noise: Boolean,
    fadeless: Boolean,
    ragClass: String,
  },

  mixins: [fadeUpInLoad, topPadding],

  data () {
    return {
      el: null,
      transform: ``,
      oneTime: true,
      animating: true,
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

    background () {
      return this.$page.frontmatter.background
    },

    isModalOpen () {
      return this.$store.state.isModalOpen
    },
  },

  mounted () {
    this.$nextTick(() => {
        // TODO turn off parallax after first scroll down
        updateOnScroll(0, 1, progress => {
          window.requestAnimationFrame(() => {
            if (this.visible && !this.isModalOpen) {
              this.animateElement()
            }
          })
        })

        // if (this.hasVisulColumnSlot) {
        //   this.el = this.$refs['column-parallax']
        // } else {
        //   this.el = this.$refs.parallax
        // }

        // this.el.addEventListener('transitionend', () => {
        //   this.animating = false
        //   console.log('end transition');
        // })

        // TODO is this the best way to tell when to turn off animation class for parallax?
        this.el = this.$refs['stage-column']
        this.el.addEventListener('transitionend', () => {
          this.animating = false
          // console.log('end transition');
        })



    })
  },

  methods: {
    animateElement () {
      let animationValue = (getScrollTop() * 0.3) // speed factor
      if (animationValue >= 0 && animationValue <= 300) {
        this.transform = `translate3d(0, ${animationValue}px, 0)`
      }
    }
  }

}

</script>

<style lang="sass">
@import "../../styles/variables.sass"
@import "../../styles/mixins.sass"

// Stage

.stage
  min-height: calc(100vh / 1.618)
  display: flex
  align-items: center
  .subtitle
    margin-bottom: 2rem
  &.light
    color: $white
    .subtitle
      color: $white
      filter: opacity(78%)

.stage-column
  padding-right: 10em
  position: relative


// Background

.visual.project-card
  top: 0
  height: 100vh
  width: 100%
  position: absolute
  overflow: hidden
  .parallax
    height: 100vh
    width: 100%
    position: absolute
    will-change: transform
    top: -24px

    .figure.full-screen
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


// In-column hero

.column.visual-column
  // padding: 0
  // margin: -4em
  position: relative
  will-change: transform
  display: flex
  align-items: center


// Animations

html:not(.disable-motion)
  .stage-column
    transition-delay: $base-project-delay + 0.6s
    // transition-delay: $base-project-delay + $project-wipe-time + $first-mover-delay

  .parallax.appear-fade-up, .visual-column.appear-fade-up
    transition: opacity .8s $fadeUpTransition .1s, transform .8s $fadeUpTransition .1s
    transition-delay: $base-project-delay + 0.6s

</style>
