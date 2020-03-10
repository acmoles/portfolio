<template>
  <div class="stage">

    <div class="visual">
      <slot name="visual"></slot>
    </div>

    <div class="info-box">
      <div class="container is-fullhd">

        <div class="columns">
          <div class="column is-two-thirds stage-description-column">
            <slot name="description"></slot>
          </div>

          <div class="column stage-details-column">
            <slot name="descriptionDetails"></slot>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
// <ToggleIcon/>
// import ToggleIcon from '@theme/components/icons/ToggleIcon.vue'

export default {

  // components: { ToggleIcon }

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
  position: relative

.visual
  height: 100vh

.info-box
  position: relative
  // top: -1.5em
  background-color: $steel
  box-shadow: $info-box-shadow
  padding: 5em 0

  .stage-description
    text-rendering: geometricPrecision
    padding-right: 3em

  .stage-details-column
    display: flex
    flex-direction: column
    justify-content: space-between

  .stage-details
    margin-top: 0.5em
    position: relative
    li
      margin-left: 1.25em
      margin-bottom: 0.75em
      &::before
        content: "¬"
        position: absolute
        left: 0

</style>
