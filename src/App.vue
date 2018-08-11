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
      }
      this.setBackwardTransition();
    });
    this.$events.$on('replace-all-background', () => {
      if (this.firstBatch) {
        this.firstBatch = false;
      } else {
        if (this.backgroundReady) {
          this.background.replaceAll();
        }
      }
      this.setForwardTransition();
    });
    this.$events.$on('navigate-project', () => {
      if (this.backgroundReady) {
        this.background.animateObjects('up');
      }
      // this.toggleBodyClass('remove-class', 'scroll-lock');
    });
    this.$events.$on('cant-go-home', () => {
      if (this.backgroundReady) {
        setTimeout(() => {
          this.background.animateObjects('down');
        }, 400);
      }
      // this.toggleBodyClass('add-class', 'scroll-lock');
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
    toggleReversibleTransition() {
      this.transitionName = this.transitionName === 'fade-delay' ? 'fade-delay-reverse' : 'fade-delay';
    },
    setBackwardTransition() {
      this.transitionName = 'fade-delay-reverse';
    },
    setForwardTransition() {
      this.transitionName = 'fade-delay';
    },
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === 'add-class') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  }
}

</script>

<style lang="sass">
// Shared styles
@import './sass/styles'

.scroll-lock
  overflow-y: hidden

</style>
