<template>
  <button class="action-button background-noise" type="button" name="action" @click="action()">
    <slot></slot>
    <span>{{ label }}
      <i class="icon">
        <img v-if="type === 'modal'" src="/svg-icons/icon_maximise.svg" alt="Maximise icon">
        <img v-if="type === 'link'" src="/svg-icons/icon_external.svg" alt="External icon">
      </i>
    </span>
    <ModalBase
      v-if="modalOpen"
      @close="close()"
      label="Open dialog"
    >
      <slot name="modal"></slot>
    </ModalBase>
  </button>
</template>

<script>

import ModalBase from '@theme/components/ModalBase.vue'
import { modalFunctions } from '@theme/mixins/modalFunctions.js'

export default {

  components: { ModalBase },

  mixins: [ modalFunctions ],

  props: {
    type: String,
    url: String,
    label: String,
  },

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .action-button
    figure.image
      margin-bottom: 0

  .action-button
    @include button-override
    cursor: pointer
    padding: 0
    width: 100%
    background-color: $slate
    color: $button-custom-text-color
    box-shadow: $button-shadow
    transition: $button-transition
    border-radius: 0 0 $radius-small $radius-small
    &:hover
      background-color: $button-custom-hover-color
      color: $grey-light
    span
      border-top: 2px solid $black
      padding: .75em .75em .75em 1em
      display: flex
      align-items: center
      justify-content: space-between

</style>
