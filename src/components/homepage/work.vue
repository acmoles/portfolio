<template>
  <div class="container">

    <div class="columns is-multiline">
      <div class="column is-one-third">
        <div class="glass">
          <div class="glass-header">
            <div class="glass-color"></div>
            <div class="glass-gradient"></div>
            <span class="icon is-large">
              <i class="icon-dot-3 full-opacity"></i>
            </span>
          </div>
          <div class="glass-body">
            <p>is-one-third</p>
          </div>
        </div>
      </div>
      <div class="column is-one-third">
        <div class="glass">
          <p>is-one-third</p>
        </div>
      </div>
      <div class="column is-one-third">
        <div class="glass">
          <p>is-one-third</p>
        </div>
      </div>
      <div class="column is-one-third">
        <div class="glass">
          <p>is-one-third</p>
        </div>
      </div>
      <div class="column is-one-third">
        <div class="glass">
          <p>is-one-third</p>
        </div>
      </div>
      <div class="column is-one-third">
        <div class="glass">
          <p>is-one-third</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Work',
  props: {
    prop: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../../sass/variables'

  .glass
    overflow: hidden
    display: flex
    flex-direction: column

  .glass-header
    height: 80px
    @media screen and (min-width: $desktop)
      height: 120px
    position: relative
    color: $white
    display: flex
    justify-content: center
    align-items: center

  .glass-color, .glass-gradient
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0

  .glass-color
    mix-blend-mode: color
    background: $blue

  .glass-gradient
    opacity: 0.75
    background: $blue

  .glass-body
    background: rgba(255, 255, 255, 0.5)


</style>
