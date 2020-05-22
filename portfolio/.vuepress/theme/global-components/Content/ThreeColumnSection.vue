<template>
  <section class="section" :class="padding">
    <div class="container is-fullhd content">

      <div v-if="content" class="columns">
        <div class="column is-two-thirds">
          <slot name="content"></slot>
          <br>
        </div>
      </div>

      <div class="columns">

        <div class="column">
          <slot name="column1"></slot>
        </div>

        <div class="column">
          <slot name="column2"></slot>
        </div>

        <div class="column" :class="columnOffset">
          <slot name="column3"></slot>
        </div>

      </div>
    </div>
  </section>
</template>

<script>


export default {

  props: {
    content: Boolean,
    padding: String,
    columnOffset: String
  },

}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

</style>
