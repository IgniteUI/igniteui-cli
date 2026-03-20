# Plan: Code-View Tag Replacement Script

## Context

The markdown documentation files in `igniteui-docfx/en/components/` contain `<code-view>` tags that embed live Angular sample demos via iframes. To make the docs self-contained (for AI consumption / compressed docs), we need a TypeScript script that replaces each `<code-view>` tag with the actual source code of the referenced Angular component (TypeScript, HTML, SCSS/CSS).

## Script Location

`scripts/compress-angular-docs.ts` — new TypeScript script in the existing `scripts/` directory.

## Output

Processed markdown files saved to `dist/angular_docs/`, preserving the original directory structure from `igniteui-docfx/en/components/`.

## Algorithm

### 1. Parse code-view tags

Use regex to match all `<code-view ... >[\s\S]*?</code-view>` blocks in each `.md` file.

Extract the `iframe-src` attribute value. All 967 code-view tags have one.

### 2. Map iframe-src to sample directory

Extract two things from iframe-src:
- **Base URL variable**: determines which app directory to search
- **URL path segments**: e.g. `/notifications/banner-sample-2/`

Base URL → app root mapping:
| Base URL | App Root |
|---|---|
| `{environment:demosBaseUrl}` | `igniteui-angular-samples/src/app/` |
| `{environment:dvDemosBaseUrl}` | `igniteui-angular-samples/src/app/` (same app, different category) |
| `{environment:lobDemosBaseUrl}` | `igniteui-angular-samples/projects/app-lob/src/app/` |
| `{environment:crmDemoBaseUrl}` | `igniteui-angular-samples/projects/app-crm/src/app/` |

### 3. Build route-to-file map from Angular routing files

The URL path doesn't map 1:1 to the filesystem (e.g. URL `/notifications/banner-sample-2/` maps to `notifications/banner/banner-sample-2/`). Instead of guessing, **parse the Angular routing files** to build a definitive lookup table.

**Routing files to parse** (27 total across 3 apps):

| App | Root routes | Child route files |
|---|---|---|
| Main | `src/app/app.routes.ts` | `src/app/{category}/{category}.routes.ts` (16 files) |
| LOB | `projects/app-lob/src/app/app.routes.ts` | `projects/app-lob/src/app/{category}/*.routes.ts` (8 files) |
| CRM | `projects/app-crm/src/app/app.routes.ts` | (inline, 1 file) |

**Parsing steps:**

1. Read each `app.routes.ts` to get top-level route `path` values and their `loadChildren` import paths (e.g. `path: 'notifications'` → `./notifications/notifications.routes`)
2. Read each child `.routes.ts` file and extract route entries:
   - `path` value (the URL segment, e.g. `'banner-sample-2'`)
   - `component` class name (e.g. `BannerSample2Component`)
   - The corresponding `import` statement at the top of the file that maps the class to a relative file path (e.g. `import { BannerSample2Component } from './banner/banner-sample-2/banner-sample-2.component'`)
3. Resolve the relative import path against the routing file's directory to get the absolute component file path
4. Store in a `Map<string, string>` keyed by full URL path (e.g. `notifications/banner-sample-2` → absolute path to `banner-sample-2.component.ts`)

**Result**: A complete lookup table mapping every URL path to its component's `.component.ts` file. The `.component.html` and `.component.scss`/`.component.css` files are in the same directory.

### 4. Read component files

From the resolved `.component.ts` path, derive the sibling files in the same directory:
- `{sampleName}.component.ts`
- `{sampleName}.component.html`
- `{sampleName}.component.scss` (fallback to `.component.css`)

### 5. Build replacement

Replace the entire `<code-view>...</code-view>` block with fenced code blocks:

~~~
```typescript
// contents of .component.ts
```
```html
<!-- contents of .component.html -->
```
```scss
// contents of .component.scss (only if non-empty)
```
~~~

Skip empty files (like the user requested).

### 6. Write output

Save the modified markdown to `dist/angular_docs/`, mirroring the directory structure. E.g.:
- `igniteui-docfx/en/components/banner.md` → `dist/angular_docs/banner.md`
- `igniteui-docfx/en/components/charts/types/column-chart.md` → `dist/angular_docs/charts/types/column-chart.md`

## Key Files

- **New**: `scripts/compress-angular-docs.ts` — the script
- **Input**: `igniteui-docfx/en/components/**/*.md` (233 files with code-view tags)
- **Sample source**: `igniteui-angular-samples/src/app/` and `projects/app-lob/`, `projects/app-crm/`
- **Output**: `dist/angular_docs/**/*.md`

## Run Command

Add npm script: `"compress:angular": "npx tsx scripts/compress-angular-docs.ts"`

No build step needed — use `tsx` for direct TypeScript execution (add as devDependency).

## Error Handling

- Log warnings to stderr for: unresolved iframe-src paths, missing component files
- Leave the original code-view tag in place if sample can't be found
- Print summary at end: total files processed, total code-views replaced, total warnings

## Verification

1. Run the script: `npm run compress:angular`
2. Check `dist/angular_docs/banner.md` — verify banner-sample-2 code-view is replaced with TS/HTML code blocks
3. Check a chart doc and a grid doc to verify dv/lob base URLs resolve correctly
4. Check warning count — should be minimal
