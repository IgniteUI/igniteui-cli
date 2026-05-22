/**
 * export-wc-api.ts
 *
 * Builds the Web Components API docs from the common/api-docs submodule and
 * exports the generated llms-full.txt files into:
 *   docs/webcomponents-api/{package}/{version}/llms-full.txt
 *
 * The `fetch:tools:wc` and `fetch:wc-grids` steps are currently skipped —
 * tool data download is not working and is tracked with the package author.
 */

import { exportApi } from './lib/export-api.js';

exportApi({
  platform: 'webcomponents',
  displayName: 'Web Components',
  astroDistSubdir: 'webcomponents',
  outputDirName: 'webcomponents-api',
  buildScript: 'build:wc:en',
});
