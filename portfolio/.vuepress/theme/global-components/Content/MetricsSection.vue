<template>
  <section class="section">
    <div class="container is-fullhd content project-section">
      <div class="columns">

        <div
        v-for="(m, i) in metrics"
        class="column"
        >
          <span class="metric">{{ m.metric }}</span>
          <p class="metric-description">{{ m.description }}</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>

export default {

  props: {
    metrics: Array
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

  .metric
    font-size: 6em
    font-family: $family-display
    color: $white-ter
  .metric-description
    width: 80%
</style>
