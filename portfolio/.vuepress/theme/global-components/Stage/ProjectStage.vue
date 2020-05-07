<template>

  <div class="stage" :class="lightClass" :style="{ paddingTop: paddingTop, paddingBottom: paddingBottom }">
    <div ref="container" class="container is-fullhd">

      <div class="columns">
        <div
          class="column stage-column is-two-thirds"
          :class="{'hero-grid': fadeUpHero}"
        >
          <p
            class="subtitle appear-fade-up"
            :class="{'in-view': visible}"
          >
            {{ description }}
          </p>
          <div class="project-cta appear-fade-up" :class="{'in-view': visible}">
            <ProjectExternalLink
              :label="ctaLabel"
              :href="ctaUrl"
            />
          </div>
        </div>

        <div
          v-if="hasVisulGridSlot"
          class="column visual-grid"
          :class="[{'in-view': (visible && fadeUpHero)}, {'appear-fade-up': fadeUpHero}]"
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
    fadeUpHero: Boolean
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
  .subtitle
    transition-delay: $base-project-delay + 1s

  .project-cta
    transition-delay: $base-project-delay + 1.2s

  .visual-grid
    transition-delay: $base-project-delay + 1.4s

</style>
