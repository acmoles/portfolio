---
uid: 7
title: toucanBox
subtitle: Refining the onboarding flow for new customers
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
next: ./toucan-research
hasFooter: true
---
<!-- A redesigned sign up funnel to improve communication, useability and confidence and a strategic design project to identify new ways to improve customer retention -->
::: slot top

<Stage-ProjectStage :noise="true" ctaLabel="toucanbox.com" ctaUrl="https://www.toucanbox.com" ragClass="toucan-rag"
description="toucanBox is an award winning startup subscription service delivering creative craft boxes to children aged 3-8.">

  <template v-slot:visual-column>
    <figure class="toucan-image">
      <b class="decoration svg-yellow-splat"/>
      <Heros-ImageHero src="/images/toucanbox/combined_onboarding.png" alt="toucanBox homepage"/>
      <!-- <b class="decoration svg-bee"/> -->
      <!-- <b class="decoration svg-confetti-red"/> -->
      <b class="decoration svg-confetti-yellow"/>
      <b class="decoration svg-flash-blue"/>
      <!-- <b class="decoration svg-flash-yellow"/> -->
      <!-- <b class="decoration svg-pencil-parachute"/> -->
    </figure>
  </template>

</Stage-ProjectStage>

  <!-- width: 200% -->

<style lang="sass">

.toucan-image
  position: absolute
  left: -5em
  height: 50vh
  img
    position: relative
    height: 100%
    max-width: initial

.toucan-rag
  padding-right: 2em

@media screen and (min-width: 1335px)
  .toucan-rag
    padding-right: 4em

</style>

:::

<Content-ContextSection :box="true">

<template v-slot:main>

## Context

Each toucanBox is addressed directly to the child and contains all the materials needed to complete crafty projects, with colourful step by step instructions and an activity magazine. New customers register through the website. For leads acquired through paid marketing channels, the first box is typically a free or discounted trial.

We secured funding in mid-2016 and were ready to scale our operations. Although toucanBox had firmly embraced an online-first business model, we weren't thinking about our product in a holistic way that included the online experience. Our scaling roadmap didn't include significant work on the user-facing portion of our web platform. As the only (digital) product person in the company, I knew it was up to me to change the mindset.

My breakthrough came when I discovered our average funnel conversion rate lagged behind that of other comparable subscription businesses. From this I could derive a clear and compelling expected ROI - and so I gained my mandate.

As project lead, I guided the organisation through a human-centred process of research, content strategy, business alignment, user interface and interaction design, usability testing, and development.

</template>

<template v-slot:side>

**Product**
Responsive landing page and signup web application

**Sector**
Subscription e-commerce

**Timeframe**
2017

**Team composition**
CTO, 2 full-stack developers, stakeholders in Marketing and Creative

_I have omitted confidential information in this case study. All content is my own unless stated otherwise._
{ .secondary }

<!-- and does not necessarily reflect the views of toucanBox. -->

</template>

</Content-ContextSection>




<Content-ThreeColumnSection padding="is-large">

<template v-slot:column1>

###  The challenge

How might we increase funnel conversion rate; achieving our business goal but also helping our users achieve their goals. How might we build a shared organisational understanding of the user’s journey.

</template>

<template v-slot:column2>

### The outcome

A usable, reassuring, and technologically sustainable website and signup experience which had an immediate impact on funnel conversion rate.


</template>

<template v-slot:column3>

### My role

Project management
~ Customer research and user testing
~ Prototyping and design iteration
~ Analysis and evaluation

</template>

</Content-ThreeColumnSection>


<!-- <Content-ImageFrames-FullImageSection url="/images/toucanBox/warehouse.jpg" alt="Montage of discovery artifacts"/> -->



<Content-MainSectionDivider aside="Section 1 of 4" title="Discovery"/>




<Content-PointsSection padding="is-large" :content="true" :points="[

{ src:'/svg-icons/icon_device.svg', alt:'Phone', title:'Prospective customers are usually on their phones', description:'Customer inverview. Usually on social media - facebook - see our ad. Projects completed for small businesses and startups.' },

{ src:'/svg-icons/icon_turn.svg', alt:'clock', title:'We were pushing users into the signup funnel too soon', description:'If you don’t care for SEO and don’t want to mess with installing dependencies, these are still great choices.' },

{ src:'/svg-icons/icon_divert.svg', alt:'lightbulb', title:'Dropout after partially completing the signup form was surprisingly high', description:'Years experience working for clients like Google and Amazon.' },

{ src:'/svg-icons/icon_understanding.svg', alt:'search', title:'It wasn’t clear in our messaging that we offer a subscription', description:'VuePress is focused on content-centric static sites and provides features tailored for technical documentation out of the box.' },

{ src:'/svg-icons/icon_visible.svg', alt:'documents', title:'We need more imagery showing the box contents and breadth of the range', description:'Award winning team members.' },

{ src:'/svg-icons/icon_sad.svg', alt:'device', title:'Lack of feedback that a trial code was applied caused anxiety', description:'Market/competitor research. Hexo has been serving the Vue docs well - in fact, we are probably still a long way to go from migrating away from it for our main site.' },

]">

<template v-slot:content>

## Research

<p class="subtitle">
  Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.
</p>

I conducted a series of in-house customer interviews. These consisted of both broad market research questions and useability testing all aspects of the website.
I also collected data insights and anecdotal feedback from across the business - customer service, website analytics, net promoter score (NPS), customer surveys and production database - sometimes asking new questions of our data to fill the gaps (including writing a few database queries of my own).
Analytics, asking customer service, interviewing existing customers and parents who weren’t customers. To gain a better understanding of toucanBox's business goals and constraints along with user needs and behaviours, I kicked off a discovery phase based on a range of quantitative and qualitative research methodologies. I held a series of stakeholder interviews across several business lines to better understand toucanBox's business goals, requirements, and constraints. Each of these interviews was captured in audio and text format, and was used to identify common themes and specific needs. I also explored existing data and artifacts, including. Along the way, I captured insights in a central location accessible to the whole project team.

</template>

</Content-PointsSection>


<Content-QuoteSection quote="I wouldn't want to add my preferences if I can choose my box. It's basically the same thing, except choosing is better." attribute="Sandra Whitehouse, Mum to Harry and Scarlet"/>


<Content-ThreeColumnSection :content="true" columnOffset="three-offset">

<template v-slot:content>

## Who are our customers?

Focus on their motivations. Using research. Nullam a metus quis eros pretium hendrerit ut a turpis. Suspendisse posuere purus ut lectus commodo, ac pulvinar neque blandit. Mauris a volutpat neque. Ut iaculis ipsum a elementum sodales. Maecenas maximus nibh turpis. Vestibulum finibus felis quis imperdiet placerat. Phasellus dapibus, quam et finibus auctor, ipsum sem ultricies ipsum, vitae suscipit enim turpis nec eros. Etiam vitae enim lorem.

</template>

<template v-slot:column1>

####  Parent

---

<div class="small">

*Buyer persona*

Duis eget fringilla enim. Sed elementum elementum tincidunt. Morbi porta elit porta dolor feugiat convallis. Suspendisse ornare et mi sit amet lacinia. Proin eget dui purus.

**Suspendisse ornare et**

Sed elementum elementum tincidunt. Morbi porta elit porta dolor feugiat convallis.

Aenean et nunc tortor. Cras semper gravida purus sit amet porttitor. Donec fermentum finibus eros.

Quisque pulvinar dui sagittis orci blandit pellentesque. Duis ornare bibendum ultrices. Aenean et nunc tortor. Cras semper gravida purus sit amet porttitor. Donec fermentum finibus eros.

Sed tempus, massa sed egestas viverra, mi nunc maximus lorem, nec egestas arcu magna non risus. Quisque pulvinar dui sagittis orci blandit pellentesque. Duis ornare bibendum ultrices.

</div>

</template>

<template v-slot:column2>

#### Gifter

---

<div class="small">

*Buyer persona*

Sed tempus, massa sed egestas viverra, mi nunc maximus lorem, nec egestas arcu magna non risus. Quisque pulvinar dui sagittis orci blandit pellentesque. Duis ornare bibendum ultrices. Aenean et nunc tortor. Cras semper gravida purus sit amet porttitor. Donec fermentum finibus eros.

**Aenean et nunc tortor**

Quisque pulvinar dui sagittis orci blandit pellentesque. Duis ornare bibendum ultrices.

Sed tempus, massa sed egestas viverra, mi nunc maximus lorem, nec egestas arcu magna non risus. Quisque pulvinar dui sagittis orci blandit pellentesque. Duis ornare bibendum ultrices.

<br>

</div>

#### Child

---

<div class="small">

*User persona*

Quisque pulvinar dui sagittis orci blandit pellentesque. Duis ornare bibendum ultrices.

</div>

</template>

<template v-slot:column3>

<div class="columns is-gapless">
  <div class="column is-three-quarters">
    <figure class="image is-9by16">
      <img class="lazyload" data-src="/images/toucanBox/users-tall.jpg" alt="Cartoon of users">
    </figure>
  </div>
</div>

</template>

</Content-ThreeColumnSection>





<Content-ThreeColumnSection padding="is-large" :content="true" columnOffset="three-offset">

<template v-slot:content>

## Objectives

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

Easy, Clear, Open and Trustworthy with an overhaul of the acquisition funnel and more help and information on the website.

</template>

<template v-slot:column1>

####  Make it clear

---

<div class="small">

Refine how we communicate the toucanBox value proposition with messaging and content optimised for fast comprehension

Minimise misunderstanding of the value proposition and effectively translate our typical marketing messages “free craft box” into the full picture “toucanBox is a craft box subscription you can try for free”

Reduce anxiety about price and discounts by providing clear and timely feedback

</div>

</template>

<template v-slot:column2>

#### Make it easy

---

<div class="small">

Enable comparison between the three product types

Minimise the number of steps, clicks and details required to complete signup

Build confidence throughout the funnel by following usability best practices, validated by thorough user testing

Establish a consistent UI language with a living design system

</div>

</template>

<template v-slot:column3>

<Content-InfoBox :hasIcon="true" :hasAction="true" type="modal" label="See principles" style="margin-bottom: 3em;">

At the end of the project, I gathered everything I learnt about our users into a set of principles the whole organisation could benefit from.

<template slot="modal">

### Principles content

In dui odio, posuere eget tristique in, pellentesque nec dolor. Vestibulum quis metus purus. Fusce varius rhoncus enim sit amet semper. Maecenas non nunc id justo vehicula ultricies vestibulum eget ex. Integer mattis faucibus nunc, ut tristique magna bibendum sit amet.

_Data reflects year-over-year activity for a defined period of time as of December 2017._

</template>

</Content-InfoBox>

</template>

</Content-ThreeColumnSection>




<Content-ImageFrames-FullImageSection url="/images/toucanBox/onboarding-montage.png" alt="Montage of discovery artifacts"/>




<Content-ImageFrames-SquareImagesRow :content="true" :images="[
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
  Cras cursus est sodales, consectetur felis eget, auctor metus. Duis egestas commodo eros in efficitur. Nullam eu consequat leo. Maecenas sit amet arcu ut mauris accumsan semper.
</p>

Before moving into high-fidelity design and development, I performed usability testing on the proposed direction for the signup experience to validate design and content and decisions, identify challenges, and iterate based on real user feedback.

I recruited a range of study participants that closely matched our defined user personas, and designed a usability study that would examine several different signup flows.

<br>
<br>

### Landing page

</template>

<template slot="slot1">

#### Optimise the 'main stage'

Value proposition and communication. Praesent fermentum mauris in odio tempor, vitae tempus ante condimentum. Maecenas id nibh libero. Vivamus tristique elit eu dui mollis elementum.

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

<template slot="modal1">

<figure class="image is-2by1">
  <img class="lazyload" data-src="/images/toucanBox/main-stage-detail.png" alt="Iterations of the Main Stage">
</figure>

</template>

<template slot="slot2">

#### Optimise the product section

Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

<template slot="modal2">

<figure class="image is-2by1">
  <img class="lazyload" data-src="/images/toucanBox/product-section-detail.png" alt="Iterations of the Product Section">
</figure>

</template>

<template slot="slot3">

#### Information architecture

Site navigation and structure. New content (schools, inside a box, blog/activities). Around what users are really looking for e.g. What's inside the box - reachable by both scrolling and clicking a button in the nav. Nullam a metus quis eros pretium hendrerit ut a turpis.

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

</Content-ImageFrames-SquareImagesRow>




<Content-ImageFrames-SquareImagesRow padding="is-medium" :content="true" :images="[
{ url:'/images/toucanBox/signup-funnel.png', alt:'Optimise the signup funnel', caption:'Square image caption 1', slot:'slot1', iframe:false },
{ url:'/images/toucanBox/mobile-steps.png', alt:'Mobile friendly steps', caption:'Square image caption 2', slot:'slot2', iframe:false, action: {
  type: 'link',
  label: 'Prototype',
  url: 'http://signup-prototype.herokuapp.com'
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

Praesent fermentum mauris in odio tempor, vitae tempus ante condimentum. Maecenas id nibh libero. Vivamus tristique elit eu dui mollis elementum.

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

<template slot="slot2">

#### Mobile-friendly steps

Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
- Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim.{ .stop }
{ .check-list }

</template>

<template slot="slot3">

#### Choose a subscription plan

Maecenas sed nibh eleifend, congue felis et, malesuada eros. Nullam a metus quis eros pretium hendrerit ut a turpis. Suspendisse posuere purus ut lectus commodo, ac pulvinar neque blandit. Mauris a volutpat neque. Ut iaculis ipsum a elementum sodales.

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
- Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim.{ .stop }
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




<Content-MainAsideSection padding="is-large" :content="true" :aside="true" columnOffset="table-offset" page1Label="Landing page" page2Label="Signup funnel">

<template slot="content">

## Lessons from user testing

Guided by the findings of the usability testing, the project team and greater organization was confident in the design direction, and identified specific opportunities to improve on the chosen design direction and the overall signup experience. Narrowing down. In dui odio, posuere eget tristique in, pellentesque nec dolor. Vestibulum quis metus purus. Fusce varius rhoncus enim sit amet semper. Maecenas non nunc id justo vehicula ultricies vestibulum eget ex. Integer mattis faucibus nunc, ut tristique magna bibendum sit amet.

</template>

<template>

**Observation** | **Remedy** |
--- | --- |
Vestibulum quis metus purus. Fusce varius rhoncus enim sit amet semper. Maecenas non nunc id justo vehicula ultricies vestibulum eget ex. Integer mattis faucibus nunc, ut tristique magna bibendum sit amet. | I added a text box in the print modal where an older child or parent could type the name and have it appear on the printout |
Vestibulum quis metus purus. Fusce varius rhoncus enim sit amet semper. Maecenas non nunc id justo vehicula ultricies vestibulum eget ex. Integer mattis faucibus nunc, ut tristique magna bibendum sit amet. | I added skirts, wellington boots and several other accessories |
Cras mollis sodales urna, eu ultrices nibh lobortis ut. Fusce eu pellentesque nulla. | I observed children dragging items off the screen, attempting to delete them, so made that actually work |
Certain types of accessory like hats, clothes and shoes quickly cluttered the screen and didnt make sense out of their intended positions | I made new placements in specific categories (e.g. hair) remove the previous accessory of that type. This proved to be an intuitive limitation |
{.table .is-fullwidth}

</template>

<template slot="page2">

**Observation** | **Remedy** |
--- | --- |
Page 2. Vestibulum quis metus purus. Fusce varius rhoncus enim sit amet semper. Maecenas non nunc id justo vehicula ultricies vestibulum eget ex. Integer mattis faucibus nunc, ut tristique magna bibendum sit amet. | I added a text box in the print modal where an older child or parent could type the name and have it appear on the printout |
Vestibulum quis metus purus. Fusce varius rhoncus enim sit amet semper. Maecenas non nunc id justo vehicula ultricies vestibulum eget ex. Integer mattis faucibus nunc, ut tristique magna bibendum sit amet. | I added skirts, wellington boots and several other accessories |
Cras mollis sodales urna, eu ultrices nibh lobortis ut. Fusce eu pellentesque nulla. | I observed children dragging items off the screen, attempting to delete them, so made that actually work |
Certain types of accessory like hats, clothes and shoes quickly cluttered the screen and didnt make sense out of their intended positions | I made new placements in specific categories (e.g. hair) remove the previous accessory of that type. This proved to be an intuitive limitation |
{.table .is-fullwidth}

</template>

<template slot="aside">

<div class="columns is-gapless">
  <div class="column is-two-thirds">
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/toucanBox/user-testing-1.jpg" alt="User tester 1">
    </figure>
  </div>
</div>

</template>

</Content-MainAsideSection>




<Content-MainSectionDivider aside="Section 2 of 4" title="Delivery"/>




<Content-ImageFrames-MainImageSection url="/images/toucanBox/styles.png" alt="toucanBox design system" :aside="true" :content="true" imageClass="is-2by1">

<template v-slot:content>

## Design system

Link to living styleguide. Atomic design. UI style evolved from the magazine - graphic design. Thanks to our existing UI design system, progressing from wireframes to high-fidelity UI design was a snap. Vestibulum quis metus purus. Fusce varius rhoncus enim sit amet semper. Maecenas non nunc id justo vehicula ultricies vestibulum eget ex. Integer mattis faucibus nunc, ut tristique magna bibendum sit amet.

</template>

<template v-slot:aside>

#### Aside title

Integer mattis faucibus nunc, ut tristique magna bibendum sit amet.

</template>

</Content-ImageFrames-MainImageSection>


<Content-TextSection padding="is-large" columnOffset="title-offset">

## Development

<p class="subtitle">
  Cras cursus est sodales, consectetur felis eget, auctor metus. Duis egestas commodo eros in efficitur. Nullam eu consequat leo. Maecenas sit amet arcu ut mauris accumsan semper.
</p>

What we chose to build in production. Release feature-by-feature - A/B testing to validate. Nullam a metus quis eros pretium hendrerit ut a turpis. Suspendisse posuere purus ut lectus commodo, ac pulvinar neque blandit. Mauris a volutpat neque. Ut iaculis ipsum a elementum sodales. Maecenas maximus nibh turpis. Vestibulum finibus felis quis imperdiet placerat. Phasellus dapibus, quam et finibus auctor, ipsum sem ultricies ipsum, vitae suscipit enim turpis nec eros. Etiam vitae enim lorem.

The final design is accessible and adapts seamlessly to several distinct user flows, with incredibly fast performance on both desktop and mobile devices. Vivamus tristique elit eu dui mollis elementum. Vivamus sit amet semper felis. Maecenas non eros non turpis consectetur accumsan ac eget quam.

<template v-slot:aside>

<Content-InfoBox>

<!-- #### Techstack -->

**Platform**
Responsive web application

**Engine**
E-commerce

**Styling**
2018

**Input**
Personal project

**Animation**
12 minutes

</Content-InfoBox>

</template>

</Content-TextSection>




<Content-MainSectionDivider aside="Section 3 of 4" title="Evaluation"/>





<Content-TextSection>

<p class="subtitle">
  Cras cursus est sodales, consectetur felis eget, auctor metus. Duis egestas commodo eros in efficitur.
</p>

The newly-launched signup experience had an immediate impact on toucanBox’s online signup activities. Suspendisse posuere purus ut lectus commodo, ac pulvinar neque blandit. Mauris a volutpat neque. Ut iaculis ipsum a elementum sodales. Maecenas maximus nibh turpis. Vestibulum finibus felis quis imperdiet placerat. Phasellus dapibus, quam et finibus auctor, ipsum sem ultricies ipsum, vitae suscipit enim turpis nec eros. Etiam vitae enim lorem.


### What went well

Mauris a volutpat neque. Ut iaculis ipsum a elementum sodales. Maecenas maximus nibh turpis. Vestibulum finibus felis quis imperdiet placerat. Phasellus dapibus, quam et finibus auctor, ipsum sem ultricies ipsum, vitae suscipit enim turpis nec eros. Etiam vitae enim lorem.

### Lessons learnt

Sed tempus, massa sed egestas viverra, mi nunc maximus lorem, nec egestas arcu magna non risus. Quisque pulvinar dui sagittis orci blandit pellentesque. Duis ornare bibendum ultrices. Aenean et nunc tortor. Cras semper gravida purus sit amet porttitor. Donec fermentum finibus eros.

### Going forward

Maecenas porttitor congue enim, at tempus tellus volutpat ut. In ultricies, justo nec rhoncus rhoncus, ipsum libero tempus est, at pellentesque mi ligula vitae eros. Cras sodales ut nunc et volutpat. Proin eget porttitor neque, consectetur ullamcorper ipsum. Donec porta nisl id sem varius malesuada.


<template slot="aside">

<!-- <div class="columns is-gapless">
  <div class="column is-two-thirds">
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/toucanBox/post-its-principles.jpg" alt="Design principles">
    </figure>
  </div>
</div> -->

<!-- <figcaption>

This project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).

</figcaption> -->

<Content-InfoBox :hasIcon="true" :hasAction="true" type="link" label="toucanBox static mirror" url="http://toucanwww.herokuapp.com/">

At the end of the project, I gathered everything I learnt about our users into a set of principles the whole organisation could benefit from.


</Content-InfoBox>



<Content-ModalWrapper type="link" url="http://toucanwww.herokuapp.com/" label="toucanBox static website circa 2017">
  <figure class="image is-3by2">
    <img class="lazyload" data-src="/images/toucanbox/onboarding-desktop.jpg"" alt="touanBox website in 2017">
  </figure>
</Content-ModalWrapper>

</template>


</Content-TextSection>



<Content-MetricsSection padding="is-medium-large" :metrics="[
{ metric:'40', description:'Projects completed for small businesses and startups.' },
{ metric:'02', description:'Award winning team members.' },
{ metric:'103', description:'Years experience working for clients like Google and Amazon.' },
]"/>


<Content-MainSectionDivider aside="Section 4 of 4" title="Followup"/>




<Content-ImageFrames-MainImageSection padding="is-large" imageClass="is-2by1" url="/images/toucanBox/personalised-experience.jpg" alt="Cartoon of a personalised experience" :aside="true" :content="true">

<template v-slot:content>

<p class="subtitle">
  Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.
</p>

The leadership at toucanBox didn’t think of themselves as a tech company, even though by this point the desire for flexibility, customisation, by a series of incremental steps, we had replaced almost all the off-the-shelf tools for subscription businesses with our own systems. In dui odio, posuere eget tristique in, pellentesque nec dolor. Vestibulum quis metus purus. Fusce varius rhoncus enim sit amet semper. Maecenas non nunc id justo vehicula ultricies vestibulum eget ex. Integer mattis faucibus nunc, ut tristique magna bibendum sit amet.

Best products (Airbnb and Spotify) blend the boundary between the digital product and the commodity. In toucanbox too.  toucanbox - small team, involved in the core product but - central question for me: how can the online product enhance the overall experience for parents, and also children.  

</template>

<template v-slot:aside>

<figure class="image is-5by3">
  <img class="lazyload medium-zoom" data-src="/images/toucanBox/warehouse.jpg" alt="toucanBox warehouse">
</figure>
<figcaption>

Nulla at arcu sagittis, egestas libero ut, finibus massa.

</figcaption>

</template>

</Content-ImageFrames-MainImageSection>



<Content-ImageFrames-FullImageSection url="/images/toucanBox/personalisation-montage.jpg" alt="Personalisation discovery montage"/>



<Content-MainAsideSection :content="true" :aside="true" columnOffset="table-offset">

<template slot="content">

## Defining personalisation

Best products (Airbnb and Spotify) blend the boundary between the digital product and the commodity. In toucanbox too.  

Nullam a metus quis eros pretium hendrerit ut a turpis. Suspendisse posuere purus ut lectus commodo, ac pulvinar neque blandit. Mauris a volutpat neque. Ut iaculis ipsum a elementum sodales. Maecenas maximus nibh turpis. Vestibulum finibus felis quis imperdiet placerat. Phasellus dapibus, quam et finibus auctor, ipsum sem ultricies ipsum, vitae suscipit enim turpis nec eros. Etiam vitae enim lorem.

Duis eget fringilla enim. Sed elementum elementum tincidunt. Morbi porta elit porta dolor feugiat convallis. Suspendisse ornare et mi sit amet lacinia. Proin eget dui purus.

</template>

<template>

**Observation** | **Remedy** |
--- | --- |
Vestibulum quis metus purus. Fusce varius rhoncus enim sit amet semper. Maecenas non nunc id justo vehicula ultricies vestibulum eget ex. Integer mattis faucibus nunc, ut tristique magna bibendum sit amet. | I added a text box in the print modal where an older child or parent could type the name and have it appear on the printout |
Vestibulum quis metus purus. Fusce varius rhoncus enim sit amet semper. Maecenas non nunc id justo vehicula ultricies vestibulum eget ex. Integer mattis faucibus nunc, ut tristique magna bibendum sit amet. | I added skirts, wellington boots and several other accessories |
{.table .is-fullwidth}

</template>

<template slot="aside">

<div class="columns is-gapless">
  <div class="column is-two-thirds">
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/toucanBox/user-testing-2.jpg" alt="User tester 2">
    </figure>
  </div>
</div>

</template>

</Content-MainAsideSection>



<Content-ImageFrames-MainImageSection padding="is-large" url="/images/toucanBox/high-fidelity-sketching.png" alt="Detailing feature screens" imageClass="is-2by1 transparent-image" :aside="true" :content="true" caption="Aliquam a cursus erat, sit amet ultricies risus. Nulla at arcu sagittis, egestas libero ut, finibus massa.">

<template slot="content">

<p class="subtitle">
  Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.
</p>

Nullam a metus quis eros pretium hendrerit ut a turpis. Suspendisse posuere purus ut lectus commodo, ac pulvinar neque blandit. Mauris a volutpat neque. Ut iaculis ipsum a elementum sodales. Duis eget fringilla enim. Sed elementum elementum tincidunt. Morbi porta elit porta dolor feugiat convallis. Suspendisse ornare et mi sit amet lacinia. Proin eget dui purus.

</template>

<template slot="aside">

<figure class="image is-5by3 transparent-image">
  <img class="lazyload medium-zoom" data-src="/images/toucanBox/personalisation-desktop.png" alt="Iteration for desktop">
</figure>

</template>

</Content-ImageFrames-MainImageSection>




<Content-QuoteSection quote="I wouldn't want to add my preferences if I can choose my box. It's basically the same thing, except choosing is better." attribute="Sandra Whitehouse, Mum to Harry and Scarlet"/>



<Content-TextSection padding="is-large" columnOffset="title-offset">

## A promising pilot

<p class="subtitle">
  I asked existing toucanBox customers what ‘value for money’ means to them and gathered their attitudes to children's digital media.
</p>

Customer acquisition and retention were two of the most discussed performance metrics at toucanBox. This project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).


### Detailed Prototyping

Establish to what extent digital content linked to the trial box can increase activation rate. Estimate the costs and benefits of producing more digital content.

### Gathering more data with an MVP

Must resonate with the core value proposition (hands-on crafting and creativity) . High friction when moving to a device from the magazine reduced the reach leading to low overal impact.

### Handover

Must resonate with the core value proposition (hands-on crafting and creativity) . High friction when moving to a device from the magazine reduced the reach leading to low overal impact.


<template slot="aside">

<div class="columns is-gapless">
  <div class="column is-three-quarters">
    <Content-ModalWrapper type="link" url="http://personalisation.herokuapp.com/" label="Prototype">
      <figure class="image is-9by16">
        <img class="lazyload" data-src="/images/toucanBox/choose-interface.png" alt="Screenshot of latest prototype">
      </figure>
    </Content-ModalWrapper>
  </div>
</div>



<figcaption>

This project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).

</figcaption>

</template>


</Content-TextSection>
