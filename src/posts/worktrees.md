---
title: Worktrees as a way of life
deck: Why my main checkout never moves.
date: 2026-05-22
---

Switching branches in place is a small tax you pay dozens of times a day: stashes, rebuilt caches, an editor full of files that no longer exist. At some point I stopped paying it. The primary checkout stays on `main`, forever, and every piece of real work gets its own worktree.

```bash
git worktree add -b fix/colors ../.worktrees/site/fix-colors main
```

Each branch gets a directory, each directory keeps its own build state, and abandoning an experiment is `git worktree remove` instead of archaeology. This post exists mostly so the blog index has two entries — but the advice is real.
