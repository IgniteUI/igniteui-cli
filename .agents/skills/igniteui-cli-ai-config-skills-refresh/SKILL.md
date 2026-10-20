---
name: igniteui-cli-ai-config-skills-refresh
description: "Refresh the Ignite UI AI skills bundled in the ai-config project templates (what ig ai-config copies when the project has no Ignite UI package with its own skills/) from the skills/ folders of the igniteui-angular, igniteui-react, igniteui-webcomponents and igniteui-blazor repositories. WHEN TO USE: syncing or checking the bundled ai-config skills; asking how far they lag behind a branch or tag (dry-run). WHEN NOT TO USE: this repository's own maintenance skills under .agents/skills; editing a skill's content (that belongs in the framework repository)."
license: MIT
---

# AI-Config Skills Refresh

Mirrors each framework repository's `skills/` folder into the **bundled skills** of the `ai-config` project templates. `ig ai-config` copies these into a user's project when no installed Ignite UI package ships its own `skills/` (`resolveSkillsRoots` in `packages/core/util/ai-skills.ts`).

| Framework | Source | Bundled copy |
|---|---|---|
| angular | `IgniteUI/igniteui-angular` | `packages/igx-templates/igx-ts/projects/ai-config/files/skills` |
| react | `IgniteUI/igniteui-react` | `packages/cli/templates/react/igr-ts/projects/ai-config/files/skills` |
| webcomponents | `IgniteUI/igniteui-webcomponents` | `packages/cli/templates/webcomponents/igc-ts/projects/ai-config/files/skills` |
| blazor | `IgniteUI/igniteui-blazor` | `packages/cli/templates/blazor/igb/projects/ai-config/files/skills` |

The release build (`npm run build-pack`, run by `npm-publish.yml`) re-copies the same folders from `master` through `scripts/update-skills.ts`, so the published package always ships `master`'s skills. This workflow keeps the **committed** copies (used by local runs, specs and reviewers) in step with what ships, or pins them to another ref when asked.

---

## Input

- **Frameworks**: one or more of `angular`, `react`, `webcomponents`, `blazor`, or `all`.
- **Ref** (optional): branch, tag or commit in the source repositories. Default `master`, matching the release build.
- **Mode**:
  - `update` (default): Steps 1-5.
  - `dry-run`: Steps 1-2, then the dry-run report. No files change.

If the frameworks are missing, stop and ask. A ref other than `master` is a deliberate choice: repeat it in the report, because the next release build still copies from `master`.

---

## Limits

- Your changes are the files under the bundled `skills/` folders in the table, nothing else. The `ai-config` templates' other files (`AGENTS.md`, instruction files, `index.ts`) stay as they are.
- The bundled copy is an exact mirror of the source `skills/` folder. Content problems (broken links, bad frontmatter) are reported for the framework repository to fix, not edited here.
- Do not run `scripts/update-skills.ts` or `npm run build:update-skills`: they `git fetch` and `git checkout -B` inside the documentation submodules, which writes to git and moves submodule pointers. Use the script below, which reads from GitHub over HTTPS and runs no git commands.

---

## Script

[`scripts/sync-skills.mjs`](./scripts/sync-skills.mjs) (Node 18+). It makes two `api.github.com` requests per framework (commit and file list), through `gh` when `gh auth status` passes, otherwise directly with `GH_TOKEN` / `GITHUB_TOKEN` if set (without a token GitHub allows 60 requests an hour). File contents come from `raw.githubusercontent.com` and are checked against the tree's hashes. In a cloud agent session, an `ERROR` naming `api.github.com` means the firewall blocks it: report that for every framework and stop.

```bash
node .agents/skills/igniteui-cli-ai-config-skills-refresh/scripts/sync-skills.mjs \
  [--framework angular,react,webcomponents,blazor] [--ref <branch|tag|sha>] [--apply] [--json]
```

- Resolves the ref to a commit, lists `skills/` through the GitHub tree API and compares each file's git blob hash with the bundled copy (CRLF in the working tree is ignored). Only changed or new files are downloaded.
- Prints `+` added, `~` modified, `-` deleted per framework, with the source commit.
- `!` lines are content issues in the result: a `SKILL.md` without frontmatter, `name` or `description`; a `name` that differs from its folder; relative Markdown links that point to a missing file or outside the `skills/` folder (they break once copied into a project).
- Without `--apply` nothing is written. `--apply` writes added and modified files, deletes removed ones and prunes empty folders.

---

## Steps

### 1. Record the Starting Point

Run `git status --short` and keep the output, so the report separates your changes from what was already modified.

### 2. Compare

Run the script without `--apply` for the frameworks and ref in scope. A framework with an `ERROR` line (ref not found, no `skills/` folder, GitHub access) is a stop item for that framework; the others continue.

In `dry-run` mode, stop here.

### 3. Apply

Run the script again with `--apply` and the same arguments. Then run it once more without `--apply`: every framework in scope should report `added=0 modified=0 deleted=0`.

### 4. Validate

1. `npm run build` if it has not run in this checkout. The spec runs compiled code.
2. `npx jasmine spec/unit/ai-config-spec.js`.
3. End to end, per framework in scope, in a new empty temporary directory **outside the repository** (no `package.json`, so the bundled skills are used):
   ```bash
   node <repo>/packages/cli/bin/execute.js ai-config --framework <fw> --agents claude --assistants none
   ```
   It must report `<n> AI skill file(s) created or updated`, with `<n>` equal to the number of files in that framework's bundled `skills/` folder, and `.claude/skills/` must contain them. Delete the temporary directory afterwards.

The smoke test does not cover `ai-config` (hidden project), so it is not part of this workflow.

### 5. Follow-up Corrections

When the user asks for a different ref or framework set, rerun Steps 2-4 for the affected frameworks only.

---

## Final Report

1. **Per framework**: source repository, ref and commit (from the script), and the counts added / modified / deleted / unchanged. List renamed or removed skill folders explicitly; they change what users get.
2. **Content issues** (`!` lines), each as an item for the framework repository, with the file and the problem.
3. **Stopped**: frameworks with an error, and why.
4. **Validation**: spec result, and per framework the `ai-config` file count against the bundled folder's.
5. **Proposed CHANGELOG line**, e.g.
   `* **chore(templates):** Updated the AI skills bundled with \`ig ai-config\` for Angular and Web Components.`
6. **Diff**: `git status --short` and `git diff --stat`, distinguishing pre-existing changes from yours.

### Dry-Run Report

Items 1-3 above, plus the date. State that nothing was written.

## Final Self-Validation

In `dry-run` mode only the first item applies, plus: `git status --short` is unchanged from Step 1.

- [ ] Git was used only as the `AGENTS.md` git rules allow for this session, and `scripts/update-skills.ts` was not run.
- [ ] Only files under the bundled `skills/` folders in scope changed.
- [ ] A rerun of the script without `--apply` reports no changes for every framework in scope.
- [ ] The spec passed and each framework's `ai-config` run copied every bundled file.
