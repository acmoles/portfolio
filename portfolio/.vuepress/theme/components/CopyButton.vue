<template>
  <button
    class="button copy-button"
    @click="doCopy(pageLink, 'Current page address copied to clipboard', 'top')"
  >
    <i class="icon" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path fill="#EEF2F6" d="M15.5,4.5 C16.7426407,4.5 17.75,5.50735931 17.75,6.75 C17.75,7.99264069 16.7426407,9 15.5,9 C14.2573593,9 13.25,7.99264069 13.25,6.75 C13.25,5.50735931 14.2573593,4.5 15.5,4.5 Z M6.75,9.75 C7.99264069,9.75 9,10.7573593 9,12 C9,13.2426407 7.99264069,14.25 6.75,14.25 C5.50735931,14.25 4.5,13.2426407 4.5,12 C4.5,10.7573593 5.50735931,9.75 6.75,9.75 Z M15.8001225,5.5495099 L16.7004901,7.05012252 L8.451,12 L14.172373,15.4332451 C14.5445142,15.1608333 15.0034748,15 15.5,15 C16.7426407,15 17.75,16.0073593 17.75,17.25 C17.75,18.4926407 16.7426407,19.5 15.5,19.5 C14.2573593,19.5 13.25,18.4926407 13.25,17.25 C13.25,17.1425983 13.2575252,17.0369543 13.272077,16.9335663 L5.0493057,12 L15.8001225,5.5495099 Z"/>
      </svg>
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
