---
title: Notes on building for keyboard-first users
description: Focus order, skip links, and the small details that make apps usable without a mouse.
date: '2026-06-02'
read: 4 min read
---

::draft-notice
::

Keyboard support tends to be treated as an accessibility checkbox. It is also the fastest
way to use most applications, and the people who rely on it notice every rough edge.

## Focus order follows the DOM

If the visual order and the DOM order disagree, tabbing feels random. Reordering with CSS
is convenient and it is the most common cause of this.

## Skip links are not optional

A skip link is the difference between one keypress and forty to reach the main content.

## Never remove the focus ring

`outline: none` without a replacement makes an interface unusable without a mouse. Style
the ring instead — `:focus-visible` gives you the control without punishing keyboard users.

## Test it the way people use it

Unplug the mouse for an hour and complete the main flows.
