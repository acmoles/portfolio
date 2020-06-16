<template>

<div class="columns is-variable is-3 step-columns">
  <div
  v-for="(s, i) in steps"
  class="column"
  >
    <p class="box">{{ s }}</p>
  </div>
</div>

</template>

<script>

export default {

  props: {
    steps: Array
  },

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .step-columns
    padding: 0.5em 0 1em 0
    .box
      height: 100%
      display: flex
      align-items: center
      position: relative
    .box::after
    	left: 100%
    	top: 50%
    	border: solid transparent
    	content: " "
    	height: 0
    	width: 0
    	position: absolute
    	pointer-events: none
    	border-left-color: $steel
    	border-width: 0.75em
    	margin-top: -0.75em
    .column:last-child
      .box::after
        content: none

  @media screen and (max-width: $tablet)
    .step-columns
      .box::after
        top: 100%
        left: 50%
        border-top-color: $steel
        border-left-color: transparent
        border-width: 0.75em
        margin-top: unset
        margin-left: -0.75em


</style>
