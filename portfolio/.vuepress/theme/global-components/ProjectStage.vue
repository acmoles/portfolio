<template>
  <div class="stage">
    <div class="visual">
      <slot name="visual"></slot>
    </div>
    <div class="description">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>

export default {

}

</script>

<style lang="sass">
@import "../styles/variables.sass"

.visual, .description
  display: flex
  align-items: center
  justify-content: center
  width: 100%

.visual
  height: 100vh

.description
  background-color: $slate


</style>
