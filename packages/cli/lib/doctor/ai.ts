import {
	AI_AGENT_CHOICES, App, FS_TOKEN, getInstructionFilePath, getMcpConfigStatus, getSkillsDir, IFileSystem
} from "@igniteui/cli-core";
import { default as doc } from "../commands/doc";
import { resolveMcpServerEntry } from "../commands/mcp";
import { CheckResult, DoctorContext } from "./types";

const GROUP = "AI setup";
const AI_CONFIG_FIX = "Run: ig ai-config";

export async function checkBundledServer(context: DoctorContext): Promise<CheckResult> {
	const id = "mcp-server";
	const fix = "Reinstall igniteui-cli";
	if (!resolveMcpServerEntry(context.cliDir)) {
		return { id, group: GROUP, status: "fail", detail: "The bundled MCP server was not found", fix };
	}
	try {
		const api = await doc.loadDocs();
		await new api.LocalDocsProvider().init();
	} catch (error) {
		return {
			id, group: GROUP, status: "fail",
			detail: `The bundled docs database can't be opened: ${(error as Error).message}`, fix
		};
	}
	return { id, group: GROUP, status: "ok", detail: "Bundled MCP server found and docs database opens" };
}

export function checkMcpConfig(): CheckResult {
	const id = "mcp-config";
	const configs = getMcpConfigStatus();
	if (!configs.length) {
		return { id, group: GROUP, status: "warn", detail: "No MCP configuration file found", fix: AI_CONFIG_FIX };
	}
	const complete = configs.filter(x => !x.missingServers.length);
	if (!complete.length) {
		const invalid = configs.filter(x => x.invalid);
		return {
			id, group: GROUP, status: "warn",
			detail: configs
				.map(x => x.invalid ? `${x.mcpFilePath} is not valid JSON` : `${x.mcpFilePath} lacks ${x.missingServers.join(", ")}`)
				.join("; "),
			fix: invalid.length ? `Fix the JSON in ${invalid.map(x => x.mcpFilePath).join(", ")}` : AI_CONFIG_FIX
		};
	}
	return {
		id, group: GROUP, status: "ok",
		detail: `Ignite UI MCP servers configured in ${complete.map(x => x.mcpFilePath).join(", ")}`
	};
}

export function checkInstructions(): CheckResult {
	const fileSystem = App.container.get<IFileSystem>(FS_TOKEN);
	const found = AI_AGENT_CHOICES.map(getInstructionFilePath).filter(file => fileSystem.fileExists(file));
	return found.length
		? { id: "ai-instructions", group: GROUP, status: "ok", detail: `Instructions: ${found.join(", ")}` }
		: { id: "ai-instructions", group: GROUP, status: "warn", detail: "No agent instruction file found", fix: AI_CONFIG_FIX };
}

export function checkSkills(): CheckResult {
	const fileSystem = App.container.get<IFileSystem>(FS_TOKEN);
	const found = AI_AGENT_CHOICES.map(getSkillsDir).filter(dir => fileSystem.directoryExists(dir));
	return found.length
		? { id: "ai-skills", group: GROUP, status: "ok", detail: `Skills: ${found.join(", ")}` }
		: { id: "ai-skills", group: GROUP, status: "warn", detail: "No agent skills folder found", fix: AI_CONFIG_FIX };
}

export async function aiChecks(context: DoctorContext): Promise<CheckResult[]> {
	const results = [await checkBundledServer(context)];
	if (!context.inProject) {
		results.push({ id: "ai-project", group: GROUP, status: "skip", detail: "Not in an Ignite UI project" });
	} else if (context.framework === "jquery") {
		results.push({ id: "ai-project", group: GROUP, status: "skip", detail: "Not available for jQuery projects" });
	} else {
		results.push(checkMcpConfig(), checkInstructions(), checkSkills());
	}
	return results;
}
