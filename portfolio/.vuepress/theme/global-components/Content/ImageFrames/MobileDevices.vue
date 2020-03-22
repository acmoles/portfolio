<template>
  <div class="container is-fullhd">
    <div class="columns">
      <div
        class="column"
        v-for="(d, i) in devices"
      >
        <div class="device">
          <figure class="image is-1by2">
            <img src="d.url" alt="d.alt">
          </figure>
          Device
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  // TODO how to accept urls processed by webpack from assets?
  // Applies to all images passed as props

  // TODO check out how that UX portfolio website enables interactive devices, css etc.

  props: {
    devices: Array
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
  @import "../../../styles/variables.sass"
  @import "../../../styles/mixins.sass"

  // TODO variable grid gap

  .device
    background-color: $slate
    border-radius: $radius
    padding: 1em
    .image
      background-color: $extraDarkSmoke

</style>
