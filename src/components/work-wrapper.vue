<template>
  <div class="page">

    <section class="hero is-medium page-header">
      <div class="color-header" :class="color"></div>
      <div class="flat-header" :class="color"></div>
      <div class="hero-body">
        <div class="project-logo">
          <span
            v-if="icon === 'dots'"
            class="icon is-large">
            <i class="icon-dot-3 full-opacity"></i>
          </span>
          <span
            v-else-if="icon === '/img/homepage/project-icons/toucan.svg'"
            class="icon is-large is-larger">
            <img :src="icon" alt="project icon">
          </span>
          <span
            v-else
            class="icon is-large">
            <img :src="icon" alt="project icon">
          </span>
        </div>
      </div>
    </section>

    <section class="container page-glass" :class="{ 'is-visible': contentVisible }">
      <div class="overlap-filler"></div>
      <slot name="content">
        This will only be displayed if there is no content
        to be distributed.
      </slot>
      <div class="overlap-filler is-bottom"></div>
    </section>

    <section class="hero is-medium page-footer" :class="{ 'is-visible': contentVisible }">
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

import * as smoothScroll from 'smoothscroll'

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
      contentVisible: false
    }
  },
  computed: {
    footerNavColor () {
      return (this.color === 'grey' ? 'is-dark' : 'is-light')
    }
  },
  mounted () {
    this.$events.$emit('navigate-project', this.project);

    let scrollContext = document.getElementById('app');

    smoothScroll(0, 750, this.fadeInContent, scrollContext);
  },
  methods: {
    fadeInContent () {
      this.contentVisible = true;
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../sass/variables'

  .project-logo
    text-align: center
    position: relative
    padding: 1.5em 0 3em 0
    .is-larger
      height: 4em
      width: 4em
    @media screen and (min-width: $tablet)
      padding: 0
      .is-large
        height: 5em
        width: 5em
      .is-larger
        height: 5em
        width: 8em
      .icon i
        font-size: 2em

  .page-glass
    position: relative
    top: -3em
    z-index: 1
    opacity: 0
    &.is-visible
      animation: fadeUp 1200ms both
      animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1)


  .page-glass-divider, .page-glass-section, .overlap-filler
    display: flex
    flex-direction: column
    min-height: 3em
    margin-bottom: 0
    margin: 0 0.75em
    @media screen and (min-width: $tablet)
      margin: 0 1em

  .page-glass-section
    padding: 0.75em
    padding-bottom: 1.5em
    background: rgba(255, 255, 255, 0.95)
    @media screen and (min-width: $tablet)
      padding: 1.5em
      padding-bottom: 3em
    &.first-section
      border-radius: $radius-large $radius-large 0 0
    &.last-section
      border-radius: 0 0 $radius-large $radius-large

  .overlap-filler
    border-radius: $radius-large $radius-large 0 0
    position: absolute
    top: 0
    left: 0
    right: 0
    height: 8em
    z-index: -1
    background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))
    &.is-bottom
      background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))
      top: auto
      bottom: 0
      border-radius: 0 0 $radius-large $radius-large


  .page-glass-divider
    background: rgba(255, 255, 255, 0.75)
    padding: 1.5em 0.75em
    @media screen and (min-width: $tablet)
      padding: 2em 1.5em
    h1
      font-size: 2em
      color: $steel
      font-weight: 600

  .page-footer
    margin-top: -6em
    opacity: 0
    transition: opacity 0.4s ease
    &.is-visible
      opacity: 1

  .page-footer-container
    color: $white
    position: relative
    padding: 3em 0
    @media screen and (min-width: $tablet)
      padding: 1.5em
      top: -2em
      margin-bottom: -8em
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
