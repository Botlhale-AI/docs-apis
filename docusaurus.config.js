// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'APIs',
  url: 'https://docs-apis.botlhale.xyz',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ficon.png',
  organizationName: 'Botlhale-AI', // Usually your GitHub org/user name.
  projectName: 'docs-apis', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://docs-apis.botlhale.xyz/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/ficon.png',
      navbar: {
        title: 'APIs',
        logo: {
          alt: 'Botlhale AI Logo',
          src: 'img/ficon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'API',
            position: 'right',
            to: '/',
            href: '/',
            exact: 'true', // Ensure exact is passed as a string
            html: `
              <img
                src="/img/logo.png"
                alt="Botlhale AI Logo"
                class="navbar-logo-custom"
                style="height: 2rem; margin-right: 1rem; filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.75)); "
              >`,
          },
          {
            type: 'html',
            position: 'right',
            value: `
              <button id="download-pdf-button" style="background: none; border: none; color: inherit; cursor: pointer; font: inherit; outline: inherit;">
                Download as PDF
              </button>
            `,
          },
        ],
      },
      scripts: [
        { src: 'src/js/custom.js', async: true },
      ],
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      head: [
        {
          tagName: 'link',
          attributes: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap',
          },
        },
      ],
    }),
};

export default config;