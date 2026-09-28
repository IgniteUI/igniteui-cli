import { execSync } from "child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "fs";
import { dirname, join, resolve, sep } from "path";
import { gunzipSync } from "zlib";
import ts from "typescript";
import type { ImportMapSymbol } from "../../src/lib/import-resolver.js";

export type { ImportMapFile, ImportMapSymbol } from "../../src/lib/import-resolver.js";

export interface PublishedEntryPoint {
  module: string;
  typesFile: string;
}

export interface PublishedPackage {
  name: string;
  version: string;
  rootTypes?: string;
  entries: PublishedEntryPoint[];
}

/**
 * Downloads a package tarball with `npm pack` and unpacks package.json and the
 * .d.ts files into `<workDir>/package`. Dependencies are not installed — the
 * typings are only enumerated, never type-checked against their imports.
 */
export function fetchPublishedPackage(spec: string, workDir: string): string {
  const out = execSync(`npm pack ${spec} --json --pack-destination "${workDir}"`, {
    cwd: workDir,
    encoding: "utf-8",
    stdio: ["ignore", "pipe", "inherit"],
  });
  const [{ filename }] = JSON.parse(out) as { filename: string }[];
  const pkgDir = join(workDir, "package");
  extractTarball(readFileSync(join(workDir, filename)), workDir, path =>
    path === "package/package.json" || path.endsWith(".d.ts"),
  );
  return pkgDir;
}

/** Minimal ustar/pax reader for npm tarballs: regular files only, written under destDir. */
export function extractTarball(gzipped: Buffer, destDir: string, include: (path: string) => boolean): void {
  const data = gunzipSync(gzipped);
  const root = resolve(destDir);
  let offset = 0;
  let paxPath: string | undefined;

  while (offset + 512 <= data.length) {
    const header = data.subarray(offset, offset + 512);
    if (header.every(b => b === 0)) break;

    const field = (start: number, length: number) => header.subarray(start, start + length).toString("utf-8").replace(/\0.*$/s, "");
    const size = parseInt(field(124, 12).trim() || "0", 8);
    const type = field(156, 1) || "0";
    const prefix = field(345, 155);
    const body = data.subarray(offset + 512, offset + 512 + size);
    offset += 512 + Math.ceil(size / 512) * 512;

    if (type === "x") {
      paxPath = /(?:^|\n)\d+ path=([^\n]*)\n/.exec(body.toString("utf-8"))?.[1];
      continue;
    }
    const path = paxPath ?? (prefix ? `${prefix}/${field(0, 100)}` : field(0, 100));
    paxPath = undefined;
    if (type !== "0" || !include(path)) continue;

    const target = resolve(root, path);
    if (!target.startsWith(root + sep)) {
      throw new Error(`Refusing to extract outside ${root}: ${path}`);
    }
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, body);
  }
}

/** Entry points from the package.json `exports` map that ship typings; wildcard and Sass-only exports are skipped. */
export function readPublishedPackage(pkgDir: string): PublishedPackage {
  const pkg = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf-8"));
  const typesOf = (target: unknown): string | undefined => {
    if (typeof target === "object" && target !== null && typeof (target as { types?: unknown }).types === "string") {
      return resolve(pkgDir, (target as { types: string }).types);
    }
    return undefined;
  };

  const entries: PublishedEntryPoint[] = [];
  let rootTypes: string | undefined;
  for (const [key, target] of Object.entries<unknown>(pkg.exports ?? {})) {
    const typesFile = typesOf(target);
    if (!typesFile || key.includes("*") || !existsSync(typesFile)) continue;
    if (key === ".") {
      rootTypes = typesFile;
    } else {
      entries.push({ module: `${pkg.name}/${key.replace(/^\.\//, "")}`, typesFile });
    }
  }

  return { name: pkg.name, version: pkg.version, rootTypes, entries: entries.sort((a, b) => a.module.localeCompare(b.module)) };
}

function compilerOptions(pkg: PublishedPackage): ts.CompilerOptions {
  const paths: Record<string, string[]> = {};
  if (pkg.rootTypes) paths[pkg.name] = [pkg.rootTypes];
  for (const e of pkg.entries) paths[e.module] = [e.typesFile];
  return {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    experimentalDecorators: true,
    skipLibCheck: true,
    noEmit: true,
    types: [],
    paths,
  };
}

function symbolKind(symbol: ts.Symbol): string | undefined {
  const f = symbol.flags;
  // Value kinds first: `const X = {...}; type X = ...` must not be reported as type-only.
  if (f & ts.SymbolFlags.Class) return "class";
  if (f & ts.SymbolFlags.Enum) return "enum";
  if (f & ts.SymbolFlags.Function) return "function";
  if (f & ts.SymbolFlags.Variable) return "const";
  if (f & ts.SymbolFlags.Interface) return "interface";
  if (f & ts.SymbolFlags.TypeAlias) return "type";
  return undefined;
}

const samePath = (a: string, b: string) =>
  process.platform === "win32" ? resolve(a).toLowerCase() === resolve(b).toLowerCase() : resolve(a) === resolve(b);

/**
 * Maps every symbol exported by the package's secondary entry points to the
 * entry point that owns it. Each entry point's typings are a single flattened
 * .d.ts, so a symbol re-exported by several entry points belongs to the one
 * whose .d.ts declares it; if none does, the first entry point exporting it wins.
 */
export function collectPublishedExports(pkg: PublishedPackage): Record<string, ImportMapSymbol> {
  const program = ts.createProgram(pkg.entries.map(e => e.typesFile), compilerOptions(pkg));
  const checker = program.getTypeChecker();

  const candidates = new Map<string, { module: string; owns: boolean; kind?: string }[]>();
  for (const entry of pkg.entries) {
    const sf = program.getSourceFile(entry.typesFile);
    const moduleSymbol = sf && checker.getSymbolAtLocation(sf);
    if (!moduleSymbol) continue;

    for (const exported of checker.getExportsOfModule(moduleSymbol)) {
      const name = exported.getName();
      if (name === "default" || name.startsWith("ɵ")) continue;
      const target = exported.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(exported) : exported;
      const declFile = target.declarations?.[0]?.getSourceFile().fileName;
      const list = candidates.get(name) ?? [];
      list.push({ module: entry.module, owns: !!declFile && samePath(declFile, entry.typesFile), kind: symbolKind(target) });
      candidates.set(name, list);
    }
  }

  const symbols: Record<string, ImportMapSymbol> = {};
  for (const name of [...candidates.keys()].sort()) {
    const list = candidates.get(name)!;
    const chosen = list.find(c => c.owns) ?? list[0];
    symbols[name] = { module: chosen.module, ...(chosen.kind ? { kind: chosen.kind } : {}) };
  }
  return symbols;
}

export interface ImportCheckFailure {
  symbol: string;
  module: string;
  message: string;
}

/**
 * Type-checks `import { symbol } from 'module'` for every mapped symbol of the
 * package against its published typings and returns the ones that do not compile.
 */
export function verifyPublishedImports(pkg: PublishedPackage, symbols: Record<string, ImportMapSymbol>): ImportCheckFailure[] {
  const checked = Object.entries(symbols).filter(([, s]) => s.module === pkg.name || s.module.startsWith(`${pkg.name}/`));
  const checkFile = join(dirname(pkg.entries[0]?.typesFile ?? pkg.rootTypes ?? "."), "__import_check__.ts");
  writeFileSync(checkFile, checked.map(([name, s], i) => `import { ${name} as _${i} } from '${s.module}';`).join("\n") + "\n");

  const program = ts.createProgram([checkFile], compilerOptions(pkg));
  const sf = program.getSourceFile(checkFile)!;
  const failures = new Map<number, ImportCheckFailure>();
  for (const d of [...program.getSyntacticDiagnostics(sf), ...program.getSemanticDiagnostics(sf)]) {
    const line = d.start === undefined ? -1 : sf.getLineAndCharacterOfPosition(d.start).line;
    const entry = checked[line];
    if (entry && !failures.has(line)) {
      failures.set(line, { symbol: entry[0], module: entry[1].module, message: ts.flattenDiagnosticMessageText(d.messageText, " ") });
    }
  }
  return [...failures.values()];
}

const NAMED_IMPORT_RE = /import\s+(?:type\s+)?\{([^}]*)\}\s*from\s*['"]([^'"]+)['"]/g;

export function parseNamedImports(source: string): { names: string[]; module: string }[] {
  const result: { names: string[]; module: string }[] = [];
  for (const m of source.matchAll(NAMED_IMPORT_RE)) {
    const names = m[1]
      .split(",")
      .map(s => s.replace(/\/\/.*$|\/\*.*?\*\//g, "").trim().replace(/^type\s+/, "").split(/\s+as\s+/)[0].trim())
      .filter(n => /^[A-Za-z_$][\w$]*$/.test(n));
    if (names.length > 0) result.push({ names, module: m[2] });
  }
  return result;
}

/** Drops the licensed "@infragistics/" scope so trial and licensed imports count as the same module. */
export function normalizeModule(module: string): string {
  return module.replace(/^@infragistics\//, "");
}

/** Bare packages or one subpath segment ("igniteui-webcomponents-grids/grids"); deeper paths are internals. */
export function isPublicModule(module: string): boolean {
  return module.split("/").length <= 2;
}

/**
 * Tallies named imports across example sources and keeps, per symbol, the module
 * it is most often imported from.
 */
export function collectObservedImports(
  sources: Iterable<string>,
  acceptModule: (module: string) => boolean,
): Record<string, ImportMapSymbol> {
  const counts = new Map<string, Map<string, number>>();
  for (const source of sources) {
    for (const { names, module: raw } of parseNamedImports(source)) {
      const module = normalizeModule(raw);
      if (!isPublicModule(module) || !acceptModule(module)) continue;
      for (const name of names) {
        const perModule = counts.get(name) ?? new Map<string, number>();
        perModule.set(module, (perModule.get(module) ?? 0) + 1);
        counts.set(name, perModule);
      }
    }
  }

  const symbols: Record<string, ImportMapSymbol> = {};
  for (const name of [...counts.keys()].sort()) {
    const [module] = [...counts.get(name)!.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0];
    symbols[name] = { module };
  }
  return symbols;
}

export function* walkSourceFiles(dir: string, extensions: string[]): Generator<string> {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const full = join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      yield* walkSourceFiles(full, extensions);
    } else if (extensions.some(ext => name.endsWith(ext)) && !name.endsWith(".d.ts")) {
      yield readFileSync(full, "utf-8");
    }
  }
}
