<template>
  <WorkWrapper
    :project="'toucanoo'"
    :icon="'/img/homepage/project-icons/toucanoo.svg'"
    :color="'purple'"
  >
    <template slot="titles">
      <div class="content">
        <h1 class="project-title">Adding digital value to a physical product</h1>
        <p class="client purple">toucanBox</p>
      </div>
    </template>

    <template slot="content">
      <div class="page-glass-section first-section">
        <div class="content">

          <p class="light"><em>"A toucanBox subscription craft box contains all the materials needed to complete a craft project, with illustrated instructions, stickers to collect and an activity magazine."</em></p>

          <p>I worked with toucanBox from April 2016 to September 2018. I carried out this project in my role as research and development (R&amp;D) Manager. Shortly after I joined the Technology Team in a full-time product role.</p>

          <p>
           To get a full introduction to toucanBox you can read the first segment of toucanBox chapter 1 <em>"Refining the value proposition". &nbsp;</em>
           <router-link :to="{ name: 'onboarding', params: {} }">See Chapter 1 <i class="icon-right-open-big full-opacity footer-icon"></i></router-link>
         </p>
          <p>
            Customer acquisition and retention were two of the most discussed performance metrics at toucanBox. This project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).
          </p>

          <p>We knew that the top reason for cancellation in trial was 'affordability' and the second top 'value for money'. For some time, I had taken part in wistful conversations about whether digital content could help in this regard. This kind of content could complement the product without increasing the unit cost. I lobbied to explore this theme further and received a green light for a thorough investigation.</p>

          <p class="light">
            <em>
              I have omitted confidential information in this case study. All information and images are my own unless stated otherwise.
            </em>
          </p>

          <br>

        </div>

        <div class="content project-details">

          <div class="columns">
            <div class="column">
              <dl>
                <dt><h5>Context</h5></dt>
                <dt><em class="dark">Product:</em> Online game</dt>
                <dt><em class="dark">Brief:</em> Estimate the potential costs and benefits of digital content</dt>
              </dl>
            </div>
            <div class="column">
              <dl>
                <dt><h5>Project team</h5></dt>
                <dt>Solo research and development project</dt>
                <dt>Stakeholders in Marketing, Creative, Operations and Technology</dt>
              </dl>
            </div>
            <div class="column">
              <dl>
                <dt><h5>My role</h5></dt>
                <dt>Planning and scope definition</dt>
                <dt>Customer insights and ideation</dt>
                <dt>Prototyping and design iteration</dt>
                <dt>Software development</dt>
                <dt>Measurement and evaluation</dt>
              </dl>
            </div>
          </div>

        </div>

      </div>

      <div class="page-glass-divider is-borderless">
        <h1 id="discovery">Discovery</h1>
      </div>

      <div class="page-glass-section">

        <div class="content">
          <h2>Customer Lens</h2>
          <p>I surveyed and interviewed existing toucanBox customers to further explore their perceptions of value for money and attitudes to children's digital media.</p>

          <div class="columns">
            <div class="column">
              <table class="table is-clear">
                <thead>
                  <tr>
                    <th>
                      Perceptions of value for money
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p><em>"It's a bit expensive for what you get"</em></p>
                      <p><em>"For that money I could buy a lot more craft materials at my local shop"</em></p>
                      <p><em>"I didnt think it would cost that much"</em></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="column">
              <table class="table is-clear">
                <thead>
                  <tr>
                    <th>
                      Duration of the toucanBox experience
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p><em>"It's finished too quickly"</em></p>
                      <p><em>"I usually send them off with their boxes, which is a great opportunity for a little peace and quiet. It's a 30 minute babysitter"</em></p>
                      <p><em>"We have great fun doing the activities together. I just wish it all lasted a bit longer."</em></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="column">
              <table class="table is-clear">
                <thead>
                  <tr>
                    <th>
                      What would be distinctive about digital content by toucanBox?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>Top three expectations from a survey of existing customers:</p>
                      <p><em class="light">"What qualities would you expect from apps, games, videos and other digital content made by toucanBox?"</em></p>
                      <ul>
                        <li>Creative</li>
                        <li>Time well spent </li>
                        <li>Educational</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2>Market Lens</h2>
          <h3>Digital content for children</h3>

          <p>A survey of parents in Germany (2017, The Kids Want Mobile) found that:</p>

          <div class="columns">
            <div class="column">
              <table class="table is-clear">
                <tbody>
                  <tr>
                    <th>
                      Top search terms
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <dl>
                        <dt>Play (spielen)</dt>
                        <dt>Learning (lernen)</dt>
                        <dt>Painting (malen)</dt>
                        <dt>Music (Musik)</dt>
                        <dt>Videos</dt>
                        <dt>Fun (spa&szlig;)</dt>
                        <dt>Knowledge (wissen)</dt>
                        <dt>Building (bauen)</dt>
                      </dl>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="column">
              <table class="table is-clear">
                <tbody>
                  <tr>
                    <th>
                      Top App types
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <dl>
                        <dt>Games</dt>
                        <dt>Learning</dt>
                        <dt>Video / audio</dt>
                        <dt>Friends / social media (beginning at 8+ years old)</dt>
                        <dt>Reading / Read aloud</dt>
                        <dt>Guide</dt>
                      </dl>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="column is-half">
              <table class="table is-clear">
                <tbody>
                  <tr>
                    <th>
                      Smartphone and tablet use
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <dl>
                        <dt><strong>Devices:</strong> Families own on average 2.25 Smartphones and 1.4 Tablets. Few children under 6 have their own smartphone or tablet</dt>
                        <dt><strong>Frequency:</strong> How often parents allow their children to use a smartphone or tablet increases steadily with age, from rarely at ~1 years to daily at 8 years</dt>
                        <dt><strong>Duration:</strong> 3-8 year olds are generally allowed to use apps for less than 30 mins. 6-8 year olds are occasionally allowed above 1 hour</dt>
                      </dl>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3>What's already out there?</h3>
          <p>toucanBox regularly run in-house testing of new crafts with parents and children. I was able to test a selection of games, apps and online content during these sessions.</p>

          <br>

          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th>
                    <p>Digital content sources for children aged 3 - 8</p>
                  </th>
                  <th>
                    <p>Age range</p>
                  </th>
                  <th>
                    <p>Play patterns</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Cbeebies</p>
                  </td>
                  <td>
                    <p>2-6</p>
                  </td>
                  <td>
                    <p>Creative, Learning, Visual stories</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Cowly Owl</p>
                  </td>
                  <td>
                    <p>3-6</p>
                  </td>
                  <td>
                    <p>Creative, Story / Adventure, Exploration, Learning, Cooperative</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Diy.org</p>
                  </td>
                  <td>
                    <p>6-16</p>
                  </td>
                  <td>
                    <p>Creative, learning, Exploration, Logic, Cooperative, Build / Manage</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Fox and the Sheep</p>
                  </td>
                  <td>
                    <p>3-6 and 6-8</p>
                  </td>
                  <td>
                    <p>Creative, Story / Adventure, Exploration, Roleplay, Nurture, Visual stories, Build / Manage, Rhythm</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>IDEO toy lab</p>
                  </td>
                  <td>
                    <p>3-6</p>
                  </td>
                  <td>
                    <p>Creative, Roleplay, Rhythm</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Sago Mini</p>
                  </td>
                  <td>
                    <p>3-6</p>
                  </td>
                  <td>
                    <p>Creative, Learning, Exploration, Rhythm, Roleplay</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Seedling</p>
                  </td>
                  <td>
                    <p>2-12</p>
                  </td>
                  <td>
                    <p>Creative, Learning, Nurture, Roleplay</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Tinybop</p>
                  </td>
                  <td>
                    <p>4-8</p>
                  </td>
                  <td>
                    <p>Creative, Exploration, Learning, Build / Manage</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>TocaBoca</p>
                  </td>
                  <td>
                    <p>3-8</p>
                  </td>
                  <td>
                    <p>Creative, Story / Adventure, Exploration, Roleplay, Cooperative, Experimental, Logic, Rhythm, Build / Manage, Racing</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Yatatoy</p>
                  </td>
                  <td>
                    <p>2-6</p>
                  </td>
                  <td>
                    <p>Rhythm, Creative</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>youTube Kids</p>
                  </td>
                  <td>
                    <p>2-8</p>
                  </td>
                  <td>
                    <p>Visual stories, Story / Adventure</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <br class="extra">

          <p>Key observations through testing:</p>
          <ul>
            <li>For the most part, even young children have learned common interface signifiers and touch gestures, e.g. arrows or swipe for carousels, pinch to zoom, play icon, video scrub, cross icon to exit</li>
            <li>Games usually featured a single play experience</li>
            <li>The best play experiences are open-ended, with no natural conclusion, so that the duration of play is the childs attention span</li>
          </ul>

          <p>Notably, the games from leading studios are <strong>never competitive</strong>, which is one of the main features of games aimed at teenagers and adults.</p>
        </div>
        <br>

      </div>

      <div class="page-glass-divider">
        <h1 id="definition">Definition</h1>
      </div>

      <div class="page-glass-section">

        <div class="content">
          <h2>Potential customer journeys</h2>
          <p>What ways can customers access our digital content?</p>

          <br>

          <div class="table-container">
            <table class="table is-striped">
              <thead>
                <tr>
                  <th>
                    <p>Method</p>
                  </th>
                  <th>
                    <p>Description</p>
                  </th>
                  <th>
                    <p>Pros / cons</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>toucanBox mobile app</p>
                  </td>
                  <td>
                    <p>Content relevant to the current box is pushed to the app</p>
                  </td>
                  <td>
                    <ul class="plus-list">
                      <li>Easy to use</li>
                      <li class="minus">High investment</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>URL or QR code printed in the box</p>
                  </td>
                  <td>
                    <p>There are three possible print locations:</p>
                    <ol>
                      <li>The personalised in-box message (added at the address labelling stage)</li>
                      <li>Activity magazine / instructions (added during assembly, printed in large numbers)</li>
                      <li>Additional paper insert (added during assembly)</li>
                    </ol>
                    <br>
                  </td>
                  <td>
                    <ul class="plus-list">
                      <li class="minus">Typing a printed URL is tiresome (friction)</li>
                      <li>A QR code could address this</li>
                      <li>Low investment</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <br>

          <p>Development of a fully-fledged mobile app was out of scope for this test. I decided to play to our strengths - the experience should be online, built with web technologies and accessed via a printed URL or QR code in the box.</p>

          <p>
            QR codes appeared to offer a way to reduce the friction of moving from printed media to online content, especially on IOS where it's supported by the default camera app.
            However, the majority of our website users are on Android (which typically requires a dedicated QR code reader app to be downloaded).
            I was concerned this feature would actually increase friction for less technical users, so for the purpose of this test we opted to simply print the URL.
          </p>

          <br class="extra">

          <h2>Goals</h2>
          <p class="pullout-quote is-left">
            "Estimate the potential costs and benefits of digital content"
          </p>
          <p>My approach:</p>

          <ul>
            <li>Generate a wide range of digital content ideas which reflect the toucanBox values time well spent,&nbsp;educational and creative </li>
            <li>Design and build one prototype digital experience to test live with customers</li>
            <li>Measure the impact on 'activation rate' and perceptions of value for money</li>
          </ul>

        </div>
        <br>

      </div>

      <div class="page-glass-divider">
        <h1 id="iteration">Iteration</h1>
      </div>

      <div class="page-glass-section">

        <div class="content">
          <h2 id="ideation">Ideation</h2>
          <p>I facilitated a Creative Team brainstorm (including product designers (of the crafts), graphic designers, a copywriter and self-selecting individuals from across the company). We pooled our ideas and sources of inspiration. These ideas broadly split into two themes:</p>


          <div class="columns" style="margin-bottom: 1.5em">
            <div class="column">
              <table class="table">
                <thead>
                  <tr>
                    <th>
                      <p>Interactive digital activity or game</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>A device screen as part of the craft</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>A story that starts in the magazine, with a digital finale</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Take a photo of the craft and add animated digital 'stickers,' save it in your gallery</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Make your own colouring sheets to print out or receive in your next box</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Stop-motion camera app - make animations with your crafts</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Take a photo of the craft, watch it come to life on the screen. Extended play with a nurture game</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Augmented Reality (AR) instructions and AR enhancement of the finished craft</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>AR X-ray inspect the craft - learn the biology of animals and humans</p>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>

            <div class="column">
              <table class="table">
                <thead>
                  <tr>
                    <th>
                      <p>Online or in-app content hub</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>Video instructions for the craft box and/or bonus crafts</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Additional craft ideas and instructions</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>'Cardboard crafts' ideas to reuse the box</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Seasonal events, games, craft ideas, facts and recipes</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Product, app and events recommendations</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Crafting and creativity advice for parents</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Competitions</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Colouring sheets to print out</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Next box teasers</p>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>

          <p>We agreed to spin out the content hub ideas into a future project, recognising it had SEO and customer acquisition potential.</p>

          <br class="extra">

          <h2 id="prototyping">Prototyping</h2>
          <p>I built four low-fi prototypes to test in-house with parents and children.</p>
          <br>
          <article class="media">
            <div class="media-left is-quarter">
              <figure class="image is-1by1">
                <iframe v-if="showVideos" class="lazyload" data-src="https://player.vimeo.com/video/293190847" width="640" height="640" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h5>Augmented reality (AR) overlay on a craft</h5>
                <p>Add 3D animated characters, enhancements and storytelling to a child’s finished craft project.</p>
                <ul class="plus-list">
                  <li>Children found the concept very compelling</li>
                  <li>We observed them using AR in creative ways we didnt foresee <em>"Look I've got wings on my arm"</em></li>
                </ul>
              </div>
            </div>
          </article>

          <article class="media">
            <div class="media-left is-quarter">
              <figure class="image is-1by1">
                <iframe v-if="showVideos" class="lazyload" data-src="https://player.vimeo.com/video/293190568" width="640" height="640" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h5>Craft plus screen</h5>
                <p>Incorporate a phone screen into the craft, blending digital and physical - a racing car, where the driver is animated, responding to movement via the accelerometer. <i>Visual design in collaboration with Mark Allan, Graphic Designer at toucanBox.</i></p>
                  <ul class="plus-list">
                    <li>Encouraged extended play with the crafts</li>
                    <li class="minus">Mobile devices dont mix well with common craft materials like paint, glitter or glue!</li>
                  </ul>
              </div>
            </div>
          </article>

          <article class="media">
            <div class="media-left is-quarter">
              <figure class="image is-9by16">
                <iframe v-if="showVideos" class="lazyload" data-src="https://player.vimeo.com/video/293400271" width="640" height="1138" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h5>Extended storytelling</h5>
                <p>A story in the magazine, with an interactive finale online or in an app. Each new craft is a chapter in a digital adventure.</p>
                <ul class="plus-list">
                  <li class="minus">This prototype excited children the least</li>
                  <li class="minus">The interruption in the story broke the children's attention</li>
                </ul>
              </div>
            </div>
          </article>

          <article class="media">
            <div class="media-left is-quarter">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/toucanoo/Colouring.jpg">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h5>Make a Toucanoo of you! </h5>
                <p>Then print it out and colour it in. Toucanoos are cute triangular characters which feature in the toucanBox activity magazine.</p>
                <ul class="plus-list">
                  <li>Children found the experience intuitive and enjoyable; some were engrossed for up to 45 minutes</li>
                  <li>Making characters proved a catalyst for storytelling</li>
                  <li>Digital / physical crossover experience</li>
                  <li class="minus">No direct link to any content in the box</li>
                </ul>
              </div>
            </div>
          </article>

          <br class="extra">

          <h3>Selecting a prototype to move forward</h3>
          <p>
            AR looked like an exciting way to mix the tangible aspects of a craft box with digital content. However, in 2016 web AR was nowhere near mature enough for a live test with actual customers. My low-fi AR prototype was built in Unity. For the purposes of this test, a Unity application and a release to app stores was clearly out of scope. The Toucanoo prototype had an equally positive reception and would be much easier to build.
          </p>

          <br>

          <h3>Detailing the Toucanoo colouring sheet maker</h3>
          <p>My next steps were to refine the Toucanoo prototype by taking action on test feedback and improving the visual design.</p>

          <div class="columns">
            <div class="column">
              <div class="max-60">
                <figure class="image is-9by16">
                  <iframe v-if="showVideos" class="lazyload" data-src="https://player.vimeo.com/video/293190638" width="640" height="1138" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </figure>
                <figcaption>
                  Low-fi prototype of the Toucanoo colouring sheet maker, used in early testing
                </figcaption>
              </div>
            </div>
            <div class="column">
              <div class="max-60">
                <figure class="image is-9by16">
                  <iframe v-if="showVideos" class="lazyload" data-src="https://player.vimeo.com/video/293190429" width="640" height="1138" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </figure>
                <figcaption>
                  Useability testing a high fidelity iteration with children
                </figcaption>
              </div>
            </div>
          </div>

          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th>
                    <p>Observation</p>
                  </th>
                  <th>
                    <p>Remedy</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p><em>"My Toucanoo is called Wendy"</em> Many children named their Toucanoos, even if they werent able to write the names</p>
                  </td>
                  <td>
                    <p>I added a text box in the print modal where an older child or parent could type the name and have it appear on the printout</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><em>"Theres no skirt!"</em> Several important accessories were clearly missing</p>
                  </td>
                  <td>
                    <p>I added skirts, wellington boots and several other accessories</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>"<em>I dont want this one</em>" Children wanted to be able to delete accessories</p>
                  </td>
                  <td>
                    <p>I observed children dragging items off the screen, attempting to delete them, which offered a natural interaction for this feature</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Certain types of accessory like hats, clothes and shoes quickly cluttered the screen and didnt make sense out of their intended positions</p>
                  </td>
                  <td>
                    <p>I made new placements in specific categories (e.g. hair) remove the previous accessory of that type. This proved to be an intuitive limitation</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Parents found it hard to get printing to work. It depended a great deal on the device, configuration and their technical aptitude</p>
                  </td>
                  <td>
                    <p>I added the possibility of saving directly as a PDF and a printing FAQ page</p>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Many adult testers requested that hand-held items move when the hand moves</p>
                  </td>
                  <td>
                    <p>This feature would require detailed development work and was not essential for testing, so I decided not to include it for the test</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <br>

          <div class="figure-container">
            <figure class="image is-5by3 single-image zoomable" @click="showImage('./img/projects/toucanoo/Colouring-design.png', 'is-5by3')">
              <img class="lazyload" data-src="./img/projects/toucanoo/Colouring-design.png">
              <button class="button white-button is-rounded image-zoomer" aria-haspopup="true"><span class="icon is-small"><i class="icon-zoom-in full-opacity"></i></span></button>
            </figure>
            <figcaption>
              Matching the style of the new toucanBox magazine required a different look and feel from the website
            </figcaption>
          </div>

        </div>

      </div>

      <div class="page-glass-divider">
        <h1 id="production">Production</h1>
      </div>

      <div class="page-glass-section">

        <div class="content">

          <blockquote>
            Pixi JS | Jekyll | Jekyll multi language plugin | SCSS | Bulma | Browserify | Gulp
          </blockquote>

          <p>
            I chose html canvas over DOM or SVG as the foundational technology for both the low-fi prototype and the production build. My rationale was performance on low-spec mobile devices, which could lean on their graphics processor (GPU) to keep animation smooth. I relied on two libraries to speed up development:
          </p>

          <ul>
            <li>Pixi.js offered a simplified canvas API and built in GPU acceleration</li>
            <li>Jekyll and Jekyll multi-language plugin automated the generation of translated html pages (in English, French, Italian and German)</li>
          </ul>

          <br>

          <div class="columns" style="margin-bottom: 0">
            <div class="column">
              <div class="max-80">
                <figure class="image is-1by1">
                  <img class="lazyload" data-src="./img/projects/toucanoo/Production-assets.jpg">
                </figure>
                <figcaption>
                  Toucanoo accessories packed on a sprite sheet using Texturepacker
                </figcaption>
              </div>
            </div>
            <div class="column">
              <div class="max-80">
                <figure class="image is-1by1">
                  <iframe v-if="showVideos" class="lazyload" data-src="https://player.vimeo.com/video/293190505" width="640" height="640" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </figure>
                <figcaption>
                  Toucanoo animation was achieved through a combination of tweens and sinusoidal functions. Tuning the motion sometimes created unexpected effects
                </figcaption>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div class="page-glass-divider">
        <h1 id="evaluation">Evaluation</h1>
      </div>

      <div class="page-glass-section last-section">

        <div class="content">

          <div class="figure-container max-80">
            <figure class="image is-16by9 single-image">
              <img class="lazyload" data-src="./img/projects/toucanoo/All-together.jpg">
            </figure>
            <figcaption>
              The test launched with a double spread in the first box magazine for all trialists
            </figcaption>
          </div>



          <h3>What went well?</h3>

          <p><strong>Triple average time on page</strong> compared to the rest of the site</p>

          <p><strong>56 minutes</strong> longest session</p>

          <p>Internal enthusiasm and agreement that it <strong>embodied toucanBoxs values</strong></p>


          <h3>What didnt go so well?</h3>

          <p><strong>3.4% of trialists</strong> accessed the experience</p>

          <p>The friction I anticipated in moving from the box to the online content played out in practice, reflected by the relatively low engagement. Correspondingly, I measured <strong>no noticeable change to activation rate</strong></p>


          <h3>The future</h3>

          <p>Was there a future for digital interactive experiences as part of the toucanBox value proposition? </p>

          <p>Not in the short-term, due to:</p>
          <ul>
            <li>Considerable investment of time and energy</li>
            <li>Specialist expertise required for the best experience (e.g. in native app development)</li>
            <li>Uncertain impact</li>
            <li>Many competitor children's apps already embody toucanBoxs values (Creative, time well spent, educational)</li>
            <li>Compelling digital-physical connection requires technologies which arent yet widespread (e.g. AR), or which are very expensive (e.g. Electronics)</li>
          </ul>

          <p>However, the project served to inspire the toucanBox team and suggested future possibilities:</p>
          <ul>
            <li>Creating a Toucanoo character could form part of a more personalised experience</li>
            <li>Digital experiences could be a new marketing channel e.g. presence in app stores</li>
          </ul>

        </div>

      </div>


    </template>

    <template slot="footer-content">
      <div class="container case-study page-footer-container">
        <div class="columns">
          <div class="column content link-container">
            <h3>Make a toucanoo!</h3>
            <p>The game continues to be promoted to all toucanBox trialists in their first magazine</p>
            <div class="links-container">
              <a href="https://create.toucanbox.com" target="_blank" class="button is-primary is-rounded is-inverted is-outlined">
                View site
                <i class="icon-right-open-big full-opacity footer-icon"></i>
              </a>
            </div>
          </div>
          <div class="column is-three-quarters">
            <figure class="image is-16by9"><img class="lazyload" data-src="/img/project-presentations/combined_colouring.png"></figure>
          </div>
        </div>
      </div>
    </template>
  </WorkWrapper>
</template>

<script>

import WorkWrapper from '@/components/work-wrapper.vue'

export default {
  name: 'Toucanoo',
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
    color: $darkPurple

</style>
