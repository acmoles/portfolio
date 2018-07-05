<template>
  <div id="app">
    <div id="relax">
      <div class="relax"></div>
      <div class="relax"></div>
      <div class="relax"></div>
      <div class="relax"></div>
    </div>
      <Nav/>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>

import * as smoothScroll from 'smoothscroll'
// import { Background } from '@/pixi/background.js'
import Nav from '@/components/nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  data () {
    return {
      background: {},
      transitionName: 'fade'
    }
  },
  created () {
    this.$nextTick(function () {
      // this.background = new Background();
    })
  },
  beforeMount () {
    this.$events.$on('load', (value) => {
    });
  },
  mounted () {
  },
  methods: {
    scrollTo (event) {
      console.log('scroll');
      let scrollContext = document.getElementById('app');
      smoothScroll(0, 500, undefined, scrollContext);
    }
  }
}

</script>

<style lang="sass">
// Shared styles
@import './sass/styles'

</style>
