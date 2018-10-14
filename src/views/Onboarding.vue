<template>
  <WorkWrapper
    :project="'onboarding'"
    :icon="'/img/homepage/project-icons/toucan.svg'"
    :color="'blue'"
  >
    <template slot="titles">
      <div class="content">
        <h1 class="project-title">Refining the value proposition</h1>
        <p class="client">toucanBox chapter 1</p>
      </div>
    </template>

    <template slot="content">
      <div class="page-glass-section first-section">

        <div class="content">
          <p class="light">
            <em>
              "toucanBox is an award winning startup subscription service that provides arts and crafts activities for children aged 3 to 8 years old.
              Each box has the child’s name on the front and a personalised message printed inside.
              It has illustrated instructions, an activity magazine and all the required materials to make a craft project. It’s also delivered straight through the letterbox."
            </em>
          </p>
          <p style="margin-bottom: 2.5em;">
            I worked with toucanBox from April 2016 to September 2018, initially as Research and Development Manager, later moving into a full time product role in the Technology Team.
            This was initially composed of me and one developer. Over the course of a year we added four more developers.
          </p>


          <div class="figure-container max-80">
            <figure class="image is-16by9 single-image">
              <img class="lazyload" data-src="./img/projects/onboarding/Hero.jpg">
            </figure>
            <figcaption>
              Photography credit: toucanBox Creative Team
            </figcaption>
          </div>

          <p>
            2017 was a significant year for toucanBox. Having secured funding in the previous year, we were ready to expand the Company and transition into a growth phase.
          </p>
          <p>
            As we offer a product customers usually haven’t seen before, we knew that our communication and first impression must be flawless.
          </p>
          <p>
            New customers register through the website. They choose a box type for their child (or children) and create an account, providing relevant details (including email, delivery address and billing information).
            The first box is a free trial if they are acquired through paid marketing channels.
          </p>
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
                <dt><span class="dark">Product:</span> Website and sign up web application</dt>
                <dt><span class="dark">Brief:</span> Increase funnel conversion rate</dt>
              </dl>
            </div>
            <div class="column">
              <dl>
                <dt><h5>Project team</h5></dt>
                <dt>Full Stack Developer</dt>
                <dt>Product Designer (me)</dt>
                <dt>Stakeholders in Marketing and Creative</dt>
              </dl>
            </div>
            <div class="column">
              <dl>
                <dt><h5>My role</h5></dt>
                <dt>Planning and scope definition</dt>
                <dt>Customer insights and ideation</dt>
                <dt>Prototyping and design iteration</dt>
                <dt>Development coordination and oversight</dt>
                <dt>Front-end development</dt>
                <dt>Measurement and evaluation</dt>
              </dl>
            </div>
          </div>

        </div>

      </div>

      <div class="page-glass-divider is-borderless">
        <h1>Discovery</h1>
      </div>

      <div class="page-glass-section">

        <div class="content">
          <h2 class="subtitle ">Who are our customers?</h2>
          <p>
            Through internal consultation and customer interviews, I identified the following high level personas and their corresponding desires:
          </p>

          <br>
          <br>

          <article class="media">
            <div class="media-left is-quarter">
              <h5>Parent</h5>
              <p class="light"><em>'Buyer persona'</em></p>
              <p>
                In general it’s the parent who responds to our advertising and comms, makes the purchase, manages the subscription and engages with our customer care
              </p>
            </div>
            <div class="media-content">
              <div class="content">
                <h5>I want my child to be happy</h5>
                <ul>
                  <li>They enjoy crafting <i>“We do crafts every weekend and they love it”</i></li>
                  <li>They want toucanBox <i>“They saw it on TV and asked me for it”</i></li>
                </ul>
                <h5>I want to be a good parent</h5>
                <ul>
                  <li>I want to share positive experiences with my child, forming lasting memories <i>“I really value the time we spend together”</i></li>
                  <li>I want to support my child’s education and development <i>“If only it was easier to find things for my kids to do that support their education”</i></li>
                  <li>I want to be prepared <i>“I want to do more crafting with my kids but I’m not creative”</i></li>
                </ul>
              </div>
            </div>
          </article>

          <article class="media">
            <div class="media-left is-quarter">
              <h5>Gifter</h5>
              <p class="light"><em>'Buyer persona'</em></p>
              <p>
                A family friend or relative. Possibly an existing ‘parent’ customer
              </p>
            </div>
            <div class="media-content">
              <div class="content">
                <h5>I want to give a good gift</h5>
                <ul>
                  <li>I want to show how much I care <i>“Finding a gift that’s good enough can be hard”</i></li>
                  <li>I want it to be quick and easy, for me and the recipient <i>“A good gift doesn’t create any work for whoever I give it to”</i></li>
                </ul>
              </div>
            </div>
          </article>

          <article class="media">
            <div class="media-left is-quarter">
              <h5>Child</h5>
              <p class="light"><em>'User persona'</em></p>
              <p>
                The box experience is all about the children. If they enjoy it, this drives the decision to remain subscribed
              </p>
            </div>
            <div class="media-content">
              <div class="content">
                <h5>I want to be entertained</h5>
                <ul>
                  <li>I want to do what I’ve seen my friends do / seen on TV (YouTube) / done at school</li>
                </ul>
              </div>
            </div>
          </article>

          <br>

          <div class="figure-container max-50">
            <figure class="image is-1by1 single-image">
              <img class="lazyload" data-src="./img/projects/onboarding/Users.jpg">
            </figure>
            <figcaption>
              The moment the child receives the box, personalised with their name, is a pivotal emotional high point in the toucanBox experience
            </figcaption>
          </div>

          <!-- <p class="pullout-quote">
            “We mostly interact with the adults, but the children are our true customers”
          </p>
          <p class="pullout-attribution">Paul Cook, toucanBox CMO</p> -->
          <p>
            This project focused on acquiring new customers. For that reason it primarily addresses the experience of adults.
            Chapter 2 <em>“Increasing satisfaction with a personalised experience”</em> is concerned with retaining those new customers and addresses the needs of both adult and child.
            <router-link :to="{ name: 'personalisation', params: {} }">See Chapter 2 <i class="icon-right-open-big full-opacity footer-icon"></i></router-link>
          </p>

          <br class="extra">

          <h2 class="subtitle ">Supporting data</h2>

          <h3>Quantitative</h3>
          <dl>
            <dt>I gathered data from Google Analytics, Hotjar and customer service cases:</dt>
            <dd><strong>75%</strong> of users accessed the website on mobile (~5% on tablet and ~20% on desktop). This rose to 85% of users in Q3 2018</dd>
            <dd><strong>30 seconds</strong> was the average time spent on the homepage / landing page</dd>
            <dd><strong>75%</strong> of landing page users didn’t scroll far enough to see important information (detailed description, product packshot, price)</dd>
            <dd>Existing customers would frequently route: search engine → homepage → log in to their accounts</dd>
            <dd><strong>Exit rates on the sign up form were unexpectedly high</strong>, a significant proportion of which occurred near the end of the form, at the payment section</dd>
            <dd>Many of the exits from the sign up form went <strong>back to the homepage</strong> rather than dropping out entirely</dd>
            <dd>A small but significant segment of trialists did not understand that toucanBox was <strong>a subscription service</strong> with ongoing deliveries</dd>
          </dl>
          <br>
          <h3>Qualitative</h3>
          <dl>
            <dt>Interviewing customers provided me with further insight into their expectations and needs. I recorded standout and commonly occuring comments:</dt>
            <dd><i>“I want to see more of what’s inside the box”</i></dd>
            <dd><i>“I read the title, look at the pictures and then look for the price”</i></dd>
            <dd><i>“It’s fun, I can see it’s for kids”</i></dd>
            <dd><i>“I didn’t realise you had three box sizes”</i></dd>
            <dd><i>“I thought it was just a free craft box, why do you need my billing details?”</i></dd>
            <dd><i>“This is the sign up form, I’m not ready for that yet”</i></dd>
            <dd><i>“I can’t see whether the discount code is applied, that’s worrying”</i></dd>
          </dl>
        </div>
        <br>

      </div>

      <div class="page-glass-divider">
        <h1>Definition</h1>
      </div>

      <div class="page-glass-section">
        <div class="content">
          <h2>Analysis</h2>
          <p>
            Based on these insights and a study of similar websites, I mapped the pros and cons of our homepage and sign up flow.
            I also spoke with toucanBox’s previous freelance design and development team.
            Their feedback is incorporated in the analysis.
          </p>

          <div class="figure-container">
            <figure class="image is-2by1 single-image zoomable" @click="showImage('./img/projects/onboarding/Analysis.png', 'is-2by1')">
              <img class="lazyload" data-src="./img/projects/onboarding/Analysis.png">
              <button class="button white-button is-rounded image-zoomer" aria-haspopup="true"><span class="icon is-small"><i class="icon-zoom-in full-opacity"></i></span></button>
            </figure>
            <figcaption>
              Pros and cons of the four pre-goal funnel stages; landing page, product choice, details form and review.
            </figcaption>
          </div>

          <br>

          <div class="figure-container">
            <figure class="image is-16by9 single-image zoomable" @click="showImage('./img/projects/onboarding/Journey.png', 'is-16by9')">
              <img class="lazyload" data-src="./img/projects/onboarding/Journey.png">
              <button class="button white-button is-rounded image-zoomer" aria-haspopup="true"><span class="icon is-small"><i class="icon-zoom-in full-opacity"></i></span></button>
            </figure>
            <figcaption>
              Mapping the customer acquisition journey; yellow star indicators show potential areas of improvement
            </figcaption>
          </div>

          <br>

          <h2>Goals</h2>
          <p class="pullout-quote is-left">
            “Increase funnel conversion rate”
          </p>

          <p>
            I broke down the overarching project goal into six focus areas under two themes:
          </p>

          <div class="columns" style="margin-bottom: 1.5em;">
            <div class="column">
              <table class="table">
                <thead>
                  <tr>
                    <th>Make it clear</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Refine the toucanBox value proposition and produce optimised content which communicates it</td>
                  </tr>
                  <tr>
                    <td>Improve the information architecture of the homepage and present the most important content first</td>
                  </tr>
                  <tr>
                    <td>Ensure that the homepage is able to translate the marketing message of “free craft box” into full customer understanding that “toucanBox is a craft box subscription you can try for free”</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="column">
              <table class="table">
                <thead>
                  <tr>
                    <th>Make it easy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Enable comparison between the three product types &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
                  </tr>
                  <tr>
                    <td>Address worry regarding price and discounts by providing clear and timely feedback about the state of each</td>
                  </tr>
                  <tr>
                    <td>Build confidence throughout the funnel with excellent useability</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>

      <div class="page-glass-divider">
        <h1>Iteration</h1>
      </div>

      <div class="page-glass-section">

        <div class="content">
          <h2>Ideation</h2>
          <h3>Homepage and box information architecture</h3>
          <p>Creating tree views of the homepage and craft boxes helped me to focus discussion on the hierarchy of content, iterate quickly and build consensus among internal stakeholders in the Marketing and Leadership teams.</p>
        </div>

        <div class="columns">

          <div class="column">
            <div class="content">
              <h6>Homepage information architecture</h6>
            </div>
            <ul class="tree">
              <li> <a>Header</a>
                <ul>
                  <li><a>Brand</a></li>
                  <li><a>Navigation Menu</a></li>
                  <li><a>Login</a></li>
                </ul>
              </li>
              <li> <a>'Main stage'</a>
                <ul>
                  <li><a>Main title and short description</a></li>
                  <li><a>Lifestyle image</a></li>
                  <li><a>Play video button</a></li>
                  <li><a>CTA</a></li>
                </ul>
              </li>
              <li> <a>Extended description</a>
                <ul>
                  <li><a>toucanBox in three headings</a></li>
                </ul>
              </li>
              <li> <a>Product section</a>
                <ul>
                  <li> <a>Three box sizes</a>
                    <ul>
                      <li><a><strong>Box details</strong></a></li>
                      <li><a>Box size specific CTA</a></li>
                      <li><a>Box specific discount code input</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li> <a>How it works</a> </li>
              <li> <a>Look inside a box</a> </li>
              <li> <a>Community</a>
                <ul>
                  <li><a>Testimonials</a></li>
                  <li><a>Social media images</a></li>
                  <li><a>Awards</a></li>
                  <li><a>Featured in</a></li>
                </ul>
              </li>
              <li> <a>Bottom CTA</a> </li>
              <li> <a>Footer</a> </li>
            </ul>
          </div>

          <div class="column">
            <div class="content">
              <h6>Craft box detailed information architecture </h6>
            </div>
            <ul class="tree">
              <li><a>Packshots</a></li>
              <li><a>Box size names (Petite, Grande, Super)</a></li>
              <li> <a>Main details</a>
                <ul>
                  <li><a>Number of craft activities</a></li>
                  <li><a>Price and postage</a></li>
                  <li> <a>Delivery frequency</a>
                    <ul>
                      <li><a>Fortnightly delivery</a></li>
                      <li><a>Monthly delivery</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li> <a>Differentiated supporting details</a>
                <ul>
                  <li> <a>Petite</a>
                    <ul>
                      <li><a>Activity magazine</a></li>
                      <li><a>Fits through the letterbox</a></li>
                      <li><a>Bonus activity to reuse the box</a></li>
                    </ul>
                  </li>
                  <li> <a>Grande</a>
                    <ul>
                      <li><a>A themed reading book</a></li>
                      <li><a>Add a sibling to this box with extra materials</a></li>
                    </ul>
                  </li>
                  <li> <a>Super</a>
                    <ul>
                      <li><a>A themed reading book</a></li>
                      <li><a>Add a sibling to this box with extra materials</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li> <a>Non-differentiated supporting details</a>
                <ul>
                  <li><a>Illustrated instructions</a></li>
                  <li><a>Stickers to collect</a></li>
                  <li><a>The toucan-tracker to track educational progress</a></li>
                  <li><a>A parent card with learning guides and ideas</a></li>
                </ul>
              </li>
            </ul>
          </div>

        </div>

        <div class="content">
          <h3>Value proposition brainstorm</h3>

          <p>I ran a collaborative process to pool our thinking and distill our value proposition into three digestible headings. We used our new mission statement as a starting point:</p>

          <div style="text-align: center;">
            <article class="media" style="display: inline-flex; margin-top: 1em;">
              <figure class="media-left">
                <p class="image is-128x128">
                  <img class="lazyload" data-src="./img/projects/onboarding/Box-brainstorm.png">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p class="pullout-quote is-left" style="transform: translateY(-50%); position: relative; top: 58px; display: inline-block;">“Unlocking your creativity one box at a time”</p>
                </div>
              </div>
            </article>
          </div>

          <p>
            During the process I realised that we were confusing how the service works with what it offers.
            Of course, it’s great that toucanBox is delivered to your door, but that’s not a fundamental purchase motivation.
            To clarify this point we sorted the headings into two categories: ‘Why toucanBox?’ and ‘How it works.’
          </p>

          <div class="columns" style="margin-bottom: 0;">
            <div class="column">
              <table class="table">
                <thead>
                  <tr>
                    <th>Why toucanBox</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Personalised</td>
                  </tr>
                  <tr>
                    <td>Educational </td>
                  </tr>
                  <tr>
                    <td>Quality time</td>
                  </tr>
                  <tr>
                    <td>Everything you need</td>
                  </tr>
                  <tr>
                    <td>Hands on</td>
                  </tr>
                  <tr>
                    <td>Gender neutral</td>
                  </tr>
                  <tr>
                    <td>Fun</td>
                  </tr>
                  <tr>
                    <td>Creative, imaginative</td>
                  </tr>
                  <tr>
                    <td>Convenient</td>
                  </tr>
                  <tr>
                    <td>Developed by education experts</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="column">
              <table class="table">
                <thead>
                  <tr>
                    <th>How it works</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>No commitment</td>
                  </tr>
                  <tr>
                    <td>Flexible</td>
                  </tr>
                  <tr>
                    <td>We deliver to your door</td>
                  </tr>
                  <tr>
                    <td>3 box sizes to choose from</td>
                  </tr>
                  <tr>
                    <td>Personalised with your child’s name</td>
                  </tr>
                  <tr>
                    <td>Create a masterpiece</td>
                  </tr>
                  <tr>
                    <td>A new theme every time</td>
                  </tr>
                  <tr>
                    <td>Cancel any time</td>
                  </tr>
                  <tr>
                    <td>Take the child personality quiz</td>
                  </tr>
                  <tr>
                    <td>Games and free content online</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br>
          <p>
            In our discussion on the homepage hierarchy, we defined a prominent slot for an extended description of the value proposition under the ‘main stage.’
            However, it was unclear whether this should be focused on Why or How.
            We debated this decision, gathered some feedback from engaged customers and reviewed similar services.
            We settled on Why because:
          </p>

          <ul>
            <li>We are offering a unique and unusual product</li>
            <li>Children’s products can be an emotive subject for parents</li>
            <li>Subscription businesses tend to work in a similar way, so there’s an established mental model which does not need to be reinforced as a priority</li>
            <li>Many similar homepages call this section ‘How it works’ but actually focus on why someone might want what’s on offer</li>
          </ul>

          <p>
            We reached a consensus on three Why headings, which we felt encapsulated our offering. Most of the other headings would naturally fit in the descriptive copy under the main headings:
          </p>

          <ol>
            <li>Educational</li>
            <li>Convenient</li>
            <li>Fun</li>
          </ol>

          <p>
            Our copywriter produced several options for the descriptive copy.  I facilitated feedback across the Company to select the version to test with customers.
          </p>

          <br class="extra">

            <h2>Prototyping</h2>
          <p>
            I sketched and iterated all sections of the acquisition funnel, applying the new information architecture and improving useability, consistency and visual design.
          </p>

          <p>
            Based on the analysis and project goals, four interface design challenges stood out to me as critical to the project’s success:
          </p>

          <br>

          <h3>1. The ‘Main Stage’</h3>
          <p>Having optimised the messaging, communicate it clearly and quickly.</p>

          <div class="figure-container">
            <figure class="image is-2by1 single-image zoomable" @click="showImage('./img/projects/onboarding/Header.png', 'is-2by1')">
              <img class="lazyload" data-src="./img/projects/onboarding/Header.png">
              <button class="button white-button is-rounded image-zoomer" aria-haspopup="true"><span class="icon is-small"><i class="icon-zoom-in full-opacity"></i></span></button>
            </figure>
            <figcaption>
              Wireframes through to high fidelity sketches of the header and ‘main stage’
            </figcaption>
          </div>

          <h3>2. The product section</h3>
          <p>Enable comparison and emphasise the differences between each box.</p>

          <div class="figure-container">
            <figure class="image is-2by1 single-image zoomable" @click="showImage('./img/projects/onboarding/Product-section.png', 'is-2by1')">
              <img class="lazyload" data-src="./img/projects/onboarding/Product-section.png">
              <button class="button white-button is-rounded image-zoomer" aria-haspopup="true"><span class="icon is-small"><i class="icon-zoom-in full-opacity"></i></span></button>
            </figure>
            <figcaption>
              Iteration of two design proposals for the mobile product section: tabbed view and compact cards (which would expand with a modal window)
            </figcaption>
          </div>

          <div class="columns" style="width: 80%; margin: 1em auto;">

            <div class="column is-one-quarter">
              <figure class="image is-1by1 single-image zoomable" @click="showImage('./img/projects/onboarding/Desktop-products.png', 'is-1by1')">
                <img class="lazyload" data-src="./img/projects/onboarding/Desktop-products.png">
                <button class="button white-button is-rounded image-zoomer" aria-haspopup="true"><span class="icon is-small"><i class="icon-zoom-in full-opacity"></i></span></button>
              </figure>
            </div>

            <div class="column">
              <p>
                The project specification called for mobile first design but I also considered the desktop and tablet experiences (~15-20% of users).
                For the product section on desktop I used a three column layout, where the larger boxes had longer columns to emphasise their higher value.
              </p>
            </div>

          </div>

          <br>

          <!-- <div class="figure-container max-40">
            <figure class="image is-1by1 single-image">
              <img class="lazyload" data-src="./img/projects/onboarding/Desktop-products.png">
            </figure>
            <figcaption>
              Mobile first design but also considering the desktop and tablet experience (~15-20% of users).
              For the product section on desktop I used a three column layout, where the larger boxes had longer columns to emphasise their higher value.
            </figcaption>
          </div> -->

          <h3>3. Header and navigation</h3>
          <p>Always visible login button, redesigned sitemap and navigation.</p>

          <div class="columns" style="width: 60%; margin-left: auto; margin-right: auto;">
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/onboarding/Code-landing.png">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/onboarding/Menu.png">
              </figure>
            </div>
          </div>
          <div class="figure-container" style="margin-top: -2em">
            <figcaption>
              The right-oriented, persistent login button fades out as the menu slides in
            </figcaption>
          </div>
          <br>

          <h3>4. Discount code status indicator</h3>
          <p>Clear feedback of discount and price status.</p>

          <div class="columns">
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/onboarding/Code.png">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/onboarding/Order-summary.png">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/onboarding/Keep-going.png">
              </figure>
            </div>
          </div>

          <div class="figure-container" style="margin-top: -2em">
            <figcaption>
              A reassuring and customisable message that the trial offer is applied follows users through the homepage and details form steps
            </figcaption>
          </div>

          <p>Trialist mode is activated when the user enters a valid discount code or if they arrived from a paid marketing source with a URL embedded code.</p>

          <br>


          <!-- <h2>Test and iterate</h2> -->

          <!-- <div class="columns">
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/onboarding/header-static.jpg">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/onboarding/product-static.jpg">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/onboarding/nav-static.jpg">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/onboarding/video-static.jpg">
              </figure>
            </div>
          </div> -->

          <h2>Lessons from user testing</h2>

          <p>
            I ran the useability testing of the new acquisition funnel with internal stakeholders and external testers using an inVision prototype.
          </p>

          <h3>Homepage</h3>

          <table class="table">
            <thead>
              <tr>
                <th>Observation</th>
                <th>Remedy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>“How do I close this?”</em> External testers expected the product details popup modal to have a close button at the top as well as the bottom</td>
                <td>In addition to the existing close button, I added one at the top of the modal</td>
              </tr>
              <tr>
                <td><em>“I’ll use the menu to learn more”</em> A surprisingly high number of testers attempted to use the navigation menu to gain an understanding of the offering, rather than scrolling. They found the options unsatisfying or confusing</td>
                <td>I added links to the main navigation, pointing at separate pages that mirrored content from the homepage</td>
              </tr>
              <tr>
                <td>Internal testers requested an always-visible main navigation on desktop (i.e. not behind a burger button)</td>
                <td>I had avoided this for expediency but quickly realised I wasn’t meeting an important user expectation for desktop website navigation</td>
              </tr>
              <tr>
                <td>The view rate for the toucanBox promotional video did not increase, even though I had increased the prominence of the video button</td>
                <td>I didn’t want to increase the prominence of the video button further because it risked competing for attention with the main call to action. For desktop, I added an autoplay looping montage video cut from the promotional video footage (to be loaded asynchronously)</td>
              </tr>
            </tbody>
          </table>

          <h3>Funnel</h3>

          <table class="table">
            <thead>
              <tr>
                <th>Observation</th>
                <th>Remedy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>“I expected siblings would always cost £1 extra?”</em> Testers reported that the messaging regarding the trial offer for siblings (additional children) was unclear. The existing copy could imply that each additional child would always cost £1, not just for the first delivery</td>
                <td>I worked with our copywriter to address this</td>
              </tr>
              <tr>
                <td><em>“I can’t be sure how much I’m paying.”</em> Testers mentioned that it felt frightening to click the ‘authorise payment’ button on the details form</td>
                <td>I added a mini order summary next to the payment/paypal button titled 'What You're Paying Today'</td>
              </tr>
              <tr>
                <td><em>“If I wanted to send toucanBox to two different addresses, how would I do that?”</em> It became clear that our system was not well suited to gifters. The copy, interface and even the back-end data model was not tailored to their needs</td>
                <td>This was good feedback but the issue was out of the scope of this project. I made sure it was communicated to the Leadership Team and suggested a future project to resolve the issue.</td>
              </tr>
              <tr>
                <td><em>“I don’t remember making a password, now I need one to log in?”</em> We were aware that by not requiring a password we were adding to customer service volume as approximately 15% of trialists didn’t make a password after completing sign up</td>
                <td>I recognised that detailed analysis would be needed to understand the conversion rate impact of moving the password field into the details form. In this project I decided not to change the password field location. However, I added a sister link to “forgotten your password?” on the login page - “Not created a password yet?”</td>
              </tr>
            </tbody>
          </table>
          <br>
          <p>
            Shortly after the conclusion of this phase of testing, we introduced a £1 delivery fee for most trialists (previously totally free) - this allowed me to simplify our messaging by providing a natural reason for us to require payment information at sign up.
          </p>

        </div>

      </div>

      <div class="page-glass-divider">
        <h1>Production</h1>
      </div>

      <div class="page-glass-section">

        <div class="content">
          <p>
            Further evaluation of the new design could only be achieved through live metrics. These needed to be measured in production.
          </p>

          <blockquote>
            Middleman static site generator (ERB) | Sinatra framework (ERB, Ruby) | JQuery | Vue.js | SCSS
          </blockquote>

          <p>
            I worked closely with our developers to tune the input validations and feedback messages on the details form. Under some circumstances, users from paid marketing channels with URL embedded discount codes could lose it while browsing the site. We solved this issue by switching to a session-based system.
          </p>


          <!-- <div class="figure-container">
            <figure class="image is-16by9 single-image">
              <img class="lazyload" data-src="https://bulma.io/images/placeholders/640x360.png">
            </figure>
            <figcaption>
              Abbreviated video of the acquisition funnel
            </figcaption>
          </div> -->

          <p>
            Our custom Ruby codebase and the difficulty in recruiting Ruby developers in London combined to make developer resource the tightest bottleneck for toucanBox. Equally, our developers shared a relative weakness in front-end CSS and JS.
          </p>

          <p>
            In order to act quickly, I slotted into the role of front-end developer to build the new homepage and make design improvements throughout the funnel.
          </p>

          <div class="figure-container">
            <figure class="image is-2by1 single-image zoomable" @click="showImage('./img/projects/onboarding/Styles.png', 'is-2by1')">
              <img class="lazyload" data-src="./img/projects/onboarding/Styles.png">
              <button class="button white-button is-rounded image-zoomer" aria-haspopup="true"><span class="icon is-small"><i class="icon-zoom-in full-opacity"></i></span></button>
            </figure>
            <figcaption>
              To increase my efficiency and that of the whole team, I created and maintained a style guide of UI components and design guidelines (with corresponding html snippets) as I developed the front end
            </figcaption>
          </div>

        </div>

      </div>

      <div class="page-glass-divider">
        <h1>Evaluation</h1>
      </div>

      <div class="page-glass-section last-section">

        <div class="content">
          <h3>What went well?</h3>
          <p>
            <strong>25%</strong> estimated cumulative average increase in conversion rate.
          </p>
          <p>
            I A/B tested changes as they were released. There were challenges in measuring the long-term impact of each change (including phased releases, seasonal fluctuations and incomplete historical data). The estimate of impact is therefore conservative.
          </p>
          <p>
            Top three changes contributing most to the overall conversion rate increase:
          </p>
          <ol>
            <li>Input validation and useability improvements in the details form (confidence)</li>
            <li>Header, navigation and ‘main stage’ design update (communication, value proposition)</li>
            <li>Mini order summary before authorising payment (confidence)</li>
          </ol>
          <p>
            <strong>35%</strong> average drop in homepage load time - I introduced svg sprite-sheets, mobile-to-desktop enhancement and lazy loading.
          </p>
          <p>
            <strong>20%</strong> reduction in the number of customer service cases in which customers didn’t realise they signed up to a subscription with ongoing payments.
          </p>
          <h3>What didn’t go so well?</h3>
          <p>I was the only full-time member of the project team; coordinating the research, executing the design process, writing front-end code, planning tests and shipping releases. We were a small team with many competing priorities and a limited budget. This meant a delay between identifying the problems and releasing the improvements.</p>
          <p>We addressed this problem in early 2018 by hiring a dedicated front-end developer, thereby creating a distinction for which I had been advocating between web development and product design.</p>
          <h3>The future</h3>
          <p>Notable projects which followed on a similar theme include:</p>
          <ul>
            <li>Expanding the About Us section, delving deeper into our core values</li>
            <li>Introducing a Blog with free online content for SEO</li>
            <li>In Q1 2018, we changed the value proposition by phasing out the larger boxes and increasing the emphasis on our activity magazine. Correspondingly, I redesigned the product section of the homepage.</li>
          </ul>
        </div>

      </div>
    </template>

    <template slot="footer-content">
      <div class="container case-study page-footer-container">
        <div class="columns">
          <div class="column content link-container">
            <h3>toucanBox</h3>
            <p>toucanBox homepage snapshot from March 2018</p>
            <div class="links-container">
              <a href="http://toucanwww.herokuapp.com" target="_blank" class="button is-primary is-rounded is-inverted is-outlined">
                View site
                <i class="icon-right-open-big full-opacity footer-icon"></i>
              </a>
              <a href="https://www.toucanbox.com" target="_blank" class="other-link">View current site</a>
            </div>
          </div>
          <div class="column is-three-quarters">
            <figure class="image is-16by9"><img class="lazyload" data-src="/img/project-presentations/combined_onboarding.png"></figure>
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
  },
  methods: {
    showImage (imageUrl, imageAspectClass) {
      this.$modal.show('image-modal', { url: imageUrl, aspect: imageAspectClass })

    },
    hideImage () {
      this.$modal.hide('image-modal');
    }
  }
}
</script>

<style scoped lang="sass">

  @import '../sass/variables'


</style>
