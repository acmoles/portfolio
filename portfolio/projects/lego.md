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

The rise of affordable 3D printers popularised the notion of mass customisation → . However, relatively high prices and lacklustre product creation experiences left its promises largely unrealised.

At that time I was working on customisable children’s toys at Makielab → . We enjoyed modest success, catching the attention of Disney who eventually bought the company. In this project I resolved to draw on some lessons learnt there.

Foremost, I wanted to explore the possibility of an unrestricted creation experience, able to generate infinite variations while being intuitive and fun to use. I also intended to fully automate and outsource the fulfillment process.

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
