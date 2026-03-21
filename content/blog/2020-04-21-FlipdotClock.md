---
title: Flipdot Clock
layout: post
date: 2020-04-21
publishDate: 2020-04-21
post-image: "/assets/images/FlipdotClock.jpg"
post-video: "/assets/videos/FlipdotClock.webm"
description: A Flipdot Clock built with an old LAWO Bus Display
tags:
---

# Functionality

This project is a clock and information display built from an old LAWO [flip-dot display](https://en.wikipedia.org/wiki/Flip-disc_display). It can show the time, weather, and nearby public transport departures.

***

# Flipdot-display

A flip-dot display uses small magnetic disks that are black on one side and yellow on the other. Small coils are driven so the dots flip and then stay in position, even when power is removed. In that way, it behaves similarly to an e-ink display. A short current pulse magnetizes the coil core and flips each dot.

I designed the driver board at home. It is based on an ATmega8, a ULN2803, a UDN2983, and line decoders. The firmware on the ATmega8 receives data over serial and only updates changed pixels for speed. In addition, every pixel is pulsed periodically to reduce sticking.

<figure>
  <img class="post-image" src="/assets/images/FlipdotClockDriver.jpg" />
  <figcaption>Display Driver Board</figcaption>
</figure>

I cannot fully remember why I used so many negative-output line decoders and inverters instead of a 74HC237. I think the reseller did not have them in stock and I wanted to finish quickly. Since PCB size did not matter for this project, I probably did not optimize that part very much.

[Eagle PCB and Schematics files](/assets/files/DriverCircuit.zip)

# Raspberry PI

<figure>
  <img class="post-image" src="/assets/images/FlipdotClockBackside.jpg" />
  <figcaption>Inside the whole assembly</figcaption>
</figure>

The Raspberry Pi handles internet connectivity and display logic. Time is synchronized automatically via NTP. It also used to support speech recognition through [Snips AI](https://snips.ai/). Unfortunately, Snips was acquired by Sonos and support for makers was discontinued. When I find the time, I plan to migrate speech recognition to another open-source project.

Using commands like "Snips, show weather", the clock can be controlled by voice.

Currently implemented screens are:
* Time
* Weather
* Departures at local public transport stations


## Games
It was also possible to play games like Pong and Snake on the display. Unfortunately, an old SD card failed and the controller files were lost. The controller setup was based on the [Node virtual gamepads project](https://github.com/jehervy/node-virtual-gamepads), with a slightly modified protocol to better fit my needs.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/A8e0DPhJKU4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="display: block;" allowfullscreen></iframe>


