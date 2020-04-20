export const topPadding = {

  data () {
    return {
      paddingTop: null,
      paddingBottom: null
    }
  },

  mounted () {
    const x = this.$refs.container.getBoundingClientRect().left
    this.paddingTop = Math.max( 168, Math.min( x, 240 ) ) + 'px'

    this.paddingBottom = Math.max( 96, Math.min( x, 144 ) ) + 'px'
  },

}
