<template>
  <section class="section grid-section" :class="padding">
    <div class="container is-fullhd content">
      <div class="grid-wrapper-content">

        <slot name="grid"></slot>

      </div>
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

  .grid-section
    .content figure
      margin: 0

  .grid-wrapper-content
    display: grid
    grid-template-columns: repeat(6, 1fr)
    grid-auto-rows: 1fr
    column-gap: 2*$columnGap
    row-gap: 2*$columnGap

  // .grid-wrapper-content::before
  //   content: ' '
  //   width: 0
  //   padding-bottom: 100%
  //   grid-row: 1 / 1
  //   grid-column: 1 / 1

  .span-2
    grid-column: auto / span 2
    grid-row: auto / span 2
  .span-3
    grid-column: auto / span 3
    grid-row: auto / span 2
  .span-4
    grid-column: auto / span 4
    grid-row: auto / span 2
  .span-5
    grid-column: auto / span 5
    grid-row: auto / span 2
  .span-6
    grid-column: auto / span 6
    grid-row: auto / span 2

  .row-span-3
    grid-row: auto / span 3

  .grid-item-container
    position: relative
    background: rgba($pitch, 0.2)
    .image
      position: absolute
      width: 100%
</style>
