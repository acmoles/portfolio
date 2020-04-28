---
uid: 4
title: toucanBox
subtitle: Mixing digital and physical play
type: single
navStyle:
  style: light
  tint: purple-tint
  progress: light
background: purple
sidebar: false
date: 2019-09-11
prev: ./interaction
next: ./toucanbox
---

::: slot top

<Stage-ProjectVisual :noise="true">
  <template v-slot:visual-background>
    <Heros-ImageHero name="toucan-rnd" src="/images/toucan-rnd/all-together4.jpg" alt="Ecosia mobile devices" :noise="true"/>
  </template>
</Stage-ProjectVisual>

<Stage-ProjectStage ctaLabel="create.toucanbox.com" ctaUrl="https://create.toucanbox.com"
description="Create by toucanBox explores whether adding digital value to the physical craft box can lift activation rate at a critical point in the first box experience." :fadeUpHero="false">

</Stage-ProjectStage>

:::

<Content-ContextSection lightClass="dark">

<template v-slot:main>

## Context

A toucanBox subscription craft box contains all the materials needed to complete a craft project, with illustrated instructions, stickers to collect and an activity magazine.

In my hybrid role as digital product designer and R&D manager, I was given a broad remit to tackle projects across the customer journey. I set strict criteria - setting up a 'Project Passport' to ensure we were laser focussed on key metrics.

Consequently, some initiatives aimed to improve the experience for children, some for parents and often both benefited. The _other toucanBox case study_ covers two projects focussing on parents.

Create by toucanBox aims to move the needle on customer activation - the rate at which trialists convert to fully paying subscribers. We knew the top two reasons for cancellation in trial were 'affordability' and 'value for money'. My hypothesis was that exclusive digital content could help address this, without increasing the variable cost of the box.

</template>

<template v-slot:side>

**Product**
Responsive web application

**Sector**
Children's digital media

**Timeframe**
2016

**Team composition**
Individual research and development project with stakeholders in Marketing, Creative, Operations and Technology.

_I have omitted confidential information in this case study. All information and images are my own unless stated otherwise._

</template>

</Content-ContextSection>





<Content-ThreeColumnSection padding="is-large">

<template v-slot:column1>

###  The challenge

Establish to what extent digital content linked to the trial box can increase activation rate. Estimate the costs and benefits of producing more digital content.

</template>

<template v-slot:column2>

### The outcome

Must resonate with the core value proposition (hands-on crafting and creativity). High friction when moving to a device from the magazine reduced the reach leading to low overal impact.


</template>

<template v-slot:column3>

### My role

Planning and management
~ Customer research and user testing
~ Prototyping and design iteration
~ Frontend development
~ Analysis and evaluation

</template>

</Content-ThreeColumnSection>





<Content-MainSectionDivider aside="Section 1 of 3" title="Discovery"/>





<Content-PointsSection :content="true" :points="[
{ icon:'40', description:'Projects completed for small businesses and startups.' },
{ icon:'02', description:'If you don’t care for SEO and don’t want to mess with installing dependencies, these are still great choices.' },
{ icon:'103', description:'Years experience working for clients like Google and Amazon.' },
{ icon:'40', description:'VuePress is focused on content-centric static sites and provides features tailored for technical documentation out of the box.' },
{ icon:'02', description:'Award winning team members.' },
{ icon:'103', description:'Hexo has been serving the Vue docs well - in fact, we are probably still a long way to go from migrating away from it for our main site.' },
]">

<template v-slot:content>

## Research

<p class="subtitle">
  I asked existing toucanBox customers what ‘value for money’ means to them and gathered their attitudes to children's digital media.
</p>

Customer acquisition and retention were two of the most discussed performance metrics at toucanBox. This project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).

</template>

</Content-PointsSection>





<Content-ImageFrames-MainImageSection url="https://bulma.io/images/placeholders/640x360.png" alt="placeholder" :aside="true" :content="true">

<template v-slot:content>

## User journey and ideation

Customer acquisition and retention were two of the most discussed performance metrics at toucanBox. This project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).

</template>

<template v-slot:aside>

#### Idea generating session

his project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).

</template>

</Content-ImageFrames-MainImageSection>


<Content-ImageFrames-SquareImagesRow :content="true" :images="[
{ url:'https://player.vimeo.com/video/412315835', alt:'square test 1', caption:'Square image caption 1', slot:'slot1', iframe:true },
{ url:'https://player.vimeo.com/video/412315982', alt:'square test 2', caption:'Square image caption 2', slot:'slot2', iframe:true },
{ url:'https://player.vimeo.com/video/293190568', alt:'square test 3', caption:'Square image caption 3', slot:'slot3', iframe:true },
]">

<template slot="content">

## Testing prototypes

<p class="subtitle">
  I asked existing toucanBox customers what ‘value for money’ means to them and gathered their attitudes to children's digital media.
</p>

Customer acquisition and retention were two of the most discussed performance metrics at toucanBox. This project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).

</template>

<template slot="slot1">

#### Augmented reality (AR) on/in craft

his project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).

- This prototype excited children the least
- The interruption in the story broke the children's attention

</template>

<template slot="slot2">

#### Extended storytelling

his project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).

- This prototype excited children the least
- The interruption in the story broke the children's attention

</template>

<template slot="slot3">

#### Idea generating session

his project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).

- This prototype excited children the least
- The interruption in the story broke the children's attention

</template>

</Content-ImageFrames-SquareImagesRow>



<Content-LessonsSection padding="is-large" :content="true" :aside="true">

<template slot="content">

## Detailing a candidate

Customer acquisition and retention were two of the most discussed performance metrics at toucanBox. This project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).

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
  <Content-LazyImage src="https://bulma.io/images/placeholders/360x640.png" alt="alt" :iframe="false" x="360" y="640"/>
</figure>
<figcaption>

This project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).

</figcaption>

</template>



</Content-LessonsSection>



<Content-MainSectionDivider aside="Section 2 of 3" title="Delivery"/>



<Content-ImageFrames-MainImageSection url="https://bulma.io/images/placeholders/640x360.png" alt="placeholder" :aside="true" :content="true">

<template v-slot:content>

## Visual design

Customer acquisition and retention were two of the most discussed performance metrics at toucanBox. This project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).

</template>

<template v-slot:aside>

<div class="columns is-gapless">

<div class="column is-two-thirds">

<figure class="image is-square">
<Content-LazyImage src="https://bulma.io/images/placeholders/480x480.png" alt="alt" x="256" y="256"/>
</figure>

</div>

</div>

<figcaption>

#### Following the new magazine

his project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).

</figcaption>

</template>

</Content-ImageFrames-MainImageSection>




<Content-ThreeColumnSection :content="true" padding="is-large">

<template v-slot:content>

## Development

<p class="subtitle">
  I asked existing toucanBox customers what ‘value for money’ means to them and gathered their attitudes to children's digital media.
</p>

Customer acquisition and retention were two of the most discussed performance metrics at toucanBox. This project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).

</template>

<template v-slot:column1>

<figure class="image is-square">
  <Content-LazyImage src="https://bulma.io/images/placeholders/480x480.png" alt="alt" :iframe="false" x="256" y="256"/>
</figure>

<figcaption>

Establish to what extent digital content linked to the trial box can increase activation rate. Estimate the costs and benefits of producing more digital content.

</figcaption>

</template>

<template v-slot:column2>

<figure class="image is-square">
  <Content-LazyImage src="https://bulma.io/images/placeholders/480x480.png" alt="alt" :iframe="false" x="256" y="256"/>
</figure>

<figcaption>

Must resonate with the core value proposition (hands-on crafting and creativity). High friction when moving to a device from the magazine reduced the reach leading to low overal impact.

</figcaption>


</template>

<template v-slot:column3>

### Techstack

**Framework** Planning and management
~ **CSS** Customer research and user testing
~ **Renderer** Prototyping and design iteration
~ **Localisation** Frontend development
~ **Framework** Analysis and evaluation

</template>

</Content-ThreeColumnSection>





<Content-MainSectionDivider aside="Section 3 of 3" title="Evaluation"/>





<Content-TextSection>

<p class="subtitle">
  I asked existing toucanBox customers what ‘value for money’ means to them and gathered their attitudes to children's digital media.
</p>

Customer acquisition and retention were two of the most discussed performance metrics at toucanBox. This project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).


### What went well

Establish to what extent digital content linked to the trial box can increase activation rate. Estimate the costs and benefits of producing more digital content.

### What didn't go well

Must resonate with the core value proposition (hands-on crafting and creativity) . High friction when moving to a device from the magazine reduced the reach leading to low overal impact.

### Going forward

Must resonate with the core value proposition (hands-on crafting and creativity) . High friction when moving to a device from the magazine reduced the reach leading to low overal impact.


<template slot="aside">

<figure class="image is-9by16">
  <Content-LazyImage src="https://bulma.io/images/placeholders/360x640.png" alt="alt" :iframe="false" x="360" y="640"/>
</figure>
<figcaption>

This project however, focused on an equally important but somewhat subtler metric; the rate at which trialists convert to fully paid customers (activation rate).

</figcaption>

</template>


</Content-TextSection>



<Content-MetricsSection padding="is-large" :metrics="[
{ metric:'40', description:'Projects completed for small businesses and startups.' },
{ metric:'02', description:'Award winning team members.' },
{ metric:'103', description:'Years experience working for clients like Google and Amazon.' },
]"/>
