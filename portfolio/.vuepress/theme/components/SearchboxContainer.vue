<template>
    <div
      class="search-box-container"
    >
      <SearchBox class="searchbox"/>
    </div>
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

  mounted () {

  },

  methods: {
    dismiss () {
    }
  },

}


</script>

<style lang='sass' scoped>
@import "../styles/variables.sass"
@import "../styles/mixins.sass"

.search-box-container
  @include cover-screen
  display: flex
  align-items: center
  justify-content: center
  pointer-events: none

.searchbox
  pointer-events: all

</style>
