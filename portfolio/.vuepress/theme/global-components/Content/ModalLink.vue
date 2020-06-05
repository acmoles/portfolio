<template>
  <button class="modal-inline" type="button" name="action" @click="action()">
    {{ label }}
    <img src="/svg-icons/icon_maximise.svg" alt="Maximise icon">
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
    label: String,
  },

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .modal-inline
    @include opacity-filter-transition
    @include button-override
    display: inline-flex
    padding: 0
    cursor: pointer


</style>
