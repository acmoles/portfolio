<template>
  <WorkWrapper
    :project="'2016'"
    :icon="'dots'"
    :color="'grey'"
  >
    <template slot="titles">
      <div class="content">
        <h1 class="project-title">Looking back to before 2016</h1>
        <!-- <p class="client grey">Various</p> -->
      </div>
    </template>

    <template slot="content">
      <div class="page-glass-section first-section">

        <div class="content">

          <h1>Makies</h1>
          <h3 class="subtitle">Makielab</h3>
          <p>
            Makielab is a mobile games and e-commerce startup, founded in London and acquired by Disney in early 2016, relocating to LA. We created Makies, an award-winning customisable digital avatar, which could be ordered as a bespoke 3D printed toy.
          </p>
          <p>
            I was part of a multi-disciplinary team, including 3D artists and developers, working on the web and app based customisation experience as well as the physical product.
          </p>

          <div class="columns">
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/2016/Makies-present.jpg">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-1by1">
                <iframe class="lazyload" data-src="http://www.youtube.com/embed/daBtHme2hP8" width="640" height="640" frameborder="0"></iframe>
              </figure>
            </div>
          </div>

          <h1>Lego Dimensions</h1>
          <h3 class="subtitle">Lego / Design by Touch</h3>
          <p>
            I joined the Lego Dimensions Team as an outside consultant, working across disciplines at all stages of the design and development process; from concept and experience design to hardware and industrial design. All work-in-progress material is confidential to Lego.
          </p>

          <div class="columns">
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/2016/Lego-dimensions.jpg">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="https://bulma.io/images/placeholders/480x480.png">
                <iframe class="lazyload" data-src="http://www.youtube.com/embed/aNnKBN5IqIU" width="640" height="640" frameborder="0"></iframe>
              </figure>
              <figcaption>
                Figure 1: Some beautiful placeholders
              </figcaption>
            </div>
          </div>

          <h1>Nova</h1>
          <h3 class="subtitle">Stompy Robot</h3>
          <p>
            Stompy Robot is an independent video games studio based in Edinburgh, of which I was a founding member and continue to be an occasional contributor. Our first game was Nova (2014), a squad-based action RPG for mobile, which specifically aims to leverage the interaction opportunities offered by touch screens.
            <a href="http://stompyrobot.co.uk" target="_blank">Go to stompyrobot.co.uk <i class="icon-right-open-big full-opacity footer-icon"></i></a>
          </p>

          <div class="columns">
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/2016/Nova-present.jpg">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-1by1">
                <iframe class="lazyload" data-src="http://www.youtube.com/embed/xZELuhMO9es" width="640" height="640" frameborder="0"></iframe>
              </figure>
            </div>
          </div>


          <h1>Nita</h1>
          <h3 class="subtitle">Art Lebedev Studio</h3>
          <p>
            Art Lebedev Studio is the largest and most well known creative agency in Russia with over 200 designers. I worked with the Product Design Team on consulting projects for Russian and international clients. One such client was Nita, a Russian aviation company, which produces Air Traffic Control consoles (ATC). More details of the design process can be found on the Art Lebedev website.
            <a href="https://www.artlebedev.ru/nita/process/" target="_blank">Go to artlebedev.com/nita/process <i class="icon-right-open-big full-opacity footer-icon"></i></a>
          </p>

          <div class="columns">
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/2016/Nita-present.jpg">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/2016/Nita-present-more.jpg">
              </figure>
            </div>
          </div>


          <h1>Fly</h1>
          <h3 class="subtitle">Random International</h3>
          <p>
            I was part of the team that developed the interactive digital/physical installation 'Fly' for exhibit at the 2011 Moscow Biennial of Art and Design. I helped define the creative concept and independently carried out the design detailing process; CAD, prototyping and sourcing.
          </p>

          <div class="columns">
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/2016/Fly-process.jpg">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-1by1">
                <iframe class="lazyload" data-src="https://player.vimeo.com/video/30915879" width="640" height="640" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </figure>
            </div>
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
  name: 'Pre2016',
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
