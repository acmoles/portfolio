<template>
  <div class="page">
    <section class="hero is-medium page-header">
      <div class="gradient-header"></div>
      <div class="color-header"></div>
      <div class="hero-body">
        <div class="container">
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

</style>
