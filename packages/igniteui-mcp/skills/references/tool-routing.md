# Tool Routing Reference

Detailed guidance on when and how to use each `igniteui-mcp-server` tool.

---

## Table of Contents

1. [Docs Tools vs API Tools — decision map](#docs-tools-vs-api-tools)
2. [Docs tool flows](#docs-tool-flows)
3. [API tool flows](#api-tool-flows)
4. [Worked examples](#worked-examples)
5. [Common mistakes](#common-mistakes)
6. [Error handling](#error-handling)

---

## Docs Tools vs API Tools

| The user is asking… | Tool path |
|---------------------|-----------|
| How do I implement X? | Docs: `search_docs` → `get_doc` |
| Which component should I use for X? | Docs: `search_docs` or `list_components` |
| What does this feature do / how does it work? | Docs: `get_doc` |
| What properties/methods/events does class Y expose? | API: `get_api_reference` (skip docs) |
| What is the exact TypeScript type of property Z? | API: `get_api_reference` (skip docs) |
| Does IgxGridComponent have a method named X? | API: `get_api_reference` with `section="methods"` |
| What classes exist for feature X? | API: `search_api` |

**Rule of thumb:** start with docs for vague feature questions. Move to API tools only once the work requires precise class-level details.

**Fast path:** when the user explicitly names a class or asks about specific members (properties, methods, events), skip docs entirely and go straight to `search_api` or `get_api_reference`. No need to read a feature guide when the question is "what type is the `sortingExpressions` property."

---

## Docs Tool Flows

### `search_docs` — natural-language feature discovery

Use when the user describes behavior but doesn't know the component or doc name.

```
search_docs(query, framework)
```

- `query` — natural-language description (e.g. `"virtual scrolling"`, `"inline editing"`, `"row pinning"`)
- `framework` — confirmed platform value (`angular`, `react`, `blazor`, `webcomponents`)
- Returns top 20 results with snippet excerpts

### `list_components` — browse the available surface

Use when you want to survey what Ignite UI covers, optionally filtered by keyword.

```
list_components(framework, filter?)
```

- `filter` — optional keyword matched against filename, component, toc_name, keywords, summary
- Use for discovery ("what grid components exist?"), not for targeted retrieval

### `get_doc` — read the authoritative page

Use when you have the exact doc name and need the full implementation guide.

```
get_doc(framework, name)
```

- `name` — kebab-case doc name, no `.md` extension (e.g. `"grid-row-pinning"`, `"combo"`)
- Read this before writing any component code — it is the source of truth

---

## API Tool Flows

### `search_api` — discover API class names

Use when the user refers to a feature but you don't know the exact class name.

```
search_api(query, platform?)
```

- `query` — keyword or partial class name (e.g. `"chip"`, `"date range"`, `"tree grid"`)
- `platform` — optional; omit to search all platforms at once
- Returns matching class names with platform tags

### `get_api_reference` — read class-level reference

Use when you know the exact class name and need its properties, methods, or events.

```
get_api_reference(platform, component, section?)
```

- `component` — exact class name, case-sensitive (e.g. `"IgxGridComponent"`)
- `section` — optional: `"properties"`, `"methods"`, `"events"`, or omit for all
- Always prefer a specific section when the user only needs one kind of detail — requesting all sections increases output size unnecessarily

---

## Worked Examples

### Example 1: Feature discovery → implementation

User: "I need row pinning in an Angular grid."

```
search_docs("row pinning", "angular")
→ returns "grid-row-pinning" among results

get_doc("angular", "grid-row-pinning")
→ full doc: configuration, events, code snippets
→ implement based on real doc content
```

### Example 2: Exact class reference (fast path)

User: "What methods does IgxGridComponent expose?"

```
get_api_reference("angular", "IgxGridComponent", section="methods")
→ full methods list with signatures
→ no need for docs — the question is class-level
```

### Example 3: Class name unknown → reference

User: "Show me the events on the React chip component."

```
search_api("chip", "react")
→ returns "IgrChip"

get_api_reference("react", "IgrChip", section="events")
→ events list with types
```

### Example 4: Cross-platform check

User: "Does the grid expose selectAllRows in both Angular and Web Components?"

```
get_api_reference("angular", "IgxGridComponent", section="methods")
→ scan for selectAllRows

get_api_reference("webcomponents", "IgcGridComponent", section="methods")
→ scan for selectAllRows
```

---

## Common Mistakes

- **Using `get_doc` when the user needs exact class members** — docs pages describe features and workflows. Switch to `search_api` / `get_api_reference` for properties, methods, and events.
- **Using `get_api_reference` when the user needs a feature walkthrough** — API reference lacks code examples and configuration guidance. Switch back to `search_docs` / `get_doc`.
- **Skipping `get_doc` before coding** — component APIs change between versions; memory is unreliable. Always read the doc first.
- **Passing `".md"` in the doc name to `get_doc`** — the `name` parameter is the kebab-case slug without extension.
- **Omitting `section` on `get_api_reference` when only one section is needed** — requesting all sections increases output size; be specific.
- **Using `igniteui-mcp-server` for theming** — it provides docs and API only. All theming work goes through `igniteui-theming`.
- **Using plain HTML or third-party components without checking** — always run `list_components` or `search_docs` first to confirm whether Ignite UI already covers the requirement.

---

## Error Handling

### `search_docs` returns no results
Try a broader or rephrased query. If still empty, try `list_components` with a keyword filter to browse what's available. As a last resort, confirm with the user that the feature exists in Ignite UI.

### `get_doc` returns "not found"
The doc name may be slightly wrong. Run `search_docs` or `list_components` first to find the exact slug, then retry `get_doc`.

### `get_api_reference` returns "not found"
Run `search_api` with a keyword to discover the correct class name. Component names are case-sensitive — a mismatch produces a not-found error even when the class exists.

### Framework value rejected
Use exactly one of: `angular`, `react`, `blazor`, `webcomponents`. Check the framework table in SKILL.md if unsure.
