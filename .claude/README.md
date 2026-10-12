# Ignite UI CLI Skills Guide

AI skills for maintaining the Ignite UI CLI's **project and component templates**: what each one does, how they fit together, and how to maintain them.

Each procedure is written once, as a skill in `.claude/skills/` ([Agent Skills](https://agentskills.io/specification) format), which Claude Code and VS Code Copilot both read. There are no custom agent files: you run a workflow by asking for the task, and the assistant loads the matching skill. Shared conventions, including the rules every workflow follows, are in [`AGENTS.md`](../AGENTS.md).

---

## Ground Rules

- **Workflows never commit.** No `git add`, `commit`, `push`, branches or PRs. Every workflow ends with the working tree changed and a report; a human reviews and commits.
- **The smoke test is the proof.** Jasmine stubs package installs, so template work is verified with `scripts/smoke-test.sh`.
- **Stop and report rather than guess.** Major version updates, missing APIs, id conflicts and anything out of scope are reported, not worked around.

---

## Skills

| Skill | Kind | Writes | Use it for |
|---|---|---|---|
| [`igniteui-cli-template-version-update`](./skills/igniteui-cli-template-version-update/SKILL.md) | Workflow | Template pins | Update Ignite UI versions that `ig new` / `ig add` scaffold (patch/minor only). In `dry-run` mode: a read-only report of version drift and peer conflicts |
| [`igniteui-cli-component-template`](./skills/igniteui-cli-component-template/SKILL.md) | Workflow | New template folders | Add a component template for Angular, React and/or Web Components |
| [`igniteui-cli-changelog`](./skills/igniteui-cli-changelog/SKILL.md) | Workflow | `CHANGELOG.md` | Draft or write the release section for a version cut |
| [`igniteui-cli-build-test`](./skills/igniteui-cli-build-test/SKILL.md) | Reference | — | Build, lint, Jasmine, running one spec file, specs that guard templates |
| [`igniteui-cli-smoke-test`](./skills/igniteui-cli-smoke-test/SKILL.md) | Reference | — | Running the smoke test, checking kept projects, triaging failures ("Triaging a Run"), editing the script |
| [`igniteui-cli-template-anatomy`](./skills/igniteui-cli-template-anatomy/SKILL.md) | Reference | — | Template layout per framework, model templates, every place versions are pinned, parity auditing ("Auditing Parity Across Frameworks") |

The workflows triage their own smoke runs; use the smoke-test skill directly for a run you started by hand.

---

## How They Fit Together

Each workflow runs on its own and does not call the others. You chain them.

```text
"what's missing?" (anatomy skill) ──► component-template workflow ──┐
"what's stale?"  (dry-run)        ──► template-version-update workflow ──┤
                                                                     ▼
                                      each runs scripts/smoke-test.sh and triages its own failures
                                                                     │
                                                   (at release cut)  ▼
                                                             changelog workflow
```

---

## Quick Start

| Goal | Ask |
|---|---|
| Update Web Components template versions to latest | "update webcomponents template versions" |
| Update to a specific version | "update template pins of igniteui-angular to 22.3.0" |
| See which pins are stale or conflicting | "dry-run template version update, all frameworks" |
| Add a template | "add a Tile Manager component template for angular" |
| See which templates are missing | "which component templates are missing per framework?" |
| Make sense of a failed smoke run | "triage output/smoke" |
| Release notes for 15.9.0 | "draft the changelog for 15.9.0, 2026-10-15" |

The assistant picks the skill from its description. To be explicit, name it: in Claude Code, `/igniteui-cli-changelog draft 15.9.0, 2026-10-15`; in any tool, "Follow `.claude/skills/igniteui-cli-changelog/SKILL.md`: draft 15.9.0, 2026-10-15".

**Keeping the session small.** The update and template workflows produce long build and smoke output. In Claude Code you can run one in a subagent so that output stays out of your session: "run the igniteui-cli-template-version-update skill in a subagent: update webcomponents". Otherwise start a fresh session per workflow.

---

## File Locations

```text
AGENTS.md                              ← shared conventions, incl. the rules for maintenance workflows
CLAUDE.md                              ← @AGENTS.md, plus Claude-only notes if any
.claude/
  README.md                            ← this guide
  skills/<name>/SKILL.md               ← every procedure and reference; read by Claude Code and Copilot
```

---

## Permissions

Every limit on the workflows (the no-commit rule, the "Maintenance Workflows" rules in `AGENTS.md`, each workflow's "Limits") is an instruction the assistant follows, not a technical restriction. Review the diff before you commit.

---

## Maintenance Notes

- Skill frontmatter carries `name`, `description` and `license`. Keep the Skills table in line with them.
- A skill's `description` is loaded in every session and decides when the skill is picked. Lead with the term people use for the task, keep the "WHEN TO USE / WHEN NOT TO USE" form, and name each trigger once; the procedure itself belongs in the body.
- Each fact lives in one skill. Workflows point to the reference skill (anatomy, smoke-test, build-test) at the step that needs it instead of restating it. When repository facts change (new framework root, new pin location, smoke-test flags), update that reference skill only.
- Boundaries shared by all workflows go in the "Maintenance Workflows" section of `AGENTS.md`, which is always loaded; skills do not link it.
- `dry-run` mode is read-only by instruction only.

### Adding a Workflow

Add one only for a recurring, multi-step task. If an existing reference skill plus a plain request covers it, extend that skill instead.

1. Write `.claude/skills/igniteui-cli-<task>/SKILL.md`: a one-line scope, inputs, "Limits" (only limits specific to this workflow, stated as what the workflow changes and what stops it; the shared ones, including the no-commit rule, stay in `AGENTS.md`), numbered steps with each stop condition at the step where it arises, "Follow-up Corrections" when the right fix differs from simply fixing and re-validating, final report and self-validation. Point to a reference skill at the step that uses it; put it under "Read first" only when most steps need it.
2. Add it to the Skills and Quick Start tables above.

### Adding a Reference Skill

1. Write `.claude/skills/<name>/SKILL.md` (`name` must match the folder: lowercase letters, digits, hyphens).
2. Add it to the Skills table above.
