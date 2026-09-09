import { ProjectLibrary, ProjectTemplate } from "../types";

/** Returns true if the given project template is safe to use for upgrade operations,
 * i.e. it's not hidden/partial-only and actually implements `upgradeIgniteUIPackages`. */
function isUpgradeableProject(project: ProjectTemplate): boolean {
	return !!project && !project.isHidden && typeof project.upgradeIgniteUIPackages === "function";
}

/**
 * Resolves the project template to use for Ignite UI package upgrade operations.
 *
 * Resolution order:
 * 1. The configured `projectTemplate` id, if it exists in the library and is a valid,
 *    non-hidden project that implements `upgradeIgniteUIPackages`.
 * 2. The first project in `library.projectIds` (declared order) that is valid,
 *    non-hidden, and implements `upgradeIgniteUIPackages`.
 *
 * This avoids blindly falling back to `projectIds[0]`, which can select hidden/partial
 * project templates (e.g. `ai-config`) that don't support upgrading.
 *
 * @returns the resolved project template, or `null` if none could be found.
 */
export function resolveUpgradeableProject(
	library: ProjectLibrary,
	configuredTemplateId?: string
): ProjectTemplate | null {
	if (configuredTemplateId && library.hasProject(configuredTemplateId)) {
		const configuredProject = library.getProject(configuredTemplateId);
		if (isUpgradeableProject(configuredProject)) {
			return configuredProject;
		}
	}

	for (const id of library.projectIds) {
		const project = library.getProject(id);
		if (isUpgradeableProject(project)) {
			return project;
		}
	}

	return null;
}
