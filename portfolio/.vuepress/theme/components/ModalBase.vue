<template>
  <portal to="destination">
    <div
      role="dialog"
      :aria-label="label"
      aria-modal="true"
      class="popup-wrapper modal-background"
      :class="tint"
      @click="$emit('close')"
    >

      <div class="content-wrapper">
        <slot/>
      </div>

      <button class="sidebar-button modal-close">
        <i class="icon" aria-hidden="true">
          <img src="/svg-icons/icon_close.svg" alt="close icon">
        </i>
      </button>

    </div>
  </portal>
</template>

<script>
import { disableScroll } from '@theme/mixins/disableScroll.js'

export default {
  name: 'ModalBase',
  mixins: [ disableScroll ],
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
  computed: {
    tint () {
      return this.$page.frontmatter.navStyle.tint
    }
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
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"

.popup-wrapper
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  display: flex
  justify-content: center
  align-items: center
  z-index: 3
  .content-wrapper
    overflow-y: hidden
    width: 100%
    @media screen and (max-width: $tablet - 1px)
      overflow-y: scroll

  .video-wrapper
    max-width: 42vh
    margin: auto
    // .image
    //   max-height: calc( 100% - 2em )
    //   overflow: hidden

.modal-close
  position: absolute
  top: 0
  right: 0

</style>
