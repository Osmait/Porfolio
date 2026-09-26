---
# Copy this file to a new name without the leading underscore, e.g.
# src/content/blog/postgres-mvcc.md, and the URL becomes /blog/postgres-mvcc.
title: "Your post title"
description: "One or two sentences. Shown in the logbook, the readout and link previews."
pubDate: 2026-10-01
# updatedDate: 2026-10-15
tags: ["postgres", "internals"]
# Drafts build locally with `npm run dev` but never ship.
draft: true
---

Opening paragraph.

## A section

Body text. Inline `code`, fenced code blocks, images and MDX components all work.

```sql
SELECT xmin, xmax, ctid, * FROM accounts;
```
