<template>
  <figure class="image is-square single-comp">
    <img :data-src="imgData.url"  :alt="imgData.alt" loading="lazy" class="lazyload" width="256" height="256">
  </figure>
</template>

<script>


export default {

  props: {
    type: String
  },

  computed: {
    imgData () {
      if (this.type === 'stompy-robot') {
        return {
          url: '/images/homepage/stompy-robot-tile.jpg',
          url2x: '/images/homepage/stompy-robot-tile-2x.jpg',
          alt: 'Stompy Robot'
        }
      } else if (this.type === 'random') {
        return {
          url: '/images/homepage/random-tile.jpg',
          url2x: '/images/homepage/random-tile-2x.jpg',
          alt: 'Random International'
        }
      } else if (this.type === 'art-lebedev') {
        return {
          url: '/images/homepage/art-lebedev-tile.jpg',
          url2x: '/images/homepage/art-lebedev-tile-2x.jpg',
          alt: 'Art Lebedev Studio'
        }
      }
    },
  }

}

</script>

<style lang="sass">
 // See double comp
</style>
