<template>
  <div>
      <div class="item">
        1
      </div>
      <div class="item">
          2
      </div>
      <div class="item">
          3
      </div>
      <div class="item">
          4
      </div>
    </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

import VueLoop from 'vue-loop'

export default {
  name: 'home',
  components: {
    HelloWorld,
    VueLoop
  }
}
</script>

<style scoped lang="sass">
  item
    // background-color: $success
    // &:first-child
    //   background-color: $main
</style>
