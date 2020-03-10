<template>
  <div class="container is-fullhd is-home">

    <div class="home-intro">
        <h1 class="title is-spaced home-title">Hello <WavingHand/></h1>
        <h2 class="subtitle home-subtitle">
            Anthony Moles is a multidisciplinary designer creating useful and playful experiences with people at the centre
            <router-link to="/about"><ArrowIcon/></router-link>
        </h2>
    </div>

    <div class="grid-wrapper">
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
            v-on:project-click="handleProjectClick"
          >
            <ItemImageDouble
              v-if="project.frontmatter.uid === 2"
              type="wesen"
            />
            <ItemImageDouble
              v-else-if="project.frontmatter.uid === 6"
              type="toucanbox"
            />
            <ItemImageBackground
              v-else-if="project.frontmatter.uid === 3"
              type="stompy-robot"
            />
            <ItemImageBackground
              v-else-if="project.frontmatter.uid === 8"
              type="random"
            />
            <ItemImageBackground
              v-else-if="project.frontmatter.uid === 10"
              type="art-lebedev"
            />

          </PortfolioItem>
    </div>
  </div>
</template>

<script>
import { loadableHero } from '../../mixins/loadableHero.js'
import PortfolioItem from '@theme/components/home/PortfolioItem.vue'
import WavingHand from '@theme/components/home/WavingHand.vue'
import ArrowIcon from '@theme/components/icons/ArrowIcon.vue'

import ItemImageDouble from '@theme/components/home/ItemImageDouble.vue'
import ItemImageBackground from '@theme/components/home/ItemImageBackground.vue'

// TODO fix width issue of tiles on smaller desktop screens
// TODO mobile view

export default {
  components: { PortfolioItem, WavingHand, ArrowIcon, ItemImageDouble, ItemImageBackground },

  mixins: [loadableHero],

  mounted() {

    setTimeout(() => {
      this.doLoad()
    }, 1)

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
  },

  methods: {
      handleProjectClick(data) {
        if (this.pageLoadingStatus === 'covering') {
          // prevent clicks during covering
          return false
        }
        data['scroll'] = document.documentElement.scrollTop
        this.$store.dispatch('setProjectPosition', data)
      }
  }
}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  $columnGap: 2em

  // .layout.home::before
  //   @include pseudo-full
  //   height: 32em
  //   z-index: 0
  //   background: linear-gradient(345deg, rgba($pink,0) 0%, rgba($pink,0) 50%, rgba($pink,0.24) 100%)

  .home-intro
    padding: 8em 0 1.5em 0
    display: grid
    grid-template-columns: repeat(3, 1fr)
    column-gap: $columnGap
    h1, h2
      margin: 0 0 0 1.5rem
    h1.home-title
      font-size: 5em
      line-height: 1
    h2.home-subtitle
      grid-column-start: 2
      grid-column-end: 4
      .icon
        position: relative
        top: 0.1em
        left: 0.1em
        filter: opacity(100%)
        @include opacity-filter-transition

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
    &:first-child
      grid-column-start: 1
      grid-row-start: 1
    article
      height: 100%

  .double-left
    grid-column-start: 1
    grid-column-end: 3
    grid-row-start: 3
    grid-row-end: 4

  .double-right
    grid-column-start: 2
    grid-column-end: 4
    grid-row-start: 1
    grid-row-end: 2

</style>
