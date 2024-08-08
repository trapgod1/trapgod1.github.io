import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "The Archive",
  description: 'A site will curated guides for Tools and Software',
  appearance: 'dark',
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/welcome' },
    ],

    sidebar: {
      '/': [
        {
          text: 'Guides',
          items: [
            { text: 'Welcome', link: '/welcome' },
            {
              text: 'Adblocking',
              collapsed: false,
              items: [
                { text: 'uBlock Origin', link: '/adblocking/ublockorigin' },
                { text: 'Twitch Adblocking', link: '/adblocking/twitchadblock' },
                { text: 'DNS Adblock', link: '/adblocking/dns' },
              ]
            },
            {
              text: 'Windows',
              collapsed: false,
              items: [
                { text: 'Windows & Office Activation', link: '/windows/windowsandofficeactivation' },
                { text: 'Windows Debloat', link: '/windows/debloatwindows' },
              ]
            },
            {
              text: 'Software',
              collapsed: false,
              items: [
                { text: 'Download Mangers', link: '/software/downloadmanager' },
              ]
            },
            { text: 'Firefox Setup', link: '/firefoxsetup' },
          ],
        },
      ],
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Trap',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/trapgod1/trapgod1.github.io' }
    ],
  }
});