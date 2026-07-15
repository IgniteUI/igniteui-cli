# Fix: Angular Component Naming in compress-angular-docs.ts

## Problem

The `compress-angular-docs.ts` script has a system prompt copied from a React compression workflow. The LLM is instructed to use **React** component names with the `Igr` prefix (e.g. `IgrButton`, `IgrGrid`) in the frontmatter `component` field — but this script exclusively processes **Angular** documentation where the correct prefix is `Igx` (e.g. `IgxButtonDirective`, `IgxGridComponent`).

**Example:**

| Field | Current (wrong) | Expected |
|---|---|---|
| Input doc | `angular/igniteui-docfx/en/components/button.md` (uses `IgxButtonModule`, `IgxButtonDirective`) |
| Output `component:` | `IgrButton` | `IgxButtonDirective` |

The `component` frontmatter field is used by the MCP server (`src/index.ts`) for filtering and display in `list_components` and matching in `search_docs`. Wrong prefixes mean Angular searches for `IgxButton` won't match the compressed doc.

## Root Cause

The system prompt in `getSystemPrompt()` (line 73-116 of `compress-angular-docs.ts`) contains:

1. **Line 74**: Generic description mentioning "Angular, React, Blazor, Web Components" — but this script only processes Angular docs
2. **Line 80**: Example frontmatter uses `IgrExactComponentName` (React prefix)
3. **Line 86**: Explicit instruction: _"The exact Ignite UI React component class name(s) as used in code (e.g. IgrCategoryChart, IgrGrid, IgrCombo, IgrDatePicker). Use the PascalCase Igr-prefixed name."_

This prompt was copied from a React compression workflow and was never updated for Angular.

## Proposed Fix

Since `compress-angular-docs.ts` is a dedicated Angular script (it reads from the Angular pipeline output, is invoked via `npm run compress:angular`, and will never process non-Angular docs), the fix is straightforward: **update the system prompt to be Angular-specific**.

### Changes to `getSystemPrompt()` in `scripts/compress-angular-docs.ts`

**1. Line 74** — Narrow the scope from generic to Angular-only:

```diff
- You are compressing Infragistics Ignite UI component documentation (Angular, React, Blazor, Web Components).
+ You are compressing Infragistics Ignite UI for Angular component documentation.
```

**2. Line 80** — Fix the frontmatter example:

```diff
- component: IgrExactComponentName
+ component: IgxExactComponentName
```

**3. Line 86** — Replace the React-specific `component` field instruction:

```diff
- - **component**: The exact Ignite UI React component class name(s) as used in code
-   (e.g. IgrCategoryChart, IgrGrid, IgrCombo, IgrDatePicker). Use the PascalCase
-   Igr-prefixed name. If the doc covers multiple components, comma-separate them.
+ - **component**: The exact Ignite UI for Angular component/directive class name(s) as
+   found in the document's source code (e.g. IgxGridComponent, IgxButtonDirective,
+   IgxComboComponent, IgxDatePickerComponent). Use the PascalCase Igx-prefixed name
+   including the Component/Directive suffix as used in Angular. If the doc covers
+   multiple components, comma-separate them.
```

No other changes are needed — the rest of the prompt (WHAT TO CUT, WHAT TO KEEP, OUTPUT RULES) is already framework-neutral and even references Angular-specific patterns like `@NgModule` and `IgxModule`.

## Files to Change

| File | Change |
|---|---|
| `scripts/compress-angular-docs.ts` | Update 3 lines in the `getSystemPrompt()` system prompt string (lines 74, 80, 86) |

## Verification

1. Process a single file: `npm run compress:angular -- --resume-from button.md --min-size 0`
2. Check `dist/docs_final/angular/button.md` frontmatter — should have `component: IgxButtonDirective` (not `IgrButton`)
3. Spot-check a grid doc — should have `component: IgxGridComponent`

## Optional Follow-Up (out of scope)

- Update `src/index.ts` tool descriptions from "React" to be framework-generic or parameterized
- Make the MCP server docs directory configurable (currently hardcoded to `react_compressed/`)
- Re-compress all existing Angular docs after the fix is applied
