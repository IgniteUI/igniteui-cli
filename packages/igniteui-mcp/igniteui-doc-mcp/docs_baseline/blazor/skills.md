---
title: Agent Skills | AI Skills | AI-Assisted Development | Ignite UI for Blazor | Infragistics
_description: Learn how to use Agent Skills to supercharge AI-assisted development with Ignite UI for Blazor components, grids, data operations, and theming.
_keywords: Ignite UI for Blazor, agent skills, ai assisted development, github copilot, cursor, windsurf, claude, gemini cli, junie
_license: MIT
mentionedTypes: []
last_updated: "2026-04-24"
_tocName: Agent Skills
---

<!-- schema: Article, HowTo -->

# Ignite UI for Blazor Agent Skills

Ignite UI for Blazor ships with **[Agent Skills](https://agentskills.io/)** - structured knowledge files that teach AI coding assistants (GitHub Copilot, Cursor, Windsurf, Claude, Gemini CLI, JetBrains Junie, etc.) how to work with Ignite UI for Blazor. These skill files provide context-aware guidance on components, grids, data operations, and theming, enabling your AI assistant to generate accurate, idiomatic code that follows best practices.

> [!NOTE]
> The AI tooling landscape is evolving rapidly. Skill discovery locations and distribution options may change as tools and IDEs are updated. Always consult the official documentation for your specific tool or agent for the latest information.

## Available Skills

The skill files live in the [`skills/`](https://github.com/IgniteUI/igniteui-blazor/tree/master/skills) directory of the Ignite UI for Blazor repository:

| Skill | Path | Description |
|:------|:-----|:------------|
| Components & Layout | [`skills/igniteui-blazor-components/SKILL.md`](https://github.com/IgniteUI/igniteui-blazor/blob/master/skills/igniteui-blazor-components/SKILL.md) | Components, form controls, overlays, layout |
| Data Grids | [`skills/igniteui-blazor-grids/SKILL.md`](https://github.com/IgniteUI/igniteui-blazor/blob/master/skills/igniteui-blazor-grids/SKILL.md) | Grid, Tree Grid, Hierarchical Grid, Grid Lite, sorting, filtering, grouping, paging, remote data |
| Theming & Styling | [`skills/igniteui-blazor-theming/SKILL.md`](https://github.com/IgniteUI/igniteui-blazor/blob/master/skills/igniteui-blazor-theming/SKILL.md) | Palettes, typography, elevations, component themes, MCP server |
| Generate From Image Design | [`skills/igniteui-blazor-generate-from-image-design/SKILL.md`](https://github.com/IgniteUI/igniteui-blazor/blob/master/skills/igniteui-blazor-generate-from-image-design/SKILL.md) | Build Blazor apps from screenshots, mockups, and wireframes using Ignite UI components |

## Skill Locations

Each AI coding tool discovers skills from specific directories. Place your skill files in the appropriate location so your AI assistant can find and use them automatically. The general `.agents/skills/` convention is supported across multiple tools, while each tool also has its own specific directories.

### General (`.agents/skills/`)

The `.agents/skills/` directory is a cross-agent convention supported by multiple tools, including [VS Code with Copilot](https://code.visualstudio.com/docs/copilot/customization/agent-skills), [OpenAI Codex](https://developers.openai.com/codex/skills), [Cursor](https://cursor.com/docs/skills), [Gemini CLI](https://geminicli.com/docs/cli/skills/#skill-discovery-tiers), [Antigravity](https://antigravity.google/docs/skills), and [Windsurf](https://docs.windsurf.com/windsurf/cascade/skills#skill-scopes). Copy the skill directories into `.agents/skills/` in your project root:

```
.agents/
  skills/
    igniteui-blazor-components/
      SKILL.md
    igniteui-blazor-grids/
      SKILL.md
    igniteui-blazor-theming/
      SKILL.md
    igniteui-blazor-generate-from-image-design/
      SKILL.md
```

For user-level (global) skills available across all projects, use `~/.agents/skills/` instead.

### GitHub Copilot

[GitHub Copilot](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) discovers skills from:

| Scope | Location |
|:------|:---------|
| Project | `.github/skills/`, `.claude/skills/` |
| Personal | `~/.copilot/skills/`, `~/.claude/skills/` (Copilot coding agent and GitHub Copilot CLI only) |

> **Tip:** In [VS Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills), these locations also include the general `.agents/skills/` and `~/.agents/skills/` and you can configure additional skill locations using the `chat.agentSkillsLocations` setting.

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

### **Option A - Use the Ignite UI CLI**

The `ai-config` command configures MCP servers, copies framework-specific skill files into each agent's skills directory, and sets up instruction files - all in a single step. Use `--assistants` to choose which coding assistants receive MCP config and `--agents` to choose which agents receive skill files. Existing files are only updated if their content has changed. If no parameters are provided, the command enters interactive mode, prompting you to select assistants and agents. For available options, refer to the table below.

```bash
ig ai-config --assistants generic --agents claude
```

Use `--agents` with multiple values to target several agents at once:

```bash
ig ai-config --assistants generic vscode --agents claude copilot cursor
```

| Flag | Values | Default |
|------|--------|---------|
| `--assistants` | `generic`, `vscode`, `cursor`, `gemini`, `junie`, `none` | Prompted interactively |
| `--agents` | `generic`, `claude`, `copilot`, `cursor`, `codex`, `windsurf`, `gemini`, `junie`, `none` | Prompted interactively |

> [!NOTE]
> For Blazor, `ai-config` detects your project via `.csproj` or `.sln`. The `IgniteUI.Blazor` NuGet package does not need to be installed. If no project file is found, the command prompts you to select a framework.

### **Option B - Use the `GitHub CLI`**

The GitHub CLI can be used to download skill files directly from the Ignite UI for Blazor repository. Run the following commands in your project root to start the installation process:

```bash
gh skill install IgniteUI/igniteui-blazor
```

You will be asked to select which skills to install and the target Agents for the skill files in your project. The CLI will then download and place the selected skill according to the chosen Agents.

To update skills later, run the following command:

```bash
gh skill update IgniteUI/igniteui-blazor
```

### **Option C - Use the `gemini skills` CLI**

The `gemini skills install` command installs skills directly from a Git repository. It supports two scopes:

- **User scope** (default) - installs skills globally for your user account, making them available across all projects. Skills are placed in `~/.gemini/skills/` or `~/.agents/skills/`.
- **Workspace scope** - installs skills locally into the current project directory under `.agents/skills/`, scoping them to that project only.

**Install to user scope (default):**

```bash
gemini skills install https://github.com/IgniteUI/igniteui-blazor.git --path skills/igniteui-blazor-components
gemini skills install https://github.com/IgniteUI/igniteui-blazor.git --path skills/igniteui-blazor-grids
gemini skills install https://github.com/IgniteUI/igniteui-blazor.git --path skills/igniteui-blazor-theming
gemini skills install https://github.com/IgniteUI/igniteui-blazor.git --path skills/igniteui-blazor-generate-from-image-design
```

**Install to workspace scope:**

```bash
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-blazor.git --path skills/igniteui-blazor-components
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-blazor.git --path skills/igniteui-blazor-grids
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-blazor.git --path skills/igniteui-blazor-theming
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-blazor.git --path skills/igniteui-blazor-generate-from-image-design
```

Once installed, the skill files are available in the respective location and will be automatically discovered by compatible AI assistants.

### **Option D - Use the `npx skills` CLI**

The `skills` CLI is an interactive tool that downloads and installs skills directly into your project. Run the following command in your project root:

```bash
npx skills add IgniteUI/igniteui-blazor
```

The CLI will guide you through a series of prompts to:

1. Select which skills to install (components, theming, etc.).
2. Choose the target location for the skill files in your project (e.g. `.agents/skills/`, `.github/skills/`).
3. Download and write the selected skill files automatically.

Once complete, the skills are ready to use - no manual file copying required.

> **Note:** Requires Node.js and an internet connection. The command fetches the latest skill files from the [IgniteUI/igniteui-blazor](https://github.com/IgniteUI/igniteui-blazor) repository.

---

## Theming MCP Server

The **Theming skill** includes setup instructions for the `igniteui-theming` MCP server, which gives AI assistants access to live theming tools such as palette generation and component theme scaffolding. See the [Theming skill file](https://github.com/IgniteUI/igniteui-blazor/blob/master/skills/igniteui-blazor-theming/SKILL.md) for configuration steps for VS Code, Cursor, Claude Desktop, and JetBrains IDEs.

For more information on the Theming MCP, refer to the [Ignite UI Theming MCP](./theming-mcp.md) documentation.

## Additional Resources

<div class="divider--half"></div>

- [Getting Started with Ignite UI for Blazor](../general-getting-started.md)
- [AI-Assisted Development with Ignite UI](./ai-assisted-development-overview.md)
- [Ignite UI CLI MCP](./cli-mcp.md)
- [Ignite UI Theming MCP](./theming-mcp.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
