<template>
  <div class="wesen-comp">
    <img v-if="type === 'wesen'" src="~@assets/images/content/homepage/wesen-comp.png"  alt="Wesen Studio">
    <img v-else-if="type === 'toucanbox'" src="~@assets/images/content/homepage/toucan-background-horizonta-small.png"  alt="toucanBox">
  </div>
</template>

<script>


export default {

  props: {
    type: String
  }

}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  .wesen-comp
    position: absolute
    width: 100%
    height: 100%
    right: 0
    top: 0
    border-radius: $notification-radius
    overflow: hidden
    img
      position: absolute
      top: 0
      right: 0

</style>
