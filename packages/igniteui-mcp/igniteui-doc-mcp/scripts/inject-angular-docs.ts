import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from "fs";
import { join, dirname, resolve, relative } from "path";

const ROOT = resolve(import.meta.dirname, "..");
const SAMPLES_ROOT = join(ROOT, "angular", "igniteui-angular-samples");
const EXAMPLES_SAMPLES_ROOT = join(ROOT, "angular", "igniteui-angular-examples", "samples");
const DOCS_ROOT = join(ROOT, "dist", "docs_processing", "angular");
const OUTPUT_ROOT = join(ROOT, "dist", "docs_prepeared", "angular");

const DV_BASE_URL = "{environment:dvDemosBaseUrl}";

const BASE_URL_MAP: Record<string, string> = {
  "{environment:demosBaseUrl}": join(SAMPLES_ROOT, "src", "app"),
  "{environment:lobDemosBaseUrl}": join(SAMPLES_ROOT, "projects", "app-lob", "src", "app"),
  "{environment:crmDemoBaseUrl}": join(SAMPLES_ROOT, "projects", "app-crm", "src", "app"),
};

interface RouteEntry {
  componentFile: string; // absolute path to .component.ts
}

let warnings = 0;
let totalReplaced = 0;
let totalFiles = 0;

function warn(msg: string) {
  console.error(`[WARN] ${msg}`);
  warnings++;
}

function collectMdFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...collectMdFiles(full));
    } else if (entry.endsWith(".md")) {
      results.push(full);
    }
  }
  return results;
}

function parseImports(content: string): Map<string, string> {
  const map = new Map<string, string>();
  const re = /import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(content)) !== null) {
    const names = m[1].split(",").map((n) => n.trim());
    const importPath = m[2];
    for (const name of names) {
      if (name) map.set(name, importPath);
    }
  }
  return map;
}

function extractRouteObjects(content: string): string[] {
  const objects: string[] = [];
  const arrMatch = content.match(/Routes[^=]*=\s*\[([\s\S]*)\]/);
  if (!arrMatch) return objects;
  const arrBody = arrMatch[1];

  let depth = 0;
  let start = -1;
  for (let i = 0; i < arrBody.length; i++) {
    if (arrBody[i] === "{") {
      if (depth === 0) start = i;
      depth++;
    } else if (arrBody[i] === "}") {
      depth--;
      if (depth === 0 && start !== -1) {
        objects.push(arrBody.slice(start, i + 1));
        start = -1;
      }
    }
  }
  return objects;
}

function parseRouteEntries(
  content: string,
  routeFileDir: string
): Map<string, RouteEntry> {
  const imports = parseImports(content);
  const routes = new Map<string, RouteEntry>();

  for (const obj of extractRouteObjects(content)) {
    const pathMatch = obj.match(/path:\s*'([^']*)'/);
    const componentMatch = obj.match(/component:\s*(\w+)/);
    if (!pathMatch || !componentMatch) continue;

    const path = pathMatch[1];
    const component = componentMatch[1];
    const importPath = imports.get(component);
    if (!importPath) {
      warn(`No import found for component ${component}`);
      continue;
    }
    const resolved = resolve(routeFileDir, importPath + ".ts");
    routes.set(path, { componentFile: resolved });
  }
  return routes;
}

function buildRouteMap(appRoot: string): Map<string, RouteEntry> {
  const fullMap = new Map<string, RouteEntry>();
  const appRoutesPath = join(appRoot, "app.routes.ts");
  if (!existsSync(appRoutesPath)) {
    warn(`app.routes.ts not found at ${appRoutesPath}`);
    return fullMap;
  }

  const appRoutesContent = readFileSync(appRoutesPath, "utf-8");

  // Parse inline routes (like app-crm)
  const inlineRoutes = parseRouteEntries(appRoutesContent, appRoot);
  for (const [path, entry] of inlineRoutes) {
    if (path) fullMap.set(path, entry);
  }

  // Parse loadChildren references
  for (const obj of extractRouteObjects(appRoutesContent)) {
    const pathMatch = obj.match(/path:\s*'([^']+)'/);
    const loadChildrenMatch = obj.match(/import\(\s*'([^']+)'\s*\)/);
    if (!pathMatch || !loadChildrenMatch) continue;

    const parentPath = pathMatch[1];
    const childImportPath = loadChildrenMatch[1];
    const childRoutesFile = resolve(appRoot, childImportPath + ".ts");

    if (!existsSync(childRoutesFile)) {
      warn(`Child routes file not found: ${childRoutesFile}`);
      continue;
    }

    const childContent = readFileSync(childRoutesFile, "utf-8");
    const childRoutes = parseRouteEntries(
      childContent,
      dirname(childRoutesFile)
    );
    for (const [childPath, entry] of childRoutes) {
      const fullPath = childPath ? `${parentPath}/${childPath}` : parentPath;
      fullMap.set(fullPath, entry);
    }
  }

  return fullMap;
}

function buildAllRouteMaps(): Map<string, Map<string, RouteEntry>> {
  const maps = new Map<string, Map<string, RouteEntry>>();
  for (const [baseUrl, appRoot] of Object.entries(BASE_URL_MAP)) {
    if (!maps.has(appRoot)) {
      maps.set(appRoot, buildRouteMap(appRoot));
    }
    // Also store by baseUrl key for quick lookup
    maps.set(baseUrl, maps.get(appRoot)!);
  }
  return maps;
}

function readExampleFiles(sampleDir: string): string {
  const srcDir = join(sampleDir, "src");
  const files = [
    { name: "app.module.ts", lang: "typescript" },
    { name: "app.component.ts", lang: "typescript" },
    { name: "app.component.html", lang: "html" },
    { name: "app.component.scss", lang: "scss" },
  ];

  const parts: string[] = [];
  for (const { name, lang } of files) {
    const filePath = join(srcDir, name);
    if (existsSync(filePath)) {
      const content = readFileSync(filePath, "utf-8").trim();
      if (content) parts.push("```" + lang + "\n" + content + "\n```");
    }
  }
  return parts.join("\n");
}

function readComponentFiles(tsPath: string): string {
  const dir = dirname(tsPath);
  const baseName = tsPath
    .replace(/\.component\.ts$/, "")
    .split(/[/\\]/)
    .pop()!;

  const parts: string[] = [];

  // TypeScript
  if (existsSync(tsPath)) {
    const content = readFileSync(tsPath, "utf-8").trim();
    if (content) parts.push("```typescript\n" + content + "\n```");
  }

  // HTML
  const htmlPath = join(dir, baseName + ".component.html");
  if (existsSync(htmlPath)) {
    const content = readFileSync(htmlPath, "utf-8").trim();
    if (content) parts.push("```html\n" + content + "\n```");
  }

  // SCSS or CSS
  const scssPath = join(dir, baseName + ".component.scss");
  const cssPath = join(dir, baseName + ".component.css");
  const stylePath = existsSync(scssPath)
    ? scssPath
    : existsSync(cssPath)
      ? cssPath
      : null;
  if (stylePath) {
    const content = readFileSync(stylePath, "utf-8").trim();
    const lang = stylePath.endsWith(".scss") ? "scss" : "css";
    if (content) parts.push("```" + lang + "\n" + content + "\n```");
  }

  return parts.join("\n");
}

function processFile(
  mdPath: string,
  routeMaps: Map<string, Map<string, RouteEntry>>
): string {
  let content = readFileSync(mdPath, "utf-8");
  const codeViewRe = /<code-view[\s\S]*?<\/code-view>/g;

  content = content.replace(codeViewRe, (match) => {
    const iframeSrcMatch = match.match(/iframe-src="([^"]+)"/);
    if (!iframeSrcMatch) {
      warn(`No iframe-src in code-view in ${mdPath}`);
      return match;
    }

    const iframeSrc = iframeSrcMatch[1];

    if (iframeSrc.startsWith(DV_BASE_URL)) {
      const githubSrcMatch = match.match(/github-src="([^"]+)"/);
      if (!githubSrcMatch) {
        warn(`No github-src attribute for dvDemosBaseUrl code-view in ${mdPath}`);
        return match;
      }
      const sampleDir = join(EXAMPLES_SAMPLES_ROOT, githubSrcMatch[1]);
      if (!existsSync(sampleDir)) {
        warn(`Example sample directory not found: ${sampleDir}`);
        return match;
      }
      const replacement = readExampleFiles(sampleDir);
      if (!replacement) {
        warn(`All example files empty for: ${sampleDir}`);
        return match;
      }
      totalReplaced++;
      return replacement;
    }

    // Find base URL for route-based samples
    let baseUrl: string | null = null;
    let urlPath: string | null = null;
    for (const key of Object.keys(BASE_URL_MAP)) {
      if (iframeSrc.startsWith(key)) {
        baseUrl = key;
        urlPath = iframeSrc.slice(key.length).replace(/^\/|\/$/g, "");
        break;
      }
    }

    if (!baseUrl || !urlPath) {
      warn(`Unrecognized base URL in iframe-src: ${iframeSrc}`);
      return match;
    }

    const routeMap = routeMaps.get(baseUrl);
    if (!routeMap) {
      warn(`No route map for ${baseUrl}`);
      return match;
    }

    const entry = routeMap.get(urlPath);
    if (!entry) {
      warn(`No route found for path: ${urlPath} (from ${iframeSrc})`);
      return match;
    }

    if (!existsSync(entry.componentFile)) {
      warn(`Component file not found: ${entry.componentFile}`);
      return match;
    }

    const replacement = readComponentFiles(entry.componentFile);
    if (!replacement) {
      warn(`All component files empty for: ${entry.componentFile}`);
      return match;
    }

    totalReplaced++;
    return replacement;
  });

  return content;
}

function main() {
  console.error("Building route maps...");
  const routeMaps = buildAllRouteMaps();

  console.error("Processing markdown files...");
  const mdFiles = collectMdFiles(DOCS_ROOT);

  for (const mdPath of mdFiles) {
    const relPath = relative(DOCS_ROOT, mdPath);
    const outPath = join(OUTPUT_ROOT, relPath);

    mkdirSync(dirname(outPath), { recursive: true });

    const processed = processFile(mdPath, routeMaps);
    writeFileSync(outPath, processed, "utf-8");
    totalFiles++;
  }

  console.error(`\nDone!`);
  console.error(`  Files processed: ${totalFiles}`);
  console.error(`  Code-views replaced: ${totalReplaced}`);
  console.error(`  Warnings: ${warnings}`);
}

main();
