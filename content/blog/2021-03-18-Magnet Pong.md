---
title: Magnet Pong
layout: post
post-image: "/assets/images/MagnetPong.jpg"
post-video: "/assets/videos/MagnetPong.webm"
description: Pong with a ball and paddle out of magnets
tags:
---

# Description

This project was largely inspired by the [2D stepper motor](https://hackaday.io/project/164507-2d-stepper-motor-etched-on-pcb-micro-manipulator) from [bobricius](https://hackaday.io/bobricius) on Hackaday. I loved the concept and thought I could build a Pong game from it. Little did I know that designing and driving this system would involve a lot of head-scratching and tinkering, but in the end it worked as imagined.

# Design

With this project, I not only wanted to build a Pong game, but also to try the SMT assembly service from [JLCPCB](https://jlcpcb.com/). That affected many component choices. A good example is the [H-bridge IC](https://datasheet.lcsc.com/szlcsc/1810161611_Mixic-MX612E_C110207.pdf). Since I do not speak Chinese, I could not fully read the datasheet and mostly hoped for the best.

## Working principle
The basic principle is that of a stepper motor, unfolded into a linear plane. There are four connections for each paddle and eight for the ball (because it moves in both x and y). The PCB has two layers, used for x and y coordinates respectively.

## Schematic

The schematic is fairly straightforward. Each linear stepper uses two H-bridge drivers. The remaining components connect the H-bridges, switches, and power supply to the STM microcontroller. Initially, I thought I would need many power resistors to drive the paddles. During software development, I found PWM to be very effective, so those resistors were not needed and I would omit them in a redesign.

<figure>
  <img class="post-image" src="/assets/images/PongSchematic.svg"  />
  <figcaption>Schematic for the PCB</figcaption>
</figure>

## PCB

I spent a lot of time thinking about trace thickness. The bottom layer should have been a bit thicker to allow more current, since it is farther from the magnets than the top layer and therefore needs more current to achieve similar force on the ball. I targeted roughly 1 A and 1.5 A at 5 V, which worked quite well. Unfortunately, I made a mistake and ended up making the top layer *thicker* and the bottom layer *thinner*. At first I thought I would need to reorder the boards, but with trial and error I still got this version to work.

In a redesign, I would correct this mistake and make traces thicker in general. Testing also showed that PWM works very well. During design I was unsure, because I could not fully read the H-bridge specifications and the forces are modulated, but at around 30 kHz (to avoid audible noise), everything works fine.

<figure>
  <img class="post-image" src="/assets/images/PongPCB.svg"  />
  <figcaption>Image of the PCB traces</figcaption>
</figure>

# Software

The STM32 software was written using [STM32CubeMX](https://www.st.com/en/development-tools/stm32cubemx.html), which was new to me because I had mainly used ATmega controllers before. The abstraction layer had pitfalls at first, but I quickly learned to appreciate it. I used many timers for PWM and game control.

Once I could control the ball reasonably reliably (dust or contamination can still cause lost steps), writing the game logic was straightforward. Getting to that point, however, took a lot of iteration:
1. controlling the x-axis (top-side)
2. almost frying my H-bridges in the process
3. try adding the y-axis
4. losing steps all the time on the y-axis
5. almost frying my H-bridges again
6. adding PWM to x and y
7. noticing that drastically reducing current (through PWM) on the x-axis helped a lot as friction decreased
8. tuning maximum step speed, PWM phase angles, PWM frequency,...

After a lot of debugging, I ended up with a functional version of the ball control. Controlling the paddles was comparatively easy, since they only use traces on the top layer.

## Gamemodes
There is a **two-player** mode where players compete directly. The first person to reach 4 points wins. Points are displayed in binary using LEDs on the bottom of the PCB.

I also wrote a **one-player** mode. At the moment, the opponent plays flawlessly, so this mode is not very fun yet (but it was perfect for recording the video above). If I find some free time, I will probably change that.

# Results
I am very happy with the result, as everything works quite well now. Playing with a physical object instead of on a screen changes the feel of the game in a very positive way.

<figure>
  <img class="post-image" src="/assets/images/MagnetPong.jpg"  />
  <figcaption>Image of the real thing</figcaption>
</figure>

I learned a lot while creating this game, and I hope other people enjoy it as well.

[KiCad files](/assets/files/MagnetPong.zip)

Write me a message if you want the source code. I also still have some unused boards at home, so feel free to reach out if you want one.