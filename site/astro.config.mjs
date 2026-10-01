// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import preact from '@astrojs/preact';
import icon from 'astro-icon';

// Org/user GitHub Pages site: served at the domain root (base '/'), NOT a
// subpath. The sibling CAAIL site lives independently at caail.tufts.edu.
// trailingSlash 'always' matches the prior Docusaurus URLs (URL parity).
const SITE = 'https://tucca-compbio.tufts.edu';

export default defineConfig({
  site: SITE,
  base: '/',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'TUCCA',
      description:
        'Open computational research from the Tufts University Center for Cellular Agriculture — AI, computational biology, and open-source tools for cultivated meat and cellular agriculture.',
      favicon: '/favicon.svg',
      // Surface a git build-date "Last updated" stamp on doc pages (freshness
      // signal, mirroring the Tufts RT guides footer).
      lastUpdated: true,
      head: [
        // Google Search Console ownership for the Tufts account. Search Console
        // issues one token per Google account, so this tag verifies every property
        // that account adds; the CAAIL site carries the same one. The older HTML-file
        // verification (public/google*.html) belongs to the account that set the site
        // up and stays alongside.
        {
          tag: 'meta',
          attrs: { name: 'google-site-verification', content: 'EfjIjiDvU1wMiT-AY61WMslZGzJz5ey4xNqy1ihVgO0' },
        },
        // Social card. Branded 1200×630 card for every page.
        { tag: 'meta', attrs: { property: 'og:image', content: `${SITE}/og.png` } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: `${SITE}/og.png` } },
        // Structured data: Organization (TUCCA) + WebSite, rooted at the domain
        // root (distinct from CAAIL's own graph).
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': `${SITE}/#org`,
                name: 'Tufts University Center for Cellular Agriculture (TUCCA)',
                url: 'https://cellularagriculture.tufts.edu/',
                sameAs: ['https://github.com/tucca-cellag'],
              },
              {
                '@type': 'WebSite',
                '@id': `${SITE}/#website`,
                name: 'TUCCA — Open Computational Research',
                url: `${SITE}/`,
                description:
                  'Open computational research from the Tufts University Center for Cellular Agriculture — AI, computational biology, and open-source tools for cellular agriculture.',
                inLanguage: 'en',
                publisher: { '@id': `${SITE}/#org` },
              },
            ],
          }),
        },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#002E6D' } },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/tucca-cellag' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/tufts-cell-ag/' },
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/channel/UC29F8uqsu_K7aRxOgjfG_HQ' },
      ],
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'CAAIL Library ↗', link: 'https://caail.tufts.edu/' },
        {
          label: 'Projects',
          items: [
            { label: 'Computational blue-melanin design', slug: 'projects/blue-melanin' },
            { label: 'AST: Adherent-to-Suspension Transcriptomics', slug: 'projects/comparative-transcriptomics' },
            {
              label: 'tucca-rna-seq',
              items: [
                { label: 'Introduction', slug: 'tucca-rna-seq/introduction' },
                { label: 'GitHub Repository', link: 'https://github.com/tucca-cellag/tucca-rna-seq' },
                {
                  label: 'Data Collection 101 for RNA-Seq',
                  collapsed: true,
                  items: [
                    { label: 'Why This Matters', slug: 'tucca-rna-seq/data-collection/data-collection-why' },
                    { label: 'What Should I Collect?', slug: 'tucca-rna-seq/data-collection/data-collection-how' },
                  ],
                },
                {
                  label: 'Installation & Configuration',
                  collapsed: true,
                  items: [
                    { label: 'Snakemake Primer', slug: 'tucca-rna-seq/install-and-config/snakemake-primer' },
                    { label: 'Deployment Options', slug: 'tucca-rna-seq/install-and-config/deployment' },
                    { label: 'Installation', slug: 'tucca-rna-seq/install-and-config/installation' },
                    { label: 'Configuration', slug: 'tucca-rna-seq/install-and-config/configuration' },
                  ],
                },
                { label: 'Running the Workflow', slug: 'tucca-rna-seq/running' },
                { label: 'Functional Enrichment Analysis', slug: 'tucca-rna-seq/enrichment-analysis' },
                { label: 'R / RStudio Extensions', slug: 'tucca-rna-seq/r-extensions' },
                {
                  label: 'For Tufts Users',
                  collapsed: true,
                  items: [
                    { label: 'HPC Quick Start', slug: 'tucca-rna-seq/tufts-specific/hpc-quick-start' },
                    { label: 'HPC Best Practices', slug: 'tucca-rna-seq/tufts-specific/hpc-best-practices' },
                    { label: 'Tufts HPC in VSCode', slug: 'tucca-rna-seq/tufts-specific/tufts-hpc-in-vscode' },
                  ],
                },
                { label: 'Citing the Workflow', slug: 'tucca-rna-seq/citing-the-workflow' },
                { label: 'Getting Help', slug: 'tucca-rna-seq/help' },
              ],
            },
          ],
        },
        {
          label: 'Publications',
          items: [
            { label: 'Overview', slug: 'publications' },
            { label: 'Computational blue-melanin design', slug: 'publications/blue-melanin' },
            { label: 'Chicken fibroblast transcriptomics', slug: 'publications/ast1' },
            { label: 'AI for Food Innovation', slug: 'publications/ai-for-food-innovation' },
            { label: 'Biomaterials in cellular agriculture', slug: 'publications/biomaterials-cell-ag' },
          ],
        },
        { label: 'Reproducibility', slug: 'helpful-resources/reproducibility' },
        { label: 'Our Team', slug: 'our-team' },
      ],
      customCss: [
        './src/styles/fonts.css',
        './src/styles/tokens.css',
        './src/styles/starlight-overrides.css',
      ],
      components: {
        Hero: './src/components/StarlightHeroOverride.astro',
        Footer: './src/components/Footer.astro',
        // Suppress the Previous/Next pagination links site-wide.
        Pagination: './src/components/EmptyPagination.astro',
        // Wordmark + horizontal dropdown navbar (Projects/Publications/Docs).
        SiteTitle: './src/components/SiteTitle.astro',
      },
    }),
    preact(),
    icon({ include: { ph: ['*'] } }),
  ],
});
