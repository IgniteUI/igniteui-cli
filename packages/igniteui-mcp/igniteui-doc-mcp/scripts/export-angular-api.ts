/**
 * export-angular-api.ts
 *
 * Builds the Angular API docs from the common/api-docs submodule and exports
 * the generated llms-full.txt files into:
 *   docs/angular-api/{package}/{version}/llms-full.txt
 *
 * Angular TypeDoc JSONs are pre-bundled in common/api-docs/src/data/angular/,
 * so no fetch:tools step is needed before the Astro build.
 */

import { exportApi } from './lib/export-api.js';

exportApi({
  platform: 'angular',
  displayName: 'Angular',
  astroDistSubdir: 'angular',
  outputDirName: 'angular-api',
  buildScript: 'build:angular:en',
});
