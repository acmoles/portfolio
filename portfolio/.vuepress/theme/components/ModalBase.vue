<template>
  <portal to="destination">
    <div
      role="dialog"
      :aria-label="label"
      aria-modal="true"
      class="popup-wrapper"
    >
      <div
        class="popup-wrapper-backdrop"
        @click="$emit('close')"
      />

      <slot/>

    </div>
  </portal>
</template>

<script>
import { disableScroll } from '@theme/mixins/disableScroll.js'

export default {
  name: 'ModalBase',
  mixins: [disableScroll],
  props: {
    focusElement: {
      default: null,
      type: Object,
    },
    label: {
      required: true,
      type: String,
    },
  },
  mounted() {
    this.setBodyEl()

    const close = (e) => {
      const ESC = 27
      if (e.keyCode !== ESC) return
      this.$emit('close')
    }
    // Close the modal when the
    // user presses the ESC key.
    document.addEventListener('keyup', close)
    this.$on('hook:destroyed', () => {
      document.removeEventListener('keyup', close)
    })

    // Activate the modal when the component is mounted.
    this.activate()
    this.$on('hook:destroyed', () => {
      // Deactivate when the component is destroyed.
      this.deactivate()
    })
  },
  methods: {
    close() {
      this.showDialog = false
    },
    activate() {
      // Save the current active element
      // so we can restore it when closing
      // the popup overlay.
      this.previousActiveElement = document.activeElement

      // Prevent the background to be scrollable.
      this.disableScrolling(true)
      // Make it impossible to focus elements in
      // the background when using the TAB key.
      this.inert()
      // Focus the first focusable element in the dialog.
      this.focusFirstDescendant()
    },
    async deactivate() {
      this.enableScrolling(true)
      await this.inert(false)
      this.restoreFocus()
    },
    // Make all elements except the overlay inert.
    async inert(status = true) {
      await this.$nextTick();
      [...this.$root.$el.children].forEach((child) => {
        if (child === this.$el || child.contains(this.$el)) return;
        child.inert = status;
      });
    },
    focusFirstDescendant(element) {
      const focusable = this.$el.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      if (focusable[0] && focusable[0].focus) focusable[0].focus()
    },
    restoreFocus() {
      const element = this.focusElement || this.previousActiveElement

      if (element && element.focus) element.focus()
    },
  },
}
</script>

<style lang="sass">
.popup-wrapper
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  display: flex
  justify-content: center
  align-items: center


.popup-wrapper-backdrop
  position: absolute
  width: 100%
  height: 100%
  z-index: -1

</style>
