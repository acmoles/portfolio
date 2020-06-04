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
sidebar: auto
date: 2019-09-12
src: /images/homepage/wesen-mock-baked.jpg
prev: ./art-lebedev-studio
next: ./ecosia
hasFooter: true
---

::: slot top

<!-- Can customers be creators? -->
<Stage-ProjectStage :noise="true" ctaLabel="wesen.studio" ctaUrl="http://www.wesen.studio"
description="Wesen enables anyone to create a unique pendant necklace which can be manufactured on demand by a blend of modern and traditional techniques.">

  <template v-slot:visual-background>
    <figure class="full-screen">
      <Heros-ImageHero src="/images/wesen/wesen-header-2.jpg" alt="Wesen Studio examples"/>
    </figure>
  </template>

</Stage-ProjectStage>


:::

<!-- <li>Responsive web application</li>
<li>2018</li> -->

<Content-ContextSection :box="true">

<template v-slot:main>

## Context

Recent years have seen a gradual increase in awareness of product customisation and on-demand manufacturing. But to this day we can see little evidence of the promised revolution due to relatively high prices and no killer app.

In 2015 I had the chance to work at [Makielab](/makielab) on customisable children’s toys. We enjoyed modest success, catching the attention of Disney who eventually bought the startup. My intention with Wesen was to leverage some lessons learnt there, in order to push the envelope of the [Mass Customisation](http://www.google.com) space.

Firstly, I wanted to explore the possibility of a lightly-constrained creation experience, able to generate infinite variations while being intuitive and fun to use. _I was convinced that suitable constraints could enhance the creativity of customers, rather than restrict it._ Secondly, to completely automate and outsource the fulfillment process.

A separate motivation was to increase my empathy for colleagues and stakeholders as a Product Designer. I wanted to re-experience every stage of digital product development from other perspectives - founder, marketer, product, developer, operations, as well as design.

</template>

<template v-slot:side>

**Product** Responsive web application

**Sector** Mass customisation e-commerce, 3D content creation

**Timeframe** 2018

**Team composition** Personal project

<!-- _This image shows a mixture of hand-made and procedurally generated pendants_ -->

</template>

</Content-ContextSection>




<Content-ThreeColumnSection padding="is-large">

<template v-slot:column1>

###  The challenge

Enable customers to customise a product in the web browser and purchase it. Fulfill their order automatically using outsourced manufacturing.

<!-- create or customise -->

</template>

<template v-slot:column2>

### The outcome

Wesen fulfils my original success criteria and helped me learn a great deal. The most valuable lessons I didn't expect; the importance of _getting the word out_ and _working in teams._

</template>

<template v-slot:column3>

### My role

UX Product designer
~ Full-stack JS developer

</template>

</Content-ThreeColumnSection>




<Content-MainSectionDivider aside="Section 1 of 3" title="Discovery"/>




<Content-PointsSection :content="true" :points="[
{ src:'/svg-icons/icon_search.svg', alt:'sad face', title:'Jewellery balanced market size and technical constraints', description:'Search keywords paired with customisation typically focused on personal appearance and self expression. Jewellery satisfied this criteria and tends to be small, high value objects suitable for 3D printing.' },

{ src:'/svg-icons/icon_conversation.svg', alt:'Group', title:'People weren\'t asking to create jewellery themselves', description:'Search keyword volume was much higher for customisation than creation. This suggested lower awareness and demand for creation, but also less competition to rank. This would have implications for the value-proposition and communication.' },

{ src:'/svg-icons/icon_gift.svg', alt:'clock', title:'Customised or personalised products tended to be gifts', description:'Based on the messaging on competitor websites. Gifting remains highly seasonal. Google Consumer Barometer (2018) suggested more than 50% of fashion and accessories gift purchases were on mobile.' },

{ src:'/svg-icons/icon_coffee.svg', alt:'lightbulb', title:'Customised gifts looked like a growing trend', description:'It wasn\'t hard to find designers in my network who had recently given a customised gift. They shared anecdotes which painted a picture of this becoming increasingly common.' },

{ src:'/svg-icons/icon_neutral.svg', alt:'documents', title:'Non-technical people felt daunted by customisation tools', description:'Designers found the process of making their gifts empowering, while non-designers found it initially daunting and later frustrating. Sometimes they looked for expert help.' },

{ src:'/svg-icons/icon_pendant.svg', alt:'device', title:'Pendants seemed more suitable than rings', description:'The majority of gifts among my interviewees were rings. Pendants came in second place. However, with rings, I foresaw difficulties such as sizing and gemstone fixtures.' },
]">

<template v-slot:content>

## Research

<p class="subtitle">
  I informally interviewed four designers and one non&#8209;designer, each who had recently designed or commissioned bespoke jewellery.
</p>

At the outset, I wasn’t set on any particular product category. My approach was to broadly investigate the mass customisation market and make a choice based on estimated product-market fit. I used digital marketing techniques to gauge the market potential and understand what language and search terms potential customers might use. I followed up with qualitative interviews.

</template>

</Content-PointsSection>




<Content-ThreeColumnSection :content="true" columnOffset="three-offset">

<template v-slot:content>

## User profiles

The next step was to clearly define and build empathy for potential customers. Qualitative interviews suggested a primary persona _Gifters_ and a secondary persona _Enthusiasts._ In some cases customers could be both. Enthusiasts are typically a smaller segment, so I decided to focus on gifters. I reasoned that a flow optimised for gifters was unlikely to deter enthusiasts.

</template>

<template v-slot:column1>

####  Gifter

---

*Buyer persona*

When I need to give an important gift, I want to design it myself so I can be sure it will make the recipient happy.

<br>

_“I’m looking for something which will show them how much I care”_
~ _“I want to give something unique, which they couldn’t get anywhere else”_
~ _“It takes ages to find the perfect gift”_
~ _“A gift should be personal, something which reminds them of me”_
~ _“I want to feel confident giving the gift”_



</template>

<template v-slot:column2>

#### Enthusiast

---

*Buyer persona*

When new and unusual products become available, I want to try them out so I'm on the cutting edge.

<br>

_“People expect me to find the next trend”_
~ _“I like to experiment with new technologies”_
~ _“I have a personal style and I carefully curate what I wear”_
~ _“I want to wear jewellery no-one else has seen before”_

</template>

<template v-slot:column3>

<div class="columns is-gapless">
  <div class="column is-three-quarters">
    <figure class="image is-9by16">
      <img class="lazyload" data-src="/images/wesen/journey_characters2.jpg" alt="Cartoon of enthusiasts and gifters">
    </figure>
  </div>
</div>

</template>

</Content-ThreeColumnSection>





<Content-ThreeColumnSection padding="is-large" :content="true" columnOffset="three-offset">

<template v-slot:content>

## Scope and objectives

The results of my research posed two main user experience challenges:

- How to communicate the value of lightly-constrained product creation to an audience that currently isn't asking for it?
- How to address the anxiety of non-technical users approaching a customisation interface?

Addressing these became the first pillar of my design activity. The second was to reach a level of product resolution where real customers could make actual orders - I refered to this as _End-to-end._ To facilitate achieving this within a reasonable timeframe I paired back the typical components of an e-commerce flow, leaving behind only the critical elements necessary to win my first customers.

</template>

<template v-slot:column1>

####  Gifter friendly

---

Build confidence with an e-commerce store that explains the value proposition and allows shoppers to browse pre-designed products. Make it possible for these to be selected as the foundation for further customisation or bought immediately.

Address anxiety and empower non-designers with an intuitive interface that doesn’t require a tutorial and can be learnt within 5 seconds. Enable customers to express themselves meaningfully without requiring a high level of skill or design experience. Minimise the number of controls and progressively disclose supporting features.

</template>

<template v-slot:column2>

#### End-to-end

---

Make it possible for customers to buy the pendant they create and ensure automated fulfillment of their order.

Save the customer's design and order data, allowing them to return to it and make modifications or repeat orders.

Establish a line of communication for customers to enquire about their order and report any problems.

Minimise technical and operational overhead by relying on third-party cloud services where possible. Outsource complex systems like payments and accounts.

</template>

<template v-slot:column3>

<figure class="image is-2by1">
  <img class="lazyload medium-zoom" data-src="/images/wesen/draft-journey-mvp.png" alt="Flowchart of user journey">
</figure>
<figcaption>

This simplified journey map indicates features to be outsourced or removed for the pilot - marked by the red dashed line.

</figcaption>

</template>

</Content-ThreeColumnSection>




<Content-ImageFrames-FullImageSection url="/images/wesen/wesen-montage-1.jpg" alt="Montage of further discovery process"/>




<Content-ImageFrames-SquareImagesRow :content="true" :images="[
{ url:'https://player.vimeo.com/video/293190700', alt:'Blender prototype video', caption:'Square image caption 1', slot:'slot1', iframe:true },
{ url:'https://player.vimeo.com/video/293190664', alt:'Interactive webGL prototype', caption:'Square image caption 2', slot:'slot2', iframe:true },
{ url:'/images/wesen/webgl-feasibility.jpg', alt:'Metal shader exploration', caption:'Square image caption 3', slot:'slot3', iframe:false },
]">

<template slot="content">

## Low-fi Prototyping

<p class="subtitle">
With my background in Industrial Design, I was already familiar with 3D modelling software. I assembled a list of promising tools, extending it with input from designers in my network.
</p>

My approach was to re-imagine a tool with simplified interaction or reduced capability and then combine several such tools to see if interesting synergies emerged. To formalise my thinking, I rated these ideas by _Expressiveness_ and (ease of) _Implementation_. During this process I started to think of myself as 'unshackling' expressive modelling tools from their specialist software confines.

</template>

<template slot="slot1">

#### Blender basic interactive

I chose to proceed with an idea combining _Radial array_ and _Control geometry._ I found it personally fun to use - often producing pleasing and unexpected outcomes.

Blender had proven a useful platform for experimentation. But I wasn't able to use it for value or usability testing because my subjects weren't fluent in the Blender interface.

</template>

<template slot="slot2">

#### WebGL basic interactive

To overcome this limitation, I quickly built a basic yet functional prototype in WebGL. I also took the opportunity to explore various JS libraries before committing in production.

It was gratifying to see testers immediately move the control points. I observed an attitude of curiosity, even among testers I expected to be daunted by customisation interfaces.

</template>

<template slot="slot3">

#### WebGL feasibility

A growing concern was that customers could feel disconnected from the product they would eventually buy.

To mitigate this risk, I prioritised reaching a high level of graphical realism. Matcap shaders offered a solution which also met performance requirements.

</template>

</Content-ImageFrames-SquareImagesRow>




<Content-MainAsideSection padding="is-large" :content="true" :aside="true" columnOffset="table-offset">

<template slot="content">

## Lessons from user testing

Before moving into high-fidelity design and development, I performed further usability testing on the proposed direction to validate design decisions, identify challenges, and iterate based on real user feedback.

</template>

<template>

**Observation** | **Remedy** |
--- | --- |
_“I wish I could go back to the way I had it before”_ | I implemented an undo feature and reorganised the interface to accommodate its button |
_“I have no idea what size it is”_ | I added a scale grid I and an introductory animation sequence, showing the pendant and chain in context |
_“These messages just get in my way”_ Error messages (further discussion below) broke the creative flow and led to a frustrating experience | Now the user only encounters error messages once they enter the eyelet mode for the first time, thereby signalling a desire to finish the pendant and checkout. I also made error messages dismissable until the next user action |
_“The first thing I wanted to do was push all the sliders to maximum”_ In some cases testers created the largest possible pendant | This signalled the need for another error condition - where the pendant design is unreasonably large - both too heavy to wear and very expensive. I also tried shrinking the design area but this felt constricting |
{.table .is-fullwidth}

</template>

<template slot="aside">

<div class="columns is-gapless">
  <div class="column is-two-thirds">
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/wesen/in-use.jpg" alt="webGL prototype in use">
    </figure>
  </div>
</div>

</template>

</Content-MainAsideSection>




<Content-ImageFrames-FullImageSection url="/images/wesen/wesen-montage-2.jpg" alt="Montage of design iteration"/>


<Content-FreeSection>

<div class="columns">
<div class="column is-two-thirds">

## E-commerce experience

<p class="subtitle">
  Guided by my findings, I was confident the customisation tool was ready to be shaped into an e&#8209;commerce flow.
</p>

At first I imagined a sequence of steps, often referred to as a 'wizard' pattern, believing this would increase usability. I built mockups of increasing fidelity and continued to test with users. I employed a hybrid approach, mixing static screens and a modified version of my WebGL prototype. But something was wrong; _somewhere along the way I had lost the magic of the earlier tests._

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

I realised this was too cumbersome and restrictive. I evolved my design to include two 'modes' which users could toggle between - sculpt mode and layout mode. But the eureka moment finally came when I remembered that my earlier prototype contained none of this usability 'help' yet testers found it perfectly intuitive. Modes, albeit better than a wizard, still just got in user's way. I stripped it out.

Where the wizard pattern did add value, was in separating the expressive phase of creation from tasks necessary to completing the order - adding the necklace chain eyelet, ensuring the pendant was valid for 3D printing and filling out details.

</div>
</div>

</Content-FreeSection>

<Content-ImageFrames-MainImageSection padding="is-medium-large" imageClass="is-2by1" url="/images/wesen/messages.png" alt="Message window which informs users of geometry problems and offers help" :aside="true" :content="true">

<template v-slot:content>

## Input validation for 3D geometry

Offering users expressive tools introduced a challenging problem - how to ensure they create valid geometry for manufacture by 3D printing? Through user testing I identified four common error cases:

1. The radial segments do not connect, so that the necklace is not a single volume
2. The eyelet does not connect to the pendant
3. The pendant blocks the eyelet so that the chain would not fit
4. The pendant is extremely large

I developed a system to detect these problems and display error notifications. Although I was aware of additional hard-to-detect problems such as non-manifold or thin geometry, since they rarely occurred, I chose not to address them in the MVP. Rather, I planned to manually fix these models for customers.

<!-- An important lesson from user testing was not to show these notifications until the user signals a desire to advance in the purchase flow. Otherwise, they completely counteracted my efforts to reassure non-technical users. Error notifications start once they become useful; when the user adds an eyelet for the necklace chain. -->

</template>

<template v-slot:aside>

<div class="box">

The notification window begins by offering tips and later, when appropriate, reports geometry errors.

</div>

</template>

</Content-ImageFrames-MainImageSection>




<Content-MainSectionDivider aside="Section 2 of 3" title="Delivery"/>




<Content-ImageFrames-SquareImagesRow :content="true" :images="[
{ url:'/images/wesen/Iconography-square.png', alt:'Production icon assets', caption:'Square image caption 1', slot:'slot1', iframe:false },
{ url:'/images/wesen/product-rendering.jpg', alt:'WIP product rendering', caption:'Square image caption 2', slot:'slot2', iframe:false },
{ url:'/images/wesen/handheld.jpg', alt:'WIP product photography', caption:'Square image caption 3', slot:'slot3', iframe:false },
]">

<template slot="content">

## Production assets

Small amount of high quality visual assets and content. Minimal number of screens with highly polished UI. I drew inspiration from the Airbnb Design System and Google Material Design 2.0 while also referencing the design language of fashion and jewellery brands.

</template>

<template slot="slot1">

Production SVG icon assets

</template>

<template slot="slot2">

Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.

</template>

<template slot="slot3">

Maecenas sed nibh eleifend, congue felis et, malesuada eros. Nullam a metus quis eros pretium hendrerit ut a turpis.

</template>

</Content-ImageFrames-SquareImagesRow>





<Content-MainAsideSection :content="true" :aside="true" columnOffset="table-offset">

<template v-slot:content>

## Development

My main criteria was to setup the necessary e-commerce components to enable orders as quickly as possible. I explored off-the-shelf e-commerce systems like Shopify, Magento and WooCommerce but ... Needed to be even more paired back - no order management, sensitive user data or payments. Shapeways order API could offer this. The Heroku Node.js ecosystem proved remarkably suitable for this use-case.

In specifying production tools and technologies I re-referenced my project goals and drew on past experience: “Ensure that operations can be automated and that manufacture can be fulfilled by a single service (such as Shapeways) with minimal or no post processing” “Minimise the technical overhead of storing personal and payment details by using third-party services” I chose to upgrade and extend the prototype toolchain for production: Customer service email, database to retain created models and orders, considering payment services etc.

</template>

<template>

**Experience** | **Solution** |
--- | --- |
Unity or Unreal are the de facto realtime 3D frameworks but they tend to increase the complexity of a web frontend build chain | Three.js is less fully-featured but perfectly serviceable for a simple 3D interface |
Different 3D frameworks powering frontend and backend processing can lead to duplicated work and discrepancies between what the user sees and what is actually manufactured | Three.js can run the same code in the browser and on a Node.js server |
Hosting websites and backend processes on physical infrastructure requires constant maintenance | Node.js / Express server on cloud infrastructure (Heroku) |
In-house payment and order management systems are a considerable technical commitment | Outsource payment and order management to Shapeways (already the fulfillment partner). Conduct all CS and CRM through email. |
{.table .is-fullwidth}

</template>


<template v-slot:aside>

<div class="box content">

**WebGL framework**
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

</div>

</template>

</Content-MainAsideSection>


<Content-ImageFrames-MainImageSection padding="is-medium-large" url="/images/wesen/system-diagram.png" alt="System diagram of Wesen app" imageClass="is-5by4" :aside="false" :content="false" caption="The Wesen system diagram, detailing user touchpoints and client/server/third-party API interactions."/>





<Content-MainSectionDivider aside="Section 3 of 3" title="Evaluation"/>



<Content-TextSection>

<!-- <p class="subtitle">
  Wesen is live. You can customise and order your pendant necklace right now.
</p> -->

<!-- As suggested by my initial market research, Wesen proved to be a relatively low reach product, delighting a small niche. I was please to discover that a proportion of its audience didn't consider themselves creative or technical. -->

### What went well

Wesen features a compelling, usable customisation tool and enables customers to order their creation. A proportion of its audience don't consider themselves creative or technical. My original success criteria, _Gifter friendly_ and _End-to-end_, are satisfied. I also significantly extended my skills and grew empathy for my product and engineering colleagues.

### What didn't go well

Although business success was never my primary goal, I was still somewhat disappointed Wesen didn't exceed the modest reach predicted by my initial research. Were this to be a priority in any future venture, I draw an important lesson: _the importance of working in teams._

Building a product oneself is empowering, but it's also inefficient and risky. For a start, I'm not a natural marketer or sales person. _Getting the word out_ is critically important to product success. Diverse perspectives lead to better products. Specialists get things done better and faster. Correspondingly, I intend build teams for any future projects at this level of resolution.

### Going forward

Wesen is no longer under active development. I intend to revisit communication of the value proposition and make a marketing push at some point. If that proved successful there are several dimensions of the e-commerce experience which could be improved (e.g. reviews/testimonials, user generated content). There's also the possibility of adding more jewellery types to the platform.


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
    <Content-ModalWrapper type="link" url="http://www.wesen.studio" label="wesen.studio">
      <figure class="image is-square">
        <img class="lazyload" data-src="/images/wesen/evaluation.jpg" alt="Pendant worn by a customer">
      </figure>
    </Content-ModalWrapper>
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
