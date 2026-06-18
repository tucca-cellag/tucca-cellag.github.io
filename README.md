# TUCCA — Open Computational Research

Source for the **Tufts University Center for Cellular Agriculture (TUCCA)** open
computational-research hub, served at **<https://tucca-cellag.github.io/>**.

It is the landing point for TUCCA's open-source code, documentation, and AI /
computational-biology projects, including:

- **`tucca-rna-seq`** — a reproducible RNA-Seq workflow (Snakemake v8+), with full docs.
- **Computational blue-melanin design** — RFdiffusion-based de novo pigment design.
- **Publications** powered by these tools.
- **Helpful resources** on cellular agriculture, reproducibility, and R/RStudio.

The curated **CAAIL** library (papers, software, databases, datasets at the
intersection of cellular agriculture and AI) is a separate site at
**<https://tucca-cellag.github.io/caail/>** ([`tucca-cellag/caail`](https://github.com/tucca-cellag/caail)).

## Stack

[Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/), matching
the CAAIL site's stack for cross-site cohesion. The site source lives in [`site/`](./site).

## Develop

Requires Node ≥ 22.12 (see [`site/.nvmrc`](./site/.nvmrc)) and `pnpm`.

```bash
nvm use 22
pnpm --dir site install
pnpm --dir site dev      # local preview
pnpm --dir site build    # production build → site/dist
pnpm --dir site preview  # serve the built site
```

Regenerate the social card after a branding change:

```bash
node site/scripts/og-image.mjs
```

## Deploy

On push to `main`, [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)
builds `site/` and deploys to GitHub Pages via GitHub Actions. The repository's
**Settings → Pages → Source** must be set to **GitHub Actions**.

## License

Content and code are released under the MIT License.
