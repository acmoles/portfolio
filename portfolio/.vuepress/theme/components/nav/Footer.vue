<template>
    <footer class="footer background-noise">
      <div class="container is-fullhd">
        <div class="footer-content">
          <!-- <i class="icon"><Logo/></i> -->
          <router-link :to="$localePath">
            <strong class="footer-title">
              Anthony Moles
            </strong>
          </router-link>
          <router-link class="footer-contact-links footer-about" to="/about">About</router-link>
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
@import "../../styles/variables.sass"
@import "../../styles/mixins.sass"

.home .footer
  background: transparent
  .footer-content, .copy
    padding: 0 1.5em
  .footer-title
    pointer-events: none

.footer
  text-rendering: geometricPrecision
  height: 12em
  display: flex
  align-items: center
  .container
    display: flex
    justify-content: space-between
  .footer-content, .copy
    display: inline-flex
    align-items: flex-end
  .footer-title
    // font-size: 1.25em
    margin-right: 0.25em
    color: $white-ter
    // line-height: 1.25em
  i
    margin-right: 0.75em
  .footer-contact-links, .copy
    color: $silver
    margin-left: 1em
  .footer-about
    &::after
      content: "|"
      margin-left: 1em
      filter: opacity(25%)

</style>
