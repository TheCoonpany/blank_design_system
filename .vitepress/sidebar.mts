import { ATOMS, INPUTS, LAYOUTS, MOLECULES } from './sidebar.auto';

import type { DefaultTheme } from 'vitepress';

export const SIDEBAR = [
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
  ATOMS,
  INPUTS,
  MOLECULES,
  LAYOUTS,
] as const satisfies DefaultTheme.SidebarItem[];