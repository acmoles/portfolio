export const fadeUpInLoad = {

  data () {
    return {
      observer: null,
      visible: false,
      intersected: false,
      interval: null,
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
  },

  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === 'finished' && this.intersected) {
        this.visible = true
      }
    }
  },

  mounted() {
  this.observer = new IntersectionObserver(entries => {
    const node = entries[0]
    if (node.isIntersecting) {
        this.intersected = true
        this.$store.dispatch('incrementFadeCount')
        this.observer.disconnect()

        if (this.pageLoadingStatus === 'finished') {
          this.visible = true
        }
      }
  });

    this.observer.observe(this.$el)
  },

  destroyed() {
    this.observer.disconnect()
  }

}
