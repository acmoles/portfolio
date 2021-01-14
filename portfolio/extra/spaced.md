---
title: Spaced
subtitle: None
navStyle:
  style: dark
  tint: blue-tint
  progress: light
background: blue
sidebar: false
date: 2019-09-12
hasFooter: false
---

::: slot top

:::

<Loader current="spaced"/>

<Content-GridSection padding="is-small">

  <template v-slot:grid>
    <figure class="image parent-loading is-square span-2">
      <img class="lazyload" data-src="/images/stompy-robot/birds-eye-sketch.jpg" alt="Spaced sketching">
    </figure>
    <figure class="image parent-loading is-square span-2">
    <img class="lazyload" data-src="/images/stompy-robot/character-sketch.jpg" alt="Spaced character sketching">
    </figure>
    <figure class="image parent-loading is-square span-2">
    <img class="lazyload" data-src="/images/stompy-robot/character-model.jpg" alt="Spaced 3D modelling">
    </figure>
    <figure class="image parent-loading is-square span-2">
    <iframe class="lazyload" data-src="https://player.vimeo.com/video/424005109" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </figure>
    <figure class="image parent-loading is-square span-2">
    <iframe class="lazyload" data-src="https://player.vimeo.com/video/424004636" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </figure>
    <figure class="image parent-loading is-square span-2">
    <iframe class="lazyload" data-src="https://player.vimeo.com/video/424006246" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </figure>
  </template>

</Content-GridSection>

<!-- <div class="container is-fullhd content">
<p>
  Spaced challenges the player to keep a fully simulated spaceship functioning in the face of routine (and not-so-routine) missions.
</p>
</div> -->


<!-- <div class="container is-fullhd content" style="overflow-y: hidden">
<div class="columns is-multiline">
  <div class="column is-one-third">
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/stompy-robot/birds-eye-sketch.jpg" alt="Spaced sketching">
    </figure>
  </div>
  <div class="column is-one-third">
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/stompy-robot/character-sketch.jpg" alt="Spaced sketching">
    </figure>
  </div>
  <div class="column is-one-third">
    <figure class="image is-square">
      <img class="lazyload" data-src="/images/stompy-robot/character-model.jpg" alt="Spaced sketching">
    </figure>
  </div>
  <div class="column is-one-third">
    <figure class="image is-square">
      <iframe class="lazyload" data-src="https://player.vimeo.com/video/424005109" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </figure>
  </div>
  <div class="column is-one-third">
    <figure class="image is-square">
      <iframe class="lazyload" data-src="https://player.vimeo.com/video/424004636" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </figure>
  </div>
  <div class="column is-one-third">
    <figure class="image is-square">
      <iframe class="lazyload" data-src="https://player.vimeo.com/video/424006246" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </figure>
  </div>
  <div class="column is-two-thirds">
    <p style="padding-right: 2em;">
      Spaced challenges the player to keep a fully simulated spaceship functioning in the face of routine (and not-so-routine) missions.
    </p>
  </div>
</div>
</div> -->

<!-- <Loader current="spaced"/>

<Content-ImageFrames-SquareImagesRow  :images="[
{ url:'/images/stompy-robot/birds-eye-sketch.jpg', alt:'square test 1', caption:'Square image caption 1', slot:'slot1', iframe:false },
{ url:'/images/stompy-robot/character-sketch.jpg', alt:'square test 2', caption:'Square image caption 2', slot:'slot2', iframe:false },
{ url:'/images/stompy-robot/character-model.jpg', alt:'square test 3', caption:'Square image caption 3', slot:'slot3', iframe:false },
]">

<template slot="content">

## Spaced

<p class="subtitle">
  Cras cursus est sodales, consectetur felis eget, auctor metus. Duis egestas commodo eros in efficitur. Nullam eu consequat leo. Maecenas sit amet arcu ut mauris accumsan semper.
</p>

**Lorem ipsum dolor sit amet**, _consectetur adipiscing elit._ Praesent fermentum mauris in odio tempor, vitae tempus ante condimentum. Maecenas id nibh libero. Vivamus tristique elit eu dui mollis elementum. Vivamus sit amet semper felis. Maecenas non eros non turpis consectetur accumsan ac eget quam. Nam a sapien diam. Mauris blandit.

</template>

<template slot="slot1">

Praesent fermentum mauris in odio tempor, vitae tempus ante condimentum. Maecenas id nibh libero. Vivamus tristique elit eu dui mollis elementum.

</template>

<template slot="slot2">

Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.

</template>

<template slot="slot3">

Maecenas sed nibh eleifend, congue felis et, malesuada eros. Nullam a metus quis eros pretium hendrerit ut a turpis.

</template>

</Content-ImageFrames-SquareImagesRow>


<Content-ImageFrames-SquareImagesRow padding="is-medium-large" :content="false" :images="[
{ url:'https://player.vimeo.com/video/424005109', alt:'Prototype video', caption:'Prototype video', slot:'slot1', iframe:true },
{ url:'https://player.vimeo.com/video/424004636', alt:'Animation sample thumbs up', caption:'Animation sample thumbs up', slot:'slot2', iframe:true },
{ url:'https://player.vimeo.com/video/424006246', alt:'Animation sample thumbs up', caption:'Animation sample running', slot:'slot3', iframe:true },
]">

<template slot="slot1">

Praesent fermentum mauris in odio tempor, vitae tempus ante condimentum. Maecenas id nibh libero. Vivamus tristique elit eu dui mollis elementum.

</template>

<template slot="slot2">

Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.

</template>

<template slot="slot3">

Maecenas sed nibh eleifend, congue felis et, malesuada eros. Nullam a metus quis eros pretium hendrerit ut a turpis. Suspendisse posuere purus ut lectus commodo, ac pulvinar neque blandit. Mauris a volutpat neque. Ut iaculis ipsum a elementum sodales.

</template>
</Content-ImageFrames-SquareImagesRow> -->
