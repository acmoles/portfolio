<template>
  <modal
    name="image-modal"
    classes="modal-inner"
    width="100%"
    height="auto"
    :scrollable="true"
    :adaptive="true"
    :reset="true"
    @before-open="beforeOpen"
  >
    <div
      slot="top-right"
      class="exit-modal"
      @click="$modal.hide('image-modal')"
    >
      <button
        class="navbar-item hamburger"
        type="button"
      >
        <span class="icon is-medium is-modal">
          <img src="/img/homepage/cross.svg" alt="">
        </span>
      </button>
    </div>


    <div class="figure-container">
      <figure class="image single-image" :class="imageAspectClass">
        <img class="lazyload" :data-src="imageUrl">
      </figure>
    </div>

  </modal>
</template>

<script>

export default {
  name: 'ImageModal',
  data () {
    return {
      imageUrl: '',
      imageAspectClass: '',
    }
  },
  methods: {
    beforeOpen (event) {
      this.imageUrl = event.params.url;
      this.imageAspectClass = event.params.aspect;
    }
  }
}
</script>

<style lang="sass">

  @import '../sass/variables'

  // Modals override
  .v--modal-overlay
    background: rgba($steel, 0.8) !important

  .v--modal-top-right
    z-index: 99

  .exit-modal
    background: $steel

  .modal-inner
    background-color: $snow

  .icon.is-medium.is-modal
    width: 1.15em
    height: 1.15em


  // .figure-container
  //   position: absolute
  //   top: 50%
  //   transform: translateY(-50%)


</style>
