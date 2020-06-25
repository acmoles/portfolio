<template>
  <section class="section" :class="padding">
    <div class="container is-fullhd content">

      <div v-if="hasContent" class="columns">
        <div class="column is-two-thirds" :class="rag">
          <slot name="content"></slot>
          <br>
        </div>
      </div>

      <div class="columns">

        <div class="column" :class="rag">
          <slot name="column1"></slot>
        </div>

        <div class="column" :class="rag">
          <slot name="column2"></slot>
        </div>

        <div class="column" :class="[columnOffset, rag]">
          <slot name="column3"></slot>
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
    rag: String
  },

  computed: {
    hasContent () {
      return !!this.$slots['content']
    },
  }

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

</style>
