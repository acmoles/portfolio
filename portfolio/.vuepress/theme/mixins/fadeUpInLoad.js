export const fadeUpInLoad = {

  data () {
    return {
      observer: null,
      visible: false,
      intersected: false,
      interval: null,
      oneTime: true,
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
        this.$forceNextTick(() => {
          this.visible = true
          this.visibleCallback()
        })
      }
    }
  },

  mounted() {
  this.observer = new IntersectionObserver(entries => {
    const node = entries[0]
    if (node.isIntersecting) {
        this.intersected = true
        this.$store.dispatch('incrementFadeCount')

        if (this.oneTime) {
          this.observer.disconnect()
        }

        if (this.pageLoadingStatus === 'finished') {
          this.$forceNextTick(() => {
            this.visible = true
          })
        }
      } else {
        this.visible = false
      }
  });

    this.observer.observe(this.$el)
  },

  destroyed() {
    this.observer.disconnect()
  },

  methods: {
    visibleCallback () {
      // for JS visible callbacks
    }
  }

}
