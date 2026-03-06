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
| React | `igr-ts` | Ignite UI React Wrappers |
| WebComponents | `igc-ts` | Ignite UI WebComponents |
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

Lists all available templates for the current project's framework and type. Always run before `ig add` — `ig list` is always current and authoritative; any template tables in documentation may lag behind new releases.

```bash
ig list                                    # inside a project — uses project's framework
ig list --framework=angular --type=igx-ts
ig list -f react
ig l                                       # alias
```

When run inside a project folder, the project's framework takes precedence over any flags passed.

> ⚠️ Always run `ig list` to confirm templateIds before running `ig add`.

---

## `ig start` — Serve

Builds the application, starts a web server, and opens it in the default browser.

```bash
ig start
ig start --port=1234
ig start -p=1234
```

---

## `ig build` — Compile Only

Compiles the project without launching a server. Installs npm dependencies and resolves OSS vs. licensed packages — prompts for Infragistics credentials if a licensed component (e.g. Grid) is detected.

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

## OSS vs. Licensed Packages — Full Detail

### OSS (public npm)

No registry setup needed. Suitable for community-tier components.

```bash
npm install igniteui-angular
```

---

### Licensed (packages.infragistics.com)

Required for premium/enterprise components. Follow these steps:

#### 1. Register the scoped registry

Machine-wide (stored in `~/.npmrc`):
```bash
npm config set @infragistics:registry https://packages.infragistics.com/npm/private-npm/
```

Per-project (add to `<project-root>/.npmrc`, commit to repo only if auth token is NOT included):
```
@infragistics:registry=https://packages.infragistics.com/npm/private-npm/
```

#### 2. Authenticate interactively

```bash
npm adduser --registry=https://packages.infragistics.com/npm/private-npm/ --always-auth
```
Enter your Infragistics account username, password, and e-mail when prompted.
This writes an auth token to `~/.npmrc` automatically.

#### 3. Authenticate via token (CI/CD)

Generate a Base64-encoded `user:password` string and add to `.npmrc`:
```
@infragistics:registry=https://packages.infragistics.com/npm/private-npm/
//packages.infragistics.com/npm/private-npm/:_auth=<BASE64_USER:PASS>
//packages.infragistics.com/npm/private-npm/:always-auth=true
//packages.infragistics.com/npm/private-npm/:email=<YOUR_EMAIL>
```
> **Never commit `.npmrc` files that contain auth tokens.** Add to `.gitignore`.

#### 4. Install the licensed package

```bash
npm install @infragistics/igniteui-angular
```

Verify the registry resolved correctly:
```bash
npm list @infragistics/igniteui-angular
```

---

### Setting Up a License Key (v16+)

From Ignite UI for Angular v16 onward, a **license key string** must also be configured at runtime in addition to the registry setup above.

#### 1. Locate your license key

Log in to [Infragistics My Account](https://account.infragistics.com/subscriptions) → **Subscriptions** → copy the key for your product.

#### 2. Apply the key in your app

In `app.module.ts` (module-based) or `app.config.ts` (standalone):

```typescript
import { IgxLicenseManager } from '@infragistics/igniteui-angular';

// Module-based: inside AppModule constructor
IgxLicenseManager.setLicenseKey('YOUR_LICENSE_KEY');

// Standalone: call before bootstrapApplication()
IgxLicenseManager.setLicenseKey('YOUR_LICENSE_KEY');
bootstrapApplication(AppComponent, appConfig);
```

#### 3. Store the key securely

Never hardcode the key as a string literal in source control. Instead, inject it via an environment variable at build time:

```typescript
// src/environments/environment.ts
export const environment = {
  igLicenseKey: process.env['IG_LICENSE_KEY'] ?? ''
};

// app.module.ts / app.config.ts
import { environment } from '../environments/environment';
IgxLicenseManager.setLicenseKey(environment.igLicenseKey);
```

Set `IG_LICENSE_KEY` in your CI/CD pipeline secrets and Angular build configuration. Add `environment.ts` with real keys to `.gitignore`.

> ⚠️ If the key is missing or invalid, Ignite UI components render a watermark in development and throw an error in production builds.

---

### Switching Licensed → OSS

> ⚠️ Some premium components (e.g. pivot grid, advanced filtering) exist **only** in the licensed package and have no OSS equivalent. Switching to OSS will cause compile errors for any such components — replace or remove them before switching.

| Step | Action |
|------|--------|
| 1 | Remove `@infragistics:registry` line from `.npmrc` |
| 2 | In `package.json`, replace `@infragistics/igniteui-angular` → `igniteui-angular` |
| 3 | Search entire `src/` for `@infragistics/igniteui-angular` imports and remove the scope |
| 4 | Remove any `IgxLicenseManager.setLicenseKey(...)` calls — the OSS package does not use a key |
| 5 | `npm install` |
| 6 | Build and verify no `403` or missing module errors |

---

### Common Errors

| Error | Cause | Fix |
|-------|-------|-----|
| `403 Forbidden` on `npm install` | Not authenticated or trial account | Re-run `npm adduser` with a licensed account |
| `E404 Not Found` for `@infragistics/...` | Registry not registered | Add `@infragistics:registry` to `.npmrc` |
| Auth token rejected in CI | Token stale or base64 encoding wrong | Re-encode `user:password` and update pipeline secret |
| `ENOENT .npmrc` in Docker | File not copied into image | Add `.npmrc` to Docker build context (and exclude from final image) |
| Watermark on components | License key missing or not called before bootstrap | Add `IgxLicenseManager.setLicenseKey(...)` before app initializes |
| `LicenseKey is not valid` in prod | Key set but expired or wrong product tier | Verify key in Infragistics account portal |

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
