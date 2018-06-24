<template>
  <div id="app">
    <Fps
      v-if="fpsActive"
      :fps="background.app.ticker.FPS"
    />
    <div id="relax">
      <div class="relax"></div>
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

import { Background } from '@/pixi/background.js'
import Fps from '@/components/fps.vue'

export default {
  name: 'App',
  components: {
    Fps
  },
  data: function () {
    return {
      background: {},
      fpsActive: false
    }
  },
  created: function () {
    this.$nextTick(function () {
      this.background = new Background();
      this.background.appendCanvas();
      this.fpsActive = true;
    })
  }
}

</script>

<style lang="sass">
// Shared styles
@import './sass/styles'

</style>
