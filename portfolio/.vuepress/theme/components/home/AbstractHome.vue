<template>
  <div ref="presentation" class="abstract-home"></div>
</template>

<script>

export default {

  data () {
    return {
      abstract: null
    }
  },

  computed: {
    window () {
      return this.$store.state.window
    },
  },

  watch: {
    window (latest, last) {
      if (this.abstract) {
        this.abstract.onWindowResize(latest.width, latest.height)
      }
    }
  },

  mounted() {
    import('@application/abstract/abstract.js').then(module => {
      this.abstract = new module.Abstract(this.$refs.presentation, true)

      this.abstract.addEventListener('abstract-loaded', () => {
        // console.log('abstract home scene ready')
        this.abstract.begin()
      })

      this.abstract.init()
    })
  },

  destroyed() {
    this.abstract.destroy()
    // console.log('abstract home destroyed')
  },

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .abstract-home
    position: absolute
    bottom: 0
    right: 0
    width: 100%
    height: 100%
    border-radius: $radius
    overflow: hidden


</style>
