# `ig update` - Manual Testing Guide

## 1. Setup

### Step 1 - Get the CLI

1. Check out the branch or pull request you want to test locally.
2. From the `igniteui-cli` repository, install dependencies and build:

```bash
npm install
npm run build
```

### Step 2 - Use the Local CLI

The changes under test may not be in a published CLI version yet, so tests must use the locally built CLI rather than an already published version.

Use:

```bash
node "<CLI_PATH>" update
```

Where `<CLI_PATH>` is the absolute path to:

`igniteui-cli/packages/cli/bin/execute.js`

For example:

```bash
node "C:\Work\igniteui-cli\packages\cli\bin\execute.js" update
```

**Important:** All `ig update` commands in this guide should be executed through this local entry point.

### Step 3 - Prepare Test Projects

Create separate projects for each framework, preferably outside the CLI repository.

**React:**

```bash
ig new qa-react --framework=react --type=igr-ts
```

**Web Components:**

```bash
ig new qa-wc --framework=webcomponents
```

**Angular:**

```bash
ig new qa-angular --framework=angular --type=igx-ts
```

The `ig new` commands can use an installed CLI. Alternatively, replace `ig` with `node "<CLI_PATH>"` to use the local CLI.

You can also use existing projects or demo projects from the documentation:

- [React - Getting Started](https://www.infragistics.com/products/ignite-ui-react/react/components/general-getting-started)
- [Web Components - Getting Started](https://www.infragistics.com/products/ignite-ui-web-components/web-components/components/general-getting-started)
- [Angular - Getting Started](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/getting-started)

**Important:**

- Run update commands from inside the test project's root directory.
- Make sure the package you want to update is listed in the project's `package.json`.
- For real update tests, use an older package version. Newly generated projects may already use the latest versions.
- Use disposable projects or separate copies when testing different scenarios.

---

## 2. Test Scenarios - React & Web Components

Run these scenarios in both React and Web Components projects.

Use `igniteui-react` for React and `igniteui-webcomponents` for Web Components, or another suitable package listed directly in the project's `package.json`.

### 2.1. Basic Tests

These are the main scenarios that every tester should run.

| # | Test | Command | Expected Result |
|---|---|---|---|
| 1 | Help | `ig update --help` | Displays the command description, options, and usage information. |
| 2 | Available updates | `ig update` | Lists available updates or reports that none are available. Does not modify files. |
| 3 | Update preview | `ig update <package> --dry-run` | Shows planned changes without modifying files or installing packages. |
| 4 | Real update | `ig update <package>` | Updates `package.json`, installs dependencies, and runs migrations if declared. |
| 5 | Specific version | `ig update <package>@<version>` | Updates to the requested version if available and compatible. |
| 6 | Skip installation | `ig update <package> --skip-install` | Updates `package.json` without installing packages or running migrations. |
| 7 | Repeat update | `ig update <package>` | If already up to date, reports that nothing needs updating without unnecessary changes. |

**React example:**

```bash
node "<CLI_PATH>" update
node "<CLI_PATH>" update igniteui-react --dry-run
node "<CLI_PATH>" update igniteui-react
```

**Web Components example:**

```bash
node "<CLI_PATH>" update
node "<CLI_PATH>" update igniteui-webcomponents --dry-run
node "<CLI_PATH>" update igniteui-webcomponents
```

### 2.2. Additional Tests

These scenarios provide more coverage of dependency management and CLI options.

| # | Test | Command | Expected Result |
|---|---|---|---|
| 8 | Verbose output | `ig update <package> --verbose` | Displays detailed version resolution, dependency checks, and installation information. |
| 9 | Multiple packages | `ig update <pkg1> <pkg2>` | Evaluates both packages together and checks dependency compatibility. |
| 10 | Package groups | `ig update <package> --dry-run --verbose` | Includes related direct dependencies in the update plan when required by a package group. |
| 11 | Peer dependencies | `ig update <package> --dry-run --verbose` | Checks peer requirements and reports required updates, held-back versions, or conflicts. |
| 12 | Uncommitted changes | `ig update <package> --allow-dirty` | Allows updating a Git project with uncommitted changes and displays a warning. Without the flag, the update is blocked. |
| 13 | Force update | `ig update <package> --force` | Allows overriding supported dependency conflicts and warns about possible incompatibilities. |
| 14 | Package migrations | `ig update <package> --migrate-only --from <version>` | Runs applicable migrations without updating package versions, if the package provides migration metadata. |

**Notes:**

- Package groups and peer dependency scenarios require projects with suitable related packages.
- `--force` should be tested with an actual dependency conflict. It does not bypass every error.
- Migration testing requires a package that provides `ig-update` migration metadata. See **Section 5**.
- The CLI supports npm, yarn, pnpm, and bun. Testing with additional package managers is useful when available.

### 2.3. Edge Cases & Error Handling

These scenarios check validation, error handling, and safe recovery.

| # | Test | Command / Scenario | Expected Result |
|---|---|---|---|
| 15 | Invalid package | `ig update nonexistent-qa-package` | Reports that the package is not a direct dependency without modifying files. |
| 16 | Empty migration name | `ig update <package> --name=` | Reports `--name needs a migration name.` without starting an update. |
| 17 | Invalid version specification | `ig update <package>@file:../local` | Rejects unsupported version specifications without modifying the project. |
| 18 | Out-of-sync dependencies | Installed package version is incompatible with its declared range. | Detects the inconsistency and prevents unsafe updates. |
| 19 | Dependency conflicts | Update packages with incompatible peer requirements. | Reports conflicts without applying an incompatible update unless a supported override is requested. |
| 20 | Failed installation | Trigger an update where the package manager installation fails. | Restores `package.json` and the lockfile. Restoration of `node_modules` is not guaranteed. |
| 21 | No migration metadata | Update a package without `ig-update.migrations`. | Updates the package normally without attempting migrations. |

**Notes:**

- Some edge cases require specially prepared test projects or developer-provided fixtures.
- Package groups and peer dependencies are explained in **Section 4**.
- The current status of migrations and `ig-update` metadata is explained in **Section 5**.

---

## 3. Angular Testing

The `ig update` command also supports Angular projects.

**Unlike React and Web Components, Angular uses the project's existing `ng update` implementation.**

The CLI delegates to the local Angular CLI, which handles package updates, dependency installation, and migrations.

### How to Test

1. Open the Angular project's root directory.
2. Check available updates.
3. Preview an update.
4. Run the actual update.
5. Verify that dependencies are updated and the application builds successfully.

**Note:** `--skip-install` is not supported for Angular projects.

---

## 4. Package Groups & Peer Dependencies

Some Ignite UI packages are related and may need to be updated together.

The CLI already contains **built-in package groups** for React and Web Components. These are used as a fallback until the product packages provide their own `ig-update.packageGroup` metadata.

The CLI also checks peer dependencies to avoid incompatible package versions.

### How to Test

1. Use a React or Web Components project with two or more related Ignite UI packages listed in `package.json`.
2. Make sure they are installed and newer versions are available.
3. Run an update preview for one package:

```bash
node "<CLI_PATH>" update <package> --dry-run --verbose
```

4. Review the update plan.

**Expected Result:**

- Related packages are included when they need to be updated together.
- Required peer dependency updates are considered.
- Incompatible versions may be held back or reported as conflicts.
- No files are modified during `--dry-run`.

**Note:** Built-in package groups are already available in this PR. Product-specific `ig-update.packageGroup` metadata can be added to the corresponding packages separately.

---

## 5. Migrations - Current Status

The new `ig update` command supports automatic migrations for React and Web Components through `ig-update` metadata.

**This section describes the current state of product-specific migrations, which may change in future releases. The CLI itself does not include product-specific React or Web Components migrations.**

Migration metadata and implementation files must be provided by the corresponding product packages.

You can check whether a published package already provides this metadata:

```bash
npm view igniteui-react@latest ig-update --json
npm view igniteui-webcomponents@latest ig-update --json
```

### Expected Behavior

- If a package provides applicable `ig-update.migrations`, the CLI can execute those migrations after an update.
- If no migrations are declared, the CLI updates the package normally without running migrations.
- Seeing `no migrations declared` is expected and is **not a bug**.

Migration execution can be tested separately using developer-provided local test fixtures.

**Angular:** Angular projects continue using the existing `ng update` migration mechanism and do not depend on the new React/Web Components metadata.

---

## 6. Verification After an Update

After each successful update, verify:

1. Does `package.json` contain the expected package versions?
2. Was the corresponding lockfile (`package-lock.json`, `yarn.lock`, etc.) updated?
3. Did dependency installation complete successfully?
4. Does the project build successfully using its configured build command (for example, `npm run build` or `ig build`)?
5. Does the application start and do its components work correctly?
6. Are there any new runtime errors in the browser console?

---

## 7. Reporting

For any failed scenario, provide:

- Framework: React, Web Components, or Angular.
- Command executed.
- Package versions before and after the update.
- Expected result vs. actual result.
- Console output, error messages, or screenshots.

The main goal is to verify that **`ig update` updates dependencies correctly, handles errors safely, and leaves the application working after the update.**