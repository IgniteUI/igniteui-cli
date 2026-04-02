---
title: Ignite UI for Angular Skills | AI Skills | AI-Assisted Development | Ignite UI for Angular | Infragistics
_description: Learn how to use Agent Skills to supercharge AI-assisted development with Ignite UI for Angular components, grids, data operations, and theming.
_keywords: ignite ui for angular, copilot skills, ai assisted development, github copilot, cursor, windsurf, claude, jetbrains ai
_tocName: Ignite UI for Angular Skills
---

# Ignite UI for Angular Skills

Ignite UI for Angular ships with **Agent Skills** — structured knowledge files that teach AI coding assistants (GitHub Copilot, Cursor, Windsurf, Claude, JetBrains AI, etc.) how to work with Ignite UI for Angular. These skill files provide context-aware guidance on components, grids, data operations, and theming, enabling your AI assistant to generate accurate, idiomatic code that follows best practices.

## Available Skills

The skill files live in the [`skills/`](https://github.com/IgniteUI/igniteui-angular/tree/master/skills) directory of the Ignite UI for Angular repository:

| Skill | Path | Description |
|:------|:-----|:------------|
| Components & Layout | [`skills/igniteui-angular-components/SKILL.md`](https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-components/SKILL.md) | Standalone components, form controls, overlays, layout |
| Data Grids | [`skills/igniteui-angular-grids/SKILL.md`](https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-grids/SKILL.md) | Grid, Tree Grid, Hierarchical Grid, Pivot Grid, sorting, filtering, grouping, paging, remote data |
| Theming & Styling | [`skills/igniteui-angular-theming/SKILL.md`](https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-theming/SKILL.md) | Palettes, typography, elevations, component themes, MCP server |

> **Note:** Starting with Ignite UI for Angular **21.1.0**, these skills are automatically discovered when placed in your agent's skills path (e.g., `.claude/skills`, `.agents/skills`, `.cursor/rules/`). This release ships with an optional migration to add these skills to your project automatically.

There are two ways to use skills with your AI assistant: [create a persistent IDE agent](#approach-1-create-a-persistent-ide-agent) that always applies them automatically, or [download and load them manually](#approach-2-download-and-load-the-skills) into your preferred IDE on demand.

## Approach 1: Create a Persistent IDE Agent

This approach wires the skills permanently into your project so that every AI session automatically follows the Ignite UI for Angular guidelines — no copy-pasting required.

### GitHub Copilot (VS Code)

GitHub Copilot reads custom instructions from a `.github/copilot-instructions.md` file at the root of your repository. To create a persistent agent:

1. Create (or open) `.github/copilot-instructions.md` in your project root.
2. Add a reference or paste the relevant skill content into that file. For example:

    ```markdown
    # Copilot Instructions

    This project uses Ignite UI for Angular. Follow the guidelines in the skill files below:

    - Components & Layout: https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-components/SKILL.md
    - Data Grids: https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-grids/SKILL.md
    - Theming & Styling: https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-theming/SKILL.md
    ```

3. Alternatively, paste the full content of the relevant `SKILL.md` files directly into `copilot-instructions.md` for fully offline, self-contained instructions.
4. Copilot will now apply these instructions automatically on every chat and inline suggestion in VS Code.

### Cursor

Cursor supports persistent project rules through a `.cursorrules` file or the `.cursor/rules/` directory:

1. Create `.cursorrules` in your project root (or `.cursor/rules/igniteui.md` for a named rule).
2. Paste the contents of the desired `SKILL.md` files into that file. For example:

    ```
    # Ignite UI for Angular Rules

    <paste contents of skills/igniteui-angular-components/SKILL.md here>
    <paste contents of skills/igniteui-angular-grids/SKILL.md here>
    ```

3. Cursor will include these rules in every AI request automatically. You can also use the `@rules` mention in chat to reference a specific rule on demand.

### Windsurf

Windsurf reads persistent rules from a `.windsurfrules` file at the project root:

1. Create `.windsurfrules` in your project root.
2. Paste the contents of the relevant `SKILL.md` files into it.
3. Every Cascade AI session in Windsurf will now include these as persistent instructions.

### JetBrains IDEs (WebStorm, IntelliJ)

JetBrains AI Assistant supports project-level prompts that are applied to every AI interaction:

1. Open **Settings** (or **Preferences** on macOS) → **Tools** → **AI Assistant** → **Project-level prompt**.
2. Paste the contents of the relevant `SKILL.md` files into the prompt field.
3. Click **Apply**. The AI Assistant will now follow these instructions for all requests inside the project.

### Claude Code

Claude Code supports a `CLAUDE.md` file at the project root as persistent agent instructions:

1. Create `CLAUDE.md` in your project root.
2. Paste the contents of the relevant `SKILL.md` files into it. For example:

    ```markdown
    # Project Instructions

    This project uses Ignite UI for Angular. Always follow these guidelines:

    <paste contents of SKILL.md files here>
    ```

3. Claude Code will automatically read `CLAUDE.md` at the start of every session.

### General AI Agents

Alternatively, one can use a general Agent Skills config so your Agent can easily discover and load skills automatically on demand:

1. Create a `.agents/skills/` directory in your project root.
2. Copy the skill directories from `igniteui-angular/skills/` repository into `.agents/skills/`:

    ```
    .agents/
      skills/
        igniteui-angular-components/
        igniteui-angular-grids/
        igniteui-angular-theming/
    ```

3. The Agent will now discover these skills and load the relevant one automatically based on the context of your request.

> **Tip:** VS Code searches for skills in `.github/skills/`, `.claude/skills/`, and `.agents/skills/` by default. You can configure additional locations using the `chat.agentSkillsLocations` setting.

---

## Approach 2: Download and Load the Skills

Use this approach when you want to load a specific skill on demand, without permanently modifying project configuration files.

### Step 1: Get the Skill Files

#### **Option A — Download individual files**

Each skill file can be downloaded directly from GitHub. First, create the `.agents/skills/` directory in your project root, then download the files into it:

```bash

# Define the base target directory
BASE_DIR=".agents/skills"

# Components & Layout
curl --create-dirs -o $BASE_DIR/igniteui-angular-components/SKILL.md https://raw.githubusercontent.com/IgniteUI/igniteui-angular/master/skills/igniteui-angular-components/SKILL.md

# Data Grids
curl --create-dirs -o $BASE_DIR/igniteui-angular-grids/SKILL.md https://raw.githubusercontent.com/IgniteUI/igniteui-angular/master/skills/igniteui-angular-grids/SKILL.md

# Theming & Styling
curl --create-dirs -o $BASE_DIR/igniteui-angular-theming/SKILL.md https://raw.githubusercontent.com/IgniteUI/igniteui-angular/master/skills/igniteui-angular-theming/SKILL.md
```

The skill files will now be available in `.agents/skills/` and will be automatically discovered by compatible AI assistants.


#### **Option B — Use the `gemini skills` CLI**

The `gemini skills install` command installs skills directly from a Git repository. It supports two scopes:

- **User scope** (default) — installs skills globally for your user account, making them available across all projects. Skills are placed in `~/.gemini/skills/` or `~/.agents/skills/`.
- **Workspace scope** — installs skills locally into the current project directory under `.agents/skills/`, scoping them to that project only.

**Install to user scope (default):**

```bash
gemini skills install https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-components
gemini skills install https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-grids
gemini skills install https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-theming
```

**Install to workspace scope:**

```bash
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-components
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-grids
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-theming
```

Once installed, the skill files are available in the respective location and will be automatically discovered by compatible AI assistants.


#### **Option C — Use the installed npm package**

If Ignite UI for Angular is already installed in your project, the skill files are available under `node_modules`. To copy them into your project (e.g. for use with General AI Agents under `.agents/skills/`), run:

```bash
# macOS / Linux
cp -r node_modules/igniteui-angular/skills/. .agents/skills/
```

```powershell
# Windows (PowerShell)
Copy-Item -Recurse node_modules\igniteui-angular\skills .agents\skills
```

Or copy individual skill directories as needed:

**macOS / Linux**

```bash
cp -r node_modules/igniteui-angular/skills/igniteui-angular-components .agents/skills/
cp -r node_modules/igniteui-angular/skills/igniteui-angular-grids .agents/skills/
cp -r node_modules/igniteui-angular/skills/igniteui-angular-theming .agents/skills/
```

**Windows (PowerShell)**

```powershell
Copy-Item -Recurse node_modules\igniteui-angular\skills\igniteui-angular-components .agents\skills\igniteui-angular-components
Copy-Item -Recurse node_modules\igniteui-angular\skills\igniteui-angular-grids .agents\skills\igniteui-angular-grids
Copy-Item -Recurse node_modules\igniteui-angular\skills\igniteui-angular-theming .agents\skills\igniteui-angular-theming
```

**Windows (Command Prompt)**

```cmd
xcopy /E /I node_modules\igniteui-angular\skills\igniteui-angular-components .agents\skills\igniteui-angular-components
xcopy /E /I node_modules\igniteui-angular\skills\igniteui-angular-grids .agents\skills\igniteui-angular-grids
xcopy /E /I node_modules\igniteui-angular\skills\igniteui-angular-theming .agents\skills\igniteui-angular-theming
```

The skill files are located at:

```
node_modules/igniteui-angular/skills/igniteui-angular-components/SKILL.md
node_modules/igniteui-angular/skills/igniteui-angular-grids/SKILL.md
node_modules/igniteui-angular/skills/igniteui-angular-theming/SKILL.md
```

#### **Option D — Use the `npx skills` CLI**

The `skills` CLI is an interactive tool that downloads and installs skills directly into your project. Run the following command in your project root:

```bash
npx skills add IgniteUI/igniteui-angular
```

The CLI will guide you through a series of prompts to:

1. Select which skills to install (components, grids, and theming).
2. Choose the target location for the skill files in your project (e.g. `.agents/skills/`, `.github/skills/`).
3. Download and write the selected skill files automatically.

Once complete, the skills are ready to use — no manual file copying required.

> **Note:** Requires Node.js and an internet connection. The command fetches the latest skill files from the [IgniteUI/igniteui-angular](https://github.com/IgniteUI/igniteui-angular) repository.

### Step 2: Load the Skill into Your IDE

Once you have the files, open them and load them into your AI assistant:

| IDE / Tool | How to load |
|:-----------|:------------|
| **VS Code + GitHub Copilot** | Use `#file:path/to/SKILL.md` in the Copilot Chat input to attach it as context for that session. |
| **Cursor** | Drag the `SKILL.md` file into the chat window, or type `@file` and select it. |
| **Windsurf** | Attach the file using the **+** button in the Cascade chat panel. |
| **JetBrains AI Assistant** | Click the paperclip icon in the AI chat to attach the file as context. |
| **Claude Desktop** | Drag the file into the chat or add it to the project knowledge base via **Project → Add Content**. |
| **Other assistants** | Open the `SKILL.md` file, copy its full contents, and paste them into the system prompt or at the top of your first message. |

---

## Theming MCP Server

The **Theming skill** includes setup instructions for the `igniteui-theming` MCP server, which gives AI assistants access to live theming tools such as palette generation and component theme scaffolding. See the [Theming skill file](https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-theming/SKILL.md) for configuration steps for VS Code, Cursor, Claude Desktop, and JetBrains IDEs.

For more information on the Theming MCP, refer to the [Ignite UI Theming MCP](./theming-mcp.md) documentation.

## Additional Resources

<div class="divider--half"></div>

- [Getting Started with Ignite UI for Angular](../general/getting-started.md)
- [Angular Schematics & Ignite UI CLI](../general/cli-overview.md)
- [How to Use Standalone Components](../general/how-to/how-to-use-standalone-components.md)
- [Code Splitting and Multiple Entry Points](../general/code-splitting-and-multiple-entry-points.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
