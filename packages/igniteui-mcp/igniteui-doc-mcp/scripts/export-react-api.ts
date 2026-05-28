/**
 * export-react-api.ts
 *
 * Builds the React API docs from the common/api-docs submodule and exports
 * the generated llms-full.txt files into:
 *   docs/react-api/{package}/{version}/llms-full.txt
 *
 * The TypeDoc JSON files referenced by platforms-config.json are not checked
 * into the submodule, so we generate them here. Versions are read from the
 * submodule's platforms-config.json. `fetch:tools:react` /
 * `build:typedoc:react-tools` (React sub-package tooling) is skipped — that
 * tool data download is currently broken and tracked with the package author.
 */

import { exportApi } from './lib/export-api.js';

exportApi({
  platform: 'react',
  displayName: 'React',
  astroDistSubdir: 'react',
  outputDirName: 'react-api',
  prebuildScripts: ({ latestVersion }) => {
    const main = latestVersion('igniteui-react');
    return [
      `fetch:repo:react -- ${main}`,
      `build:typedoc:react -- ${main}`,
    ];
  },
  buildScript: 'build:react:en',
});
