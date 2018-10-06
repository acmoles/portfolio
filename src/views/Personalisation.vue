<template>
  <WorkWrapper
    :project="'personalisation'"
    :icon="'/img/homepage/project-icons/personalised.svg'"
    :color="'green'"
  >
  <template slot="titles">
    <div class="content">
      <h1 class="project-title">Increasing satisfaction with a personalised experience</h1>
      <p class="client green">toucanBox chapter 2</p>
    </div>
  </template>

  <template slot="content">
    <div class="page-glass-section first-section">
      <div class="content">
        <p>toucanBox is a craft box subscription for children aged 3 - 8. Each box contains all the materials needed to complete a craft project, with illustrated instructions, stickers to collect and an activity magazine. The child's name is printed on the front
          of the box and there's a personalised message inside.
        </p>
        <p>I worked with toucanBox from April 2016 to September 2018, initially as R&amp;D Manager, later moving into a full-time product role in the Technology Team. This was initially composed of myself and one developer. By Q1 2018 we had grown by four developers,
          releasing me from coding responsibilities to focus on product design and strategy.
        </p>
        <p>To get a full introduction to toucanBox you can read the first segment of toucanBox chapter 1 "Refining the value proposition"
          <a href="/onboarding">See Chapter 1 <i class="icon-right-open-big full-opacity footer-icon"></i></a>
        </p>
        <p>In January 2018 toucanBox held business-wide workshops to set the vision for the year ahead. Some of the themes we discussed would inspire my product strategy for 2018. In particular, the workshops highlighted that toucanBox had become effective at
          acquiring new customers. Our next step was to make customers even happier with our service, encouraging them to stay longer.
        </p>

        <p>
          <i class="faded">
            I have omitted confidential information in this case study. All information and images are my own unless stated otherwise.
          </i>
        </p>

        <br>
        <blockquote>
          <p>
            <strong>Product:</strong> User accounts
          </p>
          <p>
            <strong>Brief:</strong> Identify and explore the opportunity with the greatest potential to increase customer satisfaction and retention
          </p>
        </blockquote>

        <br>

        <div class="columns" style="margin-bottom: 0;">
          <div class="column">
            <table class="table is-clear">
              <thead>
                <tr>
                  <th>Project team</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product Designer (me)</td>
                </tr>
                <tr>
                  <td>Frontend developer</td>
                </tr>
                <tr>
                  <td>Data analyst</td>
                </tr>
                <tr>
                  <td>Project manager</td>
                </tr>
                <tr>
                  <td>Stakeholders in Marketing, Creative and Operations</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="column">
            <table class="table is-clear">
              <thead>
                <tr>
                  <th>My role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product strategy and vision</td>
                </tr>
                <tr>
                  <td>Planning and scope definition</td>
                </tr>
                <tr>
                  <td>Customer insights and ideation</td>
                </tr>
                <tr>
                  <td>Prototyping and design iteration</td>
                </tr>
                <tr>
                  <td>Development coordination and oversight</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>

    <div class="page-glass-divider">
      <h1>Product Strategy</h1>
    </div>

    <div class="page-glass-section">

      <div class="content">
        <h2>Design principles</h2>
        <p>During Q1 2018 I conducted a series of in-house customer interviews. These consisted of both broad market research questions and useability testing all aspects of the website.</p>

        <p>
          I also collected data insights and anecdotal feedback from across the business - customer service, website analytics, net promoter score (NPS), customer surveys and production database - sometimes asking new questions of our data to fill the gaps (including
          writing a few database queries of my own).
        </p>

        <div class="figure-container">
          <figure class="image is-2by1 single-image zoomable" @click="showImage('./img/projects/personalisation/Design-principles.png', 'is-2by1')">
            <img class="lazyload" data-src="./img/projects/personalisation/Design-principles.png">
            <button class="button white-button is-rounded image-zoomer" aria-haspopup="true"><span class="icon is-small"><i class="icon-zoom-in full-opacity"></i></span></button>
          </figure>
          <figcaption>
            toucanBox design principles
          </figcaption>
        </div>


        <p>In a technique inspired by the product agency <a href="https://www.madebymany.com/" target="_blank">Made By Many</a>, I then summarised customer quotes and supporting data into six 'product Design Principles,' each with suggested ideation starting points:</p>
        <ol>
          <li>Easy</li>
          <li>Clear</li>
          <li>Trustworthy</li>
          <li>Open</li>
          <li>Personalised</li>
          <li>Flexible</li>
        </ol>

        <p>In the previous year we had worked hard on four of the themes: Easy, Clear, Open and Trustworthy with an overhaul of the acquisition funnel and more help and information on the website. </p>

        <p>
          The two other themes, Flexible and Personalised, offered five promising starting points to increase customer satisfaction. Working with the leadership team, I evaluated these according to their estimated impact and the ease with which they could be
          implemented. The rationale behind the ratings is confidential to toucanBox.
        </p>

        <table class="table">
          <thead>
            <tr>
              <th>
                <p>Theme</p>
              </th>
              <th>
                <p>Description</p>
              </th>
              <th>
                <p>Impact</p>
              </th>
              <th>
                <p>Ease</p>
              </th>
              <th>
                <p>Total</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Flexibility</p>
              </td>
              <td>
                <p>Subscription plans with different delivery frequencies and craft quantities</p>
              </td>
              <td>
                <p>9</p>
              </td>
              <td>
                <p>3</p>
              </td>
              <td>
                <p>12</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Personalisation</p>
              </td>
              <td>
                <p>Choice and preferences have an impact on the subscription experience</p>
              </td>
              <td>
                <p>8</p>
              </td>
              <td>
                <p>2</p>
              </td>
              <td>
                <p>10</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Flexibility</p>
              </td>
              <td>
                <p>Prepaid and time limited subscriptions</p>
              </td>
              <td>
                <p>7</p>
              </td>
              <td>
                <p>2</p>
              </td>
              <td>
                <p>9</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Flexibility</p>
              </td>
              <td>
                <p>Granular control over deliveries (pause, skip, subscription holidays, specific days or weeks)</p>
              </td>
              <td>
                <p>5</p>
              </td>
              <td>
                <p>2</p>
              </td>
              <td>
                <p>7</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Flexibility</p>
              </td>
              <td>
                <p>Improved gifting experience for giver and receiver</p>
              </td>
              <td>
                <p>6</p>
              </td>
              <td>
                <p>1</p>
              </td>
              <td>
                <p>7</p>
              </td>
            </tr>
          </tbody>
        </table>

        <p>The scores suggested that we should further explore two options: subscription plan flexibility and subscription personalisation.</p>

        <h3>Testing subscription plans</h3>
        <p>
          Offering our customers subscription plans was an attractive option; it would allow them to easily opt in to more of our product if they wanted to. The additional flexibility might also increase our customers' satisfaction and loyalty.
        </p>

        <p>The majority of toucanBox subscribers were on the smallest box size delivered fortnightly, which was the focus of our marketing activity. We tried adding a choice of subscription plan for trialists acquired through paid marketing. </p>

        <p>
          Users in the test group saw a redesigned sign up flow, optimised for capturing additional details, such as a choice of subscription plans. As part of the design process, I built a high fidelity prototype for user testing.
          <a href="http://signup-prototype.herokuapp.com" target="_blank">See the prototype <i class="icon-right-open-big full-opacity footer-icon"></i></a>
        </p>

        <p>I worked with developers to build a variant for testing with live users. We A/B tested all digital marketing traffic for two weeks, measuring the behaviour of the test and control groups.</p>

        <div class="figure-container">
          <figure class="image is-9by16 single-image">
            <iframe class="lazyload" data-src="https://player.vimeo.com/video/293190532" width="640" height="1138" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </figure>
          <figcaption>
            User testing a subscription plans design iteration
          </figcaption>
        </div>

        <h4>Results</h4>
        <p>
          The test group exhibited higher retention rates over three months and a proportion opted for the higher value plans. However, the funnel conversion rate was lower, with the greatest drop-off at the choice step. This resulted in lower volumes, with a
          correspondingly higher cost-per-lead. Additionally, some users opted for a lower value plan to the default in the control group. This meant an overall lower lifetime value for the test group.
        </p>

        <p>
          We learnt an important lesson from this project; the user disposition at sign up is "I'm trying this out," which is not generally compatible with additional choice. Where choice is given, they tend to opt for the lowest upfront commitment.
        </p>

        <h3>Reconsidering the approach</h3>
        <p>Prior to this project we released a feedback mechanism in customer accounts, through which they could rate past boxes. This saw saw high engagement and produced actionable feedback.</p>

        <p>
          The success of 'rate my box' was part of the inspiration for the personalisation starting point; what if customers could make choices and add preferences (like a rating) which would influence which craft boxes we sent (and how many)? It also proved
          that activated customers would log in to their accounts to interact with a new feature. Previously, I had seen user accounts as solely focused on subscription management. > Now it was clear that it could be a canvas for retention-oriented features.
        </p>

        <p>
          Subscription plans offered customers more control over how much. Personalisation would offer more control over what and how much >. My analysis helped build consensus in the leadership team that an exploration of personalisation was the most promising
          route to increasing customer satisfaction.
        </p>

      </div>

    </div>

    <div class="page-glass-divider">
      <h1>Definition</h1>
    </div>

    <div class="page-glass-section">

      <div class="content">
        <p>I considered personalisation using three lenses: Customer, Technical and Business.</p>
        <h2>Customer Lens</h2>
        <p>"Getting the right craft box to the right customer in the right quantity"</p>
        <ul>
          <li>Choosing crafts and adding preferences (like craft theme, age range, materials) were the two most commonly requested features in surveys and customer interviews</li>
          <li>We consistently received positive feedback about the name printed on the box and personalised message inside</li>
          <li>We realised that a large number of special requests and complaints could be addressed by offering the possibility of adding preferences</li>
        </ul>

        <div class="figure-container">
          <figure class="image is-2by1 single-image">
            <img class="lazyload" data-src="./img/projects/personalisation/Users-colour.jpg">
          </figure>
          <figcaption>
            &quot;Embark on a crafting journey, made for your child, where you are in control&quot;
          </figcaption>
        </div>

        <h2>Technical and Operational Lens</h2>
        <p>toucanBox possessed a strong technological advantage; the ability to algorithmically allocate craft boxes based on inventory, customer history, child age and other data. The foundational system required to offer more personalisation was already in place.</p>

        <div class="figure-container">
          <figure class="image is-16by9 single-image">
            <img class="lazyload" data-src="./img/projects/personalisation/Warehouse.jpg">
          </figure>
          <figcaption>
            The toucanBox factory at Heathrow. Photo credit: toucanBox Operations Team
          </figcaption>
        </div>

        <h2>Business Lens</h2>
        <p>A personalised experience would mean a unique advantage over our competitors in arts and crafts retail:</p>
        <ul>
          <li>It has the potential to increase customer satisfaction</li>
          <li>We have technology and operations which are difficult to duplicate</li>
          <li>We have direct access to our customers through email and their online accounts</li>
          <li>We have short lead times and can respond to feedback and preferences</li>
        </ul>

        <h2>Goals</h2>
        <p class="pullout-quote is-left">
          "Identify and explore the opportunity with the greatest potential to increase customer satisfaction and retention"
        </p>
        <p>Having established personalisation as the focus for design exploration, I defined three detailed goals:</p>
        <ul>
          <li>Generate and prioritise ideas to add personalisation to the online and offline experience</li>
          <li>Design a customer-facing web interface which enables engagement with these features</li>
          <li>Test this interface with customers and estimate the impact on satisfaction and retention</li>
        </ul>

      </div>

    </div>

    <div class="page-glass-divider">
      <h1>Iteration</h1>
    </div>

    <div class="page-glass-section">

      <div class="content">
        <h2>Ideation</h2>
        <h3>What can be personalised?</h3>
        <p>Personalisation had been a topic of discussion for some time at toucanBox, in a range of projects and contexts. I employed two strategies to collate our ideas: brainstorming with representatives from each team and reviewing existing project specifications
          and documents.
        </p>

        <p>We gave ratings of perceived &lsquo;strength' and relative &lsquo;ease' to each idea.</p>

        <table class="table is-clear">
          <thead>
            <tr>
              <th>
                <p>Ease of implementation</p>
              </th>
              <th>
                <p>Idea strength</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Technical ease to build the feature 1 - 5 Operational ease for fulfillment 1 - 5</p>
              </td>
              <td>
                <p>Frequency of idea occurrence 1 - 5</p>
                <p>Idea rated internally 1 - 5</p>
              </td>
            </tr>
          </tbody>
        </table>

        <p>I merged similar ideas and grouped them into eight categories:</p>

        <div class="figure-container">
          <figure class="image is-5by3 single-image">
            <img class="lazyload" data-src="./img/projects/personalisation/Rating-ideas.png">
          </figure>
          <figcaption>
            A prioritisation matrix where points represent instances of ideas under a category. Ideas not explored in this project remain confidential
          </figcaption>
        </div>

        <h3>Testing our ideas with customers</h3>
        <p>I turned our top ideas into five questions. This poll was served to all customers accessing their accounts (randomly ordered). 267 customers participated.</p>

        <div class="columns">
          <div class="column">
            <p><strong>Question: What would improve your toucanBox experience the most?</strong></p>
            <ol>
              <li>Add extra items to my box like books, comics, stickers | 24 (8.99%)</li>
              <li>Choose the craft difficulty, or set it to be age appropriate | 83 (31.09%)</li>
              <li>Choose the crafts in your next delivery | 93 (34.83%)</li>
              <li>Choose to have toucanBox in another language | 22 (8.24%)</li>
              <li>Add preferences for craft theme and materials | 45 (16.85%)</li>
            </ol>
          </div>

          <div class="column">
            <figure class="image is-1by1">
              <img class="lazyload" data-src="./img/projects/personalisation/Poll-chart.png">
            </figure>
          </div>
        </div>

        <p>
          These results indicated two main ways in which customers wanted to personalise their deliveries - either by choosing the crafts directly, or setting parameters for what constitutes <em>'good'</em> crafts (for example by age, difficulty, theme or craft
          material).
        </p>

        <h3>What is it called?</h3>
        <p>
          The next step was to turn our internal concept of <em>'personalisation'</em> into a meaningful message and value proposition for customers. I reflected on the survey results and discussed my thinking with project stakeholders. I turned the concepts into
          potential offers to customers, adding more detail to the highest ranking options from the polling.
        </p>

        <h4>Value proposition</h4>

        <dl>
          <dt>"Choose your crafts and their quantity to get exactly what you want in each box"</dt>
            <dd>"Choose the crafts for boxes several months in the future"</dd>
            <dd>"Increase or decrease the quantity of crafts to fit your needs, such as school holidays"</dd>
          <dt>"Add preferences to help us select the best crafts for your child"</dt>
            <dd>"Take out the hassle by letting us choose the best crafts for your child"</dd>
            <dd>"Tell us what to do in specific circumstances e.g. siblings"</dd>
          <dt>"Extend the toucanBox experience with books and other add-ons curated by us"</dt>
            <dd>"Choose products recommended for your child or personalised with their name"</dd>
            <dd>"Reading books thematically linked to the crafts"</dd>
        </dl>

        <p>I led the project team in brainstorming customer facing names for the feature:</p>

        <p>"Choose your crafts" | "Personalisation hub" | "Build your box" | "Upcoming boxes" | "Child profiles" | "Add your preferences" | "Tailor your subscription"</p>

        <p>We settled on 'choose your crafts' because it functioned well as a banner under which all of our personalisation offers could sit. Equally, it was the specific feature most requested by our customers, which would maximise engagement.</p>


        <h3>Where does it go?</h3>
        <p>
          It was not immediately apparent where personalisation should be placed within the existing toucanBox customer journey. I sketched diagrams to aid my thinking and facilitate discussion with > the project team.
        </p>

        <div class="figure-container">
          <figure class="image is-5by3 single-image zoomable" @click="showImage('./img/projects/personalisation/Sitemap-choice.png', 'is-5by3')">
            <img class="lazyload" data-src="./img/projects/personalisation/Sitemap-choice.png">
            <button class="button white-button is-rounded image-zoomer" aria-haspopup="true"><span class="icon is-small"><i class="icon-zoom-in full-opacity"></i></span></button>
          </figure>
          <figcaption>
            Sitemap with four possible locations for a personalisation interface
          </figcaption>
        </div>

        <article class="media">
          <div class="media-left is-quarter">
            <figure class="image is-1by2">
              <img class="lazyload" data-src="./img/projects/personalisation/1-In-signup.png">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <strong style="margin-bottom: -0.5em; display: block;">1. Part of sign up</strong>
              <dl>
                <dd>+ All customers see it</dd>
                <dd>+ Fits with child details section</dd>
                <dd>+ Could be optional, thereby advertising the feature to new customers</dd>

                <dd>- Could be an overwhelming amount of information for sign up</dd>
                <dd>- Might reduce conversion rate (as in our previous test)</dd>
              </dl>
            </div>
          </div>
        </article>

        <article class="media">
          <div class="media-left is-quarter">
            <figure class="image is-1by2">
              <img class="lazyload" data-src="./img/projects/personalisation/2-end-signup.png">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <strong style="margin-bottom: -0.5em; display: block;">2. Immediately after sign up</strong>
              <dl>
                <dd>+ No effect on conversion rate - naturally optional</dd>
                <dd>+ Shown to all customers</dd>
                <dd>+ Fastest to implement and test</dd>

                <dd>- Only relevant for the trial box. Customers can't return and add choice or preference later</dd>
                <dd>- Might distract from other important data we capture on this screen such as adding a password</dd>
              </dl>
            </div>
          </div>
        </article>

        <article class="media">
          <div class="media-left is-quarter">
            <figure class="image is-1by2">
              <img class="lazyload" data-src="./img/projects/personalisation/3-new-page.png">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <strong style="margin-bottom: -0.5em; display: block;">3. A new interface in customer accounts</strong>
              <dl>
                <dd>+ Focused interface for personalisation</dd>
                <dd>+ Encouraging evidence of high engagement with new account features (e.g. &lsquo;Rate your box')</dd>

                <dd>- Any similarities with 'manage subscriptions' might cause confusion</dd>
              </dl>
            </div>
          </div>
        </article>

        <article class="media">
          <div class="media-left is-quarter">
            <figure class="image is-1by2">
              <img class="lazyload" data-src="./img/projects/personalisation/4-manage.png">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <strong style="margin-bottom: -0.5em; display: block;">4. Part of the manage subscriptions interface</strong>
              <dl>
                <dd>+ Customers already go here to make changes to their children's subscriptions</dd>

                <dd>- The 'manage subscriptions' page serves an important purpose. It is risky to dilute its functionality with unproven test features</dd>
              </dl>
            </div>
          </div>
        </article>

        <p>
          For the purposes of this project and in the spirit of testing and minimum viable product (MVP) I decided to pursue option three and isolate the personalisation interface from subscription management and sign up >. It would have its own page in user's
          accounts, which could be promoted from various sources such as the sign up success page, email and printed media.
        </p>

        <p>Future projects on this theme could incorporate personalisation into subscription management as part of an overhaul of the user account application.</p>


        <h3>What do preferences and craft choice mean in practice?</h3>
        <p>I turned the team's ideas for choice and personalisation into information architecture which could be implemented on the website. This involved reconciling the top ideas with our data model and sketching architecture options using tree diagrams.</p>


        <div class="columns">

          <div class="column">
            <div class="content">
              <h6>Child preferences <em>'card'</em>:</h6>
            </div>
            <ul class="tree">
              <li><a>Children</a>
              <ul>
                <li><a>Name, age</a></li>
                <li><a>Avatar (pre-select 'random' avatar which can be edited) &rarr; </a></li>
                <li><a>Child 'Preferences'</a>
                  <ul>
                    <li><a>Age / difficulty</a></li>
                    <li><a>Language</a></li>
                    <li><a>Child personality + quiz &rarr; </a></li>
                    <li><a>Theme preferences, material preferences, crafting preferences &rarr; </a></li>
                    <li><a>rate previous crafts &rarr; </a></li>
                  </ul>
                </li>
              </ul>
              </li>

              <li><a>Choose your box / send soon</a>
                <ul>
                  <li><a>Select your next crafts</a></li>
                  <li><a>Add more crafts to your delivery</a></li>
                </ul>
              </li>

              <li><a>Add-ons</a>
                <ul>
                  <li><a>Books etc.</a></li>
                  <li><a>Personalised products</a></li>
                </ul>
              </li>

              <li><a>Add child (add subscription)</a></li>

              <li><a>Account preferences</a>
                <ul>
                  <li><a>Same boxes for siblings</a></li>
                  <li><a>End of path behaviour</a></li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="column">
            <div class="content">
              <h6>Choose crafts / add-ons</h6>
            </div>
            <ul class="tree">
              <li><a>Build your box menu</a>
                <ul>
                  <li><a>4 total slots for crafts</a>
                    <ul>
                      <li><a>Two locked slots, unlocking increases monthly bill</a></li>
                    </ul>
                  </li>
                  <li><a>4 slots for add-on items</a>
                    <ul>
                      <li><a>Books, extra materials, personalised items, stickers, limited edition items</a></li>
                    </ul>
                  </li>
                  <li><a>Box price</a></li>
                </ul>
              </li>

              <li><a>Crafts</a>
                <ul>
                  <li><a>Craft photo</a></li>
                  <li><a>Name</a></li>
                  <li><a>Rating</a></li>
                  <li><a>Look inside</a>
                    <ul>
                      <li><a>Zoomed craft photo</a></li>
                      <li><a>Extended description</a></li>
                      <li><a>Craft attributes e.g. materials, play experience, theme, craft processes, personality, messiness, eco</a></li>
                    </ul>
                  </li>
                  <li><a>Add this craft to your box</a></li>
                  <li><a>Choose these crafts next</a></li>
                  <li><a>Send soon</a></li>
                </ul>
              </li>

              <li><a>Add-ons</a>
                <ul>
                  <li><a>Photo</a></li>
                  <li><a>Name</a></li>
                  <li><a>Price</a></li>
                </ul>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>

    <div class="page-glass-divider">
      <h1>Production</h1>
    </div>

    <div class="page-glass-section last-section">

      <div class="content">
        <p>Having defined the relationship of the new feature to the existing system and the specific personalisation options we would offer, the next challenge was to establish how it would be presented to customers.</p>

        <div class="figure-container">
          <figure class="image is-2by1 single-image zoomable" @click="showImage('./img/projects/personalisation/Wireframe-flow.png', 'is-2by1')">
            <img class="lazyload" data-src="./img/projects/personalisation/Wireframe-flow.png">
            <button class="button white-button is-rounded image-zoomer" aria-haspopup="true"><span class="icon is-small"><i class="icon-zoom-in full-opacity"></i></span></button>
          </figure>
          <figcaption>
            Wireframe sketch of the 'child card' which acts as the context for preferences and choosing crafts / add-ons
          </figcaption>
        </div>

        <h3>Feedback from internal wireframe testing</h3>
        <p>I used a simple click prototype built from wireframe screens (served from Sketch Cloud) to gather initial impressions from the project team.</p>

        <table>
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
                <p>The age group preference </p>
                <ul>
                  <li>The name 'craft challenge' doesn't communicate the intent</li>
                  <li>What's advanced or junior for a 2 year old isn't the same as for a 7 > year old
                  </li>
                </ul>
              </td>
              <td>
                <p>I changed the name to 'craft level' and dispensed with the 'Age appropriate' choice, leaving a binary choice between actual age ranges 3-5 and 5-8 > years old
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Craft preferences should have an impact on the craft choices we show in the box builder screen</p>
              </td>
              <td>
                <p>I added a preferences filter on the crafts presented in the box builder screen to the project specification</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>We could allow customers to build boxes several months into the future. There should be some way to move backwards and forwards through upcoming boxes.</p>
              </td>
              <td>
                <p>I explored tabbed, paginated and scrolling interfaces in the next iterations</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Testers were unsure whether the craft or add-on they clicked was added to the box, often adding duplicates by mistake</p>
              </td>
              <td>
                <p>I made the 'box contents' interface stick to the screen scroll context, so that the results of actions were always visible, including the price changes</p>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Work in progress</h2>
        <p>The prototyping and iteration phase of this project is currently ongoing. I ran the recruitment for my replacement, briefing them on the progress as part of my handover. </p>

        <h3>An interim MVP</h3>
        <p>
          If a greater proportion of trialists would convert to paying customers because they were offered a choice of crafts in their trial box, we could infer that it was increasing their satisfaction with the service. A test like this offered the possibility
          of measuring activation rate as a proxy for retention.
        </p>

        <p>We specified a rudimentary test, which would be manually fulfilled, avoiding the need for backend engineering. This involved A/B testing a craft choice interface at the end of sign up until the desired number of 200 testers had been reached.</p>

        <h3>Prototyping continues</h3>
        <p>The results of the MVP test are pending, prototyping continued in the meantime. Below is a preview of a high fidelity interactive prototype I created for further user testing.</p>

      </div>

    </div>

  </template>

  <template slot="footer-content">
    <div class="container page-footer-container">
      <div class="columns">
        <div class="column content link-container">
          <h3>Box builder prototype</h3>
          <p>A detailed interactive prototype of the box builder interface for user testing</p>
          <div class="links-container">
            <a href="http://personalisation.herokuapp.com" target="_blank" class="button is-primary is-rounded is-inverted is-outlined">
              View prototype
              <i class="icon-right-open-big full-opacity footer-icon"></i>
            </a>
          </div>
        </div>
        <div class="column is-three-quarters">
          <figure class="image is-16by9"><img class="lazyload" data-src="/img/project-presentations/combined_personalisation.png"></figure>
        </div>
      </div>
    </div>
  </template>
  </WorkWrapper>
</template>

<script>

import WorkWrapper from '@/components/work-wrapper.vue'

export default {
  name: 'Personalisation',
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

  .button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined:focus
    color: $darkGreen


</style>
