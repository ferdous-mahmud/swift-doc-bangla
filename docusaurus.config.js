// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Swift Doc Bangla',
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
              {
                label: 'Blog',
                to: 'https://ferdousmahmud.co/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://youtube.com/@ferdous19?si=cjcJwWuTRIP1kcpU',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/ferdous1919',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ferdous1919',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/ferdous19/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ferdous-mahmud/swift-doc-bangla',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ferdous Mahmud Akash. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
