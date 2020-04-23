<template>
<div class="abstract-background">
  <canvas id="canvas" width="300" height="300"></canvas>
</div>
</template>

<script>

import { loadableHero } from '../../mixins/loadableHero.js'

export default {

  // https://codepen.io/alexkulagin/pen/zPEvQY
  // https://codepen.io/alexandrejosephdev/pen/Rpveye
  // https://codepen.io/heyitsolivia/pen/mNEPbx

  mixins: [loadableHero],

  data () {
    return {
      title: 'Video'
    }
  },

  computed: {
  },

  mounted() {
    this.doLoad()
  },

  methods: {
  }
}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

</style>
