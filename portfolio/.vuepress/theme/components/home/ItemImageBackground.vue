<template>
  <div class="wesen-comp">
    hello world
  </div>
</template>

<script>


export default {

}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  .wesen-comp
    @include make3d
    transform-origin: left top
    perspective: 3000px

</style>
