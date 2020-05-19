<template>

  <div class="stage" :class="lightClass" :style="{ paddingTop: paddingTop, paddingBottom: paddingBottom }">
    <div ref="container" class="container is-fullhd">

      <div class="columns">
        <div
          class="column stage-column is-two-thirds appear-fade-up"
          :class="{'in-view': visible}"
        >
          <p class="subtitle">
            {{ description }}
          </p>
          <ProjectExternalLink
            :label="ctaLabel"
            :href="ctaUrl"
          />
        </div>

        <div
          v-if="hasVisulGridSlot"
          class="column visual-grid appear-fade-up"
          :class="{'in-view': visible}"
        >
          <slot name="visual-grid"></slot>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
import ProjectExternalLink from '@theme/components/ProjectExternalLink.vue'

import { fadeUpInLoad } from '@theme/mixins/fadeUpInLoad.js'
import { topPadding } from '@theme/mixins/topPadding.js'

// :class="{'is-two-thirds': !istoucanBox}"


export default {
  components: { ProjectExternalLink },

  props: {
    ctaLabel: String,
    ctaUrl: String,
    description: String,
  },

  mixins: [fadeUpInLoad, topPadding],

  computed: {
    // TODO make description slot pull from page metadata? Could also be used for SEO

    lightDark () {
      return this.$page.frontmatter.navStyle.style
    },

    lightClass () {
      return {
        'light': this.lightDark === 'light'
      }
    },

    hasVisulGridSlot () {
      return !!this.$slots['visual-grid']
    },

    istoucanBox () {
      // TODO want this?
      return this.$page.frontmatter.title === 'toucanBox'
    }
  }

}

</script>

<style lang="sass">
@import "../../styles/variables.sass"
@import "../../styles/mixins.sass"

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
      filter: opacity(70%)

.stage-column
  padding-right: 10em
  &.hero-grid
    padding-right: 10em

.visual-grid
  // padding: 0
  // margin: -4em
  position: relative
  display: flex
  align-items: center
  .image
    position: absolute
    left: 0
    width: 200%


html:not(.disable-motion)
  .stage-column
    transition-delay: $base-project-delay + $project-wipe-time + $first-mover-delay

  .visual-grid
    transition-delay: $base-project-delay + $project-wipe-time + $first-mover-delay + 0.4s

    // transition: $project-image-transition
    // transform: translate3d(0, 0, 0) scale3d(1.025, 1.025, 1)
    // transition-delay: $project-image-delay

</style>
