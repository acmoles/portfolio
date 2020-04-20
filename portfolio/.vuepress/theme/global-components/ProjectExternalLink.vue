<template>
  <button class="button is-dark project-external-link noise-light">{{ label }}
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
  },

  computed: {
  },

  mounted() {
  },

  methods: {
  }
}

</script>

<style lang="sass">
@import "../styles/variables.sass"
@import "../styles/mixins.sass"

button.project-external-link.is-dark
  text-rendering: geometricPrecision
  font-size: 1.125em
  color: $button-custom-text-color
  max-width: 16em
  justify-content: space-between
  background-color: $slate
  height: auto
  padding-left: 1.125em
  padding-right: .75em
  box-shadow: $button-shadow
  transition: $button-transition
  #ExternalIcon
    path
      transition: opacity 200ms ease
      fill: $button-custom-text-color
      opacity: 0.64
  &:hover
    background-color: $button-custom-hover-color
    color: $grey-light
    #ExternalIcon
      path
        opacity: 1
  .icon
    margin-left: 0.75em

.light
  button.project-external-link.is-dark
    background-color: rgba($white, 0.2)
    color: $white
    box-shadow: none
    transition: $button-transition
    #ExternalIcon
      path
        fill: $white
        opacity: 0.64
    &:hover
      background-color: rgba($white, 0.3)
      #ExternalIcon
        path
          fill: $white
          opacity: 0.8

// TODO add slight fade transition to all button type elements?

</style>
