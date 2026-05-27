/**
 * export-blazor-api.ts
 *
 * Builds the Blazor API docs from the common/api-docs submodule and exports
 * the generated llms-full.txt files into:
 *   docs/blazor-api/{package}/{version}/llms-full.txt
 *
 * Blazor needs extra prebuild steps before the Astro build:
 *   - dotnet tool restore  (docfx — not an npm script, runs in `prebuild`)
 *   - npm run fetch:tools:blazor  (downloads NuGet DLLs for each version)
 *   - npm run build:IgniteUI.Blazor[.*]  (×5 packages → docfx JSON,
 *     written as <Package>.<version>.json so platforms-config.json picks
 *     them up — without `--version` args the output isn't version-suffixed
 *     and the Astro build silently emits empty llms-full.txt files)
 *
 * Versions are read from the submodule's platforms-config.json.
 */

import { exportApi } from './lib/export-api.js';

exportApi({
  platform: 'blazor',
  displayName: 'Blazor',
  astroDistSubdir: 'blazor',
  outputDirName: 'blazor-api',
  prebuild: ({ run }) => {
    console.log('\n🔧 Restoring dotnet local tools (docfx)...');
    run('dotnet tool restore');
  },
  prebuildScripts: ({ latestVersion }) => {
    const blazor = latestVersion('IgniteUI.Blazor');
    const lite = latestVersion('IgniteUI.Blazor.Lite');
    const gridLite = latestVersion('IgniteUI.Blazor.GridLite');
    return [
      `fetch:tools:blazor -- IGNITEUI_BLAZOR=${blazor} IGNITEUI_BLAZOR_GRIDLITE=${gridLite} IGNITEUI_BLAZOR_LITE=${lite}`,
      `build:IgniteUI.Blazor -- --version ${blazor}`,
      `build:IgniteUI.Blazor.Documents.Core -- --version ${blazor}`,
      `build:IgniteUI.Blazor.Documents.Excel -- --version ${blazor}`,
      `build:IgniteUI.Blazor.Lite -- --version ${lite}`,
      `build:IgniteUI.Blazor.GridLite -- --version ${gridLite}`,
    ];
  },
  buildScript: 'build:blazor:en',
});
