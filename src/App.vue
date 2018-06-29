<template>
  <div id="app">
    <div id="relax">
      <div class="relax"></div>
      <div class="relax"></div>
      <div class="relax"></div>
      <div class="relax"></div>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

import * as smoothScroll from 'smoothscroll'

// import { Background } from '@/pixi/background.js'

export default {
  name: 'App',
  components: {
  },
  data: function () {
    return {
      background: {},
    }
  },
  created: function () {
    this.$nextTick(function () {
      // this.background = new Background();
    })
  }
}

</script>

<style lang="sass">
// Shared styles
@import './sass/styles'

</style>
