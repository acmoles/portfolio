<template>
    <footer class="footer container is-fullhd">
      <div class="footer-content">
        <i class="icon"></i>
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
        © Anthony Moles {{ getYear }}
      </div>
    </footer>
</template>

<script>
import NavLinks from '@theme/components/NavLinks.vue'

export default {

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
  height: 12em
  display: flex
  justify-content: space-between
  align-items: center
  .footer-content, .copy
    padding: 0 1.5em
    display: inline-flex
    align-items: center
  .footer-title
    font-size: 1.25em
    font-family: $family-display
    margin-right: 1em
  i
    background: $white-ter
    margin-right: 1em
  .footer-contact-links, .copy
    color: $silver
    margin-left: 1em
    &:hover
      color: $slate

</style>
