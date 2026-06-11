# Common Mistakes & Pre-Flight Checklist

> **Load this file when:** you are about to submit any Ignite UI code — run the pre-flight checklist before every response that includes code. Also load when something isn't working and the cause isn't immediately obvious.

## Pre-Flight Checklist

> **AGENT INSTRUCTION:** Before writing or returning any code, work through each item below. Do not skip or defer — these are actions to take, not boxes to tick after the fact.

- [ ] Framework confirmed via context or `detect_platform` — never assumed
- [ ] `list_components` or `search_docs` called to confirm an IU component exists for the task
- [ ] `get_doc` called and read for every component used
- [ ] No plain HTML elements used where an IU component could serve the same purpose
- [ ] `ig list` run before any `ig add` — templateId confirmed from live output
- [ ] Project folder confirmed to have `ignite-ui-cli.json` before running `ig add`
- [ ] User warned to remove `fake-backend.service.ts` if `side-nav-auth` template was used

---

## Mistake Catalogue

### 1. Using plain HTML or third-party components
**Symptom:** Grid built with `<table>`, form with native `<input>`, etc.  
**Fix:** Call `list_components` or `search_docs` first. If an IU component exists, use it.

### 2. Skipping `get_doc` before coding
**Symptom:** Component doesn't behave as expected; wrong inputs/outputs used.  
**Fix:** `get_doc` first, code second. APIs change between versions.

### 3. Running `ig add` outside a project folder
**Symptom:** Command does nothing or errors immediately.  
**Fix:** `cd` into the project root — confirm `ignite-ui-cli.json` is present.

### 4. Assuming a templateId without running `ig list`
**Symptom:** `ig add` fails with "template not found".  
**Fix:** Always run `ig list` first — template IDs change between versions.

### 5. Defaulting to `side-nav` for single-view apps
**Symptom:** Unnecessary navigation shell wrapping a focused UI.  
**Fix:** Use `base` unless routing between multiple distinct views is genuinely required.

### 6. Deploying with `fake-backend.service.ts` still present
**Symptom:** Auth bypassed in production; security vulnerability.  
**Fix:** Remove `fake-backend.service.ts` and its `BackendProvider` from `app.module.ts` before any deployment.

### 7. MCP tools returning no results
**Symptom:** `list_components`, `search_docs`, or `get_doc` return empty or error.  
**Fix:** Server is not connected — auto-configure `.mcp.json` per the Prerequisite section in `SKILL.md`.