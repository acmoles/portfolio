<template>
  <div class="stage notification noise-light" :class="background">

    <div class="info-box" :class="lightClass">
      <div class="container is-fullhd">

        <div class="columns">
          <div
            class="column is-two-thirds stage-description-column appear-fade-up"
            :class="{'in-view': visible}"
          >
            <slot name="description"></slot>
          </div>

          <div
            class="column stage-details-column appear-fade-up"
          >
            <slot name="descriptionDetails"></slot>
          </div>
        </div>

      </div>
    </div>

    <div
      class="visual appear-fade-up"
      :class="{'in-view': visible}"
    >
      <slot name="visual"></slot>
    </div>

  </div>
</template>

<script>
// <ToggleIcon/>
// import ToggleIcon from '@theme/components/icons/ToggleIcon.vue'

import { fadeUpInLoad } from '@theme/mixins/fadeUpInLoad.js'

export default {

  // components: { ToggleIcon }

  mixins: [fadeUpInLoad],

  computed: {

    background () {
      return this.$page.frontmatter.background
    },

    lightDark () {
      return this.$page.frontmatter.navStyle.style
    },

    lightClass () {
      return {
        'light': this.lightDark === 'light'
      }
    }


  }

}

</script>

<style lang="sass">
@import "../styles/variables.sass"
@import "../styles/mixins.sass"

.stage.notification
  height: 100vh
  margin-bottom: 8em
  padding: 0
  border-radius: 0

  .visual, .info-box
    display: flex
    align-items: center
    justify-content: center
    width: 100%
    position: relative

  .visual
    // TODO transition delay doesn't seem to work coming from home
    transition-delay: 0.3s
    &::before
      content: ' '
      position: absolute
      width: 100%
      height: 1.5em
      background-image: linear-gradient(360deg, $steel 0%, rgba($steel,0.42) 40%, rgba($steel,0.00) 100%)
      top: -1.5em
      opacity: 0.08

  .info-box
    position: relative
    // top: -1.5em
    padding: 6em 0 7em 0
    &.light
      color: $white

    .stage-description
      text-rendering: geometricPrecision
      padding-right: 3em

    .stage-description-column
      margin-left: 1.75em


    .stage-details-column
      display: flex
      flex-direction: column
      justify-content: space-between

    .stage-details
      margin-top: 0.5em
      margin-bottom: 3em
      position: relative
      li
        margin-left: 1.25em
        margin-bottom: 0.75em
        &::before
          content: "¬"
          position: absolute
          left: 0

</style>
