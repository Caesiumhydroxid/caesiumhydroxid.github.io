---
title: Flipdot Clock
layout: post
post-image: "/assets/images/FlipdotClock.jpg"
post-video: "/assets/videos/FlipdotClock.webm"
description: A Flipdot Clock built with an old LAWO Bus Display
tags:
---

# Functionality

This project is a clock and display made out of an old LAWO [flipdot-display](https://en.wikipedia.org/wiki/Flip-disc_display). It is able to display time, weather and departures of public transport near the place I live.

***

# Flipdot-display

A flipdot-display is using small magnetic disks which are black on one side and yellow on the other side. Small coils are driven in such a way, that these magnetic discs filp and stay (even if powered off). In this regard it behaves like an e-ink display. To magnetize the core of the coils to further flip the disk a small pulsed current is applied to the coils. The drive board consisting of basically an ATMEGA8 + ULN2803, UDN2983 and Linedecoders are developed at home. The software running on the ATMEGA8 receives data over the serial port and updates changed pixels for most efficient speed. Additionally, every n seconds each pixel is pulsed in order to prevent sticking of pixels.

<figure>
  <img class="post-image" src="/assets/images/FlipdotClockDriver.jpg" />
  <figcaption>Display Driver Board</figcaption>
</figure>

I cannot fully remember why I decided to use that many negative output linedecoders and inverters when I just could have used 74HC237 - but I think the reseller did not have these in stock and I wanted to get everything done quickly. As the size of the pcb did not matter to me I probably just did not care.

[Eagle PCB and Schematics files](/assets/files/DriverCircuit.zip)

# Raspberry PI

<figure>
  <img class="post-image" src="/assets/images/FlipdotClockBackside.jpg" />
  <figcaption>Inside the whole assembly</figcaption>
</figure>

The Raspberry handles all internet connectivity and display logic. The time is automatically fetched via NTP. It also featured speech recognition based on [Snips AI](https://snips.ai/). Unfortunately this project is now acquired by Sonos - and stopped support for makers. When I can make time for it, I will change the speech recognition to another open source project.

Using commands like: "Snips - show Weather" the clock is able to be controlled by voice. 

Possible Screens which are implemented by now are:
* Time
* Weather
* Departures at local public transport stations


## Games
It was also possible to play Games such as Pong and Snake on the clock. Unfortunately an old SD Card broke and the files from the controller where lost. It which was based on the [Node-virtual gamepads Project](https://github.com/jehervy/node-virtual-gamepads). My version just modified the protocol a little bit to fit my needs better.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/A8e0DPhJKU4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="display: block;" allowfullscreen></iframe>


