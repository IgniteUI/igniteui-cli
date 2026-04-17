import { FsFileSystem, GoogleAnalytics, IFileSystem, ProjectConfig, Util } from "@igniteui/cli-core";
import { ArgumentsCamelCase, CommandModule } from "yargs";
import * as path from "path";
import { copyAISkillsToProject } from "../ai-skills";

const IGNITEUI_SERVER_KEY = "igniteui-cli";
const IGNITEUI_THEMING_SERVER_KEY = "igniteui-theming";

const igniteuiServer = {
	command: "npx",
	args: ["-y", "igniteui-cli@next", "mcp"]
};

const igniteuiThemingServer = {
	command: "npx",
	args: ["-y", "igniteui-theming", "igniteui-theming-mcp"]
};

interface McpServerEntry {
	command: string;
	args: string[];
}

interface VsCodeMcpConfig {
	servers: Record<string, McpServerEntry>;
}

function getConfigPath(): string {
	return path.join(process.cwd(), ".vscode", "mcp.json");
}

function readJson<T>(filePath: string, fallback: T, fileSystem: IFileSystem): T {
	try {
		return JSON.parse(fileSystem.readFile(filePath)) as T;
	} catch {
		return fallback;
	}
}

function writeJson(filePath: string, data: unknown, fileSystem: IFileSystem): void {
	fileSystem.writeFile(filePath, JSON.stringify(data, null, 2) + "\n");
}

export function configureMCP(fileSystem: IFileSystem = new FsFileSystem()): void {
	const configPath = getConfigPath();
	const config = readJson<VsCodeMcpConfig>(configPath, { servers: {} }, fileSystem);
	config.servers = config.servers || {};

	let modified = false;
	if (!config.servers[IGNITEUI_SERVER_KEY]) {
		config.servers[IGNITEUI_SERVER_KEY] = igniteuiServer;
		modified = true;
	}
	if (!config.servers[IGNITEUI_THEMING_SERVER_KEY]) {
		config.servers[IGNITEUI_THEMING_SERVER_KEY] = igniteuiThemingServer;
		modified = true;
	}

	if (!modified) {
		Util.log(` Ignite UI MCP servers already configured in ${configPath}`);
		return;
	}
	writeJson(configPath, config, fileSystem);
	Util.log(Util.greenCheck() + ` MCP servers configured in ${configPath}`);
}

export function configureSkills(): void {
	if (!ProjectConfig.hasLocalConfig()) {
		return;
	}
	const result = copyAISkillsToProject();
	if (result === "copied") {
		Util.log(Util.greenCheck() + " AI skills added to the project.");
	} else if (result === "up-to-date") {
		Util.log(Util.greenCheck() + " AI skills are already up to date.");
	} else {
		Util.warn("No AI skill files found. Make sure packages are installed (npm install) " +
			"and your Ignite UI package includes a skills/ directory.", "yellow");
	}
}

export function configure(fileSystem: IFileSystem = new FsFileSystem()): void {
	configureMCP(fileSystem);
	configureSkills();
}

const command: CommandModule = {
	command: "ai-config",
	describe: "Configure Ignite UI AI tooling (MCP servers and AI coding skills)",
	builder: (yargs) => yargs.usage(""),
	async handler(_argv: ArgumentsCamelCase) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "MCP"
		});

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig ai-config",
			ea: "client: vscode"
		});

		configure();
	}
};

export default command;
