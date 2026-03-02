import * as fs from 'fs';
import * as path from 'path';

export function listComponents(): Record<string, string> {
  const entries = fs.readdirSync('src', {
    withFileTypes: true,
    recursive: true,
  })
    .filter((file) =>
      file.isFile()
      && file.name.endsWith('.ts')
      && !/\.(props|meta)\.ts$/.exec(file.name)
      && !file.parentPath.endsWith('_shared')
      && !file.name.startsWith('_'))
    .map(({ name, parentPath }) => [
      `components/${name.replace(/\.ts$/, '')}`,
      path.resolve(parentPath, name)
    ]);

  return Object.fromEntries(entries);
}

export function generatePackageJson() {

}