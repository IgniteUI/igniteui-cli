# Incremental Processing Plan

## Problem

The compress step uses LLM API calls (~$0.01-0.05 per file, ~1-3s per file). Running it on all ~370 Angular files takes significant time and cost. When upstream repos (docfx, samples) get new commits, typically only a few docs change. We need to avoid reprocessing unchanged documents.

## Proposed Approach

Track the **prepared** docs (post-inject output) in the repository. After each inject run, compare the new output against the tracked version. Only files that actually changed get sent to the compress step. After successful compression, the tracked copy is updated.

## Directory Layout

```
igniteui-doc-mcp/
  docs_baseline/                    ← NEW: tracked in git (post-inject snapshots)
    angular/
      accordion.md                  ← copy of last-processed prepared doc
      button.md
      ...
  dist/                             ← gitignored (build artifacts)
    docs_processing/angular/        ← export output
    docs_prepeared/angular/         ← inject output (fresh)
    docs_final/angular/             ← compress output
    igniteui-docs.db                ← SQLite DB
```

**Size impact on repo**: ~8.6MB for Angular prepared docs. With 4 platforms: ~35MB total. Acceptable for a docs repo — these are text files that diff/compress well in git.

## Pipeline Flow (Updated)

```
export → inject → diff → compress (changed only) → update baseline → build-db
```

### Step-by-step:

1. **Export**: `dist/docs_processing/angular/` ← from docfx source
2. **Inject**: `dist/docs_prepeared/angular/` ← code samples injected
3. **Diff** (NEW): Compare `dist/docs_prepeared/angular/` against `docs_baseline/angular/`
   - Produces a list of changed/new/deleted files
   - Unchanged files are skipped
4. **Compress**: Only processes files from the diff list
   - Writes to `dist/docs_final/angular/` (only changed files)
   - Unchanged files are copied from existing `dist/docs_final/` (or left in place)
5. **Update baseline** (NEW): Copy successfully compressed prepared docs to `docs_baseline/angular/`
   - Only updates files that were successfully compressed
   - Deleted files are removed from baseline
6. **Build DB**: Reads all files from `dist/docs_final/angular/` into SQLite

## Implementation

### New Script: `scripts/diff-docs.ts`

Compares `dist/docs_prepeared/<framework>/` against `docs_baseline/<framework>/` and outputs a JSON manifest:

```typescript
interface DiffResult {
  framework: string;
  changed: string[];    // files with content differences
  added: string[];      // new files not in baseline
  deleted: string[];    // files in baseline but not in fresh output
  unchanged: string[];  // identical files (skipped)
}
```

**Comparison method**: Content hash (SHA-256) of each file after normalizing line endings to `\n`. This ensures consistent hashes across Windows (CRLF) and Linux (LF), regardless of git's `core.autocrlf` setting or `.gitattributes` rules.

```bash
npx tsx scripts/diff-docs.ts --framework angular
# Output: dist/diff-manifest.json
```

**Output example**:
```json
{
  "framework": "angular",
  "changed": ["grid.md", "button.md"],
  "added": ["new-component.md"],
  "deleted": ["deprecated-component.md"],
  "unchanged": ["accordion.md", "action-strip.md", "...348 more"]
}
```

### Modify: `scripts/compress-angular-docs.ts`

Add `--manifest` flag to accept the diff manifest:

```bash
npx tsx --env-file=.env scripts/compress-angular-docs.ts --manifest dist/diff-manifest.json
```

When `--manifest` is provided:
- Only process files listed in `changed` + `added`
- For `deleted` files: remove from `dist/docs_final/angular/` if present
- Skip `unchanged` files entirely
- When `--manifest` is NOT provided: process all files (current behavior, for full rebuild)

### New Script: `scripts/update-baseline.ts`

After successful compression, updates the baseline:

```bash
npx tsx scripts/update-baseline.ts --framework angular --manifest dist/diff-manifest.json
```

- Copies `changed` + `added` files from `dist/docs_prepeared/angular/` → `docs_baseline/angular/`
- Removes `deleted` files from `docs_baseline/angular/`
- Does NOT touch `unchanged` files

### Updated npm Scripts

```json
{
  "diff:angular": "npx tsx scripts/diff-docs.ts --framework angular",
  "update-baseline:angular": "npx tsx scripts/update-baseline.ts --framework angular --manifest dist/diff-manifest.json",
  "pipeline:angular": "npm run clear:build && npm run export:angular && npm run inject:angular && npm run diff:angular && npm run compress:angular -- --manifest dist/diff-manifest.json && npm run update-baseline:angular && npm run build:db -- --framework angular",
  "pipeline:angular:full": "npm run clear && npm run export:angular && npm run inject:angular && npm run compress:angular && npm run update-baseline:angular --full && npm run build:db -- --framework angular"
}
```

Note: `clear:build` should only clear `dist/docs_processing/` and `dist/docs_prepeared/` (working dirs), NOT `dist/docs_final/` (we need it for unchanged files) and NOT `dist/igniteui-docs.db`.

### First Run (Bootstrap)

When `docs_baseline/angular/` doesn't exist yet:
- `diff-docs.ts` treats ALL files as `added`
- Full compress runs (same as today)
- `update-baseline.ts` creates baseline dir and copies all prepared files

## Considerations

- **Accuracy**: Content hashing is deterministic. If inject output is byte-identical, the file is skipped. No false negatives.
- **Inject non-determinism**: The inject step is deterministic (it reads source code and inserts it). Same input → same output. Safe to hash.
- **Line endings**: `diff-docs.ts` normalizes all content to `\n` before hashing, so CRLF (Windows) vs LF (Linux) differences never cause false changes. The baseline files in git should use `.gitattributes` with `* text eol=lf` for the `docs_baseline/` directory to keep diffs clean.
- **Partial failures**: If compress fails mid-run, baseline is NOT updated for failed files. Next run will re-detect them as changed.
- **Force rebuild**: `pipeline:angular:full` skips diff and processes everything. Use after prompt changes or model upgrades.
- **Cross-platform**: `diff-docs.ts` and `update-baseline.ts` accept `--framework`, ready for React/Blazor/WebComponents.
- **Git diffs**: Since baseline files are tracked, `git diff` shows exactly what changed between processing runs — useful for review.
