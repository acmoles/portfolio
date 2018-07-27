<template>
  <WorkWrapper
    :icon="'/img/homepage/project-icons/personalised.svg'"
    :color="'blue'"
  >
    <template slot="content">
      <div class="page-glass-section first-section">

        <div class="content blue">
          <p class="client">toucanBox</p>
          <!-- <p class="client">toucanBox <span>Q3 2017</span></p> -->
          <h1 class="project-title">Optimise customer onboarding</h1>

          <p><strong>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</strong></p>
          <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
          <h2>Second level</h2>
          <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
            <li>Ut non enim metus.</li>
          </ul>
        </div>

      </div>

      <div class="page-glass-divider">
        <h1>Discovery</h1>
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

        <div class="figure-container">
          <figure class="image is-16by9 single-image">
            <img class="lazyload" data-src="https://bulma.io/images/placeholders/640x360.png">
          </figure>
          <figcaption>
            Figure 1: Some beautiful placeholders
          </figcaption>
        </div>

        <div class="content">
          <h3>Third level</h3>
          <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
          <ol>
            <li>Donec blandit a lorem id convallis.</li>
            <li>Cras gravida arcu at diam gravida gravida.</li>
            <li>Integer in volutpat libero.</li>
            <li>Donec a diam tellus.</li>
            <li>Aenean nec tortor orci.</li>
            <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
            <li>Vivamus maximus ultricies pulvinar.</li>
          </ol>
        </div>

      </div>

      <div class="page-glass-divider">
        <h1>Analysis</h1>
      </div>

      <div class="page-glass-section">

        <div class="content">
          <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
          <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
          <dl>
            <dt>Web</dt>
            <dd>The part of the Internet that contains websites and web pages</dd>
            <dt>HTML</dt>
            <dd>A markup language for creating web pages</dd>
            <dt>CSS</dt>
            <dd>A technology to make HTML look better</dd>
          </dl>
        </div>

        <div class="content">
          <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
          <h4>Fourth level</h4>
          <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
          <pre>
        &lt;!DOCTYPE html&gt;
        &lt;html&gt;
          &lt;head&gt;
            &lt;title&gt;Hello World&lt;/title&gt;
          &lt;/head&gt;
          &lt;body&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.&lt;/p&gt;
          &lt;/body&gt;
        &lt;/html&gt;
        </pre>
          <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
          <table>
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
            </tbody>
          </table>
          <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
          <h5>Fifth level</h5>
          <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
        </div>

      </div>

      <div class="page-glass-divider">
        <h1>Design</h1>
      </div>

      <div class="page-glass-section">

          <div class="columns">
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="https://bulma.io/images/placeholders/256x256.png">
              </figure>
              <figcaption>
                Figure 1: Some beautiful placeholders
              </figcaption>
            </div>
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="https://bulma.io/images/placeholders/256x256.png">
              </figure>
              <figcaption>
                Figure 1: Some beautiful placeholders
              </figcaption>
            </div>
          </div>

        <div class="content">
          <h6>Sixth level</h6>
          <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
        </div>

      </div>

      <div class="page-glass-divider">
        <h1>Production</h1>
      </div>

      <div class="page-glass-section">

        <div class="content">
          <h6>Seventh</h6>
          <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
        </div>

        <div class="figure-container">
          <figure class="image is-16by9 single-image">
            <img class="lazyload" data-src="https://bulma.io/images/placeholders/640x360.png">
          </figure>
          <figcaption>
            Figure 1: Some beautiful placeholders
          </figcaption>
        </div>

      </div>

      <div class="page-glass-divider">
        <h1>Evaluation</h1>
      </div>

      <div class="page-glass-section last-section">

        <div class="content">
          <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
          <ol>
            <li>Donec blandit a lorem id convallis.</li>
            <li>Cras gravida arcu at diam gravida gravida.</li>
            <li>Integer in volutpat libero.</li>
            <li>Donec a diam tellus.</li>
            <li>Aenean nec tortor orci.</li>
            <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
            <li>Vivamus maximus ultricies pulvinar.</li>
          </ol>
        </div>

      </div>
    </template>

    <template slot="footer-content">
      <div class="container page-footer-container">
        <div class="columns">
          <div class="column content link-container">
            <h3>Link title</h3>
            <p>Cras in nibh lacinia, venenatis nisi et, auctor urna.</p>
            <div class="links-container">
              <a class="button is-primary is-rounded is-inverted is-outlined">
                <span>View site</span>
                <i class="icon-play full-opacity footer-icon"></i>
              </a>
              <a class="other-link" href="#">View other site</a>
            </div>
          </div>
          <div class="column is-three-quarters">
            <figure class="image is-16by9"><img src="/img/projects/test-presentation.png"></figure>
          </div>
        </div>
      </div>
    </template>
  </WorkWrapper>
</template>

<script>

import WorkWrapper from '@/components/work-wrapper.vue'

export default {
  name: 'Onboarding',
  components: {
    WorkWrapper
  }
}
</script>

<style scoped lang="sass">

  @import '../sass/variables'


</style>
