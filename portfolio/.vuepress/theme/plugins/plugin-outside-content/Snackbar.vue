<template>
  <transition :name="transition">
    <div v-show="show" class="snackbar" :class="snackbarMessage.position">
      <div class="content box">
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

  @import '@theme/styles/variables.sass'
  @import '@theme/styles/mixins.sass'

  .snackbar
    position: fixed
    top: 0
    width: 100vw
    height: 100vh
    display: flex
    z-index: 3
    align-items: center
    justify-content: center
    .content
      background-color: $slate
    &.bottom
      top: auto
      bottom: 0

</style>
