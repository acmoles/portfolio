<template>
  <button class="button is-dark project-external-link noise-light">
    <span>{{ label }}</span>
    <ExternalIcon/>
  </button>
</template>

<script>
// TODO thicker icon lines 2px
import ExternalIcon from '@theme/components/icons/ExternalIcon.vue'

export default {

  components: { ExternalIcon },

  props: {
    label: String
  }
}

</script>

<style lang="sass">
@import "../styles/variables.sass"
@import "../styles/mixins.sass"

button.project-external-link.is-dark
  position: relative
  text-rendering: geometricPrecision
  font-size: 1.125em
  color: $button-custom-text-color
  max-width: 16em
  justify-content: space-between
  background-color: $slate
  height: auto
  padding-left: 2em
  padding-right: 2em
  box-shadow: $button-shadow
  transition: $button-transition
  .icon
    position: absolute
    right: 1em
    transform: translateX(0.75em)
  .icon, span
    transition: transform 300ms ease
  #ExternalIcon
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
    #ExternalIcon
      path
        opacity: 1

.light
  button.project-external-link.is-dark
    background-color: rgba($white, 0.2)
    color: $white
    box-shadow: none
    transition: $button-transition
    #ExternalIcon
      path
        fill: $white
        opacity: 0
    &:hover
      background-color: rgba($white, 0.3)
      #ExternalIcon
        path
          fill: $white
          opacity: 0.8

</style>
