<template>
    <footer class="footer background-noise">
      <div class="container is-fullhd">
        <div class="footer-content columns is-gapless">
          <!-- <i class="icon"><Logo/></i> -->
          <router-link class="column" :to="$localePath">
            <strong class="footer-title">
              Anthony Moles
            </strong>
          </router-link>
          <div class="column">
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
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"

.home .footer
  background: transparent
  .footer-content, .copy
    padding: 0 1.5em
  .footer-title
    pointer-events: none

.footer
  text-rendering: geometricPrecision
  height: 16em
  @media screen and (min-width: $tablet)
    height: 12em
  display: flex
  align-items: center
  .container
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    .footer-content
      margin-bottom: 0
  .footer-content .column, .copy
    display: flex
    width: 100%
    align-items: flex-end
    @media screen and (min-width: $tablet)
      display: inline-flex
      width: auto
  .footer-title
    // font-size: 1.25em
    margin-right: 0.25em
    color: $white-ter
    // line-height: 1.25em
  i
    margin-right: 0.75em
  .footer-contact-links, .copy
    color: $silver
  .footer-contact-links
    margin-left: 1em
  .copy
    @media screen and (max-width: $tablet)
      margin-top: 4em
  .footer-about
    @media screen and (max-width: $tablet)
      margin-left: 0
      margin-top: 1.5em
    &::after
      content: "|"
      margin-left: 1em
      opacity: 0.25


</style>
