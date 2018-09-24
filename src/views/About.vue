<template>
  <WorkWrapper
    :project="'About'"
    :icon="'dots'"
    :color="'grey'"
  >
    <template slot="titles">
      <div class="content">
        <h1 class="project-title">Hello, I’m a Product Designer based in Berlin</h1>
        <!-- <p class="client grey">Anthony Moles</p> -->
      </div>
    </template>

    <template slot="content">
      <div class="page-glass-section first-section">

        <div class="content">

          <p>
            I help companies build useful and pleasing products. I use the design process to bring clarity to complex questions. I am determined to create products that promote positive relationships between people, technology and the environment.
          </p>
          <p>
            To find the right opportunities, I employ user research, market research and data analysis. I work alongside developers, speaking their language, to ensure products ship with the highest possible level of polish.
          </p>
          <p>
            I see the role of product design as bridging the gap between the business strategy, the technology powering it and the customers it serves. It’s a combination of agile methodologies, lean startup practice and human-centred design.
          </p>
          <p>
            When not designing you might find me tinkering with code (currently it’s generative 3D art and shaders), reading about psychology, drawing cartoons or running in my local park.
          </p>

          <h2>Skills</h2>

          <h3>Core</h3>
          <div class="columns">
            <div class="column">
              <div class="notification">
                Human-centred research and design (UI/UX)
              </div>
            </div>
            <div class="column">
              <div class="notification">
                Product strategy
              </div>
            </div>
            <div class="column">
              <div class="notification">
                Ideation and sketching
              </div>
            </div>
            <div class="column">
              <div class="notification">
                Interactive prototypes
              </div>
            </div>
            <div class="column">
              <div class="notification">
                Visual design
              </div>
            </div>
          </div>

          <h3>Additional</h3>
          <div class="columns">
            <div class="column">
              <div class="notification">
                Product management
              </div>
            </div>
            <div class="column">
              <div class="notification">
                Motion graphics
              </div>
            </div>
            <div class="column">
              <div class="notification">
                Front-end coding
              </div>
            </div>
            <div class="column">
              <div class="notification">
                3D design, modelling, animation
              </div>
            </div>
            <div class="column">
              <div class="notification">
                Play experiences and game design
              </div>
            </div>
          </div>

          <h2>Experience</h2>

          <p>
            I have <strong>six years’ professional experience</strong> designing products and services. Over the past three years I’ve been working with toucanBox, a subscription / e-commerce startup based in London. Prior to that I worked with Makielab, a startup specialising in mobile games and bespoke 3D printed products. I’ve just arrived in Berlin.
          </p>
          <p>
            My training in human-centred design, originally focussing on physical objects, enables me to uncover users’ fundamental needs and make systematic decisions.
          </p>

          <br>

          <div class="work-block">
            <h4>toucanBox</h4>
            <p><em>London | APR 2016 - SEP 2018</em></p>
            <p>
              Startup subscription service delivering creative craft boxes to children aged 3-8.
            </p>
            <ul>
              <li>Assisted the leadership in defining and prioritising customer-facing features for the web-based subscription platform</li>
              <li>Interviewed customers, analysed data, led on UI/UX design, and built interactive prototypes and live testing variants</li>
              <li>Embedded with developers in an agile framework</li>
            </ul>
          </div>

          <div class="work-block">
            <h4>Makielab</h4>
            <p><em>London | APR 2015 - JAN 2016</em></p>
            <p>
              Mobile games and e-commerce startup, acquired by Disney in early 2016. We created Makies, an award-winning customisable digital avatar, which could be ordered as a bespoke 3D printed toy.
            </p>
            <ul>
              <li>Designed the customisation experience and physical product as part of a multidisciplinary product team</li>
            </ul>
          </div>

          <div class="work-block">
            <h4>Design by Touch</h4>
            <p><em>Leamington Spa (UK) | MAY 2013 - APR 2015</em></p>
            <p>
              Design consultancy, creating play experiences for the biggest kids brands in the world.
            </p>
            <ul>
              <li>Stand-out project: Lego Dimensions. Partnered closely with the in-house team in research, interaction design and user testing</li>
            </ul>
          </div>

          <div class="work-block">
            <h4>Internships</h4>
            <ul>
              <li>Art Lebedev Studio, <em>Moscow | SEP 2012 - APR 2013</em></li>
              <li>Random International, <em>London | MAY 2011 - SEP 2011</em></li>
              <li>LEGO, <em>Billund (Denmark) | MAY 2008 - SEP 2008</em></li>
            </ul>
          </div>


          <h2>Education</h2>

          <div class="work-block">
            <h4>Masters in Product Design (First Class)</h4>
            <p><em>Glasgow School of Art | SEP 2007 - JUN 2012</em></p>
            <ul>
              <li>Erasmus Exchange at NTNU, <em>Trondheim (Norway) SEP 2010 - JUN 2011</em></li>
              <li>SiAG Prize for Sustainability in Design</li>
              <li>Napier Prize for Achievement in Design and Engineering</li>
              <li>James Dyson Foundation Bursary</li>
            </ul>
          </div>

          <h2>Portfolio</h2>

          <p>This website includes five case studies, three from toucanBox and two side projects. I also include an overview of select projects dating from before 2016.</p>
          <ol>
            <li>
              toucanBox Chapter 1: Refining the value proposition<br>
              Case study details
            </li>
            <li>
              toucanBox Chapter 2: Increasing customer satisfaction with a personalised experience<br>
              Case study details
            </li>
            <li>
              Wesen Jewellery: Building a jewellery brand with user generated products<br>
              Case study details
            </li>
            <li>
              BLKBRD: Exploring a new dimension for messaging<br>
              Case study details
            </li>
            <li>
              toucanBox R&amp;D: Adding value to a physical product with digital content<br>
              Case study details
            </li>
          </ol>

        </div>

      </div>
    </template>

    <template slot="footer-content">
      <div class="container page-footer-container">
        <h2>Let’s chat</h2>
        <p>I’m always happy to meet new people and talk about opportunities so don’t hesitate to get in touch. <a>Copy email</a></p>
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

  .notification
    height: 100%

  .work-block
    margin-bottom: 3em

  .page-footer-container
    color: $steel
    h2
      font-size: 2em
      font-weight: 600
    a
      color: $black
      font-weight: 600

</style>
