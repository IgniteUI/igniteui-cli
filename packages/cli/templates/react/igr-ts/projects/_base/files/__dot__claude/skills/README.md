# LLM Agent Skills for Ignite UI for React

This directory contains skills for GitHub Copilot and other LLM agents to help developers use **Ignite UI for React** effectively in their applications.

## What are Skills?

Skills are structured instructions that help AI agents understand and execute common tasks consistently. Each skill is a self-contained guide that provides step-by-step instructions, code examples, and best practices — all specific to React and the `igniteui-react` family of packages.

## Available Skills

| Skill | Description | Use When |
| --- | --- | --- |
| [igniteui-react-components](./igniteui-react-components/SKILL.md) | Identify the right React components (`Igr*`) for a UI pattern, then install, import, and use them — JSX patterns, events, refs, forms | Choosing components or setting up and using them in React |
| [igniteui-react-customize-theme](./igniteui-react-customize-theme/SKILL.md) | Customize styling using CSS custom properties, Sass, and the theming system in a React context | Applying custom brand colors/styles |
| [igniteui-react-optimize-bundle-size](./igniteui-react-optimize-bundle-size/SKILL.md) | Reduce bundle size with granular imports, tree-shaking, and lazy loading | Optimizing production performance |

## How to Use

When working with an AI agent like GitHub Copilot, reference skills by name or ask questions naturally:

### Natural Questions

- "How do I add a data grid to my React app?"
- "What Ignite UI component should I use for a date picker?"
- "Help me customize the button colors to match my brand"
- "My bundle size is too large, how can I reduce it?"
- "How do I handle events on IgrCombo?"

### Direct Skill Reference

- "Follow the igniteui-react-components skill for setting up my project"
- "Use the igniteui-react-customize-theme skill to help me style components"
- "Apply the igniteui-react-optimize-bundle-size skill to reduce my bundle"

## Skill Structure

Each skill contains:

- **Example Usage**: Common questions or scenarios
- **When to Use**: Situations where the skill applies
- **Related Skills**: Other relevant skills to explore
- **Step-by-Step Instructions**: Detailed guidance with code examples
- **Common Issues & Solutions**: Troubleshooting guidance
- **Best Practices**: Recommended approaches
- **Additional Resources**: Further reading and documentation

## Editor / Agent Setup

Most modern AI assistants (GitHub Copilot, Cursor, Windsurf, Claude Code, etc.) should auto-discover these skills from a specified location in the workspace or global profile.

For example, you can copy them into the agent-specific skills folder for your editor:

### GitHub Copilot

Copy the skill files into your project's `.agents/skills/` directory:

```
.agents/
  skills/
    igniteui-react-components/
      SKILL.md
      reference/
    igniteui-react-customize-theme/
      SKILL.md
      reference/
    igniteui-react-optimize-bundle-size/
      SKILL.md
```

### Claude Code

Copy the skill files into your project's `.claude/skills/` directory:

```
.claude/
  skills/
    igniteui-react-components/
      SKILL.md
      reference/
    igniteui-react-customize-theme/
      SKILL.md
      reference/
    igniteui-react-optimize-bundle-size/
      SKILL.md
```

### Other Agents (Cursor, Windsurf, etc.)

Consult your agent's documentation for the correct skills directory path and copy the skill files there. The skill structure is agent-agnostic — any assistant that supports skill files can use them directly.
