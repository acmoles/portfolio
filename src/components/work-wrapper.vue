<template>
  <div class="page">

    <section class="hero is-medium page-header">
      <div class="color-header" :class="color"></div>
      <div class="flat-header" :class="color"></div>
      <div class="hero-body">
        <div class="container titles" :class="color">
          <slot name="titles">
            This will only be displayed if there is no content
            to be distributed.
          </slot>
        </div>
      </div>
    </section>

    <section class="container page-glass" :class="{ 'is-visible': contentVisible }">
      <slot name="content">
        This will only be displayed if there is no content
        to be distributed.
      </slot>
    </section>

    <section class="hero is-large page-footer" :class="{ 'is-visible': contentVisible }">
      <div class="color-header" :class="color"></div>
      <div class="flat-header" :class="color"></div>
      <div class="hero-body">
        <slot name="footer-content">
          This will only be displayed if there is no content
          to be distributed.
        </slot>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'WorkWrapper',
  props: {
    project: {
      type: String,
      default: 'none'
    },
    icon: {
      type: String,
      default: 'dots'
    },
    color: {
      type: String,
      default: 'blue'
    }
  },
  data () {
    return {
      contentVisible: false, //TODO put back to false
      headerVisible: false
    }
  },
  computed: {
    footerNavColor () {
      return (this.color === 'grey' ? 'is-dark' : 'is-light')
    }
  },
  mounted () {
    this.$events.$emit('scroll-trigger', {
      location: 'top',
      smooth: false
    });
    this.$events.$emit('navigate-project', this.project);

    setTimeout(() => {
      this.fadeInContent();
    }, 900);
    setTimeout(() => {
      this.$events.$emit('remove-all-background');
    }, 2000);
  },
  methods: {
    fadeInContent () {
      this.contentVisible = true;
    },
    fadeInHeader () {
      this.headerVisible = true;
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../sass/variables'

  // Header

  // .page-header
  //   @media screen and (min-width: $desktop)
  //     height: 33.333vh
  //     min-height: 33.333vh
  //     .hero-body
  //       padding: 0
  //       display: flex
  //       align-items: center

  .titles
    padding: 0 0.75em
    @media screen and (max-width: $desktop)
      padding: 4em 1.5em
    .client
      font-weight: 600
      font-size: 1.5em
    color: $white
    &.grey
      color: $slate
      h1
        color: $slate
    h1
      color: $white
      font-size: 2.5em
      @media screen and (max-width: $desktop)
        font-size: 2.25em
      margin-bottom: 0.1em
    @media screen and (min-width: $tablet)
      padding: 0 1.5em

  // Page

  .page-glass
    position: relative
    top: -2em
    background: $white
    border-radius: $radius-large
    z-index: 1
    opacity: 0
    transform: translateY(2em)
    transition: opacity 0.4s, transform 0.8s 0.4s ease
    margin: 0 0.75em
    @media screen and (min-width: $desktop)
      margin: 0 auto
    &.is-visible
      transform: translateY(0)
      opacity: 1

  .page-glass-divider, .page-glass-section
    display: flex
    flex-direction: column
    min-height: 3em
    margin-bottom: 0

  .page-glass-section
    padding: 0.75em
    padding-bottom: 1.5em
    @media screen and (min-width: $tablet)
      padding: 1.5em
      padding-bottom: 3em
    &.first-section
      border-radius: $radius-large $radius-large 0 0
    &.last-section
      border-radius: 0 0 $radius-large $radius-large

  // .overlap-filler
    // border-radius: $radius-large $radius-large 0 0
    // position: absolute
    // top: 0
    // left: 0
    // right: 0
    // height: 8em
    // z-index: -1
    // background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))
    // &.is-bottom
    //   background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))
    //   top: auto
    //   bottom: 0
    //   border-radius: 0 0 $radius-large $radius-large

  .page-glass-divider
    padding: 1.5em 0.75em
    border-top: 1px solid $snow
    @media screen and (min-width: $tablet)
      padding: 2em 1.5em
    h1
      color: $steel
      font-weight: 600

  // Footer

  .page-footer
    margin-top: -4em
    opacity: 0
    transition: opacity 0.4s ease
    &.is-visible
      opacity: 1
    // @media screen and (min-width: $desktop)
    //   height: 66.666vh
    //   min-height: 66.666vh
    //   .hero-body
    //     padding: 0
    //     display: flex
    //     align-items: center

  .page-footer-container
    color: $white
    position: relative
    padding: 5em 0.75em
    @media screen and (min-width: $tablet)
      padding: 1.5em
      top: -4em
      margin-bottom: -10em
    .link-container
      text-align: center
      @media screen and (min-width: $tablet)
        text-align: left
    h3
      color: $white
      margin-bottom: 0.25em
    p
      margin-bottom: 2em
    .button
      position: relative
      font-weight: 600
      span
        margin-top: -0.1em
      i
        &::before
          width: auto
          margin: 0
          margin-left: 0.5em
          font-size: 100%
          font-weight: 1000
    .links-container
      text-align: center
      max-width: 16em
      margin: 0 auto
      a
        width: 100%
      .other-link
        color: $white
        font-size: 0.8em
        font-weight: 600
        padding-left: 1em
        padding-right: 1em
        padding-bottom: calc(0.375em - 2px)
        padding-top: calc(0.375em - 2px)
        margin-top: 0.5em
        display: inline-block
        text-align: center
        &:hover, &:focus, &:active
          color: $white
          opacity: 0.8

    .column.is-three-quarters
      @media screen and (min-width: $desktop)
        padding: 1em
      @media screen and (min-width: $fullhd)
        padding: 3em
</style>
