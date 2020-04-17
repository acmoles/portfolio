<template>
  <section
    class="section context background-noise appear-fade-up"
    :class="[ {'in-view': visible}, darkClass ]"
    :style="{ paddingTop: paddingTop, paddingBottom: paddingTop }"
  >
    <div ref="container" class="container is-fullhd content">

      <div class="columns">
        <div class="column is-two-thirds">
          <slot name="main"></slot>
        </div>
        <div class="column">
          <slot name="side"></slot>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

import { fadeUpInLoad } from '@theme/mixins/fadeUpInLoad.js'

export default {
  name: 'ContextSection',
  mixins: [fadeUpInLoad],
  data () {
    return {
      paddingTop: null
    }
  },

  mounted () {
    const x = this.$refs.container.getBoundingClientRect().left

    this.paddingTop = Math.max( 96, x ) + 'px'
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
    }
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
      height: 3em
      background-image: linear-gradient(360deg, $pitch 0%, rgba($pitch,0.42) 40%, rgba($pitch,0.00) 100%)
      bottom: -3em
      opacity: 0.08

</style>
