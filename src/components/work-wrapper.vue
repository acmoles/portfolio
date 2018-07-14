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
            v-else
            class="icon is-large">
            <img :src="icon" alt="project icon">
          </span>
        </div>
      </div>
    </section>
    <section class="container page-glass">
      <div class="overlap-filler"></div>
      <slot>
        This will only be displayed if there is no content
        to be distributed.
      </slot>
    </section>
    <section class="hero is-medium page-footer">
      <div class="color-header" :class="color"></div>
      <div class="flat-header" :class="color"></div>
      <div class="hero-body">
        <div class="container">
          <p>Test</p>
          <figure class="image is-16by9"><img data-src="https://bulma.io/images/placeholders/640x360.png"></figure>
        </div>
      </div>

    </section>
  </div>
</template>

<script>

import * as smoothScroll from 'smoothscroll'

export default {
  name: 'WorkWrapper',
  props: {
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
      hello: 'hello world'
    }
  },
  mounted () {
    this.$events.$emit('navigate-project', true);
    setTimeout(() => {
      let scrollContext = document.getElementById('app');
      smoothScroll(0, 0, undefined, scrollContext);
    }, 200);
  },
  methods: {
    onClick (event) {
      this.$events.$emit('next', true);
    },
  }
}
</script>

<style scoped lang="sass">
  @import '../sass/variables'

  .project-logo
    text-align: center
    position: relative
    margin: 1.5em 0
    @media screen and (min-width: $tablet)
      margin: 3em 0
      .icon
        transform: scale(1.5)

  .page-glass
    position: relative
    overflow: hidden
    top: -1.5em
    animation: fade 800ms both
    animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1)
    animation-delay: 800ms
    @media screen and (min-width: $tablet)
      top: -3em

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
    background: rgba(255, 255, 255, 0.9)
    @media screen and (min-width: $tablet)
      padding: 1em
      padding-bottom: 2em
    &:nth-child(2)
      border-radius: $radius-large $radius-large 0 0
    &:last-child
      border-radius: 0 0 $radius-large $radius-large

  .overlap-filler
    border-radius: $radius-large $radius-large 0 0
    position: absolute
    top: 0
    left: 0
    right: 0
    height: 4em
    @media screen and (min-width: $tablet)
        height: 8em
    z-index: -1
    background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))

  .page-glass-divider
    background: rgba(255, 255, 255, 0.5)
    padding: 1.5em 0.75em
    @media screen and (min-width: $tablet)
      padding: 2em 1em
    h2
      font-size: 1.75em
      color: $steel
      font-weight: 600

</style>
