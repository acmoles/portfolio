<template>
  <div ref="container" class="container is-fullhd is-home">

    <HomeIntroSmall/>

    <div class="grid-wrapper" :style="{ paddingTop: paddingTop }">
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
              v-if="project.frontmatter.title === 'Wesen'"
              type="wesen"
            />
            <ItemImageDouble
              v-else-if="project.frontmatter.title === 'toucanBox'"
              type="toucanbox"
            />
            <ItemImageBackground
              v-else-if="project.frontmatter.title === 'Stompy Robot'"
              type="stompy-robot"
            />
            <ItemImageBackground
              v-else-if="project.frontmatter.title === 'Random International'"
              type="random"
            />
            <ItemImageBackground
              v-else-if="project.frontmatter.title === 'Art Lebedev Studio'"
              type="art-lebedev"
            />

          </PortfolioItem>
    </div>
  </div>
</template>

<script>
import { loadableHero } from '../../mixins/loadableHero.js'
import PortfolioItem from '@theme/components/home/PortfolioItem.vue'

import ItemImageDouble from '@theme/components/home/ItemImageDouble.vue'
import ItemImageBackground from '@theme/components/home/ItemImageBackground.vue'

import HomeIntroLarge from '@theme/components/home/HomeIntroLarge.vue'
import HomeIntroSmall from '@theme/components/home/HomeIntroSmall.vue'

// TODO fix width issue of tiles on smaller desktop screens
// TODO mobile view


export default {
  components: { PortfolioItem, ItemImageDouble, ItemImageBackground, HomeIntroLarge, HomeIntroSmall },

  mixins: [loadableHero],

  data () {
    return {
      paddingTop: null
    }
  },

  mounted() {

    // TODO keep minimal intro?
    // const x = this.$refs.container.getBoundingClientRect().left
    // const padding = 96
    // this.paddingTop = Math.min( (x + padding), 192 ) + 'px'

    setTimeout(() => {
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

</style>
