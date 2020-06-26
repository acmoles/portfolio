export const modalFunctions = {

  data() {
    return {
      modalOpen: false,
    };
  },

  methods: {
    action() {
      if (this.type === 'link') {
        window.open(this.url, '_blank')
      } else {
        this.modalOpen = true
        this.$store.dispatch('setModalStatus', true)
      }
    },
    close() {
      this.$store.dispatch('setModalStatus', false)
      this.modalOpen = false
    }
  }

}
