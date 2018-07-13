<template>
  <div class="page">
    <section class="hero is-medium page-header">
      <div class="gradient-header"></div>
      <div class="color-header"></div>
      <div class="hero-body">
        <div class="container">
          <span class="icon is-large">
            <i class="icon-dot-3 full-opacity"></i>
          </span>
          <h1 class="title">
            {{ title }}
          </h1>
          <h2 class="subtitle">
            {{ subtitle }}
          </h2>
        </div>
      </div>
    </section>
    <section class="container page-glass">
      <slot>
        This will only be displayed if there is no content
        to be distributed.
      </slot>
    </section>
  </div>
</template>

<script>

export default {
  name: 'WorkWrapper',
  props: {
    int: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: 'Main Title'
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    }
  },
  data () {
    return {
      hello: 'hello world'
    }
  },
  methods: {
    onClick (event) {
      this.$emit('next', true);
    },
  }
}
</script>

<style scoped lang="sass">
  @import '../sass/variables'

  .page-glass
    position: relative
    top: -3em
    @media screen and (min-width: $tablet)
      top: -6em

  .page-glass-divider, .page-glass-section
    display: flex
    flex-direction: column
    min-height: 3em
    margin-bottom: 0
    margin: 0 0.5em
    padding: 0.5em
    @media screen and (min-width: $tablet)
      margin: 0 1em
      padding: 1em

  .page-glass-section
    background: rgba(255, 255, 255, 1)
    &:first-child
      border-radius: $radius $radius 0 0
    &:last-child
      border-radius: 0 0 $radius $radius

  .page-glass-divider
    background: rgba(255, 255, 255, 0.5)


</style>
