<template>
  <section
    class="section context background-noise appear-fade-up"
    :class="[ {'in-view': visible}, darkClass, {'delay-hero': fadeUpHero} ]"
    :style="{ paddingTop: paddingBottom, paddingBottom: paddingBottom }"
  >
    <div ref="container" class="container is-fullhd content">

      <div class="columns">
        <div class="column is-two-thirds text-column">
          <slot name="main"></slot>
        </div>
        <div class="column aside">
          <slot name="side"></slot>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

import { fadeUpInLoad } from '@theme/mixins/fadeUpInLoad.js'
import { topPadding } from '@theme/mixins/topPadding.js'

export default {
  name: 'ContextSection',
  mixins: [fadeUpInLoad, topPadding],

  props: {
    fadeUpHero: Boolean
  },

  computed: {
    // TODO make description slot pull from page metadata? Could also be used for SEO

    lightDark () {
      return this.$page.frontmatter.navStyle.style
    },

    darkClass () {
      return {
        'dark': this.lightDark === 'dark'
      }
    },

  }
}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  .section.context
    background-color: $black
    position: relative
    &::before
      content: ' '
      position: absolute
      width: 100%
      height: 3em
      background-image: linear-gradient(360deg, $pitch 0%, rgba($pitch,0.42) 40%, rgba($pitch,0.00) 100%)
      top: -3em
      opacity: 0.08

  .section.context.dark
    background-color: $steel
    &::after
      content: ' '
      position: absolute
      width: 100%
      height: 6em
      background-image: linear-gradient(0deg, rgba($pitch,0.00) 0%, rgba($pitch,0.42) 60%, $pitch 100%)
      bottom: -6em
      opacity: 0.16

  .section.context
    .aside
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

  html:not(.disable-motion)
    .context.appear-fade-up
      transition-delay: $base-project-delay + 0.4s
      &.delay-hero
        transition-delay: $base-project-delay + 0.6s

</style>
