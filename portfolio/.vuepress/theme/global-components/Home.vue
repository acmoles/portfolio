<template>
  <div
    class="grid-wrapper"
    ref="gridParent"
  >

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
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
    useLastProject () {
      return this.$store.state.useLastProject
    },
    projectPosition () {
      return this.$store.state.projectPosition
    },
    projects () {
      return this.$site.pages
        .filter(x => x.path.startsWith('/projects/'))
        .filter(x => !(x.relativePath.includes('index')))
        .sort(
          (a, b) => b.frontmatter.uid - a.frontmatter.uid
        )
    },
  },

  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === 'revealing' && this.useLastProject) {
        // scroll instantly to saved position
        // better here than revealer - component is loaded
        document.documentElement.scrollTop = this.projectPosition.scroll
      }
    }
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

// <h1 v-if="data.heroText !== null" id="main-title" aria-labelledby="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

</script>

<style lang="sass">
  @import "../styles/variables.sass"

  .content-positioner
    background-color: $darkBlue
    width: 100%
    height: 10em
    display: flex
    justify-content: space-around
    align-items: center
    div
      width: 1em
      height: 1em
      background-color: $white-ter

</style>
