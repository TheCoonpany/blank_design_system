import { defineConfig } from 'vite';
import { listComponents } from './vite.config.helpers';
import dts from 'vite-plugin-dts';

import * as path from 'path';

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: 'tsconfig.lib.json',
      compilerOptions: {
        sourceMap: false,
        declarationMap: false,
      },
      beforeWriteFile(filePath, content) {
        return {
          filePath: filePath.replace(/\/src\/\w+\//, '/components/'),
          content: content.replace(`from '../_shared/lit';`, `from './lit';`)
        };
      },
      afterBuild: async () => {
        console.info('Done!');
      }
    })
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData(source, filename) {
          return '';
        },
      }
    }
  },

  build: {
    cssMinify: false,
    cssCodeSplit: true,
    emptyOutDir: true,
    lib: {
      entry: '',
      name: 'my-lib',
      formats: ['es'],
    },
    rollupOptions: {
      input: {
        'components/lit': path.resolve('src/_shared/lit'),
        'components/lit.helpers': path.resolve('src/_shared/lit.helpers'),
        ...listComponents()
      },
      output: {
        format: 'esm',
        dir: './dist',
        chunkFileNames(chunkInfo) {
          if (chunkInfo.isEntry) return `[name].js`;
          return `chunks/[name].js`;
        },
      }
    }
  }
});