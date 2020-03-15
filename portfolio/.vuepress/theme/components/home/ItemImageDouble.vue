<template>
  <figure class="image double-comp">
    <img v-if="type === 'wesen'" src="~@assets/images/content/homepage/wesen-mock-baked.jpg"  alt="Wesen Studio">
    <img v-else-if="type === 'toucanbox'" src="~@assets/images/content/homepage/toucan-baked.jpg"  alt="toucanBox">
  </figure>
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

  .double-comp, .single-comp
    position: absolute
    width: 100%
    height: 100%
    right: 0
    top: 0
    border-radius: $notification-radius
    overflow: hidden
    z-index: -1
    img
      position: absolute
      top: 0
      right: 0

</style>
