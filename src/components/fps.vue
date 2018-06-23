<template>
  <div class="fps">
    {{ fps }}
  </div>
</template>

<script>

export default {
  name: 'Fps',
  props: {
    fps: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped lang="sass">

</style>
