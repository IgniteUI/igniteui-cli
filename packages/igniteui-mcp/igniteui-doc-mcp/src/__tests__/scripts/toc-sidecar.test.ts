import { mkdtempSync, readFileSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  TocSidecar,
  resolveUniqueName,
  type TocSidecarRecord,
} from "../../../scripts/lib/toc-sidecar.js";
import { walkTocYaml, type TocEntry, type TocNode } from "../../../scripts/lib/toc-index.js";

const TOC: TocNode[] = [
  { name: "Grids & Lists", header: true },
  { name: "Excel Utility", href: "excel-utility.md" },
  { name: "Frameworks", header: true },
  { name: "Excel Library", items: [{ name: "Excel Utility", href: "excel-utility.md" }] },
];

const dirs: string[] = [];

function tempRoot(): string {
  const dir = mkdtempSync(join(tmpdir(), "toc-sidecar-"));
  dirs.push(dir);
  return dir;
}

afterEach(() => {
  while (dirs.length) rmSync(dirs.pop()!, { recursive: true, force: true });
  vi.restoreAllMocks();
});

function read(root: string, framework: string): TocSidecarRecord[] {
  return JSON.parse(readFileSync(join(root, "dist", "toc-index", `${framework}.json`), "utf-8"));
}

describe("TocSidecar", () => {
  it("records a cross-listed href twice against one file", () => {
    const root = tempRoot();
    const sidecar = new TocSidecar("angular", root);
    const written = new Set<string>();

    for (const entry of walkTocYaml(TOC)) {
      const file = sidecar.nameFor(entry.href) ?? "excel-utility.md";
      written.add(file);
      sidecar.record(entry, file);
    }
    sidecar.write(written);

    const records = read(root, "angular");
    expect(records).toHaveLength(2);
    expect(new Set(records.map((r) => r.file)).size).toBe(1);
    expect(records.map((r) => r.groupKey)).toEqual([
      "Grids & Lists",
      "Frameworks > Excel Library",
    ]);
    expect(records.map((r) => r.path)).toEqual([
      "Grids & Lists > Excel Utility",
      "Frameworks > Excel Library > Excel Utility",
    ]);
  });

  it("returns the cached name for an href it has already seen", () => {
    const sidecar = new TocSidecar("react", tempRoot());
    const [first] = walkTocYaml(TOC);
    expect(sidecar.nameFor(first.href)).toBeUndefined();
    sidecar.record(first, "excel-utility.md");
    expect(sidecar.nameFor(first.href)).toBe("excel-utility.md");
  });

  it("replaces the previous sidecar rather than merging into it", () => {
    const root = tempRoot();
    const stale: TocEntry = walkTocYaml(TOC)[0];

    const first = new TocSidecar("blazor", root);
    first.record(stale, "excel-utility.md");
    first.record({ ...stale, href: "gone.md", ord: 1 }, "gone.md");
    first.write(new Set(["excel-utility.md", "gone.md"]));
    expect(read(root, "blazor")).toHaveLength(2);

    // A later run where `gone.md` has been deleted from the TOC.
    const second = new TocSidecar("blazor", root);
    second.record(stale, "excel-utility.md");
    second.write(new Set(["excel-utility.md"]));

    const records = read(root, "blazor");
    expect(records).toHaveLength(1);
    expect(records[0].file).toBe("excel-utility.md");
  });

  it("rejects a record set that does not match the files written", () => {
    const sidecar = new TocSidecar("angular", tempRoot());
    sidecar.record(walkTocYaml(TOC)[0], "excel-utility.md");
    expect(() => sidecar.write(new Set(["excel-utility.md", "extra.md"]))).toThrow(
      /sidecar mismatch/
    );
  });

  it("leaves the previous sidecar intact when the write fails", () => {
    const root = tempRoot();
    const entry = walkTocYaml(TOC)[0];

    const first = new TocSidecar("angular", root);
    first.record(entry, "excel-utility.md");
    first.write(new Set(["excel-utility.md"]));
    const before = readFileSync(join(root, "dist", "toc-index", "angular.json"), "utf-8");

    const second = new TocSidecar("angular", root);
    second.record(entry, "excel-utility.md");
    second.record({ ...entry, href: "other.md", ord: 1 }, "other.md");
    expect(() => second.write(new Set(["excel-utility.md"]))).toThrow();

    expect(readFileSync(join(root, "dist", "toc-index", "angular.json"), "utf-8")).toBe(before);
  });
});

describe("resolveUniqueName", () => {
  it("keeps the flattened name when it is free", () => {
    expect(resolveUniqueName("editing.md", "grids/grid/editing.md", new Map())).toBe("editing.md");
  });

  it("falls back to parent-file, then to the full href", () => {
    const used = new Map([["editing.md", "charts/editing.md"]]);
    expect(resolveUniqueName("editing.md", "grids/grid/editing.md", used)).toBe("grid-editing.md");

    used.set("grid-editing.md", "x");
    expect(resolveUniqueName("editing.md", "grids/grid/editing.md", used)).toBe(
      "grids-grid-editing.md"
    );
  });

  it("keeps looking when every fixed candidate is taken, instead of overwriting", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    const used = new Map([
      ["editing.md", "a"],
      ["grid-editing.md", "b"],
      ["grids-grid-editing.md", "c"],
    ]);
    const name = resolveUniqueName("editing.md", "grids/grid/editing.md", used);
    expect(name).toBe("editing-2.md");
    expect(used.has(name)).toBe(false);
  });

  it("gives distinct names to two different hrefs that flatten alike", () => {
    const used = new Map<string, string>();
    const first = resolveUniqueName("overview.md", "charts/overview.md", used);
    used.set(first, "charts/overview.md");
    const second = resolveUniqueName("overview.md", "maps/overview.md", used);
    expect(first).toBe("overview.md");
    expect(second).toBe("maps-overview.md");
  });
});
