<template>
  <button class="action-button background-noise" :class="[type, 'umami--click--modal-wrapper-' + label]"  type="button" name="action" @click="action()">
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

</style>
