---
uid: 6
title: Makielab
subtitle: Pioneering customisable childrens toys
type: single
navStyle:
  style: light
  tint: yellow-tint
  progress: light
background: yellow
sidebar: false
date: 2019-09-12
prev: ./toucanbox
next: ./random-international
---

::: slot top

<Stage-ProjectVisual :fadeless="true">
  <template v-slot:visual-background>
    <Heros-BeadsHero :noise="true"/>
  </template>
</Stage-ProjectVisual>

<Stage-ProjectStage ctaLabel="www.ecosia.org" ctaUrl="https://www.ecosia.org"
description="Wesen is an experiment in turning customers into creators and building a digital product end-to-end. It enables anyone to customise a pendant necklace, which can be bespoke manufactured by a blend of traditional and modern techniques." :fadeUpHero="false">

<template v-slot:visual-grid>
  <!-- <figure class="image">
    <ImageHero name="toucanbox" src="/images/toucanbox/combined_onboarding.png" alt="toucanBox"/>
  </figure> -->
</template>

</Stage-ProjectStage>

:::



<Content-ContextSection :box="true">

<template v-slot:main>

## Context

The rise of affordable 3D printers popularised the notion of mass customisation → . However, relatively high prices and lacklustre product creation experiences left its promises largely unrealised.

At that time I was working on customisable children’s toys at Makielab → . We enjoyed modest success, catching the attention of Disney who eventually bought the company. In this project I resolved to draw on some lessons learnt there.

Foremost, I wanted to explore the possibility of an unrestricted creation experience, able to generate infinite variations while being intuitive and fun to use. I also intended to fully automate and outsource the fulfillment process. [Sprint - pre Makielab](/extra/sprint)

</template>

<template v-slot:side>

**Reading time**
12 minutes

**Team composition**
CTO, product designer, two full-stack developers

</template>

</Content-ContextSection>




<Content-ImageFrames-MainImageSection url="https://bulma.io/images/placeholders/640x360.png" alt="placeholder" :aside="true" :content="true">

<template v-slot:content>

## Makies

<p class="subtitle">
  Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.
</p>

In dui odio, posuere eget tristique in, pellentesque nec dolor. Vestibulum quis metus purus. Fusce varius rhoncus enim sit amet semper. Maecenas non nunc id justo vehicula ultricies vestibulum eget ex. Integer mattis faucibus nunc, ut tristique magna bibendum sit amet.

</template>

<template v-slot:aside>

<figure class="image is-square">
  <img class="lazyload" data-src="https://bulma.io/images/placeholders/480x480.png" alt="#">
</figure>


</template>

</Content-ImageFrames-MainImageSection>



<Content-ImageFrames-SquareImagesRow padding="is-large" :content="true" :images="[
{ url:'https://bulma.io/images/placeholders/480x480.png', alt:'square test 1', caption:'Square image caption 1', slot:'slot1', iframe:false },
{ url:'https://bulma.io/images/placeholders/480x480.png', alt:'square test 2', caption:'Square image caption 2', slot:'slot2', iframe:false },
{ url:'https://bulma.io/images/placeholders/480x480.png', alt:'square test 3', caption:'Square image caption 3', slot:'slot3', iframe:false },
]">

<template slot="content">

## Disney Infinite Me

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum mauris in odio tempor, vitae tempus ante condimentum. Maecenas id nibh libero. Vivamus tristique elit eu dui mollis elementum.

</template>

<template slot="slot1">

Vivamus sit amet semper felis. Maecenas non eros non turpis consectetur accumsan ac eget quam. Nam a sapien diam. Mauris blandit.

</template>

<template slot="slot2">

Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.

</template>

<template slot="slot3">

Maecenas sed nibh eleifend, congue felis et, malesuada eros. Nullam a metus quis eros pretium hendrerit ut a turpis.

</template>

</Content-ImageFrames-SquareImagesRow>
