<template>
  <section class="section" :class="padding">
    <div class="container is-fullhd content">
      <div v-if="hasContent" class="columns">
        <div class="column is-two-thirds content" :class="rag">
          <slot name="content"></slot>
          <br>
        </div>
      </div>

      <slot></slot>
    </div>
  </section>
</template>

<script>


export default {

  props: {
    padding: String,
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
