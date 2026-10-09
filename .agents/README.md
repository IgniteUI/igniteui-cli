# Ignite UI CLI Agent Guide

Custom AI agents for maintaining the Ignite UI CLI's **project and component templates**: what each one does, how they fit together, and how to maintain them.

The layout follows the [Agentic Collaboration Standard (ACS)](https://github.com/jackby03/agentic-collaboration-standard) and mirrors the agent system in `igniteui-angular`.

---

## Ground Rules

- **Agents never commit.** No `git add`, `commit`, `push`, branches or PRs. Every agent ends with the working tree changed and a report; a human reviews and commits.
- **The smoke test is the proof.** Jasmine stubs package installs, so template work is verified with `scripts/smoke-test.sh`.
- **Stop and report rather than guess.** Major version updates, missing APIs, id conflicts and anything out of scope are reported, not worked around.

---

## Agent List

| Agent | Writes | Use it for |
|---|---|---|
| [`template-version-update-agent`](./agents/template-version-update-agent.md) | Template pins | Update Ignite UI versions that `ig new` / `ig add` scaffold (patch/minor only). In `dry-run` mode: a read-only report of version drift and peer conflicts |
| [`component-template-agent`](./agents/component-template-agent.md) | New template folders | Add a component template for Angular, React and/or Web Components |
| [`changelog-agent`](./agents/changelog-agent.md) | `CHANGELOG.md` | Draft the release section for a version cut |

Tasks that need no agent of their own use a skill from the main session:

- **Triage a failed smoke run** you started by hand: the [smoke-test skill](./skills/igniteui-cli-smoke-test/SKILL.md) ("Triaging a Run"). The writing agents already triage their own runs.
- **Find missing or inconsistent templates across frameworks**: the [template-anatomy skill](./skills/igniteui-cli-template-anatomy/SKILL.md) ("Auditing Parity Across Frameworks").

---

## How They Fit Together

Each agent works on its own and does not call the others. You chain them.

```text
"what's missing?" (anatomy skill) ──► component-template-agent ──┐
"what's stale?"  (dry-run)        ──► template-version-update-agent ──┤
                                                                  ▼
                                   each runs scripts/smoke-test.sh and triages its own failures
                                                                  │
                                                (at release cut)  ▼
                                                          changelog-agent
```

---

## Quick Start

| Goal | Ask |
|---|---|
| Update Web Components template versions to latest | `template-version-update-agent`: "update webcomponents" |
| Update to a specific version | `template-version-update-agent`: "update igniteui-angular to 22.3.0" |
| See which pins are stale or conflicting | `template-version-update-agent`: "dry-run, all frameworks" |
| Add a template | `component-template-agent`: "add Tile Manager for angular" |
| See which templates are missing | Main session: "which component templates are missing per framework?" |
| Make sense of a failed smoke run | Main session: "triage output/smoke" |
| Release notes for 15.9.0 | `changelog-agent`: "draft 15.9.0, 2026-10-15" |

The agents and skills are not registered with any AI tool. To run one, point your assistant at its file, e.g. "Follow `.agents/agents/changelog-agent.md`: draft 15.9.0, 2026-10-15". If your tool can run a subagent, give it the file there, so build and smoke output stays out of your main session.

---

## File Locations

```text
.agents/
  main.yaml                ← ACS manifest
  README.md                ← this guide
  context/project.md       ← working rules for agents (CLAUDE.md holds the project guide)
  agents/                  ← agent definitions
  skills/                  ← skills
  permissions/policy.yaml  ← read/write boundaries (documentation only; see below)
```

Everything lives in `.agents/`; there are no tool-specific copies to keep in sync.

### Skills

| Skill | Covers |
|---|---|
| [`igniteui-cli-build-test`](./skills/igniteui-cli-build-test/SKILL.md) | Build, lint, Jasmine, specs that guard templates |
| [`igniteui-cli-smoke-test`](./skills/igniteui-cli-smoke-test/SKILL.md) | Running the smoke test, reading results, classifying and triaging failures |
| [`igniteui-cli-template-anatomy`](./skills/igniteui-cli-template-anatomy/SKILL.md) | Template layout per framework, placeholders, every place versions are pinned, parity auditing |

---

## Permissions

`policy.yaml` is documentation: no tool reads or enforces it. Every limit on the agents (the no-commit rule, the working rules in `context/project.md`, each agent's "What You Do NOT Do") is an instruction the assistant follows, not a technical restriction. Review the diff before you commit.

---

## Maintenance Notes

- Agent and skill frontmatter carries `name` and `description` only (skills also `license`). Keep the README tables in line with them.
- **Change `policy.yaml` and the working rules in `context/project.md` together**; they describe the same boundaries.
- `dry-run` mode is read-only by instruction only.
- When repository facts change (new framework root, new pin location, smoke-test flags), update the **skill**, not each agent.

### Adding an Agent

Add one only for a recurring, multi-step task whose work would flood the main session's context. If a skill plus the main session can do it, write or extend a skill instead.

1. Write `.agents/agents/<name>-agent.md` with: role, inputs, "What You Do NOT Do" (including the no-commit rule), numbered steps, "Surfacing Problems", "Re-invocation", final report and self-validation.
2. Add it to the Agent List and Quick Start above.

### Adding a Skill

1. Write `.agents/skills/<name>/SKILL.md` (`name` must match the folder: lowercase letters, digits, hyphens).
2. Add it to the Skills table above and to "Internal Skills" in `context/project.md`.
