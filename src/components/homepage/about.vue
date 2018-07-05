<template>
  <div class="container glass">

    <div class="glass-header"></div>

    <div class="glass-body">

      <div class="glass-ghost-body">
        <div class="glass-body-titles columns is-mobile is-gapless">
          <div class="profile ghost-profile column is-narrow">
            <figure class="image">
            </figure>
          </div>
        </div>
      </div>

      <div class="glass-body">

        <div class="glass-body-titles columns is-mobile is-gapless">
          <div class="profile column is-narrow">
            <figure class="image">
              <img src="/img/homepage/photo.jpg">
            </figure>
          </div>
          <div class="glass-body-details column">
            <h1 class="title">
              Anthony Moles Lyall
            </h1>
            <h2 class="subtitle">
              Product Designer
            </h2>
            <p>
              <span class="icon">
                <i class="icon-location"></i>
              </span>
              Berlin, Germany
            </p>
          </div>
        </div>

        <div class="glass-body-content">
          <div class="glass-body-actions columns is-mobile is-variable is-1">
            <div class="column">
              <a class="button is-primary is-rounded">Work</a>
            </div>
            <div class="column">
              <a class="button is-success is-rounded is-outlined">Message</a>
            </div>
            <div class="column is-narrow">
              <a class="button is-rounded options">
                <span class="icon is-small">
                  <i class="icon-dot-3 full-opacity"></i>
                </span>
              </a>
            </div>
          </div>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut libero vitae dui vehicula aliquet.
              Nulla euismod tincidunt eros, sit amet cursus odio volutpat id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
              Nam eget tortor nisl. Ut ut libero vitae dui vehicula aliquet.
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'About',
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
    max-width: 1024px
    border-radius: $radius
    overflow: hidden
    background: rgba(255, 255, 255, 0.5)
    display: flex
    flex-direction: column

  // Translucent header

  .glass-header
    height: 80px
    flex-grow: 0
    @media screen and (min-width: $desktop)
      height: 238px

  // Body content

  .glass-body
    position: relative
    display: flex
    flex-direction: column
    @media screen and (min-width: $desktop)
      flex-direction: row

  // Profile pic and details

  .glass-ghost-body
    background: $white
    opacity: 0.75
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    flex-grow: 1

  .ghost-profile
    .image
      border-color: $white
      background: $white

  .columns.glass-body-titles
    padding: 0 1em !important
    @media screen and (min-width: $desktop)
      flex-direction: column

    .profile
      position: relative
      top: -64px
      @media screen and (min-width: $desktop)
        top: -128px
      .image
        height: 128px
        width: 128px
        border: solid 5px transparent
        border-radius: $radius-rounded
        overflow: hidden
        @media screen and (min-width: $desktop)
          border-width: 10px
          height: 256px
          width: 256px

    .glass-body-details
      position: relative
      margin-left: 1em
      @media screen and (min-width: $desktop)
        margin-left: 0
        top: -128px
        text-align: center

  // Content

  .glass-body-content
    padding: 0.75rem

  .glass-body-actions
    @media screen and (min-width: $desktop)
      max-width: 400px
    .button
      width: 100%
    .options
      color: $extraDarkSmoke
      border-color: $darkSmoke
      &:active, &:hover
        border-color: $extraDarkSmoke
      padding-left: 0.75em
      padding-right: 0.75em
      .icon
        position: relative
        top: 0.1em
</style>
