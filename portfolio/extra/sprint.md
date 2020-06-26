---
uid: 1
title: Sprint
pageClass: sprint
subtitle: Applying new technology to toy manufacture
navStyle:
  style: light
  tint: regular-tint
  progress: light
background: dark
sidebar: false
date: 2019-09-12
hasFooter: true
---

::: slot top

<Stage-ProjectStage :noise="true" ctaLabel="none" ctaUrl="https://www.ecosia.org" rag="rag-4"
description="Sprint action figures are manufactured on-demand in durable, full colour 3D printed plastic.">

  <template v-slot:visual-background>
    <figure class="full-screen">
      <Heros-ImageHero src="/images/makielab/sprint-header.jpg" alt="Ecosia mobile devices"/>
    </figure>
  </template>

</Stage-ProjectStage>

:::


<Content-ContextSection :box="true">

<template v-slot:main>

## Context

Colour details are strictly limited by cost in toy design and manufacture. Three options are available; decals, hand painting or the creative use of split lines between parts of different colour. These constraints often lead to smart design solutions. But if these limitations were lifted, it could enable toys with the kind of colour and material detail we're only used to seeing in on&#8209;screen entertainment.

In late 2013, 3D Systems announced the Projet-4500 with the promise of full colour 3D printing in a durable plastic material comparable to SLS nylon. Previous colour printers produced a brittle sandstone-like ceramic unsuitable for toys. In response, I started experimenting with workflows to enable the application of colour information to high accuracy geometry created in software like Rhino 3D.

To demonstrate my findings I created Sprint - jetpack wielding athletes, racing through your living room and dodging obstacles with their parkour skills. I Drew inspiration from sports brands and automotive design. I believe they remain the only example of full colour articulated action figures for children. The new printer hinted at the potential, but didn't answer the demands of toy durability, nor my hopes for detail and colour resolution.


<!-- The same colour and material information could be used directly in the toy.

but I can equally imagine how much creative energy would be released if these limitations were lifted.

For the sake of cost and simplicity

It would enable closer alignment between children's digital entertainment and their toy representations.

My interest lay specifically in full colour 3D printing of durable plastics suitable for children's toys.


LEGO was an early adopter of the 3D printing as part of the toy development process.

I pioneered the use of 3D printing in the toy development process at Design by Touch. At LEGO I saw how creative energy was unleashed when designers have ready access to physical representations of what they're working on digitally. The speed of the process.

I kept up-to-date with developments in the 3D printing industry. Promise of democratisation of 3D printing with increasing affordability of desktop machines.

Colour 3D printing is quite common - statues etc. - but not with mechanically durable plastic suitable for children's toys with articulated joints or mechanisms.

3D Systems released a machine which purported to deliver on this promise.




Sadly, existing machine was too brittle and to this day there isn't a ubiquitous machine capable of meeting colour with mechanical stability. HP is getting there.
3D printing - as a designer with interest across digital and physical - very interesting. Still not quite there yet (like Wesen blurb though...)

Theme - rocket powered athletes racing through your living room and dodging obstacles with their parkour skills. Drawing inspiration from sports brands and automotive design.

a workflow whereby colour information could be

with applying colour information to meshes created

how the mechanical accuracy of 3D geometry created in industrial design and engineering modelling tools like Rhino 3D could be texture mapped in a similar fashion to 3D assets in the entertainment industry.


-->

</template>

<template v-slot:side>

**Product** Colour 3D printed action figures

**Sector** Children's toys

**Timeframe** 2014

**Individual project**

</template>

</Content-ContextSection>


<style lang="sass">

.sprint .stage-column .subtitle
  width: 82%

.sprint .section
  padding-top: 25em
  .grid-wrapper-content
    column-gap: 2em
    row-gap: 2em

.image.sprint-tall img
  height: auto
  bottom: 0
  top: auto

</style>


<Content-GridSection padding="is-large sprint">

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
    <figure class="image is-16by9 span-3 sprint-tall">
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
