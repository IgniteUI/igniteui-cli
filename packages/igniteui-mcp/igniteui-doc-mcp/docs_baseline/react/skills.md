---
title: Agent Skills | AI Skills | AI-Assisted Development | Ignite UI for React | Infragistics
_description: Learn how to use Agent Skills to supercharge AI-assisted development with Ignite UI for React components, grids, data operations, and theming.
_keywords: Ignite UI for React, agent skills, ai assisted development, github copilot, cursor, windsurf, claude, gemini cli, junie
_license: MIT
mentionedTypes: []
_tocName: Agent Skills
---

# Ignite UI for React Agent Skills

Ignite UI for React ships with **[Agent Skills](https://agentskills.io/)** — structured knowledge files that teach AI coding assistants (GitHub Copilot, Cursor, Windsurf, Claude, Gemini CLI, JetBrains Junie, etc.) how to work with Ignite UI for React. These skill files provide context-aware guidance on components, grids, data operations, and theming, enabling your AI assistant to generate accurate, idiomatic code that follows best practices.

> [!NOTE]
> The AI tooling landscape is evolving rapidly. Skill discovery locations and distribution options may change as tools and IDEs are updated. Always consult the official documentation for your specific tool or agent for the latest information.

## Available Skills

The skill files live in the [`skills/`](https://github.com/IgniteUI/igniteui-react/tree/master/skills) directory of the Ignite UI for React repository:

| Skill | Path | Description |
|:------|:-----|:------------|
| Components | [`skills/igniteui-react-components/SKILL.md`](https://github.com/IgniteUI/igniteui-react/blob/master/skills/igniteui-react-components/SKILL.md) | Identify the right components, install, import, and use them — JSX patterns, event handling, refs, forms, TypeScript |
| Theming & Styling | [`skills/igniteui-react-customize-theme/SKILL.md`](https://github.com/IgniteUI/igniteui-react/blob/master/skills/igniteui-react-customize-theme/SKILL.md) | Palettes, typography, elevations, component themes, MCP server |
| Optimization | [`skills/igniteui-react-optimize-bundle-size/SKILL.md`](https://github.com/IgniteUI/igniteui-react/blob/master/skills/igniteui-react-optimize-bundle-size/SKILL.md) | Ensuring best practices for tree shaking to optimize bundle size

## Skill Locations

Each AI coding tool discovers skills from specific directories. Place your skill files in the appropriate location so your AI assistant can find and use them automatically. The general `.agents/skills/` convention is supported across multiple tools, while each tool also has its own specific directories.

### General (`.agents/skills/`)

The `.agents/skills/` directory is a cross-agent convention supported by multiple tools, including [VS Code with Copilot](https://code.visualstudio.com/docs/copilot/customization/agent-skills), [OpenAI Codex](https://developers.openai.com/codex/skills), [Cursor](https://cursor.com/docs/skills), [Gemini CLI](https://geminicli.com/docs/cli/skills/#skill-discovery-tiers), [Antigravity](https://antigravity.google/docs/skills), and [Windsurf](https://docs.windsurf.com/windsurf/cascade/skills#skill-scopes). Copy the skill directories into `.agents/skills/` in your project root:

```
.agents/
  skills/
    igniteui-react-components/
      SKILL.md
    igniteui-react-customize-theme/
      SKILL.md
    igniteui-react-optimize-bundle-size/
      SKILL.md
```

For user-level (global) skills available across all projects, use `~/.agents/skills/` instead.

### GitHub Copilot

[GitHub Copilot](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) discovers skills from:

| Scope | Location |
|:------|:---------|
| Project | `.github/skills/`, `.claude/skills/` |
| Personal | `~/.copilot/skills/`, `~/.claude/skills/` (Copilot coding agent and GitHub Copilot CLI only) |

> **Tip:** In [VS Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills), these locations also include the general  `.agents/skills/` and `~/.agents/skills/` and you can configure additional skill locations using the `chat.agentSkillsLocations` setting.

### Claude

[Claude](https://code.claude.com/docs/en/skills#where-skills-live) discovers skills from:

| Scope | Location |
|:------|:---------|
| Project | `.claude/skills/` |
| Personal | `~/.claude/skills/` |

### Cursor

[Cursor](https://cursor.com/docs/skills#skill-directories) discovers skills from:

| Scope | Location |
|:------|:---------|
| Project | `.agents/skills/`, `.cursor/skills/` |
| User (global) | `~/.cursor/skills/` |

### Gemini CLI and Antigravity

[Gemini CLI](https://geminicli.com/docs/cli/skills/#skill-discovery-tiers) and [Antigravity](https://antigravity.google/docs/skills) discover skills from:

| Scope | Location |
|:------|:---------|
| Workspace | `.gemini/skills/`, `.agents/skills/` |
| User | `~/.gemini/skills/`, `~/.agents/skills/` |

> **Tip:** Use the `/skills` slash command in Gemini CLI to view and manage installed skills.

### Junie (JetBrains IDEs)

[Junie](https://junie.jetbrains.com/docs/agent-skills.html) discovers skills from:

| Scope | Location |
|:------|:---------|
| Project | `.junie/skills/` |
| User | `~/.junie/skills/` |

### Windsurf

[Windsurf](https://docs.windsurf.com/windsurf/cascade/skills#skill-scopes) discovers skills from:

| Scope | Location |
|:------|:---------|
| Workspace | `.windsurf/skills/`, `.agents/skills/` |
| Global | `~/.codeium/windsurf/skills/`, `~/.agents/skills/` |

---

## Installing Skills

Use one of the options below to download and place the skill files into the appropriate [skill location](#skill-locations) for your AI assistant.

### **Option A — Use the installed npm package**

If Ignite UI for React is already installed in your project, the skill files are available under `node_modules`. To copy them into your project (e.g. into `.agents/skills/`), run:

**macOS / Linux / Windows (PowerShell)**

```bash
cp -r node_modules/igniteui-react/skills/. .agents/skills/
```

**Windows (Command Prompt)**

```cmd
robocopy node_modules\igniteui-react\skills .agents\skills /E
```

Or copy individual skill directories as needed:

**macOS / Linux / Windows (PowerShell)**

```bash
cp -r node_modules/igniteui-react/skills/igniteui-react-components .agents/skills/
cp -r node_modules/igniteui-react/skills/igniteui-react-customize-theme .agents/skills/
cp -r node_modules/igniteui-react/skills/igniteui-react-optimize-bundle-size .agents/skills/
```

**Windows (Command Prompt)**

```cmd
robocopy node_modules\igniteui-react\skills\igniteui-react-components .agents\skills\igniteui-react-components /E
robocopy node_modules\igniteui-react\skills\igniteui-react-customize-theme .agents\skills\igniteui-react-customize-theme /E
robocopy node_modules\igniteui-react\skills\igniteui-react-optimize-bundle-size .agents\skills\igniteui-react-optimize-bundle-size /E
```

### **Option B — Use the `gemini skills` CLI**

The `gemini skills install` command installs skills directly from a Git repository. It supports two scopes:

- **User scope** (default) — installs skills globally for your user account, making them available across all projects. Skills are placed in `~/.gemini/skills/` or `~/.agents/skills/`.
- **Workspace scope** — installs skills locally into the current project directory under `.agents/skills/`, scoping them to that project only.

**Install to user scope (default):**

```bash
gemini skills install https://github.com/IgniteUI/igniteui-react.git --path skills/igniteui-react-components
gemini skills install https://github.com/IgniteUI/igniteui-react.git --path skills/igniteui-react-customize-theme
gemini skills install https://github.com/IgniteUI/igniteui-react.git --path skills/igniteui-react-optimize-bundle-size
```

**Install to workspace scope:**

```bash
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-react.git --path skills/igniteui-react-components
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-react.git --path skills/igniteui-react-customize-theme
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-react.git --path skills/igniteui-react-optimize-bundle-size
```

Once installed, the skill files are available in the respective location and will be automatically discovered by compatible AI assistants.

### **Option C — Use the `npx skills` CLI**

The `skills` CLI is an interactive tool that downloads and installs skills directly into your project. Run the following command in your project root:

```shell
npx skills add IgniteUI/igniteui-react
```

The CLI will guide you through a series of prompts to:

1. Select which skills to install (components, theming, etc.).
2. Choose the target location for the skill files in your project (e.g. `.agents/skills/`, `.github/skills/`).
3. Download and write the selected skill files automatically.

Once complete, the skills are ready to use — no manual file copying required.

> **Note:** Requires Node.js and an internet connection. The command fetches the latest skill files from the [IgniteUI/igniteui-react](https://github.com/IgniteUI/igniteui-react) repository.

---

## Theming MCP Server

The **Theming skill** includes setup instructions for the `igniteui-theming` MCP server, which gives AI assistants access to live theming tools such as palette generation and component theme scaffolding. See the [Theming skill file](https://github.com/IgniteUI/igniteui-react/blob/master/skills/igniteui-react-customize-theme/SKILL.md) for configuration steps for VS Code, Cursor, Claude Desktop, and JetBrains IDEs.

For more information on the Theming MCP, refer to the [Ignite UI Theming MCP](./theming-mcp.md) documentation.

## Additional Resources

<div class="divider--half"></div>

- [Getting Started with Ignite UI for React](../general-getting-started.md)
- [Ignite UI CLI](../general-cli-overview.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
