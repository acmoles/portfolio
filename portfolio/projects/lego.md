---
uid: 9
title: Lego
subtitle: Building a uniquely Lego gaming experience
type: single
navStyle:
  style: light
  tint: pink-tint
  progress: light
background: pink
sidebar: false
date: 2019-09-12
prev: ./random-international
next: ./art-lebedev-studio
hasFooter: true
---

::: slot top

<Stage-ProjectStage :noise="true" ctaLabel="none" ctaUrl="#"
description="Proin volutpat in purus a lobortis. Praesent nec purus eu metus volutpat placerat a eu sapien. Quisque eu sapien ut quam venenatis convallis. Vestibulum porta aliquam elit et fringilla.">

  <template v-slot:visual-column>
    <figure class="lego-image">
      <Heros-ImageHero src="/images/lego/lego-comp.svg" alt="Ecosia mobile devices"/>
    </figure>
  </template>

</Stage-ProjectStage>

<style lang="sass">

.lego-image
  position: absolute
  left: -25%
  width: 200%

</style>

:::


<Content-ContextSection :box="true">

<template v-slot:main>

## Context

Nulla facilisi. Proin volutpat in purus a lobortis. Praesent nec purus eu metus volutpat placerat a eu sapien. Quisque eu sapien ut quam venenatis convallis. Vestibulum porta aliquam elit et fringilla. Etiam semper iaculis massa, sit amet fringilla lorem lacinia nec.

Proin velit neque, ornare nec luctus at, sollicitudin a erat. Nunc consectetur tortor in nibh vulputate viverra. Integer fringilla orci enim, non efficitur erat elementum vel. Quisque sollicitudin risus sed pretium auctor. Quisque sit amet fermentum nibh. Proin tristique neque vitae ipsum malesuada, ac feugiat justo suscipit. Pellentesque euismod sodales ipsum in mattis.

Suspendisse potenti. Praesent risus massa, vulputate eget turpis in, dignissim tincidunt odio


</template>

<template v-slot:side>

**Reading time**
12 minutes

**Team composition**
CTO, product designer, two full-stack developers

</template>

</Content-ContextSection>




<Content-FreeSection padding="is-large">

<div class="columns is-multiline">
  <div class="column is-half">
    <figure class="image is-lego">
      <img class="lazyload" data-src="/images/lego/lego-sketches.jpg" alt="Sketching out the concept">
    </figure>
  </div>

  <div class="column is-half">
    <figure class="image is-lego">
      <img class="lazyload" data-src="/images/lego/lego-details.jpg" alt="Refining details">
    </figure>
  </div>

  <div class="column is-half">
    <figure class="image is-16by9">
      <img class="lazyload" data-src="/images/lego/Lego-dimensions.jpg" alt="Trailer still">
    </figure>
  </div>


  <div class="column is-half">
    <figure class="image is-16by9">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0kmnrwfDewo" frameborder="0" allow="picture-in-picture" allowfullscreen></iframe>
    </figure>
  </div>

</div>



</Content-FreeSection>
