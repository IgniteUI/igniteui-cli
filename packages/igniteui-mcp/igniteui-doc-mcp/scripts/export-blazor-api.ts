/**
 * export-blazor-api.ts
 *
 * Builds the Blazor API docs from the common/api-docs submodule and exports
 * the generated llms-full.txt files into:
 *   docs/blazor-api/{package}/{version}/llms-full.txt
 *
 * Blazor needs extra prebuild steps before the Astro build:
 *   - dotnet tool restore  (docfx)
 *   - npm run fetch:tools:blazor  (downloads NuGet DLLs)
 *   - npm run build:IgniteUI.Blazor[.*]  (×5 packages → docfx JSON)
 */

import { exportApi } from './lib/export-api.js';

const BLAZOR_BUILD_SCRIPTS = [
  'build:IgniteUI.Blazor',
  'build:IgniteUI.Blazor.Documents.Core',
  'build:IgniteUI.Blazor.Documents.Excel',
  'build:IgniteUI.Blazor.Lite',
  'build:IgniteUI.Blazor.GridLite',
];

exportApi({
  platform: 'blazor',
  displayName: 'Blazor',
  astroDistSubdir: 'blazor',
  outputDirName: 'blazor-api',
  buildScript: 'build:blazor:en',
  prebuild: ({ run }) => {
    console.log('\n🔧 Restoring dotnet local tools (docfx)...');
    run('dotnet tool restore');

    console.log('\n📥 Fetching Blazor NuGet packages...');
    run('npm run fetch:tools:blazor');

    for (const script of BLAZOR_BUILD_SCRIPTS) {
      console.log(`\n🏗️  Running ${script}...`);
      run(`npm run ${script}`);
    }
  },
});
