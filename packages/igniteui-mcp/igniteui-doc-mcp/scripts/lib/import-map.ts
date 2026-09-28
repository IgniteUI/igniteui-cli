import { existsSync, readdirSync, readFileSync, statSync } from "fs";
import { join, relative, resolve, sep } from "path";
import ts from "typescript";
import type { ImportMapSymbol } from "../../src/lib/import-resolver.js";

export type { ImportMapFile, ImportMapSymbol } from "../../src/lib/import-resolver.js";

const SKIP_DIRS = new Set(["node_modules", "schematics", "migrations", "test-utils", "cypress", "dist", ".git"]);

function toPosix(p: string): string {
  return p.split(sep).join("/");
}

/** Directories (relative to libRoot, posix) holding an ng-package.json, excluding libRoot itself. */
export function findEntryPoints(libRoot: string): string[] {
  const found: string[] = [];
  const walk = (dir: string) => {
    for (const name of readdirSync(dir)) {
      if (SKIP_DIRS.has(name)) continue;
      const full = join(dir, name);
      if (!statSync(full).isDirectory()) continue;
      if (existsSync(join(full, "ng-package.json"))) {
        found.push(toPosix(relative(libRoot, full)));
      }
      walk(full);
    }
  };
  walk(libRoot);
  return found.sort();
}

function entryFileFor(entryDir: string): string | undefined {
  try {
    const cfg = JSON.parse(readFileSync(join(entryDir, "ng-package.json"), "utf-8"));
    const custom = cfg?.lib?.entryFile;
    if (typeof custom === "string" && existsSync(join(entryDir, custom))) {
      return join(entryDir, custom);
    }
  } catch {
    // fall through to the conventional names
  }
  for (const candidate of ["index.ts", "src/public_api.ts", "public_api.ts", "src/index.ts"]) {
    if (existsSync(join(entryDir, candidate))) return join(entryDir, candidate);
  }
  return undefined;
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

/**
 * Maps every symbol exported by an Angular-style package's secondary entry points
 * to the entry point that owns it. A symbol re-exported by several entry points
 * belongs to the one whose directory contains its declaration (the most specific
 * one when directories nest); if none contains it, the first entry point that
 * exports it wins.
 */
export function collectEntryPointExports(libRoot: string, packageName: string): Record<string, ImportMapSymbol> {
  libRoot = resolve(libRoot);
  const entries = findEntryPoints(libRoot)
    .map(dir => ({ dir, file: entryFileFor(join(libRoot, dir)) }))
    .filter((e): e is { dir: string; file: string } => e.file !== undefined);

  const rootEntry = entryFileFor(libRoot);
  const options: ts.CompilerOptions = {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    experimentalDecorators: true,
    skipLibCheck: true,
    noEmit: true,
    baseUrl: libRoot,
    paths: {
      ...(rootEntry ? { [packageName]: [rootEntry] } : {}),
      [`${packageName}/*`]: [`${libRoot}/*`],
    },
  };
  const program = ts.createProgram(entries.map(e => e.file), options);
  const checker = program.getTypeChecker();

  const candidates = new Map<string, { entry: string; declFile?: string; kind?: string }[]>();
  for (const entry of entries) {
    const sf = program.getSourceFile(entry.file);
    const moduleSymbol = sf && checker.getSymbolAtLocation(sf);
    if (!moduleSymbol) continue;

    for (const exported of checker.getExportsOfModule(moduleSymbol)) {
      const name = exported.getName();
      if (name === "default") continue;
      const target = exported.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(exported) : exported;
      const declFile = target.declarations?.[0]?.getSourceFile().fileName;
      const list = candidates.get(name) ?? [];
      list.push({ entry: entry.dir, declFile: declFile && resolve(declFile), kind: symbolKind(target) });
      candidates.set(name, list);
    }
  }

  const symbols: Record<string, ImportMapSymbol> = {};
  for (const name of [...candidates.keys()].sort()) {
    const list = candidates.get(name)!;
    const owners = list.filter(c => c.declFile && c.declFile.startsWith(join(libRoot, c.entry) + sep));
    const chosen = owners.sort((a, b) => b.entry.length - a.entry.length)[0] ?? list[0];
    symbols[name] = {
      module: `${packageName}/${chosen.entry}`,
      ...(chosen.kind ? { kind: chosen.kind } : {}),
    };
  }
  return symbols;
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
