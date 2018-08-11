<template>
  <div class="glass">

    <div class="glass-header"></div>

    <div class="glass-body-container">

      <div class="glass-ghost-body">
        <div class="glass-body-titles">
          <div class="profile ghost-profile">
            <figure class="image">
            </figure>
          </div>
        </div>
      </div>

      <div class="glass-body">

        <div class="glass-body-titles">

          <div class="profile">
            <figure class="image">
              <img src="/img/homepage/photo.jpg">
            </figure>
          </div>

          <div class="glass-body-details">
            <h1 class="title">
              Anthony Moles
            </h1>
            <h2 class="subtitle">
              Product Designer
            </h2>
            <p class="location">
              <span class="icon is-small">
                <i class="icon-location"></i>
              </span>
              Berlin, Germany
            </p>
          </div>

        </div>

        <AboutActions />

        </div>

        <div class="copywrite">
          © Anthony Moles 2018
        </div>

      </div>

    </div>
</template>

<script>

import AboutActions from '@/components/about-actions.vue'

export default {
  name: 'About',
  components: {
    AboutActions
  }
}
</script>

<style scoped lang="sass">

  @import '../sass/variables'

  .glass
    width: 100%
    background: rgba($white, 0.35)
    @media screen and (min-width: $desktop)
      width: 13em
    display: flex
    flex-direction: column
    height: 100%

  // Translucent header

  .glass-header
    height: 7em
    flex-grow: 0

  // Body content

  .glass-body-container
    position: relative
    height: 100%

  .glass-ghost-body
    background: $white
    opacity: 0.5
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    flex-grow: 1

  // Profile pic and details

  .ghost-profile
    .image
      border-color: $white
      background: $white

  .profile
    position: relative
    margin-bottom: -1em
    text-align: center
    top: -4.5em
    flex: 1
    .image
      margin: 0 0.75em
      height: 9em
      width: 9em
      border: solid 0.25em transparent
      border-radius: $radius-rounded
      overflow: hidden
      display: inline-flex
      img
        mix-blend-mode: multiply
        border-radius: $radius-rounded

  .glass-body
    text-align: center

  .glass-body-titles
    position: relative

  .glass-body-details
    position: relative
    top: -3.5em
  .title
    font-size: 1.5em
    margin-top: 0.25em

  .subtitle
    font-size: 1em
    margin-bottom: 0.75em

  .location
    font-size: 0.75em
    color: $silver

  .copywrite
    display: none
    @media screen and (min-width: $desktop)
      display: block
    position: absolute
    width: 100%
    bottom: 0
    font-size: 0.5em
    opacity: 0.25
    padding: 0.5em 0.75em

</style>
