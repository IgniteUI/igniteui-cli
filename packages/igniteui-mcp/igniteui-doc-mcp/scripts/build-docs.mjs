import { execSync } from 'child_process';
import { existsSync, mkdirSync, readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function toPosix(p) {
  return p.replace(/\\/g, '/');
}

const platformsModule = await import('../dist/config/platforms.js');
const { PLATFORM_CONFIGS } = platformsModule;

const platform = process.argv[2];

if (!platform) {
  console.error('❌ Platform required. Usage: npm run build:docs:angular');
  console.error(`   Available: ${Object.keys(PLATFORM_CONFIGS).join(', ')}`);
  process.exit(1);
}

const config = PLATFORM_CONFIGS[platform];

if (!config) {
  console.error(`❌ Unknown platform: ${platform}`);
  console.error(`   Available: ${Object.keys(PLATFORM_CONFIGS).join(', ')}`);
  process.exit(1);
}

async function buildDocs() {
  console.log(`📚 Building ${config.displayName} API documentation...`);

  const projectRoot = join(__dirname, '..');
  const submodulePath = join(projectRoot, config.submodulePath);
  const outputDir = join(projectRoot, config.docsPath);
  const typedocConfig = join(projectRoot, 'typedoc', `${platform}.typedoc.json`);

  // Guard: submodule present?
  if (!existsSync(submodulePath)) {
    console.error(`❌ Submodule not found: ${submodulePath}`);
    console.error('   Run: git submodule update --init --recursive');
    process.exit(1);
  }

  let shouldCleanup = false;
  if (platform === 'webcomponents') {
    const distPath = join(submodulePath, 'dist', 'index.d.ts');
    const nodeModulesPath = join(submodulePath, 'node_modules');
    
    if (!existsSync(distPath)) {
      console.log('🔨 Web Components not built yet. Building...');
      console.log('   This is a one-time operation and may take 5-10 minutes.');
      
      try {
        // Check if node_modules exists
        if (!existsSync(nodeModulesPath)) {
          console.log('📦 Installing dependencies...');
          execSync('npm install', {
            cwd: submodulePath,
            stdio: 'inherit',
          });
          shouldCleanup = true; // Mark for cleanup since we installed
        }
        
        console.log('🏗️ Building Web Components...');
        execSync('npm run build:publish', {
          cwd: submodulePath,
          stdio: 'inherit',
        });
        
        console.log('✅ Web Components build complete');
      } catch (error) {
        console.error('❌ Failed to build Web Components submodule');
        console.error('   Try building manually:');
        console.error(`   cd ${submodulePath}`);
        console.error('   npm install && npm run build');
        process.exit(1);
      }
    } else {
      console.log('✅ Web Components already built');
    }
  }

  // Guard: config file present?
  if (!existsSync(typedocConfig)) {
    console.error(`❌ TypeDoc config not found: ${typedocConfig}`);
    console.error(`   Create typedoc/${platform}.typedoc.json to continue.`);
    process.exit(1);
  }

  mkdirSync(outputDir, { recursive: true });

  console.log(`🔧 Running TypeDoc with: typedoc/${platform}.typedoc.json`);

  try {
    execSync(`npx typedoc --options "${toPosix(typedocConfig)}"`, {
      cwd: projectRoot,
      stdio: 'inherit',
    });
  } catch {
    console.error('❌ TypeDoc failed — see output above.');
    process.exit(1);
  }

  // Sanity check
  const allFiles = readdirSync(outputDir);
  const mdFiles = allFiles.filter(f => f.endsWith('.md'));
  const htmlFiles = allFiles.filter(f => f.endsWith('.html'));

  if (htmlFiles.length > 0 && mdFiles.length === 0) {
    console.error('❌ HTML files generated instead of Markdown — plugin likely not loaded.');
    process.exit(1);
  }

  console.log(`📄 Generated ${mdFiles.length} markdown files`);

  if (mdFiles.length === 0) {
    console.error('❌ No markdown files generated.');
    process.exit(1);
  }

  console.log('📊 Building search index...');
  buildSearchIndex(outputDir);

  if(shouldCleanup) {
    const nodeModulesPath = join(submodulePath, 'node_modules');
    console.log('🧹 Cleaning up Web Components dependencies...');
  try {
    rmSync(nodeModulesPath, { recursive: true, force: true });
    console.log('✅ Cleanup complete - node_modules removed');
  } catch (error) {
    console.warn('⚠️  Could not remove node_modules:', error.message);
    console.warn('   You can manually delete:', nodeModulesPath);
  }
}

  console.log('✅ Complete!');

  console.log('✅ Complete!');
}

function buildSearchIndex(outputDir) {
  const index = {};

  function scanDirectory(dir, relativePath = '') {
    if (!existsSync(dir)) return;

    for (const entry of readdirSync(dir)) {
      const fullPath = join(dir, entry);
      const relPath = join(relativePath, entry);

      if (statSync(fullPath).isDirectory()) {
        scanDirectory(fullPath, relPath);
      } else if (
        entry.endsWith('.md') &&
        !['README.md', 'modules.md', 'index.md'].includes(entry)
      ) {
        try {
          const content = readFileSync(fullPath, 'utf8');
          const name = basename(entry, '.md');

          const titleMatch = content.match(/^#\s+(.+)$/m);
          const title = titleMatch ? titleMatch[1] : name;

          let component = title;
          let type = 'unknown';

          const typeMatch = title.match(/^(Class|Interface|Enumeration|Type alias|Function|Type Alias):\s*(.+)$/);
          if (typeMatch) {
            type = typeMatch[1].toLowerCase().replace('enumeration', 'enum').replace('type alias', 'type');
            component = typeMatch[2].trim();
          }

          const keywords = [];
          if (content.includes('@deprecated')) keywords.push('deprecated');
          if (content.includes('## Properties') || content.includes('## Accessors')) keywords.push('properties');
          if (content.includes('## Methods')) keywords.push('methods');
          if (content.includes('## Events') || content.includes('## Outputs')) keywords.push('events');

          const summaryMatch = content.match(/^#\s+.+\n\n(.+?)(?:\n\n|$)/m);
          const summary = summaryMatch
            ? summaryMatch[1].replace(/\n/g, ' ').trim().slice(0, 200)
            : '';

          index[name] = { title, component, file: toPosix(relPath), type, keywords, summary };
        } catch (err) {
          console.warn(`⚠️  Could not process ${entry}:`, err.message);
        }
      }
    }
  }

  scanDirectory(outputDir);

  writeFileSync(join(outputDir, 'index.json'), JSON.stringify(index, null, 2));
  console.log(`📇 Indexed ${Object.keys(index).length} entries`);

  const byType = {};
  for (const entry of Object.values(index)) {
    byType[entry.type] = (byType[entry.type] || 0) + 1;
  }
  console.log('📈 Statistics:');
  for (const [type, count] of Object.entries(byType)) {
    console.log(`   ${type}: ${count}`);
  }
}

buildDocs().catch(err => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});