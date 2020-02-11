<template>
    <footer class="footer">
      <div class="footer-content">
        Footer content
      </div>
      <div
        class="last-updated"
        v-if="lastUpdated"
      >
        <span class="prefix">{{ lastUpdatedText }}: </span>
        <span class="time">{{ lastUpdated }}</span>
      </div>
    </footer>
</template>

<script>
import NavLinks from '@theme/components/NavLinks.vue'

export default {

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

</style>
