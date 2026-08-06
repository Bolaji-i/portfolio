---
title: Why I stopped using CSS-in-JS
description: A look at build-time cost, runtime overhead, and what replaced it on our team.
date: '2026-07-14'
read: 6 min read
---

::draft-notice
::

We moved off runtime CSS-in-JS last year. This is what pushed the decision and what we
landed on instead.

## The runtime cost is real

Every styled component does work in the browser: serialising the style object, hashing it,
injecting a rule into the document. On a page with a few hundred components that adds up,
and it lands squarely in the part of the frame budget you least want to spend.

## Server rendering makes it worse

Style extraction during SSR means walking the tree twice and shipping the collected CSS
inline. It works, but it complicates streaming and it grows the HTML payload.

## What we replaced it with

- CSS Modules for component-scoped styles
- Design tokens as plain custom properties
- A small set of utility classes for layout

## What we gave up

Dynamic styles driven by props are less ergonomic. In practice most of those cases turned
out to be a handful of variants, which map cleanly onto data attributes and CSS.
