<template>
  <section class="section" :class="padding">
    <div class="container is-fullhd content">
      <div class="columns">

        <div class="column is-two-thirds" :class="rag">
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
    rag: String,
    columnOffset: String,
  },

}

</script>

<style lang="sass">
</style>
