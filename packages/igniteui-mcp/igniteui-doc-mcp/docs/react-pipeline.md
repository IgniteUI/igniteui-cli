# React Documentation Pipeline Implementation Plan

## Context

The Angular pipeline (export → inject → compress) is fully working. We now need a React pipeline. Unlike Angular (which has its own `igniteui-docfx` repo), React docs live in the shared `igniteui-xplat-docs` repo alongside Blazor and WebComponents. The xplat repo has its own gulp build that handles variable replacement, platform filtering, code fence filtering, grid template expansion, and API link resolution. The gulp build also converts backtick sample syntax into `<code-view>` HTML tags — the same format Angular uses — which means the inject step can follow the same pattern.

## Pipeline Overview

```
[xplat gulp build] → export:react → inject:react → [size check] → compress:react
```

| Step | What it does | Input | Output |
|------|-------------|-------|--------|
| Prerequisites | Run xplat gulp build | xplat source docs | `common/igniteui-xplat-docs/dist/React/en/components/` |
| Export | Flatten, add toc metadata | gulp build output | `dist/docs_processing/react/` |
| Inject | Replace `<code-view>` with sample source | exported docs + react examples submodule | `dist/docs_prepeared/react/` |
| Size Check | Report files >300KB, may need splitting | `dist/docs_prepeared/react/` | Log report + optional action |
| Compress | LLM compression with React-specific prompt | injected docs | `dist/docs_final/react/` |

## Step 0: Add Git Submodule

Add `igniteui-react-examples` under `react/`:

```bash
git submodule add https://github.com/IgniteUI/igniteui-react-examples.git react/igniteui-react-examples
```

Update `.gitmodules` accordingly. The sample files live at `react/igniteui-react-examples/samples/{path}/src/`.

## Step 1: `scripts/export-react-docs.ts`

**Purpose:** Run the xplat gulp build for React, then flatten and enrich the output.

**Flow:**
1. Run `npm run buildReact` inside `common/igniteui-xplat-docs/` (via `child_process.execSync`)
   - This produces fully processed `.md` files at `common/igniteui-xplat-docs/dist/React/en/components/`
   - Variables resolved, conditionals stripped, code fences filtered, API links resolved, grid templates expanded
   - Sample references converted to `<code-view>` tags with `iframe-src` and `github-src` attributes
2. Parse `common/igniteui-xplat-docs/docfx/en/components/toc.json`
   - Filter entries: include only those where `"React"` is NOT in the `exclude` array
   - Extract `name` (display name) and `premium` metadata per entry
   - Build a map of `href → { name, premium }`
3. Read built files from `common/igniteui-xplat-docs/dist/React/en/components/`
   - Match each file against the toc map
   - Flatten hierarchical paths to single-level names (e.g., `charts/types/area-chart.md` → `area-chart.md`, `grids/grid/editing.md` → `grid-editing.md`)
   - Handle naming collisions if any (prefix with parent directory)
4. For each file:
   - Inject `_tocName` and `_premium` into frontmatter (reuse `injectTocMetadata()` logic from Angular export)
   - Write to `dist/docs_processing/react/`

**Key differences from Angular export:**
- No template expansion needed (gulp build already does it)
- No `@@include`/`@@if` processing needed (gulp build already does it)
- No environment variable replacement needed (gulp build already does it)
- toc.json parsing instead of toc.yml (different format, `exclude` arrays instead of flat list)
- Flattening hierarchical output to flat filenames

**Files to create:** `scripts/export-react-docs.ts`

## Step 2: `scripts/inject-react-docs.ts`

**Purpose:** Replace `<code-view>` tags with actual React sample source code from `react/igniteui-react-examples`.

The xplat gulp build converts backtick samples into `<code-view>` tags:
```html
<code-view style="height: 600px" alt="React Pie Chart Overview"
     data-demos-base-url="{environment:demosBaseUrl}"
     iframe-src="{environment:demosBaseUrl}/charts/pie-chart/overview"
     github-src="charts/pie-chart/overview">
</code-view>
```

**Flow:**
1. Read files from `dist/docs_processing/react/`
2. For each `<code-view>` tag, extract `github-src` attribute (e.g., `charts/pie-chart/overview`)
3. Map to source directory: `react/igniteui-react-examples/samples/{github-src}/src/`
4. Read sample files from that directory:
   - `index.tsx` — main entry point (from `docConfig.json` `samplesGithubFile: "src/index.tsx"`)
   - Any `.tsx` files (component implementations)
   - Any `.css`/`.scss` files (styles)
5. Inline the source code as markdown code blocks (```tsx, ```css)
6. Replace the `<code-view>` tag with the inlined code
7. If source files not found, strip the `<code-view>` tag and log a warning
8. Write to `dist/docs_prepeared/react/`

**Key differences from Angular inject:**
- No route parsing needed (Angular uses `app.routes.ts` to map URLs to components)
- Uses `github-src` attribute directly to locate files (simpler than Angular's two strategies)
- Reads `.tsx` files instead of `.component.ts` + `.component.html` + `.component.scss`
- Single resolution strategy (file-based via `github-src`) instead of Angular's two (route-based + file-based)

**Files to create:** `scripts/inject-react-docs.ts`

## Step 2.5: Post-Inject Size Validation

**Purpose:** After injection, some files may become very large (>300KB) because sample code is inlined. Files this large are problematic for LLM compression — they may exceed context windows, produce poor results, or cost significantly more per file.

**Implementation (built into `inject-react-docs.ts` as a post-processing report):**

After all files are written to `dist/docs_prepeared/react/`, scan all output files and:
1. Report total file count and aggregate size
2. Flag any files exceeding 300KB with their sizes
3. For flagged files, report how many `<code-view>` tags were injected (sample injection is the main cause of bloat)

**If files exceed 300KB, we have several options to evaluate:**
- **Limit samples per file**: Only inject the first N samples, strip the rest (keeps structure but reduces code bulk)
- **Truncate sample code**: For each injected sample, only keep the main component file (`index.tsx`), skip supplementary files
- **Split large files**: Break into logical sub-documents (e.g., `grid-editing.md` split by section headers) — requires changes to the flatten step and toc mapping
- **Raise compress `--min-size`**: Skip these files from compression (they'd remain uncompressed, which is suboptimal)

The right approach depends on how many files exceed the threshold and by how much. The size report from the inject step will inform which strategy to use before proceeding to compression.

## Step 3: `scripts/compress-react-docs.ts`

**Purpose:** LLM-compress React docs with a React-specific system prompt.

**Approach:** Copy `compress-angular-docs.ts` and modify the system prompt:
- Change `Igx` prefix → `Igr` prefix
- Change examples: `IgxGridComponent` → `IgrGrid`, `IgxButtonDirective` → `IgrButton`
- Remove Angular suffixes (`Component`, `Directive`) — React components don't use them
- Update product name: "Ignite UI for Angular" → "Ignite UI for React"
- Update code language references: Angular uses `ts`/`html`/`scss` separately; React uses `tsx`
- Keep all generic rules (anti-hallucination, no-merge, data truncation, premium carry-through)

All CLI flags carry over unchanged: `--model`, `--api-base`, `--min-size`, `--dry-run`, `--delay`, `--resume-from`, `--only`.

**Files to create:** `scripts/compress-react-docs.ts`

## Step 4: npm Scripts in `package.json`

```json
{
  "build:xplat-react": "cd common/igniteui-xplat-docs && npm run buildReact",
  "export:react": "npx tsx scripts/export-react-docs.ts",
  "inject:react": "npx tsx scripts/inject-react-docs.ts",
  "compress:react": "npx tsx --env-file=.env scripts/compress-react-docs.ts",
  "validate:react": "npx tsx --env-file=.env scripts/validate-docs.ts --input ./dist/docs_final/react",
  "pipeline:react": "npm run clear:react && npm run build:xplat-react && npm run export:react && npm run inject:react && npm run compress:react"
}
```

Note: `build:xplat-react` runs the gulp build as a prerequisite. The `pipeline:react` command chains everything.

## Step 5: Update `progress.md`

Add a new entry under "Implemented" for the React pipeline.

## toc.json Parsing Details

The toc.json structure uses `exclude` arrays. An entry is included for React if:
- It has no `exclude` field, OR
- `"React"` is NOT in the `exclude` array

Entries can be nested (`items` array). For entries with `items`, both the parent and children need filtering. An entry with `header: true` is a section header (no content file).

The `href` field maps to a file path relative to `doc/en/components/`. Grid shared topics have special handling — the gulp build expands `_shared/` entries into per-grid-type files.

## Filename Flattening Strategy

The gulp build output preserves the directory hierarchy:
```
dist/React/en/components/
├── bullet-graph.md          → bullet-graph.md
├── charts/
│   ├── chart-overview.md    → chart-overview.md
│   └── types/
│       └── area-chart.md    → area-chart.md
├── grids/
│   ├── grid/
│   │   └── editing.md       → grid-editing.md
│   └── tree-grid/
│       └── editing.md       → tree-grid-editing.md
```

Rules:
- Top-level files: keep filename as-is
- Files in component-specific subdirectories (e.g., `grids/grid/`): prefix with directory name
- Files in category subdirectories (e.g., `charts/types/`): use just the filename (it's already descriptive)
- Handle collisions by adding parent directory prefix

## Verification

1. **Export step**: Run `npm run build:xplat-react && npm run export:react`, verify files appear in `dist/docs_processing/react/` with correct frontmatter (`_tocName`, `_premium`)
2. **Inject step**: Run `npm run inject:react`, verify `<code-view>` tags are replaced with inline TSX/CSS code blocks in `dist/docs_prepeared/react/`. Check the size report for files >300KB.
3. **Compress step**: Run `npm run compress:react -- --only <file>.md` on a single file, verify output has correct `Igr` prefix in frontmatter and React-appropriate content
4. **Full pipeline**: Run `npm run pipeline:react` end-to-end
5. **Validation**: Run `npm run validate:react` to score compressed output quality
6. **MCP server**: Temporarily point `src/index.ts` at `dist/docs_final/react/` instead of `react_compressed/` and verify `list_components`, `get_doc`, `search_docs` work correctly

## Critical Files

| File | Action |
|------|--------|
| `scripts/export-react-docs.ts` | Create |
| `scripts/inject-react-docs.ts` | Create |
| `scripts/compress-react-docs.ts` | Create |
| `package.json` | Add npm scripts |
| `.gitmodules` | Add react/igniteui-react-examples submodule |
| `docs/progress.md` | Update with React pipeline status |
| `CLAUDE.md` | Update project structure and pipeline docs |

## Reusable Code from Angular Pipeline

- `injectTocMetadata()` from `export-angular-docs.ts` — same logic, different toc format
- `validateStructure()` and `stripResponseWrapper()` from `compress-angular-docs.ts` — identical
- `compressWithLLM()` from `compress-angular-docs.ts` — identical except system prompt
- CLI argument parsing pattern from `compress-angular-docs.ts` — identical
- `<code-view>` regex from `inject-angular-docs.ts` — same tag format in gulp build output
- `readExampleFiles()` pattern from `inject-angular-docs.ts` — adapted for TSX files
