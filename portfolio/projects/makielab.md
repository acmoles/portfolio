---
uid: 6
title: Makielab
subtitle: Pioneering customisable children's toys
type: single
navStyle:
  style: light
  tint: yellow-tint
  progress: light
background: yellow
sidebar: false
date: 2019-09-12
prev: ./stompy-robot
next: ./toucanbox
hasFooter: true
---

::: slot top
<!-- :fadeless="true" -->
<Stage-ProjectStage rag="rag-4" ragTitle="rag-1" ctaLabel="none" ctaUrl="#"
description="I played a central role in Makielab's collaboration with Disney, who eventually acquired the company.">

<template v-slot:visual-background>
  <figure class="full-screen">
    <Heros-ImageHero src="/images/makielab/sprint-header.jpg" alt="Sprint 3D printed figures"/>
  </figure>
</template>

<template v-slot:platform>

Responsive web app
~ 3D printed toys

</template>

<template v-slot:timeframe>

2015

</template>

<template v-slot:my-role>

Toy Designer
~ UX/UI Designer

</template>

<template v-slot:team>

CTO
~ Product Manager
~ 3D Artist
~ 3 Full&#8209;stack Developers


</template>

</Stage-ProjectStage>

:::

<Content-TextSection rag="rag-5" columnOffset="title-offset" padding="is-initial is-continuous">

<p class="subtitle">
Makielab was a mobile games and e-commerce startup acquired by Disney in 2016. We created Makies, an award-winning customisable digital avatar, which could be ordered as a bespoke 3D printed toy.
</p>

Monetising mobile games is a tricky subject, particularly when it comes to children. Makielab was founded to explore a new angle on the problem by enabling children to buy physical products based on their unique in-game content. To this end, the company focused equally on mobile games, toys and e-commerce.

<p>
 I worked across teams as we developed Makies (below) and new toy experiences leveraging the underlying technology. One such project involved a partnership with Disney via the Disney / Techstars accelerator, where I demonstrated the possibility of personalised

<Content-ModalLink label="Disney Infinity">
<template v-slot:modal>

<Content :page-key="$site.pages.find(p => p.path === '/extra/infinity/').key"/>

</template>
</Content-ModalLink>
figures.
</p>

<!-- I was part of the agile product team responsible for the website and physical products. We worked closely with the games team to ensure a holistic experience across touch-points and I spanned teams -->

</Content-TextSection>

<style lang="sass">

.sprint .stage-column .subtitle
  width: 82%

.sprint .section
  .grid-wrapper-content
    column-gap: 2em
    row-gap: 2em

.image.sprint-tall.span-3
  grid-row: auto / span 3

</style>



<Content-ImageFrames-MainImageSection rag="rag-5" padding="is-large" url="https://www.youtube.com/embed/daBtHme2hP8" alt="Makies video" :aside="true"  :iframe="true">

<template v-slot:content>

## Makies

<p class="subtitle" style="padding-right: 6em;">
  Creative dolls for creative kids and the world's first 3D printed toys.
</p>

Makies are toys with a digital twin. They're the child's personalised avatar for Makielab's mobile games but they're also a physical toy which encourages hands-on creativity, crafting, DIY making, modification and learning. Makies are designed to get children excited about technology and can be extended with Arduino. Each Makie is hand-assembled in the UK.

<!-- Character with a digital and physical existence. Personalised by the child, avatar/character from the mobile game or made online before purchase. On-demand manufacture. Creative, DIY toy, crafting, hands-on play/learning, modification e.g. Arduino, RFID, RC. Counterpart to on-screen play. Get children excited about technology, particularly girls. Sustainable and locally made. -->

</template>

<template v-slot:aside>

<figure class="image is-square">
  <img class="lazyload" data-src="/images/makielab/Makies-present1.5x.jpg" alt="Makies product and web interface">
</figure>


</template>

</Content-ImageFrames-MainImageSection>



<Content-FreeSection class="sprint-text" padding="is-continuous">

<div class="columns is-multiline">
<div class="column is-half">

## Sprint

Before joining Makielab I was already exploring the possibility of toy manufacture with 3D printing. Colour and material detail are strictly limited by cost in toy design and manufacture. If these limitations were lifted, _it could enable toys with the surface detail we're used to in on&#8209;screen entertainment._

</div>
<div class="column is-half title-offset">

To demonstrate my findings I created Sprint - jetpack wielding athletes, drawing inspiration from sports brands and automotive design. I targeted the 3D Systems Projet-4500 which promised to match the colour detail of sandstone printers with the physical properties of SLS nylon. Results were promising but quality was unpredictable.

</div>
</div>

<style lang=sass>

.sprint-text
  padding-bottom: 1em

</style>

</Content-FreeSection>



<Content-GridSection padding="is-medium-large sprint">

  <template v-slot:grid>
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/makielab/sprint-wip-rough.jpg" alt="3D modelling rough forms">
    </figure>
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/makielab/sprint-wip-body.jpg" alt="3D modelling body WIP">
    </figure>
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/makielab/sprint-wip-body-details.jpg" alt="3D modelling details">
    </figure>
    <figure class="image is-square span-3 sprint-tall">
      <img class="lazyload sketch-group" data-src="/images/makielab/sketch-group.jpg" alt="Figure sketches">
    </figure>
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/makielab/sprint-wip-sketch.jpg" alt="Character face sketch">
    </figure>
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/makielab/sprint-wip-sculpt.jpg" alt="Face sculpt">
    </figure>
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/makielab/sprint-wip-materials.jpg" alt="Face with materials">
    </figure>
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/makielab/sprint-wip-uvs.jpg" alt="Character face sketch">
    </figure>
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/makielab/sprint-wip-print.jpg" alt="Face sculpt">
    </figure>
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/makielab/sprint-wip-test.jpg" alt="Face with materials">
    </figure>
    <figure class="image is-square span-2">
      <img class="lazyload" data-src="/images/makielab/render-group.jpg" alt="Render of figures">
    </figure>
    <figure class="image is-square span-2">
      <img class="lazyload" data-src="/images/makielab/render-action.jpg" alt="Render of figures in action">
    </figure>
    <figure class="image is-square span-2">
      <img class="lazyload" data-src="/images/makielab/photo-close.jpg" alt="Printed figures closeup">
    </figure>
  </template>

</Content-GridSection>


<!-- <Content-QuoteSection rag="rag-4" quote="Anthony has shown a great persistence on one particular project where almost everyone in the design team lost hope due to very strict technological, ergonomic and layout constraints. He literally saved the project and brought back optimism and belief." attribute="Timour Bourbaev, Creative Director of Product Design, referring to NITA air traffic control" color="blue"/> -->
