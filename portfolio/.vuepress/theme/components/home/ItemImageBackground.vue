<template>
  <figure class="image is-square single-comp">
    <img v-if="type === 'stompy-robot'" src="~@assets/images/content/homepage/stompy-robot-tile.jpg"  alt="Stompy Robot">
    <img v-else-if="type === 'random'" src="~@assets/images/content/homepage/random-tile.jpg"  alt="Random International">
    <img v-else-if="type === 'art-lebedev'" src="~@assets/images/content/homepage/art-lebedev-tile.jpg"  alt="Art Lebedev Studio">
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
 // See double comp
</style>
