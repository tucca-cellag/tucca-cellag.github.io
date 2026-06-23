# TUCCA hub site: context for Claude

Source for the **Tufts University Center for Cellular Agriculture (TUCCA)** open
computational-research hub at <https://tucca-cellag.github.io/>. Astro + Starlight; site
source in [`site/`](./site). Build/deploy details and commands live in [`README.md`](./README.md).
Don't duplicate them here. Deploy is GitHub Actions **on push to `main`** (`.github/workflows/deploy.yml`).

The curated **CAAIL** library is a *separate* repo/site (`tucca-cellag/caail`, served at
`/caail/`). Don't edit CAAIL content from here, and vice-versa.

Content pages are Starlight MDX under `site/src/content/docs/`. Reusable card primitives
(`Card`, `CardImage`, `CardHeader/Body/Footer`, `Columns`, `Column`) live in
`site/src/components/docs/`. The "Our Team" page is `our-team.mdx`.

## Writing style (site copy)

The prose on this site should read like a person wrote it, not a language model. When
authoring or editing any page, follow these rules.

- **No em dashes (—) in prose.** Recast with a comma, colon, parentheses, semicolon, or
  by splitting the sentence. Choose by what the dash was doing (aside → commas/parens,
  lead-in to a list or explanation → colon, two independent clauses → period or
  semicolon). En dashes (–) are allowed **only** in numeric ranges and gene/pair notation
  (`615–620 nm`, `YAP–FoxO1`). In YAML frontmatter, a value containing `: ` must be
  quoted (`title: "TUCCA: Open Computational Research"`), or YAML will mis-parse it.
- **Avoid AI-tell vocabulary.** Cut or replace: comprehensive, robust, leverage,
  seamless(ly), pivotal, delve(s), essential, unlock, elevate, foster, harness, vibrant,
  cutting-edge, "testament to", "at the forefront", "prime example", "game-changer". Use
  plain words ("use", not "leverage"; drop empty intensifiers entirely).
- **No marketing or sycophantic constructions.** Skip "It's not just X, it's Y",
  "isn't an afterthought, it's …", "we're here to help!", and self-congratulatory framing
  ("Our Computational Ethos", "Real-World Impact"). State what the thing is and does.
- **Voice:** direct, concrete, specific. Cut filler adjectives; prefer the active voice.
- **Don't touch verbatim quotes.** Published titles, paper abstracts, and other citations
  stay exact even if they contain an em dash or a flagged word (e.g. the Köster & Rahmann
  "Snakemake—a scalable …" title in `citing-the-workflow.mdx`).

## Gotchas (MDX + Starlight)

These bite repeatedly when authoring card layouts in MDX pages. Check them before shipping.

### Adjacent-sibling top-margin leak onto the 2nd+ card ("the 2nd card issue")

Starlight's `.sl-markdown-content` applies a top margin to **every sibling after the first**
(its `* + *` content spacing). In a row/grid of cards this lands on the 2nd, 3rd, … card and
pushes them **down**, breaking the top-aligned row (1st card sits higher than the rest).

- The `Columns.astro` component already neutralizes this for its flex layout with
  `.t-columns > * + * { margin-top: 0; }` (see the comment in that file).
- **Any custom card container you build in MDX must do the same.** `our-team.mdx` lays its cards
  out in a `.t-team-grid` (CSS grid) and includes `.t-team-grid > .t-column { margin-top: 0; }`
  for exactly this reason. If cards in a row stop top-aligning, this margin reset is missing or
  was overridden.

### `template: splash` still renders the frontmatter title `<h1>`

On this Starlight version, `template: splash` removes the left sidebar, right "On this page"
TOC, and prev/next pagination, but it **still renders the page title** (the `title:`
frontmatter) as an `<h1>`. Do **not** add a manual `<h1>{title}</h1>` in the MDX body, or the
title renders **twice**. Add only sub-title/lede prose below it if needed.
