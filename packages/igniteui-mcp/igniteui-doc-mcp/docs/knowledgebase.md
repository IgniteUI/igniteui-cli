# Documentation Processing Knowledgebase

Lessons learned and issues encountered while building the documentation processing pipelines. Entries 1-16 are from the Angular pipeline; entries 17-21 from React; entries 22-26 from WebComponents and cross-platform improvements; entries 27-32 from Blazor, cross-platform architecture, and prompt improvements.

## 1. LLM Compression: Wrong Component Prefix (Hallucination)

**Problem:** The LLM system prompt in `compress-angular-docs.ts` was copied from a React workflow and instructed the model to use React's `Igr` prefix (e.g. `IgrButton`) instead of Angular's `Igx` prefix (e.g. `IgxButtonDirective`).

**Impact:** All compressed docs had incorrect component names in frontmatter, breaking search/filtering in the MCP server.

**Fix:** Make the system prompt framework-specific. Each platform has its own naming convention:

| Framework | Prefix | Example | Suffix convention |
|---|---|---|---|
| Angular | `Igx` | `IgxGridComponent`, `IgxButtonDirective` | Includes `Component`/`Directive` suffix |
| React | `Igr` | `IgrGrid`, `IgrCategoryChart` | No suffix |
| WebComponents | `Igc` | `IgcGridComponent` | Includes `Component` suffix |
| Blazor | `Igb` | `IgbGrid`, `IgbCategoryChart` | No suffix |

**Rule:** Each platform's compress script must have a platform-specific system prompt with correct prefix, examples, and naming conventions.

## 2. LLM Compression: Hallucinated Content from Stub Documents

**Problem:** Source files that contained only headers and `<!-- TODO -->` comments (e.g. `chart-legends.md`) were sent to the LLM compressor. The LLM fabricated entire documentation including fake API details, invented code examples, and non-existent component properties.

**Impact:** The MCP server would serve completely fabricated documentation as if it were real.

**Fix:** Added an anti-hallucination rule to the system prompt:
> "Do NOT invent or generate new content. If the input document contains only headers and TODO/placeholder comments with no actual documentation, return only the frontmatter and the existing headers."

**Rule:** All platform compress scripts must include this rule. Additionally, filtering out stub files before compression (via toc.yml) is the preferred first line of defense.

## 3. LLM Compression: Code Block Merging

**Problem:** The LLM merged separate TypeScript, HTML, and SCSS code blocks into a single inline Angular component (converting `templateUrl` → inline `template`, `styleUrls` → inline `styles`). This changed the structure of the original code examples.

**Impact:** Compressed docs showed a different coding pattern than the actual samples, which could mislead developers.

**Fix:** Added a rule to the system prompt:
> "Do NOT merge separate code blocks (TypeScript, HTML, SCSS) into a single inline component. If the original has separate templateUrl/styleUrls files shown as individual code blocks, keep them as separate code blocks."

**Rule:** Preserve the original code structure. This applies to all platforms — Angular uses `templateUrl`/`styleUrls`, React has separate JSX/CSS files, Blazor has `.razor`/`.razor.css`, etc.

## 4. Processing Files Not in Published Documentation

**Problem:** The export script (`export-angular-docs.ts`) used `collectFiles()` to recursively find all `.md` files in the components directory. This included files not part of the published documentation (stubs, drafts, unreferenced files).

**Impact:** Unpublished stub files went through the pipeline and produced hallucinated output (see issue #2).

**Fix:** Use `toc.yml` as the source of truth. Parse it to get the definitive list of files to process. Only files referenced in `toc.yml` are exported.

**Rule:** Every platform's documentation source likely has a table of contents or manifest file. Always use it as the source of truth rather than filesystem enumeration. Known manifest locations:
- **Angular:** `angular/igniteui-docfx/en/components/toc.yml` (YAML, flat list with `name`, `href`, `premium`)
- **React / WebComponents / Blazor:** `common/igniteui-xplat-docs/docfx/en/components/toc.json` (JSON, shared across platforms with `exclude` arrays for platform filtering — an entry is included for a platform if `"Platform"` is NOT in its `exclude` array)

## 5. toc.yml Contains Valuable Metadata

**Problem:** The `toc.yml` file contains metadata (`name`, `premium`, `new`, `updated`) that was being discarded. The human-readable `name` and `premium` status are useful for the MCP server's search and filtering.

**Fix:** Inject `_tocName` and `_premium` fields into the exported markdown frontmatter. The compress prompt is instructed to carry `premium: true` through to the output frontmatter and use `_tocName` as a hint for the component name.

**Rule:** When processing documentation for other platforms, identify and carry forward any useful metadata from the manifest/toc into the pipeline.

## 6. Grid Template Expansion (Angular-Specific)

**Problem:** Angular docs use a template system (`grids_templates/`) where shared grid documentation is expanded into separate files for Grid, Tree Grid, Hierarchical Grid, and Pivot Grid using `@@include()`, `@@if`, and `@@variable` directives.

**Impact:** The expanded files don't exist on disk — they're generated at build time. The toc.yml references the expanded paths (e.g. `treegrid/sorting.md`) not the template source.

**Fix:** Run grid template expansion first, then match toc entries against both expanded outputs and regular source files.

**Rule:** Other platforms may have similar template/include systems. Check for build-time content generation before assuming 1:1 mapping between source files and published docs.

## 7. Stale Files in Output Directory

**Problem:** The export script writes to `dist/docs_processing/` without clearing it first. When switching from `collectFiles()` to toc-based processing, previously exported files (like `chart-legends.md`) remained in the output directory from earlier runs.

**Impact:** Downstream pipeline steps (inject, compress) would process stale files that shouldn't be there.

**Mitigation:** The `npm run pipeline:angular` script runs `clear` first, which removes the entire `dist/` directory. Always use the full pipeline command or run `clear` before `export` when iterating.

**Rule:** Pipeline scripts should always clear output directories before writing. The `pipeline:*` npm script should handle this automatically.

## 8. Compression Script: Use OpenAI SDK with `--api-base` for Provider Flexibility

**Context:** The original Python script used `litellm` for multi-provider LLM access. The TypeScript port uses the `openai` npm package instead.

**Why:** The OpenAI SDK's chat completions API is the de facto standard. Most providers (Azure OpenAI, local LM Studio, Ollama, Groq, Together AI) expose an OpenAI-compatible endpoint. The `--api-base` CLI arg maps to the SDK's `baseURL` option, so switching providers requires no code changes.

**Rule:** For new platform compress scripts, reuse the `openai` SDK + `--api-base` pattern rather than adding a multi-provider abstraction. Keep the `--model` arg as a plain string passed directly to the SDK.

## 9. Compression Script: Resume and Single-File Reprocessing

**Context:** LLM compression is slow and expensive (one API call per file, hundreds of files). Interruptions and quality issues on individual files are common.

**Flags implemented:**
- `--resume-from <filename>` — copies all files before the named file unchanged, then starts compressing from that file onward. Essential for recovering from interrupted runs without re-spending API credits.
- `--only <filename>` — processes a single file, useful for iterating on compression quality or reprocessing a file that had validation errors.

**Rule:** All platform compress scripts should include both flags. They save significant time and cost during development and production runs.

## 10. Environment Variables: Use Node's Built-in `--env-file` Flag

**Context:** The compress script needs `OPENAI_API_KEY`. Rather than adding a `dotenv` dependency, the npm script uses Node.js's built-in `--env-file` flag (available since Node 20.6+):

```json
"compress:angular": "npx tsx --env-file=.env scripts/compress-angular-docs.ts"
```

**Rule:** Prefer `--env-file=.env` over the `dotenv` package for new scripts. It keeps dependencies minimal and works with both `node` and `tsx`. Ensure `.env` is in `.gitignore`.

## 11. Pipeline Orchestration: Single `pipeline:*` npm Script

**Context:** Each platform pipeline has 3 ordered steps (export → inject → compress) plus a clear step. Remembering the correct order and running them individually is error-prone.

**Pattern:** Define a single orchestrator script per platform:
```json
"pipeline:angular": "npm run clear && npm run export:angular && npm run inject:angular && npm run compress:angular"
```

Uses `&&` chaining so any step failure stops the pipeline.

**Rule:** Every new platform should have a `pipeline:<platform>` script. The order is always: `clear` → `export:<platform>` → `inject:<platform>` → `compress:<platform>`. Individual step scripts remain available for debugging.

## 12. Environment Variable Placeholders in Documentation

**Problem:** Source markdown files contain `{environment:angularApiUrl}`, `{environment:sassApiUrl}`, `{environment:dvApiBaseUrl}` placeholders for API documentation links. These are normally resolved at build time by the docfx system but remain as raw placeholders in our export. The LLM compressor either stripped the links entirely or kept the unresolved placeholders.

**Impact:** Compressed docs lost all API reference links, making them less useful for developers.

**Fix:** In the export step, load `environment.json` (found in the docfx source) and replace API URL placeholders with production URLs before writing the exported files. Only API documentation URLs are replaced (`angularApiUrl`, `sassApiUrl`, `dvApiBaseUrl`); demo base URLs (`demosBaseUrl`, etc.) are left as-is because they reference iframe samples that get replaced by the inject step.

**Rule:** Each platform's docfx source likely has an `environment.json` or similar config. Replace API documentation URL placeholders during export so downstream steps have real, usable links. Do not replace demo/sample URLs — those are handled by the inject step.

## 13. Data-Heavy Files Get Over-Compressed

**Problem:** Files that are primarily data resources (e.g. `geo-map-resources-world-locations.md` containing hundreds of location objects) received 97% compression, losing essentially all content. The LLM reduced a massive dataset to 3 items and called the utility "small and compact" — the opposite of the truth.

**Impact:** Compressed docs for data resource files were almost empty and inaccurate.

**Fix:** Updated the compress prompt to explicitly handle data-heavy files: keep only 1-2 representative items to show the data shape, preserve the class/function structure. The validation prompt was also updated to not penalize data truncation as long as the data shape is preserved.

**Rule:** Each platform will have data-heavy documentation files. The compress prompt must explicitly instruct the LLM on how to handle them. Validation should account for expected data truncation.

## 14. Use Structured Output for LLM JSON Responses

**Problem:** The validation script expected the LLM judge to return strict JSON, but responses sometimes included markdown fences, truncated JSON, or extra text before/after the object. This caused parse failures (e.g. `combo.md` failed entirely in the first validation run).

**Fix:** Use OpenAI's structured output feature (`zodTextFormat` from `openai/helpers/zod` + `client.responses.parse()`) which guarantees the response matches a Zod schema. This eliminates JSON parsing failures entirely.

**Rule:** Any pipeline script that expects structured LLM output (JSON scores, metadata extraction, etc.) should use structured output with a Zod schema. Reserve free-form `chat.completions.create()` only for scripts that need unstructured text (like the compress step which outputs markdown).

## 15. Make Pipeline Tools Platform-Independent

**Problem:** The validation script was originally named `validate-angular-docs.ts` with hardcoded Angular paths. This would require duplicating the entire script for each platform.

**Fix:** Renamed to `validate-docs.ts` with `--input`, `--original`, and `--output` CLI parameters. The npm script passes platform-specific paths:
```json
"validate:angular": "npx tsx --env-file=.env scripts/validate-docs.ts --input ./dist/docs_final/angular"
```

**Rule:** Pipeline tools that don't contain platform-specific logic should accept directory paths as parameters instead of hardcoding them. Platform-specific npm scripts in `package.json` provide the concrete paths. This avoids script duplication when adding new platforms.

## 16. Per-Platform Cleanup Scripts

**Problem:** The original `clear` script deleted the entire `dist/` directory. When working on one platform, this wiped the processed output of all other platforms.

**Fix:** Added `clear:<platform>` scripts that only remove that platform's subdirectories from `docs_processing/`, `docs_prepeared/`, and `docs_final/`. The full `clear` script still exists for complete resets.

**Rule:** Always provide per-platform cleanup. The `pipeline:<platform>` script should use `clear:<platform>`, not the global `clear`.

## 17. Injected Sample Code Contains Massive Data Arrays

**Problem:** React (and likely Blazor/WC) sample source files contain auto-generated data classes with 500-1000 items each. After the inject step inlines these into docs, individual files balloon to 300KB-1.4MB. Files this large cause poor LLM compression results, exceed context windows, and waste API credits.

**Three distinct data patterns found:**
1. `const newItems = [new Item({...}), new Item({...}), ...];` — single-line items in a const array (most common, e.g. `FinancialDataAll` with 1000 items)
2. `this.push(new Item({...})); this.push(new Item({...}));` — repeated multi-line push calls in a constructor (e.g. `InvoicesData` with 499 items)
3. `export const X = [{...}, {...}, ...];` — plain object array literals (e.g. `SALES_DATA_NEW` with 1042 items)

**Impact:** Before trimming: 20.19 MB total, 15 files over 300KB. After trimming: 8.64 MB total, 0 files over 300KB.

**Fix:** Added a `trimDataArrays` post-processing step to the inject script that keeps the first 3 items per array and replaces the rest with `// ... N more items`. This preserves the data shape for documentation while eliminating bulk.

**Rule:** Any platform's inject script should include data array trimming as a post-processing step. Do not rely on the LLM compressor to handle data trimming — it's too expensive, unreliable, and the arrays may exceed the LLM's context window. Trim deterministically at inject time.

## 18. Xplat Build Output Requires Filename Flattening

**Problem:** The xplat gulp build (`buildReact`, `buildBlazor`, `buildWC`) produces hierarchically nested output directories (e.g. `grids/grid/editing.md`, `charts/types/area-chart.md`). The downstream pipeline expects flat single-directory output.

**Fix:** The export script flattens paths using these rules:
- Top-level files: keep filename as-is (`bullet-graph.md`)
- Grid component subdirectories: prefix with component dir (`grids/grid/editing.md` → `grid-editing.md`, `grids/tree-grid/editing.md` → `tree-grid-editing.md`)
- Category subdirectories (charts/types, etc.): use just the filename (`charts/types/area-chart.md` → `area-chart.md`) since it's already descriptive
- Collisions: add parent directory prefix

**Rule:** When implementing Blazor/WC pipelines, reuse the same flattening logic. The xplat build produces the same directory hierarchy for all platforms.

## 19. LLM Compression: Code Rewriting and Silent "Fixes"

**Problem:** The LLM compressor silently "corrects" apparent typos in code examples (e.g. `StartValue` → `startValue`, `bndValue` → `endValue`) and synthesizes simplified code snippets with made-up values (e.g. replacing `transitionDuration = 1000` set imperatively with `transitionDuration={500}` as a JSX prop that never existed in the original).

**Impact:** Compressed docs contain code that doesn't match the actual component API or sample source, potentially misleading developers. "Fixed" typos may mask real documentation bugs that should be reported upstream.

**Fix:** Added rules to the compress prompt:
- "Never rewrite or fix code from the original — preserve property names, values, and casing exactly"
- "Never change literal values"
- "Do not synthesize simplified code snippets to replace originals — compress by trimming, not rewriting"

**Rule:** All platform compress prompts need these rules. LLMs have a strong tendency to "improve" code they compress. The prompt must explicitly forbid it.

## 20. LLM Compression: Dropping Complex Examples Entirely

**Problem:** When a section has a large, complex code example (e.g. accordion customization showing IgrCheckbox, IgrRangeSlider, IgrDateTimeInput, IgrRating, IgrRadioGroup, and `registerIconFromText` in 260 lines), the LLM sometimes deletes the entire example and replaces it with a text pointer like "see the product examples". This loses the most instructive content in the doc.

**Fix:** Added rules to the compress prompt:
- "When trimming a code example, trim it — do NOT delete it entirely"
- "Every section that has a code example in the original must keep at least a shortened version"
- "If a section has a complex/advanced example, keep a trimmed version preserving the structural pattern"

**Rule:** All platform compress prompts should include this. The LLM defaults to dropping content it can't easily shrink. The prompt must make clear that a trimmed 30-line version of a 260-line example is far more valuable than no example at all.

## 21. LLM Compression: Code Block Self-Consistency

**Problem:** The LLM removes variable definitions, data model fields, or component props from code blocks while keeping code that references them. Examples: removing `const mods = [...]` while keeping `mods.forEach(...)`, removing `highLA`/`lowLA` fields from a data model while keeping `lowMemberPath="lowLA"` in JSX, removing `name` prop from `<IgrDataToolTipLayer>`.

**Fix:** Added a rule to the compress prompt:
- "Code blocks must be self-consistent — if a block references a variable, field, or prop, that reference must be defined within the same or adjacent block"
- "Do not strip component props from JSX"

**Rule:** All platform compress prompts need this. The LLM optimizes for size reduction without checking referential integrity. Broken code examples are worse than verbose ones.

## 22. Token Counting with js-tiktoken

**Context:** Compressed docs are served to LLMs via the MCP server. Knowing the token count per file is essential for understanding context window consumption and budgeting.

**Implementation:** All compress scripts use `js-tiktoken` with `encodingForModel("gpt-4o")` (o200k_base encoding) to count tokens per compressed file. Token counts appear in three places:
- Per-file console output: `-> 28.1KB (49% reduction) [7234 tokens]`
- Summary line: `Total tokens: 142,567`
- `_compression_log.csv` with columns: `file,original_kb,compressed_kb,reduction_pct,tokens`
- `total_tokens` field in `_compression_stats.json`

Tokens are counted for all files including skipped (below min-size threshold) and dry-run files, so the totals always reflect the full output directory.

**Rule:** Any new platform compress script must include token counting. Use the same `encodingForModel("gpt-4o")` call — the encoding is model-agnostic enough for estimation purposes even if the docs are ultimately consumed by a different model.

## 23. Under-Compression on Code-Heavy Files

**Problem:** Documents that are primarily code with little prose (e.g. `cell-template.md` with a large `GridLiteDataService` class, `bullet-graph.md` with many HTML attribute examples) consistently under-compress. Observed reductions: `cell-template.md` ~15%, `bullet-graph.md` ~35%, `card.md` ~31% — all well below the ~50% target.

**Why:** The compress prompt correctly instructs the LLM to preserve code integrity and keep at least one example per section. For code-heavy docs, there's simply not enough prose to cut, and the LLM is (rightly) conservative about trimming code blocks.

**Impact:** These files consume more tokens than expected but the code they preserve is genuinely useful. Forcing deeper cuts would harm quality.

**Rule:** Accept under-compression on code-heavy files as expected behavior. Do not tune the prompt to force deeper cuts — the ~50% target is an average across the full corpus, not a per-file requirement. Data service/utility class method bodies are the one area where deeper trimming is safe (keep signatures + one representative method, `// ...` the rest), but this is better handled in the inject step's `trimDataArrays` than by prompt tuning.

## 24. LLM Compression: Synthesized Code Snippets for Prose-Only Sections

**Problem:** When a documentation section describes a component feature in prose only (no code example in the original), the LLM occasionally synthesizes a small illustrative code snippet. Example: the WebComponents `card.md` "Outlined cards" section only had prose describing the `outlined` attribute, but the compressed version added `<igc-card outlined><!-- content --></igc-card>`.

**Impact:** The synthesized snippet is technically accurate (derived from the prose) but violates the anti-hallucination rule. It creates content that wasn't in the source, even if it's helpful.

**Rule:** The existing anti-hallucination prompt rule ("Do NOT invent or generate new content") should catch this, but LLMs still do it occasionally for very short/obvious snippets. During validation, flag these as minor issues but don't consider them blockers. The rule "every section that had a code example must keep one" should not be misread as "every section must have a code example" — sections that were prose-only in the original should stay prose-only.

## 25. LLM Compression: Markdown Links Dropped in API References

**Problem:** The LLM consistently strips markdown hyperlink syntax from API References and Additional Resources sections. `[Bar Chart](bar-chart.md)` becomes `- Bar Chart` or `Bar Chart (bar-chart.md)`. This was observed across all WebComponents compressed files and likely affects all platforms.

**Impact:** Internal documentation cross-references lose their navigability. For MCP serving this is low-impact (the MCP server doesn't render links), but if the compressed docs are ever used in a context that supports markdown links, the references are broken.

**Rule:** This is a known LLM behavior — models treat links as verbose boilerplate and strip them for compression. The current prompt doesn't explicitly address link preservation. If link preservation becomes important, add a rule: "Preserve markdown hyperlinks in API References and Additional Resources sections exactly as they appear in the original." For now, accept this as a minor quality trade-off.

## 26. LLM Compression: Header Hierarchy Changes

**Problem:** The LLM occasionally changes heading levels during compression — demoting `##` headers to `###` (e.g. in `area-chart.md` where chart variant sections were demoted), promoting `###` to `##` (e.g. Summary section in `card.md`), or merging similar sections under a combined header (e.g. "Stacked 100% Area / Spline Area"). Observed across WebComponents files.

**Impact:** Changes document structure, which could affect any tooling that parses headers for navigation or sectioning. Merged sections lose their individual identity.

**Rule:** The compress prompt says "preserve all markdown headers" but doesn't explicitly forbid changing their levels or merging them. If header fidelity is important, add: "Do not change heading levels (##, ###, ####) — keep them exactly as in the original. Do not merge separate sections into combined headers." For now this is a minor issue since the MCP server doesn't use header hierarchy for indexing.

## 27. Blazor Sample File Types and Skip List

**Context:** Blazor samples use a different file structure than React (`.tsx`) or WebComponents (`.html`/`.ts`). The inject script must handle Blazor-specific extensions and skip boilerplate files.

**File types to read:**
- `.razor` → language: `razor`
- `.razor.cs` / `.cs` → language: `csharp`
- `.razor.css` / `.css` → language: `css`

**Files to skip:** `_Imports.razor`, `.csproj`, `Program.cs`, and everything under `wwwroot/`. These are project scaffolding, not sample content.

**Rule:** Each platform's inject script needs a curated skip list. Blazor has more boilerplate files than React/WC. The skip list prevents project configuration from being inlined into documentation.

## 28. Cross-Platform Architecture: Gulp Build First (Option A)

**Context:** React, WebComponents, and Blazor docs all live in the shared `igniteui-xplat-docs` repo. Rather than reimplementing the complex `MarkdownTransformer` logic (variable replacement from `docConfig.json`, platform conditional sections, code fence filtering, grid template expansion, API link resolution via `apiMap/`), all three pipelines use Option A: run the gulp build first (`buildReact`, `buildWC`, `buildBlazor`), then process the fully-resolved output.

**Why:** The gulp build handles ~62KB of `docConfig.json` replacements, platform-conditional HTML comment blocks (`<!-- Blazor -->...<!-- end: Blazor -->`), code fence filtering per platform, shared grid template expansion from `grids/_shared/`, and API type name resolution via `apiMap/` JSON files. Reimplementing this would be error-prone and risk diverging from the official documentation site.

**Rule:** For any platform using the xplat build system, always run the gulp build as a prerequisite step. The `--skip-build` flag on export scripts is for development iteration only (when the build output already exists). The `pipeline:*` npm scripts always include the build step.

See `docs/xplat-docs-architecture.md` for detailed analysis of the xplat build system.

## 29. Blazor Naming Inconsistency in docConfig.json

**Problem:** In `docConfig.json`, the `{GridName}` replacement values for Blazor are inconsistent — only the base `GridName` has the `Igb` prefix (`IgbGrid`), while the others use unprefixed names (`TreeGrid`, `PivotGrid`, `HierarchicalGrid`). However, in actual Blazor code, component **tags** always use the `Igb` prefix: `<IgbGrid>`, `<IgbTreeGrid>`, `<IgbPivotGrid>`.

**Impact:** The `{GridName}` variable is used in prose text, not in code blocks, so this doesn't cause incorrect code examples. But it means the prose might say "TreeGrid" while the code says `<IgbTreeGrid>`.

**Rule:** Be aware of this inconsistency when validating Blazor compressed docs. The compress prompt correctly specifies `Igb` prefix with no suffix, but validation shouldn't flag prose mentions of unprefixed grid names inherited from `docConfig.json` replacements.

## 30. Xplat toc.json vs Angular toc.yml

**Context:** Angular uses `toc.yml` (YAML, flat list with `name`, `href`, `premium` fields). React, WebComponents, and Blazor share `toc.json` (JSON, hierarchical with `exclude` arrays for platform filtering).

**Key difference:** In `toc.json`, an entry is included for a platform if:
- It has no `exclude` field, OR
- The platform name (e.g., `"Blazor"`) is NOT in the `exclude` array

This is the opposite logic from what you might expect — `exclude` means "hide from these platforms", not "include for these platforms".

**Rule:** When adding a new platform, filter toc.json entries by checking `!entry.exclude?.includes("PlatformName")`. The platform names are case-sensitive: `"Angular"`, `"React"`, `"WebComponents"`, `"Blazor"`.

## 31. Backtick Sample Syntax vs code-view Tags

**Problem:** The xplat source docs use a backtick syntax for sample references (`` `sample="/gauges/bullet-graph/animation", height="155"` ``), not `<code-view>` tags like Angular. However, the xplat gulp build converts these backtick references into `<code-view>` HTML tags with `iframe-src` and `github-src` attributes during the build step.

**Impact:** After the gulp build, the inject scripts for React, WC, and Blazor can use the same `<code-view>` regex pattern as Angular's inject script. The `github-src` attribute provides a direct path to the sample source directory, making resolution simpler than Angular's route-based approach.

**Rule:** Always process post-build output (not raw source) for xplat platforms. The backtick-to-code-view conversion is handled by the gulp build, and the `github-src` attribute is the primary mechanism for locating sample files across all xplat platforms.

## 32. LLM Compression: Variant Sections Merged and Examples Dropped

**Problem:** In docs that cover multiple sub-types of the same component family (e.g., `area-chart.md` with Stacked Area, Stacked 100% Area, Stacked Spline Area, Stacked 100% Spline Area), the LLM treats these as "minor variations of the same pattern" and merges their sections under a combined heading (e.g., "### Stacked Area / Stacked Spline / Stacked 100% Variants"). This causes two issues simultaneously: header hierarchy changes (KB #26) and dropped examples (KB #20), since the merged section keeps only one example for all variants.

**Impact:** Developers lose the specific component/series type names and their code patterns. Each variant uses a different component class (e.g., `IgbStackedAreaSeries` vs `IgbStacked100SplineAreaSeries`), and merging them hides these distinctions.

**Fix:** Updated all four compress prompts with three reinforcing rules:
1. **WHAT TO CUT #2** (redundant examples): Added explicit exception — sections covering **different component types or sub-types** are NOT redundant, even if boilerplate is similar. The differentiator is the component tag or series type.
2. **WHAT TO KEEP #1** (headers): Added "Do not change heading levels. Do not merge or combine separate headings into one."
3. **WHAT TO KEEP #3** (examples per section): Added explicit examples of variant sections that must each keep their own code example, plus anti-merge rule: "Do NOT merge separate sections into a combined section."

**Rule:** This three-pronged approach is needed because the LLM's merge behavior is a chain: it first decides sections are "redundant" → merges headers → then drops examples from the merged section. Blocking any single step isn't enough — all three rules must reinforce each other.

## Related Documentation

| Document | Description | Status |
|----------|-------------|--------|
| `impl_plan.md` | Original plan for `<code-view>` tag replacement in Angular docs | ✅ Implemented |
| `prefix_fix.md` | Plan for fixing React→Angular prefix in compress prompt | ✅ Implemented |
| `toc_based_processing.md` | Plan for using `toc.yml` as source of truth instead of filesystem enumeration | ✅ Implemented |
| `xplat-docs-architecture.md` | Architecture analysis of the shared xplat build system (variable replacement, platform filtering, code fence filtering, API mapping) | Reference |
| `react-pipeline.md` | React pipeline implementation plan (export → inject → compress) | ✅ Implemented |
| `wc-pipeline-plan.md` | WebComponents pipeline implementation plan | ✅ Implemented |
| `blazor-pipeline-plan.md` | Blazor pipeline implementation plan | ✅ Implemented |
| `db.md` | SQLite + FTS5 database integration plan (replaces file-based MCP server) | ⬜ Not implemented |
| `incremental-processing.md` | Incremental processing plan (diff-based pipeline to avoid reprocessing unchanged docs) | ⬜ Not implemented |
| `progress.md` | Implementation progress tracker (what's done, what's planned) | Active |
