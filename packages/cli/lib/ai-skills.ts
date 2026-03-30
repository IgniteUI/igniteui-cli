import { copyAISkillsToProject as _copyFromCore } from "@igniteui/cli-core";

export function copyAISkillsToProject(): "copied" | "up-to-date" | "no-source" {
	return _copyFromCore();
}

