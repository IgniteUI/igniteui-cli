---
title: MAKER Framework | Ignite UI AI Orchestration
_description: The MAKER Framework is a multi-agent AI orchestration MCP server from Infragistics that decomposes complex tasks into validated step plans using consensus-based voting across OpenAI, Anthropic, and Google AI providers.
_keywords: React, Ignite UI for React, Infragistics, MAKER, multi-agent, AI orchestration, MCP, Model Context Protocol, consensus voting, plan and execute, task decomposition
_language: en
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/ai/maker-framework"
namespace: Infragistics.Controls
mentionedTypes: []
_tocName: Maker Framework
---

<!-- cspell:words MAKER batchSize -->

<!-- schema: Article, HowTo -->

# MAKER Framework

The MAKER Framework (`@igniteui/maker-mcp`) is a multi-agent AI orchestration MCP server from Infragistics that decomposes complex tasks into validated, executable step plans using a consensus-based voting algorithm across multiple AI agents. MAKER stands for Maximal Agentic decomposition, first-to-ahead-by-K Error correction, and Red-flagging. The framework is based on the research paper _Solving a million-step LLM task with zero errors_ by Cognizant AI Lab. It runs as an MCP server via `npx` from the `@igniteui` GitHub Packages registry and connects to any MCP-compatible AI client through STDIO transport. Once connected, the AI assistant can invoke three tools - `plan`, `execute`, and `plan_and_execute` - to run long-horizon tasks with automatic error detection and correction.

The MAKER Framework is not an Ignite UI component scaffolding tool. For Ignite UI project creation, component generation, and documentation queries, use the [CLI MCP server](cli-mcp.md). MAKER is framework-agnostic - it does not target Angular, React, or Web Components specifically, and it does not read or modify project source files on its own. It requires at least one AI provider API key (OpenAI, Anthropic, or Google AI) and a GitHub Personal Access Token with `read:packages` scope for the `@igniteui` registry.

## How MAKER Works

The MAKER Framework operates in two sequential phases: planning and execution. Each phase uses a dedicated set of internal AI clients and applies the same consensus-based voting mechanism to validate outputs before advancing.

In the **planning phase**, a planning client proposes batches of steps (configurable batch size, default 3). A separate plan-voting client then runs a "first-to-ahead-by-K" vote: multiple AI agents vote "Yes", "No", or "End" on the proposed steps. A proposal is accepted when one outcome leads the others by K votes. Rejected proposals include the rejection reasons in the next retry, driving continuous refinement until the plan is complete or the retry limit is reached.

In the **execution phase**, the framework processes the validated step plan in configurable batches. An execution client runs each batch and produces an updated state. An execution-voting client validates the new state against the previous state and the original task, using the same K-margin voting algorithm. Rejected executions retry with feedback. The final accumulated state is the task result.

The red-flag validation layer operates throughout both phases. Every AI client request is wrapped in a guarded call that runs configurable validators on the response before it enters the voting system. Malformed or too-short responses are retried with the failure message appended to the prompt. Custom validators can be added by implementing `IAIRedFlagValidator`.

## Install the MAKER MCP Server

MAKER is published on GitHub Packages under the `@igniteui` scope and requires a one-time registry setup. Run the following command once on your machine:

```bash
npm config set @igniteui:registry https://npm.pkg.github.com
```

Then open `~/.npmrc` (Windows: `%USERPROFILE%\.npmrc`) and add your GitHub Personal Access Token with `read:packages` scope:

After the registry is configured, the MCP server runs via `npx` without a separate global install. The native binary (~50 MB) is downloaded and cached on first run. Subsequent starts are instant.

## Connect to Your AI Client

Add the `maker` server entry to the MCP configuration file for your AI client. The `env` block passes your AI provider key; only set keys for the providers you use.

### VS Code (GitHub Copilot)

Add to `.vscode/mcp.json` in your workspace:

```json
{
  "servers": {
    "maker": {
      "command": "npx",
      "args": ["-y", "@igniteui/maker-mcp", "--stdio"],
      "env": {
        "Executor__AIProviderKeys__OpenAI": "<your-openai-key>"
      }
    }
  }
}
```

Switch Copilot Chat to Agent mode and confirm that `plan`, `execute`, and `plan_and_execute` appear in the tools list.

### Claude Desktop

1. Open your Claude Desktop configuration file:
  - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
2. Add the `maker` entry to the `mcpServers` block:

```json
{
  "mcpServers": {
    "maker": {
      "command": "npx",
      "args": ["-y", "@igniteui/maker-mcp", "--stdio"],
      "env": {
        "Executor__AIProviderKeys__Anthropic": "<your-anthropic-key>"
      }
    }
  }
}
```

3. Restart Claude Desktop. The first start downloads the native binary (~30 s on a typical connection).

### Cursor, Claude Code, JetBrains, and Other MCP Clients

Any client that supports MCP with STDIO transport uses the same `mcpServers` block:

```json
{
  "mcpServers": {
    "maker": {
      "command": "npx",
      "args": ["-y", "@igniteui/maker-mcp", "--stdio"],
      "env": {
        "Executor__AIProviderKeys__OpenAI": "<your-openai-key>"
      }
    }
  }
}
```

## Configure the MAKER MCP Server

All MAKER configuration is supplied through environment variables. The naming convention uses double underscore (`__`) as the section separator. Pass variables in the `env` block of your MCP client configuration.

### AI Provider Keys

Set at least one provider key. You can set keys for multiple providers simultaneously and assign different providers to different internal clients.

| Environment Variable                  | Description       |
| ------------------------------------- | ----------------- |
| `Executor__AIProviderKeys__OpenAI`    | OpenAI API key    |
| `Executor__AIProviderKeys__Anthropic` | Anthropic API key |
| `Executor__AIProviderKeys__Google`    | Google AI API key |

### Select Models per Internal Client

MAKER uses four internal AI clients: `Planning`, `PlanVoting`, `Execution`, and `ExecutionVoting`. Each client can target a different provider and model. The defaults use `gpt-5.1` on OpenAI for all four clients.

To mix providers for cost and quality balance, set the `Provider` and `Model` variables per client:

```json
"env": {
  "Executor__AIProviderKeys__OpenAI":             "<openai-key>",
  "Executor__AIProviderKeys__Anthropic":          "<anthropic-key>",
  "Executor__Clients__Planning__Provider":        "Anthropic",
  "Executor__Clients__Planning__Model":           "claude-opus-4-5",
  "Executor__Clients__PlanVoting__Provider":      "OpenAI",
  "Executor__Clients__PlanVoting__Model":         "gpt-4.1-mini",
  "Executor__Clients__Execution__Provider":       "Anthropic",
  "Executor__Clients__Execution__Model":          "claude-opus-4-5",
  "Executor__Clients__ExecutionVoting__Provider": "OpenAI",
  "Executor__Clients__ExecutionVoting__Model":    "gpt-4.1-mini"
}
```

Valid `Provider` values: `OpenAI`, `Anthropic`, `Google`.

### Connect External MCP Servers

MAKER can connect to external MCP servers as tool providers, making their tools available to the execution client. Configure each server with a name, description, URL, and optional API key using indexed environment variables:

```json
"env": {
  "Executor__McpServers__0__Name":        "igniteui-cli",
  "Executor__McpServers__0__Description": "Ignite UI CLI scaffolding and documentation tools",
  "Executor__McpServers__0__Url":         "https://mcp.example.com/igniteui-cli"
}
```

Increment the index (`0`, `1`, `2`, ...) to register additional servers.

### Tune Batch Size and Voting Threshold

Each MCP tool call accepts `batchSize` and `k` parameters in natural language. Set them in your prompt when invoking the tools.

| Parameter   | Default | Description                                                                                                            |
| ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `batchSize` | `3`     | Steps proposed or executed per voting round. Lower values give more control; higher values improve throughput.        |
| `k`         | `10`    | Consensus margin threshold. Higher values require stronger agreement across voting agents before a result is accepted. |

Lower `k` (3-5) for faster, exploratory tasks. Raise `k` (15-20) for critical tasks where correctness is more important than token cost.

## Available Tools

The MAKER MCP server exposes three tools to the connected AI agent.

| Tool               | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| `plan`             | Decompose a task into a validated, ordered step list without executing it |
| `execute`          | Execute a step list produced by `plan`, with consensus voting per batch   |
| `plan_and_execute` | Plan and execute in one call with live progress events between phases     |

Use `plan` followed by `execute` when you want to inspect and validate the step plan before execution. Use `plan_and_execute` for unattended runs where inspection is not required.

## Common Workflows

### One-Shot Task

Invoke `plan_and_execute` directly with default settings:

> Use plan_and_execute to write a detailed comparison of REST vs GraphQL for a technical blog post.

### Inspect the Plan Before Executing

Use `plan` to review steps, then pass them to `execute`:

> 1. Use plan to create a plan for migrating a PostgreSQL schema to a multi-tenant design.
> 2. Show me the steps.
> 3. Use execute with those steps to carry out the migration script.

### High-Confidence Execution for Critical Tasks

Raise `k` to require stronger consensus:

> Use plan_and_execute with batchSize=3 and k=15 to review this smart contract for security vulnerabilities.

### Low-Cost Exploratory Task

Reduce both parameters to minimize token usage:

> Use plan_and_execute with batchSize=3 and k=3 to draft a project README for a Node.js CLI tool.

## Supported Platforms

The native binary is distributed for four platforms. The correct binary is selected and cached automatically on first run.

| Platform | Architecture          | RID         |
| -------- | --------------------- | ----------- |
| Windows  | x64                   | `win-x64`   |
| macOS    | x64 (Intel)           | `osx-x64`   |
| macOS    | arm64 (Apple Silicon) | `osx-arm64` |
| Linux    | x64                   | `linux-x64` |

ARM Linux is not currently packaged. To request additional platform support, open an issue at [github.com/IgniteUI/MAKER](https://github.com/IgniteUI/MAKER).

The binary cache location can be overridden with the `MAKER_MCP_CACHE` environment variable. The default cache paths are `%LOCALAPPDATA%\maker-mcp\{version}\{rid}\` on Windows and `~/.cache/maker-mcp/{version}/{rid}/` on macOS and Linux.

## Additional Resources

- [AI-Assisted Development Overview](ai-assisted-development-overview.md)
- [Agent Skills](./skills.md)
- [Ignite UI CLI MCP](./cli-mcp.md)
- [Ignite UI Theming MCP](./theming-mcp.md)

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)
