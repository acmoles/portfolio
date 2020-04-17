<template>

  <div class="stage" :class="lightClass" :style="{ paddingTop: paddingTop, paddingBottom: paddingTop }">
    <div ref="container" class="container is-fullhd">

      <div class="columns">
        <div
          class="column stage-description-column appear-fade-up"
          :class="{'in-view': visible}"
        >
          <p class="subtitle appear-fade-up" :class="{'in-view': visible}">
            {{ description }}
          </p>
          <ProjectExternalLink :label="ctaLabel" :href="ctaUrl"/>
        </div>

        <div class="column stage-details-column">
          <div
            class="visual-grid"
            :class="[{'in-view': (visible && fadeUpHero)}, {'appear-fade-up': fadeUpHero}]"
          >
            <slot name="visual-grid"></slot>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import ProjectExternalLink from '@theme/global-components/ProjectExternalLink.vue'

import { fadeUpInLoad } from '@theme/mixins/fadeUpInLoad.js'
import { topPadding } from '@theme/mixins/topPadding.js'

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
    }


  }

}

</script>

<style lang="sass">
@import "../styles/variables.sass"
@import "../styles/mixins.sass"

.stage
  min-height: calc(100vh / 1.618)
  display: flex
  align-items: center
  &.light
    color: $white

  .stage-description
    text-rendering: geometricPrecision
    padding-right: 3em

  // TODO want this?
  // .stage-description-column
  //   margin-left: 1.75em


  .stage-details-column
    display: flex
    flex-direction: column
    justify-content: space-between

  .stage-details
    margin-top: 0.5em
    margin-bottom: 3em
    position: relative
    li
      margin-left: 1.25em
      margin-bottom: 0.75em
      &::before
        content: "¬"
        position: absolute
        left: 0

</style>
