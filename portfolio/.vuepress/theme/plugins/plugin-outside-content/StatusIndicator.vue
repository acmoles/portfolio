<template>
  <div class="status-indicator">
    {{ pageLoadingStatus }}
  </div>
</template>

<script>

export default {

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
  }

}

</script>

<style lang="stylus">
  .status-indicator {
    display: none;
    position: fixed;
    z-index: 1000;
    right: 0;
    top: 0;
    background: grey;
    color: white;
    padding: 1em;
  }
</style>
