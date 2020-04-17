export const topPadding = {

  data () {
    return {
      paddingTop: null
    }
  },

  mounted () {
    // TODO keep minimal intro?
    const x = this.$refs.container.getBoundingClientRect().left
    // const padding = this.$refs.gridWrapper
    // console.log(this.$refs.article1);
    this.paddingTop = Math.max( 168, Math.min( x, 240 ) ) + 'px'
  },

}
