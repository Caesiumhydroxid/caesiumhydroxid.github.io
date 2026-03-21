---
title: Numitron Clock
layout: post
date: 2021-03-18
publishDate: 2021-03-18
post-image: "/assets/images/NumitronSide.jpg"
post-video: "/assets/videos/NumitronClock.webm"
description: A freeform clock with numitrons
tags:
---

# Description

This clock is built with [IV-9 numitrons](http://www.tube-tester.com/sites/nixie/data/IV-9/iv-9.htm). They operate at around 3-4 V and require approximately 20 mA per segment. There is no PCB in this project, hence the freeform style, and even the SOP-package driver ICs are soldered directly to copper wire.

I was strongly inspired by the projects of [Mohit Bhoite](https://www.bhoite.com/), whose work is amazing.

# Frame and Wiring
All wiring is done with 1.5 mm² copper wire for the structural parts and 0.75 mm² wire for more intricate electrical connections.

# Electronics

Electrically, the clock is not very complicated. An ESP8266 is the main controller. I chose it because it supports Wi-Fi and gives me the option to display additional internet-based data in the future. The driver ICs are [STP16DP05MTR](https://www.st.com/resource/en/datasheet/stp16dp05.pdf) constant-current LED drivers. This may seem like an unusual choice, but the current limiting (set to about 18 mA) should help extend numitron lifetime. Other high-current open-drain shift registers were similarly priced. I effectively wasted 8 pins per driver, but this made the already tricky assembly much easier.

The ESP is connected to daisy-chained shift registers and shifts out the current time. At the back of the clock there is also a small LDR read by the ADC, so the clock can turn off at night.

# Results

I really like how the clock looks and how it turned out. I struggled quite a lot with soldering SMD parts onto wire and aligning everything reasonably well, but in the end it was worth the effort.

<div class="tile is-ancestor">
  <div class="tile is-vertical is-12">
    <div class="tile is-parent">
      <article class="tile is-child">
        <figure class="image is-16by9">
          <img src="/assets/images/NumitronSide.jpg">
        </figure>
      </article>
      <article class="tile is-child">
        <figure class="image is-16by9">
          <img src="/assets/images/NumitronFront.jpg">
        </figure>
      </article>
    </div>
  </div>
</div>
