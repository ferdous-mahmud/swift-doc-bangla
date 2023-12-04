// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'সুইফট ডক বাংলা',
  tagline: 'বাংলায় শিখি সুইফট',
  favicon: 'img/favicon.ico',
  url: 'https://github.com',
  baseUrl: '/',
  organizationName: 'ferdous-mahmud', // Usually your GitHub org/user name.
  projectName: 'swift-doc-bangla', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'bn',
    locales: ['bn'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ferdous-mahmud/swift-doc-bangla/tree/main/',
          showLastUpdateTime: true
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'সুইফট ডক বাংলা',
        logo: {
          alt: 'সুইফট ডক বাংলা',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'টিউটোরিয়াল',
          },
          {
            href: 'https://github.com/ferdous-mahmud/swift-doc-bangla',
            label: 'গিটহাব',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ডক',
            items: [
              {
                label: 'টিউটোরিয়াল',
                to: '/docs/intro',
              },
              {
                label: 'ব্লগ',
                to: 'https://ferdousmahmud.co/blog',
              },
            ],
          },
          {
            title: 'কমিউনিটি',
            items: [
              {
                label: 'ইউটিউব',
                href: 'https://youtube.com/@ferdous19?si=cjcJwWuTRIP1kcpU',
              },
              {
                label: 'ফেইসবুক',
                href: 'https://www.facebook.com/ferdous1919',
              },
              {
                label: 'টুইটার',
                href: 'https://twitter.com/ferdous1919',
              },
              {
                label: 'লিংকডিন',
                href: 'https://www.linkedin.com/in/ferdous19/',
              },
            ],
          },
          {
            title: 'আরও',
            items: [
              {
                label: 'গিটহাব',
                href: 'https://github.com/ferdous-mahmud/swift-doc-bangla',
              },
            ],
          },
        ],
        copyright: `কপিরাইট © ${new Date().getFullYear()} সুইফট ডক বাংলা`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
