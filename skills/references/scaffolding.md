# Scaffolding Reference

> **Load this file when:** the user is starting a new project and needs to choose a template, or after `ig new` to verify the post-scaffold setup is correct.

## Step 1 — Choose a Template
 
| Template | When to use |
|----------|-------------|
| `empty` | Blank slate — wire everything manually, no layout or styles |
| `base` | Single-view or focused UI (a form, a grid, a dashboard). **Start here unless routing between multiple views is required.** |
| `side-nav` | Multi-view app where users navigate between distinct sections |
| `navbar` | Top navigation bar shell |
| `side-nav-auth` | Side nav + full auth module — Angular `igx-ts` only → see `auth-template.md` |
 
**Rule of thumb:** A single-view implementation doesn't need a side-nav shell. Only use `side-nav` when routing between multiple views is genuinely required.
 
---
 
## Step 2 — Scaffold with the MCP Tool
 
Call `generate_ignite_app` directly.
 
```
generate_ignite_app(
  framework   = "angular",      // angular | react | blazor | webcomponents
  projectName = "MyApp",
  template    = "base",         // empty | base | side-nav | navbar | side-nav-auth
  outputPath  = "./MyApp"
)
```
 
Then install and start:
 
```bash
cd MyApp
npm install
npm start                        
```
 
---

## File Types by Framework

| Framework      | Component files     | Style files       |
|----------------|---------------------|-------------------|
| Angular        | `.ts` + `.html`     | `.scss`           |
| React          | `.tsx`              | `.scss` or `.css` |
| Blazor         | `.razor`            | `.scss`           |
| Web Components | `.ts` + `.html`     | `.scss`           |

---

## Post-Scaffold Checklist

- [ ] `npm install` completed without errors
- [ ] `npm start` completed without errors
- [ ] `ignite-ui-cli.json` present in project root (required for `ig add`)
