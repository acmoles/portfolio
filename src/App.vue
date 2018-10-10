<template>
  <div
    id="app"
    :class="userAgent"
  >
    <Nav />

    <transition :name="transitionName" mode="out-in">
      <router-view />
    </transition>

    <FooterNav />

    <OverlayMenu />

    <ImageModal />

  </div>
</template>

<script>

import { Background } from '@/service/background.js'
import { Intro } from '@/service/intro.js'
import Nav from '@/components/nav.vue'
import FooterNav from '@/components/footer-nav.vue'
import OverlayMenu from '@/components/overlay-menu.vue'
import ImageModal from '@/components/image-modal.vue'

export default {
  name: 'App',
  components: {
    Nav,
    FooterNav,
    OverlayMenu,
    ImageModal
  },
  data () {
    return {
      userAgent: undefined,
      transitionName: 'fade-none',
      backgroundReady: false,
      firstBatch: true
    }
  },
  created () {
    this.$events.$on('remove-all-background', () => {

      this.setBackwardTransition();

      if (this.backgroundReady) {
        this.background.removeAll();
      }
    });
    this.$events.$on('replace-all-background', () => {

      if (this.backgroundReady) {
        this.background.toggleCanvasFader('off');
      }

      this.setForwardTransition();

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
        this.background.toggleCanvasFader('on');
      }
    });
    this.$events.$on('home-sequence', (callback) => {

      this.intro.fadeLoader('in', () => {
        setTimeout(() => {
          this.intro.fadeLoader('out', () => {
          });
        }, 200);
        if (callback) {
          callback();
        }
      });

    });

    this.$nextTick(function () {
      this.intro = new Intro();
      this.userAgent = this.intro.userAgent;
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

      // Handle all back button usage as if navigating back from a project
      window.addEventListener('popstate', () => {
        this.$events.$emit('home-sequence');
        console.log('home sequence please');
      }, false);

      console.log('attempting to add event');
    });

  },
  methods: {
    setBackwardTransition() {
      this.transitionName = 'fade-none';
    },
    setForwardTransition() {
      this.transitionName = 'fade';
    }

  }
}

</script>

  <style lang="sass">
  // Shared styles
  @import './sass/styles'
  </style>
