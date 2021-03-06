<template>
  <nav
    class="navbar-menu is-flex-mobile is-flex-tablet"
    :class="{ 'is-active': active, 'burgered': burgered }"
    v-if="userLinks.length"
  >
    <div class="navbar-end">
    <!-- user links -->
      <template
        v-for="item in userLinks"
      >

        <DropdownLink
          v-if="item.type === 'links'"
          :item="item"
          :key="item.link"
        />

        <NavLink
          v-else
          :item="item"
          :key="item.link"
        />

      </template>
      <Searchbox/>
    </div>
  </nav>
</template>

<script>

import { resolveNavLinkItem } from '../../util'

import NavLink from '@theme/components/nav/NavLink.vue'
import DropdownLink from '@theme/components/nav/DropdownLink.vue'
import Searchbox from '@theme/components/nav/Searchbox.vue'

export default {
  components: { NavLink, DropdownLink, Searchbox },

  props: {
    active: Boolean,
    burgered: Boolean
  },

  computed: {
    isSidebarOpen () {
      return this.$store.state.isSidebarOpen
    },

    userNav () {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },

    nav () {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          ariaLabel: this.$themeLocaleConfig.ariaLabel || 'Select language',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [...this.userNav, languageDropdown]
      }
      return this.userNav
    },

    userLinks () {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    }

  }
}
</script>

<style lang="sass">
@import "../../styles/variables.sass"
@import "../../styles/mixins.sass"

.navbar-menu
  transition: opacity 0.15s  0.15s
  margin-right: 2em
  pointer-events: all

.navbar-menu.burgered
  opacity: 0
  pointer-events: none
  @media screen and (min-width: $tablet)
    transition: margin-right 0.3s step-end, opacity 0.15s
    margin-right: 6em

.navbar-menu.burgered.is-active
  opacity: 1
  pointer-events: all
</style>
