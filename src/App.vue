<template>
  <div
    id="app"
  >
    <Nav />

    <transition :name="transitionName" mode="out-in">
      <router-view />
    </transition>

    <FooterNav />
  </div>
</template>

<script>

import { Background } from '@/service/background.js'
import { Intro } from '@/service/intro.js'
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
      transitionName: 'fade-delay',
      backgroundReady: false,
      scrollLock: true,
      firstBatch: true
    }
  },
  created () {
    this.$events.$on('remove-all-background', () => {
      if (this.backgroundReady) {
        this.background.removeAll();
        setTimeout(() => {
          this.background.animateObjects('down');
        }, 2000);
      }
    });
    this.$events.$on('replace-all-background', () => {
      if (this.firstBatch) {
        this.firstBatch = false;
      } else {
        if (this.backgroundReady) {
          this.background.replaceAll();
        }
      }
    });
    this.$events.$on('navigate-project', () => {
      if (this.backgroundReady) {
        this.background.animateObjects('up');
      }
    });

    this.$nextTick(function () {
      this.intro = new Intro();
      this.background = new Background();
      this.background.appendCanvas(() => {
        // background ready callback
        this.intro.introSequence(() => {
          // sliders finished callback
          this.background.addFirstBatch();
          this.backgroundReady = true;
        });
      });
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
