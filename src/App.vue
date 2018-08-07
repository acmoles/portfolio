<template>
  <div
    id="app"
  >
    <div id="relax">
      <div class="relax"></div>
      <div class="relax"></div>
      <div class="relax"></div>
    </div>

    <Nav />

    <transition :name="transitionName" mode="out-in">
      <router-view />
    </transition>

    <FooterNav
      :back="true"
    />

  </div>
</template>

<script>

import { Background } from '@/pixi/background.js'
import Nav from '@/components/nav.vue'
import FooterNav from '@/components/footer-nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
    FooterNav
  },
  data () {
    return {
      background: {},
      transitionName: 'fade',
      scrollLock: true
    }
  },
  created () {
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
  methods: {
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === 'add-class') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
  // mounted() {
  //   this.toggleBodyClass('add-class', 'scroll-lock');
  // },
  // destroyed() {
  //   this.toggleBodyClass('remove-class', 'scroll-lock');
  // }
}

</script>

<style lang="sass">
// Shared styles
@import './sass/styles'

.scroll-lock
  overflow-y: hidden

</style>
