---
uid: 7
title: toucanBox
subtitle: Refining the onboarding flow
type: double-right-bottom
navStyle:
  style: light
  tint: blue-tint
  progress: light
background: blue
case1: Case study
case2: Two parts
sidebar: false
date: 2019-09-12
src: /images/homepage/toucan-baked.jpg
prev: ./makielab
next: ./random-international
hasFooter: true
---
<!-- A redesigned sign up funnel to improve communication, useability and confidence and a strategic design project to identify new ways to improve customer retention -->
::: slot top

<Stage-ProjectStage :noise="true" ctaLabel="toucanbox.com" ctaUrl="https://www.toucanbox.com" rag="toucan-rag" ragTitle="rag-1" titleColumnClass="is-three-fifths" :hasModal="true"
description="I guided the organisation through a human-centred design process which had a transformative effect on our approach to product development.">

<template v-slot:visual-column>
  <figure class="toucan-image">
    <b class="decoration svg-yellow-splat"/>
    <Heros-ImageHero src="/images/toucanbox/combined_onboarding.png" alt="toucanBox homepage"/>
    <!-- <b class="decoration svg-bee"/> -->
    <!-- <b class="decoration svg-confetti-red"/> -->
    <b class="decoration svg-confetti-yellow"/>
    <b class="decoration svg-flash-blue"/>
    <b class="decoration svg-flash-yellow"/>
    <!-- <b class="decoration svg-pencil-parachute"/> -->
  </figure>
</template>

<template v-slot:modal>

<Content-ModalAlert label1="toucanBox 2017" label2="toucanBox current" url1="https://toucanwww.netlify.app/" url2="https://www.toucanbox.com">

**toucanBox.com**

I created a static mirror of the toucanBox homepage at the conclusion of this project in Summer 2017.

</Content-ModalAlert>

</template>

<template v-slot:platform>

Responsive web app

</template>

<template v-slot:timeframe>

2017

</template>

<template v-slot:my-role>

Project lead
~ UX/UI Designer

</template>

<template v-slot:team>

CTO
~ 2 full-stack developers
<!-- ~ stakeholders in Marketing and Creative -->

</template>

</Stage-ProjectStage>

<style lang="sass">
@import "@theme/styles/variables.sass"

.toucan-image
  position: absolute
  height: 28vh
  max-height: 16em
  top: 0
  @media screen and (min-width: $tablet)
    top: -32%
    left: -28%
    height: 128%
    max-height: none
  @media screen and (min-width: $fullhd)
    top: -38%
    left: -28%
    height: 128%
    max-height: none
  img
    position: relative
    height: 100%
    max-width: initial

.toucan-rag
  padding-right: 2em

@media screen and (min-width: $fullhd)
  .toucan-rag
    padding-right: 3em

</style>

:::



<Content-TextSection rag="rag-4" padding="is-initial" columnOffset="title-offset">

##  Case study

<p class="subtitle">
toucanBox is an award-winning startup subscription service delivering creative craft boxes to children aged 3-8.
</p>

Each toucanBox is addressed directly to the child and contains all the materials needed to complete crafty projects, with colourful step by step instructions and an activity magazine. New customers register through the website.

We secured funding in mid-2016 and were ready to scale our operations. Although toucanBox had firmly embraced an online-first business model, we weren't thinking about our product in a holistic way that included the online experience. Our scaling roadmap didn't include significant work on the user-facing portion of our web platform. _As the only (digital) product person in the company, I knew it was up to me to change the mindset._

My breakthrough came when I discovered our average funnel conversion rate lagged behind that of other comparable subscription businesses. From this I could derive a clear and compelling expected ROI - and so I gained my mandate.

As project lead, I guided the organisation through a human-centred process of research, content strategy, business alignment, user interface and interaction design, usability testing, and web development.

<template v-slot:aside>

####  The challenge{ .challenge-title }

How might we increase funnel conversion rate; achieving our business goal but also helping our customers achieve their goals. How might we build a shared organisational understanding of the customer journey.

<br>

#### The outcome{ .challenge-title }

A usable, reassuring, and technologically sustainable homepage and signup experience which raised funnel conversion rate by an average of **25%** while reducing messaging related customer service cases.

_I have omitted confidential information in this case study._
{ .secondary }

</template>


</Content-TextSection>


<!-- <Content-ThreeColumnSection padding="is-large">

<template v-slot:column1>

###  The challenge

How might we increase funnel conversion rate; achieving our business goal but also helping our users achieve their goals. How might we build a shared organisational understanding of the user’s journey.

</template>

<template v-slot:column2>

### The outcome

A usable, reassuring, and technologically sustainable homepage and signup experience which raised funnel conversion rate by an average of **25%** while reducing messaging related CS cases.

</template>

<template v-slot:column3>

### My role

Project Management
~ Customer Research
~ UX/UI Design
~ Analysis and Evaluation

</template>

</Content-ThreeColumnSection> -->



<Content-MainSectionDivider aside="Section 1 of 3" title="Discovery"/>



<Content-PointsSection padding="is-large" :points="[

{ src:'/svg-icons/icon_device.svg', alt:'device', title:'Prospective customers are usually on their phones', description:'85% of users accessed the website on mobile or tablet. The most common source was our social media ads.' },

{ src:'/svg-icons/icon_divert.svg', alt:'divert', title:'Dropout after partially completing signup was surprisingly high', description:'A significant proportion of dropouts occurred near the end of the details form, at the payment section.' },

{ src:'/svg-icons/icon_repeat.svg', alt:'repeat', title:'We were pushing users into the signup funnel too soon', description:'Many of the signup dropouts returned to the homepage and eventually converted.' },

{ src:'/svg-icons/icon_understanding.svg', alt:'question', title:'It wasn’t clear in our messaging that we offer a subscription', description:'This was a frequent complaint. On average, users only spent 30s on the landing page and 75% didn\'t scroll far enough to find key information.' },

{ src:'/svg-icons/icon_visible.svg', alt:'eye', title:'We needed more box imagery showing breadth of the range', description:'This was the most common theme in user and prospect interviews. It was a strength that we weren\'t leveraging.' },

{ src:'/svg-icons/icon_sad.svg', alt:'sad face', title:'Lack of feedback that a trial code was applied caused anxiety', description:'I was aware of this from complaints and testing. It was the cause of the strongest negative emotions I encountered.' },

]">

<template v-slot:content>

## Research

<p class="subtitle">
  I usability tested the existing flow and engaged both customers and non-customers in a dialogue to uncover core motivations.
</p>

To supplement this, I collected data insights and stakeholder knowledge from across the business; customer service (CS), website analytics, net promoter score (NPS), customer surveys and the production database, sometimes asking new questions of our data to fill in the gaps (including writing a few database queries of my own). Along the way, I captured insights in a central location accessible to the whole organisation.



<!-- I gathered data from Google Analytics, Hotjar and customer service cases:
Interviewing customers provided me with further insight into their expectations and needs. I recorded standout and commonly occuring comments:

Analytics, asking customer service, interviewing existing customers and parents who weren’t customers. To gain a better understanding of toucanBox's business goals and constraints along with user needs and behaviours, I kicked off a discovery phase based on a range of quantitative and qualitative research methodologies. I held a series of stakeholder interviews across several business lines to better understand toucanBox's business goals, requirements, and constraints. Each of these interviews was captured in audio and text format, and was used to identify common themes and specific needs. I also explored existing data and artefacts, including.  -->

</template>

</Content-PointsSection>


<Content-QuoteSection rag="rag-4" quote="It’s fun, I can see it’s for kids. But I can't see straight away why I might want it or how it works." attribute="Ameera, mum to Rafi"/>


<Content-ThreeColumnSection padding="is-large" columnOffset="three-offset">

<template v-slot:content>

## Who are our customers?

<p style="padding-right: 6em;">
Through internal stakeholder consultation and customer interviews, I identified the following high level personas and their corresponding motivations:
</p>

</template>

<template v-slot:column1>

####  Parent

---

<div class="small">

*Buyer persona*

In general it’s the parent who responds to our advertising and comms, makes the purchase, manages the subscription and engages with customer service.

<br>

**I want my child to be happy**
~ They enjoy crafting _“We do crafts every weekend and they love it”_
~ They want toucanBox _“They saw it on TV and asked me for it”_

<br>

**I want to be a good parent**
~ I want to share positive experiences with my child, forming lasting memories _“I really value the time we spend together”_
~ I want to support my child’s education and development _“If only it was easier to find things for my kids to do that support their education”_
~ I want to be prepared _“I want to do more crafting with my kids but I’m not creative”_

</div>

</template>

<template v-slot:column2>

#### Gifter

---

<div class="small">

*Buyer persona*

A family friend or relative. Possibly already a customer.

<br>

**I want to give a good gift**
~ I want to show how much I care _“Finding a gift that’s good enough can be hard”_
~ I want it to be quick and easy, for me and the recipient _“A good gift doesn’t create any work for whoever I give it to”_

<br>
<br>

</div>

#### Child

---

<div class="small">

*User persona*

The box experience is all about the child. Their enjoyment drives the decision to remain subscribed. They want to be entertained or to do what they've seen on TV or tried at school.

<!-- <br> -->

<!-- **I want to be entertained**
~ I want to do what I’ve seen my friends do / seen on TV (YouTube) / done at school -->

</div>

</template>

<template v-slot:column3>

<figure class="image is-square">
  <img class="lazyload" data-src="/images/toucanBox/users.jpg" alt="Cartoon of users">
</figure>

</template>

</Content-ThreeColumnSection>


<Content-ImageFrames-FullImageSection url="/images/toucanBox/warehouse-wide.jpg" alt="Montage of discovery artefacts">
<template v-slot:caption>

The toucanBox fulfilment warehouse at Heathrow

</template>
</Content-ImageFrames-FullImageSection>


<Content-ThreeColumnSection padding="is-large" rag="rag-5" columnOffset="three-offset">

<template v-slot:content>

## Collaboration and objectives

Internal stakeholder engagement was crucial to understand the overarching business goals and challenges, but also to build a sense of ownership in the project outcomes. I needed to establish a _'product mindset'_ around the online experience, so that we would continue to measure, evaluate, and iterate the platform on an ongoing basis.

I involved key stakeholders in a journey mapping workshop to visualise the front- and back-stage activities comprising a subscription. This equipped me with important foundational knowledge but also helped other departments empathise with the customer. I followed up with a second workshop, this time focussed on optimising the core value proposition, messaging and content hierarchy. We used our new mission statement as a starting point: _“Unlocking your creativity one box at a time.”_

<!-- As well as generating some snappy copy, we realised we were mixing up 'Why toucanBox' and 'How it works'. Going forward we knew to avoid this pitfall.
In a technique inspired by the product agency [Made By Many](https://www.madebymany.com/)
-->

I summarised our insights into six 'Product Principles' each with suggested ideation starting points:

1\. Easy	&nbsp;	&nbsp;2. Clear	&nbsp;	&nbsp;3. Trustworthy	&nbsp;	&nbsp;4. Open	&nbsp;	&nbsp;5. Personalised	&nbsp;	&nbsp;6. Flexible
{.principles}

<style lang="sass">

  p.principles
    color: white

</style>


We agreed the first two principles were most relevant to our goal of increasing conversion rate. This focus enabled me to define clear measures of success through general and channel-specific KPIs.

<!-- ‘Why toucanBox?’ and ‘How it works.’


the hierarchy of content on the homepage and messaging throughout the flow.

hierarchy of content

distill our value proposition into three digestible headings




Based on the insights collected through research and discovery, I held a series of workshops with the project team to turn insights into action.

We knew Increase funnel conversion rate

so that key stakeholders would champion an outcome driven attitude as the project unfolded.



 the existing online experience, but to instil a sense of ownership in the project outcomes. For our supporter engagement strategy to succeed, we needed key stakeholders in the organization to buy in and champion the mindsets and methods we established as the project unfolded.

Journey mapping workshop

Value proposition workshop

How might we? Jobs to be done and/or user story. Measurable objectives would be better. Design principles? Increase funnel conversion rate. PM-esq stuff. We needed to build a “product” mindset around the signup experience. This would let us make decisions based on real insights and to continuously measure, evaluate, and iterate on the platform over time.

Based on the insights collected through research and discovery, I held a series of workshops with the project team to turn insights into action.

Guided by our findings, I defined clear measures of success for the project through generalized and channel-specific KPIs.

I broke down the overarching project goal into six focus areas under two themes. Unlocking your creativity one box at a time:

I then summarised customer quotes and supporting data into six 'product Design Principles,' each with suggested ideation starting points:

1. Easy
2. Clear
3. Trustworthy
4. Open
5. Personalised
6. Flexible

Easy, Clear, Open and Trustworthy with an overhaul of the acquisition funnel and more help and information on the website. -->

</template>

<template v-slot:column1>

####  Make it clear

---

<div class="small">

Refine how we communicate the toucanBox value proposition with messaging and content optimised for fast comprehension.

Minimise misunderstanding and effectively translate our typical marketing messages “free craft box” into the full picture “toucanBox is a craft box subscription you can try for free”.

Reduce anxiety about price and discounts by providing clear and timely feedback.

</div>

</template>

<template v-slot:column2>

#### Make it easy

---

<div class="small">

Enable comparison between the three box sizes.

Minimise the number of steps, clicks and details required to complete signup.

Build confidence throughout the funnel by following usability best practices, validated by thorough user testing.

Establish a consistent UI language with a living design system.

</div>

</template>

<!-- <template v-slot:column3>

#### Trustworthy

---

<div class="small">

Be more human in the tone of our design and copywriting.

Minimise the number of steps, clicks and details required to complete signup.

Build confidence throughout the funnel by following usability best practices, validated by thorough user testing.

Establish a consistent UI language with a living design system.

</div>

</template> -->

<template v-slot:column3>

<Content-InfoBox :hasIcon="true" :hasAction="true" type="modal" label="See principles" style="margin-bottom: 3em;">

<p style="padding-right: 1em;">
I gathered everything we learnt about our users into a set of 'Product Principles' the whole organisation could access and benefit from.
</p>

<template slot="modal">

<Content :page-key="$site.pages.find(p => p.path === '/extra/toucanbox-principles/').key"/>

</template>

</Content-InfoBox>

</template>

</Content-ThreeColumnSection>







<Content-ImageFrames-FullImageSection url="/images/toucanBox/onboarding-montage.jpg" alt="Montage of discovery artefacts"/>






<Content-ImageFrames-SquareImagesRow rag="rag-4" :images="[
{ url:'/images/toucanBox/main-stage-square.png', alt:'Optimise the \'main stage\'', caption:'Square image caption 1', slot:'slot1', iframe:false, action: {
  type: 'modal',
  label: 'Iterations',
  slot: 'modal1'
  } },
{ url:'/images/toucanBox/product-section.png', alt:'Optimise the product section', caption:'Square image caption 2', slot:'slot2', iframe:false, action: {
  type: 'modal',
  label: 'Iterations',
  slot: 'modal2'
  } },
{ url:'/images/toucanBox/ia-nav.png', alt:'Optimise site nav and IA', caption:'Square image caption 3', slot:'slot3', iframe:false },
]">

<template slot="content">

## Testing prototypes

<p class="subtitle">
  Equipped with strategic objectives generated with input from across the organisation, my next step was to iterate towards a design solution.
</p>

Four design challenges stood out as critical to the project’s success; the 'main stage', product section, site navigation and the details form. I didn't rely solely on upfront research and tested continuously with stakeholders and users. NB: trialist mode is activated when a user enters a valid discount code or if they arrive from a paid marketing source with a URL embedded code.

<!-- Insights from the journey mapping and value proposition workshops enabled me to rapidly iterate flow, information architecture, usability, interface and visual design from a strong foundation. Nevertheless, I didn't solely rely on upfront research and tested constantly with stakeholders and users. -->




<!-- Rapid wireframing and prototyping

with Adobe Xd, Invision, and React helped the project team explore several directions before identifying a promising design approach.

Having defined the relationship of the new feature to the existing system and the specific personalisation options we would offer, the next challenge was to establish how it would be presented to customers.

Before moving into high-fidelity design and development, I performed usability testing on the proposed direction for the signup experience to validate design and content and decisions, identify challenges, and iterate based on real user feedback.

I sketched and iterated all sections of the acquisition funnel, applying the new information architecture and improving useability, consistency and visual design.

Based on the analysis and project goals, four interface design challenges stood out to me as critical to the project’s success:

I recruited a range of study participants that closely matched our defined user personas, and designed a usability study that would examine several different signup flows. -->

<!-- Rapid wireframing and prototyping with Adobe Xd, Invision, and React helped the project team explore several directions before identifying a promising design approach. -->
<br>
<br>

### Landing page

</template>

<template slot="slot1">

#### 'Main stage'

Leveraging our newly optimised messaging to communicate the value proposition clearly and quickly.

- Clear upfront product value statement{ .check }
- Leveraging our quality video content (autoplay on desktop){ .check }
{ .check-list }

</template>

<template slot="modal1">

<figure class="image is-2by1">
  <img class="lazyload" data-src="/images/toucanBox/main-stage-detail.png" alt="Iterations of the Main Stage">
</figure>

</template>

<template slot="slot2">

#### Product section

Enabling comparison between each box, while emphasising their different propositions.

- Compact vertically stacking cards with detail views{ .check }
- Not neglecting desktop users - three column layout{ .check }
{ .check-list }

</template>

<template slot="modal2">

<figure class="image is-2by1">
  <img class="lazyload" data-src="/images/toucanBox/product-section-detail.png" alt="Iterations of the Product Section">
</figure>

</template>

<template slot="slot3">

#### Information architecture

Redesigned sitemap and site-wide navigation, able to accommodate existing content and scale to new verticals.

<!-- scale to . The right-oriented, persistent login button fades out as the menu slides in. Site navigation and structure. New content (schools, inside a box, blog/activities). Around what users are really looking for e.g. What's inside the box - reachable by both scrolling and clicking a button in the nav. -->

- Always visible login button to reduce CS cases{ .check }
- Links that focus on what prospects are trying to learn{ .check }
{ .check-list }

</template>

</Content-ImageFrames-SquareImagesRow>




<Content-ImageFrames-SquareImagesRow padding="is-medium"  :images="[
{ url:'/images/toucanBox/signup-funnel.png', alt:'Optimise the signup funnel', caption:'Square image caption 1', slot:'slot1', iframe:false, action: {
  type: 'modal',
  label: 'Wireframes',
  slot: 'modal1'
  } },
{ url:'/images/toucanBox/mobile-steps.png', alt:'Mobile friendly steps', caption:'Square image caption 2', slot:'slot2', iframe:false, action: {
  type: 'link',
  label: 'Prototype',
  url: 'https://signup-prototype.netlify.app/?code=test'
  } },
{ url:'/images/toucanBox/choose-plan.png', alt:'Choose a plan', caption:'Square image caption 3', slot:'slot3', iframe:false, action: {
  type: 'modal',
  label: 'Video',
  slot: 'modal3'
  } },
]">

<template slot="content">

### Signup funnel

</template>

<template slot="slot1">

#### Reassuring information

Single page signup form, the simplest and most usable solution we could currently offer the user.

- Clear feedback of discount and price status{ .check }
- Customisable trial offer message{ .check }
- Revamped input validation logic{ .check }
{ .check-list }

</template>

<template slot="modal1">

<figure class="image is-2by1">
  <img class="lazyload" data-src="/images/toucanBox/wireframe-flow-signup.png" alt="Iterations of the Main Stage">
</figure>

</template>

<template slot="slot2">

#### Mobile-friendly steps

Splitting fieldsets onto separate pages (mobile and desktop) with a continue button and persistent order basket.

- Could be more usable on mobile and enable more information capture for personalisation{ .check }
- Beyond the current technical expertise of the team{ .stop }
{ .check-list }

</template>

<template slot="slot3">

#### Choose a subscription plan

We experimented with adding additional choice at signup but found this reduced conversion rate. A small uptick in retention didn't offset the effect.

- Upsell customers at signup{ .check }
- Retention was a promising future focus{ .check }
- Too much upfront commitment for most potential customers{ .stop }
{ .check-list }

</template>

<template slot="modal3">

<div class="video-wrapper">

  <figure class="image is-9by16 single-image">
    <iframe class="lazyload" data-src="https://player.vimeo.com/video/293190532" width="640" height="1138" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </figure>
  <figcaption>
    User testing a subscription plans design iteration
  </figcaption>

</div>

</template>

</Content-ImageFrames-SquareImagesRow>




<Content-MainAsideSection padding="is-large has-divider" rag="rag-4" :aside="true" columnOffset="table-offset" page1Label="Landing page" page2Label="Signup funnel">

<template slot="content">

## Lessons from user testing

I conducted usability testing of the funnel designs with internal stakeholders and external testers. The appropriate level of fidelity was different for each initiative and audience. Static wireframes and paper prototypes sufficed for internal stakeholders, greatly increasing iteration speed. For external testing I typically made use of inVision and HTML prototypes, recording sessions by video to be viewed later by the whole project team.

</template>

<template>

**Observation** | **Remedy** |
--- | --- |
_“I’ll use the menu to learn more”_ A significant minority of testers wanted to use the navigation menu to learn more, rather than scrolling. They found the options unsatisfying or confusing | I added links to the main navigation for separate pages mirroring and expanding upon scroll-reachable content on the homepage |
_"We can't just have the burger menu on desktop"_ Internal testers requested an always-visible main navigation on desktop | I had de-prioritised this for expediency but quickly realised we weren't meeting users' expectations while it was absent |
_“How do I close this?”_ Testers expected the product details modal to have a close button at the top as well as the bottom | I added close buttons to the top and bottom of the modal |
The view rate for the toucanBox promotional video didn't increase, even though I had increased the prominence of the video button | Further emphasis on the video button might compete with the main CTA. Instead, I added an autoplay looping montage video on desktop |
{.table .is-fullwidth}

</template>

<template slot="page2">

**Observation** | **Remedy** |
--- | --- |
_“I expected siblings would always cost £1 extra?”_ Testers reported that the messaging regarding the trial offer for siblings (additional children) was unclear. The existing copy could imply that each additional child would always cost £1, not just for the first delivery | Over time several such copywriting mistakes had crept into the funnel. I worked with our copywriter to revamp messaging across the homepage and signup flow. |
_“I can’t be sure how much I’m paying.”_ Testers mentioned that it felt frightening to click the ‘authorise payment’ button on the details form | I added a mini order summary next to the payment/paypal button titled 'What You're Paying Today' |
_“If I wanted to send toucanBox to two different addresses, how would I do that?”_ It became clear that our system was not well suited to gifters. The copy, interface and even the backend data model was not tailored to their needs | This was good feedback but the issue was out of the scope of this project. I made sure it was communicated to the Leadership Team and suggested a future project to resolve the issue. |
_“I don’t remember making a password, now I need one to log in?”_ Around 15% of trialists didn’t make a password after completing sign up, so I was aware we were increasing CS load to optimise for conversion. | Detailed analysis was needed to understand the impact of making the password field mandatory. I decided not to tackle this problem in this project, but advocated for a sister link to 'Forgotten your password?' on the login page: 'Not created a password yet?' |
{.table .is-fullwidth}

</template>

<template slot="aside">

<div class="columns is-gapless" style="margin-bottom: 3em;">
  <div class="column is-half">
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/toucanBox/user-testing-1.jpg" alt="User tester 1">
    </figure>
  </div>
</div>

<div class="columns is-gapless">
  <div class="column is-half">
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/toucanBox/user-testing-2.jpg" alt="User tester 2">
    </figure>
  </div>
</div>

</template>

</Content-MainAsideSection>




<Content-MainSectionDivider aside="Section 2 of 3" title="Delivery"/>




<Content-ImageFrames-MainImageSection padding="is-large" url="/images/toucanBox/styles.png" alt="toucanBox design system" :aside="true" rag="rag-5" imageClass="is-2by1">

<template v-slot:content>

## Design system

With such a small technology team and a rapidly growing business, I knew it was crucial to utilise every opportunity to maximise efficiency. We still had a relatively small web platform, so it made sense to establish a living design system during a redesign.

I worked closely with developers as we followed the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology, with code as the single source of truth. I separately maintained a minimal Sketch Library of atoms to facilitate rapid UI sketching. In support, I directly wrote CSS for variables, atoms, molecules and some organisms.

Going forward, the design system enabled developers to prototype UI and the establishment of the 'Activities' blog, where content writers could easily compose visually rich articles.

 <!-- Implementation makes it easy for content editors to visualize and create content. block-based components
ongoing iteration and refinement to meet evolving user and business needs.

I worked closely with developers to establish variables for our colour pallet, typography scale, icons, spacing and other stylistic elements.

-->



<!-- Equally, our developers shared a relative weakness in front-end CSS and JS.

In order to act quickly, I slotted into the role of front-end developer to build the new homepage and make design improvements throughout the funnel.

Sustainable, living UI design system

Minimal common-sense standards.

Code as the single source of truth. Atoms as Sketch Library, organisms only in code.

Living design system: ongoing iteration and refinement to meet evolving user and business needs.

Enabled faster prototyping of new ideas.

To increase my efficiency and that of the whole team, I created and maintained a style guide of UI components and design guidelines (with corresponding html snippets) as I developed the front end

Link to living styleguide. Atomic design. UI style evolved from the magazine - graphic design.

Tone of voice -->

</template>

<template v-slot:aside>

#### Visual design

The toucanBox Creative Team had recently completed a brand refresh. I knew this new style would give us a distinctive look online and I was keen to promote consistency across all product touch points.

<!-- and new boxes included activity magazines brimming with colour, imagination and illustrations. -->

<!-- I knew this new style would give us a distinctive look online and I was keen to promote consistency across all product touch points. -->

Having been involved in the earlier stages of the project, they were primed and ready to work with me to apply the brand to the UI.

</template>

</Content-ImageFrames-MainImageSection>



<Content-ImageFrames-FullImageSection imageClass="is-16by9" url="/images/toucanBox/toucan-together.jpg" alt="Montage of discovery artefacts"/>




<Content-TextSection padding="is-large" rag="rag-4" columnOffset="title-offset">

## Development

<p class="subtitle">
  Guided by the findings from usability testing, we were sufficiently confident in the selected initiatives to move into development.
</p>

I prioritised ruthlessly, dropping design concepts which didn't perform. This was particularly important since developer time was severely limited. Both the customer facing and back-office aspects of the business were relying on their effort. The bottleneck was partly due to our highly custom Ruby codebase and the difficulty at that time of hiring Ruby specialists.

Being embedded in the technology team, I was able to compliment the handoff by being available for questions and followup. This was particularly important for tuning specific user interactions like input validation or fixing emergent UX problems like missing URL encoded discount codes (we moved to a session based system).

<!-- I complimented the design specs by being constantly available for questions.

Thanks to our existing UI design system, progressing from wireframes to high-fidelity UI design was a snap.

Further evaluation of the new design could only be achieved through live metrics. These needed to be measured in production.
What we chose to build in production. Release feature-by-feature - A/B testing to validate. Focus on working with and supporting developers to realise designs in production. Supporing with - CSS, Design System, compromises and adjustments to the spec.

I worked closely with our developers to tune the input validations and feedback messages on the details form. Under some circumstances, users from paid marketing channels with URL embedded discount codes could lose it while browsing the site. We solved this issue by switching to a session-based system.

Our custom Ruby codebase and the difficulty in recruiting Ruby developers in London combined to make developer resource the tightest bottleneck for toucanBox. Equally, our developers shared a relative weakness in front-end CSS and JS.

In order to act quickly, I slotted into the role of front-end developer to build the new homepage and make design improvements throughout the funnel. -->

<template v-slot:aside>

<Content-Techstack

:techs="[
{ title:'Build', description:'Middleman, Gulp' },
{ title:'UI', description:'JQuery, Vue.js' },
{ title:'CSS', description:'SCSS' },
{ title:'Backend', description:'Sinatra (Ruby, ERB), Postgres' },
]"

/>

</template>

</Content-TextSection>




<Content-MainSectionDivider aside="Section 3 of 3" title="Evaluation"/>




<Content-TextSection rag="rag-6">

<p class="subtitle" style="padding-right: 4em;">
  The new signup experience had an immediate impact on funnel conversion rate.
</p>

To gain granular information about the effect of each initiative, we built and released sequentially with A/B tests and qualitative evaluation.

<!-- I A/B tested changes as they were released. There were challenges in measuring the long-term impact of each change (including phased releases, seasonal fluctuations and incomplete historical data). The estimate of impact is therefore conservative.

The final funnel is accessible with fast performance on both desktop and mobile devices.

 -->


### What went well

This project's collaborative research and discovery phase had a transformational effect on the broader organisation. In response to the challenges and insights uncovered, other teams rolled out significant changes to their business processes and activities, adopting a 'product mindset'.

 <!-- in areas such as marketing, customer service and operations.


A 'product mindset' had taken root, with a focus on outcomes rather than outputs.

started to rethink several business processes and activities with a product mindset.

Thanks to our existing UI design system, progressing from wireframes to high-fidelity UI design was a snap.

The donation experience project had a transformational effect within the greater organization. In response to challenges and insights uncovered during user experience research and strategy, the organization rolled out significant changes to its business processes and activities, its approach to supporter outreach, conversion, and retention, and implemented a new membership model for supporters. -->

### Lessons learnt

The only disappointment was how long it took to complete the process and access the valuable outcomes. As the only full&#8209;time member of the project team I needed to split my time between management and UX design. Although I relished the varied work, combined with the developer bottleneck, the delay between identifying problems and applying remedies was costly. We agreed to address this issue by hiring a specialised front-end developer and a product manager.

<!-- I was the only full-time member of the project team; coordinating the research, executing the design process, writing front-end code, planning tests and shipping releases. We were a small team with many competing priorities and a limited budget. This meant a delay between identifying the problems and releasing the improvements.

We addressed this problem in early 2018 by hiring a dedicated front-end developer, thereby creating a distinction for which I had been advocating between web development and product design. -->

<!-- although we searched for a product manager, we didn't find a suitable candidate.  -->

### Going forward

<p>
It was clear the greatest potential for further improvement to the user experience lay with two so&#8209;far unaddressed principles; <em>Flexible and Personalised</em>. I would tackle them in a <Content-ModalLink label="future project">
<template v-slot:modal>

<Content :page-key="$site.pages.find(p => p.path === '/extra/toucanbox-personalisation/').key"/>

</template>
</Content-ModalLink> focussing on retention.
</p>


<template slot="aside">

<!-- <div class="columns is-gapless">
  <div class="column is-two-thirds">
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/toucanBox/post-its-principles.jpg" alt="Design principles">
    </figure>
  </div>
</div> -->

<Content-InfoBox :hasIcon="true" :hasAction="true" type="link" label="toucanbox.com 2017" url="https://toucanwww.netlify.app/">

I created a static mirror of the toucanBox homepage at the conclusion of this project.
{ .rag-2 }

</Content-InfoBox>

<!-- <Content-ModalWrapper type="link" url="http://toucanwww.herokuapp.com/" label="toucanBox static website circa 2017">
  <figure class="image is-3by2">
    <img class="lazyload" data-src="/images/toucanbox/onboarding-desktop.jpg"" alt="touanBox website in 2017">
  </figure>
</Content-ModalWrapper> -->

</template>


</Content-TextSection>



<Content-MetricsSection padding="is-medium-large" :metrics="[
{ metric:'25%', description:'Cumulative average increase in funnel conversion rate' },
{ metric:'35%', description:'Reduction in homepage data transfer. I implemented SVG spritesheets, lazy loading and progressive enhancement' },
{ metric:'20%', description:'Reduction in the number of CS cases relating to a misunderstanding of the value proposition' },
]"/>

<!-- _Data reflects year-over-year activity for a defined period of time as of December 2017._ -->
