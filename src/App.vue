<template>
  <div
    id="app"
    :class="{'scroll-lock': scrollLock }"
  >
    <div id="relax">
      <div class="relax"></div>
      <div class="relax"></div>
      <div class="relax"></div>
      <div class="relax"></div>
    </div>
      <Nav/>
    <transition :name="transitionName" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>

import { Background } from '@/pixi/background.js'
import Nav from '@/components/nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  data () {
    return {
      background: {},
      transitionName: 'fade',
      scrollLock: false
    }
  },
  created () {
    this.$events.$on('toggle-scroll-lock', () => {
      this.scrollLock = !this.scrollLock;
    });
    this.$events.$on('exit-scroll-lock', () => {
      this.scrollLock = false;
    });
    this.$events.$on('remove-all-background', () => {
      if (this.background) {
        this.background.removeAll();
      }
    });
    this.$events.$on('replace-all-background', () => {
      if (this.background) {
        this.background.replaceAll();
      }
    });
    this.$nextTick(function () {
      this.background = new Background();
    })
  },
  beforeMount () {
  },
  mounted () {
  }
}

</script>

<style lang="sass">
// Shared styles
@import './sass/styles'

#app.scroll-lock
  overflow-y: hidden

</style>
