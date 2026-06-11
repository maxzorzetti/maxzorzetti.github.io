---
title: "Quiet interfaces: backgrounds that know their place"
deck: Notes on building an animated backdrop that adds depth without ever asking for attention.
date: 2026-06-10
---

Most animated backgrounds fail the same way: they want to be looked at. The goal here was the opposite — a surface that gives the page a sense of depth and motion, but that you stop noticing within seconds of reading.

## Restraint as a feature

Every parameter errs quiet. The squares are outlined at five to ten percent white, the columns drift at a few pixels per second in random directions, and only one square in two hundred is filled in. Scroll for a paragraph or two and check whether you can still point at one — that's the test.

The whole thing is one `<div>` of CSS-transformed columns built by a few dozen lines of vanilla JavaScript — no canvas, no dependencies. Each column loops seamlessly by translating exactly one copy of its pattern, an old [marquee trick](#) that compositors are very good at.

Everything is tunable from a small config block: density, speed, opacity, size. The rest of this page is placeholder text so you can judge the reading experience — which is, after all, the only thing a background should serve.
