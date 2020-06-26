<template>
  <section class="section" :class="padding">
    <div class="container is-fullhd content">
      <slot></slot>
    </div>
  </section>
</template>

<script>


export default {

  props: {
    padding: String
  },

}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

</style>
