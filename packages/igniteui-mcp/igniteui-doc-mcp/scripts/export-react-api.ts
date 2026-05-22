/**
 * export-react-api.ts
 *
 * Builds the React API docs from the common/api-docs submodule and exports
 * the generated llms-full.txt files into:
 *   docs/react-api/{package}/{version}/llms-full.txt
 *
 * The `fetch:tools:react` step is currently skipped — tool data download is
 * not working and is tracked with the package author.
 */

import { exportApi } from './lib/export-api.js';

exportApi({
  platform: 'react',
  displayName: 'React',
  astroDistSubdir: 'react',
  outputDirName: 'react-api',
  buildScript: 'build:react:en',
});
