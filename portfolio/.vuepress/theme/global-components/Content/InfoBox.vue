<template>
  <div class="box content" :class="{'with-action': hasAction}">
    <i v-if="hasIcon" class="icon is-medium point-icon"><img src="/svg-icons/icon_info_small.svg" alt="Info icon"/></i>
    <slot/>
    <button v-if="hasAction" class="action-button background-noise" type="button" name="action" @click="action()">
      <span>{{ label }}
        <i class="icon">
          <img v-if="type === 'modal'" src="/svg-icons/icon_maximise.svg" alt="Maximise icon">
          <img v-if="type === 'link'" src="/svg-icons/icon_external.svg" alt="External icon">
        </i>
      </span>
    </button>
    <ModalBase
      v-if="modalOpen && hasAction"
      @close="close()"
      label="Open dialog"
    >
      <slot name="modal"></slot>
    </ModalBase>
  </div>
</template>

<script>

import ModalBase from '@theme/components/ModalBase.vue'
import { modalFunctions } from '@theme/mixins/modalFunctions.js'

export default {
  components: { ModalBase },

  mixins: [ modalFunctions ],

  props: {
    hasIcon: Boolean,
    hasAction: Boolean,
    type: String,
    url: String,
    label: String,
  },

  data() {
    return {
      modalOpen: false,
    };
  },


}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .box
    &.with-action
      padding-bottom: 0
    .point-icon
      margin-bottom: 1em
    .action-button
      margin-top: 1em
      width: calc(100% + 3em)
      margin-left: -$box-padding
      span
        padding-left: $box-padding


</style>
