# Working Rules for the Maintenance Agents

These rules apply to every agent in [`agents/`](./agents/). The repository guide is
[`AGENTS.md`](../AGENTS.md) at the root; read it before making changes. This file only adds the boundaries that apply to agents. No tool enforces them; you are responsible for following them.

- **Never commit.** Do not run `git add`, `git commit`, `git push`, `git stash`, `git checkout -b`, `git branch`, or open pull requests. If you changed files, leave them in the working tree and report the diff (`git status --short`, `git diff --stat`). A human reviews and commits.
- Temporary files (e.g. `npm pack` output for checking a package's type declarations) go in a temporary directory **outside the repository**. The one exception is `output/` (gitignored), which belongs to `scripts/smoke-test.sh`: smoke runs and commands inside a kept smoke project may write there. Do not edit files under `output/` directly.
- Do not edit compiled output (`*.js`, `*.js.map` next to a `.ts` source); edit the `.ts` and rebuild.
- Do not edit the repository's own manifests or lockfiles: root `package.json`, `packages/*/package.json`, `packages/igniteui-mcp/igniteui-doc-mcp/package.json` and `server.json`, `yarn.lock`, any `package-lock.json`. Project-template manifests under `**/files/package.json` are template content and may be edited when the task calls for it.
- Do not change the CLI's own version (`lerna`, `lerna.json`, `scripts/versionScript.ts`).
- Do not edit anything under `.git/`, `node_modules/` or `coverage/`.
- Do not read secrets: `.env` and `.env.*` (at any depth), `secrets/`, `*.pem`, `*.key`, `*.pfx`, `.npmrc`.
- When something is ambiguous or out of scope, stop and report instead of guessing.
