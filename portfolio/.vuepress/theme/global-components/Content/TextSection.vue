<template>
  <section class="section">
    <div class="container is-fullhd content">
      <div class="columns">

        <div class="column is-two-thirds">
          <slot></slot>
        </div>

        <div class="column">
          <slot name="sidebar"></slot>
        </div>

      </div>
    </div>
  </section>
</template>

<script>


export default {

}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"


</style>
