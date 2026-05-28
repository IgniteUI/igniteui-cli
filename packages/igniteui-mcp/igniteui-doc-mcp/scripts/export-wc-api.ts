/**
 * export-wc-api.ts
 *
 * Builds the Web Components API docs from the common/api-docs submodule and
 * exports the generated llms-full.txt files into:
 *   docs/webcomponents-api/{package}/{version}/llms-full.txt
 *
 * The TypeDoc JSON files referenced by platforms-config.json are not checked
 * into the submodule, so we generate them here. Versions are read from the
 * submodule's platforms-config.json. `fetch:tools:wc` / `fetch:wc-grids`
 * (and their typedoc steps) are skipped — that tool data download is
 * currently broken and tracked with the package author.
 */

import { exportApi } from './lib/export-api.js';

exportApi({
  platform: 'webcomponents',
  displayName: 'Web Components',
  astroDistSubdir: 'webcomponents',
  outputDirName: 'webcomponents-api',
  prebuildScripts: ({ latestVersion }) => {
    const wc = latestVersion('igniteui-webcomponents');
    const dockManager = latestVersion('igniteui-dockmanager');
    const gridLite = latestVersion('igniteui-grid-lite');
    return [
      `fetch:repo:wc -- ${wc}`,
      `build:typedoc:wc:repo -- ${wc}`,
      `fetch:dock-manager -- ${dockManager}`,
      `build:typedoc:dock-manager -- ${dockManager}`,
      `fetch:repo:grid-lite -- ${gridLite}`,
      `build:typedoc:grid-lite:repo -- ${gridLite}`,
    ];
  },
  buildScript: 'build:wc:en',
});
