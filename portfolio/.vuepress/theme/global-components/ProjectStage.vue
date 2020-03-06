<template>
  <div class="stage">

    <div class="visual">
      <slot name="visual"></slot>
    </div>

    <div class="info-box">
      <ToggleIcon :down="toggleDown" @toggle-click="toggleArrow" />

      <div class="container is-fullhd">

        <div class="columns">
          <div class="column is-two-thirds">
            <slot name="description"></slot>
          </div>

          <div class="column">
            <slot name="descriptionDetails"></slot>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

import ToggleIcon from '@theme/components/icons/ToggleIcon.vue'

export default {

  components: { ToggleIcon },

  data () {
    return {
        toggleDown: null,
    }
  },

  methods: {
    toggleArrow() {
      this.toggleDown = !this.toggleDown
    }
  }

}

</script>

<style lang="sass">
@import "../styles/variables.sass"
@import "../styles/mixins.sass"

.visual, .info-box
  display: flex
  align-items: center
  justify-content: center
  width: 100%

.visual
  height: 100vh

.info-box
  position: relative
  top: -1.5em
  background-color: $steel
  box-shadow: $info-box-shadow
  padding: 5em 0

  .stage-description
    text-rendering: geometricPrecision
    padding-right: 3em


</style>
