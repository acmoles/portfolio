<template>
  <section
    class="section context background-noise"
    :class="[ {'in-view': visible}, darkClass, {'delay-hero': fadeUpHero}, {'wipe-up': doFade && readyForWipe} ]"
    :style="{ paddingTop: paddingBottom, paddingBottom: paddingBottom, transform: 'translateY(' + displacement + 'px)' }"
  >
    <div
      ref="container"
      class="container is-fullhd content"
    >

      <div class="columns">
        <div
          class="column is-two-thirds text-column appear-fade-up"
          :class="[ {'in-view': visible}, {'delay-hero-inner': fadeUpHero} ]"
          >
          <slot name="main"></slot>
        </div>
        <div
          class="column aside appear-fade-up"
          :class="[ {'in-view': visible}, {'delay-hero-inner': fadeUpHero} ]"
        >
          <slot name="side"></slot>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

import { fadeUpInLoad } from '@theme/mixins/fadeUpInLoad.js'
import { topPadding } from '@theme/mixins/topPadding.js'

import { getScrollTop, getViewport } from '../../util'

export default {
  name: 'ContextSection',
  mixins: [fadeUpInLoad, topPadding],

  props: {
    fadeUpHero: Boolean
  },

  data () {
    return {
      doFade: false,
      readyForWipe: false,
      displacement: null
    }
  },

  mounted () {
    this.applyPadding()
    this.$forceNextTick(() => {
      if (getScrollTop() === 0) {
        this.doFade = true
        this.displacement = getViewport('y') - this.$el.getBoundingClientRect().y
      }
    })
  },

  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === 'finished') {
        this.readyForWipe = true
        this.$nextTick(() => {
          this.displacement = 0
        })
      }
    }
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

  .context
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

  .context.dark
    background-color: $steel
    &::after
      content: ' '
      position: absolute
      width: 100%
      height: 6em
      background-image: linear-gradient(0deg, rgba($pitch,0.00) 0%, rgba($pitch,0.42) 60%, $pitch 100%)
      bottom: -6em
      opacity: 0.16

  .context
    .aside
      position: relative
      &::before
        content: '#'
        visibility: hidden
        font-size: 1.75em
        margin-bottom: 0.5714em
        line-height: 1.125
        display: block
      li
        margin-left: 1.25em
        margin-bottom: 0.75em
        &::before
          content: '¬'
          position: absolute
          left: 0


  // .context-grid
  //   display: grid
  //   grid-template-columns: repeat(12, 1fr)
  //   grid-column-gap: 1em
  //   width: 100%
  //   grid-column: span 12/auto
  //   .context-column

      // type grid inspiration https://www.milieugrotesque.com/info/



  html:not(.disable-motion)
    .context.wipe-up
      transition: transform 1.4s $projectWipeTransition
      // cubic-bezier(.215,.61,.355,1)
      transition-delay: $base-project-delay

    .context
      .text-column.appear-fade-up
        transition-delay: $base-project-delay + 1.4s
        &.delay-hero-inner
          transition-delay: $base-project-delay + 1.6s
      .aside.appear-fade-up
        transition-delay: $base-project-delay + 1.6s
        &.delay-hero-inner
          transition-delay: $base-project-delay + 1.8s


</style>
