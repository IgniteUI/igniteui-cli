# CLI Commands — Full Reference

> **Load this file when:** the user needs exact syntax for any `ig` command — full flag lists, all `--type` and `--template` values, `ig config` syntax, upgrading, or the Angular schematics alternative.

## `ig new` — Full Syntax

```bash
ig new "<AppName>" --framework=<f> --type=<t> --template=<tmpl> --theme=<theme>
```

### Framework + Type Combinations

| Framework | Type | Notes |
|-----------|------|-------|
| Angular | `igx-ts` | Ignite UI for Angular — standalone components (v13.1.0+) |
| Angular | `igx-ts-legacy` | Ignite UI for Angular — module-based bootstrapping |
| Angular | `ig-ts` | Ignite UI Angular JS Wrappers |
| React | `igr-es6` | Ignite UI for React (native components) |
| React | `igr-ts` | Ignite UI React Wrappers |
| WebComponents | `igc-ts` | Ignite UI WebComponents |
| jQuery | `js` | Default — `--type` not required |

### Templates

| Value | Description |
|-------|-------------|
| `side-nav` | Side navigation shell (default) |
| `navbar` | Top navigation bar shell |
| `base` | Minimal blank app |
| `side-nav-auth` | Side nav + full auth module (Angular `igx-ts` only) |

### All Flags

| Flag | Notes |
|------|-------|
| `--framework` / `-f` | `angular`, `react`, `jquery`, `webcomponents` |
| `--type` / `-t` | See table above |
| `--template` | See table above |
| `--theme` | Theme name (options depend on selected project library) |
| `--skip-install` | Skip automatic npm install |
| `--skip-git` | Skip Git repository initialization |

---

## `ig add` — Full Syntax

add a view (routing) or component with ready-made setup from a choice of components and some common use-case scenarios. Must be run inside a project created with `ig new` or via `ng add igniteui-angular`. 

```bash
ig add <templateId> <ComponentName> [options]
```

### Flags

| Flag | Version | Notes |
|------|---------|-------|
| `--module` / `-m` | v2.0.0 | Angular only. Path to `.module.ts` relative to `/src/app/` |
| `--skip-route` / `-skr` | v3.2.0 | Suppress auto-generating a navigation route |

```bash
ig add grid AdminGrid --module=admin/admin.module.ts --skip-route
```

---

## `ig list`

Lists all available templates for the current project's framework and type. Always run before `ig add` — this is always current and authoritative; template tables in docs may lag.

```bash
ig list                                    # uses project's framework when run inside a project
ig list --framework=angular --type=igx-ts
ig list -f react
ig l                                       # alias
```

> ⚠️ Always run `ig list` to confirm templateIds before running `ig add`.

---

## `ig generate`

Creates a custom component template scaffold. Registers it under `customTemplates` in global config, making it available via `ig list` and `ig add`. Runs interactively.

```bash
ig generate
```

---

## `ig doc`

```bash
ig doc igx-grid
ig doc "igx-grid paging help"
ig doc          # prompts interactively
```

---

## `ig config`

```bash
ig config get <property> [--global]
ig config set <property> <value> [--global]
ig config add <property> <value> [--global]
```

- Local: `ignite-ui-cli.json` in project root
- Global: user home directory (`~` on Unix / `C:\Users\<user>` on Windows)

---

## Updating & Upgrading

```bash
npm install -g igniteui-cli               # update CLI globally
ng update igniteui-angular                # keep in sync with Angular
ng g @igniteui/angular-schematics:upgrade-packages   # trial → licensed migration
```

Migration rewrites sources to `packages.infragistics.com`. Requires a licensed account — trial accounts get 403 errors.

---

## Angular Schematics Alternative

For Angular CLI projects not created with `ig new`:

```bash
npm i -g @igniteui/angular-schematics
ng add igniteui-angular
ng g @igniteui/angular-schematics:<templateId> --name=<n>
ng new --collection=@igniteui/angular-schematics
```

---

## Step-by-Step Interactive Mode

Running `ig` or `ig new` without arguments launches the Inquirer.js wizard. Supported terminals: Windows Terminal, iTerm2, VS Code integrated terminal. 
