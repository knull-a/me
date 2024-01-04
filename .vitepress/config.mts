import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "knull-a",
  description: "Portfolio",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/personal-projects' }
    ],

    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'Personal Projects', link: '/personal-projects' },
          { text: 'Commercial Projects', link: '/commercial-projects' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/knull-a' }
    ]
  }
})
