import { existsSync, readdirSync, rmSync, statSync } from 'fs';
import { join } from 'path';
import { compareVersionNames } from '../../src/lib/api-doc-loader.js';

/** Newest {version} folder under an Astro package dir that has an llms-full.txt. */
export function newestVersionDir(pkgSrc: string): string | undefined {
  const versions = readdirSync(pkgSrc).filter(name => {
    const dir = join(pkgSrc, name);
    return statSync(dir).isDirectory() && existsSync(join(dir, 'llms-full.txt'));
  });
  return versions.sort(compareVersionNames).at(-1);
}

/** Remove every exported version folder of a package except `keep`. */
export function pruneOtherVersions(pkgDest: string, keep: string): void {
  if (!existsSync(pkgDest)) return;
  for (const name of readdirSync(pkgDest)) {
    const dir = join(pkgDest, name);
    if (name !== keep && statSync(dir).isDirectory()) {
      rmSync(dir, { recursive: true, force: true });
      console.log(`  ✗ removed older snapshot ${name}`);
    }
  }
}
