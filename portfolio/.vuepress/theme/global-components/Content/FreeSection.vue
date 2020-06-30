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
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

</style>
