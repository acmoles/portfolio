<template>
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
</template>

<script>

export default {
  name: 'ContextSection'
}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"


</style>
