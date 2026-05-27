/**
 * export-angular-api.ts
 *
 * Builds the Angular API docs from the common/api-docs submodule and exports
 * the generated llms-full.txt files into:
 *   docs/angular-api/{package}/{version}/llms-full.txt
 *
 * The TypeDoc JSON files referenced by platforms-config.json are not checked
 * into the submodule, so we generate them here:
 *   - main package (igniteui-angular):       fetch:repo:angular + build:typedoc:angular
 *   - xplat sub-packages (charts, core, …):  fetch:tools:angular + build:typedoc:angular-tools
 * Versions are read from the submodule's platforms-config.json (newest entry
 * per package). The xplat sub-packages all share the same version, so we use
 * igniteui-angular-core as a representative.
 */

import { exportApi } from './lib/export-api.js';

exportApi({
  platform: 'angular',
  displayName: 'Angular',
  astroDistSubdir: 'angular',
  outputDirName: 'angular-api',
  prebuildScripts: ({ latestVersion }) => {
    const main = latestVersion('igniteui-angular');
    const xplat = latestVersion('igniteui-angular-core');
    return [
      `fetch:repo:angular -- ${main}`,
      `build:typedoc:angular -- ${main}`,
      `fetch:tools:angular -- ${xplat}`,
      `build:typedoc:angular-tools -- ${xplat}`,
    ];
  },
  buildScript: 'build:angular:en',
});
