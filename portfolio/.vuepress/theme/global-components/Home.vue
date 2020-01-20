<template>
  <div
    class="grid-wrapper"
    ref="gridParent"
  >

        <PortfolioItem
          :uid="1"
          type="double-left"
          title="Wesen"
          subtitle="First double"
          background="is-primary"
          v-on:project-click="handleProjectClick"
        >
          <div class="content-positioner">
            <div></div>
            <div></div>
          </div>
        </PortfolioItem>

        <PortfolioItem
          :uid="2"
          type="single"
          title="First secondary"
          subtitle="In first row"
          background="is-warning"
          v-on:project-click="handleProjectClick"
        >
          <div>Image</div>
        </PortfolioItem>

        <PortfolioItem
          :uid="3"
          type="single"
          title="Vertical tiles"
          subtitle="In first row"
          background="is-success"
          v-on:project-click="handleProjectClick"
        >
          <div>Image</div>
        </PortfolioItem>

        <PortfolioItem
          :uid="4"
          type="single"
          title="Vertical tiles"
          subtitle="In first row, inner-row 2"
          background="is-danger"
          v-on:project-click="handleProjectClick"
        >
          <div>Image</div>
        </PortfolioItem>

        <PortfolioItem
          :uid="5"
          type="single"
          title="Vertical tiles"
          subtitle="In first row, inner-row 2"
          background="is-primary"
          v-on:project-click="handleProjectClick"
        >
          <div>Image</div>
        </PortfolioItem>

        <PortfolioItem
          :uid="6"
          type="single"
          title="First in second row group"
          subtitle="Mid tile prop"
          background="is-warning"
          v-on:project-click="handleProjectClick"
        >
          <div>Image</div>
        </PortfolioItem>


        <PortfolioItem
          :uid="7"
          type="single"
          title="Second in second row group"
          subtitle="Mid tile prop 2"
          background="is-success"
          v-on:project-click="handleProjectClick"
        >
          <div>Image</div>
        </PortfolioItem>

        <PortfolioItem
          :uid="8"
          type="single"
          title="Second last in second row group"
          subtitle="Bottom tile prop"
          background="is-danger"
          v-on:project-click="handleProjectClick"
        >
          <div>Image</div>
        </PortfolioItem>

        <PortfolioItem
          :uid="9"
          type="single"
          title="Last in second row group"
          subtitle="Bottom tile prop"
          background="is-primary"
          v-on:project-click="handleProjectClick"
        >
          <div>Image</div>
        </PortfolioItem>


        <PortfolioItem
          :uid="10"
          type="double-right"
          title="toucanBox"
          subtitle="Last in second row"
          background="is-info"
          v-on:project-click="handleProjectClick"
        >
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png">
          </figure>
        </PortfolioItem>

  </div>
</template>

<script>
import { loadableHero } from '../mixins/loadableHero.js'

import PortfolioItem from '@theme/components/PortfolioItem.vue'

export default {
  components: { PortfolioItem },

  mixins: [loadableHero],

  mounted() {
    this.doLoad()
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    }
  },

  methods: {
      handleProjectClick(data) {
        if (this.pageLoadingStatus === 'covering') {
          // prevent clicks during covering
          return false
        }
        data['scroll'] = window.pageYOffset
        data['parent'] = this.$refs.gridParent
        this.$store.dispatch('setProjectPosition', data)
        console.log(data)
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
