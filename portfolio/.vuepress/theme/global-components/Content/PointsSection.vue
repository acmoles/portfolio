<template>
  <section class="section">
    <div class="container is-fullhd content project-section">
      <div class="columns is-multiline">

        <div
        v-for="(p, i) in points"
        class="column is-one-third point"
        >

          <i class="icon is-large point-icon"><ExternalIcon/></i>
          <p class="point-description">{{ p.description }}</p>

        </div>

      </div>
    </div>
  </section>
</template>

<script>

import ExternalIcon from '@theme/components/icons/ExternalIcon.vue'

export default {

  components: { ExternalIcon },

  props: {
    points: Array
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

  .point-icon
    border: 1px solid $white-ter
    border-radius: 50%
    margin-bottom: 2em

</style>
