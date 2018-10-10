<template>
  <WorkWrapper
    :project="'blkbrd'"
    :icon="'/img/homepage/project-icons/blkbrd.svg'"
    :color="'black'"
  >
    <template slot="titles">
      <div class="content">
        <h1 class="project-title">Exploring a new dimension for messaging</h1>
        <p class="client black">BLKBRD</p>
      </div>
    </template>

    <template slot="content">
      <div class="page-glass-section first-section">
        <div class="content">
          <p>
            A mobile messaging app which aims to make digital messages more tangible by giving them a physical location in the real world.
          </p>
          <br>
          <blockquote>
            <p>
              <strong>Product:</strong> Mobile messaging app
            </p>
            <p>
              <strong>Brief:</strong> Investigate the possibility of location-relevant messaging
            </p>
          </blockquote>
        </div>
      </div>

      <div class="page-glass-divider is-borderless">
        <h1>Discovery</h1>
      </div>

      <div class="page-glass-section">

        <div class="content">
          <p>
            Four observations inspired me to experiment with messaging and location:
          </p>
          <ol>
            <li>
              Many people, especially young people, prefer messaging to other forms of long-distance communication (e.g. phone calls and emails). I believe this tendency increases the friction of communication between young and old. Grandchildren, for instance, generally cannot simply send a Whatsapp to their grandparents asking how they’re doing. There’s a considerable mental hurdle to overcome in making a voice call. This usually results in infrequent communication.
            </li>
            <li>
              In some cases the impersonal nature of messaging, especially group messages, can create unforeseen problems: incorrect assumptions, notification overload and topics better addressed in person. I’ve noticed this especially in the communication between people sharing a living space.
            </li>
            <li>
              Augmented reality, projection and large format screens are steadily increasing the prevalence of digital ‘surfaces’ in our everyday environment.
            </li>
            <li>
              A typical family accumulates mobile devices which are outdated but perfectly functional. These could be put to work in a new role.
            </li>
          </ol>
        </div>

        <br>

      </div>

      <div class="page-glass-divider">
        <h1>Definition</h1>
      </div>

      <div class="page-glass-section">

        <div class="content">
          <p>
            These observations percolated in my mind for several months. During this time I had several conversations, each taking a different angle on the concept:
          </p>
          <ul>
            <li>
              <em>“It could act as a digital post-it”</em>
            </li>
            <li>
              <em>“You could remotely send reminders to the location where you will be when you need to remember them”</em>
            </li>
            <li>
              <em>“This would be useful for displaying up-to-date information at public events”</em>
            </li>
            <li>
              <em>“Some kind of two-way communication screen, like those used in remote working and multi-site offices”</em>
            </li>
            <li>
              <em>“It could be a public output screen for a Slack Channel or Whatsapp Group”</em>
            </li>
            <li>
              <em>“E-ink would be the perfect technology to display text-only messages - it could be an Internet of Things hardware product”</em>
            </li>
          </ul>

          <br>
          <br>

          <p>
            Location-relevant messaging could mean any of these things. I decided to build an minimum viable product (MVP) to test whether the concept would resonate with people. This left an important question regarding the kind of MVP; a stand-alone app or a plugin for an existing messaging platform? I mapped the pros and cons:
          </p>

          <p><strong>Stand-alone</strong></p>

          <ul class="plus-list">
            <li>No dependency on third-party APIs</li>
            <li>One interface for both authoring messages and displaying them</li>
            <li>Personal interest in building a mobile app and backend from scratch</li>
            <li class="minus">Higher friction in getting testers to adopt a new app</li>
            <li class="minus">Approval for various app stores is time consuming</li>
          </ul>

          <p><strong>Plugin</strong></p>
          <ul class="plus-list">
            <li>A familiar app would make adoption easier</li>
            <li>Slack have an open API which would be suitable</li>
            <li class="minus">Most of the people I intended to test with are not Slack mobile users (or users of any other messaging platform for which plugins can be built)</li>
            <li class="minus">Two interfaces required - the messaging app plugin and the output screen</li>
          </ul>

          <p>
            A plugin was an intriguing prospect, but would increase the work required to reach MVP. If avoiding app stores, a stand-alone app would need to be manually installed on the devices belonging to my testers but this seemed a reasonable trade-off under the circumstances.
          </p>

          <br>

          <h2>Specification</h2>

          <h4>Users</h4>
          <ul>
            <li>Users can create a personal account which allows them to send messages</li>
            <li>Their email address acts as a unique identifier</li>
            <li>They use a password to login</li>
            <li>An email based password reset is possible</li>
            <li>Users remain logged in until they explicitly log out</li>
          </ul>

          <h4>Channels</h4>
          <ul>
            <li>Inspired by Slack, conversations are organised in named channels</li>
            <li>To simplify the data-model (for MVP), all channels are shared among all users - no user/group scoped channels or invitation system</li>
            <li>Users can create new channels and optionally add a password to make the content private</li>
            <li>Deleting passworded channels requires the password</li>
          </ul>

          <h4>Messages</h4>
          <ul>
            <li>Inside a channel there is one message on-screen at a time, occupying the whole screen</li>
            <li>Once in a channel, the app requests full-screen and no-sleep modes from the device. In this way any device running the app can act as an ‘outlet’ for a channel</li>
            <li>In a channel, users can add new messages</li>
          </ul>

          <br>

          <div class="figure-container">
            <figure class="image is-3by1 single-image">
              <img class="lazyload" data-src="./img/projects/blkbrd/Flow.png">
            </figure>
            <figcaption>
              The BLKBRD user journey
            </figcaption>
          </div>

        </div>

      </div>

      <div class="page-glass-divider">
        <h1>Iteration</h1>
      </div>

      <div class="page-glass-section">

        <div class="content">
          <p>
            My first instincts were for an extremely minimal design language. I hit upon the blackboard as an analogy for the app’s functionality and envisioned stark white text on an otherwise fully black screen.
          </p>

          <div class="figure-container">
            <figure class="image is-2by1 single-image zoomable" @click="showImage('./img/projects/blkbrd/Typography-sketching.png', 'is-2by1')">
              <img class="lazyload" data-src="./img/projects/blkbrd/Typography-sketching.png">
              <button class="button white-button is-rounded image-zoomer" aria-haspopup="true"><span class="icon is-small"><i class="icon-zoom-in full-opacity"></i></span></button>
            </figure>
            <figcaption>
              Early explorations relied exclusively on typography, eschewing all other interface elements such as buttons and dividers. I relaxed this constraint after receiving feedback that it made the app difficult to understand.
            </figcaption>
          </div>

          <div class="figure-container">
            <figure class="image is-2by1 single-image zoomable" @click="showImage('./img/projects/blkbrd/Further-sketching.png', 'is-2by1')">
              <img class="lazyload" data-src="./img/projects/blkbrd/Further-sketching.png">
              <button class="button white-button is-rounded image-zoomer" aria-haspopup="true"><span class="icon is-small"><i class="icon-zoom-in full-opacity"></i></span></button>
            </figure>
            <figcaption>
              In further iteration I added buttons, structure, clear hierarchy and association. I signalled text inputs by inverting the scheme - wrapping them in a white box with black text.
            </figcaption>
          </div>

          <div class="figure-container">
            <figure class="image is-2by1 single-image">
              <img class="lazyload" data-src="./img/projects/blkbrd/Context.jpg">
            </figure>
            <figcaption>
              Imagining BLKBRD in context
            </figcaption>
          </div>

          <br>

          <h2>Lessons from user testing</h2>

          <p>
            I informally tested throughout the prototyping and build phases, gathering feedback as the project progressed. Initially I showed static screens and verbally explained the concept. Later I simply stated that I was working on something and wanted feedback, without any further preamble.
          </p>

          <table class="table">
            <thead>
              <tr>
                <th>Observation</th>
                <th>Remedy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>“I would like to scroll through previous messages”</em></td>
                <td>On the channel screen, I introduced vertical snap (paginated) scrolling, making it possible to swipe through previous messages</td>
              </tr>
              <tr>
                <td><em>“I’ve made a mistake, is it possible to delete message?”</em></td>
                <td>I added the ability to delete the previous message</td>
              </tr>
              <tr>
                <td><em>“I’d like to set the name that appears under my message, rather than just my email”</em></td>
                <td>I made it possible for users to add a custom screen name. However, this created a situation where the true identity of the message author could not reliably be known, leading to humorous impersonations</td>
              </tr>
              <tr>
                <td><em>“Could you add a bit of colour?”</em></td>
                <td>There was an effective way to add colour - in the background. I added a colour mode which replaces the black with a block colour, overlayed by the same white interface</td>
              </tr>
              <tr>
                <td><em>“Is it possible to search for a specific channel?”</em></td>
                <td>A good feature idea but not required to test the MVP</td>
              </tr>
              <tr>
                <td><em>“It would be great if our existing Whatsapp group could show up on the screen - I just don’t have space in my life for another messaging app”</em></td>
                <td>This comment encapsulated the stand-alone vs plugin decision earlier in the project. Sadly it wasn’t possible to develop an integration with Whatsapp</td>
              </tr>
              <tr>
                <td><em>“I’d like to be able to favourite a channel and receive notifications when a new message is written in it”</em></td>
                <td>Another good suggestion which I reasoned wasn’t necessary for the MVP (as discussed in the evaluation, this may have been an important feature for sustaining engagement)</td>
              </tr>
            </tbody>
          </table>

          <br class="extra">

          <div class="figure-container max-60">
            <figure class="image is-16by9 single-image">
              <iframe v-if="showVideos" class="lazyload" data-src="https://player.vimeo.com/video/293190758" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </figure>
            <figcaption>
              Background colour changing mode. Note the use of emoji, which proved just as popular on BLKBRD as other messaging apps
            </figcaption>
          </div>

        </div>

      </div>

      <div class="page-glass-divider">
        <h1>Production</h1>
      </div>

      <div class="page-glass-section">

        <div class="content">

          <blockquote>
            Ionic framework | Typescript | SCSS | Firebase
          </blockquote>

          <br class="extra">

          <p>I faced two key technology decisions:</p>

          <h3>1. App framework</h3>

          <p>My top requirement was multi-platform, so I considered three suitable options:</p>
          <h5>React Native</h5>
          <ul class="plus-list">
            <li>Increasingly popular and well supported</li>
            <li>Native-like performance but written in React and JS</li>
            <li class="minus">At that time, not a ‘mature’ platform with constantly changing tooling</li>
            <li class="minus">Significant up-front time investment to get started</li>
          </ul>

          <h5>Xamarin</h5>
          <ul class="plus-list">
            <li>Native-like performance</li>
            <li class="minus">A good C# learning opportunity but a trade-off with speed</li>
          </ul>

          <h5>Webview (Cordova)</h5>

          <ul class="plus-list">
            <li>Leverages my existing experience with web technologies</li>
            <li>Easy to get started</li>
            <li class="minus">Relatively poor performance</li>
          </ul>

          <p>
            I received a strong recommendation from a colleague at toucanBox for the <strong>Ionic Framework,</strong> which uses webview. Ionic would further speed up this route by offering an established build system and customisable interface widgets.
          </p>

          <p>
            The webview approach had a further advantage - the possibility of deploying to the web itself. This somewhat addressed the necessity of manually installing the app on test devices. Ionic also offered easy configuration as a progressive web app (PWA), allowing users to save the site as an app, almost indistinguishable from a regular app.
          </p>

          <br>

          <h3>2. Backend</h3>

          <p>
            Having settled on the Ionic Framework for the frontend, I noticed a common backend pairing was with Firebase (recently acquired by Google). This offered the low-configuration solution I was looking for. The Angularfire library further simplified integration with Ionic by offering an observable-based API for Firebase.
          </p>

          <br>

        </div>

      </div>

      <div class="page-glass-divider">
        <h1>Evaluation</h1>
      </div>

      <div class="page-glass-section last-section">

        <div class="content">

          <p>
            I placed two devices, each displaying a specific channel, in two houses in different cities. I also installed the app on several phones and shared the web version with dozens of other testers, encouraging them to save the PWA on their home screens.
          </p>

          <br>

          <div class="figure-container max-33">
            <figure class="image is-9by16 single-image">
              <iframe v-if="showVideos" class="lazyload" data-src="https://player.vimeo.com/video/293190729" width="640" height="1138" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </figure>
            <figcaption>
              Motion design proved to be an important part of the BLKBRD design language
            </figcaption>
          </div>
          <!-- The onboarding flow: sign up, making a new channel, writing the first message and getting a reply.  -->


          <h3>User reaction</h3>

          <p><strong>2-3 days of high engagement,</strong> which rapidly waned thereafter.</p>

          <p><strong>A perfect context for jokes and pranks.</strong></p>

          <p>
            Message authors preferred to be <strong>near the outlet screen</strong> when writing a message (to ensure it worked and see other people’s reactions). The possibility of remotely writing messages turned out not to be a compelling use case, a situation that may have been remedied by offering notifications when new messages are added to a channel.
          </p>

          <p>
            Important messages would quickly get <strong>lost in the message stream</strong> and forgotten. Notably, this is an issue with all stream-style messaging platforms including Slack and Whatsapp.
          </p>

          <h3>An interface between young and old</h3>

          <p>
            Part of my original inspiration was to enable elderly people to participate in the world of text based messaging and group chats. Of course, the ability of the app to fulfill this purpose depended on the engagement of young people, which wasn’t sustained. For that reason I decided not to test this aspect.
          </p>

          <h3>Reusing old devices</h3>

          <p>
            I used discarded tablets as channel outlet screens. While I’m enthusiastic about reusing old devices, I began to question this approach:
          </p>

          <ul>
            <li>Perhaps the devices, which contain valuable materials, could better serve by being recycled</li>
            <li>Tablet screens, which are not designed for continual use, could get damage if forced to stay on (with the tablets I used, this didn’t prove to be the case)</li>
            <li>There may be an unjustifiably high use of energy from continuously keeping on such screens</li>
          </ul>

          <h3>Hardware</h3>

          <p>
            These questions caused me to return to the idea of an E-ink hardware product, which would be low energy and highly efficient. Such a device also seemed more suitable for elderly people, provided it featured exemplary useability. However, the experiment wasn’t sufficiently successful to warrant jumping into hardware development at this time.
          </p>
        </div>

      </div>

    </template>

    <template slot="footer-content">
      <div class="container case-study page-footer-container">
        <div class="columns">
          <div class="column content link-container">
            <h3>Web app</h3>
            <p>BLKBRD is built with the <a href="https://ionicframework.com/" target="_blank">Ionic Framework</a>, making it possible to deploy to the web as well as mobile devices</p>
            <div class="links-container">
              <a href="http://bit.ly/blkbrdapp" target="_blank" class="button is-primary is-rounded is-inverted is-outlined">
                View app
                <i class="icon-right-open-big full-opacity footer-icon"></i>
              </a>
            </div>
          </div>
          <div class="column is-three-quarters">
            <figure class="image is-16by9"><img class="lazyload" data-src="/img/project-presentations/combined_blkbrd.png"></figure>
          </div>
        </div>
      </div>
    </template>
  </WorkWrapper>
</template>

<script>

import WorkWrapper from '@/components/work-wrapper.vue'

export default {
  name: 'Blkbrd',
  components: {
    WorkWrapper
  },
  data () {
    return {
      showVideos: false
    }
  },
  mounted () {
    setTimeout( () => {
      this.showVideos = true;
    }, 1000);
  },
  methods: {
    showImage (imageUrl, imageAspectClass) {
      this.$modal.show('image-modal', { url: imageUrl, aspect: imageAspectClass });
    },
    hideImage () {
      this.$modal.hide('image-modal');
    }
  }
}
</script>

<style scoped lang="sass">

  @import '../sass/variables'

  .button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined:focus
    color: $steel



</style>
