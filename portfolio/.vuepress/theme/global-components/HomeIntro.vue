<template>
  <div class="container is-fluid">
    <div class="notification">
      This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
      viewport size.
    </div>
  </div>
</template>

<script>

// <h1 v-if="data.heroText !== null" id="main-title" aria-labelledby="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

export default {


  data () {
    return {
      title: 'Image'
    }
  },

  computed: {
  },

  mounted() {
  },

  methods: {
  }
}

</script>

<style scoped lang="sass">
  .container
    padding-top: 12em
</style>
