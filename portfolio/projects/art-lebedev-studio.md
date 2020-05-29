---
uid: 10
title: Art Lebedev Studio
subtitle: Channelling an agency style
type: single
navStyle:
  style: light
  tint: regular-tint
  progress: light
background: als
sidebar: false
date: 2019-09-12
src: /images/homepage/art-lebedev-tile.jpg
prev: ./lego
next: ./wesen
---

::: slot top

<Stage-ProjectStage :noise="true" ctaLabel="artlebedev.ru" ctaUrl="https://www.artlebedev.ru/"
description="Proin volutpat in purus a lobortis. Praesent nec purus eu metus volutpat placerat a eu sapien. Quisque eu sapien ut quam venenatis convallis. Vestibulum porta aliquam elit et fringilla.">

  <template v-slot:visual-background>
    <figure class="full-screen">
      <Heros-ImageHero src="/images/als/moscow.jpg" alt="Ecosia mobile devices"/>
    </figure>
  </template>

</Stage-ProjectStage>

:::




<Content-ContextSection :box="true">

<template v-slot:main>

## Context

Nulla facilisi. Proin volutpat in purus a lobortis. Praesent nec purus eu metus volutpat placerat a eu sapien. Quisque eu sapien ut quam venenatis convallis. Vestibulum porta aliquam elit et fringilla. Etiam semper iaculis massa, sit amet fringilla lorem lacinia nec.

Proin velit neque, ornare nec luctus at, sollicitudin a erat. Nunc consectetur tortor in nibh vulputate viverra. Integer fringilla orci enim, non efficitur erat elementum vel. Quisque sollicitudin risus sed pretium auctor. Quisque sit amet fermentum nibh. Proin tristique neque vitae ipsum malesuada, ac feugiat justo suscipit. Pellentesque euismod sodales ipsum in mattis.

Suspendisse potenti. Praesent risus massa, vulputate eget turpis in, dignissim tincidunt odio

</template>

<template v-slot:side>

**Product**
Responsive landing page and signup web application

**Sector**
Subscription e-commerce

**Timeframe**
2017

**Team composition**
CTO, product designer*, two full-stack developers, stakeholders in Marketing and Creative

_I have omitted confidential information in this case study. All information and images are my own unless stated otherwise._


</template>

</Content-ContextSection>




<Content-ImageFrames-SquareImagesRow padding="is-large" :content="true" :images="[
{ url:'/images/als/als1.jpg', alt:'ATC console', caption:'Square image caption 1', slot:'slot1', iframe:false, action: {
  type: 'link',
  label: 'Read more',
  url: 'https://www.artlebedev.ru/nita/'
  } },
{ url:'/images/als/als2.jpg', alt:'Toilet plunger', caption:'Square image caption 2', slot:'slot2', iframe:false, action: {
  type: 'link',
  label: 'Read more',
  url: 'https://www.artlebedev.ru/oktopus/'
  } },
{ url:'/images/als/als3.jpg', alt:'Helicopter', caption:'Square image caption 3', slot:'slot3', iframe:false, action: {
  type: 'link',
  label: 'Read more',
  url: 'https://www.artlebedev.ru/scout/exterior/'
  } },
]">

<template slot="content">

## Highlights

</template>

<template slot="slot1">

#### NITA air traffic control

Vivamus sit amet semper felis. Maecenas non eros non turpis consectetur accumsan ac eget quam. Nam a sapien diam. Mauris blandit.

</template>

<template slot="slot2">

#### Oktopus toilet plunger

Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.

</template>

<template slot="slot3">

#### Scout helicopter

Maecenas sed nibh eleifend, congue felis et, malesuada eros. Nullam a metus quis eros pretium hendrerit ut a turpis.

</template>

</Content-ImageFrames-SquareImagesRow>
