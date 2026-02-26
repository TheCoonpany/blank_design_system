import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  srcDir: './src',
  title: "Blank Design System",
  description: "An agnostic Design System",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        base: '/introduction',
        link: '/',
        items: [
          { text: 'Principles', link: '/principles' },
        ]
      },
      {
        text: 'Tokens',
        base: '/tokens',
        link: '/',
        items: [
          // { text: 'Button', link: '/button' },
        ]
      },
      {
        text: 'Atoms',
        base: '/atoms',
        link: '/',
        items: [
          { text: 'Button', link: '/button' },
          { text: 'Icon', link: '/icon' },
        ]
      },
      {
        text: 'Inputs',
        base: '/inputs',
        link: '/',
        items: [
          // { text: 'Button', link: '/button' },
        ]
      },
      {
        text: 'Layouts',
        base: '/layouts',
        link: '/',
        items: [
          // { text: 'Button', link: '/button' },
        ]
      },
      {
        text: 'Molecules',
        base: '/molecules',
        link: '/',
        items: [
          // { text: 'Button', link: '/button' },
        ]
      },
      {
        text: 'Organisms',
        base: '/organisms',
        link: '/',
        items: [
          // { text: 'Button', link: '/button' },
        ]
      },
      {
        text: 'Data',
        base: '/data',
        link: '/',
        items: [
          // { text: 'Button', link: '/button' },
        ]
      },
      {
        text: 'Charts',
        base: '/charts',
        link: '/',
        items: [
          // { text: 'Button', link: '/button' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TheCoonpany/blank_design_system' }
    ]
  }
});
