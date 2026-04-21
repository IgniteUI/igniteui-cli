import { addMcpServers, copyAISkillsToProject, FsFileSystem, GoogleAnalytics, IGNITEUI_MCP_SERVERS, IFileSystem, Util } from "@igniteui/cli-core";
import { ArgumentsCamelCase, CommandModule } from "yargs";
import * as path from "path";

function getConfigPath(): string {
	return path.join(process.cwd(), ".vscode", "mcp.json");
}

export function configureMCP(fileSystem: IFileSystem = new FsFileSystem()): void {
	const configPath = getConfigPath();
	let existingContent: string | undefined;
	try {
		existingContent = fileSystem.readFile(configPath);
	} catch {
		// file doesn't exist
	}
	const { text, modified } = addMcpServers(existingContent, IGNITEUI_MCP_SERVERS);

	if (!modified) {
		Util.log(` Ignite UI MCP servers already configured in ${configPath}`);
		return;
	}
	fileSystem.writeFile(configPath, text + "\n");
	Util.log(Util.greenCheck() + ` MCP servers configured in ${configPath}`);
}

export function configureSkills(): void {
	const result = copyAISkillsToProject();
	if (result.found === 0) {
		Util.warn("No AI skill files found. Make sure packages are installed (npm install) " +
			"and your Ignite UI packages are up-to-date.", "yellow");
	} else if (result.failed > 0) {
		Util.warn(`Failed to write ${result.failed} skill file(s) out of ${result.found}.`, "yellow");
	} else if (result.skipped === result.found) {
		Util.log("Everything is already up-to-date.");
	} else {
		const written = result.found - result.skipped;
		Util.log(Util.greenCheck() + ` ${written} AI skill file(s) created or updated.`);
	}
}

export function configure(skills = true): void {
	configureMCP();
	if (skills) {
		configureSkills();
	}
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
