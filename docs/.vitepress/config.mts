import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "A Guide",
  description: "A Website With Guides",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/welcome.md' }
    ],

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Guides are Work in Progess more to come soonTM', link: '' },
          {text: '------------------'},
          {text: 'Firefox Setup', link:'/firefoxsetup.md'},
          {text: 'Twitch Adblock', link:'/twitchadblock.md'},
          {text: 'uBlock Orgin Setup', link:'/uBlockOrigin.md'},
          {text: 'Windows & Office Activation', link:'windowsandofficeactivation.md'},
          {text: 'So, you want to debloat Windows?', link:'/debloatwindows.md'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/trapgod1/trapgod1.github.io/tree/guide' },
    ]
  }
})