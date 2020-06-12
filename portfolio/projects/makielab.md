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
prev: ./stompy-robot
next: ./toucanbox
hasFooter: true
---

::: slot top

<Stage-ProjectStage :noise="true" :fadeless="true" ctaLabel="none" ctaUrl="#"
description="Makielab was a mobile games and e-commerce startup acquired by Disney in 2016. We created Makies, an award-winning customisable digital avatar, which could be ordered as a bespoke 3D printed toy.">

<template v-slot:visual-background>
  <Heros-BeadsHero :noise="true"/>
</template>

</Stage-ProjectStage>

:::



<Content-ContextSection :box="true">

<template v-slot:main>

## Context

Monetising mobile games is a tricky subject, particularly when it comes to children. Makielab was founded to explore a new angle on the problem by enabling children to buy physical products based on their unique in-game content. To this end, the company focused both on mobile game development and on e-commerce and toy manufacture.

<p>
I was part of the agile product team responsible for the later. We worked closely with the games team to ensure a holistic experience across touch-points and I spanned teams as we developed new toys and experiences leveraging the underlying technology. One such project involved a partnership with Disney via the Disney/Techstars accelerator where I demonstrated the possibility of personalised

<Content-ModalLink label="Disney Infinity">
<template v-slot:modal>
<Content-ImageFrames-SquareImagesRow padding="is-small" :content="true" :images="[
{ url:'/images/makielab/figure-comp.jpg', alt:'Exploring character features', caption:'Square image caption 1', slot:'slot1', iframe:false },
{ url:'/images/makielab/equipment.jpg', alt:'Exploring equipment', caption:'Square image caption 2', slot:'slot2', iframe:false },
{ url:'/images/makielab/printed-figures.jpg', alt:'Printed example figures', caption:'Square image caption 3', slot:'slot3', iframe:false },
]">

<template slot="content">

<h2> Disney Infinite Me </h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum mauris in odio tempor, vitae tempus ante condimentum. Maecenas id nibh libero. Vivamus tristique elit eu dui mollis elementum.</p>

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
</template>
</Content-ModalLink>
figures.
</p>

With [Sprint](/extra/sprint) I was already exploring the possibility of toy manufacture without the usual requisite investment (tooling, factories etc) prior to joining Makielab.



</template>

<template v-slot:side>

**Product**
Responsive web application and physical toys

**Sector**
Children's toys and entertainment

**Timeframe**
2015-2016

**My role**
UI, concept art and industrial design

**Team**
CTO, product manager, 3D artist, front&#8209;end developer, 2 full&#8209;stack developers

</template>

</Content-ContextSection>




<Content-ImageFrames-MainImageSection padding="is-large" url="https://www.youtube.com/embed/daBtHme2hP8" alt="Makies video" :aside="true" :content="true" :iframe="true">

<template v-slot:content>

## Makies

<p class="subtitle">
  Creative dolls for creative kids and the world's first 3D printed toys.
</p>

In dui odio, posuere eget tristique in, pellentesque nec dolor. Vestibulum quis metus purus. Fusce varius rhoncus enim sit amet semper. Maecenas non nunc id justo vehicula ultricies vestibulum eget ex. Integer mattis faucibus nunc, ut tristique magna bibendum sit amet.

</template>

<template v-slot:aside>

<figure class="image is-square">
  <img class="lazyload" data-src="/images/makielab/Makies-present1.5x.jpg" alt="Makies product and web interface">
</figure>


</template>

</Content-ImageFrames-MainImageSection>
