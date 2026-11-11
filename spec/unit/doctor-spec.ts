import { App, FS_TOKEN, GoogleAnalytics, IFileSystem, ProjectConfig, TEMPLATE_MANAGER, Util } from "@igniteui/cli-core";
import { default as doctor } from "../../packages/cli/lib/commands/doctor";
import * as doctorRunner from "../../packages/cli/lib/doctor";
import { aiChecks, checkInstructions, checkMcpConfig, checkSkills } from "../../packages/cli/lib/doctor/ai";
import {
	checkCliVersion, checkGit, checkNode, checkNpm, environmentChecks
} from "../../packages/cli/lib/doctor/environment";
import { feedChecks } from "../../packages/cli/lib/doctor/feed";
import {
	checkAngularMajor, checkConfig, checkInstalledPackages, checkMixedPackages, checkPackageJson, projectChecks
} from "../../packages/cli/lib/doctor/project";
import { formatJson, formatText } from "../../packages/cli/lib/doctor/report";
import { CheckResult, DoctorContext } from "../../packages/cli/lib/doctor/types";
import { satisfies, shell } from "../../packages/cli/lib/doctor/util";
import * as path from "path";

const CLI_DIR = path.resolve(__dirname, "../../packages/cli");

const MCP_SERVERS = {
	"igniteui-cli": { command: "npx", args: ["-y", "@igniteui/mcp-server"] },
	"igniteui-theming": { command: "npx", args: ["-y", "igniteui-theming", "igniteui-theming-mcp"] }
};

/** `files` are keyed by project-relative path; `node_modules` lookups arrive as absolute paths. */
function mockFileSystem(files: Record<string, string | object> = {}, dirs: string[] = []) {
	const find = (filePath: string) => {
		const normalized = filePath.replace(/\\/g, "/").replace(/^\.\//, "");
		return Object.keys(files).find(key => normalized === key || normalized.endsWith("/" + key));
	};
	const fileSystem: IFileSystem = {
		fileExists: (filePath) => find(filePath) !== undefined,
		readFile: (filePath) => {
			const content = files[find(filePath)!];
			return typeof content === "string" ? content : JSON.stringify(content);
		},
		writeFile: () => fail("the doctor must not write files"),
		directoryExists: (dirPath) => dirs.includes(dirPath),
		glob: () => []
	};
	const getProjectLibrary = jasmine.createSpy("getProjectLibrary").and.callFake(
		(framework: string, type?: string) => framework === "angular" && (!type || type === "igx-ts")
			? { projectType: "igx-ts" }
			: undefined);
	(spyOn(App.container, "get") as jasmine.Spy).and.callFake((token: string) => {
		if (token === FS_TOKEN) {
			return fileSystem;
		}
		return token === TEMPLATE_MANAGER ? { getProjectLibrary } : undefined;
	});
}

function context(overrides: Partial<DoctorContext> = {}): DoctorContext {
	return {
		offline: false,
		cliDir: CLI_DIR,
		framework: "angular",
		inProject: true,
		hasPackageJson: true,
		packageJson: {},
		...overrides
	};
}

function installed(name: string, version: string): Record<string, object> {
	return { [`node_modules/${name}/package.json`]: { version } };
}

describe("Unit - Doctor", () => {
	describe("version ranges", () => {
		it("evaluates the common range forms", () => {
			expect(satisfies("22.2.1", "~22.2.0")).toBeTrue();
			expect(satisfies("22.3.0", "~22.2.0")).toBeFalse();
			expect(satisfies("22.3.0", "^22.2.0")).toBeTrue();
			expect(satisfies("23.0.0", "^22.2.0")).toBeFalse();
			expect(satisfies("22.1.9", "^22.2.0")).toBeFalse();
			expect(satisfies("0.11.4", "^0.11.0")).toBeTrue();
			expect(satisfies("0.12.0", "^0.11.0")).toBeFalse();
			expect(satisfies("7.3.2", "7.3.2")).toBeTrue();
			expect(satisfies("7.3.3", "7.3.2")).toBeFalse();
			expect(satisfies("7.3.3", ">=7.0.0")).toBeTrue();
		});
		it("does not evaluate other ranges", () => {
			expect(satisfies("1.0.0", "latest")).toBeNull();
			expect(satisfies("1.0.0", "file:../pkg")).toBeNull();
			expect(satisfies("1.0.0", ">=1.0.0 <2.0.0")).toBeNull();
		});
	});

	describe("environment", () => {
		it("fails below Node 20 and warns below Node 24", () => {
			expect(checkNode("18.20.0").status).toBe("fail");
			expect(checkNode("22.12.0").status).toBe("warn");
			expect(checkNode("24.1.0").status).toBe("ok");
			expect(checkNode("26.0.0").fix).toBeUndefined();
		});
		it("fails without npm and warns without git", () => {
			spyOn(shell, "run").and.returnValue(null);
			expect(checkNpm().status).toBe("fail");
			expect(checkGit().status).toBe("warn");
		});
		it("reports the npm and git versions", () => {
			spyOn(shell, "run").and.callFake((command: string) => command.startsWith("npm") ? "11.0.0" : "git version 2.50.0");
			expect(checkNpm()).toEqual(jasmine.objectContaining({ status: "ok", detail: "npm 11.0.0" }));
			expect(checkGit()).toEqual(jasmine.objectContaining({ status: "ok", detail: "git version 2.50.0" }));
		});
		it("checks dotnet for Blazor projects only", () => {
			spyOn(shell, "run").and.returnValue(null);
			const ids = (framework: string) => environmentChecks(context({ framework, offline: true })).map(x => x.id);
			expect(ids("angular")).not.toContain("dotnet");
			expect(ids("blazor")).toContain("dotnet");
			expect(environmentChecks(context({ framework: "blazor", offline: true })).find(x => x.id === "dotnet")!.status)
				.toBe("fail");
		});
		it("compares the CLI version with the latest on npm", () => {
			const run = spyOn(shell, "run").and.returnValue("999.0.0");
			const outdated = checkCliVersion(context());
			expect(outdated.status).toBe("warn");
			expect(outdated.detail).toContain("latest is 999.0.0");
			expect(run).toHaveBeenCalledWith("npm view igniteui-cli version", jasmine.any(Number));

			run.and.returnValue("0.0.1");
			expect(checkCliVersion(context()).status).toBe("ok");

			run.and.returnValue(null);
			expect(checkCliVersion(context()).status).toBe("skip");
		});
		it("does not query npm when offline", () => {
			const run = spyOn(shell, "run");
			expect(checkCliVersion(context({ offline: true })).status).toBe("skip");
			expect(run).not.toHaveBeenCalled();
		});
	});

	describe("project", () => {
		it("skips outside a project", () => {
			expect(projectChecks(context({ inProject: false }))).toEqual([
				jasmine.objectContaining({ id: "project", status: "skip" })
			]);
		});
		it("skips the config check without a config file", () => {
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);
			expect(checkConfig().status).toBe("skip");
		});
		it("fails on a config file that doesn't parse", () => {
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			spyOn(ProjectConfig, "localConfig").and.throwError("The ignite-ui-cli.json file is not parsed correctly.");
			const result = checkConfig();
			expect(result.status).toBe("fail");
			expect(result.detail).toContain("not parsed correctly");
		});
		it("resolves the framework and project type to a project library", () => {
			mockFileSystem();
			spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
			const localConfig = spyOn(ProjectConfig, "localConfig")
				.and.returnValue({ project: { framework: "angular", projectType: "igx-ts" } } as any);
			expect(checkConfig()).toEqual(jasmine.objectContaining({ status: "ok", detail: "ignite-ui-cli.json: angular / igx-ts" }));

			localConfig.and.returnValue({ project: { framework: "angular", projectType: "igr-ts" } } as any);
			expect(checkConfig().status).toBe("fail");
		});
		it("reports a package.json that doesn't parse", () => {
			expect(checkPackageJson(context()).status).toBe("ok");
			expect(checkPackageJson(context({ hasPackageJson: false, packageJson: null })).status).toBe("skip");
			const broken = checkPackageJson(context({ packageJson: null, packageJsonError: "Unexpected token" }));
			expect(broken.status).toBe("fail");
			expect(broken.detail).toContain("Unexpected token");
		});
		it("fails when an Ignite UI package is missing or outside its range", () => {
			mockFileSystem(installed("igniteui-angular", "21.0.0"));
			const result = checkInstalledPackages(context({
				packageJson: {
					dependencies: { "igniteui-angular": "~22.2.0", "igniteui-dockmanager": "^2.0.0", "rxjs": "^7.0.0" }
				}
			}));
			expect(result.status).toBe("fail");
			expect(result.detail).toBe("igniteui-angular 21.0.0 doesn't satisfy ~22.2.0; igniteui-dockmanager is not installed");
			expect(result.fix).toBe("Run: npm install");
		});
		it("passes when the Ignite UI packages are installed", () => {
			mockFileSystem({ ...installed("igniteui-angular", "22.2.4"), ...installed("igniteui-cli", "15.9.0") });
			const result = checkInstalledPackages(context({
				packageJson: { dependencies: { "igniteui-angular": "~22.2.0" }, devDependencies: { "igniteui-cli": "latest" } }
			}));
			expect(result).toEqual(jasmine.objectContaining({ status: "ok", detail: "2 Ignite UI package(s) installed" }));
		});
		it("skips the package checks without Ignite UI packages", () => {
			mockFileSystem({ "package.json": { dependencies: { rxjs: "^7.0.0" } } });
			const packageJson = { dependencies: { rxjs: "^7.0.0" } };
			expect(checkInstalledPackages(context({ packageJson })).status).toBe("skip");
			expect(checkMixedPackages(context({ packageJson })).status).toBe("skip");
		});
		it("warns when trial and licensed packages are mixed", () => {
			const packageJson = {
				dependencies: { "@infragistics/igniteui-angular": "~22.2.0", "igniteui-dockmanager": "^2.0.0" }
			};
			mockFileSystem({ "package.json": packageJson });
			const result = checkMixedPackages(context({ packageJson }));
			expect(result.status).toBe("warn");
			expect(result.detail).toContain("igniteui-dockmanager");
			expect(result.fix).toBe("Run: ig upgrade-packages");
		});
		it("accepts trial only and licensed only projects", () => {
			const trial = { dependencies: { "igniteui-angular": "~22.2.0" } };
			mockFileSystem({ "package.json": trial });
			expect(checkMixedPackages(context({ packageJson: trial })).detail).toBe("Trial packages only");
		});
		it("warns when igniteui-angular and Angular are on different majors", () => {
			mockFileSystem({ ...installed("igniteui-angular", "21.1.0"), ...installed("@angular/core", "22.0.1") });
			const packageJson = { dependencies: { "igniteui-angular": "^21.0.0", "@angular/core": "^22.0.0" } };
			const result = checkAngularMajor(context({ packageJson }))!;
			expect(result.status).toBe("warn");
			expect(result.detail).toBe("igniteui-angular 21 with @angular/core 22");
		});
		it("falls back to the declared Angular versions when nothing is installed", () => {
			mockFileSystem();
			const packageJson = { dependencies: { "@infragistics/igniteui-angular": "~22.2.0", "@angular/core": "^22.0.0" } };
			expect(checkAngularMajor(context({ packageJson }))!.status).toBe("ok");
			expect(checkAngularMajor(context({ packageJson: { dependencies: { "@angular/core": "^22.0.0" } } }))).toBeNull();
		});
	});

	describe("licensed feed", () => {
		const packageJson = { dependencies: { "@infragistics/igniteui-angular": "~22.2.0" } };

		it("skips projects without licensed packages", () => {
			const run = spyOn(shell, "run");
			expect(feedChecks(context({ packageJson: { dependencies: { "igniteui-angular": "~22.2.0" } } })))
				.toEqual([jasmine.objectContaining({ id: "feed", status: "skip" })]);
			expect(run).not.toHaveBeenCalled();
		});
		it("fails when the scope has no registry", () => {
			spyOn(shell, "run").and.returnValue("undefined");
			const results = feedChecks(context({ packageJson }));
			expect(results.length).toBe(1);
			expect(results[0].status).toBe("fail");
			expect(results[0].fix).toContain("npm config set @infragistics:registry");
		});
		it("fails when not logged in to the registry", () => {
			spyOn(shell, "run").and.callFake((command: string) =>
				command.startsWith("npm config") ? "https://packages.infragistics.com/npm/js-licensed/" : null);
			const results = feedChecks(context({ packageJson }));
			expect(results.map(x => x.status)).toEqual(["ok", "fail"]);
			expect(results[1].fix)
				.toBe("Run: npm login --registry=https://packages.infragistics.com/npm/js-licensed/ --scope=@infragistics");
		});
		it("passes when logged in", () => {
			const run = spyOn(shell, "run").and.callFake((command: string) =>
				command.startsWith("npm config") ? "https://packages.infragistics.com/npm/js-licensed/" : "jane");
			const results = feedChecks(context({ packageJson }));
			expect(results.map(x => x.status)).toEqual(["ok", "ok"]);
			expect(results[1].detail).toBe("Logged in as jane");
			expect(run).toHaveBeenCalledWith(
				"npm whoami --registry=https://packages.infragistics.com/npm/js-licensed/", jasmine.any(Number));
		});
		it("does not check the login when offline", () => {
			const run = spyOn(shell, "run").and.returnValue("https://packages.infragistics.com/npm/js-licensed/");
			const results = feedChecks(context({ packageJson, offline: true }));
			expect(results.map(x => x.status)).toEqual(["ok", "skip"]);
			expect(run).toHaveBeenCalledTimes(1);
		});
	});

	describe("AI setup", () => {
		it("warns without an MCP configuration", () => {
			mockFileSystem();
			expect(checkMcpConfig()).toEqual(jasmine.objectContaining({ status: "warn", fix: "Run: ig ai-config" }));
		});
		it("warns when a configuration lacks an Ignite UI server", () => {
			mockFileSystem({ ".vscode/mcp.json": { servers: { "igniteui-cli": MCP_SERVERS["igniteui-cli"] } } });
			const result = checkMcpConfig();
			expect(result.status).toBe("warn");
			expect(result.detail).toBe(".vscode/mcp.json lacks igniteui-theming");
		});
		it("passes with the Ignite UI servers configured", () => {
			mockFileSystem({ ".mcp.json": `{ // comment\n "mcpServers": ${JSON.stringify(MCP_SERVERS)} }` });
			expect(checkMcpConfig()).toEqual(jasmine.objectContaining({
				status: "ok", detail: "Ignite UI MCP servers configured in .mcp.json"
			}));
		});
		it("looks for instruction files and skills folders", () => {
			mockFileSystem();
			expect(checkInstructions().status).toBe("warn");
			expect(checkSkills().status).toBe("warn");
		});
		it("finds instruction files and skills folders", () => {
			mockFileSystem({ ".claude/CLAUDE.md": "# rules" }, [".claude/skills"]);
			expect(checkInstructions()).toEqual(jasmine.objectContaining({ status: "ok", detail: "Instructions: .claude/CLAUDE.md" }));
			expect(checkSkills()).toEqual(jasmine.objectContaining({ status: "ok", detail: "Skills: .claude/skills" }));
		});
		it("checks only the bundled server outside a project and for jQuery", () => {
			mockFileSystem();
			expect(aiChecks(context({ inProject: false })).map(x => x.id)).toEqual(["mcp-server", "ai-project"]);
			expect(aiChecks(context({ framework: "jquery" })).map(x => x.id)).toEqual(["mcp-server", "ai-project"]);
			expect(aiChecks(context()).map(x => x.id))
				.toEqual(["mcp-server", "mcp-config", "ai-instructions", "ai-skills"]);
		});
		it("fails when the bundled server is missing", () => {
			mockFileSystem();
			const result = aiChecks(context({ cliDir: "does/not/exist", inProject: false }))[0];
			expect(result).toEqual(jasmine.objectContaining({ id: "mcp-server", status: "fail" }));
		});
	});

	describe("command", () => {
		const results: CheckResult[] = [
			{ id: "node", group: "Environment", status: "ok", detail: "Node.js 24.0.0" },
			{ id: "git", group: "Environment", status: "warn", detail: "git not found", fix: "Install git" },
			{ id: "project", group: "Project", status: "skip", detail: "Not in a project folder" }
		];
		const failed: CheckResult = { id: "npm", group: "Environment", status: "fail", detail: "npm not found" };
		let exitCode: typeof process.exitCode;

		beforeEach(() => {
			exitCode = process.exitCode;
			spyOn(GoogleAnalytics, "post");
			spyOn(Util, "log");
		});
		afterEach(() => {
			process.exitCode = exitCode;
		});

		it("prints grouped results with fix hints and a summary", () => {
			expect(formatText(results, false)).toBe([
				"Environment",
				"  ok    Node.js 24.0.0",
				"  warn  git not found",
				"        Install git",
				"",
				"Project",
				"  skip  Not in a project folder",
				"",
				"1 ok, 1 warning(s), 0 failed, 1 skipped"
			].join("\n"));
		});
		it("prints JSON with a summary and every check", () => {
			expect(JSON.parse(formatJson([...results, failed]))).toEqual({
				ok: false,
				summary: { ok: 1, warn: 1, fail: 1, skip: 1 },
				checks: [...results, failed]
			});
		});
		it("exits with 0 when nothing fails", async () => {
			const runDoctor = spyOn(doctorRunner, "runDoctor").and.returnValue(results);
			process.exitCode = 0;
			await doctor.handler({ offline: true, _: ["doctor"], $0: "ig" });
			expect(runDoctor).toHaveBeenCalledWith(true);
			expect(process.exitCode).toBe(0);
			expect((Util.log as jasmine.Spy).calls.mostRecent().args[0]).toContain("1 ok, 1 warning(s), 0 failed, 1 skipped");
		});
		it("exits with 1 when a check fails and prints JSON on request", async () => {
			spyOn(doctorRunner, "runDoctor").and.returnValue([...results, failed]);
			process.exitCode = 0;
			await doctor.handler({ json: true, _: ["doctor"], $0: "ig" });
			expect(process.exitCode).toBe(1);
			expect(JSON.parse((Util.log as jasmine.Spy).calls.mostRecent().args[0]).ok).toBeFalse();
		});
	});
});
