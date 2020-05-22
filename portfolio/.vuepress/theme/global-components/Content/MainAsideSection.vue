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

          <div v-if="aside" class="column" :class="columnOffset">
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
    columnOffset: String
  }

}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"
</style>
