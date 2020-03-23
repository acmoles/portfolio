<template>
  <figure class="image double-comp">
    <img :data-src="imgData.url"  :alt="imgData.alt" loading="lazy" class="lazyload" width="780" height="380">
  </figure>
</template>

<script>


export default {

  props: {
    type: String
  },

  computed: {
    imgData () {
      if (this.type === 'wesen') {
        return {
          url: '/images/homepage/wesen-mock-baked.jpg',
          url2x: '',
          alt: 'Wesen Studio'
        }
      } else if (this.type === 'toucanbox') {
        return {
          url: '/images/homepage/toucan-baked.jpg',
          url2x: '',
          alt: 'toucanBox'
        }
      }
    },
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
