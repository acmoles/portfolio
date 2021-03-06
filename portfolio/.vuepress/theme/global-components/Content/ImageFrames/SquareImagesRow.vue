<template>
  <section class="section" :class="padding">
    <div class="container is-fullhd">

      <div v-if="hasContent" class="columns">
        <div class="column is-two-thirds content" :class="rag">
          <slot name="content"></slot>
          <br>
        </div>
      </div>

      <div class="columns">
        <div
          class="column is-one-third"
          v-for="(image, i) in images"
        >

          <button v-if="image.action" class="action-button background-noise" :class="image.action.type" type="button" name="action" @click="action(image, i)">
            <figure class="image parent-loading is-square">
              <img class="lazyload" :data-src="image.url" :alt="image.alt">
            </figure>
            <span>{{ image.action.label }}
              <i class="icon">
                <img v-if="image.action.type === 'modal'" src="/svg-icons/icon_maximise.svg" alt="Maximise icon">
                <img v-if="image.action.type === 'link'" src="/svg-icons/icon_external.svg" alt="External icon">
              </i>
            </span>
            <ModalBase
              v-if="showDialog === i"
              @close="close()"
              label="Open dialog"
            >
              <slot :name="image.action.slot"></slot>
            </ModalBase>
          </button>

          <figure
            v-else
            class="image is-square"
            :class="[{'sibling-action-padding': siblingAction}, {'parent-loading': allowLoader}]"
          >
            <Iframer v-if="image.iframe" :url="image.url"></Iframer>
            <video v-else-if="image.videoUrl && !isMobile" v-on:play="speedUpVideo" class="has-ratio" preload="auto" loop="" muted="" autoplay=""><source :src="image.videoUrl"></video>
            <img v-else class="lazyload" :class="{'medium-zoom': image.zoomable}" :data-src="image.url" :alt="image.alt">
          </figure>


          <figcaption class="content">
            <slot v-if="image.slot" :name="image.slot"></slot>
            <template v-else>
              {{ image.caption }}
            </template>
          </figcaption>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

import ModalBase from '@theme/components/ModalBase.vue'
import Iframer from '@theme/global-components/Content/ImageFrames/Iframer.vue'

export default {

  components: { ModalBase, Iframer },

  props: {
    images: Array,
    padding: String,
    content: Boolean,
    rag: String
  },

  data() {
    return {
      showDialog: -1,
      allowLoader: true
    };
  },

  computed: {
    siblingAction() {
      let hasSiblingAction
      this.images.forEach((image) => {
        if (image.action) {
          hasSiblingAction = true
        }
      })
      return hasSiblingAction
    },
    hasContent () {
      return !!this.$slots['content']
    },
    $window () {
      return this.$store.state.window
    },
    isMobile () {
      return this.$window.innerWidth < 1024
    }
  },

  methods: {
    action(image, i) {
      if (image.action.type === 'link') {
        window.open(image.action.url, '_blank')
      } else if (image.action.type === 'modal') {
        this.showDialog = i
        this.$store.dispatch('setModalStatus', true)
      }
    },
    close() {
      this.$store.dispatch('setModalStatus', false)
      this.showDialog = -1
    },
    speedUpVideo(event) {
      event.target.playbackRate = 1.8
      if (this.allowLoader) {
        this.allowLoader = false
      }
    }
  }

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .sibling-action-padding
    margin-bottom: 5em


</style>
