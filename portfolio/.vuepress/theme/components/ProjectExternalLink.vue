<template>
  <a 
  class="button is-dark project-external-link is-fullwidth background-noise"
  :class="'umami--click--project-link-' + label"
  target="_blank"
  rel="noopener noreferrer"
>
    <span>{{ label }}</span>
    <ExternalIcon/>
  </a>
</template>

<script>
import ExternalIcon from '@theme/components/icons/ExternalIcon.vue'

export default {

  components: { ExternalIcon },

  props: {
    label: String
  }
}

</script>

<style lang="sass">
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"

.button.project-external-link.is-dark
  position: relative
  justify-content: center
  text-rendering: geometricPrecision
  color: $button-custom-text-color
  background-color: $slate
  height: auto
  padding-left: 2em
  padding-right: 2em
  box-shadow: $button-shadow
  transition: $button-transition
  .icon
    position: absolute
    right: 0.75em
    margin: 0
    transform: translateX(0.75em)
  .icon, span
    transition: transform 300ms ease
  #ExternalIcon, #MaximiseIcon
    path
      transition: opacity 200ms ease
      fill: $button-custom-text-color
      opacity: 0
  &:hover
    background-color: $button-custom-hover-color
    color: $grey-light
    .icon
      transform: translateX(0)
    span
      transform: translateX(-0.75em)
    #ExternalIcon, #MaximiseIcon
      path
        opacity: 1

.light
  .button.project-external-link.is-dark
    background-color: rgba($white, 0.2)
    color: $white
    box-shadow: none
    transition: $button-transition
    #ExternalIcon, #MaximiseIcon
      path
        fill: $white
        opacity: 0
    &:hover
      background-color: rgba($white, 0.3)
      #ExternalIcon, #MaximiseIcon
        path
          fill: $white
          opacity: 0.8

</style>
