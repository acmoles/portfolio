---
uid: 2
title: Ecosia
subtitle: Leading the mobile apps team
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

<Stage-ProjectStage :noise="true" rag="rag-4" ctaLabel="ecosia.org" ctaUrl="https://www.ecosia.org"
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


<Content-ContextSection :box="true" rag="rag-4">

<template v-slot:main>

<h2> {{ $page.frontmatter.subtitle }} </h2>

<!-- Nulla facilisi. Proin volutpat in purus a lobortis. Praesent nec purus eu metus volutpat placerat a eu sapien. Quisque eu sapien ut quam venenatis convallis. Vestibulum porta aliquam elit et fringilla. Etiam semper iaculis massa, sit amet fringilla lorem lacinia nec.

Proin velit neque, ornare nec luctus at, sollicitudin a erat. Nunc consectetur tortor in nibh vulputate viverra. Integer fringilla orci enim, non efficitur erat elementum vel. Quisque sollicitudin risus sed pretium auctor. Quisque sit amet fermentum nibh. Proin tristique neque vitae ipsum malesuada, ac feugiat justo suscipit. Pellentesque euismod sodales ipsum in mattis.

Suspendisse potenti. Praesent risus massa, vulputate eget turpis in, dignissim tincidunt odio -->

With a growing user base and a renewed strategic focus on mobile, in mid 2019 it was time to found a new agile product team with a focus on mobile apps. Having been closely involved on a strategic level as a product designer, I was a natural fit to take on the role of product manager and team leader. Over the next three months we grew the team from two to four developers and added a dedicated designer.

<!-- We made impressive progress on our mobile apps with only two developers and a share of my overall capacity as a product designer.  -->

The primary purpose of Ecosia's apps is to make searching easy on major platforms. Web search resides in a meta space. It's naturally multi-platform; one way in which devices augment our mental abilities. So _it's critically important that Ecosia's apps fit seamlessly into user's daily lives,_ which requires deep user empathy and platform knowledge.

We also want to connect users with our tree-planting mission and in early 2020 we extended our thinking beyond searching and browsing by asking ourselves how we can help users make further incremental changes in their daily lives.

<!--

I lead the mobile apps team. Our native Android and iOS apps make it easy to search with Ecosia, connect with the cause and make an incremental difference every day while on the go. My activities include:

Product management | UI/UX design | interactive prototypes | usability and value testing | product illustrations | analytics, optimisation, A/B testing (custom tooling with Looker) | embedded with developers in an agile product team



When I joined Ecosia as a product designer, native apps were part of a large product team with a broad remit for user engagement. In this environment I was able to pioneer several initiatives for mobile - growing our user numbers so that we could begin to consider investing resources and concerted attention into this space.

I initially joined Ecosia as a product designer and gradually transitioned into a product manager role, forming a new team in the process.

-->

</template>

<template v-slot:side>

**Product**
Android, iOS and MacOS apps

**Sector**
Internet search

**Timeframe**
2018-2020

**My role**
Product manager and team lead

**Team**
Product designer, 2 iOS developers, 1 Android developer, 1 devOps/backend

</template>

</Content-ContextSection>


<Content-TextSection columnOffset="title-offset" rag="rag-3">

## Reflections

<p class="subtitle" style="padding-right: 1em;">
  This was my first taste of formal team leadership.
</p>

I brought a strong foundation, having led projects and mentored individuals, but I was also fortunate that conditions were favourable. I had good relationships with the founding team members. They responded well to a culture promoting trust, autonomy and respect.

### Product design at scale

<p>
When I joined Ecosia it was at an inflection point. We would soon experience rapid growth, reaching over 10 million daily users. The organisation scaled accordingly and the design guild doubled. At that time it was critical to foster collaborative practices, to establish a set of design principles and to take the first steps towards a component-based design system. These considerations were forefront in my mind as I worked on projects such as <Content-ModalLink label="Maps">
<template v-slot:modal>

<Content-FreeSection padding="is-small">

<div class="columns is-centered">
<div class="column is-three-fifths">
<Content-ModalWrapper type="link" url="https://acmoles.github.io/maps-ui/" label="Wireframe interaction prototype">
<figure class="image is-5by4 modal-image-limit">
<img class="lazyload" data-src="/images/ecosia/EcosiaMaps-modal.jpg" alt="Ecosia maps vertical">
</figure>
</Content-ModalWrapper>

<figcaption>

Ecosia maps posed a unique design challenge. As part of slicing the feature we decided to exclude the search box from the first release. Rather, we would enable users to make pseudo searches for common keywords such as hotels and shopping. These constraints called for creativity and it was satisfying to work on a completely new search vertical.

</figcaption>
</div>
</div>

</Content-FreeSection>

</template>
</Content-ModalLink> and Accounts.
</p>

<p>
Even as we grew, there remained the need to be hands-on and responsive. I designed and coded doodles marking significant milestones: <Content-ModalLink label="50 million trees">
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
</Content-ModalLink> A particular personal highlight was <Content-ModalLink label="Hack Days 2019">
<template v-slot:modal>

<Content-FreeSection padding="is-small">

<div class="columns is-centered">
<div class="column is-three-fifths">
<Content-ModalWrapper type="link" url="https://mapvis.netlify.app/" label="View live visualisation">
<figure class="image is-5by4">
<img class="lazyload" data-src="/images/ecosia/SearchMap-modal.jpg" alt="Searches map visualisation">
</figure>
</Content-ModalWrapper>

<figcaption>

I collaborated with a backend developer, data scientist and marketing manager to design and build this data visualisation in 4 days. As a bonus feature we plotted Ecosia's tree planting sites on the map. In Brazil there are users searching within 10km of rainforest restored by Ecosia.

</figcaption>
</div>
</div>

</Content-FreeSection>

</template>
</Content-ModalLink> where we visualised global searches in realtime. I designed and coded the visualisation frontend.
</p>

<!-- ### On leadership -->

### Mobile team highlights

<p>
Early on, we had a standout success with the iOS App. Users were clear that the app was missing key browser features and lagging in usability. Browsing tabs were the top request. I worked closely with developers to shape an interface we named the <Content-ModalLink label="Organiser">
<template v-slot:modal>

<Content-FreeSection padding="is-small">

<div class="columns is-centered">
<div class="column is-three-fifths">
<figure class="image is-5by4">
<img class="lazyload" data-src="/images/ecosia/iOS-modal.jpg" alt="Ecosia iOS App">
</figure>

<figcaption>

With the iOS App Organiser, Ecosia could stand as a viable alternative browser to Safari.

</figcaption>
</div>
</div>

</Content-FreeSection>

</template>
</Content-ModalLink> for favourites, history, tabs and settings. This release immediately raised 1-week retention by an average of 18%. Over the same period our daily active users count jumped 3x. Its success influenced the strategic decision to invest in mobile apps.
</p>

<p>
The greatest business impact was achieved with a project where I supported the team to deliver complex technical solutions. The Ecosia <Content-ModalLink label="Android App">
<template v-slot:modal>

<Content-FreeSection padding="is-small">

<div class="columns is-centered">
<div class="column is-three-fifths">
<figure class="image is-5by4">
<img class="lazyload" data-src="/images/ecosia/Android-modal.jpg" alt="Ecosia Android App">
</figure>

<figcaption>

The Ecosia Android app offers the familiarity of Chromium with Ecosia search. It connects users to the cause through tree planting news, financial reporting and other content.

</figcaption>
</div>
</div>

</Content-FreeSection>

</template>
</Content-ModalLink> is a fork of the Chromium browser. This offers a ready&#8209;made, familiar browsing experience but with the drawback of requiring enormous investment to keep it up-to-date. <em>I facilitated a design thinking process with developers where we identified ways we might accelerate the update process.</em> Then I helped them prioritise initiatives, slice the work, establish milestones and finally evaluate based on success criteria. My technical background enabled me to participate meaningfully in discussions and offer effective leadership.
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
{ metric:'3x', description:'iOS app DAU growth in 2019.' },
{ metric:'4x', description:'Faster Android app updates.' },
]"/>

<!--

{ metric:'91%', description:'Users migrated to the Safari App Extension.' },

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



// SAFARI CUT

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

Our browser extensions add Ecosia as default search engine. Users expect that they can search with Ecosia directly in the address bar. At first, we were uncertain we could deliver this functionality and implemented a dropdown search box in the Safari UI as contingency.

</figcaption>
</div>
</div>

</Content-FreeSection>

</template>
</Content-ModalLink> and migrated 91% of users in the face of considerable technical challenges.
</p>






<Content-ModalLink label="Accounts.">
<template v-slot:modal>

<Content-FreeSection padding="is-small">

<div class="columns is-centered">
<div class="column is-two-thirds">
<figure class="image is-5by4">
<img class="lazyload" data-src="/images/ecosia/Login-modal.jpg" alt="Ecosia accounts login">
</figure>

<figcaption>

I led design of the accounts beta release, enabling users to save and share their personal impact counter across devices. Our hypothesis was that already engaged users would love this feature. We found demand was so high that users outside our testing region began clamouring to be included in the pilot.

</figcaption>
</div>
</div>

</Content-FreeSection>

</template>
</Content-ModalLink>



-->



::: slot bottom

Bottom

:::
