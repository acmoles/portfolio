<template>
  <div class="container is-home">

    <div class="home-intro content">
        <h1 class="home-title">Hello</h1>
        <p class="tagline home-tagline">
            I’m a multidisciplinary designer creating useful and playful experiences with people in mind
        </p>
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
            :background="project.frontmatter.background"
            v-on:project-click="handleProjectClick"
          />
    </div>
  </div>
</template>

<script>
import { loadableHero } from '../mixins/loadableHero.js'
import PortfolioItem from '@theme/components/PortfolioItem.vue'

/*

426.66
/
1344 = .317

actually want .23

*/

export default {
  components: { PortfolioItem },

  mixins: [loadableHero],

  mounted() {
    setTimeout(() => {
      this.doLoad()
    }, 10)
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
        data['scroll'] = window.pageYOffset
        this.$store.dispatch('setProjectPosition', data)
      }
  }
}

</script>

<style lang="sass">
  @import "../styles/variables.sass"

  .home-intro
    padding: 11em 0 5em 0
    display: grid
    grid-template-columns: repeat(3, 1fr)
    column-gap: 2em
    h1, p
      margin: 0 0 0 1.5rem
    .home-tagline
      grid-column-start: 2
      grid-column-end: 4

  .grid-wrapper
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-auto-rows: 1fr
    column-gap: 2em
    row-gap: 2em

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
