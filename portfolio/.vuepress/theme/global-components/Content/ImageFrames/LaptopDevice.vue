<template>
  <section class="section is-medium">
    <div class="container is-fullhd">

      <figure class="image laptop" ref="wrapper">
        <div
          class="marvel-device macbook"
          :style="{ transform: contentScale, WebkitTransform: contentScale }"
          v-if="displayDevice"
          >
            <div class="top-bar"></div>
            <div class="camera"></div>
            <div class="screen">
              <img :src="url" :alt="alt" loading="lazy" class="lazyload" width="960" height="600">
            </div>
            <div class="bottom-bar"></div>
        </div>
      </figure>

    </div>
  </section>
</template>

<script>

export default {

  // TODO check out how that UX portfolio website enables interactive devices, css etc.

  props: {
    url: String,
    alt: String,
    type: String
  },

  data () {
    return {
      contentScale: null,
      displayDevice: false
    }
  },

  mounted() {
    this.$forceNextTick(() => {
      const scale = this.$refs['wrapper'].offsetWidth / 1048

      // this.contentScale = 'translate(-50%, -50%) ' + 'scale(' + scale + ')'
      this.contentScale = 'scale(' + scale + ')'
      console.log();
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

$bar-height: 14px
$bar-radius: 2px
$laptop-height: 540px

.laptop
  display: flex
  background-color: $pink
  min-height: 1em
  box-sizing: content-box
  // padding-bottom: 64%
  position: relative
  // margin-left: 70px
  // margin-right: 70px

.marvel-device.macbook
  width: 960px
  height: $laptop-height
  padding: 44px 44px 64px
  margin: 0 auto
  background: $white-ter
  border-radius: 34px

  &:before
    width: calc(100% - 8px)
    height: calc(100% - 8px)
    position: absolute
    content: ""
    display: block
    top: 4px
    left: 4px
    border-radius: 30px
    background: darken($black, 5%)

  .top-bar
    width: calc(100% + 2 * 70px)
    // height: 40px
    height: 28px
    position: absolute
    content: ""
    display: block
    top: $laptop-height + 80px
    left: -70px
    border-bottom-left-radius: 90px 18px
    border-bottom-right-radius: 90px 18px
    border-top-right-radius: $bar-radius
    border-top-left-radius: $bar-radius
    background: $silver
    box-shadow: inset 0px -4px 13px 3px rgba($pitch, 0.6)

    &:before
      width: 100%
      // height: 24px
      height: $bar-height
      content: ""
      display: block
      top: 0
      left: 0
      background: $smoke
      position: relative
      border-radius: $bar-radius

    &:after
      @include pseudo-full
      border-bottom-left-radius: 90px 18px
      border-bottom-right-radius: 90px 18px
      border-top-right-radius: $bar-radius
      border-top-left-radius: $bar-radius
      box-shadow: $device-shadow

  .bottom-bar
    background: transparent
    width: calc(100% + 2 * 70px)
    // height: 26px
    height: $bar-height
    position: absolute
    content: ""
    display: block
    top: $laptop-height + 80px
    left: -70px
    border-radius: $bar-radius

    &:before,
    &:after
      height: 100%
      width: 80px
      content: ""
      display: block
      top: 0
      position: absolute
      border-radius: $bar-radius

    &:before
      left: 0
      background: #f0f0f0
      background: linear-gradient(to right, $silver 0%, $darkSmoke 5%, $snow 10%, $extraDarkSmoke 42%, $smoke 80%, $smoke 100%, $smoke 100%)

    &:after
      right: 0
      background: #f0f0f0
      background: linear-gradient(to right, $smoke 0%, $smoke 0%, $darkSmoke 20%, lighten($silver, 12%) 59%, $extraDarkSmoke 86%, $silver 95%, lighten($slate, 8%) 100%)

  .camera
    background: $steel
    width: 10px
    height: 10px
    position: absolute
    top: 20px
    left: 50%
    margin-left: -5px
    border-radius: 100%





</style>
