<template>

  <div class="iframer" :class="{'iframer-waiting': !loadingChecked}">
      <div class="iframe-button-parent">
        <button class="button iframe-button umami--click--video-load-retry" @click="reloadVideo">Reload video</button>
      </div>
      <iframe class="lazyload" @load="iframeLoad" :data-src="url" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>

</template>

<script>


export default {

  props: {
    url: String,
  },

  data() {
    return {
      loadingChecked: false,
      iframeEl: null,
      iframeSrc: null
    };
  },

  methods: {
    iframeLoad(e) {
      this.iframeEl = e.target
      this.iframeSrc = e.target.getAttribute('data-src')

      // TODO more correct conditions?
      if (!!e.target.querySelectorAll('#player')) {
        // Seems to be ok, allow iframe click events to cover retry button
        this.loadingChecked = true
      }
    },
    reloadVideo() {
      this.iframeEl.src = this.iframeSrc
    }
  }

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .iframe-button-parent
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    opacity: 0
    transition: opacity 0.4s ease 2.4s

  .parent-loaded .iframe-button-parent
    opacity: 1

  .iframer-waiting
    iframe
     pointer-events: none

</style>
