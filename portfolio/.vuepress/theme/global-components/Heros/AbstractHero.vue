<template>
  <div ref="presentation" class="presentation abstract"></div>
</template>

<script>

import { loadableHero } from '../../mixins/loadableHero.js'

export default {

  // https://codepen.io/alexkulagin/pen/zPEvQY
  // https://codepen.io/alexandrejosephdev/pen/Rpveye

  // grid dots interactive
  // https://codepen.io/heyitsolivia/pen/mNEPbx

  mixins: [loadableHero],

  data () {
    return {
      abstract: null
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
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
      this.abstract = new module.Abstract(this.$refs.presentation)

      this.abstract.addEventListener('abstract-loaded', () => {
        console.log('abstract scene ready')
        this.doLoad()
        this.abstract.begin()
      })

      this.abstract.init()
    })
  },

  destroyed() {
    this.abstract.destroy()
    console.log('destroyed')
  },

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .presentation.abstract
    height: 100%
    canvas
      position: relative
      top: 48px

</style>
