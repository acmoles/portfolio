<template>
  <div
    id="app"
  >
    <Nav />

    <transition :name="transitionName" mode="out-in">
      <router-view />
    </transition>

    <FooterNav />

    <OverlayMenu />

  </div>
</template>

<script>

import { Background } from '@/service/background.js'
import { Intro } from '@/service/intro.js'
import Nav from '@/components/nav.vue'
import FooterNav from '@/components/footer-nav.vue'
import OverlayMenu from '@/components/overlay-menu.vue'

export default {
  name: 'App',
  components: {
    Nav,
    FooterNav,
    OverlayMenu
  },
  data () {
    return {
      background: {},
      transitionName: 'fade-delay-none',
      backgroundReady: false,
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
        this.background.toggleCanvasFader('on');
      }
    });
    this.$events.$on('home-sequence', (callback) => {
      // this.intro.slideLoader('in', true, () => {
      //   this.background.resetLayerHeight();
      //   this.background.toggleCanvasFader();
      //   this.intro.fadeLoader('out', () => {
      //     this.intro.resetLoaderBars();
      //   });
      //   if (callback) {
      //     callback();
      //   }
      // });
      this.intro.fadeLoader('in', () => {
        // this.background.resetLayerHeight();
        this.background.toggleCanvasFader('off');
        setTimeout(() => {
          this.intro.fadeLoader('out', () => {
            // this.intro.resetLoaderBars();
          });
        }, 200);
        if (callback) {
          callback();
        }
      });
    });

    this.$nextTick(function () {
      this.intro = new Intro();
      this.background = new Background();
      this.background.appendCanvas(() => {
        // background ready callback
        this.intro.introSequence(() => {
          // sliders finished callback
          if (!this.intro.firefox && this.$route.path === '/') {
            this.background.addFirstBatch();
            this.backgroundReady = true;
          } else {
            this.backgroundReady = false;
          }
        });
      });
    })
  },
  methods: {
    setBackwardTransition() {
      this.transitionName = 'fade-delay-none';
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
  </style>
