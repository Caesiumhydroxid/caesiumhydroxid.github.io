---
title: Numitron Clock
layout: post
post-image: "/assets/images/NumitronSide.jpg"
post-video: "/assets/videos/NumitronClock.webm"
description: A freeform clock with numitrons
tags:
---

# Description

This Clock is built with [IV-9 Numitrons](http://www.tube-tester.com/sites/nixie/data/IV-9/iv-9.htm). They operate on voltages around 3-4V and take a driving current of approximately 20mA per Segment. There is no PCB used in this project and even the drivers in a SOP-Packages are soldered directly to copper wire.

I was largely inspired by the projects of [Mohit Bhoite](https://www.bhoite.com/) whose work is really amazing. 

# Frame and Wiring
All of the wiring is done using 1.5 mm² copper wire for the more stable parts as well as 0.75 mm² for some more intricate electrical connections. The wires are 

# Electronics

On the electronics side this clock is actually not really complicated - an ESP8266 is the brain of the operation. I chose it because it can connect to WIFI and in the future I can potentially use it to also display other numbers / data from the internet. The driving ICs are [STP16DP05MTR](https://www.st.com/resource/en/datasheet/stp16dp05.pdf) constant current LED drivers. This might seem like an awkward choice - but I think that the current limiting capabilities (I set it to about 18mA) are going to enhance the lifetime of my Numitrons - also other high current, open drain shift registers were quite equally priced. I also wasted 8 pins per register, but this made assembly (which was already quite tricky) a little easier.

The ESP is connected to the daisy-chained shift registers and shifts out the current time. In the back of the Clock there is also a litte LDR digitized by the ADC - so the clock can shut off in the night.

# Results

I really like how the clock looks and how it came out in the end. I struggled quite a lot with soldering SMD parts on wire and getting everything to align more or less well - but I think in the end it was worth the effort.

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
