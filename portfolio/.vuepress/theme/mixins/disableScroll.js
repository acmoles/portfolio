export const disableScroll = {

  data () {
    return {
      $body: null,
    }
  },

  methods: {
    setBodyEl() {
      this.$body = document.querySelector('body')
    },
    // Disable scrolling on all devices (including iOS).
    disableScrolling(retainScrollPosition) {
      if (retainScrollPosition) {
        this.scrollPosition = window.pageYOffset
      }

      this.$body.style.overflow = 'hidden'
      this.$body.style.position = 'fixed'

      if (retainScrollPosition) {
        this.$body.style.top = `-${this.scrollPosition}px`
      }

      this.$body.style.width = '100%'
    },
    enableScrolling(restoreScrollPosition) {
      this.$body.style.removeProperty('overflow')
      this.$body.style.removeProperty('position')
      this.$body.style.removeProperty('top')
      this.$body.style.removeProperty('width')

      if (restoreScrollPosition) {
        document.documentElement.style.scrollBehavior = 'auto'
        window.scrollTo(0, this.scrollPosition)
        this.$nextTick(() => {
          document.documentElement.style.scrollBehavior = 'smooth'
        })
      }

    },
  }

}
