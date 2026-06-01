import { readdirSync, readFileSync, statSync, existsSync } from "fs";
import { join, resolve } from "path";
import { fileURLToPath } from "url";

const PKG_ROOT = resolve(fileURLToPath(new URL("..", import.meta.url)));
const DB_PATH = join(PKG_ROOT, "dist", "igniteui-docs.db");
const DB_MIN_BYTES = 20 * 1024 * 1024; // 20 MB minimum for the SQLite DB
const DOCS_ROOT = join(PKG_ROOT, "docs");
const FRAMEWORK_DIRS = ["angular-api", "react-api", "webcomponents-api", "blazor-api"];
const FRAMEWORK_MIN_BYTES = 300 * 1024; // 300 KB minimum for each docs/<framework>-api directory

const errors: string[] = [];

function getExpectedVersion(): string | null {
  const idx = process.argv.indexOf("--expected-version");
  if (idx >= 0) {
    const rawValue = process.argv[idx + 1];
    const value = rawValue?.trim();
    if (!value || value.startsWith("--")) {
      console.error('Missing or invalid value for "--expected-version". Provide a version after the flag.');
      process.exit(1);
    }
    return value.replace(/^v/, "");
  }
  if (process.env.EXPECTED_VERSION) return process.env.EXPECTED_VERSION.replace(/^v/, "");
  return null;
}

const expectedVersion = getExpectedVersion();
if (expectedVersion) {
  const pkgJsonPath = join(PKG_ROOT, "package.json");
  const pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf8"));
  if (pkgJson.version !== expectedVersion) {
    errors.push(`package.json version mismatch: got ${pkgJson.version}, expected ${expectedVersion}`);
  } else {
    console.log(`OK  ver package.json           ${pkgJson.version}`);
  }

  const serverJsonPath = join(PKG_ROOT, "server.json");
  if (!existsSync(serverJsonPath)) {
    errors.push(`server.json missing: ${serverJsonPath}`);
  } else {
    const serverJson = JSON.parse(readFileSync(serverJsonPath, "utf8"));
    if (serverJson.version !== expectedVersion) {
      errors.push(`server.json version mismatch: got ${serverJson.version}, expected ${expectedVersion}`);
    } else {
      console.log(`OK  ver server.json          ${serverJson.version}`);
    }
    const pkgs: Array<{ identifier?: string; version?: string }> = serverJson.packages ?? [];
    if (pkgs.length === 0) {
      errors.push(`server.json has no entries in "packages"`);
    }
    pkgs.forEach((p, i) => {
      const label = p.identifier ?? `packages[${i}]`;
      if (p.version !== expectedVersion) {
        errors.push(`server.json ${label} version mismatch: got ${p.version}, expected ${expectedVersion}`);
      } else {
        console.log(`OK  ver server.json ${label.padEnd(20)} ${p.version}`);
      }
    });
  }
}

function formatSize(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${bytes} B`;
}

function dirSize(dir: string): number {
  let total = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) total += dirSize(full);
    else if (entry.isFile()) total += statSync(full).size;
  }
  return total;
}

if (!existsSync(DB_PATH)) {
  errors.push(`DB missing: ${DB_PATH}`);
} else {
  const size = statSync(DB_PATH).size;
  if (size < DB_MIN_BYTES) {
    errors.push(`DB too small: ${formatSize(size)} < ${formatSize(DB_MIN_BYTES)} (${DB_PATH})`);
  } else {
    console.log(`OK  db  ${formatSize(size)}  ${DB_PATH}`);
  }
}

for (const framework of FRAMEWORK_DIRS) {
  const frameworkDir = join(DOCS_ROOT, framework);
  if (!existsSync(frameworkDir)) {
    errors.push(`Docs framework dir missing: ${frameworkDir}`);
    continue;
  }
  const size = dirSize(frameworkDir);
  if (size < FRAMEWORK_MIN_BYTES) {
    errors.push(`Docs framework dir too small: ${framework} = ${formatSize(size)} < ${formatSize(FRAMEWORK_MIN_BYTES)}`);
  } else {
    console.log(`OK  dir ${formatSize(size).padStart(10)}  ${framework}`);
  }
}

if (errors.length > 0) {
  console.error(`\nValidation failed with ${errors.length} error(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log("\nAll checks passed.");
