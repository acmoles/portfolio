<template>
  <button class="modal-inline" :class="'umami--click--modal-link-' + label" type="button" name="action" @click="action()">
    {{ label }}
    <i class="icon" aria-hidden="true">
      <img src="/svg-icons/icon_maximise.svg" alt="Maximise icon">
    </i>
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
    margin-right: -0.125em


</style>
