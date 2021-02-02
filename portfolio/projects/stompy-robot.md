---
uid: 5
title: Stompy Robot
subtitle: Co-founding a games studio
type: single
pageClass: stompy
navStyle:
  style: light
  tint: regular-tint
  progress: light
background: stompy
sidebar: false
date: 2013-03-12
src: /images/homepage/stompy-robot-tile.jpg
prev: ./toucan-research
next: ./makielab
hasFooter: true
---

::: slot top

<Stage-ProjectStage rag="rag-4" ragTitle="rag-2" titleColumnClass="is-three-fifths" ctaLabel="stompyrobot.uk" ctaUrl="https://stompyrobot.uk/"
description="I helped start Stompy Robot, an independent studio based in Edinburgh, creating games for mobile and tools for developers.">

<template v-slot:visual-column>
  <figure class="stompy-image">
    <Heros-ImageHero src="/images/stompy-robot/header-comp-export-grid.png" alt="Stompy Robot software"/>
  </figure>
</template>

<template v-slot:platform>

Mobile games
~ Unity plugins

</template>

<template v-slot:timeframe>

2013-2015
<!-- ~ (part-time) -->

</template>

<template v-slot:my-role>

Game Designer
~ Artist

</template>

<template v-slot:team>

Designer / Developer

</template>

</Stage-ProjectStage>

<style lang="sass">
@import "@theme/styles/variables.sass"

.stompy-image
  position: absolute
  left: -96%
  top: -42%
  width: 256%
  @media screen and (min-width: $fullhd)
    left: -90%;
    top: -42%;
    width: 280%;

.stompy .page-loader-generic
  display: none

</style>

:::

<Content-TextSection rag="rag-3" columnOffset="title-offset" padding="is-initial is-continuous">

In 2013 I joined forces with my brother [Simon Moles](https://www.simonmoles.com/) (systems developer at <span style="white-space: nowrap;">[Rockstar North](https://www.rockstarnorth.com/))</span> to build video games specifically for tablet devices. We worked in the Unity game engine, enabling us to target all major platforms.

<p class="subtitle">
We had just witnessed the dawn of ubiquitous touch-based tablet computing and believed we could exploit this fresh interaction medium to reimagine some of our favourite game genres.
</p>

<p>
Our guiding principle was touch-centricity. Mobile games of the time often borrowed existing interaction models, such as on-screen joysticks or pointers. We wanted to play to the strengths of touch. Our pioneering effort was Nova (below), <Content-ModalLink label="Spaced">
<template v-slot:modal>
<Content :page-key="$site.pages.find(p => p.path === '/extra/spaced/').key"/>
</template>
</Content-ModalLink> was our last game in development and we occasionally 


<Content-ModalLink label="Game jam">
<template v-slot:modal>

<div class="container is-fullhd">
<figure class="image parent-loading is-16by9">
    <iframe class="lazyload" data-src="https://player.vimeo.com/video/507179190" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</figure>
</div>

</template>
</Content-ModalLink>.
</p>

But it was with tools that the studio had a breakout success. The insights gained building games enabled us to identify valuable workflow improvements in coding and debugging. [SRDebugger](https://assetstore.unity.com/packages/tools/gui/srdebugger-console-tools-on-device-27688) is still available in the Unity Asset Store.

<template v-slot:aside>

</template>

</Content-TextSection>



<Content-ImageFrames-MainImageSection imageClass="is-16by9" url="https://www.youtube.com/embed/xZELuhMO9es" alt="Nova showreel" :aside="true" rag="rag-4" :iframe="true">

<template v-slot:content>

## Nova

<p class="subtitle">
  A tactical action RTS which specifically leverages the interaction opportunities offered by touch screens.
</p>

The player commands an elite squad of starship captains who must defend the freedom of the galaxy. Battle against ambitious new factions seeking dominance. As the player progresses, they collect new starships, characters, weaponry and equipment. Each possess advantages and abilities, which can be combined into effective strategies for defeating any opponent.


 <!-- as they endeavour to defeat the oppressive galactic powers present in the Milky Way galaxy.

Players will acquire new heroes and weaponry as they progress in the game. Heroes and weapons have unique abilities which the player can combine to develop the most effective strategy for defeating their opponents.

In dui odio, posuere eget tristique in, pellentesque nec dolor. Vestibulum quis metus purus. Fusce varius rhoncus enim sit amet semper. Maecenas non nunc id justo vehicula ultricies vestibulum eget ex. Integer mattis faucibus nunc, ut tristique magna bibendum sit amet.

Suspendisse ornare et mi sit amet lacinia. Proin eget dui purus. Aliquam a cursus erat, sit amet ultricies risus. Nulla at arcu sagittis, egestas libero ut, finibus massa. -->

<!--

Nova is a squad-based action RPG for tablet devices. I collaborated with an artist to create the visual style, silhouetting ships against a bright background and overlaying heavy glow effects for weapons, engines, highlights. A major focus was to take advantage of touch controls and streamlining interactions with the UI and squad control.


Nova is an action-strategy game for tablet devices. The player controls an elite squad of heroes in the far future as they endeavour to defeat the oppressive galactic powers present in the Milky Way galaxy.

Players will acquire new heroes and weaponry as they progress in the game. Heroes and weapons have unique abilities which the player can combine to develop the most effective strategy for defeating their opponents.

 -->

</template>

<template slot="aside">

<div class="stompy-vertical-fill-parent">
<div class="stompy-vertical-fill">

<figure class="image parent-loading is-3by2">
<img class="lazyload" data-src="/images/stompy-robot/nova-support-1.jpg" alt="Nova screenshot 1">
</figure>

<figure class="image parent-loading is-3by2">
<img class="lazyload" data-src="/images/stompy-robot/nova-support-2.jpg" alt="Nova screenshot 2">
</figure>

</div>
</div>

</template>


</Content-ImageFrames-MainImageSection>

<style lang="sass">
@import "@theme/styles/variables.sass"
/* TODO generalize */
.stompy-vertical-fill-parent
  position: relative
  height: 100%

.stompy-vertical-fill
  position: absolute
  top: 0
  bottom: 0
  left: 0
  width: 76%
  display: flex
  flex-direction: column
  justify-content: space-between
  .image
    margin: 0 !important

</style>

<Content-TextSection rag="rag-4" columnOffset="title-offset">

## Spaced

<p class="subtitle">
  We shifted our focus from narrative driven gameplay to a procedurally generated sandbox.
</p>

Spaced challenges the player to keep a physically simulated spaceship functioning in the face of routine (and not-so-routine) missions. We wanted to create a game which was fun and compelling, but without classic gameplay elements like linear progression or rewards. Instead, enjoyment and replay value are derived from _how_ the player approaches challenging situations like a hull breach or power core overload.

<br>

</Content-TextSection>

<Content :page-key="$site.pages.find(p => p.path === '/extra/spaced/').key"/>


<div style="padding-bottom: 9em;"></div>






<!--

to reimagine the game genres we loved in this new paradigm.

which specifically aims to leverage the interaction opportunities offered by touch screens.

Across all popular mobile platforms (iOS, Windows, Android), we design and craft fun, touch-centric games. We believe that a game should be designed for touch, fully exploiting the fresh input medium provided by this new technology.

with the Unity game engine



Emphasise what I did, what the challenges were, what was learnt in content text


-->
