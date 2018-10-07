is-one-quarter<template>
  <WorkWrapper
    :project="'wesen'"
    :icon="'/img/homepage/project-icons/wesen.svg'"
    :color="'red'"
  >
    <template slot="titles">
      <div class="content">
        <h1 class="project-title">Building a jewellery creation experience</h1>
        <p class="client red">Wesen</p>
      </div>
    </template>

    <template slot="content">
      <div class="page-glass-section first-section">
        <div class="content">

          <p><em class="light">
            “Wesen is where craft meets technology and customers become creators. Easy-to-use tools enable you to customise a pendant necklace. You can express your creativity, whether you’re an experienced jewellery designer or a complete beginner. Then, order your unique pendant design, bespoke manufactured using a process that blends modern and traditional techniques.”
          </em></p>

          <p>
            I remained interested in mass-customisation after Makielab was acquired by Disney. In particular, I wanted to explore the possibility of an 'open-ended' creation experience which could generate infinite variations while being intuitive and fun to use.
          </p>
          <p>
            To test this concept, I decided to build a customisable product, from concept to through to production.
          </p>

          <br>
          <blockquote>
            <p>
              <strong>Product:</strong> Customisation tool and e-commerce website
            </p>
            <p>
              <strong>Brief:</strong> Design and develop an open-ended product creation experience
            </p>
          </blockquote>

        </div>
      </div>

      <div class="page-glass-divider is-borderless">
        <h1>Discovery</h1>
      </div>

      <div class="page-glass-section">

        <div class="content">
          <h2>Market Research</h2>
          <h3>Quantitative</h3>

          <p>
            I used digital marketing tools to help choose a product category, gauge the market potential and understand what language and search terms potential customers might use.
          </p>

          <br class="extra">

          <h5>Category</h5>

          <br>

          <table class="table">
            <thead>
              <tr>
                <th>Google Keyword</th>
                <th>Autocomplete Pairings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Custom, customised, customise my...</td>
                <td>Shoes, t-shirt, stickers, passport cover, phone, car, laptop, socks, PS4/Xbox controller</td>
              </tr>
              <tr>
                <td>Personalise, personalised, personalise my...</td>
                <td>Gifts, baby gifts, mugs, phone case, medicine, <strong>necklace</strong>, keyring, football boots</td>
              </tr>
              <tr>
                <td>Design (or make) my (your) own...</td>
                <td>Clothes, shoes, hoodie, t-shirt, logo, house, <strong>ring, engagement ring,</strong> cap, furniture</td>
              </tr>
            </tbody>
          </table>

          <br>

          <p>
            Customisation-related keywords are most commonly paired with the fashion and accessories category; products linked to <strong>personal appearance and self expression.</strong> Market leaders in this category already offered custom and personalised products. Notable brands include Nike and Farfetch/Unmade.
          </p>

          <p>
            Customisable jewellery appeared to be a similar and less saturated market, although much smaller. I reflected that jewellery would have other advantages in the context of this project:
          </p>
          <ul>
            <li>Creating small, high-value objects plays to the strengths of 3D printing</li>
            <li>Customisation makes sense with personally significant objects for which being unique matters</li>
            <li>Niche markets are typically suited to ‘cottage industry’ businesses</li>
            <li>Some competitors are offering expressive design tools, but there is plenty of room for differentiation</li>
          </ul>

          <br>

          <p>
            Jewellery is available at every price point. High-value, custom or personalised products tend to be <strong>gifts</strong>. I collected relevant data on gifting and purchase behaviour from Google Trends and Google Consumer Barometer:
          </p>
          <ul>
            <li><strong>Gifting is highly seasonal:</strong> Search activity for gifts begins to ramp up from 1st November, peaking on 17th December</li>
            <li><strong>Mobile is increasingly important for e-commerce:</strong> 40% of people say they prefer to complete their entire shopping journey on mobile - from research to purchase. 70% of these purchases are for personal fashion - clothes, shoes, accessories</li>
          </ul>

          <br class="extra">

          <h5>Market potential</h5>

          <p>Search optimisation tools offered estimates of monthly keyword volume. The different UK and American English spellings, jewellery and jewelry, produced different data, so I narrowed my research to the UK market.</p>

          <br>

          <table class="table">
            <thead>
              <tr>
                <th>Search term</th>
                <th>Moz Keyword Explorer</th>
                <th>Google Keyword Planner</th>
                <th>Estimated ranking difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jewellery</td>
                <td>~100K</td>
                <td>~300K</td>
                <td>Very high</td>
              </tr>
              <tr>
                <td>Custom, customise, customised</td>
                <td>~800</td>
                <td>~2.5K</td>
                <td>Low (Etsy listings, small competitors)</td>
              </tr>
              <tr>
                <td>Personal, personalise, personalised</td>
                <td>~3.5K</td>
                <td>~15K</td>
                <td>Medium (Etsy listings, large competitors)</td>
              </tr>
              <tr>
                <td>Design (or make) your own</td>
                <td>~200</td>
                <td>Limited</td>
                <td>Very low</td>
              </tr>
            </tbody>
          </table>

          <br>

          <p>
            Search results for personalisation typically offer engraved names or a choice of product attributes. In contrast, customisation is associated with unique designs or design services. Shoppers are typically not searching for services offering to help them design jewellery themselves.
          </p>

          <br>

          <p>These results posed a challenge and a risk:</p>
          <dl>
            <dt><strong>Challenge:</strong></dt>
            <dd>
              How to communicate in a manner that resonates with the desires and language of potential customers - open-ended customisation is somewhere between customisation and design, but it’s not personalisation.
            </dd>
            <dt><strong>Risk:</strong></dt>
            <dd>
              Right now, few shoppers are signalling a desire to be involved in the actual design of their purchases, rather to edit an existing design (customisation or personalisation). Open-ended customisation might not prove to be a value proposition with broad appeal.
            </dd>
          </dl>

          <br class="extra">

          <h3>Qualitative</h3>
          <p>
            I informally interviewed three designers and one non-designer, each who had recently designed or commissioned bespoke jewellery (which was a growing trend among my friends). I recorded standout details and comments:
          </p>
          <ul>
            <li>In three out of four cases it was an engagement ring, in the fourth a pendant necklace, given as a gift</li>
            <li><em>“They found it so thoughtful”</em></li>
            <li><em>“I couldn’t find anything exactly like what I had in mind”</em></li>
            <li><em>“I sat with the designer and we moved gemstones into exactly the right place”</em> (non-designer)</li>
            <li><em>“It’s tricky to get the sizes right, I had to get the ring resized”</em></li>
            <li><em>“I wasn’t confident to attach the gemstone myself so I used a professional jeweller”</em></li>
            <li><em>“I feel like more and more people are doing it, now that you can order metal 3D prints online”</em></li>
          </ul>

          <br class="extra">

          <h2>Business plan</h2>

          <p>
            My primary motivation was to build a compelling product creation experience. The best way to evaluate success would be to measure actual sales. My secondary motivation was to experiment with the mass-customisation business model, including product fulfillment. This required a basic business plan.
          </p>

          <p>
            I drew on lessons learned from my time working with Makielab:
          </p>
          <ul>
            <li>Consider scalable operations from the start. Aim to make products available for sale while minimising or removing the need to hold stock</li>
            <li>Ensure that the non-custom equivalent is not cheap or disposable, otherwise the high cost of bespoke manufacture will make it hard to meet customers’ price expectations</li>
            <li>Regardless of targeting, customisable products will always appeal to category enthusiasts - a vocal minority of Makielab’s customers were toy enthusiasts </li>
            <li>Aim for web first - games and apps do not readily generate product sales</li>
          </ul>

          <br>

          <div class="columns is-multiline">
            <div class="column is-one-quarter" style="padding-bottom: 2em;">
              <p><strong>Partners</strong></p>
              <p>Manufacturers / <span>3D printing</span> services (Shapeways, <span>I-Materialize</span>)</p>
            </div>
            <div class="column is-one-quarter" style="padding-bottom: 2em;">
              <p><strong>Activities</strong></p>
              <dl>
                <dt>Software development and IT</dt>
                <dt>Marketing and sales</dt>
                <dt>Customer support</dt>
                <dt>Logistics and fulfillment</dt>
              </dl>
            </div>
            <div class="column is-one-quarter" style="padding-bottom: 2em;">
              <p><strong>Value proposition(s)</strong></p>
              <p>Easily customise your own jewellery and order it, bespoke manufactured</p>
            </div>
            <div class="column is-one-quarter" style="padding-bottom: 2em;">
              <p><strong>Customer relationship</strong></p>
              <dl>
                <dt>Easy-to-use design tools</dt>
                <dt>FAQ</dt>
                <dt>Email (customer service)</dt>
              </dl>
            </div>
            <div class="column is-one-quarter">
              <p><strong>Costs</strong></p>
              <dl>
                <dt>IT (Payments, hosting, email)</dt>
                <dt>Marketing</dt>
                <dt>Cost of goods</dt>
              </dl>
            </div>
            <div class="column is-one-quarter">
              <p><strong>Revenue</strong></p>
              <p>Product sales (variable price according to size and metal selected)</p>
            </div>
            <div class="column is-one-quarter">
              <p><strong>Customer segment</strong></p>
              <dl>
                <dt>Gifters</dt>
                <dt>Millennials</dt>
                <dt>Designers and creatives</dt>
                <dt>Tech enthusiasts</dt>
              </dl>
            </div>
            <div class="column is-one-quarter">
              <p><strong>Channels</strong></p>
              <dl>
                <dt>Website (storefront)</dt>
                <dt>Social networks, Search, Blogs, Influencers</dt>
                <dt>Email (customer relationship management)</dt>
              </dl>
            </div>
          </div>

        </div>

      </div>

      <div class="page-glass-divider">
        <h1>Definition</h1>
      </div>

      <div class="page-glass-section last-section">

        <div class="content">
          <h2>Jewellery type</h2>
          <p>
            Focusing on a single type of jewellery would speed up design and development - a minimum viable product (MVP) approach. New types could be added in the event of a successful test. The choice lay between two candidates:
          </p>
          <p style="margin-top: 1.5em;"><strong>Rings / engagement rings</strong></p>
          <ul class="plus-list">
              <li>High interest (rings and engagement rings are search terms highly associated with the phrase ‘design my own’)</li>
              <li>High value</li>
              <li class="minus">Ring size would add a further personal aspect but might lead to increased errors and returns</li>
              <li class="minus">High brand trust required due to expense and importance of the purchase, which is not possessed by a new brand</li>
              <li class="minus">Fitting gemstones requires a professional jeweller</li>
          </ul>
          <p style="margin-top: 1.5em;"><strong>Pendant necklace</strong></p>
          <ul class="plus-list">
              <li>Pendants are a ‘blank canvas’ for an expressive creation experience</li>
              <li>Necklace is a search term commonly associated with personalisation</li>
              <li>High value but lower stakes gift</li>
              <li class="minus">An eyelet to connect to the chain could prove a tricky constraint</li>
          </ul>
          <br>
          <p>
            Despite a potentially larger market for rings, I foresaw difficulties and the potential for deeply unsatisfied customers. For now, I decided to focus on pendants.
          </p>

          <br class="extra">

          <h2>Story</h2>

          <p>
            Qualitative interviews suggested two main customer personas: gifters and enthusiasts. In some cases customers could be both.
          </p>

          <br>

          <article class="media">
            <div class="media-left is-quarter">
              <h5>Gifter</h5>
              <p><i>'Buyer persona'</i></p>
            </div>
            <div class="media-content">
              <div class="content">
                <h5>I want to give a good gift</h5>
                <ul>
                  <li><em>“I’m looking for something which will show them how much I care”</em></li>
                  <li><em>“I want give something unique, which they couldn’t get anywhere else”</em></li>
                  <li><em>“It takes ages to find the perfect gift”</em></li>
                  <li><em>“A gift should be personal, something which reminds them of me”</em></li>
                  <li><em>“I want to feel confident giving the gift”</em></li>
                </ul>
              </div>
            </div>
          </article>

          <article class="media">
            <div class="media-left is-quarter">
              <h5>Enthusiast</h5>
              <p><i>'Buyer persona'</i></p>
            </div>
            <div class="media-content">
              <div class="content">
                <h5>I want to express myself</h5>
                <ul>
                  <li><em>“I have a personal style and I carefully curate what I wear”</em></li>
                  <li><em>“I want to jewellery no-one else has seen before”</em></li>
                </ul>
                <h5>I want to have the latest thing</h5>
                <ul>
                  <li><em>“People expect me to find the next trend”</em></li>
                  <li><em>“I like to experiment with new technologies”</em></li>
                </ul>
              </div>
            </div>
          </article>

          <br class="extra">

          <p>
            Enthusiasts are typically a smaller segment, so I focussed on gifters. Additionally, I had previously observed that experiences tailored to gifters do not deter enthusiasts. I sketched a potential gifting journey, using cartoons to capture the emotional aspects.
          </p>

          <br>

          <div class="figure-container max-60">
            <figure class="image is-5by3 single-image">
              <img class="lazyload" data-src="./img/projects/wesen/journey_characters.jpg">
            </figure>
            <figcaption>
              Three gifters faced with the problem of finding a thoughtful gift
            </figcaption>
          </div>

          <br>

          <article class="media">
            <div class="media-left is-quarter">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/wesen/j_research.jpg">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h5>Research</h5>
                <p>Possible marketing messages:</p>
                <ul>
                  <li><em>“Give the most personal gift of all - a pendant necklace designed by you”</em></li>
                  <li><em>“Stop looking for the perfect gift, let us help you design it”</em></li>
                </ul>
              </div>
            </div>
          </article>

          <article class="media">
            <div class="media-left is-quarter">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/wesen/j_discovery.jpg">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h5>Decision</h5>
                <ul>
                  <li><em>“This website is offering to help me design a pendant necklace like those shown, then I can order it”</em></li>
                  <li><em>“I want to read a bit more about the company to see if I can trust them”</em></li>
                </ul>
              </div>
            </div>
          </article>

          <article class="media">
            <div class="media-left is-quarter">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/wesen/j_customise.jpg">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h5>Customisation</h5>
                <ul>
                  <li><em>“I figured it out straight away”</em></li>
                  <li><em>“This is fun, I’m pleased with what I’ve designed”</em></li>
                  <li><em>“I found it too fiddly so I just gave up”</em></li>
                </ul>
              </div>
            </div>
          </article>

          <article class="media">
            <div class="media-left is-quarter">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/wesen/j_convert.jpg">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h5>Purchase</h5>
                <ul>
                  <li><em>“This was a great experience, I trust this company”</em></li>
                  <li><em>“I want to buy what I’ve designed”</em></li>
                  <li><em>“I need assurance that my payment is secure”</em></li>
                </ul>
              </div>
            </div>
          </article>

          <article class="media">
            <div class="media-left is-quarter">
              <figure class="image is-1by1">
                <img class="lazyload" data-src="./img/projects/wesen/j_reflect.jpg">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h5>Reflection</h5>
                <ul>
                  <li><em>“I’m satisfied that I’ve bought a good gift”</em></li>
                  <li><em>“I felt empowered by the experience”</em></li>
                  <li><em>“I received an email confirming my order”</em></li>
                </ul>
              </div>
            </div>
          </article>

          <br class="extra">

          <p>
            My earlier research raised the concern that gifters and other shoppers might not want to design the pendant themselves, or that they might lack the confidence to do so. I specified two strategies to mitigate this risk:
          </p>

          <ol>
            <li>A curated and supported creation experience where users participate without needing to consider constraints</li>
            <li>A collection of pre-designed products, which can be bought directly or customised before purchase</li>
          </ol>

          <br>

          <p>With this in mind I proposed a provisional purchase flow:</p>

          <div class="figure-container max-80">
            <figure class="image is-3by1 single-image">
              <img class="lazyload" data-src="./img/projects/wesen/Draft-journey-mvp.png">
            </figure>
            <figcaption>
              The red boundary illustrates which features are outsourced or removed for the MVP
            </figcaption>
          </div>

          <br>

          <h2>Design and development goals</h2>
          <ul>
            <li>Develop a customisable pendant with suitable constraints but capable of infinite variations</li>
            <li>Design an intuitive interface that doesn’t require a tutorial</li>
            <li>Build an e-commerce store that explains the concept, builds confidence and allows shoppers to browse pre-designed products</li>
            <li>Ensure operations can be automated and that manufacture can be fulfilled by a single service (such as Shapeways) with minimal or no post processing</li>
            <li>Minimise the technical overhead of storing personal and payment details by using third-party services</li>
          </ul>

          <br>

        </div>

      </div>

      <div class="page-glass-divider">
        <h1>Iteration</h1>
      </div>

      <div class="page-glass-section last-section">

        <div class="content">
          <h2>Ideation</h2>

          <p>
            I assembled a list of 3D design tools for consideration in the context of jewellery customisation, further expanding it through conversations with fellow designers.
          </p>

          <p>I rated each on two measures (0-5):</p>
          <ul>
            <li>Expressiveness - a subjective measure of how free and open-ended a tool feels, higher is more expressive</li>
            <li>Implementation - the relative ease in building such a tool, higher is easier</li>
          </ul>

          <br>

          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Expressiveness</th>
                <th>Implementation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Linear array</td>
                <td>Define a source geometry and choose how many times it repeats in an xy grid</td>
                <td>2</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Radial array</td>
                <td>Define a source geometry and choose how many times it repeats around a circle of a certain radius</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Control geometry</td>
                <td>Warp a source geometry by moving the vertices of a control geometry. The control shape is typically much simpler than the source</td>
                <td>5</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Curve based bend</td>
                <td>Bend a source geometry by manipulating the anchors of a bezier curve</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Polar warp</td>
                <td>‘Spin’ the vertices of a geometry around an arbitrary axis</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Sinusoidal warp</td>
                <td>Apply a sinusoidal waveform to a source geometry</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Extrude profile</td>
                <td>Draw a flat sketch and extrude its boundary to form a 3D object</td>
                <td>4</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Sculpt submesh</td>
                <td>Take a blob and push or pull the surface, sculpting like clay</td>
                <td>5</td>
                <td>1</td>
              </tr>
              <tr>
                <td><span>On-surface</span> ‘stamps’</td>
                <td>Decorate a curved or flat surface with smaller objects that ‘stick’ to it, ensuring contact</td>
                <td>4</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Boolean operations</td>
                <td>Create new, more complex geometries by joining or subtracting source geometries</td>
                <td>3</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>

          <br>

          <p>
            I settled on two tools which scored highly and I found intuitive and enjoyed using: the radial array and control geometry. This combination seemed promising because both tools tended to produce fascinating, often pleasingly unexpected outcomes.
          </p>

          <br class="extra">

          <h2>Prototyping</h2>

          <p>
            At first I was unsure what would result from combining these two tools. Blender, which has a built in radial array, proved useful for experimentation. Blender’s animation rig could approximate the functionality of a control geometry, where bones acted as control vertices. I tried several configurations, settling on a six pointed diamond-like shape. A future enhancement could offer the user a range of control geometries (or cages to manipulate more complex geometry such as 3D scans).
          </p>

          <div class="figure-container max-50">
            <figure class="image is-1by1 single-image">
              <iframe class="lazyload" data-src="https://player.vimeo.com/video/293190700" width="640" height="640" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </figure>
            <figcaption>
              I attempted to test the Blender setup with users but this proved too low fidelity - testers would need to learn the Blender interface before I could gather useful feedback
            </figcaption>
          </div>

          <p>
            In order to test with users, I built a rough yet fully functional frontend prototype. I also took the opportunity to explore the possibility of Three.js as a library for simplifying the 3D graphics API in the web browser.
          </p>

          <div class="figure-container max-50">
            <figure class="image is-1by1 single-image">
              <iframe class="lazyload" data-src="https://player.vimeo.com/video/293190664" width="640" height="640" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </figure>
            <figcaption>
              I was pleased to observe that testers automatically moved the control points and sometimes exclaimed <em>"wow"</em> when doing so for the first time
            </figcaption>
          </div>

          <p>
            Having defined the core interactions for product customisation, my next step was to integrate this interface into a shopping experience.
          </p>
          <p>
            Originally, I imagined two modes - sculpting the shape (shape mode) and manipulating the attributes of the radial array (layout mode). Tabs would be used to toggle between each mode. The interactive prototype did not offer modes, yet testers experienced no confusion, suggesting that they were unnecessary.
          </p>
          <p>
            I chose to keep a separate mode in which users add a eyelet for the necklace chain. To me, there was a clear distinction between the expressive creativity of sculpting and manipulating the pendant and the requirement of correctly placing a eyelet.
          </p>

          <div class="figure-container">
            <figure class="image is-2by1 single-image zoomable" @click="showImage('./img/projects/wesen/Wireframes.png', 'is-2by1')">
              <img class="lazyload" data-src="./img/projects/wesen/Wireframes.png">
              <button class="button white-button is-rounded image-zoomer" aria-haspopup="true"><span class="icon is-small"><i class="icon-zoom-in full-opacity"></i></span></button>
            </figure>
            <figcaption>
              Wireframe sketches, overlaying screenshots from Blender, detailing a user interface with two design modes (layout and shape) and a third eyelet mode
            </figcaption>
          </div>

          <p>
            Matcap shaders offered convincing metallic effects with a low performance overhead. My first instinct was for a dark background to pop out the pendent but I was surprised to find that the opposite was true.
          </p>

          <div class="figure-container max-60">
            <figure class="image is-5by4 single-image">
              <img class="lazyload" data-src="./img/projects/wesen/Shaders.jpg">
            </figure>
            <figcaption>
              Experimenting with presentation and matcap shaders
            </figcaption>
          </div>

          <p>
            I endeavoured to create an interface that wouldn’t be intimidating, which focused on the control points and where curious exploration would result in the discovery of the full range of controls. Organising these further controls into pop-out panels proved particularly effective.
          </p>

          <div class="figure-container">
            <figure class="image is-3by2 single-image zoomable" @click="showImage('./img/projects/wesen/Sketching.png', 'is-3by2')">
              <img class="lazyload" data-src="./img/projects/wesen/Sketching.png">
              <button class="button white-button is-rounded image-zoomer" aria-haspopup="true"><span class="icon is-small"><i class="icon-zoom-in full-opacity"></i></span></button>
            </figure>
            <figcaption>
              Sketch iterations, evolving the interface while also exploring branding and visual design
            </figcaption>
          </div>

          <div class="figure-container">
            <figure class="image is-3by2 single-image zoomable" @click="showImage('./img/projects/wesen/Refining.png', 'is-3by2')">
              <img class="lazyload" data-src="./img/projects/wesen/Refining.png">
              <button class="button white-button is-rounded image-zoomer" aria-haspopup="true"><span class="icon is-small"><i class="icon-zoom-in full-opacity"></i></span></button>
            </figure>
            <figcaption>
              I drew inspiration from the Airbnb Design System and Google Material Design 2.0, at the same time referencing the design language of fashion and jewellery brands
            </figcaption>
          </div>

          <br>

          <div class="figure-container max-60">
            <figure class="image is-3by2 single-image">
              <img class="lazyload" data-src="./img/projects/wesen/Iconography.png">
            </figure>
            <figcaption>
              Detailing production assets - iconography
            </figcaption>
          </div>

          <br class="extra">

          <h2>Lessons from user testing</h2>

          <br>

          <table class="table">
            <thead>
              <tr>
                <th>Observation</th>
                <th>Remedy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>“These messages just get in my way” Error messages (further discussion below) broke the creative flow and led to a frustrating experience</td>
                <td>I silenced all error messages until the user enters the eyelet mode for the first time, thereby signalling a desire to finish the necklace and checkout. It’s at this point that the messages actually become useful</td>
              </tr>
              <tr>
                <td>“I wish I could go back to the way I had it before”</td>
                <td>I implemented an undo feature and reorganised the interface to prominently accommodate the button</td>
              </tr>
              <tr>
                <td>“I have no idea what size it is”</td>
                <td>This is a problem common to all 3D design software. I added a subtle ruler to the interface and an introductory animation sequence, showing the pendant in context with a chain</td>
              </tr>
              <tr>
                <td>“The first thing I wanted to do was push all the sliders to maximum” In some cases testers created the largest possible pendant</td>
                <td>This signalled the need for another error condition - where the pendant design is unreasonably large - both too heavy to wear and very expensive. I also tried shrinking the design area but this felt constricting</td>
              </tr>
            </tbody>
          </table>

          <br class="extra">

          <h3>Input validation for 3D geometry</h3>

          <p>Offering users open-ended, expressive tools introduced a challenging problem - how to ensure what they create is valid geometry for manufacture by 3D printing? Through user testing during development I identified four common error cases:</p>
          <ol>
            <li>The radial segments do not connect, so that the necklace is not a single volume</li>
            <li>The eyelet does not connect to the pendant</li>
            <li>The pendant blocks the eyelet so that the chain would not fit</li>
            <li>The pendant is extremely large</li>
          </ol>

          <p>I developed a system to detect these problems and set an error state. Some edge cases remained, which were harder to detect (such as non-manifold or thin geometry). To reach MVP I chose not to address them at that time, adsorbing the risk that I would occasionally need to fix problem geometry manually.</p>

          <p>The next challenge was how and when to display this information to the user. At first I displayed an error message whenever a problem arose. Users can tap messages to dismiss them. They reappear if the next action doesn’t address the problem. On the basis of feedback I isolated error messages to the end of product creation, after users have signalled a desire to checkout.</p>

          <br>

          <div class="figure-container">
            <figure class="image is-2by1 single-image">
              <img class="lazyload" data-src="./img/projects/wesen/Messages.png">
            </figure>
            <figcaption>
              The notification window, which begins by offering tips, later reporting geometry errors when appropriate
            </figcaption>
          </div>

        </div>


      </div>

      <div class="page-glass-divider">
        <h1>Production</h1>
      </div>

      <div class="page-glass-section last-section">

        <div class="content">
          <p>In specifying production tools and technologies I re-referenced my project goals and drew on past experience:</p>
          <p class="pullout-quote is-left" style="font-size: 1.2em;">
            “Ensure that operations can be automated and that manufacture can be fulfilled by a single service (such as Shapeways) with minimal or no post processing”
          </p>
          <p class="pullout-quote is-left" style="font-size: 1.2em;">
            “Minimise the technical overhead of storing personal and payment details by using third-party services”
          </p>

          <table class="table">
            <thead>
              <tr>
                <th>Experience</th>
                <th style="width: 50%;">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unity would appear a natural choice of 3D framework. However, it’s not free and increases the complexity of the frontend build chain</td>
                <td>Three.js is less fully-featured but perfectly serviceable for a simple 3D interface</td>
              </tr>
              <tr>
                <td>Different 3D frameworks powering the frontend and backend processing can lead to duplicated work and discrepancies between what the user sees and what is actually manufactured</td>
                <td>Three.js can run the same code in the browser and on a Node.js server</td>
              </tr>
              <tr>
                <td>Hosting websites and backend processes on physical infrastructure requires constant maintenance</td>
                <td>Node.js / Express server on cloud infrastructure (Heroku)</td>
              </tr>
            </tbody>
          </table>

          <br class="extra">

          <p>
            I chose to upgrade and extend the prototype toolchain for production:
          </p>

          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>Prototyping</th>
                <th>Production</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>WebGL framework</td>
                <td>Three.js</td>
                <td>Three.js</td>
              </tr>
              <tr>
                <td>Backend server</td>
                <td>Harp.js</td>
                <td>Node.js / Express / MongoDB</td>
              </tr>
              <tr>
                <td>UI framework</td>
                <td>Guify</td>
                <td>Angular 2+ (Typescript)</td>
              </tr>
              <tr>
                <td>CSS framework</td>
                <td>None</td>
                <td>Bulma</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>None</td>
                <td>Nodemailer / Sendgrid</td>
              </tr>
            </tbody>
          </table>

          <div class="figure-container">
            <figure class="image is-5by4 single-image">
              <img class="lazyload" data-src="./img/projects/wesen/System-diagram.png">
            </figure>
            <figcaption>
              The Wesen system diagram, detailing user touchpoints and client/server/third-party API interactions
            </figcaption>
          </div>

          <br>

          <h3>Third-party integrations</h3>

          <p>Shapeways offer three tools that enable designers to remotely sell 3D prints of their designs:</p>

          <ol>
            <li><strong>Shapeways stores</strong> - manually upload 3D models, calculate the cost and optionally add markup. Customers checkout through Shapeways</li>
            <li><strong>Upload API</strong> - automate the process of uploading models to a store or personal account</li>
            <li><strong>Order API</strong> - generate a basket with a newly uploaded or existing model and checkout through Shapeways</li>
          </ol>

          <p>Additionally Shapeways stock necklace chains and presentation boxes which can be added to the basket, completing the product.</p>
          <br>
          <p>There are two options for checkout and fulfillment:</p>

          <ol>
            <li style="margin-top: 1.75em;">
              Checkout managed by Shapeways using the Upload and Order APIs
              <ul class="plus-list">
                <li>Shapeways handle details and payments</li>
                <li class="minus">Brand dilution and reliance on one supplier</li>
                <li class="minus">Order API isn’t particularly well supported</li>
              </ul>
            </li>

            <li style="margin-top: 1.75em;">
              Custom checkout, powered by a third-party payment provider (Stripe, Paypal) and the Upload API to automate uploading to a private Shapeways account
              <ul class="plus-list">
                <li>Full control over the checkout experience</li>
                <li class="minus">Additional development</li>
                <li class="minus">Semi-automatic rather than fully automatic, with manual involvement to finalise each order</li>
                <li class="minus">Take on the risk of returns, delivery and quality issues</li>
              </ul>
            </li>
          </ol>

          <br class="extra">

        </div>

      </div>

      <div class="page-glass-divider">
        <h1>Evaluation</h1>
      </div>

      <div class="page-glass-section last-section">

        <div class="content">
          <p>
            This project is ongoing - currently paused in the beta testing phase. Feedback has generally been positive, but whether the experience is sufficiently compelling to convert sales is still unknown.
          </p>

          <div class="figure-container">
            <figure class="image is-16by9 single-image">
              <img class="lazyload" data-src="./img/projects/wesen/Grid.jpg">
            </figure>
            <figcaption>
              The customisation tool is capable of infinite variation - this image shows a mixture of hand-made and randomly generated pendants
            </figcaption>
          </div>

          <h3>Reflection on end-to-end</h3>
          <p>
            Working independently to build all the touchpoints and systems required for a mass-customisation product has been an interesting learning experience. Surprisingly, or not so surprisingly, the main lesson has been in the value of the multidisciplinary team; of working with great people who are fast and efficient within their specialism. At several junctures I felt the lack of a collaborator, especially in backend engineering, but equally in shaping ideas.
          </p>
        </div>

      </div>


    </template>

    <template slot="footer-content">
      <div class="container case-study page-footer-container">
        <div class="columns">
          <div class="column content link-container">
            <h3>Wesen</h3>
            <p>Wesen is in beta - please try it out and contact me with any feedback or bug reports</p>
            <div class="links-container">
              <a href="http://wesen.studio" target="_blank" class="button is-primary is-rounded is-inverted is-outlined">
                View site
                <i class="icon-right-open-big full-opacity footer-icon"></i>
              </a>
            </div>
          </div>
          <div class="column is-three-quarters">
            <figure class="image is-16by9"><img class="lazyload" data-src="/img/project-presentations/combined_wesen.png"></figure>
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
    color: $red


</style>
