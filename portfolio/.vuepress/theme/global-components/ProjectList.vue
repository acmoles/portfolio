<template>
  <ul>
    <li v-for="project in projects">
      <router-link :to="project.path">{{ project.title }}</router-link>
    </li>
  </ul>
</template>

<script>

export default {

  components: {},

  data () {
    return {
      title: 'Image'
    }
  },

  computed: {
    projects () {
      return this.$site.pages
        .filter(x => x.path.startsWith('/projects/'))
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        )
    },
  },

  mounted() {
    console.log('fake loading');
    setTimeout(() => {
      this.$store.dispatch('setLoadingPageContent', 'revealing')
      // fake loading time
    }, 1000)
  },

  methods: {
  }
}

</script>

<style lang="stylus">
</style>
