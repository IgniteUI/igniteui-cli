import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { expectedPath, fixtureNames, loadFixture } from "../../../scripts/lib/list-fixtures.js";
import { renderFixture } from "./list-fixtures.js";

/**
 * The .NET backend renders the same fixtures through its own port of the
 * renderer and compares against the same `expected.txt`, so a change to either
 * implementation that is not mirrored in the other fails here or there.
 *
 * Regenerate after a deliberate format change:
 *   UPDATE_LIST_FIXTURES=1 npx vitest run src/__tests__/shared
 */
const UPDATE = process.env.UPDATE_LIST_FIXTURES === "1";

let dir: string;
beforeAll(() => {
  dir = mkdtempSync(join(tmpdir(), "list-fixtures-"));
});
afterAll(() => rmSync(dir, { recursive: true, force: true }));

describe("shared list_components fixtures", () => {
  const names = fixtureNames();

  it("has fixtures to run", () => {
    expect(names.length).toBeGreaterThan(0);
  });

  for (const name of names) {
    it(`renders ${name} exactly as recorded`, async () => {
      const fixture = loadFixture(name);
      const actual = await renderFixture(fixture, join(dir, `${name}.db`));
      const file = expectedPath(name);

      if (UPDATE || !existsSync(file)) {
        writeFileSync(file, actual, "utf-8");
      }

      // Ordinal comparison, no line-ending normalisation — that is what makes
      // drift between the TS and C# renderers fail loudly.
      expect(actual).toBe(readFileSync(file, "utf-8"));
    });
  }
});
