#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool
} from "@modelcontextprotocol/sdk/types.js";
import * as path from "path";
import * as fs from "fs";
import { execSync } from "child_process";

// Tool definitions for the MCP server
const TOOLS: Tool[] = [
  {
    name: "create_igniteui_project",
    description: "Create a new Ignite UI project for Angular, React, Web Components, or jQuery. This uses the 'ig new' command to scaffold a complete project with the chosen framework.",
    inputSchema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "The name of the project to create"
        },
        framework: {
          type: "string",
          enum: ["angular", "react", "webcomponents", "jquery"],
          description: "Framework to use for the project"
        },
        projectType: {
          type: "string",
          description: "Project type (e.g., 'igx-ts' for Angular, 'igr-es6' or 'igr-ts' for React, 'igc-ts' for Web Components). If not specified, defaults to the first available type for the framework."
        },
        template: {
          type: "string",
          description: "Project template to use (e.g., 'empty', 'side-nav', 'side-nav-auth'). Defaults to 'empty' if available."
        },
        theme: {
          type: "string",
          description: "Theme to use for the project. If not specified, uses the default theme."
        },
        skipGit: {
          type: "boolean",
          description: "Skip Git repository initialization",
          default: false
        },
        skipInstall: {
          type: "boolean",
          description: "Skip npm package installation",
          default: false
        }
      },
      required: ["name", "framework"]
    }
  },
  {
    name: "upgrade_to_licensed",
    description: "Upgrade an Ignite UI project from trial to licensed version. This updates package.json to use licensed packages instead of trial versions. Works with Angular, React, and Web Components projects.",
    inputSchema: {
      type: "object",
      properties: {
        projectPath: {
          type: "string",
          description: "Path to the project directory to upgrade. Defaults to current directory if not specified."
        },
        skipInstall: {
          type: "boolean",
          description: "Skip npm package installation after upgrade",
          default: false
        }
      },
      required: []
    }
  },
  {
    name: "generate_from_docs",
    description: "Generate Ignite UI component code based on documentation. Opens the Infragistics documentation search for the given term to help users find examples and generate code.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          description: "The component or term to search for in the documentation (e.g., 'grid', 'data-grid', 'chart')"
        },
        framework: {
          type: "string",
          enum: ["angular", "react", "webcomponents", "jquery"],
          description: "Framework context for the documentation search"
        }
      },
      required: ["component"]
    }
  }
];

class IgniteUIMCPServer {
  private server: Server;

  constructor() {
    this.server = new Server(
      {
        name: "igniteui-mcp-server",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    
    // Error handling
    this.server.onerror = (error) => console.error("[MCP Error]", error);
    process.on("SIGINT", async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  private setupToolHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: TOOLS,
    }));

    // Handle tool execution
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      try {
        switch (request.params.name) {
          case "create_igniteui_project":
            return await this.handleCreateProject(request.params.arguments);
          case "upgrade_to_licensed":
            return await this.handleUpgradeToLicensed(request.params.arguments);
          case "generate_from_docs":
            return await this.handleGenerateFromDocs(request.params.arguments);
          default:
            throw new Error(`Unknown tool: ${request.params.name}`);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
          content: [
            {
              type: "text",
              text: `Error: ${errorMessage}`,
            },
          ],
        };
      }
    });
  }

  private async handleCreateProject(args: any) {
    const { name, framework, projectType, template, theme, skipGit, skipInstall } = args;

    // Build the command
    let command = `npx igniteui-cli new "${name}" --framework=${framework}`;
    
    if (projectType) {
      command += ` --type=${projectType}`;
    }
    
    if (template) {
      command += ` --template=${template}`;
    }
    
    if (theme) {
      command += ` --theme=${theme}`;
    }
    
    if (skipGit) {
      command += " --skip-git";
    }
    
    if (skipInstall) {
      command += " --skip-install";
    }

    try {
      const output = execSync(command, { 
        encoding: "utf-8",
        stdio: "pipe",
        maxBuffer: 10 * 1024 * 1024 // 10MB buffer
      });

      return {
        content: [
          {
            type: "text",
            text: `Successfully created Ignite UI ${framework} project: ${name}\n\n${output}\n\nNext steps:\n  cd ${name}\n  ig add      - Add components to your project\n  ig start    - Start development server`,
          },
        ],
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error(`Failed to create project: ${errorMessage}`);
    }
  }

  private async handleUpgradeToLicensed(args: any) {
    const { projectPath = ".", skipInstall } = args;

    // Check if ignite-ui-cli.json exists in the project
    const configPath = path.join(projectPath, "ignite-ui-cli.json");
    if (!fs.existsSync(configPath)) {
      throw new Error("No Ignite UI CLI project found in the specified directory. Make sure you're in an Ignite UI project directory.");
    }

    // Build the command
    let command = `cd "${projectPath}" && npx igniteui-cli upgrade-packages`;
    
    if (skipInstall) {
      command += " --skip-install";
    }

    try {
      const output = execSync(command, { 
        encoding: "utf-8",
        stdio: "pipe",
        maxBuffer: 10 * 1024 * 1024 // 10MB buffer
      });

      return {
        content: [
          {
            type: "text",
            text: `Successfully upgraded project to licensed version.\n\n${output}`,
          },
        ],
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error(`Failed to upgrade project: ${errorMessage}`);
    }
  }

  private async handleGenerateFromDocs(args: any) {
    const { component, framework } = args;

    // Build search URL with framework context if provided
    let searchUrl = `https://www.infragistics.com/search?q=${encodeURIComponent(component)}`;
    
    if (framework) {
      searchUrl += `+${encodeURIComponent(framework)}`;
    }

    // Use the ig doc command
    try {
      const command = `npx igniteui-cli doc "${component}"`;
      execSync(command, { 
        encoding: "utf-8",
        stdio: "pipe"
      });

      return {
        content: [
          {
            type: "text",
            text: `Opening documentation for "${component}"${framework ? ` in ${framework} context` : ""}.\n\nSearch URL: ${searchUrl}\n\nThe documentation will help you find examples and code snippets for implementing the ${component} component.`,
          },
        ],
      };
    } catch (error) {
      // Even if the command fails, provide the URL
      return {
        content: [
          {
            type: "text",
            text: `Documentation search for "${component}"${framework ? ` in ${framework} context` : ""}.\n\nSearch URL: ${searchUrl}\n\nVisit this URL to find examples and code snippets for implementing the ${component} component.`,
          },
        ],
      };
    }
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Ignite UI MCP server running on stdio");
  }
}

// Start the server
const server = new IgniteUIMCPServer();
server.run().catch(console.error);
