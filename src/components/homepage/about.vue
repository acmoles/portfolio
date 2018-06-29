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
              Full Height title About
            </h1>
            <h2 class="subtitle">
              Full Height subtitle About
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
                  <i class="icon-dot-3"></i>
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

</style>
