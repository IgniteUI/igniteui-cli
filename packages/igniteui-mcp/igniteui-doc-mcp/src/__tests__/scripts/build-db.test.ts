import { spawnSync } from "child_process";
import { createHash } from "crypto";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import { afterEach, describe, expect, it } from "vitest";

/**
 * Drives scripts/build-db.ts against a throwaway working directory. This is the
 * destructive path — it drops tables, deletes rows and republishes a committed
 * artifact — so the failure modes are exercised here rather than for the first
 * time during a release.
 */
const PKG_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..", "..");
const REPO_ROOT = resolve(PKG_ROOT, "..", "..", "..");
const TSX = join(REPO_ROOT, "node_modules", "tsx", "dist", "cli.mjs");
const BUILD_DB = join(PKG_ROOT, "scripts", "build-db.ts");
const FRAMEWORKS = ["angular", "react", "blazor", "webcomponents"];

const dirs: string[] = [];
afterEach(() => {
  while (dirs.length) rmSync(dirs.pop()!, { recursive: true, force: true });
});

interface DocSpec {
  file: string;
  prepared?: boolean;
  tocName?: string | null;
  groups?: string[];
}

function docsFor(framework: string): DocSpec[] {
  return [
    { file: `${framework}-a.md`, groups: ["Grids & Lists > Data Grid"] },
    { file: `${framework}-b.md`, groups: ["Layouts"] },
  ];
}

/** Lay out dist/docs_final, dist/docs_prepeared and dist/toc-index for a framework. */
function seedFramework(root: string, framework: string, specs: DocSpec[]): void {
  const finalDir = join(root, "dist", "docs_final", framework);
  const prepDir = join(root, "dist", "docs_prepeared", framework);
  // Replace, never merge — a leftover prepared doc from an earlier call would
  // mask exactly the missing-input cases these tests exist to cover.
  rmSync(finalDir, { recursive: true, force: true });
  rmSync(prepDir, { recursive: true, force: true });
  mkdirSync(finalDir, { recursive: true });
  mkdirSync(prepDir, { recursive: true });

  const records: unknown[] = [];
  let ord = 0;

  for (const spec of specs) {
    writeFileSync(
      join(finalDir, spec.file),
      `---\ncomponent: IgxThing\nkeywords: k\nsummary: Summary for ${spec.file}\n---\n\n# ${spec.file}\n`,
      "utf-8"
    );
    if (spec.prepared !== false) {
      const tocName = spec.tocName === undefined ? spec.file.replace(/\.md$/, "") : spec.tocName;
      writeFileSync(
        join(prepDir, spec.file),
        tocName === null ? `---\ncomponent: IgxThing\n---\n` : `---\n_tocName: ${tocName}\n---\n`,
        "utf-8"
      );
    }
    for (const groupKey of spec.groups ?? []) {
      const [section, label] = groupKey.includes(" > ") ? groupKey.split(" > ") : [groupKey, ""];
      records.push({
        file: spec.file,
        section,
        groupKey,
        groupLabel: label,
        path: `${groupKey} > ${spec.file}`,
        ord: ord++,
        landing: false,
      });
    }
  }

  const tocDir = join(root, "dist", "toc-index");
  mkdirSync(tocDir, { recursive: true });
  writeFileSync(join(tocDir, `${framework}.json`), `${JSON.stringify(records, null, 2)}\n`, "utf-8");
}

function makeRoot(overrides: Record<string, DocSpec[]> = {}): string {
  const root = mkdtempSync(join(tmpdir(), "build-db-"));
  dirs.push(root);
  for (const framework of FRAMEWORKS) {
    seedFramework(root, framework, overrides[framework] ?? docsFor(framework));
  }
  return root;
}

function run(root: string, args: string[] = []) {
  return spawnSync(process.execPath, [TSX, BUILD_DB, ...args], {
    cwd: root,
    encoding: "utf-8",
    env: { ...process.env, NO_COLOR: "1" },
  });
}

function hash(file: string): string {
  return createHash("sha256").update(readFileSync(file)).digest("hex");
}

function tmpResidue(root: string): string[] {
  const out: string[] = [];
  for (const dir of [join(root, "dist"), join(root, "db")]) {
    if (!existsSync(dir)) continue;
    for (const name of readdirSync(dir)) {
      if (name.endsWith(".tmp") || name.endsWith("-wal") || name.endsWith("-shm")) out.push(name);
    }
  }
  return out;
}

describe("build-db — happy path", () => {
  it("publishes to dist/ and db/ and leaves no residue", () => {
    const root = makeRoot();
    const result = run(root);

    expect(result.status, result.stderr).toBe(0);
    expect(existsSync(join(root, "dist", "igniteui-docs.db"))).toBe(true);
    expect(existsSync(join(root, "db", "igniteui-docs.db"))).toBe(true);
    expect(hash(join(root, "dist", "igniteui-docs.db"))).toBe(hash(join(root, "db", "igniteui-docs.db")));
    expect(tmpResidue(root)).toEqual([]);
  });

  it("rebuilds one framework incrementally, seeding from db/", () => {
    const root = makeRoot();
    expect(run(root).status).toBe(0);

    // Change one framework's docs and rebuild only it.
    seedFramework(root, "react", [
      ...docsFor("react"),
      { file: "react-c.md", groups: ["Layouts"] },
    ]);
    const result = run(root, ["--framework", "react"]);

    expect(result.status, result.stderr).toBe(0);
    expect(result.stdout).toContain("react: 3 docs inserted");
    expect(result.stdout).not.toContain("angular:");
    expect(tmpResidue(root)).toEqual([]);
  });
});

describe("build-db — full-rebuild preflight", () => {
  const cases: [string, (root: string) => void, RegExp][] = [
    [
      "a framework with no compressed docs",
      (root) => rmSync(join(root, "dist", "docs_final", "blazor"), { recursive: true, force: true }),
      /docs_final\/blazor/,
    ],
    [
      "a framework with no prepared docs",
      (root) => rmSync(join(root, "dist", "docs_prepeared", "react"), { recursive: true, force: true }),
      /docs_prepeared\/react/,
    ],
    [
      "a framework with no TOC sidecar",
      (root) => rmSync(join(root, "dist", "toc-index", "webcomponents.json"), { force: true }),
      /toc-index\/webcomponents\.json/,
    ],
  ];

  for (const [label, breakInputs, expected] of cases) {
    it(`aborts on ${label} and leaves the committed DB untouched`, () => {
      const root = makeRoot();
      expect(run(root).status).toBe(0); // publish a good committed DB first

      const before = hash(join(root, "db", "igniteui-docs.db"));
      breakInputs(root);
      const result = run(root);

      expect(result.status).not.toBe(0);
      expect(result.stderr).toMatch(/Preflight failed/);
      expect(result.stderr).toMatch(expected);
      expect(hash(join(root, "db", "igniteui-docs.db"))).toBe(before);
      expect(tmpResidue(root)).toEqual([]);
    });
  }
});

describe("build-db — validation gates", () => {
  it("rolls back and preserves the artifacts when a doc has no TOC group", () => {
    const root = makeRoot();
    expect(run(root).status).toBe(0);
    const before = hash(join(root, "db", "igniteui-docs.db"));
    const distBefore = hash(join(root, "dist", "igniteui-docs.db"));

    // A doc present in docs_final but absent from the sidecar.
    seedFramework(root, "angular", [
      ...docsFor("angular"),
      { file: "angular-orphan.md", groups: [] },
    ]);

    const result = run(root, ["--framework", "angular"]);
    expect(result.status).not.toBe(0);
    expect(result.stderr).toMatch(/no TOC group/);
    expect(result.stderr).toContain("angular/angular-orphan.md");
    expect(hash(join(root, "db", "igniteui-docs.db"))).toBe(before);
    expect(hash(join(root, "dist", "igniteui-docs.db"))).toBe(distBefore);
    expect(tmpResidue(root)).toEqual([]);
  });

  it("rolls back on a NULL toc_name rather than warning past it", () => {
    const root = makeRoot();
    expect(run(root).status).toBe(0);
    const before = hash(join(root, "db", "igniteui-docs.db"));

    seedFramework(root, "blazor", [
      { file: "blazor-a.md", groups: ["Layouts"], tocName: null },
      { file: "blazor-b.md", groups: ["Layouts"] },
    ]);

    const result = run(root, ["--framework", "blazor"]);
    expect(result.status).not.toBe(0);
    expect(result.stderr).toMatch(/NULL toc_name/);
    expect(hash(join(root, "db", "igniteui-docs.db"))).toBe(before);
  });

  it("rejects a summary-less DB under --release but accepts it without", () => {
    const root = makeRoot();
    expect(run(root).status).toBe(0);

    const released = run(root, ["--release"]);
    expect(released.status).not.toBe(0);
    expect(released.stderr).toMatch(/no summary/);
  });

  it("passes --release once every group has a summary", () => {
    const root = makeRoot();
    expect(run(root).status).toBe(0);

    const summaryDir = join(root, "data", "group-summaries");
    mkdirSync(summaryDir, { recursive: true });
    for (const framework of FRAMEWORKS) {
      writeFileSync(
        join(summaryDir, `${framework}.json`),
        JSON.stringify([
          { groupKey: "Grids & Lists > Data Grid", summary: "The data grid." },
          { groupKey: "Layouts", summary: "Layout components." },
        ]),
        "utf-8"
      );
    }

    const result = run(root, ["--release"]);
    expect(result.status, result.stderr).toBe(0);
    expect(result.stdout).toContain("Release gates passed.");
  });

  it("warns about a cached summary for a group that no longer exists", () => {
    const root = makeRoot();
    const summaryDir = join(root, "data", "group-summaries");
    mkdirSync(summaryDir, { recursive: true });
    writeFileSync(
      join(summaryDir, "angular.json"),
      JSON.stringify([{ groupKey: "Gone > Group", summary: "Stale." }]),
      "utf-8"
    );

    const result = run(root, ["--framework", "angular"]);
    expect(result.status, result.stderr).toBe(0);
    expect(result.stderr + result.stdout).toMatch(/unknown group "Gone > Group"/);
  });
});

describe("build-db — sidecar ingestion", () => {
  it("keeps a cross-listed doc in both groups and counts it once per group", () => {
    const root = makeRoot({
      angular: [
        { file: "angular-a.md", groups: ["Grids & Lists > Spreadsheet", "Frameworks > Excel Library"] },
        { file: "angular-b.md", groups: ["Layouts"] },
      ],
    });
    expect(run(root).status).toBe(0);

    const out = run(root, ["--framework", "angular"]);
    expect(out.status, out.stderr).toBe(0);
    expect(out.stdout).toContain("angular: 3 TOC membership(s) inserted");
    expect(out.stdout).toContain("angular: 3 group(s)");
  });

  it("warns about a sidecar record with no matching doc", () => {
    const root = makeRoot();
    const sidecar = join(root, "dist", "toc-index", "react.json");
    const records = JSON.parse(readFileSync(sidecar, "utf-8"));
    records.push({
      file: "deleted.md",
      section: "Layouts",
      groupKey: "Layouts",
      groupLabel: "",
      path: "Layouts > Deleted",
      ord: 99,
      landing: false,
    });
    writeFileSync(sidecar, JSON.stringify(records), "utf-8");

    const result = run(root, ["--framework", "react"]);
    expect(result.status, result.stderr).toBe(0);
    expect(result.stdout + result.stderr).toMatch(/1 record\(s\) with no matching doc/);
  });
});

describe("build-db — publication", () => {
  it("copies to the backend path when it exists", () => {
    const root = makeRoot();
    const backend = join(root, "..", "docs-backend", "docs-backend");
    mkdirSync(backend, { recursive: true });
    dirs.push(resolve(root, "..", "docs-backend"));

    const result = run(root);
    expect(result.status, result.stderr).toBe(0);
    expect(existsSync(join(backend, "igniteui-docs.db"))).toBe(true);
    expect(hash(join(backend, "igniteui-docs.db"))).toBe(hash(join(root, "db", "igniteui-docs.db")));
  });

  it("leaves every published artifact untouched when validation fails after staging", () => {
    const root = makeRoot();
    expect(run(root).status).toBe(0);

    const backup = join(root, "backup");
    mkdirSync(backup, { recursive: true });
    cpSync(join(root, "db", "igniteui-docs.db"), join(backup, "db.db"));
    cpSync(join(root, "dist", "igniteui-docs.db"), join(backup, "dist.db"));

    seedFramework(root, "webcomponents", [
      { file: "webcomponents-a.md", groups: ["Layouts"], prepared: false },
      { file: "webcomponents-b.md", groups: ["Layouts"] },
    ]);

    const result = run(root, ["--framework", "webcomponents"]);
    expect(result.status).not.toBe(0);
    expect(hash(join(root, "db", "igniteui-docs.db"))).toBe(hash(join(backup, "db.db")));
    expect(hash(join(root, "dist", "igniteui-docs.db"))).toBe(hash(join(backup, "dist.db")));
    expect(tmpResidue(root)).toEqual([]);
  });
});
