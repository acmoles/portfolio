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
    @click="doCopy('acmoles@gmail.com', 'Email copied to clipboard', 'top')"
    @focusout="focusoutAction"
    class="navbar-item"
  >
    {{ item.text }}</a>
  <a
    v-else
    :href="link"
    @focusout="focusoutAction"
    class="navbar-item external"
    :class="'umami--click--external-' + item.text"
    :target="isTel(link) ? null : '_blank'"
    :rel="isTel(link) ? null : 'noopener noreferrer'"
  >
    {{ item.text }}</a>
</template>

<script>

// v-clipboard:copy="this.splitMailto(link)"
// v-clipboard:success="this.onCopy('random text', 'top')"
// v-clipboard:error="onError"

import { isExternal, isMailto, isTel, ensureExt } from '@theme/util'
import { copyText } from '@theme/mixins/copyText.js'

export default {
  props: {
    item: {
      required: true
    }
  },

  mixins: [copyText],

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
    splitMailto (mailto) {
      return mailto.split(':')[1]
    },
    // onCopy (text, position) {
    //   console.log('mixin method');
    //   this.$store.dispatch('setSnackbarStatus', {
    //     text: text,
    //     position: position || 'top'
    //   })
    // },
    // onError () {
    //   console.log('mixin error');
    //   this.$store.dispatch('setSnackbarStatus', {
    //     text: 'Clipboard copy error',
    //     position: 'top'
    //   })
    // },
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
