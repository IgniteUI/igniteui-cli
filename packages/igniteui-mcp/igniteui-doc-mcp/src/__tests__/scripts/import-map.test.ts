import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";
import { gzipSync } from "zlib";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  collectObservedImports,
  collectPublishedExports,
  extractTarball,
  isPublicModule,
  normalizeModule,
  parseNamedImports,
  readPublishedPackage,
  verifyPublishedImports,
} from "../../../scripts/lib/import-map.js";

describe("parseNamedImports", () => {
  it("parses named, aliased, type-only and multi-line imports", () => {
    const source = [
      `import { IgxGridComponent, IgxColumnComponent as Col } from 'igniteui-angular/grids/grid';`,
      `import type { IGridState } from "igniteui-angular/grids/core";`,
      `import {`,
      `  type GridSelectionMode,`,
      `  IgxPaginatorComponent, // trailing comment`,
      `} from 'igniteui-angular/paginator';`,
      `import Default from 'igniteui-angular';`,
      `import * as ns from 'igniteui-angular';`,
    ].join("\n");

    expect(parseNamedImports(source)).toEqual([
      { names: ["IgxGridComponent", "IgxColumnComponent"], module: "igniteui-angular/grids/grid" },
      { names: ["IGridState"], module: "igniteui-angular/grids/core" },
      { names: ["GridSelectionMode", "IgxPaginatorComponent"], module: "igniteui-angular/paginator" },
    ]);
  });
});

describe("module helpers", () => {
  it("normalizes the licensed scope away", () => {
    expect(normalizeModule("@infragistics/igniteui-angular/grids/grid")).toBe("igniteui-angular/grids/grid");
  });

  it("treats deep paths as internal", () => {
    expect(isPublicModule("igniteui-react")).toBe(true);
    expect(isPublicModule("igniteui-webcomponents-grids/grids")).toBe(true);
    expect(isPublicModule("igniteui-webcomponents/components/radio/radio")).toBe(false);
  });
});

describe("collectObservedImports", () => {
  it("keeps the most frequent public module per symbol", () => {
    const sources = [
      `import { IgrGrid } from 'igniteui-react-grids';`,
      `import { IgrGrid } from '@infragistics/igniteui-react-grids';`,
      `import { IgrGrid } from 'igniteui-react';`,
      `import { IgrRadio } from 'igniteui-webcomponents/components/radio/radio';`,
      `import { Helper } from './helper';`,
    ];
    expect(collectObservedImports(sources, m => m.startsWith("igniteui-"))).toEqual({
      IgrGrid: { module: "igniteui-react-grids" },
    });
  });
});

let root: string;

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), "import-map-"));
});

afterEach(() => {
  rmSync(root, { recursive: true, force: true });
});

function write(rel: string, content: string) {
  const full = join(root, rel);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content);
}

/** Minimal ustar archive; a long path is carried in a pax header like npm does. */
function tarball(files: Record<string, string>): Buffer {
  const blocks: Buffer[] = [];
  const header = (name: string, size: number, type: string) => {
    const h = Buffer.alloc(512);
    h.write(name.slice(0, 100), 0);
    h.write(size.toString(8).padStart(11, "0"), 124);
    h.write(type, 156);
    h.write("ustar", 257);
    return h;
  };
  const pad = (b: Buffer) => Buffer.concat([b, Buffer.alloc((512 - (b.length % 512)) % 512)]);
  for (const [name, content] of Object.entries(files)) {
    const body = Buffer.from(content);
    if (name.length > 100) {
      const record = ` path=${name}\n`;
      const pax = Buffer.from(`${record.length + String(record.length).length}${record}`);
      blocks.push(header("PaxHeader", pax.length, "x"), pad(pax));
    }
    blocks.push(header(name, body.length, "0"), pad(body));
  }
  blocks.push(Buffer.alloc(1024));
  return gzipSync(Buffer.concat(blocks));
}

describe("extractTarball", () => {
  it("extracts the included files, following pax long paths", () => {
    const long = `package/types/${"x".repeat(120)}.d.ts`;
    extractTarball(
      tarball({ "package/package.json": "{}", "package/fesm2022/a.mjs": "js", [long]: "declare const x: 1;" }),
      root,
      p => p === "package/package.json" || p.endsWith(".d.ts"),
    );
    expect(readFileSync(join(root, "package/package.json"), "utf-8")).toBe("{}");
    expect(readFileSync(join(root, long), "utf-8")).toBe("declare const x: 1;");
    expect(existsSync(join(root, "package/fesm2022/a.mjs"))).toBe(false);
  });

  it("refuses paths that escape the destination", () => {
    expect(() => extractTarball(tarball({ "../evil.d.ts": "x" }), join(root, "out"), () => true)).toThrow(/Refusing/);
  });
});

describe("published package exports", () => {
  beforeEach(() => {
    write("package.json", JSON.stringify({
      name: "pkg",
      version: "1.2.3",
      exports: {
        "./package.json": { default: "./package.json" },
        ".": { types: "./types/pkg.d.ts", default: "./fesm2022/pkg.mjs" },
        "./core": { types: "./types/pkg-core.d.ts", default: "./fesm2022/pkg-core.mjs" },
        "./grids/grid": { types: "./types/pkg-grids-grid.d.ts", default: "./fesm2022/pkg-grids-grid.mjs" },
        "./schematics/*": { default: "./schematics/*" },
        "./theming": { sass: "./lib/_index.scss" },
      },
    }));
    write("types/pkg.d.ts", `export * from 'pkg/core';\nexport * from 'pkg/grids/grid';\n`);
    write("types/pkg-core.d.ts", [
      `declare class CoreService {}`,
      `interface IState { a: number }`,
      `interface IInternal { b: number }`,
      `type Mode = 'a' | 'b';`,
      `declare const Selection: { readonly single: 'single' };`,
      `type Selection = (typeof Selection)[keyof typeof Selection];`,
      `declare function helper(): void;`,
      `declare enum Direction { Up = 0 }`,
      `declare const ɵPrivate: 1;`,
      `export { CoreService, Direction, helper, Mode, Selection, ɵPrivate };`,
      `export type { IState };`,
    ].join("\n"));
    write("types/pkg-grids-grid.d.ts", [
      `import { CoreService, IInternal } from 'pkg/core';`,
      `declare class GridComponent { s: CoreService; i: IInternal }`,
      `declare const GRID_DIRECTIVES: readonly [typeof GridComponent];`,
      `export { CoreService } from 'pkg/core';`,
      `export { GridComponent, GRID_DIRECTIVES };`,
    ].join("\n"));
  });

  it("reads typed entry points from the exports map, skipping the root, wildcards and Sass", () => {
    const pkg = readPublishedPackage(root);
    expect(pkg.name).toBe("pkg");
    expect(pkg.version).toBe("1.2.3");
    expect(pkg.rootTypes).toMatch(/pkg\.d\.ts$/);
    expect(pkg.entries.map(e => e.module)).toEqual(["pkg/core", "pkg/grids/grid"]);
  });

  it("assigns each symbol to the entry point whose typings declare it", () => {
    expect(collectPublishedExports(readPublishedPackage(root))).toEqual({
      CoreService: { module: "pkg/core", kind: "class" },
      Direction: { module: "pkg/core", kind: "enum" },
      GRID_DIRECTIVES: { module: "pkg/grids/grid", kind: "const" },
      GridComponent: { module: "pkg/grids/grid", kind: "class" },
      IState: { module: "pkg/core", kind: "interface" },
      Mode: { module: "pkg/core", kind: "type" },
      Selection: { module: "pkg/core", kind: "const" },
      helper: { module: "pkg/core", kind: "function" },
    });
  });

  it("verifies the collected map without failures", () => {
    const pkg = readPublishedPackage(root);
    expect(verifyPublishedImports(pkg, collectPublishedExports(pkg))).toEqual([]);
  });

  it("reports imports that do not compile: wrong entry point, not exported, or unknown", () => {
    const pkg = readPublishedPackage(root);
    const failures = verifyPublishedImports(pkg, {
      GridComponent: { module: "pkg/core" },
      IInternal: { module: "pkg/core" },
      Missing: { module: "pkg/grids/grid" },
      CoreService: { module: "pkg/grids/grid" },
      Unrelated: { module: "other-package" },
    });
    expect(failures.map(f => `${f.symbol}@${f.module}`).sort()).toEqual([
      "GridComponent@pkg/core",
      "IInternal@pkg/core",
      "Missing@pkg/grids/grid",
    ]);
  });
});
