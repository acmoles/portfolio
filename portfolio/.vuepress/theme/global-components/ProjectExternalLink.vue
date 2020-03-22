<template>
<button class="button is-dark project-external-link noise-light">{{ label }}
  <span class="icon">
    <ExternalIcon/>
  </span>
</button>
</template>

<script>

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
    margin-bottom: 0.5em
    max-width: 16em
    justify-content: space-between
    background-color: $slate
    height: auto
    padding-left: 1.25em
    padding-right: .75em
    box-shadow: $button-shadow
    &:hover
      background-color: $button-custom-hover-color
</style>
