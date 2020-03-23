<template>
  <section class="section">
    <div class="container is-fullhd">
      <div class="notification">
        <h2>Section divider</h2>
      </div>
    </div>
  </section>
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
