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

<Stage-ProjectStage :noise="true" :fadeless="true" ctaLabel="none" ctaUrl="#"
description="Wesen is an experiment in turning customers into creators and building a digital product end-to-end. It enables anyone to customise a pendant necklace, which can be bespoke manufactured by a blend of traditional and modern techniques.">

<template v-slot:visual-background>
  <Heros-BeadsHero :noise="true"/>
</template>

</Stage-ProjectStage>

:::



<Content-ContextSection :box="true">

<template v-slot:main>

## Context

Vestibulum ac ultrices velit, in porttitor diam. Cras pellentesque dui sed neque pulvinar, in semper turpis rhoncus. Ut ac malesuada nisl. Cras nisi augue, auctor a justo eu, vulputate laoreet ipsum. Vivamus est ante, pellentesque vitae ultrices eu, accumsan ut nisl. Suspendisse ex metus, eleifend vel elit ut, mattis placerat velit. Suspendisse at condimentum neque. Nulla facilisi. Proin volutpat in purus a lobortis. Praesent nec purus eu metus volutpat placerat a eu sapien. Quisque eu sapien ut quam venenatis convallis. Vestibulum porta aliquam elit et fringilla. Etiam semper iaculis massa, sit amet fringilla lorem lacinia nec.

Proin velit neque, ornare nec luctus at, sollicitudin a erat. Nunc consectetur tortor in nibh vulputate viverra. Integer fringilla orci enim, non efficitur erat elementum vel. Quisque sollicitudin risus sed pretium auctor. Quisque sit amet fermentum nibh. Proin tristique neque vitae ipsum malesuada, ac feugiat justo suscipit. Pellentesque euismod sodales ipsum in mattis. [Sprint - pre Makielab](/extra/sprint)

</template>

<template v-slot:side>

**Reading time**
12 minutes

**Team composition**
CTO, product designer, two full-stack developers

</template>

</Content-ContextSection>




<Content-ImageFrames-MainImageSection url="https://www.youtube.com/embed/daBtHme2hP8" alt="Makies video" :aside="true" :content="true" :iframe="true">

<template v-slot:content>

## Makies

<p class="subtitle">
  Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.
</p>

In dui odio, posuere eget tristique in, pellentesque nec dolor. Vestibulum quis metus purus. Fusce varius rhoncus enim sit amet semper. Maecenas non nunc id justo vehicula ultricies vestibulum eget ex. Integer mattis faucibus nunc, ut tristique magna bibendum sit amet.

</template>

<template v-slot:aside>

<figure class="image is-square">
  <img class="lazyload" data-src="/images/makielab/Makies-present1.5x.jpg" alt="Makies product and web interface">
</figure>


</template>

</Content-ImageFrames-MainImageSection>



<Content-ImageFrames-SquareImagesRow padding="is-large" :content="true" :images="[
{ url:'/images/makielab/figure-comp.jpg', alt:'Exploring character features', caption:'Square image caption 1', slot:'slot1', iframe:false },
{ url:'/images/makielab/equipment.jpg', alt:'Exploring equipment', caption:'Square image caption 2', slot:'slot2', iframe:false },
{ url:'/images/makielab/printed-figures.jpg', alt:'Printed example figures', caption:'Square image caption 3', slot:'slot3', iframe:false },
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
