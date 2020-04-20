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
    max-width: 16em
    justify-content: space-between
    background-color: $slate
    height: auto
    padding-left: 1.25em
    padding-right: .75em
    box-shadow: $button-shadow
    &:hover
      background-color: $button-custom-hover-color
    .icon
      margin-left: 2.5em
</style>
