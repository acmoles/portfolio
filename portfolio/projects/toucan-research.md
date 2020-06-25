---
uid: 4
title: toucanBox R&D
subtitle: Mixing digital and physical play
type: single
case1: Case study
navStyle:
  style: light
  tint: purple-tint
  progress: light
background: purple
sidebar: false
date: 2019-09-11
prev: ./interaction
next: ./toucanbox
hasFooter: true
---

::: slot top

<Stage-ProjectStage :noise="true" rag="rag-3" ctaLabel="create.toucanbox.com" ctaUrl="https://create.toucanbox.com"
description="Create by toucanBox explores whether adding digital value to the physical craft box can lift activation rate at a critical point in the first box experience.">

  <template v-slot:visual-background>
    <figure class="full-screen">
      <Heros-ImageHero src="/images/toucan-rnd/all-together4.jpg" alt="Ecosia mobile devices"/>
    </figure>
  </template>

</Stage-ProjectStage>

:::

<Content-ContextSection :box="true">

<template v-slot:main>

## Context

A toucanBox subscription craft box contains all the materials needed to complete a craft project, with illustrated instructions, stickers to collect and an activity magazine.

In my hybrid role as digital product designer and R&D manager, I was given a broad remit to tackle projects across the customer journey. I set strict criteria - setting up a _Project Passport_ to ensure we were laser focussed on key metrics.

Consequently, some initiatives aimed to improve the experience for children, some for parents and typically both benefited. For example in early 2017 I led a project to refine the onboarding flow for new customers, that is, the parents ([read the case study](/projects/toucanbox)).

Create by toucanBox aims to move the needle for _customer activation_ - the rate at which trialists convert to fully paying subscribers. We knew the top two reasons for cancellation in trial were _affordability_ and _value for money._ My hypothesis was that exclusive digital content could help address this, without increasing the variable cost of the box.

</template>

<template v-slot:side>

**Product**
Responsive web application

**Sector**
Children's digital media

**Period**
2016

**Team composition**
Individual research and development project with stakeholders in Marketing, Creative, Operations and Technology.

_I have omitted confidential information in this case study. All content is my own unless stated otherwise._
{ .secondary }

</template>

</Content-ContextSection>





<Content-ThreeColumnSection padding="is-large">

<template v-slot:column1>

###  The challenge

Establish to what extent digital content linked to the trial box can increase activation rate. Estimate the costs and benefits of producing further digital content.

</template>

<template v-slot:column2>

### The outcome

Promising pilot with some very engaged users but high friction moving to a device from the magazine reduced the reach, leading to low overall impact on activation.

</template>
<!-- Must resonate with the core value proposition (hands-on crafting and creativity).  -->

<template v-slot:column3>

### My role

Project Lead
~ UI/UX Design
~ Front-end Development
~ Evaluation

</template>

</Content-ThreeColumnSection>



<Content-MainSectionDivider aside="Section 1 of 3" title="Discovery"/>





<Content-PointsSection  rag="rag-3" :points="[
{ src:'/svg-icons/icon_sad.svg', alt:'sad face', title:'The box often didn’t seem like good value for money', description:'Even satisfied customers felt the product was somewhat overpriced. They focussed on the value of the materials, rather than the holistic experience.' },
{ src:'/svg-icons/icon_time.svg', alt:'clock', title:'The duration of the toucanBox experience could feel short', description:'Some customers would craft with their children, others would use the box to get a moment of peace. In both cases they wanted a longer lasting experience.' },
{ src:'/svg-icons/icon_idea.svg', alt:'lightbulb', title:'What would be distinctive about digital content by toucanBox?', description:'toucanBox customers want to offer their children hands-on play away from the screen. So any digital content could not be a screen-only experience.' },
{ src:'/svg-icons/icon_search.svg', alt:'search', title:'Top apps and search queries suggested areas of focus', description:'Creative, Learning, Exploration, Rhythm, Roleplay, Nurture and Story were the top categories on app stores and web search.' },
{ src:'/svg-icons/icon_docs.svg', alt:'documents', title:'Device access and ability lifts at the upper range of our age group', description:'A survey of parents in Germany (2016, The Kids Want Mobile) found that device access, frequency, session duration and child ability increase rapidly from age 6.' },
{ src:'/svg-icons/icon_device.svg', alt:'device', title:'Digital toys for young children have specific characteristics', description:'Based on competitor research I could see that apps and games targeting our age group typically aren\'t competitive. They offer open-ended play.'},
]">

<template v-slot:content>

## Research

<p class="subtitle">
  I asked existing toucanBox customers what <em>value for money</em> means to them and collected their attitudes to children's digital media.
</p>

My approach was to engage parents with an in-depth interview, intended to flesh out the insights from our automatic unsubscriber survey. Simultaneously I would offer their children popular apps and games to play on an iPhone. Once the interview concluded we switched our attention to what the child was doing, discussing the app and asking questions of the child. This way I gathered detailed qualitative information from the parents and play tested competitor apps with the child.

</template>

</Content-PointsSection>





<Content-ImageFrames-MainImageSection url="/images/toucan-rnd/process.jpg" alt="placeholder" :aside="true" >

<template v-slot:content>

## User journey and ideation

What ways can customers access our digital content? I foresaw three possible routes; dedicated toucanBox native app, online accounts or URL/QR code printed in the box. There was a balance to be struck between the friction to reach the content and the effort required to build the delivery medium. For a pilot, it was hard to justify building a native app or adding the business logic necessary for content to automatically appear in customers' accounts, making printed URLs the natural choice.

I facilitated a company-wide brainstorm for content ideas. They broadly split into two themes _Interactive activity_ and _Content hub._ We agreed to spin out the second concept, into what later became toucanBox Activities Hub (with a focus on SEO and customer acquisition).

<!-- [User profiles](/projects/toucanbox/#who-are-our-customers)  -->

</template>

<template v-slot:aside>

<div class="columns is-gapless">
  <div class="column is-two-thirds">
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/toucan-rnd/page.jpg" alt="magazine page which links to digital content">
    </figure>
  </div>
</div>

<figcaption>

#### Magazine

The magazine in the first box features a double page spread introducing Create by toucanBox.

</figcaption>

</template>

</Content-ImageFrames-MainImageSection>


<Content-ImageFrames-SquareImagesRow  :images="[
{ url:'https://player.vimeo.com/video/412315835', alt:'square test 1', caption:'Square image caption 1', slot:'slot1', iframe:true },
{ url:'https://player.vimeo.com/video/412315982', alt:'square test 2', caption:'Square image caption 2', slot:'slot2', iframe:true },
{ url:'/images/toucan-rnd/colouring.jpg', alt:'square test 3', caption:'Square image caption 3', slot:'slot3', iframe:false },
]">

<template slot="content">

## Testing prototypes

<p class="subtitle" style="margin-bottom: 0;">
  I was able to test at toucanBox's regular craft testing sessions with parents and children.
</p>

<!-- Customer acquisition and retention were two of the most discussed performance metrics at toucanBox. This project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate). -->

</template>

<template slot="slot1">

#### Augmented reality (AR) on/in craft

Add 3D animated characters, enhancements and storytelling to a child’s finished craft project.

- Children found the concept very compelling{ .check }
- We observed them using AR in creative ways we didnt foresee "Look I've got wings on my arm"{ .check }
- No support for AR in current web browsers{ .cross }
{ .check-list }

</template>

<template slot="slot2">

#### Extended storytelling

A story in the magazine, with an interactive finale online or in an app. Each new craft is a chapter in a digital adventure.

- This prototype excited children the least{ .cross }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

<template slot="slot3">

#### Make a Toucanoo of you!

Then print it out and colour it in. Toucanoos are cute triangular characters which feature in the toucanBox activity magazine.

- Engrossed children for up to 45 minutes{ .check }
- Digital/physical crossover experience{ .check }
- Not linked to the box theme{ .cross }
{ .check-list }

</template>

</Content-ImageFrames-SquareImagesRow>



<Content-MainAsideSection padding="is-large" rag="rag-6" :aside="true" columnOffset="table-offset">

<template slot="content">

## Detailing a candidate

My next steps were to refine the Toucanoo prototype by taking action on test feedback and improving the visual design.

</template>

<template>

**Observation** | **Remedy** |
--- | --- |
*"My Toucanoo is called Wendy"*  Many children named their Toucanoos, even if they werent able to write the names | I added a text box in the print modal where an older child or parent could type the name and have it appear on the printout |
*"Theres no skirt!"*  Several important accessories were clearly missing | I added skirts, wellington boots and several other accessories |
*"I dont want this one"*  Children wanted to be able to delete accessories | I observed children dragging items off the screen, attempting to delete them, so made that actually work |
Certain types of accessory like hats, clothes and shoes quickly cluttered the screen and didnt make sense out of their intended positions | I made new placements in specific categories (e.g. hair) remove the previous accessory of that type. This proved to be an intuitive limitation |
Parents found it hard to get printing to work. It depended a great deal on the device, configuration and their technical aptitude | I added the possibility of saving directly as a PDF and a printing FAQ page |
Many adult testers requested that hand-held items move when the hand moves | This proved tricky to implement in the existing system, so I decided not to include it for the pilot |
{.table .is-fullwidth}

</template>

<template slot="aside">

<figure class="image is-9by16">
  <iframe class="lazyload" data-src="https://player.vimeo.com/video/293190638" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</figure>
<figcaption>

Low-fi prototype of the Toucanoo colouring sheet maker, used in early testing

</figcaption>

</template>

</Content-MainAsideSection>



<Content-MainSectionDivider aside="Section 2 of 3" title="Delivery"/>



<Content-ImageFrames-MainImageSection imageClass="is-5by3" url="/images/toucan-rnd/colouring-design.png" alt="placeholder" :aside="true" >

<template v-slot:content>

## Visual design

In early 2018 the Creative Team updated the look and feel of the activity magazine. In order to maximise consistency in the journey from magazine to web content, I chose to update the visual style of the experience. It gave a taste of how the new look might translate into UI across toucanBox's web products.

</template>

<template v-slot:aside>

<div class="columns is-gapless">

<div class="column is-two-thirds">

<figure class="image is-square">
  <img class="lazyload" data-src="/images/toucan-rnd/magazine-cover-en.jpg" alt="toucanBox magazines">
</figure>

</div>

</div>

<!-- <figcaption>

#### Following the new magazine

Matching the style of the new toucanBox magazine required a different look and feel from the website.

</figcaption> -->

</template>

</Content-ImageFrames-MainImageSection>




<Content-ThreeColumnSection padding="is-large">

<template v-slot:content>

## Development

<!-- <p class="subtitle">
  I asked existing toucanBox customers what ‘value for money’ means to them and gathered their attitudes to children's digital media.
</p> -->

<p style="padding-right: 4em;">
I selected WebGL backed HTML Canvas rather than DOM or SVG. My rationale was performance on low-spec mobile devices, which could lean on their graphics processor (GPU) to keep frame-rate high and animations smooth.
</p>

</template>

<template v-slot:column1>

<figure class="image is-square">
  <img class="lazyload" data-src="/images/toucan-rnd/production-assets.jpg" alt="tile map of image assets">
</figure>

<figcaption>

Dozens of Toucanoo accessories packed on a compressed PNG sprite sheet using Texturepacker

</figcaption>

</template>

<template v-slot:column2>

<figure class="image is-square">
  <iframe class="lazyload" data-src="https://player.vimeo.com/video/293190505" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</figure>

<figcaption>

Tuning the tweens and sinusoidal functions behind the motion sometimes produced unexpected results.

</figcaption>


</template>

<template v-slot:column3>

<Content-Techstack

:techs="[
{ title:'Framework', description:'Jekyll' },
{ title:'Localisation', description:'Jekyll language plugin' },
{ title:'Renderer', description:'Pixi.js' },
{ title:'Build', description:'Browserify, Gulp' },
]"

/>

<!-- <div class="box content">

### Techstack

**Framework** Jekyll
~ **CSS** SCSS
~ **Canvas renderer** Pixi.js
~ **Localisation** Jekyll multi language plugin
~ **Build** Browserify, Gulp

</div> -->

</template>

</Content-ThreeColumnSection>





<Content-MainSectionDivider aside="Section 3 of 3" title="Evaluation"/>





<Content-TextSection rag="rag-6">

<p class="subtitle">
  "When I try to imagine what kind of app or game toucanBox would make, this feels exactly right."
</p>

### What went well

The pilot launched in the first box magazine for all trialists. Those customers that accessed the experience were very engaged. There was internal enthusiasm about the initiative and a general feeling it embodied our values.

### Lessons Learnt

I measured _no noticeable change to activation rate_ due to low reach. When I followed up with customers, I discovered the cause was a combination of the friction going from magazine to online and a mental model for arts and crafts which didn't include interactive content. Only once they understood what it was were they interested. I realised it would require considerable effort to educate our customers at scale, with an uncertain outcome.

### Going forward

Was there a future for digital interactive experiences as part of the toucanBox value proposition? Not in the short-term. The pilot had proven that departing from the core value proposition had potential, but that resources would be better spent focussing on what was already working.


<template slot="aside">

<figure class="image is-9by16">
  <iframe class="lazyload" data-src="https://player.vimeo.com/video/293190429" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</figure>
<!-- <figcaption>

Useability testing a high fidelity iteration with children.

</figcaption> -->

</template>


</Content-TextSection>



<Content-MetricsSection padding="is-medium-large" :metrics="[
{ metric:'3x', description:'higher average time on page.' },
{ metric:'56', description:'minutes longest session.' },
{ metric:'3.4%', description:'of trialists accessed the experience.' },
]"/>
