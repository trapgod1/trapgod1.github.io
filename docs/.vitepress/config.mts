import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "A Guide",
  description: "A Website With Guides",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Guides are Work in Progess more to come soonTM', link: '' },
          {text: '------------------'},
          {text: 'Firefox Setup', link:'/firefox-setup.md'},
          {text: 'Twitch Adblock', link:'/twitchadblock.md'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/trapgod1/trapgod1.github.io' },
    ]
  }
})