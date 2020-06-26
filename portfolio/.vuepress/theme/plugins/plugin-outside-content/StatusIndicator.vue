<template>
  <div class="status-indicator">
    {{ pageLoadingStatus }} <br>
    <hr>
    {{ lastProject }} <br>
    <hr>
    Use last project? {{ useLastProject }} <br>
  </div>
</template>

<script>

export default {

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },

    projectPosition () {
      return this.$store.state.projectPosition
    },

    lastProject () {
      return this.$store.state.lastProject
    },

    useLastProject () {
      return this.$store.state.useLastProject
    },
  }

}

</script>

<style lang="stylus">
  .status-indicator {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    bottom: 0;
    background: grey;
    color: white;
    padding: 1em;
  }
</style>
