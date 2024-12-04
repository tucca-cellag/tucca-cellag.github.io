import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'TUCCA Bioinformatics Docs',
  tagline: 'Cultured meat is tasty!',
  //favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tucca-cellag.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tucca-cellag', // Usually your GitHub org/user name.
  projectName: 'tucca-cellag.github.io', // Usually your repo name.
  deploymentBranch: '',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'TUCCA Bioinformatics Docs',
      /* logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      }, */
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tuccarnaseq',
          position: 'left',
          label: 'tucca-rna-seq',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorial',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/tucca-cellag',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Connect With Us',
          items: [
            {
              label: 'Tufts University Center for Cellular Agriculture',
              href: 'https://cellularagriculture.tufts.edu/',
            },
            {
              label: 'TUCCA on LinkedIn',
              href: 'https://www.linkedin.com/company/tufts-cell-ag/',
            },
            {
              label: 'TUCCA on X',
              href: 'https://twitter.com/tuftscellag',
            },
            {
              label: 'TUCCA on YouTube',
              href: 'https://www.youtube.com/channel/UC29F8uqsu_K7aRxOgjfG_HQ'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'TUCCA\'s GitHub',
              href: 'https://github.com/tucca-cellag',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
