<template>
  <section
    class="section context background-noise"
    :class="[ {'in-view': visible}, {'has-shadow': box}, {'wipe-up': readyForWipe} ]"
    :style="{ paddingTop: paddingBottom, paddingBottom: paddingBottom, transform: 'translateY(' + displacement + 'px)' }"
  >
    <div
      ref="container"
      class="container is-fullhd content"
    >

      <div class="columns">
        <div
          class="column is-two-thirds text-columnp"
          >
          <slot name="main"></slot>
        </div>
        <div
          class="column aside title-offset"
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
    box: Boolean
  },

  data () {
    return {
      readyForWipe: false,
      displacement: null
    }
  },

  computed: {
    // TODO make description slot pull from page metadata? Could also be used for SEO
  },

  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === 'finished' && this.intersected) {
        this.$forceNextTick(() => {
          this.visible = true
          this.visibleCallback()
        })
      } else if (latest === 'revealing') {
        this.displacement = getViewport('y') - this.$el.getBoundingClientRect().y
        // console.log('rect is: ', this.$el.getBoundingClientRect().y);
        // console.log('viewport is: ', getViewport('y'));
        // console.log('displacement is: ', this.displacement);
      }
    }
  },

  // TODO only animate if scroll position = 0 ??
  mounted () {
    this.applyPadding()
  },

  methods: {
    visibleCallback () {
      // console.log('visible callback');
      this.readyForWipe = true
      this.$forceNextTick(() => {
        this.displacement = 0
      })
    }
  }


}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  .context
    background-color: $black
    position: relative
    // &::before
    //   content: ' '
    //   pointer-events: none
    //   position: absolute
    //   width: 100%
    //   height: 4em
    //   background-image: linear-gradient(360deg, $pitch 0%, rgba($pitch,0.42) 40%, rgba($pitch,0.00) 100%)
    //   top: -4em
    //   opacity: 0.1

  .context.has-shadow
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
      li
        margin-left: 1.25em
        margin-bottom: 0.75em
        &::before
          content: '¬'
          position: absolute
          left: 0

  // type grid inspiration https://www.milieugrotesque.com/info/



  html:not(.disable-motion)
    .context.wipe-up
      transition: transform $project-wipe-time $coverTransition
      // cubic-bezier(.215,.61,.355,1)
      transition-delay: $base-project-delay

    .context
      .text-column.appear-fade-up
        transition-delay: $base-project-delay + $project-wipe-time + $first-mover-delay + .1s

      .aside.appear-fade-up
        transition-delay: $base-project-delay + $project-wipe-time + $first-mover-delay + .2s



</style>
