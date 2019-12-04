<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">

      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

    </header>


  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="sass">

</style>
