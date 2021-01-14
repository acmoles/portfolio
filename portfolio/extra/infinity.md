---
title: Disney Infinity
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

<Loader current="infinity"/>

<Content-ImageFrames-SquareImagesRow padding="is-small"  :images="[
{ url:'/images/makielab/figure-comp.jpg', alt:'Exploring character features', caption:'Square image caption 1', slot:'slot1', iframe:false },
{ url:'/images/makielab/equipment.jpg', alt:'Exploring equipment', caption:'Square image caption 2', slot:'slot2', iframe:false },
{ url:'/images/makielab/printed-figures.jpg', alt:'Printed example figures', caption:'Square image caption 3', slot:'slot3', iframe:false },
]">

<template slot="content">

<h2> Disney Infinite Me </h2>
<p class="rag-3">
I worked closely with the team at Disney to envision how Makies tech could be applied to Disney Infinity. Our approach involved a parameterised base figure, similar to the Makies doll head, with customisable variables like height, build, face, pose, clothing and accessories. We had a working prototype of the concept.
</p>

</template>

<template slot="slot1">

I sketched to explore which variables were most important for creating diverse characters

</template>

<template slot="slot2">

Costumes and equipment from various Disney IPs can be mixed and matched

</template>

<template slot="slot3">

I created several prototypes to demonstrate the concept and explore manufacturing solutions

</template>
</Content-ImageFrames-SquareImagesRow>
