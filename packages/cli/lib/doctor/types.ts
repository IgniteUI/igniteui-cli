export type CheckStatus = "ok" | "warn" | "fail" | "skip";

export interface CheckResult {
	id: string;
	group: string;
	status: CheckStatus;
	detail: string;
	/** One-line hint on how to resolve a `warn` or `fail`. */
	fix?: string;
}

export interface ProjectPackageJson {
	dependencies?: Record<string, string>;
	devDependencies?: Record<string, string>;
}

export interface DoctorContext {
	/** Skip the checks that need the network. */
	offline: boolean;
	/** Folder of the running CLI package. */
	cliDir: string;
	framework: string | null;
	inProject: boolean;
	hasPackageJson: boolean;
	/** `null` when there is no package.json or it doesn't parse. */
	packageJson: ProjectPackageJson | null;
	packageJsonError?: string;
}
