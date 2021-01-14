<template>
  <div class="page-loader-generic"/>
</template>

<script>

import { loadableHero } from '@theme/mixins/loadableHero.js'

export default {

  mixins: [loadableHero],

  props: {
    current: String
  },

  mounted() {
    if (this.current === this.$page.title) {
      this.doLoad()
    }
  },

}

</script>

<style lang="sass">

  .page-loader-generic
    height: 10em

  .popup-wrapper .page-loader-generic
    display: none

</style>
