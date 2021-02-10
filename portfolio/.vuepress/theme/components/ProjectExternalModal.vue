<template>
  <button 
    class="button is-dark project-external-link is-fullwidth background-noise"
    :class="'umami--click--project-modal-link-' + label"
    @click="action()"
  >
    <span>{{ label }}</span>
    <MaximiseIcon/>
    <ModalBase
      v-if="modalOpen"
      @close="close()"
      label="Open dialog"
    >
      <slot/>
    </ModalBase>
  </button>
</template>

<script>

import ModalBase from '@theme/components/ModalBase.vue'
import { modalFunctions } from '@theme/mixins/modalFunctions.js'

import MaximiseIcon from '@theme/components/icons/MaximiseIcon.vue'

export default {

  components: { ModalBase, MaximiseIcon },

  mixins: [ modalFunctions ],

  props: {
    label: String
  }
}

</script>

<style lang="sass">
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"


</style>
