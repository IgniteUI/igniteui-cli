# Project Context

The authoritative guide to this repository (stack, architecture, build and test commands)
is [`CLAUDE.md`](../../CLAUDE.md) at the repository root. Read it before making changes;
if it disagrees with this file, it wins. This file only adds the rules that apply to agents.

## Working Rules for Agents

- **Never commit.** Do not run `git add`, `git commit`, `git push`, `git stash`, `git checkout -b`, `git branch`, or open pull requests. If you changed files, leave them in the working tree and report the diff (`git status --short`, `git diff --stat`). A human reviews and commits.
- Temporary files (e.g. `npm pack` output for checking a package's type declarations) go in a temporary directory **outside the repository**. The one exception is `output/` (gitignored), which belongs to `scripts/smoke-test.sh`: smoke runs and commands inside a kept smoke project may write there.
- Do not edit compiled output (`*.js`, `*.js.map` next to a `.ts` source); edit the `.ts` and rebuild.
- Do not edit the repository's own manifests or lockfiles (root `package.json`, `packages/*/package.json`, `yarn.lock`). Project-template manifests under `**/files/package.json` are template content and may be edited when the task calls for it.
- Do not change the CLI's own version (`lerna`, `scripts/versionScript.ts`).
- When something is ambiguous or out of scope, stop and report instead of guessing.

No tool enforces these rules; you are responsible for following them. The same boundaries, plus
not reading secrets such as `.env` and not editing under `.git/`, `node_modules/` or `coverage/`,
are listed in [`permissions/policy.yaml`](../permissions/policy.yaml).

## Internal Skills

- [`igniteui-cli-build-test`](../skills/igniteui-cli-build-test/SKILL.md): build, lint, Jasmine
- [`igniteui-cli-smoke-test`](../skills/igniteui-cli-smoke-test/SKILL.md): running, judging and triaging the template smoke test
- [`igniteui-cli-template-anatomy`](../skills/igniteui-cli-template-anatomy/SKILL.md): template layout, version pins, cross-framework parity
