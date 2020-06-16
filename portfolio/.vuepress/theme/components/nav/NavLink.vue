<template>
  <router-link
    class="navbar-item single"
    :to="link"
    @focusout.native="focusoutAction"
    v-if="!isExternal(link)"
    :exact="exact"
  >{{ item.text }}</router-link>
  <a
    v-else-if="isMailto(link)"
    v-clipboard:copy="splitMailto(link)"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError"
    @focusout="focusoutAction"
    class="navbar-item copy"
  >
    {{ copyTextMessage ? copyTextMessage : item.text }}
  </a>
  <a
    v-else
    :href="link"
    @focusout="focusoutAction"
    class="navbar-item external"
    :target="isTel(link) ? null : '_blank'"
    :rel="isTel(link) ? null : 'noopener noreferrer'"
  >
    {{ item.text }}
  </a>
</template>

<script>

import { isExternal, isMailto, isTel, ensureExt } from '@theme/util'

export default {
  props: {
    item: {
      required: true
    }
  },

  data () {
    return {
      copyTextMessage: null,
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
    },
    onCopy () {
      this.copyTextMessage = 'Email copied to clipboard'
      setTimeout(() => {
        this.copyTextMessage = null
      }, 1600)

      // TODO global snackbar indicator
    },
    onError () {
      this.copyTextMessage = 'Error'
    },
    splitMailto (mailto) {
      return mailto.split(':')[1]
    }
  }
}
</script>

<style lang="sass">
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"


.navbar-item.single
  height: fit-content

.navbar-item.single.router-link-active
  color: $white

</style>
