<template>
  <div ref="container" class="container is-fullhd is-home">
    <!-- <picture class="test-background">
      <img src="/images/homepage/background-xl.png" alt="">
    </picture> -->
    <!-- <div v-for="n in 5" :class="'test-blur test-blur-' + n"></div> -->
    <HomeIntroQuote/>

    <div class="grid-wrapper" :class="festRowClass">
          <PortfolioItem
            v-for="project in projects"
            :key="project.frontmatter.uid"
            :uid="project.frontmatter.uid"
            :path="project.path"
            :type="project.frontmatter.type"
            :title="project.frontmatter.title"
            :subtitle="project.frontmatter.subtitle"
            :case1="project.frontmatter.case1"
            :case2="project.frontmatter.case2"
            :background="project.frontmatter.background"
            :src="project.frontmatter.src"
            v-on:project-click="handleProjectClick"
          />
    </div>
  </div>
</template>

<script>
import { loadableHero } from '../../mixins/loadableHero.js'
import PortfolioItem from '@theme/components/home/PortfolioItem.vue'

import HomeIntroLarge from '@theme/components/home/HomeIntroLarge.vue'
import HomeIntroSmall from '@theme/components/home/HomeIntroSmall.vue'
import HomeIntroQuote from '@theme/components/home/HomeIntroQuote.vue'

// TODO fix width issue of tiles on smaller desktop screens
// TODO mobile view

export default {
  components: { PortfolioItem, HomeIntroLarge, HomeIntroSmall, HomeIntroQuote },

  mixins: [loadableHero],

  data () {
    return {
      festRowClass: null
    }
  },

  mounted() {

    // TODO wait for project images to load before signalling ready (remove lazy load)

    setTimeout(() => {
      this.festRowClass = this.rowClass
      this.doLoad()
    }, 500)

  },

  computed: {
    projects () {
      return this.$site.pages
        .filter(x => x.path.startsWith('/projects/'))
        .filter(x => !(x.relativePath.includes('index')))
        .sort(
          (a, b) => a.frontmatter.uid - b.frontmatter.uid
        )
    },
    rowNumber () {
      return this.$store.state.fadeCount
    },
    rowClass () {
      switch (true) {
        case this.rowNumber <= 3:
          return 'row-1'
          break
        case this.rowNumber <= 6:
          return 'row-1-2'
          break
        case this.rowNumber <= 8:
          return 'row-1-2-3'
          break
        default:
          return 'row-1-2-3-4'
      }
    }
  },

  methods: {
      handleProjectClick(data) {
        if (this.pageLoadingStatus === 'covering') {
          // prevent clicks during covering
          return false
        }
        data['scroll'] = document.documentElement.scrollTop
        this.$store.dispatch('setProjectPosition', data)

        // Fade up in only for first load of homepage
        this.$store.dispatch('setHomeMotion', false)
      }
  }
}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  .test-background
    position: absolute
    left: 0
    top: 0
    opacity: 0.4

  // in-view rules for fade staggering
  html:not(.disable-motion)
    .row-1
      @for $i from 1 through 2
        .grid-item:nth-child(#{$i})
          transition-delay: 0.1s + ($i * .1s)
      @for $i from 3 through 10
        .grid-item:nth-child(#{$i})
          transition-delay: 0.1s + ( ($i - 2) * .1s)
    .row-1-2
      @for $i from 1 through 5
        .grid-item:nth-child(#{$i})
          transition-delay: 0.1s + ($i * .1s)
      @for $i from 6 through 10
        .grid-item:nth-child(#{$i})
          transition-delay: 0.1s + ( ($i - 5) * .1s)
    .row-1-2-3
      @for $i from 1 through 7
        .grid-item:nth-child(#{$i})
          transition-delay: 0.1s + ($i * .1s)
      @for $i from 8 through 10
        .grid-item:nth-child(#{$i})
          transition-delay: 0.1s + ( ($i - 7) * .1s)
    .row-1-2-3-4
      @for $i from 1 through 10
        .grid-item:nth-child(#{$i})
          transition-delay: 0.1s + ($i * .1s)

  .grid-wrapper
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-auto-rows: 1fr
    column-gap: $columnGap
    row-gap: $columnGap
    padding-bottom: 2em

  .grid-wrapper::before
    content: ' '
    width: 0
    padding-bottom: 100%
    grid-row: 1 / 1
    grid-column: 1 / 1

  .grid-item
    // TODO remove? used for earlier design with orange tile on the left
    // &:first-child
    //   grid-column-start: 1
    //   grid-row-start: 1
    article
      height: 100%

  .double-left-bottom
    grid-column-start: 1
    grid-column-end: 3
    grid-row-start: 3
    grid-row-end: 4

  .double-left-top
    grid-column-start: 1
    grid-column-end: 3
    grid-row-start: 1
    grid-row-end: 2

  .double-right-top
    grid-column-start: 2
    grid-column-end: 4
    grid-row-start: 1
    grid-row-end: 2

  .double-right-bottom
    grid-column-start: 2
    grid-column-end: 4
    grid-row-start: 3
    grid-row-end: 4


    // TODO remove if unused
    // .test-blur
    //   position: absolute
    //   // animation: pulse 10s ease-in-out infinite
    //
    // .test-blur-1
    //   width: 16em
    //   height: 24em
    //   right: 8em
    //   top: 16em
    //   background-color: rgba($orange, 0.08)
    //   box-shadow: 0 0 4em 4em rgba($orange, 0.08)
    //
    // .test-blur-2
    //   width: 16em
    //   height: 16em
    //   right: 16em
    //   top: 24em
    //   background-color: rgba($purple, 0.16)
    //   box-shadow: 0 0 4em 4em rgba($purple, 0.16)
    //   animation-delay: 1s
    //
    // .test-blur-3
    //   width: 16em
    //   height: 16em
    //   left: 8em
    //   top: 40em
    //   background-color: rgba($green, 0.16)
    //   box-shadow: 0 0 4em 4em rgba($green, 0.16)
    //   animation-delay: 2s
    //
    // .test-blur-4
    //   width: 4em
    //   height: 16em
    //   left: 12em
    //   top: -4em
    //   background-color: rgba($silver, 0.04)
    //   box-shadow: 0 0 3em 3em rgba($silver, 0.04)
    //   animation-delay: 3s
    //
    // .test-blur-5
    //   width: 0.1em
    //   height: 8em
    //   right: 12em
    //   top: -4em
    //   background-color: rgba($silver, 0.06)
    //   box-shadow: 0 0 3em 3em rgba($silver, 0.06)
    //   animation-delay: 3s

</style>
