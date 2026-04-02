# Blazor Documentation Pipeline — Implementation Plan

## Context

The project has working Angular, React, and WebComponents documentation pipelines (export → inject → compress). Blazor is the last remaining platform. Like React and WebComponents, Blazor uses the shared xplat build system (`igniteui-xplat-docs`), the same `toc.json` with `exclude` arrays, and the same flattening logic. The differences are: `Igb` prefix (no suffix), `.razor`/`.razor.cs`/`.razor.css` sample files, `App.razor` entry file, and a new submodule (`igniteui-blazor-examples`).

## Required Reading Before Implementation

Read these files in order before writing any code:

1. **`docs/knowledgebase.md`** — Cross-platform lessons learned (18 entries). Issues #1 (prefix), #2 (hallucination), #3 (code block structure), #4 (toc.json), #5 (metadata), #17 (data trimming), #18 (flattening) all apply.
2. **`scripts/export-react-docs.ts`** — Template for the export script (toc.json parsing, flattening, metadata injection). The Blazor export is structurally identical.
3. **`scripts/inject-react-docs.ts`** — Template for the inject script (code-view replacement, data array trimming, size report). Blazor needs different file type handling.
4. **`scripts/compress-react-docs.ts`** — Template for the compress script (LLM compression, token counting, CSV log). Blazor needs a different system prompt.
5. **`common/igniteui-xplat-docs/docConfig.json`** — Blazor-specific configuration: `samplesGithubFile: "App.razor"`, sample paths, package names, replacements.
6. **`common/igniteui-xplat-docs/package.json`** — Build commands: `buildBlazor` runs `tsc && gulp buildOutputBlazor`.
7. **`common/igniteui-xplat-docs/docfx/en/components/toc.json`** — Verify Blazor entries by checking `exclude` arrays don't contain `"Blazor"`.

## Files to Create

### 1. `scripts/export-blazor-docs.ts`

Clone of `scripts/export-react-docs.ts` with these changes:
- `BUILT_DOCS` → `dist/Blazor/en/components` (instead of `dist/React/...`)
- `OUTPUT_DIR` → `dist/docs_processing/blazor`
- `parseTocJson` filter: `excludes.includes("Blazor")` instead of `"React"`
- Build command: `npm run buildBlazor` instead of `buildReact`
- All log messages: "Blazor" instead of "React"

### 2. `scripts/inject-blazor-docs.ts`

Clone of `scripts/inject-react-docs.ts` with these changes:
- `EXAMPLES_ROOT` → `join(ROOT, "blazor", "igniteui-blazor-examples", "samples")`
- `DOCS_ROOT` → `dist/docs_processing/blazor`
- `OUTPUT_ROOT` → `dist/docs_prepeared/blazor`
- `readReactSampleFiles` → `readBlazorSampleFiles`: read `.razor`, `.razor.cs`, `.cs`, `.razor.css`, `.css` files
  - File type mapping: `.razor` → `razor`, `.razor.cs` / `.cs` → `csharp`, `.razor.css` / `.css` → `css`
  - Skip files: `_Imports.razor`, `wwwroot/` contents, `.csproj`, `Program.cs`
- `trimDataArrays` regex: match `` ```csharp `` and `` ```razor `` code blocks (instead of `tsx`/`typescript`)
- Size report: adjust code block language matching (`razor`/`csharp` instead of `tsx`)
- Log messages: "Blazor" instead of "React"

### 3. `scripts/compress-blazor-docs.ts`

Clone of `scripts/compress-react-docs.ts` with these changes:
- `INPUT_DIR` → `dist/docs_prepeared/blazor`
- `OUTPUT_DIR` → `dist/docs_final/blazor`
- `LOG_FILE` → `dist/docs_final/blazor/_compression_log.csv`
- System prompt changes:
  - "Ignite UI for Blazor" instead of "Ignite UI for React"
  - `Igb` prefix, no suffix (e.g., `IgbGrid`, `IgbButton`, `IgbCombo`, `IgbDatePicker`)
  - Code format: Razor markup + C# (not TSX/JSX)
  - Keep Razor templates and C# code-behind as separate blocks
  - Comment syntax: use `@* comment *@` in Razor blocks, `// comment` in C# blocks
  - Adjust all references from TSX/JSX/React to Razor/C#/Blazor
- Error message: "Run 'npm run inject:blazor' first"

## Files to Modify

### 4. `package.json` — add npm scripts

```json
"build:xplat-blazor": "cd common/igniteui-xplat-docs && npm run buildBlazor",
"export:blazor": "npx tsx scripts/export-blazor-docs.ts --skip-build",
"inject:blazor": "npx tsx scripts/inject-blazor-docs.ts",
"compress:blazor": "npx tsx --env-file=.env scripts/compress-blazor-docs.ts",
"validate:blazor": "npx tsx --env-file=.env scripts/validate-docs.ts --input ./dist/docs_final/blazor",
"pipeline:blazor": "npm run clear:blazor && npm run build:xplat-blazor && npm run export:blazor && npm run inject:blazor && npm run compress:blazor"
```

Note: `clear:blazor` already exists in package.json.

### 5. `.gitmodules` (at repo root)

Add entry for the Blazor examples submodule:
```
[submodule "igniteui-doc-mcp/blazor/igniteui-blazor-examples"]
    path = igniteui-doc-mcp/blazor/igniteui-blazor-examples
    url = https://github.com/IgniteUI/igniteui-blazor-examples.git
```

### 6. `docs/progress.md`

Move "Other Platform Pipelines (Blazor)" from "Not Implemented" to "Implemented".

### 7. `CLAUDE.md`

Add Blazor pipeline documentation section (parallel to the React/WC sections). Add `blazor/` to project structure.

### 8. `README.md` (igniteui-doc-mcp)

Add Blazor steps to pipeline commands and directory structure.

### 9. `README.md` (root)

Add Blazor submodule to git submodules list.

## Submodule Setup

```bash
git submodule add https://github.com/IgniteUI/igniteui-blazor-examples.git igniteui-doc-mcp/blazor/igniteui-blazor-examples
```

## Key Blazor-Specific Details

| Aspect | React | WebComponents | Blazor |
|--------|-------|---------------|--------|
| Prefix | `Igr` | `Igc` | `Igb` |
| Suffix | None (`IgrGrid`) | `Component` (`IgcGridComponent`) | None (`IgbGrid`) |
| Sample entry | `index.tsx` | `index.html` | `App.razor` |
| Sample files | `.tsx`, `.ts`, `.css` | `.html`, `.ts`, `.css` | `.razor`, `.razor.cs`, `.css` |
| Code block langs | `tsx`, `typescript`, `css` | `html`, `typescript`, `css` | `razor`, `csharp`, `css` |
| Comment syntax | `{/* */}` (JSX), `//` (TS) | `<!-- -->` (HTML), `//` (TS) | `@* *@` (Razor), `//` (C#) |
| Build command | `buildReact` | `buildWC` | `buildBlazor` |
| toc.json exclude | `"React"` | `"WebComponents"` | `"Blazor"` |
| Built output dir | `dist/React/en/components` | `dist/WebComponents/en/components` | `dist/Blazor/en/components` |
| Examples repo | `igniteui-react-examples` | `igniteui-wc-examples` | `igniteui-blazor-examples` |
| Package | npm packages | npm packages | `IgniteUI.Blazor` (NuGet) |

## Verification

1. **Build xplat**: `npm run build:xplat-blazor` — should produce files under `common/igniteui-xplat-docs/dist/Blazor/`
2. **Export**: `npm run export:blazor` — should produce flattened `.md` files in `dist/docs_processing/blazor/`
3. **Inject**: `npm run inject:blazor` — should produce docs with inlined sample code in `dist/docs_prepeared/blazor/`, no files >300KB
4. **Compress** (dry run): `npm run compress:blazor -- --dry-run` — verify file count and sizes
5. **Full pipeline**: `npm run pipeline:blazor`
6. **Validate**: `npm run validate:blazor`
