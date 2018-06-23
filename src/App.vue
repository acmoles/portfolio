<template>
  <div id="app">
    <Fps
      v-if="fpsActive"
      :fps="background.app.ticker.FPS"
    />
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
      this.fpsActive = true;
    })
  }
}

</script>

<style lang="sass">
// Shared styles
@import './sass/styles'

#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983

</style>
