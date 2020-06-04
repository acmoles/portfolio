---
uid: 2
title: Ecosia
subtitle: Leading the native apps team
type: single
navStyle:
  style: light
  tint: orange-tint
  progress: light
background: orange
sidebar: false
date: 2019-09-11
prev: ./wesen
next: ./interaction
image:
hasFooter: true
---


::: slot top

<Stage-ProjectStage :noise="true" ctaLabel="ecosia.org" ctaUrl="https://www.ecosia.org"
description="Proin volutpat in purus a lobortis. Praesent nec purus eu metus volutpat placerat a eu sapien. Quisque eu sapien ut quam venenatis convallis. Vestibulum porta aliquam elit et fringilla.">

  <template v-slot:visual-column>
    <figure class="ecosia-image">
      <Heros-ImageHero src="/images/ecosia/ecosia-comp-grid.png" alt="Ecosia mobile devices"/>
    </figure>
  </template>

</Stage-ProjectStage>

<style lang="sass">

.ecosia-image
  position: absolute
  left: -16%
  width: 144%
</style>

:::


<Content-ContextSection :box="true">

<template v-slot:main>

## Context

Nulla facilisi. Proin volutpat in purus a lobortis. Praesent nec purus eu metus volutpat placerat a eu sapien. Quisque eu sapien ut quam venenatis convallis. Vestibulum porta aliquam elit et fringilla. Etiam semper iaculis massa, sit amet fringilla lorem lacinia nec.

Proin velit neque, ornare nec luctus at, sollicitudin a erat. Nunc consectetur tortor in nibh vulputate viverra. Integer fringilla orci enim, non efficitur erat elementum vel. Quisque sollicitudin risus sed pretium auctor. Quisque sit amet fermentum nibh. Proin tristique neque vitae ipsum malesuada, ac feugiat justo suscipit. Pellentesque euismod sodales ipsum in mattis. [Wesen anchor](projects/wesen/#going-forward)

Suspendisse potenti. Praesent risus massa, vulputate eget turpis in, dignissim tincidunt odio

</template>

<template v-slot:side>

**Reading time**
12 minutes

**Team composition**
CTO, product designer, two full-stack developers

</template>

</Content-ContextSection>


<Content-ImageFrames-SquareImagesRow :content="true" :images="[
{ url:'https://bulma.io/images/placeholders/480x480.png', alt:'square test 1', caption:'Square image caption 1', slot:'slot1', iframe:false },
{ url:'https://bulma.io/images/placeholders/480x480.png', alt:'square test 2', caption:'Square image caption 2', slot:'slot2', iframe:false },
{ url:'https://bulma.io/images/placeholders/480x480.png', alt:'square test 3', caption:'Square image caption 3', slot:'slot3', iframe:false },
]">

<template slot="content">

## Initiatives

<p class="subtitle">
  Cras cursus est sodales, consectetur felis eget, auctor metus. Duis egestas commodo eros in efficitur. Nullam eu consequat leo. Maecenas sit amet arcu ut mauris accumsan semper.
</p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum mauris in odio tempor, vitae tempus ante condimentum. Maecenas id nibh libero. Vivamus tristique elit eu dui mollis elementum. Vivamus sit amet semper felis. Maecenas non eros non turpis consectetur accumsan ac eget quam. Nam a sapien diam. Mauris blandit.

<br>
<br>

### As product manager

</template>

<template slot="slot1">

#### Android app

Praesent fermentum mauris in odio tempor, vitae tempus ante condimentum. Maecenas id nibh libero. Vivamus tristique elit eu dui mollis elementum.

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

<template slot="slot2">

#### iOS app

Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

<template slot="slot3">

#### Mac app

Maecenas sed nibh eleifend, congue felis et, malesuada eros. Nullam a metus quis eros pretium hendrerit ut a turpis.

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

</Content-ImageFrames-SquareImagesRow>




<Content-ImageFrames-SquareImagesRow padding="is-medium" :content="true" :images="[
{ url:'https://bulma.io/images/placeholders/480x480.png', alt:'square test 1', caption:'Square image caption 1', slot:'slot1', iframe:false },
{ url:'https://bulma.io/images/placeholders/480x480.png', alt:'square test 2', caption:'Square image caption 2', slot:'slot2', iframe:false },
{ url:'https://bulma.io/images/placeholders/480x480.png', alt:'square test 3', caption:'Square image caption 3', slot:'slot3', iframe:false },
]">

<template slot="content">

### As product designer

</template>

<template slot="slot1">

#### Ecosia maps

Praesent fermentum mauris in odio tempor, vitae tempus ante condimentum. Maecenas id nibh libero. Vivamus tristique elit eu dui mollis elementum. [Prototype](https://acmoles.github.io/maps-ui/)

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

<template slot="slot2">

#### User accounts MVP

Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

<template slot="slot3">

#### Global searches data-vis

Maecenas sed nibh eleifend, congue felis et, malesuada eros. Nullam a metus quis eros pretium hendrerit ut a turpis. Suspendisse posuere purus ut lectus commodo, ac pulvinar neque blandit. Mauris a volutpat neque. Ut iaculis ipsum a elementum sodales. [Live](https://realtime.staging.ecosia.org/)

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

</Content-ImageFrames-SquareImagesRow>


<Content-TextSection>

## Reflections

<p class="subtitle">
  Cras cursus est sodales, consectetur felis eget, auctor metus. Duis egestas commodo eros in efficitur.
</p>

Maecenas sed nibh eleifend, congue felis et, malesuada eros. Nullam a metus quis eros pretium hendrerit ut a turpis. Suspendisse posuere purus ut lectus commodo, ac pulvinar neque blandit. Mauris a volutpat neque. Ut iaculis ipsum a elementum sodales. Maecenas maximus nibh turpis. Vestibulum finibus felis quis imperdiet placerat. Phasellus dapibus, quam et finibus auctor, ipsum sem ultricies ipsum, vitae suscipit enim turpis nec eros. Etiam vitae enim lorem.


### What went well

Mauris a volutpat neque. Ut iaculis ipsum a elementum sodales. Maecenas maximus nibh turpis. Vestibulum finibus felis quis imperdiet placerat. Phasellus dapibus, quam et finibus auctor, ipsum sem ultricies ipsum, vitae suscipit enim turpis nec eros. Etiam vitae enim lorem.

### What didn't go well

Sed tempus, massa sed egestas viverra, mi nunc maximus lorem, nec egestas arcu magna non risus. Quisque pulvinar dui sagittis orci blandit pellentesque. Duis ornare bibendum ultrices. Aenean et nunc tortor. Cras semper gravida purus sit amet porttitor. Donec fermentum finibus eros.

### Going forward

Maecenas porttitor congue enim, at tempus tellus volutpat ut. In ultricies, justo nec rhoncus rhoncus, ipsum libero tempus est, at pellentesque mi ligula vitae eros. Cras sodales ut nunc et volutpat. Proin eget porttitor neque, consectetur ullamcorper ipsum. Donec porta nisl id sem varius malesuada.



</Content-TextSection>



<Content-MetricsSection padding="is-large" :metrics="[
{ metric:'40', description:'Projects completed for small businesses and startups.' },
{ metric:'02', description:'Award winning team members.' },
{ metric:'103', description:'Years experience working for clients like Google and Amazon.' },
]"/>


::: slot bottom

Bottom

:::
