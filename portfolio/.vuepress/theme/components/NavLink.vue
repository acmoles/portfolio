<template>
  <router-link
    class="navbar-item"
    :to="link"
    @focusout.native="focusoutAction"
    v-if="!isExternal(link)"
    :exact="exact"
  >{{ item.text }}</router-link>
  <a
    v-else
    :href="link"
    @focusout="focusoutAction"
    class="navbar-item external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    {{ item.text }}
    <OutboundLink/>
  </a>
</template>

<script>
// TODO customise OutboundLink

import { isExternal, isMailto, isTel, ensureExt } from '../util'

export default {
  props: {
    item: {
      required: true
    }
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel,
    focusoutAction () {
      this.$emit('focusout')
    }
  }
}
</script>

<style lang="sass">
@import "../styles/variables.sass"

.navbar-item
  height: fit-content
  border-bottom: 2px transparent solid


.navbar-item.router-link-active
  border-bottom: 2px $white-ter solid

</style>
