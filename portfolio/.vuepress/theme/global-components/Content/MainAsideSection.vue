<template>
  <section class="section" :class="padding">
      <div class="container is-fullhd">

        <div v-if="content" class="columns">
          <div class="column is-two-thirds content">
            <slot name="content"></slot>
            <br>
          </div>
        </div>

        <div class="columns">

          <div class="column is-two-thirds">
            <slot></slot>
          </div>

          <div v-if="aside" class="column table-spacer">
            <slot name="aside"></slot>
          </div>

        </div>

      </div>
    </section>
</template>

<script>

export default {

  props: {
    content: Boolean,
    aside: Boolean,
    padding: String,
  }

}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  .table-spacer
    position: relative
    &::before
      content: '#'
      visibility: hidden
      font-size: 1.25em
      padding: $table-cell-padding
      display: block

</style>
