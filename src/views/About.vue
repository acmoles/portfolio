<template>
  <WorkWrapper
    :project="'About'"
    :icon="'dots'"
    :color="'grey'"
  >
    <template slot="titles">
      <div class="content">
        <h1 class="project-title">Hi, I'm Ant</h1>
        <p class="client grey">Product Designer</p>
      </div>
    </template>

    <template slot="content">
      <div class="page-glass-section first-section">

        <div class="content">

          <h3>
            I help companies build useful and pleasing products
          </h3>
          <p>
            Over the past three years I’ve been working with <a href="https://www.toucanbox.com" target="_blank">toucanBox</a>, a
            subscription / <span>e-commerce</span> start-up based in London.
            I’ve just arrived in Berlin.
          </p>
          <p>
            This portfolio consists of five case studies, three from toucanBox
            and two side projects. It also includes an overview of select work
            dating from before 2016.
          </p>
          <h4>Product Design</h4>
          <p>
            I use the design process to bring clarity to complex problems. I sketch and
            build prototypes to test hypotheses. I gather feedback and iterate.
          </p>
          <p>
            My training in human-centred product design, originally focussing on physical objects, helps
            me uncover users' fundamental needs and make systematic decisions.
          </p>
          <p>
            I work alongside developers, speaking their language, to ensure products ship with
            the highest possible level of polish.
          </p>

        </div>

      </div>

      <div class="page-glass-divider">
        <h1>Product Design</h1>
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
              Figure 1: Some beautiful placeholders
            </figcaption>
          </div>
        </div>

      </div>
    </template>

    <template slot="footer-content">
      <div class="container page-footer-container">
      </div>
    </template>
  </WorkWrapper>
</template>

<script>

import WorkWrapper from '@/components/work-wrapper.vue'

export default {
  name: 'About',
  components: {
    WorkWrapper
  }
}
</script>

<style scoped lang="sass">

  @import '../sass/variables'

  .button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined:focus
    color: $slate


</style>
