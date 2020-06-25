---
title: Disney Infinity
subtitle: None
navStyle:
  style: light
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
