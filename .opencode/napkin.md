# Napkin Runbook

## Curation Rules
- Re-prioritize on every read.
- Keep recurring, high-value notes only.
- Max 10 items per category.
- Each item includes date + "Do instead".

## Execution & Validation (Highest Priority)
1. **[2026-03-30] Run tests before implementation, then verify after**
   Do instead: add the failing test first, implement the smallest fix, then rerun `npm test` and `npm run build`.

2. **[2026-03-30] vinext build prefers explicit JSX-friendly files**
   Do instead: keep JSX-bearing route/component files as `.jsx` and import React explicitly when Vitest or the classic runtime needs it.

3. **[2026-03-30] Mock first for content-driven features**
   Do instead: build the UI against local mock data before connecting MongoDB.

4. **[2026-03-30] Visual QA should cover desktop and mobile**
   Do instead: capture full-page screenshots at desktop and narrow widths, then check for cramped columns and overflow with Playwright.

## Shell & Command Reliability
1. **[2026-03-30] Use pnpm for this repository**
   Do instead: run installs, tests, and builds with `pnpm` and keep `pnpm-lock.yaml` as the source of truth.

## Domain Behavior Guardrails
1. **[2026-03-30] Keep the portfolio editorial and proof-led**
   Do instead: use a sticky proof rail, asymmetric content blocks, and one accent color.

2. **[2026-03-30] Respect user collection names**
   Do instead: map mock data to `Article`, `Educatio`, `Experience`, and `Repositories`.

3. **[2026-03-30] Mirror reference layouts with semantic sections**
   Do instead: translate external inspiration into `About`, `Skills`, `Experience`, `Projects`, and `Contact` sections instead of copying pixel-for-pixel.

4. **[2026-03-30] Use a sticky snapshot rail for hero refinement**
   Do instead: keep the hero copy on one side and a compact sticky snapshot card on the other for modern portfolio feel.

5. **[2026-03-30] Make motion quiet and purposeful**
   Do instead: use short easing transitions on hover/focus and honor reduced-motion preferences.

6. **[2026-03-30] Keep the portfolio palette blue-black and muted**
   Do instead: use deep black/navy surfaces with soft blue accents and low-contrast borders.

## User Directives
1. **[2026-03-30] Ask when uncertain**
   Do instead: pause and confirm before making assumptions that affect scope or data shape.

2. **[2026-03-30] Mock before MongoDB**
   Do instead: keep the first version fully mocked until approval.

3. **[2026-03-30] Follow TDD**
   Do instead: create tests first, confirm they fail, implement, and verify they pass.
