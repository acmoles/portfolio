<template>
<div class="project-background-three">
  <div class="presentation noise-background">

  </div>
  <script type="module">
    import { Hand } from './js/hand.js'
    import { NoiseLayer } from './js/noiseLayer.js'
    import { ThreeComposition } from './js/threeComposition.js'

    const presentation = document.getElementsByClassName('presentation')[0];
    var threeComposition = new ThreeComposition(presentation);

    var noiseLayer = new NoiseLayer();

    threeComposition.addEventListener('comp-loaded', () => {
      console.log('loaded');
    });

    threeComposition.init();

  </script>
</div>
</template>

<script>

import { loadableHero } from '../mixins/loadableHero.js'

export default {

  mixins: [loadableHero],

  data () {
    return {
      title: 'Three'
    }
  },

  computed: {
  },

  mounted() {
    setTimeout(() => {
      this.doLoad()
    }, 100)

  },

  methods: {

  },
}

</script>

<style lang="sass">

</style>
