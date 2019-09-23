<template>
  <div class="hero">
    <h1 class="hero-title">{{ title }}</h1>
  </div>
</template>

<script>

export default {

  components: {},

  data () {
    return {
      title: 'Video'
    }
  },

  computed: {
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
