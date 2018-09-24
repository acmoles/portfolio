<template>
  <WorkWrapper
    :project="'wesen'"
    :icon="'/img/homepage/project-icons/wesen.svg'"
    :color="'red'"
  >
    <template slot="titles">
      <div class="content">
        <h1 class="project-title">Building a jewellery brand with user generated products</h1>
        <p class="client red">Wesen</p>
      </div>
    </template>

    <template slot="content">
      <div class="page-glass-section first-section">
        <div class="content">
          <p><strong>Case study in progress</strong></p>
          <p>Check back over the coming weeks as I roll out more case studies</p>
        </div>
      </div>

      <div class="page-glass-section">

        <div class="columns">
          <div class="column">
            <figure class="image is-1by1">
              <img class="lazyload" data-src="https://bulma.io/images/placeholders/480x480.png">
            </figure>
            <figcaption>
              Figure 1: Some beautiful placeholders
            </figcaption>
          </div>
          <div class="column">
            <figure class="image is-1by1">
              <img class="lazyload" data-src="https://bulma.io/images/placeholders/480x480.png">
            </figure>
            <figcaption>
              Figure 2: Some beautiful placeholders
            </figcaption>
          </div>
        </div>

        <div class="content">
          <h3>Placeholder content</h3>
          <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
          <ol>
            <li>Donec blandit a lorem id convallis.</li>
            <li>Cras gravida arcu at diam gravida gravida.</li>
          </ol>
        </div>

      </div>
    </template>

    <template slot="footer-content">
      <div class="container page-footer-container">
        <div class="columns">
          <div class="column content link-container">
            <h3>Wesen</h3>
            <p>The MVP site is in Beta</p>
            <div class="links-container">
              <a href="http://wesen.studio" class="button is-primary is-rounded is-inverted is-outlined">
                View site
                <i class="icon-right-open-big full-opacity footer-icon"></i>
              </a>
            </div>
          </div>
          <div class="column is-three-quarters">
            <figure class="image is-16by9"><img class="lazyload" src="/img/project-presentations/combined_wesen.png"></figure>
          </div>
        </div>
      </div>
    </template>
  </WorkWrapper>
</template>

<script>

import WorkWrapper from '@/components/work-wrapper.vue'

export default {
  name: 'Wesen',
  components: {
    WorkWrapper
  }
}
</script>

<style scoped lang="sass">

  @import '../sass/variables'

  .button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined:focus
    color: $red


</style>
