import * as fs from 'fs';
import * as path from 'path';

import type { DefaultTheme } from 'vitepress';

const COMPONENT_FOLDERS = [
  'atoms',
  'inputs',
  'molecules',
  'data',
  'charts',
  'organisms',
  'layouts'
];

(async () => {
  const COMMAND_ROOT = process.cwd();

  console.info('Running tasks...');

  const allFiles = fs.readdirSync('src', {
    withFileTypes: true,
    recursive: true,
  })
    .filter((file) => file.isFile());


  const componentsMarkdowns = allFiles
    .filter((file) =>
      file.name !== 'index.md'
      && file.name.endsWith('.md'))
    .map((file) => ({
      file,
      filePath: path.resolve(file.parentPath, file.name).replace(COMMAND_ROOT, ''),
      category: file.parentPath.split(path.sep).pop()
    }))
    .filter(({ category }) => COMPONENT_FOLDERS.includes(category))
    .reduce((t, f) => {
      if (!t[f.category]) t[f.category] = [f];
      else t[f.category].push(f);
      return t;
    }, {} as Record<string, { filePath: string, category: string; }[]>);

  fs.writeFileSync('.vitepress/sidebar.auto.ts', Object.entries(componentsMarkdowns)
    .map(([category, components]) => {
      const data: DefaultTheme.SidebarItem = {
        text: capitalize(category),
        base: `/${category}`,
        link: '/',
        collapsed: true,
        items: components.map(({ filePath }) => {
          const name = filePath.split(path.sep).pop().replace(/\.md$/, '');
          return {
            text: name,
            link: `/${name}`
          };
        })
      };

      const parsedData = JSON.stringify(data, null, 2).replace(/\"(\w+)\"\:/g, '$1:');

      return `export const ${category.toUpperCase()} = ${parsedData};`;
    })
    .join('\n\n'));
})();


function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}