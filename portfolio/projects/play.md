---
uid: 3
title: Play
subtitle: Experimenting with future products and interactions
type: single
navStyle:
  style: light
  tint: green-tint
  progress: light
background: green
sidebar: false
date: 2020-10-11
prev: ./ecosia
next: ./toucan-research
srcComponent: AbstractHome
hasFooter: true
---

::: slot top

<Stage-ProjectStage :noise="true" ctaLabel="none" ctaUrl="#"
description="I love learning and creating. This is a selection of personal design and  technology experiments.">

  <template v-slot:visual-background>
    <Heros-AbstractHero :noise="false"/>
  </template>

  <template v-slot:platform>

  Multi-platform

  </template>

  <template v-slot:timeframe>

  2016-2020

  </template>

  <template v-slot:my-role>

  UI/UX Designer
  ~ Developer

  </template>

  <template v-slot:team>

  Personal projects

  </template>

</Stage-ProjectStage>
:::

<style lang="sass">

.green-tint .stage-intro
  pointer-events: none

</style>

<!--

<Content-TextSection rag="rag-4" padding="is-initial" columnOffset="title-offset">

An generation of computer users who grew up playing 3D games is poised to join the computing mainstream. They are hungry for novel applications of immersive interfaces to increase their productivity and improve their daily computing experience. I believe two of the most promising near-term applications of spatial computing are data visualisation and creative tools.

_"A generation is coming up who are fluent in 3D interfaces. The next generation will be XR natives."_





My skillset which is rooted in the design of physical objects

This page will feature a curated selection of interaction design experiments and workflow explorations. I'm currently inspired by the implications of spatial computing, machine learning and (as always) the interface of digital and physical experiences. _"A generation is coming up who are fluent in 3D interfaces. The next generation will be XR natives."_


</Content-TextSection>

## Dawn of mainstream 3D computing

An entire generation of computer users who grew up playing 3D games is poised to join the computing mainstream. They are hungry for novel and innovative application of 3D-related technologies to increase their productivity and improve their daily computing experience. Also in this decade, a vast amount of research capital is being poured into big data visualization technology, 3D scanning, and 3D printing — perhaps legitimizing computing in 3D for the first time in history. Combine this trend with the ever-increasing 3D hardware rendering power of today’s mobile devices — and the ability to harness this power simply and effectively using WebGL — and JavaScript developers are now at the forefront of an exciting wave.

Generation coming up who are fluent in 3D interfaces. The next generation will be XR natives.

Significant research capital is being invested in 3D data visualization, environmental understanding, hand tracking and other enabling technologies. Combined with ever-increasing hardware performance, the breakthrough of spatial computing feels soon, but not yet. I decided to delve into this space and learn some of the foundational knowledge and skills required to design and prototype effectively.


I'm uniquely placed to excel in this new world of 3D interactions.

- Hand sketching
- 3D design background
- Craft, making and engineering of physical things
- Video games and entertainment -->



<Content-ImageFrames-SquareImagesRow rag="rag-6" padding="is-initial" :images="[
{ url:'/images/play/reduced/wireframe-reduced.gif', alt:'square test 1', caption:'Square image caption 1', slot:'slot1', iframe:false },
{ url:'/images/play/reduced/wireframe-dial-reduced.gif', alt:'square test 2', caption:'Square image caption 2', slot:'slot2', iframe:false },
{ url:'/images/play/turntable.jpg', alt:'square test 3', caption:'Square image caption 3', slot:'slot3', iframe:false, action: {
  type: 'modal',
  label: 'More sketches',
  slot: 'modalSketch'
} },
]">

<template slot="content">

## Lego XR

<p class="subtitle">
  What if tactile real-world play experiences could be translated into XR?
</p>

I firmly believe creative tools are among the most promising applications of XR. Indeed, this is clear when we consider likes of [Tiltbrush](https://www.tiltbrush.com/), but I wanted to extend the discussion to creative experiences for children. It's well known that even toddlers intuitively understand swipe gestures on mobile devices - will we see similarly rapid intuitive understanding of XR interaction? _This project is a work in progress._ I'm using a [Leap Motion](https://www.ultraleap.com/) and [Unity](https://unity3d.com/).

</template>

<template slot="slot1">

#### Turntable

Prototyping with 3D primitives is the closest analogy to UI/UX wireframing. In this case I'm experimenting with a turntable to enable users to rotate the building base.

</template>

<template slot="slot2">

#### Dial

I drew inspiration from the physical interfaces designed by Dieter Rams for Braun record players, where the dial is a common control.

</template>

<template slot="slot3">

#### Sketching

My background in industrial design lends itself to sketching quick iterations of 3D interfaces.

</template>

<template slot="modalSketch">

<figure class="image parent-loading is-16by9">
  <img class="lazyload" data-src="/images/play/turntable-full.jpg" alt="Iterations of the Main Stage">
</figure>

</template>

</Content-ImageFrames-SquareImagesRow>


<Content-ImageFrames-MainImageSection padding="is-small" imageClass="is-16by9" url="https://player.vimeo.com/video/488558845" alt="Nova showreel" :aside="true" rag="rag-4" :iframe="true">

</Content-ImageFrames-MainImageSection>




<Content-ImageFrames-SquareImagesRow style="padding-top: 2em;" padding="is-large" :images="[
{ url:'/images/play/reduced/side-build.gif', alt:'square test 1', caption:'Square image caption 1', slot:'slot1', iframe:false },
{ url:'/images/play/reduced/dial-reduced.gif', alt:'square test 2', caption:'Square image caption 2', slot:'slot2', iframe:false },
{ url:'/images/play/reduced/explode-reduced.gif', alt:'square test 3', caption:'Square image caption 3', slot:'slot3', iframe:false },
]">

<template slot="slot1">

#### Build assist

When released, bricks snap to valid grid positions and orientations. I discovered early on that some assistance was required to augment the precision of current-gen hand tracking technology.

</template>

<template slot="slot2">

#### Colour dial

The colour dial enables the selection of an active Lego moulding colour. When a brick is hovered near the sphere it initiates a countdown, which when finished applies the active colour to the held brick.

</template>

<template slot="slot3">

#### Clone sphere

The clone sphere has similar behaviour, cloning the held brick when the countdown completes. While prototyping this behaviour I accidentally spawned bricks for hundreds of frames resulting in an explosion!

</template>

</Content-ImageFrames-SquareImagesRow>
