# Ignite UI CLI — Command Reference

> **When to consult this file:** The skill (`ignite-ui-cli-skill.md`) covers rules, workflow, and quick syntax. Come here when you need the full flag list for a command, the complete template ID tables, port defaults, the auth file structure, or the production checklist. This file is reference material — not behavioral instructions.

---

## `ig new` — Full Syntax

Creates a new project with Ignite UI infrastructure pre-configured and dependencies installed.

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
| React | `ig-ts` | Ignite UI jQuery React Wrappers |
| jQuery | `js` | Default — `--type` not required |

### Templates

| Value | Description |
|-------|-------------|
| `side-nav` | Side navigation shell (default) |
| `navbar` | Top navigation bar shell |
| `base` | Minimal blank app |
| `side-nav-auth` | Side nav + full auth module (Angular igx-ts only) |

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

Generates a component and automatically integrates it into routing and module systems. Must be run inside an existing project created with `ig new` or via `ng add igniteui-angular`. Quickstart (step-by-step) projects do NOT support this command.

```bash
ig add <templateId> <ComponentName> [options]
```

### Flags

| Flag | Version | Notes |
|------|---------|-------|
| `--module` / `-m` | v2.0.0 | Angular only. Path to `.module.ts` relative to `/src/app/` |
| `--skip-route` / `-skr` | v3.2.0 | Suppress auto-generating a navigation route |

### Example with flags

```bash
ig add grid AdminGrid --module=admin/admin.module.ts --skip-route
```

---

## `ig list` — Usage

Lists all available templates for the current project's framework and type. Always run before `ig add` — the tables below may lag behind new releases, but `ig list` is always current.

```bash
ig list                                    # inside a project — uses project's framework
ig list --framework=angular --type=igx-ts
ig list -f react
ig l                                       # alias
```

When run inside a project folder, the project's framework takes precedence over any flags passed.

> ⚠️ Always run `ig list` to confirm templateIds.

---

## `ig start` — Serve & Default Ports

Builds the application, starts a web server, and opens it in the default browser.

```bash
ig start
ig start --port=1234
ig start -p=1234
```

| Framework | Type | Default URL |
|-----------|------|-------------|
| Angular | `igx-ts` | http://localhost:4200/ |
| Angular | `ig-ts` (Wrappers) | http://localhost:3001/ |
| React | `igr-es6` | http://localhost:3000/ |
| React | `ig-ts` (Wrappers) | http://localhost:3002/ |
| jQuery | `js` | http://localhost:3000/ |

---

## `ig build` — Compile Only

Compiles the project without launching a server. Installs npm dependencies and resolves OSS vs. licensed packages — prompts for Infragistics credentials if a licensed component (e.g. Grid) is detected. Build artifacts and CSS are output to the `output/` directory.

```bash
ig build
```

---

## `ig test` — Run Tests

Runs the test suite for the current project using the framework's configured test environment. Supported for Angular, React, and jQuery projects.

```bash
ig test
```

---

## `ig generate` — Custom Template

Creates a new custom component template scaffold. Registers the template path in the global config under `customTemplates` so it becomes available via `ig list` and `ig add`.

```bash
ig generate
```

Runs interactively — prompts for template name, framework, and file structure.

---

## `ig doc` — Documentation Search

Opens the Infragistics knowledge base in the default browser for a given search term.

```bash
ig doc igx-grid
ig doc "igx-grid paging help"
ig doc                            # prompts for a search term interactively
```

---

## `ig config` — Full Syntax

Reads and writes CLI configuration stored in `ignite-ui-cli.json`.

```bash
ig config get <property> [--global]
ig config set <property> <value> [--global]
ig config add <property> <value> [--global]
```

- Local config: `ignite-ui-cli.json` in project root
- Global config: user home directory (`~` on Unix / `C:\Users\<user>` on Windows)
- Custom templates registered under `customTemplates` via `ig generate`

---

## Authentication Template — Full Detail

Scaffolds a full client-side auth module on top of the side-nav shell. Angular `igx-ts` only.

```bash
ig new "MyApp" --framework=angular --type=igx-ts --template=side-nav-auth
```

### Files Generated under `src/app/authentication/`

| File | Purpose |
|------|---------|
| `authentication.module.ts` | Exports all auth components and services |
| `authentication-routing.module.ts` | Login-related routes |
| `services/user.service.ts` | Current user state |
| `services/authentication.service.ts` | JWT logic wired to REST endpoints |
| `services/fake-backend.service.ts` | **Dev-only mock — remove before deployment** |

### Enable External Providers

Uncomment in `app.module.ts`:

```typescript
// this.externalAuthService.addGoogle('<CLIENT_ID>');
// this.externalAuthService.addMicrosoft('<CLIENT_ID>');
// this.externalAuthService.addFacebook('<CLIENT_ID>');
```

### Production Checklist

- [ ] Remove `fake-backend.service.ts` and its `BackendProvider` from `app.module.ts`
- [ ] Replace localStorage JWT with HttpOnly cookies (localStorage is XSS-vulnerable)
- [ ] Set correct redirect URLs and allowed origins in each provider's developer console
- [ ] Never commit `<CLIENT_ID>` values — use environment variables

---

## Updating & Upgrading

### Update CLI

```bash
npm install -g igniteui-cli           # global update
ng update igniteui-cli                # within Angular project
ng update igniteui-angular            # keep in sync with @angular/core and @angular/cli
```

### Migrate Trial → Licensed

```bash
ng g @igniteui/angular-schematics:upgrade-packages

# Yarn users — skip install, then run yarn manually
ng g @igniteui/angular-schematics:upgrade-packages --skip-install
yarn install
```

Rewrites package sources to `packages.infragistics.com`. Requires a **licensed** Infragistics account — trial accounts receive 403 errors.

---

## Angular Schematics Alternative

For Angular CLI projects not created with `ig new`:

```bash
npm i -g @igniteui/angular-schematics
ng add igniteui-angular                                            # wire into existing project
ng g @igniteui/angular-schematics:<templateId> --name=<n>      # add a component
ng new --collection=@igniteui/angular-schematics                   # new project via schematics
```

---

## Step-by-Step Interactive Mode

Running `ig` or `ig new` without arguments launches the Inquirer.js wizard:

- **Arrow keys** — navigate options
- **Space** — toggle features (e.g. sorting, paging on grids)
- On completion: auto-installs packages, builds, and opens the app in the browser

Supported terminals: Windows Terminal, iTerm2, VS Code integrated terminal.
Quickstart projects created this way **do not support `ig add`**.
