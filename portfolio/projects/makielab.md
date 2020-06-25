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

<Stage-ProjectStage rag="rag-2" :noise="true" :fadeless="true" ctaLabel="none" ctaUrl="#"
description="Makielab was a mobile games and e-commerce startup acquired by Disney in 2016. We created Makies, an award-winning customisable digital avatar, which could be ordered as a bespoke 3D printed toy.">

<template v-slot:visual-background>
  <Heros-BeadsHero :noise="true"/>
</template>

</Stage-ProjectStage>

:::



<Content-ContextSection rag="rag-5" :box="true">

<template v-slot:main>

## Context

Monetising mobile games is a tricky subject, particularly when it comes to children. Makielab was founded to explore a new angle on the problem by enabling children to buy physical products based on their unique in-game content. To this end, the company focused both on mobile game development and on e-commerce and toy manufacture.

<p>
I was part of the agile product team responsible for the website and physical products. We worked closely with the games team to ensure a holistic experience across touch-points and I spanned teams as we developed new toys and experiences leveraging the underlying technology. One such project involved a partnership with Disney via the Disney/Techstars accelerator where I demonstrated the possibility of personalised

<Content-ModalLink label="Disney Infinity">
<template v-slot:modal>

<Content :page-key="$site.pages.find(p => p.path === '/extra/infinity/').key"/>

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




<Content-ImageFrames-MainImageSection rag="rag-4" padding="is-large" url="https://www.youtube.com/embed/daBtHme2hP8" alt="Makies video" :aside="true"  :iframe="true">

<template v-slot:content>

## Makies

<p class="subtitle" style="padding-right: 4em;">
  Creative dolls for creative kids and the world's first 3D printed toys.
</p>

Character with a digital and physical existence. Personalised by the child, avatar/character from the mobile game or made online before purchase. On-demand manufacture. Creative, DIY toy, crafting, hands-on play/learning, modification e.g. Arduino, RFID, RC. Counterpart to on-screen play. Get children excited about technology, particularly girls. Sustainable and locally made.

</template>

<template v-slot:aside>

<figure class="image is-square">
  <img class="lazyload" data-src="/images/makielab/Makies-present1.5x.jpg" alt="Makies product and web interface">
</figure>


</template>

</Content-ImageFrames-MainImageSection>
