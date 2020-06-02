<template>

<div class="columns is-variable is-3 step-columns">
  <div
  v-for="(s, i) in steps"
  class="column"
  >
    <p class="box">{{ s }}</p>
  </div>
</div>

</template>

<script>

export default {

  props: {
    steps: Array
  },

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .step-columns
    padding: 0.5em 0 1em 0
    .box
      height: 100%
      display: flex
      align-items: center
</style>
