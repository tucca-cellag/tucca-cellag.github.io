// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import preact from '@astrojs/preact';
import icon from 'astro-icon';

// Org/user GitHub Pages site: served at the domain root (base '/'), NOT a
// subpath. The sibling CAAIL project site lives independently at /caail/.
// trailingSlash 'always' matches the prior Docusaurus URLs (URL parity).
export default defineConfig({
  site: 'https://tucca-cellag.github.io',
  base: '/',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'TUCCA',
      description:
        'Open computational research from the Tufts University Center for Cellular Agriculture — AI, computational biology, and open-source tools for cultivated meat and cellular agriculture.',
      favicon: '/favicon.svg',
      head: [
        // Social card. Branded 1200×630 card for every page.
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://tucca-cellag.github.io/og.png' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://tucca-cellag.github.io/og.png' } },
        // Structured data: Organization (TUCCA) + WebSite, rooted at the domain
        // root (distinct from CAAIL's /caail/#org graph).
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://tucca-cellag.github.io/#org',
                name: 'Tufts University Center for Cellular Agriculture (TUCCA)',
                url: 'https://cellularagriculture.tufts.edu/',
                sameAs: ['https://github.com/tucca-cellag'],
              },
              {
                '@type': 'WebSite',
                '@id': 'https://tucca-cellag.github.io/#website',
                name: 'TUCCA — Open Computational Research',
                url: 'https://tucca-cellag.github.io/',
                description:
                  'Open computational research from the Tufts University Center for Cellular Agriculture — AI, computational biology, and open-source tools for cellular agriculture.',
                inLanguage: 'en',
                publisher: { '@id': 'https://tucca-cellag.github.io/#org' },
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
        { label: 'CAAIL Library ↗', link: 'https://tucca-cellag.github.io/caail/' },
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
        {
          label: 'Helpful Resources',
          items: [
            { label: 'What is Cellular Agriculture?', slug: 'helpful-resources/learn-about-cell-ag' },
            { label: 'Reproducibility', slug: 'helpful-resources/reproducibility' },
            { label: 'R / RStudio Extensions', slug: 'helpful-resources/r-extensions' },
          ],
        },
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
      },
    }),
    preact(),
    icon({ include: { ph: ['*'] } }),
  ],
});
