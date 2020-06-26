// Only one loadable hero per page

export const loadableHero = {
  created () {
  },
  methods: {
    doLoad() {
      this.$store.dispatch('setLoadingPageContent', 'revealing')
    },
    incrementLoad() {
      this.$store.dispatch('setLoadingPageContent', 'loading-increment')
    },
  }
}
