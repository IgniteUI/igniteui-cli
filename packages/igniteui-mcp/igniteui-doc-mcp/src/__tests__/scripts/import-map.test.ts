import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  collectEntryPointExports,
  collectObservedImports,
  findEntryPoints,
  isPublicModule,
  normalizeModule,
  parseNamedImports,
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

describe("collectEntryPointExports", () => {
  let root: string;

  const write = (rel: string, content: string) => {
    const full = join(root, rel);
    mkdirSync(dirname(full), { recursive: true });
    writeFileSync(full, content);
  };

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), "entry-points-"));
    write("ng-package.json", "{}");
    write("src/public_api.ts", `export * from 'pkg/core';\nexport * from 'pkg/grids/grid';\n`);

    write("core/ng-package.json", "{}");
    write("core/index.ts", `export * from './src/public_api';\n`);
    write("core/src/public_api.ts", `export * from './utils';\n`);
    write("core/src/utils.ts", [
      `export class CoreService {}`,
      `export interface IState { a: number }`,
      `export type Mode = 'a' | 'b';`,
      `export const Selection = { single: 'single' } as const;`,
      `export type Selection = (typeof Selection)[keyof typeof Selection];`,
      `export function helper() {}`,
      `export enum Direction { Up }`,
    ].join("\n"));

    write("grids/grid/ng-package.json", "{}");
    write("grids/grid/index.ts", `export * from './src/grid';\nexport { CoreService } from 'pkg/core';\n`);
    write("grids/grid/src/grid.ts", `export class GridComponent {}\nexport const GRID_DIRECTIVES = [GridComponent] as const;\n`);

    write("schematics/ng-package.json", "{}");
    write("schematics/index.ts", `export const Schematic = 1;\n`);
  });

  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
  });

  it("finds nested entry points, skipping the root and tooling dirs", () => {
    expect(findEntryPoints(root)).toEqual(["core", "grids/grid"]);
  });

  it("assigns each symbol to the entry point that declares it, with its kind", () => {
    expect(collectEntryPointExports(root, "pkg")).toEqual({
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
});
