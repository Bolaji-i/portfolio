---
title: A practical guide to render performance
description: Profiling real apps, not synthetic benchmarks.
date: '2026-02-08'
read: 5 min read
---

::draft-notice
::

Most render performance advice is written against benchmarks. Real applications are slow
for less interesting reasons.

## Measure on the device people use

A mid-range Android phone on a throttled connection will surface problems that never
appear on a developer laptop.

## The usual causes

- Rendering a list that should be virtualised
- Work in a layout effect that blocks paint
- A context provider whose value is a new object on every render
- Images without dimensions, causing layout shift

## Fix the largest one, then measure again

Performance work compounds badly with guesswork. Change one thing, re-profile, keep the
change only if the trace agrees.
