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

<!-- <style lang="sass">

@import "@theme/styles/variables.sass"

.section .button-action .image.is-square
  background-color: transparent

</style> -->

::: slot top

<Stage-ProjectStage :noise="true" ctaLabel="ecosia.org" ctaUrl="https://www.ecosia.org"
description="Ecosia is a search engine that uses 80% of profits from advertising to plant trees around the world, where they're needed the most.">

  <template v-slot:visual-column>
    <figure class="ecosia-image">
      <Heros-ImageHero src="/images/ecosia/render-base.png" alt="Ecosia mobile devices"/>
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

<!-- Nulla facilisi. Proin volutpat in purus a lobortis. Praesent nec purus eu metus volutpat placerat a eu sapien. Quisque eu sapien ut quam venenatis convallis. Vestibulum porta aliquam elit et fringilla. Etiam semper iaculis massa, sit amet fringilla lorem lacinia nec.

Proin velit neque, ornare nec luctus at, sollicitudin a erat. Nunc consectetur tortor in nibh vulputate viverra. Integer fringilla orci enim, non efficitur erat elementum vel. Quisque sollicitudin risus sed pretium auctor. Quisque sit amet fermentum nibh. Proin tristique neque vitae ipsum malesuada, ac feugiat justo suscipit. Pellentesque euismod sodales ipsum in mattis.

Suspendisse potenti. Praesent risus massa, vulputate eget turpis in, dignissim tincidunt odio -->

We made impressive progress on our mobile apps with only two developers and a share of my overall capacity as a product designer. By mid 2019, with growing user numbers and a renewed strategic focus on mobile, it was time to found a new agile product team with a focus on native apps. I took on the role of product manager and team leader, filling in as product designer until we made the necessary hire. Over the next three months we added two developers and a designer to the team.

The primary purpose of Ecosia's native apps is to make searching easy on major platforms. Web search resides at the meta or system level, it's one way in which devices augment our brains. Deep platform knowledge and user empathy were necessary to create search experiences which fit seamlessly into people's daily lives.

A second aspect of our apps vision is that they connect users with Ecosia's mission. In early 2020 we extended our thinking beyond searching and browsing; asking ourselves how we can help users make further incremental changes in their daily lives.

<!--

I lead the mobile apps team. Our native Android and iOS apps make it easy to search with Ecosia, connect with the cause and make an incremental difference every day while on the go. My activities include:

Product management | UI/UX design | interactive prototypes | usability and value testing | product illustrations | analytics, optimisation, A/B testing (custom tooling with Looker) | embedded with developers in an agile product team



When I joined Ecosia as a product designer, native apps were part of a large product team with a broad remit for user engagement. In this environment I was able to pioneer several initiatives for mobile - growing our user numbers so that we could begin to consider investing resources and concerted attention into this space.

I initially joined Ecosia as a product designer and gradually transitioned into a product manager role, forming a new team in the process.

-->

</template>

<template v-slot:side>

**Product**
Native apps on Android, iOS and MacOS

**Sector**
Internet search

**Timeframe**
2018-2020

**My role**
Product manager and team lead

**Team composition**
Product designer, 2 iOS developers, 1 Android developer, 1 devOps/backend

</template>

</Content-ContextSection>


<Content-TextSection columnOffset="title-offset">

## Reflections

<p class="subtitle">
  This was my first taste of formal team leadership, although I've previously led projects and mentored individuals on a 1:1 basis.
</p>

Conditions were favourable, which I recognise as fortunate. I had good relationships with the founding members who responded well to a culture promoting trust, autonomy and respect.

### Product design at scale

<p>
I joined Ecosia at an inflection point. We would soon experience rapid growth, reaching over 10 million daily users. The organisation grew accordingly and the design guild doubled. At that time it was critical to foster collaborative practices, to establish an agreed set of principles and to support a nascent design system. These considerations were forefront in my mind as I worked on highlight projects such as <Content-ModalLink label="maps">
<template v-slot:modal>

<Content-FreeSection padding="is-small">

<div class="columns is-centered">
<div class="column is-two-thirds">
<figure class="image is-5by4">
<img class="lazyload" data-src="/images/ecosia/EcosiaMaps-modal.jpg" alt="Ecosia maps vertical">
</figure>

<figcaption>

_caption_

</figcaption>
</div>
</div>

</Content-FreeSection>

</template>
</Content-ModalLink> and <Content-ModalLink label="accounts.">
<template v-slot:modal>

<Content-FreeSection padding="is-small">

<div class="columns is-centered">
<div class="column is-two-thirds">
<figure class="image is-5by4">
<img class="lazyload" data-src="/images/ecosia/Login-modal.jpg" alt="Ecosia accounts login">
</figure>

<figcaption>

_caption_

</figcaption>
</div>
</div>

</Content-FreeSection>

</template>
</Content-ModalLink>
</p>

<p>
Even as we grew, there remained a need to be hands-on and responsive. I designed and coded doodles marking significant milestones: <Content-ModalLink label="50 million trees">
<template v-slot:modal>

<Content-FreeSection padding="is-small">

<figure class="image is-16by9">
<iframe style="background: white;" class="lazyload" data-src="https://ecosia-50-million.netlify.app" frameborder="0"></iframe>
</figure>

</Content-FreeSection>

</template>
</Content-ModalLink> and <Content-ModalLink label="Ecosia's 10th anniversary.">
<template v-slot:modal>

<Content-FreeSection padding="is-small">

<figure class="image is-16by9">
<iframe style="background: white;" class="lazyload" data-src="https://ecosia-10-years.netlify.app" frameborder="0"></iframe>
</figure>

</Content-FreeSection>

</template>
</Content-ModalLink> A particular personal highlight was a 4-day hack project where we (me, backend, data, comms) <Content-ModalLink label="visualised global searches">
<template v-slot:modal>

<Content-FreeSection padding="is-small">

<div class="columns is-centered">
<div class="column is-two-thirds">
<figure class="image is-5by4">
<img class="lazyload" data-src="/images/ecosia/SearchMap-modal.jpg" alt="Searches map visualisation">
</figure>

<figcaption>

_caption_

</figcaption>
</div>
</div>

</Content-FreeSection>

</template>
</Content-ModalLink> in realtime. I designed and coded the visualisation frontend.
</p>

<!-- Maecenas sed nibh eleifend, congue felis et, malesuada eros. Nullam a metus quis eros pretium hendrerit ut a turpis. Suspendisse posuere purus ut lectus commodo, ac pulvinar neque blandit. Mauris a volutpat neque. Ut iaculis ipsum a elementum sodales. Maecenas maximus nibh turpis. Vestibulum finibus felis quis imperdiet placerat. Phasellus dapibus, quam et finibus auctor, ipsum sem ultricies ipsum, vitae suscipit enim turpis nec eros. Etiam vitae enim lorem. -->

<!-- ### On leadership

Mauris a volutpat neque. Ut iaculis ipsum a elementum sodales. Maecenas maximus nibh turpis. Vestibulum finibus felis quis imperdiet placerat. Phasellus dapibus, quam et finibus auctor, ipsum sem ultricies ipsum, vitae suscipit enim turpis nec eros. Etiam vitae enim lorem. -->

### Mobile team highlights

<p>
We had a standout success with the iOS App. The message from users was clear; the app was failing them with poor usability and lacking features. Browser tabs were the top request. I worked closely with developers to shape missing features into an interface we dubbed the <Content-ModalLink label="Organiser">
<template v-slot:modal>

<Content-FreeSection padding="is-small">

<div class="columns is-centered">
<div class="column is-two-thirds">
<figure class="image is-5by4">
<img class="lazyload" data-src="/images/ecosia/iOS-modal.jpg" alt="Ecosia iOS App">
</figure>

<figcaption>

_caption_

</figcaption>
</div>
</div>

</Content-FreeSection>

</template>
</Content-ModalLink> for favourites, history, tabs and settings. This release immediately raised 1-week retention by an average of 18%. Over the same period user numbers jumped 3x.
</p>

<p>
The greatest business impact came from two projects where I supported the team to deliver complex technical solutions. Apple were poised to remove their existing extension platform from Safari. 15% of daily searches came from users relying on this extension. We rapidly built a replacement <Content-ModalLink label="Safari App Extension">
<template v-slot:modal>

<Content-FreeSection padding="is-small">

<div class="columns is-centered">
<div class="column is-two-thirds">
<figure class="image is-5by4">
<img class="lazyload" data-src="/images/ecosia/MacApp-modal.jpg" alt="Safari App Extension">
</figure>

<figcaption>

_caption_

</figcaption>
</div>
</div>

</Content-FreeSection>

</template>
</Content-ModalLink> and migrated 91% of users.
</p>

<p>
The Ecosia <Content-ModalLink label="Android App">
<template v-slot:modal>

<Content-FreeSection padding="is-small">

<div class="columns is-centered">
<div class="column is-two-thirds">
<figure class="image is-5by4">
<img class="lazyload" data-src="/images/ecosia/Android-modal.jpg" alt="Ecosia Android App">
</figure>

<figcaption>

_caption_

</figcaption>
</div>
</div>

</Content-FreeSection>

</template>
</Content-ModalLink> is a fork of the Chromium browser. The advantage is a ready&#8209;made and familiar browsing experience. But the drawback is the enormous time investment required to keep it up-to-date. I facilitated a design thinking process with developers to identify ways we might accelerate the update process and then supported them by slicing the work and establishing milestones. In both cases my technical background was an invaluable asset which enabled me to participate in discussions and offer meaningful leadership.
</p>

<template slot="aside">

<figure class="image is-16by9">
  <img class="lazyload" data-src="/images/ecosia/Ecosia-support1.jpg" alt="Ecosia offices">
</figure>

<figure class="image is-16by9">
  <img class="lazyload" data-src="/images/ecosia/Ecosia-support2.jpg" alt="Ecosia offices">
</figure>

<figure class="image is-16by9">
  <img class="lazyload" data-src="/images/ecosia/Ecosia-support3.jpg" alt="Ecosia tree saplings">
</figure>

</template>

</Content-TextSection>



<Content-MetricsSection padding="is-medium-large" :metrics="[
{ metric:'18%', description:'Increase in iOS App 1-week retention.' },
{ metric:'91%', description:'Users migrated to the Safari App Extension.' },
{ metric:'4x', description:'Faster Android Chromium update cycles.' },
]"/>

<!--

We achieved this despite facing a considerable challenge replicating previous functionality with the new, hardly documented, platform.

{ metric:'50%', description:'Rate of Android users setting Ecosia as system default browser when prompted.' },

Safari Mac App - Apple changes the platform, efforts to keep our users and build an alternative.
93% drops to 85% users on extension - frame as kept/migrated 91% of users

iOS app - adding much needed browser features like browsing tabs, history, favorites and a design overhaul
Increase 1-week retention from 28% to 34%, increase of 18%
While 3x DAU over a 3 month period
App stability?

Android app - update speed would be nice
Set as default browser - 2.2% clickthrough, Android default browser set is in Android in-app activities Dashboard - seems to be broken
7.8M resume events
5.2M resume events with default set
2/3 Android launch events from users who set Ecosia as system default browser
Android users who set Ecosia as system default browser app
App stability?


-->



::: slot bottom

Bottom

:::
