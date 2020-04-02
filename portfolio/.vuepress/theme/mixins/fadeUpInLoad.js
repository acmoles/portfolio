// Only one loadable hero per page

export const fadeUpInLoad = {

  data () {
    return {
      visible: false,
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
  },

  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === 'finished') {
        this.visible = true
      }
    }
  },

}
