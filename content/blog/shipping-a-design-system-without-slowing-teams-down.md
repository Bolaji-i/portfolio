---
title: Shipping a design system without slowing teams down
description: Versioning, codemods, and how we kept adoption voluntary.
date: '2026-04-19'
read: 8 min read
---

::draft-notice
::

The failure mode of a design system is not bad components. It is becoming a queue that
every other team has to wait in.

## Adoption stayed voluntary

Teams migrated when the new component was better than what they had. That kept the
pressure on us to make it better, rather than on them to comply.

## Breaking changes shipped with codemods

If a change could not be automated, we treated that as a signal the API was wrong. Every
major version came with a codemod and a migration guide.

## Versioning

Independent versions per package, so a breaking change in one component did not force
every consumer to move at once.

## What I would do differently

Publish the tokens before the components. Teams can adopt colour and spacing immediately,
and that builds trust well before anyone imports a button.
