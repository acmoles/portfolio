<template>
  <div class="quote-background">
    <div class="container is-fullhd content">
      <div class="columns">
        <div class="column is-two-thirds">
          <slot name="main"></slot>
        </div>
        <div class="column">
          <slot name="side"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ExternalIcon from '@theme/components/icons/ExternalIcon.vue'

export default {

  components: { ExternalIcon },

  props: {
    label: String
  },

  computed: {
  },

  mounted() {
  },

  methods: {
  }
}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"


</style>
