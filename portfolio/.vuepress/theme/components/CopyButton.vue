<template>
  <button class="button copy-button" @click="doCopy(pageLink, 'Current page address copied to clipboard', 'top')">
    <i class="icon" aria-hidden="true">
      <img src="/svg-icons/icon_share.svg" alt="link icon">
    </i>
  </button>
</template>

<script>
import { copyText } from '@theme/mixins/copyText.js'

export default {

  mixins: [copyText],

  computed: {
    pageLink () {
      if (typeof window !== 'undefined') {
        return window.location
      }
    },
  }

}

</script>

<style lang="sass">
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"

.copy-button
  height: auto
  padding: 0.75em
  .icon
    opacity: 0.8
    transition: opacity 0.3s ease-out

  &::after
    @include pseudo-full
    pointer-events: none
    border-radius: $radius-small
    filter: opacity(0.42)
    transition: filter 0.3s ease-out
    box-shadow: inset 0px 0px 0px 2px $silver

.copy-button:hover, .copy-button:focus
  &::after
    filter: opacity(1)
  .icon
    opacity: 1

</style>
