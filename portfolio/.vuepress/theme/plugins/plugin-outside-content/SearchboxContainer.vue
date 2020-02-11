<template>
  <transition name="fade">
    <div
      class="modal-background search-box-container"
      v-if="isSearchboxOpen"
    >
      <SearchBox/>
    </div>

  </transition>
</template>

<script>
import SearchBox from '@SearchBox'

export default {
  components: { SearchBox },

  data () {
    return {
      progress: 0,
    }
  },

  computed: {
    isSearchboxOpen () {
      return this.$store.state.isSearchboxOpen
    }
  },

  mounted () {

  },

  methods: {
    dismiss () {
    }
  },

}


</script>

<style lang='sass' scoped>
@import "../../styles/variables.sass"
@import "../../styles/mixins.sass"

.search-box-container
  @include cover-screen
  position: fixed


</style>
