<template>
    <footer class="footer">

      <div
        class="last-updated"
        v-if="lastUpdated"
      >
        <span class="prefix">{{ lastUpdatedText }}: </span>
        <span class="time">{{ lastUpdated }}</span>
      </div>
      <SearchBox v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
      <NavLinks class="can-hide"/>
    </footer>
</template>

<script>
import SearchBox from '@SearchBox'
import NavLinks from '@theme/components/NavLinks.vue'

export default {

  components: {NavLinks, SearchBox },

  computed: {
    lastUpdated () {
      return this.$page.lastUpdated
    },

    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Last Updated'
    },

  },

  methods: {
  }
}

</script>

<style lang="sass">
@import "../styles/variables.sass"

.footer
  z-index: 10
  position: relative
  height: 12em
  background: darkgrey

</style>
