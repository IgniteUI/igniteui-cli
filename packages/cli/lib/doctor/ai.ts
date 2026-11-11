import {
	AI_AGENT_CHOICES, App, FS_TOKEN, getInstructionFilePath, getMcpConfigStatus, getSkillsDir, IFileSystem
} from "@igniteui/cli-core";
import * as fs from "fs";
import * as path from "path";
import { resolveMcpServerEntry } from "../commands/mcp";
import { CheckResult, DoctorContext } from "./types";

const GROUP = "AI setup";
const AI_CONFIG_FIX = "Run: ig ai-config";

export function checkBundledServer(context: DoctorContext): CheckResult {
	const id = "mcp-server";
	const fix = "Reinstall igniteui-cli";
	const entry = resolveMcpServerEntry(context.cliDir);
	if (!entry) {
		return { id, group: GROUP, status: "fail", detail: "The bundled MCP server was not found", fix };
	}
	if (!fs.existsSync(path.join(path.dirname(entry), "igniteui-docs.db"))) {
		return { id, group: GROUP, status: "fail", detail: "The bundled MCP server has no docs database", fix };
	}
	return { id, group: GROUP, status: "ok", detail: "Bundled MCP server and docs database found" };
}

export function checkMcpConfig(): CheckResult {
	const id = "mcp-config";
	const configs = getMcpConfigStatus();
	if (!configs.length) {
		return { id, group: GROUP, status: "warn", detail: "No MCP configuration file found", fix: AI_CONFIG_FIX };
	}
	const incomplete = configs.filter(x => x.missingServers.length);
	if (incomplete.length) {
		return {
			id, group: GROUP, status: "warn",
			detail: incomplete.map(x => `${x.mcpFilePath} lacks ${x.missingServers.join(", ")}`).join("; "),
			fix: AI_CONFIG_FIX
		};
	}
	return {
		id, group: GROUP, status: "ok",
		detail: `Ignite UI MCP servers configured in ${configs.map(x => x.mcpFilePath).join(", ")}`
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

export function aiChecks(context: DoctorContext): CheckResult[] {
	const results = [checkBundledServer(context)];
	if (!context.inProject) {
		results.push({ id: "ai-project", group: GROUP, status: "skip", detail: "Not in a project folder" });
	} else if (context.framework === "jquery") {
		results.push({ id: "ai-project", group: GROUP, status: "skip", detail: "Not available for jQuery projects" });
	} else {
		results.push(checkMcpConfig(), checkInstructions(), checkSkills());
	}
	return results;
}
