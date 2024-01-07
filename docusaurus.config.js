// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Norauto 🚗',
  tagline: 'Reparação e Manutenção do seu Veículo !',
  favicon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Logo_actuel_de_Norauto.png/1200px-Logo_actuel_de_Norauto.png',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusaurus-tp3/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'a85241 e a85275 e a85282', // Usually your GitHub org/user name.
  projectName: 'docusaurus-ghpages-tp3', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'https://seeklogo.com/images/N/norauto-logo-02D2BFB3D9-seeklogo.com.png',
      navbar: {
        title: 'Norauto',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Sobre',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
        
          {href: 'https://www.norauto.pt/e/servicos-oficina.html', label: 'Serviços e Oficina', position: 'left'},
          {
            href: 'https://www.facebook.com/Norauto/',
            label: 'Facebook',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sobre',
            items: [
              {
                label: 'Informações',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Norauto/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/NorautoPortugal',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Sobre Nós',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
