---
title: BLKBRD
subtitle: None
navStyle:
  style: dark
  tint: regular-tint
  progress: light
background: green
sidebar: false
date: 2019-09-12
hasFooter: false
---

::: slot top

:::

<Loader current="BLKBRD"/>

<Content-ImageFrames-MainImageSection padding="is-large" imageClass="is-16by9" url="/images/play/blkbrd/Context.jpg" alt="Nova showreel" :aside="true" rag="rag-6" :iframe="false">

<template slot="content">

## BLKBRD

<p class="subtitle" style="padding-right: 3em;">
  A messaging app which explores the possibility of public clients in static locations.
</p>

Smartphones and messaging apps are by definition mobile. But I began to wonder if messages could gain additional meaning if it was possible to display them on shared client devices with known locations. I imagined a number of use cases, for example in a family home, where a device in the kitchen could display messages to be seen by snack-seeking children when they return from school. Similarly an elderly non-tech-savvy relative could receive (and perhaps send) text messages from their grandchildren (which they greatly prefer to phone calls) on a device set up beside the landline.

I prototyped the idea using the [Ionic Framework](https://ionicframework.com/) and [Google Firebase](https://firebase.google.com/). Due to the flexibility of webview-based Ionic, I was able to install it as an app on several static clients and widely distribute the URL to friends and family. The data model was inspired by Slack, with 'channels' hosting conversations. Each channel usually has an associated static client device. [BLKBRD](http://bit.ly/blkbrdapp) is free to use and available to try.

</template>

<template slot="aside">

<figure class="image parent-loading is-9by16">
  <Content-ImageFrames-Iframer url="https://player.vimeo.com/video/293190729"></Content-ImageFrames-Iframer>
</figure>

<!-- <figcaption>

Useability testing a high fidelity iteration with children.

</figcaption> -->

</template>


</Content-ImageFrames-MainImageSection>