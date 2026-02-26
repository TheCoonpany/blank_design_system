import { defineConfig } from 'vitepress';
import { SIDEBAR } from './sidebar.mts';

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

    sidebar: SIDEBAR,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TheCoonpany/blank_design_system' }
    ]
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  }
});
