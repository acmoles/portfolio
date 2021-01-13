<template>
  <div class="timeline-item" :class="{'borderless': noBorder}">
    <div class="columns is-gapless is-mobile">
      <div class="column" :class="keyColumn">
        {{ type }}
      </div>
      <div class="column">
        <slot v-if="hasSlot"></slot>
        <template v-else>{{ label }}</template>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    type: String,
    label: String,
    noBorder: Boolean,
    keyColumn: {
      default: 'is-one-quarter',
      type: String,
    },
  },
  computed: {
    hasSlot () {
      return !!this.$slots.default
    },
  }

}

</script>

<style lang="sass">
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"

.timeline-item
  // padding: 1em 0
  min-height: 5em
  display: flex
  flex-direction: row
  align-items: center
  .columns
    width: 100%
    p
      font-size: 1em
  .column
    align-items: center
    display: flex
  .column.is-one-quarter, .column.is-prototyping
    color: $silver

.timeline-item:not(:last-child):not(.borderless)
  border-bottom: 2px solid $steel

.column.is-prototyping
  flex: none
  width: 6em

</style>
