<template>
  <transition :name="transition">
    <div v-show="show" class="snackbar background-noise" :class="snackbarMessage.position">
      <div class="content">
        <strong>{{ snackbarMessage.text }}</strong>
      </div>
    </div>
  </transition>
</template>

<script>

export default {

  data () {
    return {
      show: false,
      transition: 'slideY',
      timeout: null
    }
  },

  computed: {
    snackbarMessage () {
      return this.$store.state.snackbar
    },
  },

  watch: {
    snackbarMessage (latest, last) {
      // console.log(latest);
      if (latest.position === 'bottom') {
        this.transition = 'slideYDown'
      } else {
        this.transition = 'slideY'
      }
      this.show = true
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.show = false
      }, 2000)
    }
  }

}

</script>

<style lang="sass">

  @import '../../styles/variables.sass'
  @import '../../styles/mixins.sass'

  .snackbar
    position: fixed
    width: 100%
    display: flex
    height: 6em
    top: 0
    z-index: 3
    color: $white
    align-items: center
    justify-content: center
    background-color: $slate
    box-shadow: 0 1.5em 4em 0 rgba($pitch, 0.56)
    &.bottom
      top: auto
      bottom: 0
      box-shadow: 0 -1.5em 4em 0 rgba($pitch, 0.56)
      height: 16em
      @media screen and (min-width: $tablet)
        height: 12em

</style>
