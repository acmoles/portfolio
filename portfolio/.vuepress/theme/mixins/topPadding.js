export const topPadding = {

  data () {
    return {
      paddingTop: null,
      paddingBottom: null
    }
  },

  computed: {
    window () {
      return this.$store.state.window
    },
  },

  mounted () {
    this.applyPadding()
  },

  methods: {
    applyPadding() {
      if (this.window.width > 768) {
        const x = this.$refs.container.getBoundingClientRect().left
        this.paddingTop = Math.max( 168, Math.min( x, 240 ) ) + 'px'

        this.paddingBottom = Math.max( 96, Math.min( x, 144 ) ) + 'px'
      }
    }
  }

}
