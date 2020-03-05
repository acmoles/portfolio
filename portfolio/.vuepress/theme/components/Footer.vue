<template>
    <footer class="footer container is-fullhd">
      <div class="footer-content">
        <!-- <i class="icon"><Logo/></i> -->
        <h3 class="footer-title">
          Anthony Moles
        </h3>
        <a
          class="footer-contact-links"
          v-for="item in userContact"
          :href="item.link"
          target="_blank"
        >
          {{ item.text }}
        </a>
      </div>
      <div class="copy">
        © {{ getYear }}
      </div>
    </footer>
</template>

<script>
import Logo from '@theme/components/icons/Logo.vue'

export default {

  components: { Logo },

  computed: {
    getYear () {
      const date = new Date()
      return date.getFullYear()
    },

    userNav () {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },

    userContact () {
      let contactItems
      this.userNav.forEach(link => {
        if (link.text === 'Contact') {
          contactItems = link.items
        }
      })
      return contactItems
    }


  },

  methods: {
  }
}

</script>

<style lang="sass">
@import "../styles/variables.sass"

.footer
  text-rendering: geometricPrecision
  height: 12em
  display: flex
  justify-content: space-between
  align-items: center
  .footer-content, .copy
    padding: 0 1.5em
    display: inline-flex
    align-items: flex-end
  .footer-title
    font-size: 1.25em

    line-height: 1.3em
    font-family: $family-display
    letter-spacing: .5px
    margin-right: 1em
  i
    margin-right: 0.75em
  .footer-contact-links, .copy
    color: $silver
    margin-left: 1em
    transition: opacity 0.3s ease
  .footer-contact-links:hover
    opacity: 0.64

</style>
