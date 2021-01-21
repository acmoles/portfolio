---
uid: 1
title: Wesen
subtitle: Turning customers into creators
type: double-left-top
navStyle:
  style: light
  tint: dark
  progress: light
background: dark
case1: Case study
sidebar: false
date: 2018-10-12
src: /images/homepage/wesen-homepage.jpg
next: ./ecosia
hasFooter: true
---

::: slot top

<!-- Can customers be creators? -->
<Stage-ProjectStage :noise="true" :upless="true" rag="rag-4" ragTitle="rag-2" titleColumnClass="is-three-fifths" ctaLabel="wesen.studio" ctaUrl="http://www.wesen.studio"
description="I built an intuitive 3D customisation tool which enables anyone to create and order their unique pendant necklace.">

  <template v-slot:visual-background>
    <figure class="full-screen">
      <Heros-ImageHero src="/images/wesen/wesen-header-2.jpg" alt="Wesen Studio examples"/>
    </figure>
  </template>

  <template v-slot:platform>

  Responsive web app

  </template>

  <template v-slot:timeframe>

  2018

  </template>

  <template v-slot:my-role>

  UI/UX Designer
  ~ Full-stack JS developer

  </template>

  <template v-slot:team>

  Individual project

  </template>

</Stage-ProjectStage>


:::

<!-- <li>Responsive web application</li>
It's manufactured on demand by a blend of modern and traditional techniques.
<li>2018</li> -->

<Content-TextSection rag="rag-4" padding="is-initial" style="padding-bottom: 0;" columnOffset="title-offset">

## Case study

Recent years have seen a gradual increase in awareness of product customisation and on&#8209;demand manufacturing. But to this day we can see little evidence of the promised revolution due to relatively high prices and no killer app.

In 2015 I helped pioneer customisable children’s toys at [Makielab.](/projects/makielab) We enjoyed modest success, catching the attention of Disney who eventually bought the startup. My intention with Wesen was to leverage the lessons learnt and push the envelope of consumer Mass Customisation software.

I wanted to explore the possibility of a lightly constrained creation experience, able to generate infinite variations while being intuitive and fun to use. _I was convinced that suitable constraints could enhance the creativity of users, rather than restrict it._ I also wanted to completely automate and outsource the fulfilment process.

By building a product end-to-end, I hoped to increase my empathy for colleagues and stakeholders. To re-experience digital product development from every perspective - founder, marketer, product, design, developer and operations.

<!--

 a more freeform creative experience, within constraints to make it easier to pick up

 [Mass Customisation](https://hbr.org/1997/01/the-four-faces-of-mass-customization)



 create or customise

-->

<!-- _This image shows a mixture of hand-made and procedurally generated pendants_ -->

<template v-slot:aside>

####  The challenge{ .challenge-title }

Enable customers to customise a product in the web browser. Make it possible to save and order their creation with automatic fulfilment by outsourced operations and manufacturing.

<br>

#### The outcome{ .challenge-title }

Wesen fulfils my original success criteria. It taught me a great deal but the most valuable lessons I didn't expect; the importance of _getting the word out_ and _working in teams._

</template>

</Content-TextSection>


<Content-ImageFrames-MainImageSection padding="is-medium-large" imageClass="is-4by3" url="https://player.vimeo.com/video/463897939" alt="Wesen demo" :iframe="true"/>





<!-- <Content-ThreeColumnSection padding="is-equal" rag="rag-3">

<template v-slot:column1>

###  The challenge

Enable customers to customise a product in the web browser. Make it possible to save and order their creation with automatic fulfilment by outsourced operations and manufacturing.

</template>

<template v-slot:column2>

### The outcome

Wesen fulfils my original success criteria. It taught me a great deal but the most valuable lessons I didn't expect; the importance of _getting the word out_ and _working in teams._

</template>

<template v-slot:column3>

### My role

Entrepreneur
~ UX Product Designer
~ Full-stack JS Developer

</template>

</Content-ThreeColumnSection> -->






<Content-MainSectionDivider aside="Section 1 of 3" title="Discovery"/>


<!-- People weren\'t asking to create jewellery themselves -->

<Content-PointsSection padding="is-large" rag="rag-5" :points="[
{ src:'/svg-icons/icon_search.svg', alt:'sad face', title:'Jewellery balanced market size and technical constraints', description:'Search keywords paired with customisation typically focused on personal appearance and self expression. Jewellery was among them and tends to be small, high value objects suitable for 3D printing.' },

{ src:'/svg-icons/icon_conversation.svg', alt:'Group', title:'People were talking about customisation and personalisation', description:'Search keyword volume was marginally higher for personalisation. Few people were signalling a desire for \'creative expression\'. This signalled a risk, but also an opportunity to unlock demand and rank for niche search queries.' },

{ src:'/svg-icons/icon_gift.svg', alt:'clock', title:'Customised and personalised products tend to be gifts', description:'Based on competitor website messaging. Gifting remains highly seasonal, with a shift to mobile. Google Consumer Barometer (2018) suggested more than 50% of fashion and accessories gift purchases were on mobile.' },

{ src:'/svg-icons/icon_coffee.svg', alt:'lightbulb', title:'Customised gifts looked like a growing trend', description:'It wasn\'t hard to find designers in my network who had recently given a customised gift. They shared anecdotes suggesting a growing trend.' },

{ src:'/svg-icons/icon_neutral.svg', alt:'documents', title:'Non-technical people felt daunted by customisation tools', description:'Designers found the process of making their gifts empowering, while non-designers found it initially daunting and later frustrating. Sometimes they looked for expert help.' },

{ src:'/svg-icons/icon_pendant.svg', alt:'device', title:'Pendants seemed more suitable than rings', description:'The majority of gifts among my interviewees were rings. Pendants came in second place. However, with rings, I foresaw difficulties such as sizing and gemstone fixture.' },
]">

<template v-slot:content>

## Research

My approach was to broadly investigate the mass customisation market and choose a product category based on estimated product-market fit.

<p class="subtitle">
  I used digital marketing techniques to gauge the market size and followed up with qualitative interviews; four designers and one non&#8209;designer, each who had recently designed or commissioned bespoke jewellery.
</p>

</template>

</Content-PointsSection>



<Content-QuoteSection rag="rag-4" quote="I couldn’t find anything that exactly matched what I had in mind. In the end designing everything myself really paid off. They found it so thoughtful!" attribute="Designer interviewee on gifting jewellery to their partner" color="green"/>




<Content-ThreeColumnSection  columnOffset="three-offset">

<template v-slot:content>

## User profiles

The next step was to clearly define and build empathy for potential customers. Qualitative interviews suggested a primary persona _Gifters_ and a secondary persona _Enthusiasts._

<!-- In some cases customers could be both. Enthusiasts are typically a smaller segment, so I decided to focus on gifters. I reasoned that a flow optimised for gifters was unlikely to deter enthusiasts. -->

</template>

<template v-slot:column1>

####  Gifter

---

*Buyer persona*

When I need to give an important gift, I want to design it myself so I can be sure it will make the recipient happy.

<div class="small">

_“I’m looking for the perfect gift which will show them how much I care”_
~ _“I want to give something unique, which they couldn’t get anywhere else”_
~ _“A gift should be personal, something which reminds them of me”_
~ _“I want to feel confident giving the gift”_
{ .secondary }

</div>


</template>

<template v-slot:column2>

#### Enthusiast

---

*Buyer persona*

When new and unusual products become available, I want to try them out so I'm on the cutting edge.

<div class="small">

_“People expect me to find the next trend”_
~ _“I like to experiment with new technologies”_
~ _“I have a personal style and I carefully curate what I wear”_
~ _“I want to wear jewellery no-one else has seen before”_
{ .secondary }

</div>

</template>

<template v-slot:column3>

<figure class="image parent-loading is-square">
  <img class="lazyload" data-src="/images/wesen/journey_characters2.jpg" alt="Cartoon of enthusiasts and gifters">
</figure>

</template>

</Content-ThreeColumnSection>





<Content-ThreeColumnSection padding="is-large has-divider"  columnOffset="three-offset">

<template v-slot:content>

## Scope and objectives

I recognised the need for clear project objectives and a narrow scope if I was to succeed in launching a product within a reasonable timeframe. I identified the key challenges, which I captured as 'How Might We' statements.


<!-- that we needed to have a clear understanding of the project goals and motivations, which we could then use to guide the project process. Together with the project team, I identified our key challenges, which we captured as “How Might We” statements:

Having built an understanding of the space, I distilled my
As the project kicked off, we identified our key challenges, which we captured as “How Might We” statements:

My research posed two key user experience challenges. Firstly, how to communicate the value of lightly-constrained product creation to an audience that isn't explicitly asking for it. Secondly, how to address the anxiety of non-technical users approaching a customisation interface.

There was another important aspect to address; . To facilitate this I set a tight scope and suitable objectives. -->

<!-- which enables customers to order their pendants

Addressing these became the first pillar of my design activity. The second was to reach a level of product resolution where real customers could make actual orders - I refered to this as _End-to-end._ To facilitate achieving this within a reasonable timeframe I paired back the typical components of an e-commerce flow, leaving behind only the critical elements necessary to win my first customers. -->

</template>

<template v-slot:column1>

####  Gifter friendly

---

<div class="small">

_How might we communicate the value of lightly-constrained product creation to an audience that isn't explicitly asking for it?_

_How might we address the anxiety of non-technical users approaching a customisation interface?_

Build confidence with an e-commerce storefront that explains the value proposition.
~ Allow shoppers to browse pre-designed products and start customising from there.
~ Address anxiety with an intuitive interface can be learnt within 5 seconds without a tutorial.
~ Minimise the number of controls and progressively disclose supporting features.

</div>

<!--

~ Empower and enable with meaningful expression.

Make it possible for these to be selected as the foundation for further customisation or bought immediately.

Enable customers to express themselves meaningfully without requiring a high level of skill or design experience.




Make it possible for customers to buy the pendant they create and ensure automated fulfillment of their order.

by relying on third-party cloud services where possible. Outsource complex systems like payments and accounts.

-->

</template>

<template v-slot:column2>

#### End-to-end

---

<div class="small">

_How might we build an end-to-end product, which enables customers to buy their creations, while minimising development effort?_

Enable customers to purchase their creation and automatically fulfil their order.
~ Save the customer's design and order data, allowing them to return to it and make modifications or repeat orders.
~ Establish a line of communication for customers to enquire about their order and report any problems.
~ Minimise technical and operational overhead by following an 'outsource-first' principle e.g. third-party cloud services, APIs, payment providers, fulfilment experts.

</div>

</template>

<template v-slot:column3>

<figure class="image parent-loading is-square">
  <img class="lazyload medium-zoom" data-src="/images/wesen/draft-journey-mvp.png" alt="Flowchart of user journey">
</figure>
<figcaption class="small">

Orange indicates features to be outsourced or removed for the pilot.

</figcaption>

</template>

</Content-ThreeColumnSection>




<Content-ImageFrames-FullImageSection url="/images/wesen/wesen-montage-1.jpg" alt="Montage of further discovery process"/>




<Content-ImageFrames-SquareImagesRow rag="rag-3" :images="[
{ url:'https://player.vimeo.com/video/293190700', alt:'Blender prototype video', caption:'Square image caption 1', slot:'slot1', iframe:true },
{ url:'https://player.vimeo.com/video/293190664', alt:'Interactive webGL prototype', caption:'Square image caption 2', slot:'slot2', iframe:true },
{ url:'/images/wesen/webgl-feasibility.jpg', alt:'Metal shader exploration', caption:'Square image caption 3', slot:'slot3', iframe:false },
]">

<template slot="content">

## Low-fi Prototyping

<p class="subtitle">
My background in Industrial Design helped me assemble a list of promising 3D modelling tools. I extended it with input from designers in my network.
</p>

The search for a compelling customisation experience required an iterative approach. I reimagined each tool with simplified interaction or constrained capability. Then I would combine several such tools to see if interesting synergies emerged.

To formalise my thinking, I rated these ideas on _Expressiveness_ and (ease of) _Implementation_. During this process I began thinking of myself as 'unshackling' expressive modelling tools from their specialist software confines.

</template>

<template slot="slot1">

#### Blender basic interactive

I chose to proceed with an idea combining _Radial array_ and _Control geometry._ It was fun to use, often producing pleasing and unexpected outcomes.

Blender had proven a useful platform for experimentation. But I wasn't able to use it for usability or value testing because my subjects weren't fluent in the Blender interface.

</template>

<template slot="slot2">

#### WebGL basic interactive

To overcome this limitation, I built a basic yet functional prototype in WebGL. I also took the opportunity to explore various JS libraries before committing in production.

_All testers immediately grasped the affordance and moved the control points._ I observed an attitude of curiosity, even among those I expected to be daunted by the interface.

</template>

<template slot="slot3">

#### WebGL feasibility

I had a growing concern that customers could feel disconnected from the product they would eventually buy.

To mitigate this risk, I prioritised reaching a high level of graphical realism. Matcap shaders offered a solution that also met my performance requirements.

</template>

</Content-ImageFrames-SquareImagesRow>




<Content-MainAsideSection padding="is-large has-divider"  :aside="true" columnOffset="table-offset">

<template slot="content">

## Lessons from user testing

Before moving into high-fidelity design and development, I performed further usability testing on the proposed direction to validate design decisions, identify challenges, and iterate based on user feedback.

</template>

<template>

**Observation** | **Remedy** |
--- | --- |
_“I wish I could go back to the way I had it before”_ | I implemented an undo feature and reorganised the interface to accommodate the button |
_“I have no idea what size it is”_ | I added a scale grid and an introductory animation sequence, showing the pendant and chain in context |
_“These messages just get in my way”_ Error messages (further discussion below) broke the creative flow and led to a frustrating experience | Now the user only encounters error messages once they enter the eyelet mode for the first time, thereby signalling a desire to finish the pendant and checkout. I also made error messages dismissable until the next user action |
_“The first thing I wanted to do was push all the sliders to maximum”_ In some cases testers created the largest possible pendant | This signalled the need for another error condition - where the pendant design is unreasonably large - both too heavy to wear and very expensive. I also tried shrinking the design area but this felt constricting |
{.table .is-fullwidth}

</template>

<template slot="aside">

<div class="columns is-gapless">
  <div class="column is-two-thirds">
    <figure class="image parent-loading is-square">
      <img class="lazyload" data-src="/images/wesen/in-use.jpg" alt="webGL prototype in use">
    </figure>
  </div>
</div>

</template>

</Content-MainAsideSection>




<Content-ImageFrames-FullImageSection url="/images/wesen/wesen-montage-2.jpg" alt="Montage of design iteration"/>


<Content-FreeSection>

<div class="columns">
<div class="column is-two-thirds rag-4">

## E-commerce experience

<p class="subtitle">
  Guided by my findings, I was confident the customisation tool was ready to be shaped into an e&#8209;commerce flow.
</p>

At first I imagined a sequence of steps. I built mockups of increasing fidelity and continued to test with users. I employed a hybrid approach, mixing static screens with the WebGL prototype. But something was wrong; _somewhere along the way I had lost the magic of the earlier tests._

</div>
</div>

<Content-FlowInline :steps="[
  'Sculpt segments',
  'Layout segments',
  'Choose material',
  'Place the eyelet',
  'Details',
  'Checkout'
]"/>

<div class="columns">
<div class="column is-two-thirds">

I switched from linear steps to 'modes' in an effort to address this, but my eureka moment came when I remembered that earlier prototypes featured none of this usability 'help' yet testers found them perfectly intuitive. Modes, albeit better than a steps, still just got in users' way.

Where they did add value was in separating the expressive phase of creation from the tasks necessary for completing the order, such as adding the necklace chain eyelet, ensuring the pendant was valid for 3D printing and filling out details.

</div>
</div>

</Content-FreeSection>

<Content-TextSection rag="rag-3" padding="is-medium-large has-divider" columnOffset="title-offset">

## Input validation for 3D geometry

Offering users expressive tools introduced a challenging problem; how to ensure they create valid geometry for manufacture by 3D printing? Through user testing I identified four common error cases:

1. The radial segments do not connect, so that the necklace is not a single volume
2. The eyelet does not connect to the pendant
3. The pendant blocks the eyelet so that the chain would not fit
4. The pendant is overly large
{ .wesen-list }

I developed systems to detect each of these problems. The notification window begins by offering tips. Later, when appropriate, it reports geometry errors. I was aware of additional hard-to-detect problems such as non-manifold and thin geometry but I chose not to address them in the MVP since they rarely occurred, preferring to manually fix these models for customers.

<style lang="sass">

  .content ol.wesen-list
    margin-top: 2em
    margin-bottom: 2em
    li
      margin-bottom: 0.75em

</style>

<!-- An important lesson from user testing was not to show these notifications until the user signals a desire to advance in the purchase flow. Otherwise, they completely counteracted my efforts to reassure non-technical users. Error notifications start once they become useful; when the user adds an eyelet for the necklace chain. -->

<template v-slot:aside>

<figure class="image parent-loading is-square">
  <img class="lazyload" data-src="/images/wesen/messages-square.png" alt="3D geometry error messages"/>
</figure>

</template>

</Content-TextSection>




<Content-MainSectionDivider aside="Section 2 of 3" title="Delivery"/>




<Content-ImageFrames-SquareImagesRow padding="is-large" rag="rag-4" :images="[
{ url:'/images/wesen/Iconography-square.png', alt:'Production icon assets', caption:'Square image caption 1', slot:'slot1', iframe:false },
{ url:'/images/wesen/product-rendering.jpg', alt:'WIP product rendering', caption:'Square image caption 2', slot:'slot2', iframe:false },
]">

<!-- { url:'/images/wesen/handheld.jpg', alt:'WIP product photography', caption:'Square image caption 3', slot:'slot3', iframe:false }, -->

<template slot="content">

## Production assets

Based on my wireframes and aided by the tightly scoped user journey, I was able to focus on visually designing a minimal set of interfaces and assets. Among my influences were the Airbnb Design System, Google Material Design and the design language of fashion and jewellery brands.

</template>

<template slot="slot1">

I created a series of SVG icons inspired by the Montserrat font.

</template>

<template slot="slot2">

Photorealistic renders enabled me to show the variety of products possible.

</template>

<template slot="slot3">

I reused WIP samples for product photography, intending to revisit this in future iterations.

</template>

</Content-ImageFrames-SquareImagesRow>


<Content-ImageFrames-FullImageSection url="/images/wesen/wesen-montage-3.jpg" alt="Montage of further discovery process"/>



<Content-MainAsideSection rag="rag-5" :aside="true">

<template v-slot:content>

## Development

As I investigated technologies to power the e&#8209;commerce side of the experience, my main criteria was development speed. I wanted to avoid building common solutions like order management and payments. This led me to consider off-the-shelf platforms like Shopify and Magento. I found an even leaner solution. [Shapeways](https://www.shapeways.com/) (leading 3D printing web platform) offers an API with the capability to directly upload models to a private store hosted on their e-commerce platform. In this way, I could completely outsource checkout, payment and fulfilment. For further technical decisions, I drew on my experience at toucanBox and Makielab:

<!-- The question became what steps (if any) I would take to enhance users' checkout experience. I was already building 3D-print-ready  geometry on the Wesen backend and saving order records in a database. Connecting customers to this record would avoid foreseeable customer service challenges. Emailing this information would avoid the need for user accounts. So I decided to add email capability with Sendgrid. Customers receive an email with a checkout link and a link to their saved pendant, which they can modify and reorder. They can respond to the email with questions. -->

<!-- who save their pendant receive an email with a link to their saved

Users could retrieve their data and render it in the Wesen frontend using their model UID. I decided to smooth this experience by adding an email component. Upon saving a model, the user receives

It became clear that I required a Node.js server to build pendant models for 3D printing.

My main criteria was to setup the necessary e-commerce components to enable orders as quickly as possible. I explored off-the-shelf e-commerce systems like Shopify, Magento and WooCommerce but ... Needed to be even more paired back - no order management, sensitive user data or payments. Shapeways order API could offer this. The Heroku Node.js ecosystem proved remarkably suitable for this use-case.

In specifying production tools and technologies I re-referenced my project goals and drew on past experience: “Ensure that operations can be automated and that manufacture can be fulfilled by a single service (such as Shapeways) with minimal or no post processing” “Minimise the technical overhead of storing personal and payment details by using third-party services” I chose to upgrade and extend the prototype toolchain for production: Customer service email, database to retain created models and orders, considering payment services etc.





by enabling retrieval of saved content and quick CS responses
-->

</template>

<template>

**Experience** | **Solution** |
--- | --- |
Unity or Unreal are the de facto realtime 3D frameworks but they tend to increase the complexity of a web frontend build chain | Three.js is less fully-featured but perfectly serviceable for a simple 3D interface |
Different 3D frameworks powering frontend and backend processing can lead to duplicated work and discrepancies between what the user sees and what is actually manufactured | Three.js can run the same code in the browser and on a Node.js server |
Hosting websites and backend processes on physical infrastructure requires constant maintenance | Node.js / Express server on Heroku cloud infrastructure |
User accounts can greatly improve the customer experience but they are a considerable technical overhead | Send unique content links (saved pendant and checkout links) by email. Conduct all CS using the same email thread  |
{.table .is-fullwidth}

</template>

<!-- In-house payment and order management systems are a considerable technical commitment | Outsource payment and order management to Shapeways (already the fulfillment partner) | -->


<template v-slot:aside>

<Content-Techstack

:techs="[
{ title:'WebGL', description:'Three.js' },
{ title:'UI', description:'Angular 2+' },
{ title:'CSS', description:'SASS, Bulma' },
{ title:'Backend', description:'Node.js, Express, MongoDB, Logentries' },
{ title:'APIs', description:'Sendgrid, Shapeways' },
]"

/>


<!-- <div class="box content">

### Techstack

**WebGL framework** Three.js
~ **UI framework** Guify (prototype) to Angular 2+ (Typescript)
~ **CSS framework** Bulma
~ **Backend** Harp.js (prototype) to Node.js, Express, MongoDB
~ **Email** Sendgrid
~ **Fulfillment** Shapeways order API

<!-- **WebGL framework**
Three.js

**Backend**
Harp.js (prototype) to Node.js / Express / MongoDB

**UI framework**
Guify (prototype) to Angular 2+ (Typescript)

**CSS framework**
Bulma

**Email**
Sendgrid

**Fulfillment**
Shapeways order API

</div> -->

</template>

</Content-MainAsideSection>


<Content-ImageFrames-MainImageSection padding="is-medium-large" url="/images/wesen/system-diagram.png" alt="System diagram of Wesen app" imageClass="is-5by4" :aside="false" :content="false" caption="The Wesen system diagram, detailing user touchpoints and client / server / third-party API interactions."/>





<Content-MainSectionDivider aside="Section 3 of 3" title="Evaluation"/>



<Content-TextSection rag="rag-3" columnOffset="title-small-offset">

<!-- <p class="subtitle">
  Wesen is live. You can customise and order your pendant necklace right now.
</p> -->

<!-- As suggested by my initial market research, Wesen proved to be a relatively low reach product, delighting a small niche. I was please to discover that a proportion of its audience didn't consider themselves creative or technical. -->

### What went well

You can [try the live app](http://www.wesen.studio) and order your pendant from Shapeways. I believe Wesen is a compelling and usable customisation tool, satisfying my original success criteria; _Gifter friendly_ and _End-to-end_. A proportion of Wesen's audience don't consider themselves creative or technical. I also significantly expanded my skills, building deeper empathy for my product and engineering colleagues.

### Lessons learnt

Although business success was never my primary goal, I was still somewhat disappointed Wesen didn't exceed the modest reach predicted by my initial research. Were this to be a priority in any future venture, I draw an valuable lesson: _the importance of working in teams._

Building a product oneself is empowering, but it's also inefficient and risky. For a start, I'm not a natural marketer or sales person. _Getting the word out_ is critically important to product success. Diverse perspectives lead to better products. Specialists get things done better and faster. Correspondingly, I intend to build teams for any future projects at this level of resolution.

### Going forward

Wesen is no longer under active development. Possible next steps include adding gift-card capability, revisiting the value proposition and running a concerted marketing campaign. If that looked promising there are several other dimensions of the e-commerce experience which could be improved (e.g. reviews, testimonials, user generated content), as well as adding more jewellery types to the platform.


<!--

Specialists get things done better and faster.

Perhaps by then other Mass Customisation products will have raised public awareness.
-->

<!-- Wesen dispelled my lingering false-faith in "if you build it, they will come". -->

<!-- Going forward I aim to collaborate with people who have complimentary skills and compensate for my blind spots.

At some point, I will revisit how I communicate the value proposition and put some money behind a marketing push.

Correspondingly, I intend to form a multidisciplinary team for any future ventures or side projects.

It's certainly a romantic idea to design and build a product oneself, but in practice it's an inefficient and risky process.

For most people Mass Customisation remains a futuristic idea. Although I never believed Wesen would change this, I was still somewhat disappointed it didn't achieve significant circulation or sales. Perhaps this was due to timing or the immensely poor odds facing new ventures (90% of startups fail) but I nonetheless draw an important lessons from this outcome: the importance of _working in teams._

The final lesson from Wesen was the importance of team. It's certainly a romantic idea to design and build a product oneself, but in practice it's an inefficient process. Teams bring complimentary skills and perspectives (as mentioned earlier) and specialists get things done faster. As well as appreciating my team all the more in my everyday work, I intend to build teams for any future side projects. -->

<!-- Money making engine metaphore - marketing money goes in, revenue comes out - is it better than a bank or some other investment? -->

<!-- Perhaps even an interesting side note in the broader story of Mass Customisation. -->

<!-- Second, I've learnt to test _Product-market fit_ without building anything if possible - not even building MVPs. It's an inconvenient truth that 90% of startups fail. It's far better to fail fast, without making significant investments. -->

<!-- Were I to return to it, I would focus on one of the first challenges I identified, which was never satisfactorily overcome - that of communicating the value proposition. -->

<template slot="aside">

<div class="columns is-gapless">
  <div class="column is-three-quarters">
        <figure class="image parent-loading is-square">
        <img class="lazyload" data-src="/images/wesen/evaluation.jpg" alt="Pendant worn by a customer">
      </figure>
  </div>
</div>

<!-- <figcaption>

_Due to COVID-19 only plastic materials are currently available._

</figcaption> -->

</template>


</Content-TextSection>



<Content-MetricsSection padding="is-medium-large" :metrics="[
{ metric:'2.7s', description:'Avg. load time for the realtime 3D customisation experience' },
{ metric:'$14', description:'Starting price for a unique pendant in plastic' },
{ metric:'∞', description:'Unlimited variety' },
]"/>
