import { readFileSync, copyFileSync, unlinkSync, readdirSync, existsSync, mkdirSync } from "fs";
import { join, resolve } from "path";

const ROOT = resolve(import.meta.dirname, "..");
const PREPARED_BASE = join(ROOT, "dist", "docs_prepeared");
const BASELINE_BASE = join(ROOT, "docs_baseline");

interface DiffResult {
  framework: string;
  changed: string[];
  added: string[];
  deleted: string[];
  unchanged: string[];
}

interface CliArgs {
  framework: string;
  manifest?: string;
  full: boolean;
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);
  const opts: CliArgs = { framework: "", full: false };
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--framework":
        opts.framework = args[++i];
        break;
      case "--manifest":
        opts.manifest = args[++i];
        break;
      case "--full":
        opts.full = true;
        break;
    }
  }
  if (!opts.framework) {
    console.error("Usage: update-baseline.ts --framework <fw> [--manifest path] [--full]");
    process.exit(1);
  }
  return opts;
}

function main() {
  const opts = parseArgs();
  const preparedDir = join(PREPARED_BASE, opts.framework);
  const baselineDir = join(BASELINE_BASE, opts.framework);

  if (!existsSync(preparedDir)) {
    console.error(`Prepared directory not found: ${preparedDir}`);
    process.exit(1);
  }

  mkdirSync(baselineDir, { recursive: true });

  if (opts.full) {
    // Full mode: copy ALL prepared files to baseline
    const files = readdirSync(preparedDir).filter(f => f.endsWith(".md") && !f.startsWith("_"));
    for (const file of files) {
      copyFileSync(join(preparedDir, file), join(baselineDir, file));
    }
    // Remove baseline files that no longer exist in prepared
    if (existsSync(baselineDir)) {
      const baselineFiles = readdirSync(baselineDir).filter(f => f.endsWith(".md"));
      const preparedSet = new Set(files);
      for (const file of baselineFiles) {
        if (!preparedSet.has(file)) {
          unlinkSync(join(baselineDir, file));
          console.log(`  Removed from baseline: ${file}`);
        }
      }
    }
    console.log(`Baseline updated (full): ${files.length} files copied to docs_baseline/${opts.framework}/`);
    return;
  }

  // Manifest mode
  if (!opts.manifest) {
    console.error("Either --manifest or --full is required");
    process.exit(1);
  }

  if (!existsSync(opts.manifest)) {
    console.error(`Manifest not found: ${opts.manifest}`);
    process.exit(1);
  }

  const manifest: DiffResult = JSON.parse(readFileSync(opts.manifest, "utf-8"));

  if (manifest.framework !== opts.framework) {
    console.error(`Manifest framework "${manifest.framework}" does not match --framework "${opts.framework}"`);
    process.exit(1);
  }

  let copied = 0;
  let removed = 0;

  // Copy changed + added files
  for (const file of [...manifest.changed, ...manifest.added]) {
    const src = join(preparedDir, file);
    const dest = join(baselineDir, file);
    if (existsSync(src)) {
      copyFileSync(src, dest);
      copied++;
    } else {
      console.warn(`  Warning: prepared file not found: ${file}`);
    }
  }

  // Remove deleted files
  for (const file of manifest.deleted) {
    const target = join(baselineDir, file);
    if (existsSync(target)) {
      unlinkSync(target);
      removed++;
    }
  }

  console.log(`Baseline updated for ${opts.framework}: ${copied} copied, ${removed} removed, ${manifest.unchanged.length} unchanged`);
}

main();
