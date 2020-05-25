<template>
  <div ref="presentation" class="presentation"></div>
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
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

</style>
