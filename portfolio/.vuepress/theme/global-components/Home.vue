<template>
  <div class="container is-fluid is-home" ref="gridParent">

    <div class="home-intro content">
      <div class="columns">
        <div class="column">
          <h1>Hello</h1>
        </div>
        <div class="column">
          <p>Second column</p>
        </div>
      </div>
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

export default {
  components: { PortfolioItem },

  mixins: [loadableHero],

  mounted() {
    setTimeout(() => {
      this.doLoad()
    }, 100)
  },

  computed: {
    projects () {
      return this.$site.pages
        .filter(x => x.path.startsWith('/projects/'))
        .filter(x => !(x.relativePath.includes('index')))
        .sort(
          (a, b) => b.frontmatter.uid - a.frontmatter.uid
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
        data['parentOffsetWidth'] = this.$refs.gridParent.offsetWidth
        this.$store.dispatch('setProjectPosition', data)
      }
  }
}

</script>

<style lang="sass">
  @import "../styles/variables.sass"

  .home-intro
    padding: 16em 0 9em 0
    h1
      font-size: 9em
      margin-bottom: 0

  .grid-wrapper
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-auto-rows: 1fr
    column-gap: 2em
    row-gap: 2em

  .grid-wrapper::before
    content: ''
    width: 0
    padding-bottom: 100%
    grid-row: 1 / 1
    grid-column: 1 / 1

  .grid-item
    article
      height: 100%

  .double-left
    grid-column-start: 1
    grid-column-end: 3
    grid-row-start: 1
    grid-row-end: 3

  .double-right
    grid-column-start: 3
    grid-column-end: 5
    grid-row-start: 3
    grid-row-end: 5
</style>
