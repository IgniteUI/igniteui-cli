# WebComponents Documentation Pipeline — Implementation Plan

## Context

The project has working Angular and React documentation pipelines (export → inject → compress). WebComponents is listed as "Not started" in progress.md. The WC pipeline is structurally identical to React — both use the shared xplat build system (`igniteui-xplat-docs`), the same `toc.json` with `exclude` arrays, and the same flattening logic. The differences are well-defined: `Igc` prefix (with `Component` suffix), `index.html` entry file, `.ts/.html/.css` sample files (not `.tsx`), and a new submodule (`igniteui-wc-examples`).

## Files to Create

### 1. `scripts/export-wc-docs.ts`
Clone of `scripts/export-react-docs.ts` with these changes:
- `BUILT_DOCS` → `dist/WebComponents/en/components` (instead of `dist/React/...`)
- `OUTPUT_DIR` → `dist/docs_processing/webcomponents`
- `parseTocJson` filter: `excludes.includes("WebComponents")` instead of `"React"`
- Build command: `npm run buildWC` instead of `buildReact`
- All log messages: "WebComponents" instead of "React"

### 2. `scripts/inject-wc-docs.ts`
Clone of `scripts/inject-react-docs.ts` with these changes:
- `EXAMPLES_ROOT` → `join(ROOT, "webcomponents", "igniteui-wc-examples", "samples")`
- `DOCS_ROOT` → `dist/docs_processing/webcomponents`
- `OUTPUT_ROOT` → `dist/docs_prepeared/webcomponents`
- `readReactSampleFiles` → `readWcSampleFiles`: read `index.html`, `.ts`, `.css` files (not `.tsx`)
  - File type mapping: `.html` → `html`, `.ts` → `typescript`, `.css` → `css`
  - Skip files: adjust skip list for WC (no `react-app-env.d.ts`, etc.)
- Size report: adjust code block language matching (`html`/`typescript` instead of `tsx`)
- Log messages: "WebComponents" instead of "React"

### 3. `scripts/compress-wc-docs.ts`
Clone of `scripts/compress-react-docs.ts` with these changes:
- `INPUT_DIR` → `dist/docs_prepeared/webcomponents`
- `OUTPUT_DIR` → `dist/docs_final/webcomponents`
- System prompt changes:
  - "Ignite UI for Web Components" instead of "Ignite UI for React"
  - `Igc` prefix with `Component` suffix (e.g., `IgcGridComponent`, `IgcButtonComponent`)
  - Code format: HTML + TypeScript (not TSX/JSX)
  - Keep HTML templates and TypeScript code as separate blocks
  - Comment syntax: use `<!-- -->` in HTML blocks, `// comment` in TS blocks
  - Adjust all references from TSX/JSX/React to HTML/TS/WebComponents
- Error message: "Run 'npm run inject:webcomponents' first"

## Files to Modify

### 4. `package.json` — add npm scripts
```json
"build:xplat-wc": "cd common/igniteui-xplat-docs && npm run buildWC",
"export:webcomponents": "npx tsx scripts/export-wc-docs.ts --skip-build",
"inject:webcomponents": "npx tsx scripts/inject-wc-docs.ts",
"compress:webcomponents": "npx tsx --env-file=.env scripts/compress-wc-docs.ts",
"validate:webcomponents": "npx tsx --env-file=.env scripts/validate-docs.ts --input ./dist/docs_final/webcomponents",
"pipeline:webcomponents": "npm run clear:webcomponents && npm run build:xplat-wc && npm run export:webcomponents && npm run inject:webcomponents && npm run compress:webcomponents"
```

Note: `clear:webcomponents` already exists in package.json.

### 5. `.gitmodules` (at repo root)
Add entry for the WC examples submodule:
```
[submodule "igniteui-wc-examples"]
    path = igniteui-doc-mcp/webcomponents/igniteui-wc-examples
    url = https://github.com/IgniteUI/igniteui-wc-examples.git
```

### 6. `docs/progress.md`
Add WebComponents pipeline entry under "Implemented" section.

### 7. `CLAUDE.md`
Add WebComponents pipeline documentation section (parallel to the React section).

## Submodule Setup

After modifying `.gitmodules`, initialize the submodule:
```bash
git submodule add https://github.com/IgniteUI/igniteui-wc-examples.git igniteui-doc-mcp/webcomponents/igniteui-wc-examples
```

## Key WC-Specific Details

| Aspect | React | WebComponents |
|--------|-------|---------------|
| Prefix | `Igr` | `Igc` |
| Suffix | None (`IgrGrid`) | `Component` (`IgcGridComponent`) |
| Sample entry | `index.tsx` | `index.html` |
| Sample files | `.tsx`, `.ts`, `.css` | `.html`, `.ts`, `.css` |
| Build command | `buildReact` | `buildWC` |
| toc.json exclude | `"React"` | `"WebComponents"` |
| Built output dir | `dist/React/en/components` | `dist/WebComponents/en/components` |
| Examples repo | `igniteui-react-examples` | `igniteui-wc-examples` |
| API URL env var | — | `wcApiUrl` |

## Verification

1. **Build xplat**: `npm run build:xplat-wc` — should produce files under `common/igniteui-xplat-docs/dist/WebComponents/`
2. **Export**: `npm run export:webcomponents` — should produce flattened `.md` files in `dist/docs_processing/webcomponents/`
3. **Inject**: `npm run inject:webcomponents` — should produce docs with inlined sample code in `dist/docs_prepeared/webcomponents/`, no files >300KB
4. **Compress** (dry run): `npm run compress:webcomponents -- --dry-run` — verify file count and sizes
5. **Full pipeline**: `npm run pipeline:webcomponents`
6. **Validate**: `npm run validate:webcomponents`
