export const loadableHero = {
  created () {
    console.log('mixin created')
  },
  methods: {
    doLoad(path) {
      console.log('fake loading')
      setTimeout(() => {
        this.$store.dispatch('setLoadingPageContent', 'revealing')
        // fake loading time
      }, 500)
    },
  }
}
