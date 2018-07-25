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
      <slot name="content">
        This will only be displayed if there is no content
        to be distributed.
      </slot>
      <div class="overlap-filler is-bottom"></div>
    </section>

    <section class="hero is-medium page-footer">
      <div class="color-header" :class="color"></div>
      <div class="flat-header" :class="color"></div>
      <div class="hero-body">
        <slot name="footer-content">
          This will only be displayed if there is no content
          to be distributed.
        </slot>
      </div>
      <FooterNav
        :back="true"
        :color="'is-light'"
      />
    </section>
  </div>
</template>

<script>

import FooterNav from '@/components/footer-nav.vue'

export default {
  name: 'WorkWrapper',
  components: {
    FooterNav,
  },
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
  }
}
</script>

<style scoped lang="sass">
  @import '../sass/variables'

  .project-logo
    text-align: center
    position: relative
    margin: 1.5em 0 3em 0
    @media screen and (min-width: $tablet)
      margin: 3em 0
      .icon
        transform: scale(1.5)

  .page-glass
    position: relative
    top: -3em
    animation: fadeUp 1200ms both
    animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1)
    animation-delay: 800ms
    z-index: 1

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
      padding: 2em 1em
    h2
      font-size: 1.75em
      color: $steel
      font-weight: 600

  .page-footer
    margin-top: -6em

  .page-footer-container
    color: $white
    position: relative
    h3
      color: $white
      margin-bottom: 0.25em
    p
      margin-bottom: 3em
    .button
      min-width: 180px
      position: relative
      font-weight: 600
      span
        margin-top: -0.1em
      i
        position: absolute
        right: 10px
        font-size: 0.6em
    @media screen and (min-width: $tablet)
      padding: 1.5em
      top: -3em
      margin-bottom: -8em

</style>
