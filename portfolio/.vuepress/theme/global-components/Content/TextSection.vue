<template>
  <section class="section" :class="padding">
    <div class="container is-fullhd content">
      <div class="columns">

        <div class="column is-two-thirds text-column">
          <slot></slot>
        </div>

        <div class="column" :class="columnOffset">
          <slot name="aside"></slot>
        </div>

      </div>
    </div>
  </section>
</template>

<script>


export default {

  props: {
    padding: String,
    columnOffset: String,
  },

}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  @media screen and (min-width: $tablet)
    .text-column
      padding-right: 6em
</style>
