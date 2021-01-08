<template>
  <section class="section is-medium" :class="{'gapless-bottom': gaplessBottom}">
    <div class="container is-fullhd">

      <div
        :class="[variableGap, {'columns is-variable': devices.length > 1}]"
      >

        <div
          :class="{'column': devices.length > 1}"
          v-for="(d, i) in devices"
        >

          <figure
          class="image scale-wrapper"
          :class="{'single': devices.length <= 1}"
          ref="wrapper"
          >
            <div
              class="marvel-device iphone-x"
              :style="{ transform: contentScale, WebkitTransform: contentScale }"
              v-if="displayDevice"
            >
              <div class="top-bar"></div>
              <div class="sleep"></div>
              <div class="bottom-bar"></div>
              <div class="volume"></div>
              <div class="overflow">
                  <div class="shadow shadow--tr"></div>
                  <div class="shadow shadow--tl"></div>
                  <div class="shadow shadow--br"></div>
                  <div class="shadow shadow--bl"></div>
              </div>
              <div class="inner-shadow"></div>
              <div class="screen">
                  <img :src="d.url" alt="d.alt" loading="lazy" class="lazyload" width="375" height="812">
                  {{ d.alt }}
              </div>
            </div>
          </figure>

        </div>
      </div>

    </div>
  </section>
</template>

<script>

export default {

  // TODO check out how that UX portfolio website enables interactive devices, css etc.

  props: {
    devices: Array,
    gaplessBottom: Boolean
  },

  data () {
    return {
      contentScale: null,
      displayDevice: false
    }
  },

  computed: {
    variableGap () {
      if (this.devices.length <= 5) {
        return 'is-16'
      } else {
        return 'is-8'
      }
    }
  },

  mounted() {
    this.$forceNextTick(() => {
      const scale = this.$refs['wrapper'][0].offsetWidth / 427

      // this.contentScale = 'translate(-50%, -50%) ' + 'scale(' + scale + ')'
      this.contentScale = 'scale(' + scale + ')'
      this.displayDevice = true
    })
  },

  methods: {
  }
}

</script>

<style lang="sass">
@import "../../../styles/variables.sass"
@import "../../../styles/mixins.sass"

// TODO added extra variable gaps to Bulma in node modules

$base-phone-border: 40px

.section.gapless-bottom
  padding-bottom: 0

.device
  background-color: $slate
  border-radius: $radius
  padding: 1em
  .image
    background-color: $extraDarkSmoke

.scale-wrapper
  // background-color: $pink
  min-height: 1em
  box-sizing: content-box
  padding-bottom: 198%
  &.single
    // TODO single case?


.marvel-device
  box-sizing: content-box
  display: inline-block
  position: relative

  .screen
    width: 100%
    position: relative
    height: 100%
    z-index: 3
    background: $white-ter
    overflow: hidden
    display: block
    border-radius: 1px
    box-shadow: 0 0 0 3px $pitch

  .top-bar, .bottom-bar
    height: 3px
    background: $pitch
    width: 100%
    display: block

  .middle-bar
    width: 3px
    height: 4px
    top: 0px
    left: 90px
    background: $pitch
    position: absolute

.marvel-device.iphone-x
  width: 375px
  height: 812px
  // padding: 16px
  padding: 26px
  background: lighten($slate, 10%)
  box-shadow: inset 0 0 11px 0 $pitch
  // border-radius: $base-phone-border + 14px
  border-radius: $base-phone-border + 26px
  transform-origin: top left
  position: absolute

  .overflow
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    // border-radius: $base-phone-border + 14px
    border-radius: $base-phone-border + 26px
    overflow: hidden

  .shadow
    border-radius: 100%
    width: 90px
    height: 90px
    position: absolute
    background: radial-gradient(ellipse at center, rgba($pitch, 0.42) 0%, rgba($white-ter, 0) 60%)

  .shadow--tl
    top: -20px
    left: -20px

  .shadow--tr
    top: -20px
    right: -20px

  .shadow--bl
    bottom: -20px
    left: -20px

  .shadow--br
    bottom: -20px
    right: -20px

  &:before
    width: calc(100% - 10px)
    height: calc(100% - 10px)
    position: absolute
    top: 5px
    content: ""
    left: 5px
    // border-radius: $base-phone-border + 9px
    border-radius: $base-phone-border + 21px
    // background: darken($black, 12%)
    background: $pitch
    z-index: 1

  &:after
    @include pseudo-full
    // border-radius: $base-phone-border + 14px
    border-radius: $base-phone-border + 26px
    box-shadow: $device-shadow

  .inner-shadow
    width: calc(100% - 12px)
    height: calc(100% - 12px)
    position: absolute
    top: 6px
    overflow: hidden
    left: 6px
    // border-radius: $base-phone-border + 8px
    // border-radius: $base-phone-border + 16px
    border-radius: $base-phone-border + 20px
    box-shadow: inset 2px 2px 15px 0 rgba($white-ter, 0.42)
    z-index: 1

    &:before
      box-shadow: inset 0 0 20px 0 rgba($white-ter, 0.2)
      width: 100%
      height: 116%
      position: absolute
      top: -8%
      content: ""
      left: 0
      border-radius: 200px / 112px
      z-index: 2

  .screen
    border-radius: $base-phone-border
    box-shadow: none

  .top-bar, .bottom-bar
    width: 100%
    position: absolute
    height: 8px
    background: rgba($pitch, 0.2)
    left: 0

  .top-bar
    top: 80px

  .bottom-bar
    bottom: 80px

  .volume, .volume:before, .volume:after, .sleep
    width: 3px
    background: $slate
    position: absolute

  .volume
    left: -3px
    top: 116px
    height: 32px

    &:before
      height: 62px
      top: 62px
      content: ""
      left: 0

    &:after
      height: 62px
      top: 140px
      content: ""
      left: 0

  .sleep
    height: 96px
    top: 200px
    right: -3px

</style>
