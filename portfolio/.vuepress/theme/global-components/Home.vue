<template>
  <div class="container is-fullhd is-home">

    <div class="home-intro">
        <h1 class="title is-spaced home-title">Hello <WavingHand/></h1>
        <h2 class="subtitle home-subtitle">
            I’m a multidisciplinary designer creating useful and playful experiences with people in mind
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
          />
    </div>
  </div>
</template>

<script>
import { loadableHero } from '../mixins/loadableHero.js'
import PortfolioItem from '@theme/components/PortfolioItem.vue'
import WavingHand from '@theme/components/WavingHand.vue'
import ArrowIcon from '@theme/components/icons/ArrowIcon.vue'

// TODO fix width issue of tiles on smaller desktop screens
// TODO mobile view

export default {
  components: { PortfolioItem, WavingHand, ArrowIcon },

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
  @import "../styles/variables.sass"
  @import "../styles/mixins.sass"

  .home-intro
    padding: 11em 0 3.5em 0
    display: grid
    grid-template-columns: repeat(3, 1fr)
    column-gap: 2em
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
    column-gap: 2em
    row-gap: 2em
    padding-bottom: 10em

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
