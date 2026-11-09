import child_process from "child_process";
import nodeFs from "fs";
import * as path from "path";
import * as semver from "semver";
import { Config, IFileSystem } from "../../packages/core/types";
import { App, ProjectConfig, Util } from "../../packages/core/util";
import {
	FEED_ANGULAR, FEED_REACT_GRIDS, FEED_WEBCOMPONENTS_GRIDS, NPM_ANGULAR, NPM_CLI, NPM_DOCK_MANAGER, NPM_GRID_LITE, NPM_REACT,
	NPM_REACT_DOCK_MANAGER, NPM_REACT_GRIDS, NPM_WEBCOMPONENTS, UPGRADEABLE_PACKAGES
} from "../../packages/core/update/package-resolve";
import {
	applyUpdatePlan, discoverUpdates, getUpdateCandidates, getUpdatePlan, PackageUpdate, UPDATABLE_PACKAGES
} from "../../packages/core/update/version-update";

const realSpawnSync = child_process.spawnSync;
const realExecFile = child_process.execFile;

describe("Unit - version update", () => {
	const platform = Object.getOwnPropertyDescriptor(process, "platform")!;
	let fs: jasmine.SpyObj<IFileSystem>;
	let spawnSync: jasmine.Spy;
	let execFile: jasmine.Spy;

	function mockProject(pkgJson: object | string, installed: Record<string, string | object> = {}) {
		const files: Record<string, string> = {
			"./package.json": typeof pkgJson === "string" ? pkgJson : JSON.stringify(pkgJson)
		};
		for (const [name, manifest] of Object.entries(installed)) {
			files[`node_modules/${name}/package.json`] = JSON.stringify({ name, ...typeof manifest === "string" ? { version: manifest } : manifest });
		}
		fs.fileExists.and.callFake(filePath => filePath in files);
		fs.readFile.and.callFake(filePath => files[filePath]);
		return files;
	}

	beforeEach(() => {
		fs = jasmine.createSpyObj<IFileSystem>("fs", ["fileExists", "readFile", "writeFile", "directoryExists", "glob"]);
		spyOn(App.container, "get").and.returnValue(fs);
		spyOn(Util, "warn");
		registry = {};
		spawnSync = (spyOn(child_process, "spawnSync") as jasmine.Spy).and.callFake((_command: string, args: string[]) => view(args));
		execFile = (spyOn(child_process, "execFile") as jasmine.Spy).and.callFake((_command: string, args: string[], _options: object,
			callback: (error: Error | null, stdout: string, stderr: string) => void) => {
			const { status, stdout, stderr, error } = view(args);
			setImmediate(() => callback(error ?? (status ? Object.assign(new Error("npm failed"), { code: status }) : null), stdout ?? "", stderr ?? ""));
		});
	});

	afterEach(() => {
		Object.defineProperty(process, "platform", platform);
	});

	type Manifest = object | ((version: string) => object);
	type Result = { status: number | null; stdout: string | null; stderr?: string | null; error?: Error };
	type Published = { versions: string | string[]; latest?: string; manifest?: Manifest; tags?: Record<string, string> };
	let registry: Record<string, Published | string | Result>;

	function npmError(code: string, summary = `${code} summary`): Result {
		return { status: 1, stdout: JSON.stringify({ error: { code, summary } }) };
	}

	function publish(name: string, versions: string | string[], latest?: string, manifest?: Manifest, tags?: Record<string, string>) {
		registry[name] = { versions, latest, manifest, tags };
	}

	/** npm's output for `npm view <args>`, from `registry` */
	function view(args: string[]): Result {
		const [, name, spec] = /^(@?[^@]+)(?:@(.+))?$/.exec(args[args.indexOf("view") + 1])!;
		const entry = registry[name] ?? npmError("E404");
		const ok = (stdout: string) => ({ status: 0, stdout, stderr: "" });
		if (typeof entry === "string") {
			return ok(entry);
		}
		if ("status" in entry) {
			return { stderr: "", ...entry };
		}
		const { versions, latest, manifest, tags } = entry as Published;
		if (!spec) {
			return ok(JSON.stringify({ versions, "dist-tags": { latest, ...tags } }));
		}
		const range = ({ latest, ...tags } as Record<string, string | undefined>)[spec] ?? spec;
		const matches = ([] as string[]).concat(versions).filter(v => semver.satisfies(v, range)).map(version => {
			const fields = typeof manifest === "function" ? manifest(version) : manifest;
			return fields ? { version, ...fields } : version;
		});
		return ok(JSON.stringify(matches.length === 1 ? matches[0] : matches));
	}

	function directDependencies(): string[] {
		const { dependencies, devDependencies } = JSON.parse(fs.readFile("./package.json"));
		return Object.keys({ ...dependencies, ...devDependencies });
	}

	it("UPDATABLE_PACKAGES includes the trial and licensed names of every non-Angular package, but not Angular", () => {
		for (const [trial, licensed] of Object.entries(UPGRADEABLE_PACKAGES).filter(([trial]) => trial !== NPM_ANGULAR)) {
			expect([UPDATABLE_PACKAGES.has(trial), UPDATABLE_PACKAGES.has(licensed)]).withContext(trial).toEqual([true, true]);
		}
		expect([UPDATABLE_PACKAGES.has(NPM_ANGULAR), UPDATABLE_PACKAGES.has(FEED_ANGULAR)]).toEqual([false, false]);
	});

	describe("getUpdateCandidates", () => {
		afterEach(() => {
			expect(spawnSync).not.toHaveBeenCalled();
			expect(fs.writeFile).not.toHaveBeenCalled();
		});

		it("collects only the named direct dependencies and devDependencies, in package.json order, keeping trial and licensed names", () => {
			mockProject({
				dependencies: {
					"igniteui-react": "~19.6.0",
					"igniteui-react-grids": "~19.5.0",
					"@infragistics/igniteui-react-grids": "~19.6.0",
					"igniteui-grid-lite": "~0.11.0",
					"react": "^19.0.0"
				},
				devDependencies: { "igniteui-cli": "~15.7.0" }
			});

			const names = ["igniteui-cli", "@infragistics/igniteui-react-grids", "igniteui-react-grids", "react", "igniteui-react"];

			expect(getUpdateCandidates(names).map(c => [c.name, c.section])).toEqual([
				["igniteui-react", "dependencies"],
				["igniteui-react-grids", "dependencies"],
				["@infragistics/igniteui-react-grids", "dependencies"],
				["react", "dependencies"],
				["igniteui-cli", "devDependencies"]
			]);
		});

		it("uses the installed version as baseline when it satisfies the declared range", () => {
			mockProject(
				{ dependencies: { "igniteui-webcomponents": "~7.4.0", "igniteui-react": "^19.9.0-rc.1" } },
				{ "igniteui-webcomponents": "7.4.1", "igniteui-react": "19.9.0-rc.1" }
			);

			expect(getUpdateCandidates(directDependencies())).toEqual([
				{ name: "igniteui-webcomponents", section: "dependencies", declared: "~7.4.0", installed: "7.4.1", baseline: "7.4.1" },
				{ name: "igniteui-react", section: "dependencies", declared: "^19.9.0-rc.1", installed: "19.9.0-rc.1", baseline: "19.9.0-rc.1" }
			]);
			expect(Util.warn).not.toHaveBeenCalled();
		});

		it("skips a package installed outside its declared range, older or newer, as no baseline is known to be migrated", () => {
			mockProject(
				{ dependencies: {
					"igniteui-react": "^19.6.0", "igniteui-webcomponents": "^6.5.0", "igniteui-grid-lite": "~0.11.0", "igniteui-react-grids": "^19.6.0"
				} },
				{ "igniteui-react": "19.5.2", "igniteui-webcomponents": "7.4.1", "igniteui-grid-lite": "0.11.4", "igniteui-react-grids": "19.7.0-beta.1" }
			);

			const [react, webcomponents, gridLite, grids] = getUpdateCandidates(directDependencies());

			expect(gridLite).toEqual(jasmine.objectContaining({ installed: "0.11.4", baseline: "0.11.4" }));
			expect([react, webcomponents, grids].map(c => [c.baseline, c.skipped])).toEqual([
				[undefined, 'installed 19.5.2 is outside the declared range "^19.6.0"; update package.json or reinstall before updating'],
				[undefined, 'installed 7.4.1 is outside the declared range "^6.5.0"; update package.json or reinstall before updating'],
				[undefined, 'installed 19.7.0-beta.1 is outside the declared range "^19.6.0"; update package.json or reinstall before updating']
			]);
			expect(Util.warn).not.toHaveBeenCalled();
		});

		it("supports exact, ^, ~ and x-range specs, using the declared minimum when not installed", () => {
			const baselines: Record<string, string> = {
				"19.6.0": "19.6.0", "^19.6.0": "19.6.0", "~19.6.0": "19.6.0", "^19.9.0-rc.1": "19.9.0-rc.1",
				"19": "19.0.0", "19.x": "19.0.0", "19.6.x": "19.6.0", "~19.6": "19.6.0", "0.11.x": "0.11.0"
			};
			for (const declared of Object.keys(baselines)) {
				mockProject({ dependencies: { "igniteui-react": declared } });

				expect(getUpdateCandidates(directDependencies())[0].baseline).withContext(declared).toBe(baselines[declared]);
			}
			expect(Util.warn).not.toHaveBeenCalled();
		});

		it("skips unsupported specs, including complex and unsatisfiable ranges, without throwing", () => {
			const specs = ["workspace:*", "file:../react", "latest", "*", "", "x", "github:IgniteUI/igniteui-react",
				"npm:igniteui-react@19.6.0", "https://example.com/igniteui-react.tgz",
				"^18.0.0 || ^19.0.0", "<20.0.0", ">=19.6.0", "19.0.0 - 19.6.0", ">=19.0.0 <20.0.0", "=19.6.0", "v19.6.0",
				"<0.0.0", ">=20.0.0 <19.0.0", "19.6.0.1", "^19.6.0-"];
			for (const declared of specs) {
				mockProject({ dependencies: { "igniteui-react": declared } }, { "igniteui-react": "19.6.0" });

				const [candidate] = getUpdateCandidates(directDependencies());

				expect(candidate.skipped).withContext(declared).toContain(`unsupported spec "${declared}"`);
				expect(candidate.installed).withContext(declared).toBe("19.6.0");
			}
			expect(Util.warn).not.toHaveBeenCalled();
		});

		it("warns only for packages targeted by overrides or resolutions", () => {
			mockProject({
				dependencies: {
					"igniteui-react": "~19.6.0",
					"igniteui-webcomponents": "~7.4.0",
					"igniteui-grid-lite": "~0.11.0",
					"@infragistics/igniteui-react-charts": "~19.6.0",
					"igniteui-react-grids": "~19.6.0"
				},
				overrides: {
					"igniteui-webcomponents@7": "7.4.1",
					"@infragistics/igniteui-react-charts@19": "19.6.0",
					"@infragistics/igniteui-react-grids": "19.6.0",
					"igniteui-react-core": "19.6.0"
				},
				resolutions: {
					"**/igniteui-grid-lite": "0.11.0",
					"some-parent/igniteui-react": "19.6.2",
					"**/@infragistics/igniteui-react-grids@19": "19.6.0"
				}
			});

			getUpdateCandidates(directDependencies());

			expect(Util.warn).toHaveBeenCalledTimes(4);
			for (const name of ["igniteui-react", "igniteui-webcomponents", "igniteui-grid-lite", "@infragistics/igniteui-react-charts"]) {
				expect(Util.warn).toHaveBeenCalledWith(`${name} is listed in package.json overrides/resolutions, ` +
					"which can override the updated version.", "yellow");
			}
		});

		it("throws when package.json is missing or invalid", () => {
			mockProject("{ invalid");

			expect(() => getUpdateCandidates([])).toThrowError(/Unable to parse package.json/);

			fs.fileExists.and.returnValue(false);

			expect(() => getUpdateCandidates([])).toThrowError(/No package.json found/);
		});
	});

	describe("getUpdatePlan", () => {
		/** Every direct dependency, requested within its current major (`pkg@^<baseline>`), as these alignment specs were written */
		const withinMajor = (options: { force?: boolean; verbose?: boolean } = {}) => getUpdatePlan({ ...options,
			requests: getUpdateCandidates(directDependencies()).map(c => ({ name: c.name, spec: c.baseline && `^${c.baseline}` })) });

		const REACT_WC_RANGES: Record<string, string> = {
			"19.3.0": "~6.3.3", "19.3.2": "~6.3.6", "19.4.0": "~6.3.6", "19.5.0": "~7.0.0", "19.9.0": "~7.4.1"
		};

		function publishReactWcHistory(reactVersions: string[], wcVersions: string[]) {
			publish(NPM_REACT, reactVersions, "19.9.0", version => ({ dependencies: { [NPM_WEBCOMPONENTS]: REACT_WC_RANGES[version] } }));
			publish(NPM_WEBCOMPONENTS, wcVersions, "7.4.1");
		}

		afterEach(() => {
			expect(fs.writeFile).not.toHaveBeenCalled();
		});

		it("does not query the registry for skipped packages", () => {
			mockProject({ dependencies: { "igniteui-react": "workspace:*", "igniteui-webcomponents": "^6.5.0" } },
				{ "igniteui-webcomponents": "7.4.1" });

			expect(withinMajor().every(c => c.skipped && !c.target)).toBe(true);
			expect(spawnSync).not.toHaveBeenCalled();
		});

		it("skips a package with no published version in its line", () => {
			mockProject({ dependencies: { "igniteui-react": "~19.6.0" } });
			publish("igniteui-react", ["20.0.0"], "20.0.0");

			const [react] = withinMajor();

			expect(react.skipped).toBe('no published version matches "^19.6.0"');
			expect(react.target).toBeUndefined();

			registry["igniteui-react"] = "{}";

			expect(withinMajor()[0].skipped).toBe('no published version matches "^19.6.0"');
		});

		it("maps registry errors and unexpected output to actionable messages", () => {
			const licensed = "@infragistics/igniteui-react-grids";
			mockProject({ dependencies: { [licensed]: "~19.6.0" } });

			spyOn(ProjectConfig, "getConfig").and.returnValue({ igPackageRegistry: "https://feed.example/npm/" } as Config);
			const unableToGet = `Unable to get ${licensed} from the registry:`;
			const login = "npm login --scope=@infragistics --registry=https://feed.example/npm/ --auth-type=legacy";

			registry[licensed] = npmError("E404", "Not Found - GET https://registry.npmjs.org/@infragistics%2figniteui-react-grids - Not found");
			expect(() => withinMajor()).toThrowError(
				`${unableToGet} Not Found - GET https://registry.npmjs.org/@infragistics%2figniteui-react-grids - Not found\n` +
				"npm may not be using the Infragistics feed for @infragistics packages. " +
				'Check that .npmrc has "@infragistics:registry=https://feed.example/npm/" and that your account has access to this package.');

			for (const code of ["E401", "ENEEDAUTH"]) {
				registry[licensed] = npmError(code);
				expect(() => withinMajor()).withContext(code).toThrowError(`${unableToGet} ${code} summary\n` +
					`npm has no valid credentials for the Infragistics feed. Log in with your Infragistics account: ${login}`);
			}

			registry[licensed] = npmError("E403");
			expect(() => withinMajor()).toThrowError(`${unableToGet} E403 summary\nThe Infragistics feed denied access. ` +
				`Check that your account has access to this package, and log in again if its credentials changed: ${login}`);

			registry[licensed] = npmError("ETIMEDOUT", "network timeout");
			expect(() => withinMajor()).toThrowError(`${unableToGet} network timeout`);

			mockProject({ dependencies: { "igniteui-react": "~19.6.0" } });
			registry["igniteui-react"] = npmError("E401");
			expect(() => withinMajor()).toThrowError("Unable to get igniteui-react from the registry: E401 summary");

			registry["igniteui-react"] = npmError("ETIMEDOUT", "network timeout");
			expect(() => withinMajor()).toThrowError("Unable to get igniteui-react from the registry: network timeout");

			registry["igniteui-react"] = "not json";
			expect(() => withinMajor()).toThrowError(/^Unable to get igniteui-react from the registry: /);

			registry["igniteui-react"] = { status: null, stdout: null, stderr: null, error: new Error("spawnSync npm ENOENT") };
			expect(() => withinMajor()).toThrowError("Unable to get igniteui-react from the registry: spawnSync npm ENOENT");

			registry["igniteui-react"] = { status: 1, stdout: "", stderr: "npm error request failed\n" };
			expect(() => withinMajor()).toThrowError("Unable to get igniteui-react from the registry: npm error request failed");
		});

		describe("alignment", () => {
			const summary = (plan: PackageUpdate[]) => plan.map(c => [c.name, c.target, c.newRange, c.conflict]);

			it("aligns to an exact peer and writes it as an exact range, in either package order (React)", () => {
				publish("igniteui-react-charts", ["19.5.2", "19.6.0"], "19.6.0", { peerDependencies: { "igniteui-react-core": "19.6.0" } });
				publish("igniteui-react-core", ["19.5.2", "19.6.0", "19.7.0"], "19.7.0");
				const charts = ["igniteui-react-charts", "19.6.0", "~19.6.0", undefined];
				const core = ["igniteui-react-core", "19.6.0", "19.6.0", undefined];

				mockProject({ dependencies: { "igniteui-react-charts": "~19.5.2", "igniteui-react-core": "~19.5.2" } });
				expect(summary(withinMajor())).toEqual([charts, core]);

				mockProject({ dependencies: { "igniteui-react-core": "~19.5.2", "igniteui-react-charts": "~19.5.2" } });
				expect(summary(withinMajor())).toEqual([core, charts]);
			});

			it("keeps an older dependent that works with the dependency's major, writing a range that excludes the newer versions " +
				"the lookahead rejected for their dependencies, also at the baseline (real React 19.x / WC history)", () => {
				publishReactWcHistory(Object.keys(REACT_WC_RANGES), ["6.3.0", "6.3.3", "6.3.6", "6.5.1", "7.0.0", "7.4.1"]);

				for (const [react, installed] of [
					["~19.3.0", { [NPM_REACT]: "19.3.0", [NPM_WEBCOMPONENTS]: "6.3.3" }],
					["^19.3.0", {}], ["^19.4.0", { [NPM_REACT]: "19.4.0", [NPM_WEBCOMPONENTS]: "6.3.6" }], ["^19.4.0", {}]
				] as [string, Record<string, string>][]) {
					mockProject({ dependencies: { [NPM_REACT]: react, [NPM_WEBCOMPONENTS]: "^6.3.0" } }, installed);

					expect(summary(withinMajor())).withContext(`${react} ${JSON.stringify(installed)}`).toEqual([
						[NPM_REACT, "19.4.0", "~19.4.0", undefined],
						[NPM_WEBCOMPONENTS, "6.3.6", "~6.3.6", undefined]
					]);
				}
			});

			it("writes a range excluding the newer versions the lookahead rejected for their peers, also at the baseline, " +
				"recording the newest version only for packages held back below it (real React 19.x / grid lite history)", () => {
				publish(NPM_REACT, ["19.8.0", "19.8.1", "19.9.0"], "19.9.0",
					version => ({ peerDependencies: { [NPM_GRID_LITE]: version === "19.9.0" ? "~0.11.0" : "~0.9.0" } }));
				publish(NPM_GRID_LITE, ["0.9.0", "0.11.0"], "0.11.0");
				const plan = () => withinMajor().map(c => [c.name, c.target, c.newRange, c.newest]);

				for (const [react, installed] of [
					["^19.8.0", {}], ["^19.8.0", { [NPM_REACT]: "19.8.1", [NPM_GRID_LITE]: "0.9.0" }], ["^19.8.1", {}]
				] as [string, Record<string, string>][]) {
					mockProject({ dependencies: { [NPM_REACT]: react, [NPM_GRID_LITE]: "~0.9.0" } }, installed);

					expect(plan()).withContext(`${react} ${JSON.stringify(installed)}`).toEqual([
						[NPM_REACT, "19.8.1", "~19.8.1", "19.9.0"],
						[NPM_GRID_LITE, "0.9.0", undefined, undefined]
					]);
				}

				mockProject({ dependencies: { [NPM_REACT]: "~19.8.1", [NPM_GRID_LITE]: "~0.9.0" } }, { [NPM_REACT]: "19.8.1", [NPM_GRID_LITE]: "0.9.0" });
				expect(plan()).withContext("held back at the installed version").toEqual([[NPM_REACT, "19.8.1", undefined, "19.9.0"], [NPM_GRID_LITE, "0.9.0", undefined, undefined]]);

				mockProject({ dependencies: { [NPM_REACT]: "~19.8.1", [NPM_GRID_LITE]: "~0.11.0" } }, { [NPM_REACT]: "19.8.1", [NPM_GRID_LITE]: "0.11.0" });
				expect(plan()).withContext("not held back").toEqual([[NPM_REACT, "19.9.0", "~19.9.0", undefined], [NPM_GRID_LITE, "0.11.0", undefined, undefined]]);
			});

			it("records the packages whose requirements hold a package back, and nothing for packages that reach the newest version", () => {
				const heldBack = (plan: PackageUpdate[]) => plan.map(c => [c.name, c.newest, c.heldBackBy]);

				publish("igniteui-react-charts", ["19.5.2", "19.6.0"], "19.6.0", { peerDependencies: { "igniteui-react-core": "19.6.0" } });
				publish("igniteui-react-core", ["19.5.2", "19.6.0", "19.7.0"], "19.7.0");
				mockProject({ dependencies: { "igniteui-react-charts": "~19.5.2", "igniteui-react-core": "~19.5.2" } });
				expect(heldBack(withinMajor())).toEqual([
					["igniteui-react-charts", undefined, undefined],
					["igniteui-react-core", "19.7.0", [{ name: "igniteui-react-charts", reason: "19.6.0 (required by igniteui-react-charts@19.6.0)" }]]
				]);

				mockProject({ dependencies: { [NPM_REACT]: "~19.3.0", [NPM_WEBCOMPONENTS]: "^6.3.0" } }, { [NPM_REACT]: "19.3.0", [NPM_WEBCOMPONENTS]: "6.3.3" });
				publishReactWcHistory(["19.3.0", "19.4.0", "19.9.0"], ["6.3.3", "6.3.6", "7.4.1"]);
				expect(heldBack(withinMajor())).toEqual([
					[NPM_REACT, "19.9.0", [{ name: NPM_WEBCOMPONENTS, reason: '19.9.0 requires igniteui-webcomponents@~7.4.1, outside "^6.3.3"' }]],
					[NPM_WEBCOMPONENTS, undefined, undefined]
				]);

				publish(NPM_REACT, ["19.8.0", "19.9.0"], "19.9.0",
					version => ({ dependencies: { [NPM_WEBCOMPONENTS]: version === "19.9.0" ? "~7.4.1" : "~7.3.0" } }));
				publish(NPM_WEBCOMPONENTS, ["7.3.0", "7.3.2", "7.4.1", "7.5.0"], "7.5.0");
				publish(NPM_DOCK_MANAGER, ["1.17.0"], "1.17.0", { peerDependencies: { [NPM_WEBCOMPONENTS]: "~7.3.0" } });
				mockProject({ dependencies: { [NPM_REACT]: "~19.8.0", [NPM_DOCK_MANAGER]: "~1.17.0", [NPM_WEBCOMPONENTS]: "^7.3.0" } },
					{ [NPM_REACT]: "19.8.0", [NPM_DOCK_MANAGER]: "1.17.0", [NPM_WEBCOMPONENTS]: "7.3.0" });
				expect(heldBack(withinMajor())).toEqual([
					[NPM_REACT, "19.9.0", [{ name: NPM_DOCK_MANAGER,
						reason: "19.9.0 requires igniteui-webcomponents@~7.4.1, which conflicts with ~7.3.0 (required by igniteui-dockmanager@1.17.0)" }]],
					[NPM_DOCK_MANAGER, undefined, undefined],
					[NPM_WEBCOMPONENTS, "7.5.0", [
						{ name: NPM_REACT, reason: "~7.3.0 (required by igniteui-react@19.8.0)" },
						{ name: NPM_DOCK_MANAGER, reason: "~7.3.0 (required by igniteui-dockmanager@1.17.0)" }
					]]
				]);
			});

			it("names the smallest set of ranges that hold a package back only together, such as with || ranges", () => {
				mockProject({ dependencies: {
					[NPM_REACT]: "~19.8.0", [NPM_DOCK_MANAGER]: "~1.17.0", [NPM_GRID_LITE]: "~0.11.0", [NPM_REACT_DOCK_MANAGER]: "~19.9.0", [NPM_WEBCOMPONENTS]: "^7.3.0"
				} }, { [NPM_REACT]: "19.8.0", [NPM_WEBCOMPONENTS]: "7.3.0" });
				publish(NPM_REACT, ["19.8.0", "19.9.0"], "19.9.0",
					version => ({ dependencies: { [NPM_WEBCOMPONENTS]: version === "19.9.0" ? ">=7.4.0" : "~7.3.0" } }));
				publish(NPM_DOCK_MANAGER, ["1.17.0"], "1.17.0", { peerDependencies: { [NPM_WEBCOMPONENTS]: "<7.5.0" } });
				publish(NPM_GRID_LITE, ["0.11.0"], "0.11.0", { peerDependencies: { [NPM_WEBCOMPONENTS]: "7.3.0 || 7.5.0" } });
				publish(NPM_REACT_DOCK_MANAGER, ["19.9.0"], "19.9.0", { peerDependencies: { [NPM_WEBCOMPONENTS]: "^7.0.0" } });
				publish(NPM_WEBCOMPONENTS, ["7.3.0", "7.4.0", "7.5.0"], "7.5.0");
				const requires = "19.9.0 requires igniteui-webcomponents@>=7.4.0, which conflicts with";
				const dock = "<7.5.0 (required by igniteui-dockmanager@1.17.0)";
				const gridLite = "7.3.0 || 7.5.0 (required by igniteui-grid-lite@0.11.0)";

				const [react] = withinMajor();

				expect([react.target, react.newest]).toEqual(["19.8.0", "19.9.0"]);
				expect(react.heldBackBy).toEqual([
					{ name: NPM_DOCK_MANAGER, reason: `${requires} ${dock} together with ${gridLite}` },
					{ name: NPM_GRID_LITE, reason: `${requires} ${gridLite} together with ${dock}` }
				]);
			});

			it("updates past a dependency range no version in the line meets, reporting the nested copy instead of a conflict (real Dock Manager case)", () => {
				publish(NPM_REACT_DOCK_MANAGER, ["19.8.1", "19.9.0"], "19.9.0",
					version => ({ dependencies: { [NPM_DOCK_MANAGER]: version === "19.9.0" ? "~2.2.1" : "~2.1.2" } }));
				publish(NPM_DOCK_MANAGER, ["1.17.0", "1.19.0", "2.1.2", "2.2.1"], "2.2.1");
				const nested = "~2.2.1 (required by igniteui-react-dockmanager@19.9.0)";
				const plan = () => withinMajor().map(c => [c.name, c.target, c.newRange, c.conflict, c.overridable, c.nested]);

				mockProject({ dependencies: { [NPM_DOCK_MANAGER]: "^1.17.0", [NPM_REACT_DOCK_MANAGER]: "19.8.1" } },
					{ [NPM_DOCK_MANAGER]: "1.19.0", [NPM_REACT_DOCK_MANAGER]: "19.8.1" });
				expect(plan()).toEqual([
					[NPM_DOCK_MANAGER, "1.19.0", undefined, undefined, undefined, nested],
					[NPM_REACT_DOCK_MANAGER, "19.9.0", "19.9.0", undefined, undefined, undefined]
				]);

				mockProject({ dependencies: { [NPM_DOCK_MANAGER]: "^1.17.0", [NPM_REACT_DOCK_MANAGER]: "19.9.0" } },
					{ [NPM_DOCK_MANAGER]: "1.19.0", [NPM_REACT_DOCK_MANAGER]: "19.9.0" });
				expect(plan()).toEqual([
					[NPM_DOCK_MANAGER, "1.19.0", undefined, undefined, undefined, nested],
					[NPM_REACT_DOCK_MANAGER, "19.9.0", undefined, undefined, undefined, undefined]
				]);
			});

			it("keeps a dependent whose update would need a separate copy of a dependency that the project shares today", () => {
				publish(NPM_REACT, ["19.8.0", "19.9.0"], "19.9.0",
					version => ({ dependencies: { [NPM_WEBCOMPONENTS]: version === "19.9.0" ? "~7.4.1" : "~7.3.0" } }));
				publish(NPM_WEBCOMPONENTS, ["7.3.0", "7.3.2", "7.4.1", "7.5.0"], "7.5.0");
				const plan = () => withinMajor().map(c => [c.name, c.target, c.newRange, c.conflict, c.nested]);

				for (const field of ["dependencies", "peerDependencies"]) {
					mockProject({ dependencies: { [NPM_REACT]: "~19.8.0", [NPM_DOCK_MANAGER]: "~1.17.0", [NPM_WEBCOMPONENTS]: "^7.3.0" } },
						{ [NPM_REACT]: "19.8.0", [NPM_DOCK_MANAGER]: "1.17.0", [NPM_WEBCOMPONENTS]: "7.3.0" });
					publish(NPM_DOCK_MANAGER, ["1.17.0"], "1.17.0", { [field]: { [NPM_WEBCOMPONENTS]: "~7.3.0" } });

					expect(plan()).withContext(field).toEqual([
						[NPM_REACT, "19.8.0", undefined, undefined, undefined],
						[NPM_DOCK_MANAGER, "1.17.0", undefined, undefined, undefined],
						[NPM_WEBCOMPONENTS, "7.3.2", "~7.3.2", undefined, undefined]
					]);
				}
			});

			it("keeps a dependent aligned even when another package already needs a separate copy of the dependency", () => {
				mockProject({ dependencies: {
					[NPM_REACT]: "~19.8.0", [NPM_GRID_LITE]: "~0.10.0", [NPM_WEBCOMPONENTS]: "^7.3.0", [NPM_DOCK_MANAGER]: "~1.17.0"
				} }, { [NPM_REACT]: "19.8.0", [NPM_GRID_LITE]: "0.10.0", [NPM_WEBCOMPONENTS]: "7.3.0", [NPM_DOCK_MANAGER]: "1.17.0" });
				publish(NPM_REACT, ["19.8.0", "19.9.0"], "19.9.0",
					version => ({ dependencies: { [NPM_WEBCOMPONENTS]: version === "19.9.0" ? "~7.4.1" : "~7.3.0" } }));
				publish(NPM_GRID_LITE, ["0.10.0"], "0.10.0", { peerDependencies: { [NPM_WEBCOMPONENTS]: "~7.3.0" } });
				publish(NPM_DOCK_MANAGER, ["1.17.0"], "1.17.0", { dependencies: { [NPM_WEBCOMPONENTS]: "~6.0.0" } });
				publish(NPM_WEBCOMPONENTS, ["7.3.0", "7.3.2", "7.4.1"], "7.4.1");

				expect(withinMajor().map(c => [c.name, c.target, c.newRange, c.conflict, c.nested])).toEqual([
					[NPM_REACT, "19.8.0", undefined, undefined, undefined],
					[NPM_GRID_LITE, "0.10.0", undefined, undefined, undefined],
					[NPM_WEBCOMPONENTS, "7.3.2", "~7.3.2", undefined, "~6.0.0 (required by igniteui-dockmanager@1.17.0)"],
					[NPM_DOCK_MANAGER, "1.17.0", undefined, undefined, undefined]
				]);
			});

			it("takes the version meeting the most dependency ranges when a separate copy can't be avoided", () => {
				mockProject({ dependencies: { [NPM_REACT]: "~19.9.0", [NPM_DOCK_MANAGER]: "~1.17.0", [NPM_WEBCOMPONENTS]: "^7.3.0" } },
					{ [NPM_REACT]: "19.9.0", [NPM_DOCK_MANAGER]: "1.17.0", [NPM_WEBCOMPONENTS]: "7.3.0" });
				publish(NPM_REACT, ["19.9.0"], "19.9.0", { dependencies: { [NPM_WEBCOMPONENTS]: "~7.4.1" } });
				publish(NPM_DOCK_MANAGER, ["1.17.0"], "1.17.0", { dependencies: { [NPM_WEBCOMPONENTS]: "~7.3.0" } });
				publish(NPM_WEBCOMPONENTS, ["7.3.0", "7.3.2", "7.4.1", "7.5.0"], "7.5.0");

				const webcomponents = withinMajor()[2];

				expect([webcomponents.target, webcomponents.newRange, webcomponents.conflict, webcomponents.nested])
					.toEqual(["7.4.1", "~7.4.1", undefined, "~7.3.0 (required by igniteui-dockmanager@1.17.0)"]);
			});

			it("still conflicts on a peer range next to an unmet dependency range", () => {
				mockProject({ dependencies: { [NPM_REACT]: "~19.9.0", [NPM_DOCK_MANAGER]: "~1.17.0", [NPM_WEBCOMPONENTS]: "~6.5.0" } });
				publish(NPM_REACT, ["19.9.0"], "19.9.0", { dependencies: { [NPM_WEBCOMPONENTS]: "~7.4.1" } });
				publish(NPM_DOCK_MANAGER, ["1.17.0"], "1.17.0", { peerDependencies: { [NPM_WEBCOMPONENTS]: "7.4.0" } });
				publish(NPM_WEBCOMPONENTS, ["6.5.0", "6.5.1"], "7.4.1");

				const webcomponents = withinMajor()[2];

				expect([webcomponents.target, webcomponents.nested]).toEqual([undefined, undefined]);
				expect(webcomponents.conflict).toBe('no version in "^6.5.0" satisfies 7.4.0 (required by igniteui-dockmanager@1.17.0)');
			});

			it("matches constraints across trial and licensed names (Web Components)", () => {
				mockProject({ dependencies: {
					"@infragistics/igniteui-webcomponents-charts": "^6.0.0", "@infragistics/igniteui-webcomponents-core": "^6.0.0"
				} });
				publish("@infragistics/igniteui-webcomponents-charts", ["6.0.0", "6.1.0"], "6.1.0",
					{ peerDependencies: { "igniteui-webcomponents-core": "6.1.0" } });
				publish("@infragistics/igniteui-webcomponents-core", ["6.0.0", "6.1.0", "6.2.0"], "6.2.0");

				expect(summary(withinMajor())).toEqual([
					["@infragistics/igniteui-webcomponents-charts", "6.1.0", "^6.1.0", undefined],
					["@infragistics/igniteui-webcomponents-core", "6.1.0", "6.1.0", undefined]
				]);
			});

			it("reports a conflict instead of downgrading, clearing the stale target, and for unsupported constraint ranges", () => {
				mockProject(
					{ dependencies: { "igniteui-react-core": "~19.7.0", "igniteui-react-charts": "~19.6.0", "igniteui-webcomponents": "^7.2.0" } },
					{ "igniteui-react-core": "19.7.0" }
				);
				publish("igniteui-react-charts", ["19.6.0"], "19.6.0",
					{ peerDependencies: { "igniteui-react-core": "19.6.0", "igniteui-webcomponents": "npm:other@1" } });
				publish("igniteui-react-core", ["19.6.0", "19.7.0"], "19.7.0");
				publish("igniteui-webcomponents", ["7.2.0"], "7.2.0");

				const [core, , webcomponents] = withinMajor();

				expect([core.target, core.manifest, core.newRange]).toEqual([undefined, undefined, undefined]);
				expect(core.conflict).toBe('no version in "^19.7.0" satisfies 19.6.0 (required by igniteui-react-charts@19.6.0)');
				expect(webcomponents.conflict).toBe('no version in "^7.2.0" satisfies npm:other@1 (required by igniteui-react-charts@19.6.0)');
			});

			it("rewrites an up-to-date package only when a constraint no longer fits its declared range", () => {
				mockProject(
					{ dependencies: { "igniteui-react-charts": "~19.6.0", "igniteui-react-core": "~19.6.0", "igniteui-webcomponents": "^7.2.0" } },
					{ "igniteui-react-charts": "19.6.0", "igniteui-react-core": "19.6.0", "igniteui-webcomponents": "7.4.1" }
				);
				publish("igniteui-react-charts", ["19.6.0"], "19.6.0", { peerDependencies: { "igniteui-react-core": "19.6.0" } });
				publish("igniteui-react-core", ["19.6.0"], "19.6.0");
				publish("igniteui-webcomponents", ["7.4.1"], "7.4.1");

				expect(summary(withinMajor())).toEqual([
					["igniteui-react-charts", "19.6.0", undefined, undefined],
					["igniteui-react-core", "19.6.0", "19.6.0", undefined],
					["igniteui-webcomponents", "7.4.1", undefined, undefined]
				]);
			});

			it("keeps the declared range style", () => {
				const ranges: Record<string, string> = {
					"^19.6.0": "^19.9.0", "~19.6.0": "~19.9.0", "19.6.0": "19.9.0", "19.x": "^19.9.0", "19.6.x": "~19.9.0"
				};
				publish("igniteui-react", ["19.6.0", "19.9.0"], "19.9.0");
				for (const declared of Object.keys(ranges)) {
					mockProject({ dependencies: { "igniteui-react": declared } });

					expect(withinMajor()[0].newRange).withContext(declared).toBe(ranges[declared]);
				}

				mockProject({ dependencies: { "igniteui-grid-lite": "0.11.x" } });
				publish("igniteui-grid-lite", ["0.11.0", "0.11.3", "0.12.0"], "0.12.0");

				expect(withinMajor()[0]).withContext("0.x stays in its minor").toEqual(jasmine.objectContaining({ target: "0.11.3", newRange: "^0.11.3", nextMajor: "0.12.0" }));
			});

		});

		describe("--force", () => {
			const charts = "igniteui-react-charts";
			const core = "igniteui-react-core";
			const pinnedByCharts = "19.6.0 (required by igniteui-react-charts@19.6.0)";
			const summary = (plan: PackageUpdate[]) => plan.map(c => [c.name, c.target, c.newRange, c.conflict, c.forced]);
			const entry = (plan: PackageUpdate[], name: string) => plan.find(c => c.name === name)!;

			beforeEach(() => {
				publish(charts, ["19.6.0"], "19.6.0", { peerDependencies: { [core]: "19.6.0" } });
			});

			it("moves a conflicted package to the newest version in its line, never a lower, prerelease or newer major one, in either order", () => {
				publish(core, ["19.6.0", "19.7.0", "19.7.1", "19.8.0-beta.1", "20.0.0"], "20.0.0");
				for (const dependencies of [{ [core]: "~19.7.0", [charts]: "~19.6.0" }, { [charts]: "~19.6.0", [core]: "~19.7.0" }]) {
					mockProject({ dependencies }, { [core]: "19.7.0" });

					const blocked = entry(withinMajor(), core);
					const forced = withinMajor({ force: true });
					const forcedCore = entry(forced, core);

					expect([blocked.conflict, blocked.overridable]).toEqual([`no version in "^19.7.0" satisfies ${pinnedByCharts}`, true]);
					expect(forcedCore).toEqual(jasmine.objectContaining({
						target: "19.7.1", newRange: "~19.7.1", nextMajor: "20.0.0", forced: pinnedByCharts, manifest: { version: "19.7.1" }
					}));
					expect([forcedCore.conflict, forcedCore.overridable]).toEqual([undefined, undefined]);
					expect(summary([entry(forced, charts)])).toEqual([[charts, "19.6.0", undefined, undefined, undefined]]);
				}
			});

			it("overrides incompatible ranges on a 0.x package within its minor line, leaving skipped packages skipped", () => {
				mockProject({ dependencies: {
					[NPM_REACT]: "~19.9.0", [NPM_WEBCOMPONENTS]: "~7.4.0", [NPM_GRID_LITE]: "~0.11.0", [NPM_DOCK_MANAGER]: "workspace:*"
				} });
				publish(NPM_REACT, ["19.9.0"], "19.9.0", { peerDependencies: { [NPM_GRID_LITE]: "0.11.0" } });
				publish(NPM_WEBCOMPONENTS, ["7.4.1"], "7.4.1", { peerDependencies: { [NPM_GRID_LITE]: "0.11.2" } });
				publish(NPM_GRID_LITE, ["0.11.0", "0.11.2", "0.11.4", "0.12.0"], "0.12.0");
				const ranges = "0.11.0 (required by igniteui-react@19.9.0), 0.11.2 (required by igniteui-webcomponents@7.4.1)";

				expect(summary(withinMajor())).toEqual([
					[NPM_REACT, "19.9.0", undefined, undefined, undefined],
					[NPM_WEBCOMPONENTS, "7.4.1", "~7.4.1", undefined, undefined],
					[NPM_GRID_LITE, undefined, undefined, `no version in "^0.11.0" satisfies ${ranges}`, undefined],
					[NPM_DOCK_MANAGER, undefined, undefined, undefined, undefined]
				]);

				const plan = withinMajor({ force: true });

				expect(summary(plan)).toEqual([
					[NPM_REACT, "19.9.0", undefined, undefined, undefined],
					[NPM_WEBCOMPONENTS, "7.4.1", "~7.4.1", undefined, undefined],
					[NPM_GRID_LITE, "0.11.4", "^0.11.4", undefined, ranges],
					[NPM_DOCK_MANAGER, undefined, undefined, undefined, undefined]
				]);
				expect(entry(plan, NPM_GRID_LITE).nextMajor).toBe("0.12.0");
				expect(entry(plan, NPM_DOCK_MANAGER).skipped).toContain('unsupported spec "workspace:*"');
			});

			it("reports the ranges a forced target puts on other packages, unmet by their target or written range, without changing their plan", () => {
				mockProject(
					{ dependencies: { [core]: "~19.7.0", [charts]: "~19.6.0", [NPM_WEBCOMPONENTS]: "^7.2.0", [NPM_GRID_LITE]: "~0.11.0" } },
					{ [core]: "19.7.0", [NPM_WEBCOMPONENTS]: "7.4.1" }
				);
				publish(core, ["19.6.0", "19.7.0", "19.7.1"], "19.7.1", version => version === "19.7.1"
					? { peerDependencies: { [NPM_WEBCOMPONENTS]: "~7.4.1", [NPM_GRID_LITE]: "0.11.0" } }
					: {});
				publish(NPM_WEBCOMPONENTS, ["7.4.1"], "7.4.1");
				publish(NPM_GRID_LITE, ["0.11.0", "0.11.4"], "0.11.4");

				expect(summary(withinMajor())).toEqual([
					[core, undefined, undefined, `no version in "^19.7.0" satisfies ${pinnedByCharts}`, undefined],
					[charts, "19.6.0", undefined, undefined, undefined],
					[NPM_WEBCOMPONENTS, "7.4.1", undefined, undefined, undefined],
					[NPM_GRID_LITE, "0.11.4", "^0.11.4", undefined, undefined]
				]);
				expect(summary(withinMajor({ force: true }))).toEqual([
					[core, "19.7.1", "~19.7.1", undefined, pinnedByCharts],
					[charts, "19.6.0", undefined, undefined, undefined],
					[NPM_WEBCOMPONENTS, "7.4.1", undefined, undefined, "~7.4.1 (required by igniteui-react-core@19.7.1)"],
					[NPM_GRID_LITE, "0.11.4", "^0.11.4", undefined, "0.11.0 (required by igniteui-react-core@19.7.1)"]
				]);
			});

			it("keeps blocking on ranges that aren't valid semver, including ones a forced target introduces", () => {
				mockProject(
					{ dependencies: { [core]: "~19.7.0", [charts]: "~19.6.0", [NPM_WEBCOMPONENTS]: "^7.2.0" } },
					{ [core]: "19.7.0" }
				);
				publish(charts, ["19.6.0"], "19.6.0", { peerDependencies: { [core]: "19.6.0", [NPM_WEBCOMPONENTS]: "npm:other@1" } });
				publish(core, ["19.6.0", "19.7.0"], "19.7.0");
				publish(NPM_WEBCOMPONENTS, ["7.2.0"], "7.2.0");

				const [blockedCore, , blockedWC] = withinMajor();

				expect([blockedCore.overridable, blockedWC.overridable]).toEqual([false, false]);
				expect(summary(withinMajor({ force: true }))).toEqual([
					[core, "19.7.0", undefined, undefined, pinnedByCharts],
					[charts, "19.6.0", undefined, undefined, undefined],
					[NPM_WEBCOMPONENTS, undefined, undefined, "--force can't override ranges that aren't valid versions: " +
						"npm:other@1 (required by igniteui-react-charts@19.6.0)", undefined]
				]);

				mockProject({ dependencies: { [core]: "~19.7.0", [charts]: "~19.6.0", [NPM_GRID_LITE]: "~0.11.0" } }, { [core]: "19.7.0" });
				publish(charts, ["19.6.0"], "19.6.0", { peerDependencies: { [core]: "19.6.0" } });
				publish(core, ["19.7.0", "19.7.1"], "19.7.1", version => version === "19.7.1" ? { peerDependencies: { [NPM_GRID_LITE]: "workspace:*" } } : {});
				publish(NPM_GRID_LITE, ["0.11.0"], "0.11.0");

				const blocked = withinMajor();

				expect(entry(blocked, NPM_GRID_LITE).conflict).toBeUndefined();
				expect(entry(blocked, core).overridable).toBe(false);
				expect(summary(withinMajor({ force: true }))).toEqual([
					[core, "19.7.1", "~19.7.1", undefined, pinnedByCharts],
					[charts, "19.6.0", undefined, undefined, undefined],
					[NPM_GRID_LITE, undefined, undefined, "--force can't override ranges that aren't valid versions: " +
						"workspace:* (required by igniteui-react-core@19.7.1)", undefined]
				]);
			});

			it("narrows a forced range to keep every requirement its target meets, also when the target is the baseline", () => {
				publish(NPM_REACT, ["19.9.0"], "19.9.0", { peerDependencies: { [NPM_WEBCOMPONENTS]: "~7.4.1" } });
				publish(NPM_DOCK_MANAGER, ["1.17.0"], "1.17.0", { peerDependencies: { [NPM_WEBCOMPONENTS]: "7.4.0" } });
				publish(NPM_WEBCOMPONENTS, ["7.4.0", "7.4.3"], "7.4.3");
				for (const installed of ["7.4.0", "7.4.3"]) {
					mockProject({ dependencies: { [NPM_REACT]: "~19.9.0", [NPM_DOCK_MANAGER]: "~1.17.0", [NPM_WEBCOMPONENTS]: "^7.4.0" } },
						{ [NPM_WEBCOMPONENTS]: installed });

					expect(entry(withinMajor(), NPM_WEBCOMPONENTS).conflict).withContext(installed).toBeDefined();
					expect(summary([entry(withinMajor({ force: true }), NPM_WEBCOMPONENTS)])).withContext(installed).toEqual([
						[NPM_WEBCOMPONENTS, "7.4.3", "~7.4.3", undefined, "7.4.0 (required by igniteui-dockmanager@1.17.0)"]
					]);
				}
			});

			it("reports a dependency range a forced target puts on another package as a nested copy, not as forced", () => {
				mockProject({ dependencies: { [charts]: "~19.6.0", [core]: "~19.7.0", [NPM_WEBCOMPONENTS]: "^7.4.0" } },
					{ [core]: "19.7.0", [NPM_WEBCOMPONENTS]: "7.4.1" });
				publish(core, ["19.7.0", "19.7.1"], "19.7.1", version => version === "19.7.1" ? { dependencies: { [NPM_WEBCOMPONENTS]: "7.4.0" } } : {});
				publish(NPM_WEBCOMPONENTS, ["7.4.0", "7.4.1"], "7.4.1");

				expect(entry(withinMajor(), NPM_WEBCOMPONENTS).nested).toBeUndefined();
				const webcomponents = entry(withinMajor({ force: true }), NPM_WEBCOMPONENTS);
				expect([webcomponents.target, webcomponents.newRange, webcomponents.conflict, webcomponents.forced, webcomponents.nested])
					.toEqual(["7.4.1", undefined, undefined, undefined, "7.4.0 (required by igniteui-react-core@19.7.1)"]);
			});

			it("suggests --force only when it would update package.json", () => {
				publish(core, ["19.6.0", "19.7.0"], "19.7.0");
				publish(NPM_REACT, ["19.6.0", "19.9.0"], "19.9.0");

				mockProject({ dependencies: { [charts]: "~19.6.0", [core]: "~19.7.0" } }, { [core]: "19.7.0" });
				const blocked = entry(withinMajor(), core);

				expect([blocked.target, blocked.conflict, blocked.overridable])
					.toEqual([undefined, `no version in "^19.7.0" satisfies ${pinnedByCharts}`, false]);
				expect(summary(withinMajor({ force: true }))).toEqual([
					[charts, "19.6.0", undefined, undefined, undefined],
					[core, "19.7.0", undefined, undefined, pinnedByCharts]
				]);

				mockProject({ dependencies: { [charts]: "~19.6.0", [core]: "~19.7.0", [NPM_REACT]: "~19.6.0" } }, { [core]: "19.7.0" });

				expect(entry(withinMajor(), core).overridable).toBe(true);
			});

			it("updates prerelease ranges within prerelease requirements, and forces an RC keeping the RC range it meets", () => {
				mockProject({ dependencies: { [NPM_REACT]: "^19.9.0-rc.1", [NPM_WEBCOMPONENTS]: "^7.5.0-rc.0" } },
					{ [NPM_REACT]: "19.9.0-rc.1", [NPM_WEBCOMPONENTS]: "7.5.0-rc.0" });
				publish(NPM_REACT, ["19.9.0-rc.1", "19.9.0-rc.2"], "19.8.0", { dependencies: { [NPM_WEBCOMPONENTS]: "^7.5.0-rc.1" } });
				publish(NPM_WEBCOMPONENTS, ["7.5.0-rc.0", "7.5.0-rc.1", "7.5.0-rc.2"], "7.4.1");

				const plan = withinMajor();

				expect(summary(plan)).toEqual([
					[NPM_REACT, "19.9.0-rc.2", "^19.9.0-rc.2", undefined, undefined],
					[NPM_WEBCOMPONENTS, "7.5.0-rc.2", "^7.5.0-rc.2", undefined, undefined]
				]);
				expect(withinMajor({ force: true })).toEqual(plan);

				mockProject({ dependencies: { [NPM_REACT]: "^19.9.0-rc.1", [NPM_DOCK_MANAGER]: "~1.17.0", [NPM_WEBCOMPONENTS]: "^7.5.0-rc.1" } },
					{ [NPM_REACT]: "19.9.0-rc.1", [NPM_WEBCOMPONENTS]: "7.5.0-rc.2" });
				publish(NPM_DOCK_MANAGER, ["1.17.0"], "1.17.0", { peerDependencies: { [NPM_WEBCOMPONENTS]: "7.5.0-rc.1" } });
				publish(NPM_WEBCOMPONENTS, ["7.5.0-rc.1", "7.5.0-rc.2", "7.5.0-rc.3"], "7.4.1");

				expect(entry(withinMajor(), NPM_WEBCOMPONENTS).overridable).toBe(true);
				expect(summary([entry(withinMajor({ force: true }), NPM_WEBCOMPONENTS)])).toEqual([
					[NPM_WEBCOMPONENTS, "7.5.0-rc.3", "^7.5.0-rc.3", undefined, "7.5.0-rc.1 (required by igniteui-dockmanager@1.17.0)"]
				]);
			});

			it("names only the ranges its target meets as holding a package back with --force --verbose", () => {
				spyOn(Util, "log");
				mockProject(
					{ dependencies: { [charts]: "~19.6.0", [core]: "~19.7.0", [NPM_REACT]: "~19.9.0", [NPM_WEBCOMPONENTS]: "^7.4.0" } },
					{ [core]: "19.7.0", [NPM_WEBCOMPONENTS]: "7.4.0" }
				);
				publish(core, ["19.7.0", "19.7.1"], "19.7.1", version => version === "19.7.1" ? { peerDependencies: { [NPM_WEBCOMPONENTS]: "7.4.0" } } : {});
				publish(NPM_REACT, ["19.9.0"], "19.9.0", { dependencies: { [NPM_WEBCOMPONENTS]: "~7.4.1" } });
				publish(NPM_WEBCOMPONENTS, ["7.4.0", "7.4.1", "7.5.0"], "7.5.0");

				const webcomponents = entry(withinMajor({ force: true, verbose: true }), NPM_WEBCOMPONENTS);

				expect(webcomponents.forced).toBe("7.4.0 (required by igniteui-react-core@19.7.1)");
				expect(webcomponents.heldBackBy).toEqual([{ name: NPM_REACT, reason: "~7.4.1 (required by igniteui-react@19.9.0)" }]);
				expect(Util.log).toHaveBeenCalledWith('igniteui-webcomponents: target 7.4.1 (newest in "^7.4.0": 7.5.0), range ^7.4.0 -> ~7.4.1, ' +
					"requirements: 7.4.0 (required by igniteui-react-core@19.7.1), ~7.4.1 (required by igniteui-react@19.9.0); " +
					"held back by ~7.4.1 (required by igniteui-react@19.9.0)", "gray");
			});
		});

		it("prints discovery, registry and alignment diagnostics only with --verbose", () => {
			spyOn(Util, "log");
			mockProject(
				{ dependencies: { "igniteui-react-charts": "~19.5.2", "igniteui-react-core": "~19.5.2", "igniteui-webcomponents": "workspace:*" } },
				{ "igniteui-react-charts": "19.5.2" }
			);
			publish("igniteui-react-charts", ["19.5.2", "19.6.0"], "19.6.0", { peerDependencies: { "igniteui-react-core": "19.6.0" } });
			publish("igniteui-react-core", ["19.5.2", "19.6.0", "19.7.0", "20.0.0"], "20.0.0");

			withinMajor();

			expect(Util.log).not.toHaveBeenCalled();

			withinMajor({ verbose: true });

			expect((Util.log as jasmine.Spy).calls.allArgs()).toEqual([
				"igniteui-react-charts (dependencies): declared ~19.5.2, installed 19.5.2, baseline 19.5.2 (installed version)",
				"igniteui-react-core (dependencies): declared ~19.5.2, installed none, baseline 19.5.2 (declared minimum)",
				'igniteui-webcomponents (dependencies): declared workspace:*, installed none, skipped: unsupported spec "workspace:*" ' +
					"(only exact, ^, ~ and x-range versions are supported)",
				'npm view "igniteui-react-charts" versions dist-tags',
				'npm view "igniteui-react-charts@^19.5.2" version dependencies peerDependencies deprecated engines ig-update',
				'igniteui-react-charts: 2 version(s) in "^19.5.2", latest 19.6.0',
				'npm view "igniteui-react-core" versions dist-tags',
				'npm view "igniteui-react-core@^19.5.2" version dependencies peerDependencies deprecated engines ig-update',
				'igniteui-react-core: 3 version(s) in "^19.5.2", latest 20.0.0 (outside the requested range, not applied)',
				"Peer dependencies not checked, not installed: igniteui-webcomponents",
				'igniteui-react-charts: target 19.6.0 (newest in "^19.5.2": 19.6.0), range ~19.5.2 -> ~19.6.0',
				'igniteui-react-core: target 19.6.0 (newest in "^19.5.2": 19.7.0), range ~19.5.2 -> 19.6.0, ' +
					"requirements: 19.6.0 (required by igniteui-react-charts@19.6.0); held back by 19.6.0 (required by igniteui-react-charts@19.6.0)"
			].map(message => [message, "gray"]));
		});

		describe("registry access", () => {
			const script = path.join(path.dirname(process.execPath), "node_modules", "npm", "bin", "npm-cli.js");
			const manifestArgs = [`${NPM_REACT}@^19.6.0`, "version", "dependencies", "peerDependencies", "deprecated", "engines", "ig-update", "--json"];

			beforeEach(() => {
				mockProject({ dependencies: { [NPM_REACT]: "~19.6.0" } });
				publish(NPM_REACT, ["19.6.0", "19.9.0"], "19.9.0");
			});

			it("runs npm with an argument array and no shell, on Windows as npm's CLI script with this Node.js", () => {
				const options = jasmine.objectContaining({ encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
				const calls = () => spawnSync.calls.allArgs();
				Object.defineProperty(process, "platform", { value: "linux" });

				withinMajor();

				expect(calls()).toEqual([
					["npm", ["view", NPM_REACT, "versions", "dist-tags", "--json"], options],
					["npm", ["view", ...manifestArgs], options]
				]);

				spawnSync.calls.reset();
				Object.defineProperty(process, "platform", { value: "win32" });
				spyOn(nodeFs, "existsSync").and.callFake(file => file === script);

				withinMajor();

				expect(calls()).toEqual([
					[process.execPath, [script, "view", NPM_REACT, "versions", "dist-tags", "--json"], options],
					[process.execPath, [script, "view", ...manifestArgs], options]
				]);
				expect(calls().some(([, , callOptions]) => "shell" in callOptions)).toBe(false);
			});

			it("quotes every argument for cmd.exe on Windows without npm next to node.exe", () => {
				Object.defineProperty(process, "platform", { value: "win32" });
				spyOn(nodeFs, "existsSync").and.returnValue(false);
				spawnSync.and.callFake((command: string) => ({
					status: 0, stderr: "", stdout: command.includes("@") ? '"19.9.0"' : JSON.stringify({ versions: ["19.6.0", "19.9.0"] })
				}));

				expect(withinMajor()[0].target).toBe("19.9.0");
				expect(spawnSync.calls.allArgs()).toEqual([
					['npm "view" "igniteui-react" "versions" "dist-tags" "--json"', [], jasmine.objectContaining({ shell: true })],
					[`npm ${["view", ...manifestArgs].map(arg => `"${arg}"`).join(" ")}`, [], jasmine.objectContaining({ shell: true })]
				]);
			});

			it("rejects invalid package names before running npm", () => {
				for (const name of ["Uppercase", "a&calc", "$(touch x)", "\"quoted\""]) {
					mockProject({ dependencies: { [name]: "^1.0.0" } });

					expect(() => getUpdatePlan({ requests: [{ name }] })).withContext(name).toThrowError(`Invalid package "${name}".`);
				}
				expect(spawnSync).not.toHaveBeenCalled();
			});

			it("runs the installed npm, offline so that no network is needed", () => {
				spawnSync.and.callFake((...args: any[]) => Reflect.apply(realSpawnSync, child_process,
					[...args.slice(0, -1), { ...args[args.length - 1], env: { ...process.env, npm_config_offline: "true" } }]));
				const name = "igniteui-cli-offline-spec-package";
				mockProject({ dependencies: { [name]: "^1.0.0" } });

				expect(() => getUpdatePlan({ requests: [{ name }] }))
					.toThrowError(new RegExp(`^Unable to get ${name} from the registry: [\\s\\S]*only-if-cached`));
			});
		});

		describe("requested packages", () => {
			const request = (name: string, spec?: string, force = false) => getUpdatePlan({ requests: [{ name, spec }], force });
			const summary = (plan: PackageUpdate[]) => plan.map(c => [c.name, c.target, c.newRange]);

			it("updates a third-party package to its latest version across majors, leaving the other dependencies alone", () => {
				mockProject({ dependencies: { lit: "^2.8.0", react: "^19.0.0", [NPM_WEBCOMPONENTS]: "~7.4.0" } },
					{ lit: "2.8.0", react: "19.0.0", [NPM_WEBCOMPONENTS]: "7.4.1" });
				publish("lit", ["2.8.0", "3.3.1", "3.0.0", "4.0.0-rc.1"], "3.3.1");

				const plan = request("lit");

				expect(plan.length).toBe(1);
				expect(plan[0]).toEqual(jasmine.objectContaining({ baseline: "2.8.0", line: '">=2.8.0 <=3.3.1"', target: "3.3.1", newRange: "^3.3.1" }));
				expect(plan[0].nextMajor).toBeUndefined();
				expect(spawnSync.calls.allArgs().map(([, args]) => args.slice(args.indexOf("view") + 1, -1).join(" "))).toEqual(["lit versions dist-tags", "lit@>=2.8.0 <=3.3.1 version dependencies peerDependencies deprecated engines ig-update"]);
			});

			it("respects an explicit version, range or tag, writing a range that can't install a newer version", () => {
				mockProject({ dependencies: { lit: "^3.0.0" } }, { lit: "3.0.0" });
				publish("lit", ["3.0.0", "3.1.0", "3.1.2", "3.2.0", "4.0.0", "5.0.0-rc.1"], "4.0.0", undefined, { next: "5.0.0-rc.1", lts: "3.1.2" });
				const resolve = (spec: string) => request("lit", spec).map(c => [c.target, c.newRange, c.nextMajor])[0];

				expect(resolve("3.1.0")).toEqual(["3.1.0", "3.1.0", "4.0.0"]);
				expect(resolve("~3.1")).toEqual(["3.1.2", "~3.1.2", "4.0.0"]);
				expect(resolve("^3")).toEqual(["3.2.0", "^3.2.0", "4.0.0"]);
				expect(resolve("lts")).toEqual(["3.1.2", "~3.1.2", "4.0.0"]);
				expect(resolve("next")).toEqual(["5.0.0-rc.1", "^5.0.0-rc.1", undefined]);
				expect(resolve("latest")).toEqual(["4.0.0", "^4.0.0", undefined]);
			});

			it("writes a range that excludes a published version above latest", () => {
				mockProject({ dependencies: { lit: "^3.0.0" } }, { lit: "3.0.0" });
				publish("lit", ["3.0.0", "3.1.0", "3.2.0"], "3.1.0");

				expect(summary(request("lit"))).toEqual([["lit", "3.1.0", "~3.1.0"]]);
			});

			it("never downgrades, and reports a spec that matches no version at or above the installed one", () => {
				mockProject({ dependencies: { lit: "^3.1.0" } }, { lit: "3.1.0" });
				publish("lit", ["2.8.0", "3.0.0", "3.1.0"], "3.1.0");

				expect(request("lit", "^2")[0].skipped).toBe('no published version matches "^2" at or above 3.1.0');
				expect(request("lit", "3.0.0")[0].skipped).toBe('no published version matches "3.0.0" at or above 3.1.0');
				expect(request("lit", "beta")[0].skipped).toBe('"beta" is not a version, range or dist-tag of lit');
				expect(summary(request("lit"))).toEqual([["lit", "3.1.0", undefined]]);

				publish("lit", "3.1.0", "3.1.0");
				expect(summary(request("lit"))).toEqual([["lit", "3.1.0", undefined]]);
			});

			it("has no default update for an installed version at or above latest, keeping its declared range", () => {
				for (const [declared, installed, versions, latest] of [
					["^4.0.0-rc.1", "4.0.0-rc.1", ["3.3.1", "4.0.0-rc.1", "4.0.0-rc.2", "4.0.0"], "3.3.1"],
					["^3.4.0", "3.4.0", ["3.3.1", "3.4.0", "3.5.0"], "3.3.1"],
					["^3.3.1", "3.3.1", ["3.3.1", "3.4.0"], "3.3.1"],
					["^1.0.0-rc.1", "1.0.0-rc.1", ["1.0.0-rc.1", "1.0.0-rc.2"], undefined]
				] as [string, string, string[], string | undefined][]) {
					mockProject({ dependencies: { lit: declared } }, { lit: installed });
					publish("lit", versions, latest);

					const [lit] = request("lit");

					expect([lit.target, lit.newRange, lit.newest, lit.nextMajor, lit.skipped, lit.conflict])
						.withContext(installed).toEqual([installed, undefined, undefined, undefined, undefined, undefined]);
				}
			});

			it("writes an exact range for a package above latest when another package's requirement narrows it, so no newer version installs", () => {
				mockProject({ dependencies: { lit: "^4.0.0-rc.1", "lit-extras": "^1.0.0" } }, { lit: "4.0.0-rc.1", "lit-extras": "1.0.0" });
				publish("lit", ["3.3.1", "4.0.0-rc.1", "4.0.0-rc.2", "4.0.0"], "3.3.1");
				publish("lit-extras", ["1.0.0", "1.1.0"], "1.1.0", { peerDependencies: { lit: "~4.0.0-rc.1" } });

				expect(summary(getUpdatePlan({ requests: [{ name: "lit-extras" }, { name: "lit" }] })))
					.toEqual([["lit", "4.0.0-rc.1", "4.0.0-rc.1"], ["lit-extras", "1.1.0", "^1.1.0"]]);
			});

			it("updates an installed version above latest only to an explicitly requested version, never below it", () => {
				mockProject({ dependencies: { lit: "^4.0.0-rc.1" } }, { lit: "4.0.0-rc.1" });
				publish("lit", ["3.3.1", "4.0.0-rc.1", "4.0.0-rc.2"], "3.3.1", undefined, { next: "4.0.0-rc.2" });

				expect(summary(request("lit", "next"))).toEqual([["lit", "4.0.0-rc.2", "^4.0.0-rc.2"]]);
				expect(summary(request("lit", "^4.0.0-rc.1"))).toEqual([["lit", "4.0.0-rc.2", "^4.0.0-rc.2"]]);
				expect(request("lit", "latest")[0].skipped).toBe('no published version matches "latest" at or above 4.0.0-rc.1');
			});

			it("takes the newest stable version without a valid latest", () => {
				mockProject({ dependencies: { lit: "^3.0.0" } }, { lit: "3.0.0" });
				publish("lit", ["3.0.0", "3.1.0", "4.0.0-rc.1"], "not-a-version");

				expect(summary(request("lit"))).toEqual([["lit", "3.1.0", "^3.1.0"]]);
			});

			it("names the installed package.json of another direct dependency it can't parse", () => {
				mockProject({ dependencies: { lit: "^3.0.0", react: "^19.0.0" } }, { lit: "3.0.0", react: "19.0.0" })["node_modules/react/package.json"] = "{";
				publish("lit", ["3.0.0", "3.1.0"], "3.1.0");

				expect(() => request("lit")).toThrowError(/^Unable to parse node_modules\/react\/package\.json: .+\. Reinstall/);
			});

			it("rejects a package that isn't a direct dependency, naming its declared trial or licensed counterpart", () => {
				mockProject({ dependencies: { [FEED_REACT_GRIDS]: "~19.6.0" } });

				expect(() => request("lit")).toThrowError('Package "lit" is not a dependency.');
				expect(() => request(NPM_REACT_GRIDS)).toThrowError(`Package "${NPM_REACT_GRIDS}" is not a dependency; the project uses ${FEED_REACT_GRIDS}.`);
				expect(spawnSync).not.toHaveBeenCalled();
			});

			it("adds the direct dependencies in the fallback group, by trial or licensed name, aligned by their requirements", () => {
				mockProject({ dependencies: { [NPM_REACT]: "~19.8.0", [NPM_WEBCOMPONENTS]: "~7.3.0", [NPM_DOCK_MANAGER]: "~1.17.0", react: "^19.0.0" } },
					{ [NPM_REACT]: "19.8.0", [NPM_WEBCOMPONENTS]: "7.3.0", [NPM_DOCK_MANAGER]: "1.17.0", react: "19.0.0" });
				publish(NPM_REACT, ["19.8.0", "19.9.0"], "19.9.0",
					version => ({ dependencies: { [NPM_WEBCOMPONENTS]: version === "19.9.0" ? "~7.4.1" : "~7.3.0" } }));
				publish(NPM_WEBCOMPONENTS, ["7.3.0", "7.4.1", "8.0.0"], "8.0.0");

				expect(summary(request(NPM_REACT))).toEqual([[NPM_REACT, "19.9.0", "~19.9.0"], [NPM_WEBCOMPONENTS, "7.4.1", "~7.4.1"]]);

				mockProject({ dependencies: { [NPM_REACT_GRIDS]: "~19.9.0", [FEED_WEBCOMPONENTS_GRIDS]: "~7.3.0" } });
				publish(NPM_REACT_GRIDS, ["19.9.0", "19.10.0"], "19.10.0");
				publish(FEED_WEBCOMPONENTS_GRIDS, ["7.3.0", "7.3.2"], "7.3.2");

				expect(summary(request(NPM_REACT_GRIDS))).toEqual([[NPM_REACT_GRIDS, "19.10.0", "~19.10.0"], [FEED_WEBCOMPONENTS_GRIDS, "7.3.2", "~7.3.2"]]);
			});

			it("keeps a published package group on one version without pinning the written ranges", () => {
				const group = { "ig-update": { packageGroup: ["example-lib", "example-lib-extras"] } };
				mockProject({ dependencies: { "example-lib": "^2.0.0", "example-lib-extras": "^2.0.0", other: "^1.0.0" } },
					{ "example-lib": "2.0.0", "example-lib-extras": "2.0.0", other: "1.0.0" });
				publish("example-lib", ["2.0.0", "3.0.0", "3.1.0"], "3.1.0", group);
				publish("example-lib-extras", ["2.0.0", "3.0.0", "3.1.0"], "3.1.0", group);

				expect(summary(request("example-lib"))).toEqual([["example-lib", "3.1.0", "^3.1.0"], ["example-lib-extras", "3.1.0", "^3.1.0"]]);

				publish("example-lib-extras", ["2.0.0", "3.0.0"], "3.0.0", group);
				const plan = request("example-lib");

				expect(summary(plan)).toEqual([["example-lib", "3.0.0", "~3.0.0"], ["example-lib-extras", "3.0.0", "^3.0.0"]]);
				expect(plan[0].newest).toBe("3.1.0");
			});

			it("prefers a published package group to the fallback group, mapping its members to ranges, and ignores a malformed one", () => {
				mockProject({ dependencies: { [NPM_REACT]: "~19.8.0", [NPM_WEBCOMPONENTS]: "~7.4.0", [NPM_DOCK_MANAGER]: "~1.17.0" } },
					{ [NPM_REACT]: "19.8.0", [NPM_WEBCOMPONENTS]: "7.4.1", [NPM_DOCK_MANAGER]: "1.17.0" });
				publish(NPM_REACT, ["19.8.0", "19.9.0"], "19.9.0", { "ig-update": { packageGroup: { [NPM_DOCK_MANAGER]: "~1.18.0" } } });
				publish(NPM_DOCK_MANAGER, ["1.17.0", "1.18.0", "1.18.2", "2.0.0"], "2.0.0");
				publish(NPM_WEBCOMPONENTS, ["7.4.1", "7.5.0"], "7.5.0");

				expect(summary(request(NPM_REACT))).toEqual([[NPM_REACT, "19.9.0", "~19.9.0"], [NPM_DOCK_MANAGER, "1.18.2", "~1.18.2"]]);
				expect(Util.warn).not.toHaveBeenCalled();

				publish(NPM_REACT, ["19.8.0", "19.9.0"], "19.9.0", { "ig-update": { packageGroup: [1] } });

				expect(summary(request(NPM_REACT))).toEqual([[NPM_REACT, "19.9.0", "~19.9.0"], [NPM_WEBCOMPONENTS, "7.5.0", "~7.5.0"]]);
				expect(Util.warn).toHaveBeenCalledOnceWith('Ignoring the invalid "ig-update" packageGroup of igniteui-react.', "yellow");
			});

			it("adds a direct dependency the newest version needs as a peer, unless the installed version satisfies it", () => {
				mockProject({ dependencies: { [NPM_DOCK_MANAGER]: "~1.17.0", lit: "^2.8.0" } }, { [NPM_DOCK_MANAGER]: "1.17.0", lit: "2.8.0" });
				publish(NPM_DOCK_MANAGER, ["1.17.0", "2.0.0"], "2.0.0", version => version === "2.0.0" ? { peerDependencies: { lit: "^3.0.0" } } : {});
				publish("lit", ["2.8.0", "3.0.0", "3.3.1", "4.0.0"], "4.0.0");

				expect(summary(request(NPM_DOCK_MANAGER))).toEqual([[NPM_DOCK_MANAGER, "2.0.0", "~2.0.0"], ["lit", "3.3.1", "^3.3.1"]]);

				mockProject({ dependencies: { [NPM_DOCK_MANAGER]: "~1.17.0", lit: "^3.1.0" } }, { [NPM_DOCK_MANAGER]: "1.17.0", lit: "3.1.0" });

				expect(summary(request(NPM_DOCK_MANAGER))).toEqual([[NPM_DOCK_MANAGER, "2.0.0", "~2.0.0"]]);
			});

			it("repeats until no package joins, adding the group of a package that joined as a peer", () => {
				mockProject({ dependencies: { [NPM_REACT_GRIDS]: "~19.9.0", [NPM_REACT]: "~19.8.0", [NPM_WEBCOMPONENTS]: "~7.3.0" } },
					{ [NPM_REACT_GRIDS]: "19.9.0", [NPM_REACT]: "19.8.0", [NPM_WEBCOMPONENTS]: "7.3.0" });
				publish(NPM_REACT_GRIDS, ["19.9.0", "19.10.0"], "19.10.0", { peerDependencies: { [NPM_REACT]: "^19.9.0" } });
				publish(NPM_REACT, ["19.8.0", "19.9.0"], "19.9.0");
				publish(NPM_WEBCOMPONENTS, ["7.3.0", "7.4.1"], "7.4.1");

				expect(summary(request(NPM_REACT_GRIDS))).toEqual([
					[NPM_REACT_GRIDS, "19.10.0", "~19.10.0"], [NPM_REACT, "19.9.0", "~19.9.0"], [NPM_WEBCOMPONENTS, "7.4.1", "~7.4.1"]
				]);
			});

			it("holds a default target back for an installed peer requirement, conflicts on an explicit one, and --force overrides it", () => {
				mockProject({ dependencies: { react: "^18.3.1", "react-dom": "^18.3.1" } },
					{ react: "18.3.1", "react-dom": { version: "18.3.1", peerDependencies: { react: "^18.3.1" } } });
				publish("react", ["18.2.0", "18.3.1", "19.0.0", "19.2.4"], "19.2.4");
				const requiredByDom = "^18.3.1 (required by react-dom@18.3.1)";

				const [heldBack] = request("react");
				const [blocked] = request("react", "19");
				const [forced] = request("react", "19", true);

				expect([heldBack.target, heldBack.newest, heldBack.newRange, heldBack.conflict]).toEqual(["18.3.1", "19.2.4", undefined, undefined]);
				expect(heldBack.heldBackBy).toEqual([{ name: "react-dom", reason: requiredByDom }]);
				expect([blocked.target, blocked.conflict, blocked.overridable]).toEqual([undefined, `no version in "19" satisfies ${requiredByDom}`, true]);
				expect([forced.target, forced.newRange, forced.conflict, forced.forced]).toEqual(["19.2.4", "^19.2.4", undefined, requiredByDom]);
				expect([blocked.newest, blocked.heldBackBy, forced.newest, forced.heldBackBy]).toEqual([undefined, undefined, undefined, undefined]);
			});

			it("names every installed peer requirement that holds a default target back, from a version they all accept", () => {
				mockProject({ dependencies: { widget: "^1.5.0", "widget-grid": "^1.0.0", "widget-charts": "^1.0.0" } }, {
					widget: "1.5.0",
					"widget-grid": { version: "1.0.0", peerDependencies: { widget: ">=1.5.0 <2.0.0" } },
					"widget-charts": { version: "1.0.0", peerDependencies: { widget: "^1.0.0" } }
				});
				publish("widget", ["1.0.0", "1.5.0", "1.8.0", "2.0.0"], "2.0.0");

				const [widget] = request("widget");

				expect([widget.target, widget.newRange, widget.newest, widget.conflict]).toEqual(["1.8.0", "^1.8.0", "2.0.0", undefined]);
				expect(widget.heldBackBy).toEqual([
					{ name: "widget-grid", reason: ">=1.5.0 <2.0.0 (required by widget-grid@1.0.0)" },
					{ name: "widget-charts", reason: "^1.0.0 (required by widget-charts@1.0.0)" }
				]);
			});

			it("doesn't let an ordinary dependency of an unchanged package hold an update back", () => {
				mockProject({ dependencies: { typescript: "~5.5.0" }, devDependencies: { [NPM_CLI]: "~15.8.0" } },
					{ typescript: "5.5.4", [NPM_CLI]: { version: "15.8.2", dependencies: { typescript: "~5.5.4" } } });
				publish("typescript", ["5.5.4", "5.9.3"], "5.9.3");

				const [typescript] = request("typescript");

				expect([typescript.target, typescript.newRange, typescript.newest, typescript.nested]).toEqual(["5.9.3", "~5.9.3", undefined, undefined]);
			});

			describe("with a package held back by an unchanged one", () => {
				const requiredByPin = "^2.0.0 (required by example-pin@1.0.0)";
				const project = (dependencies: Record<string, string>, installed: Record<string, string | object>) => mockProject(
					{ dependencies: { "example-ui": "^2.0.0", "example-pin": "^1.0.0", ...dependencies } },
					{ "example-ui": "2.0.0", "example-pin": { version: "1.0.0", peerDependencies: { "example-ui": "^2.0.0" } }, ...installed });
				const publishUi = (peers: (version: string) => object) =>
					publish("example-ui", ["2.0.0", "2.4.0", "2.5.0", "3.0.0"], "3.0.0", version => ({ peerDependencies: peers(version) }));

				it("leaves a peer that joined for the newest version unchanged when the target accepts the installed one, unless requested or forced", () => {
					project({ react: "^18.2.0" }, { react: "18.2.0" });
					publish("react", ["18.2.0", "18.3.1", "19.2.0"], "19.2.0");

					for (const range of ["^18.0.0 || ^19.0.0", "^18.0.0"]) {
						publishUi(version => ({ react: version === "3.0.0" ? "^19.0.0" : range }));
						const plan = request("example-ui");

						expect(summary(plan)).withContext(range).toEqual([["example-ui", "2.5.0", "^2.5.0"]]);
						expect(plan[0].heldBackBy).withContext(range).toEqual([{ name: "example-pin", reason: requiredByPin }]);
					}
					expect(summary(getUpdatePlan({ requests: [{ name: "example-ui" }, { name: "react" }] })))
						.toEqual([["example-ui", "2.5.0", "^2.5.0"], ["react", "18.3.1", "^18.3.1"]]);
					expect(summary(request("example-ui", "3.0.0"))).toEqual([["example-ui", undefined, undefined], ["react", "19.2.0", "^19.2.0"]]);
					expect(summary(request("example-ui", "3.0.0", true))).toEqual([["example-ui", "3.0.0", "^3.0.0"], ["react", "19.2.0", "^19.2.0"]]);
				});

				it("keeps a joined peer whose declared range allows versions the targets reject, so its range is narrowed", () => {
					project({ "example-theme": "^1.0.0" }, { "example-theme": "1.0.0" });
					publishUi(version => ({ "example-theme": version === "3.0.0" ? "^2.0.0" : version === "2.5.0" ? "1.0.0" : "^1.0.0" }));
					publish("example-theme", ["1.0.0", "1.1.0", "2.0.0"], "2.0.0");

					expect(summary(request("example-ui"))).toEqual([["example-ui", "2.5.0", "^2.5.0"], ["example-theme", "1.0.0", "1.0.0"]]);
				});

				it("checks such peers together, and keeps one moving when its installed peers reject a target", () => {
					project({ react: "^18.2.0", "react-dom": "^18.2.0" }, { react: "18.2.0", "react-dom": { version: "18.2.0", peerDependencies: { react: "^18.2.0" } } });
					publish("react", ["18.2.0", "19.2.0"], "19.2.0");
					publish("react-dom", ["18.2.0", "19.2.0"], "19.2.0", version => ({ peerDependencies: { react: `^${version}` } }));
					const peers = (react: string) => (version: string) =>
						version === "3.0.0" ? { react: "^19.0.0", "react-dom": "^19.0.0" } : { react, "react-dom": "^18.0.0 || ^19.0.0" };

					publishUi(peers("^18.0.0 || ^19.0.0"));
					expect(summary(request("example-ui"))).toEqual([["example-ui", "2.5.0", "^2.5.0"]]);

					publishUi(peers("^19.0.0"));
					expect(summary(request("example-ui"))).toEqual([["example-ui", "2.5.0", "^2.5.0"], ["react", "19.2.0", "^19.2.0"], ["react-dom", "19.2.0", "^19.2.0"]]);
				});

				it("keeps updating a joined peer whose target holds the package back, so the reason stays reported", () => {
					mockProject({ dependencies: { "example-ui": "^2.0.0", "example-theme": "^1.2.0" } }, { "example-ui": "2.0.0", "example-theme": "1.2.0" });
					publishUi(version => ({ "example-theme": version === "3.0.0" ? "^2.0.0" : ">=1.0.0" }));
					publish("example-theme", ["1.2.0", "2.5.0"], "2.5.0", version => version === "2.5.0" ? { peerDependencies: { "example-ui": "^2.0.0" } } : {});

					const plan = request("example-ui");

					expect(summary(plan)).toEqual([["example-ui", "2.5.0", "^2.5.0"], ["example-theme", "2.5.0", "^2.5.0"]]);
					expect(plan[0].heldBackBy).toEqual([{ name: "example-theme", reason: "^2.0.0 (required by example-theme@2.5.0)" }]);
				});

				it("still names what holds a package back through a peer it leaves unchanged", () => {
					mockProject({ dependencies: { "example-ui": "^2.0.0", react: "^18.3.1", "react-dom": "^18.3.1" } },
						{ "example-ui": "2.0.0", react: "18.3.1", "react-dom": { version: "18.3.1", peerDependencies: { react: "^18.3.1" } } });
					publish("react", ["18.3.1", "19.2.0"], "19.2.0");
					publishUi(version => ({ react: version === "3.0.0" ? "^19.0.0" : "^18.0.0 || ^19.0.0" }));
					const pinned = request("example-ui");

					expect(summary(pinned)).toEqual([["example-ui", "2.5.0", "^2.5.0"]]);
					expect(pinned[0].heldBackBy).toEqual([
						{ name: "react-dom", reason: "3.0.0 requires react@^19.0.0, which conflicts with ^18.3.1 (required by react-dom@18.3.1)" }
					]);

					mockProject({ dependencies: { "example-ui": "^2.0.0", "example-theme": "^2.0.0" } }, { "example-ui": "2.0.0", "example-theme": "2.0.0" });
					publish("example-theme", ["2.0.0", "2.9.0"], "2.9.0");
					publishUi(version => ({ "example-theme": version === "3.0.0" ? "^3.0.0" : "^2.0.0" }));
					const unpublished = request("example-ui");

					expect(summary(unpublished)).toEqual([["example-ui", "2.5.0", "^2.5.0"]]);
					expect(unpublished[0].heldBackBy).toEqual([{ name: "example-theme", reason: '3.0.0 requires example-theme@^3.0.0, outside ">=2.0.0 <=2.9.0"' }]);
				});

				it("holds a target back to a version whose peers the installed packages outside the plan meet, or conflicts naming them", () => {
					project({ "example-theme": "^1.2.0" }, { "example-theme": "1.2.0" });

					publishUi(version => version === "3.0.0" ? {} : { "example-theme": version === "2.5.0" ? "^1.2.0" : "^1.0.0" });
					const [compatible] = request("example-ui");

					expect([compatible.target, compatible.newRange, compatible.newest]).toEqual(["2.5.0", "^2.5.0", "3.0.0"]);
					expect(compatible.heldBackBy).toEqual([{ name: "example-pin", reason: requiredByPin }]);

					publishUi(version => version === "3.0.0" ? {} : { "example-theme": version === "2.5.0" ? "^1.5.0" : "^1.0.0" });
					const [heldBack] = request("example-ui");

					expect([heldBack.target, heldBack.newRange, heldBack.newest]).toEqual(["2.4.0", "~2.4.0", "3.0.0"]);
					expect(heldBack.heldBackBy).toEqual([{ name: "example-pin", reason: requiredByPin }]);

					publishUi(version => version === "3.0.0" ? {} : { "example-theme": "^1.5.0" });
					const [blocked] = request("example-ui");
					const [forced] = request("example-ui", undefined, true);

					expect([blocked.target, blocked.overridable, blocked.conflict]).toEqual([undefined, true,
						`no version in ">=2.0.0 <=3.0.0" satisfies ${requiredByPin} and works with the installed example-theme@1.2.0`]);
					expect([forced.target, forced.newRange, forced.forced]).toEqual(["3.0.0", "^3.0.0", requiredByPin]);
				});

				it("doesn't hold a target back for a skipped peer, warning about it instead", () => {
					project({ "example-theme": "latest" }, { "example-theme": "1.2.0" });
					publishUi(version => ({ "example-theme": version === "2.0.0" ? "^1.0.0" : "^2.0.0" }));

					expect(summary(request("example-ui"))).toEqual([["example-ui", "2.5.0", "^2.5.0"], ["example-theme", undefined, undefined]]);
					expect(Util.warn).toHaveBeenCalledWith("example-ui@2.5.0 requires example-theme@^2.0.0, which is not checked because example-theme is skipped.", "yellow");
				});
			});
		});
	});

	describe("discoverUpdates", () => {
		const lookups = () => execFile.calls.allArgs().map(([, args]) => args.slice(args.indexOf("view") + 1).join(" "));
		const igUpdate = (packageGroup?: string[]) => ({ "ig-update": { migrations: "./migrations.json", ...packageGroup && { packageGroup } } });

		afterEach(() => {
			expect(spawnSync).not.toHaveBeenCalled();
			expect(fs.writeFile).not.toHaveBeenCalled();
		});

		it("lists newer latest versions that declare ig-update or are in a fallback group, once per group, by a declared name", async () => {
			const group = igUpdate(["fixture-lib", "fixture-extras"]);
			mockProject({
				dependencies: {
					[NPM_REACT]: "~19.6.0", "igniteui-react-charts": "~19.5.0", "@infragistics/igniteui-react-core": "~19.5.0",
					[NPM_REACT_GRIDS]: "^19.9.0-rc.1", "fixture-lib": "^1.0.0", "fixture-extras": "^1.0.0", react: "^18.0.0", "current-lib": "^2.0.0"
				},
				devDependencies: { [NPM_CLI]: "~15.7.0" }
			}, { [NPM_REACT]: "19.6.2", [NPM_REACT_GRIDS]: "19.9.0-rc.1", "current-lib": "2.0.0" });
			publish(NPM_REACT, ["19.6.2", "19.9.0"], "19.9.0");
			publish("igniteui-react-charts", ["19.5.0", "19.6.0"], "19.6.0");
			publish("@infragistics/igniteui-react-core", ["19.5.0", "19.6.0"], "19.6.0");
			publish(NPM_REACT_GRIDS, ["19.8.0", "19.9.0-rc.1"], "19.8.0");
			publish("fixture-lib", ["1.0.0", "2.0.0"], "2.0.0", group);
			publish("fixture-extras", ["1.0.0", "2.0.0"], "2.0.0", group);
			publish("react", ["18.0.0", "19.0.0"], "19.0.0");
			publish("current-lib", ["2.0.0"], "2.0.0", igUpdate());
			publish(NPM_CLI, ["15.7.0", "15.8.2"], "15.8.2");

			expect(await discoverUpdates()).toEqual({
				updates: [
					{ name: "fixture-lib", baseline: "1.0.0", latest: "2.0.0" },
					{ name: NPM_CLI, baseline: "15.7.0", latest: "15.8.2" },
					{ name: NPM_REACT, baseline: "19.6.2", latest: "19.9.0" },
					{ name: "igniteui-react-charts", baseline: "19.5.0", latest: "19.6.0" }
				],
				failures: []
			});
		});

		it("skips invalid names with a warning and unsupported specs silently, looking each package up once", async () => {
			spyOn(Util, "log");
			mockProject({ dependencies: { Bad_Name: "^1.0.0", [NPM_REACT]: "workspace:*", [NPM_CLI]: "~15.7.0" }, devDependencies: { [NPM_CLI]: "~15.7.0" } });
			publish(NPM_CLI, ["15.7.0"], "15.7.0");

			expect(await discoverUpdates()).toEqual({ updates: [], failures: [] });
			expect(Util.warn).toHaveBeenCalledOnceWith('Skipped "Bad_Name": not a valid package name.', "yellow");
			expect(Util.log).not.toHaveBeenCalled();
			expect(lookups()).toEqual([`${NPM_CLI}@latest version ig-update --json`]);

			await discoverUpdates(true);

			expect(Util.log).toHaveBeenCalledWith(`${NPM_REACT}: not checked, unsupported spec "workspace:*" ` +
				"(only exact, ^, ~ and x-range versions are supported)", "gray");
		});

		it("returns broken installs and failed lookups with the licensed-feed hints, still listing the other packages", async () => {
			spyOn(ProjectConfig, "getConfig").and.returnValue({ igPackageRegistry: "https://feed.example/npm/" } as Config);
			const noVersion = ["missing-lib", "number-lib", "invalid-lib"];
			mockProject({ dependencies: {
				"invalid-version-lib": "^1.0.0", "invalid-json-lib": "^1.0.0", [FEED_REACT_GRIDS]: "~19.6.0", [NPM_REACT]: "~19.6.0", "unreachable-lib": "^1.0.0",
				...Object.fromEntries(noVersion.map(name => [name, "^1.0.0"]))
			} }, { "invalid-version-lib": "1.0" })["node_modules/invalid-json-lib/package.json"] = "{";
			registry[FEED_REACT_GRIDS] = npmError("E401");
			registry["unreachable-lib"] = { status: null, stdout: null, error: new Error("spawn npm ENOENT") };
			registry["missing-lib"] = JSON.stringify({ "ig-update": { migrations: "./migrations.json" } });
			registry["number-lib"] = JSON.stringify({ version: 2, "ig-update": { migrations: "./migrations.json" } });
			registry["invalid-lib"] = JSON.stringify("2.0");
			publish(NPM_REACT, ["19.6.0", "19.9.0"], "19.9.0");

			expect(await discoverUpdates()).toEqual({
				updates: [{ name: NPM_REACT, baseline: "19.6.0", latest: "19.9.0" }],
				failures: [
					`Invalid version "1.0" in node_modules/invalid-version-lib/package.json. Reinstall the project's dependencies and run the update again.`,
					jasmine.stringMatching(/^Unable to parse node_modules\/invalid-json-lib\/package\.json: .+\. Reinstall the project's dependencies/),
					`Unable to get ${FEED_REACT_GRIDS}@latest from the registry: E401 summary\nnpm has no valid credentials for the Infragistics feed. ` +
						"Log in with your Infragistics account: npm login --scope=@infragistics --registry=https://feed.example/npm/ --auth-type=legacy",
					"Unable to get unreachable-lib@latest from the registry: spawn npm ENOENT",
					...noVersion.map(name => `Unable to get ${name}@latest from the registry: the response has no valid version.`)
				]
			});
		});

		it("runs at most 8 lookups at a time, each npm with an argument array and no shell", async () => {
			Object.defineProperty(process, "platform", { value: "linux" });
			const names = Array.from({ length: 10 }, (_, i) => `lib-${i}`);
			mockProject({ dependencies: Object.fromEntries(names.map(name => [name, "^1.0.0"])) });
			names.forEach(name => publish(name, ["1.0.0", "1.1.0"], "1.1.0", igUpdate()));
			let running = 0;
			let most = 0;
			execFile.and.callFake((_command: string, args: string[], _options: object, callback: (error: null, stdout: string, stderr: string) => void) => {
				most = Math.max(most, ++running);
				setImmediate(() => {
					running--;
					callback(null, view(args).stdout!, "");
				});
			});

			expect((await discoverUpdates()).updates.length).toBe(10);
			expect(most).toBe(8);
			expect(execFile.calls.allArgs()).toEqual(names.map(name => ["npm", ["view", `${name}@latest`, "version", "ig-update", "--json"],
				{ encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }, jasmine.any(Function)]));
		});

		it("runs the installed npm, offline so that no network is needed, returning its error", async () => {
			execFile.and.callFake((...args: any[]) => Reflect.apply(realExecFile, child_process,
				[...args.slice(0, 2), { ...args[2], env: { ...process.env, npm_config_offline: "true" } }, args[3]]));
			const name = "igniteui-cli-offline-spec-package";
			mockProject({ dependencies: { [name]: "^1.0.0" } });

			expect(await discoverUpdates()).toEqual({
				updates: [],
				failures: [jasmine.stringMatching(new RegExp(`^Unable to get ${name}@latest from the registry: [\\s\\S]*only-if-cached`))]
			});
		});
	});

	describe("applyUpdatePlan", () => {
		const pkgJson = {
			name: "app",
			dependencies: {
				"igniteui-react": "~19.6.0", "@infragistics/igniteui-react-grids": "~19.6.0", "igniteui-cli": "~15.7.0", "react": "^19.0.0"
			},
			devDependencies: { "igniteui-cli": "~15.7.0" },
			scripts: { start: "vite" }
		};
		const plan = [
			{ name: "igniteui-react", section: "dependencies", declared: "~19.6.0", target: "19.6.0" },
			{ name: "@infragistics/igniteui-react-grids", section: "dependencies", declared: "~19.6.0", newRange: "19.9.0" },
			{ name: "igniteui-cli", section: "devDependencies", declared: "~15.7.0", newRange: "~15.8.2" },
			{ name: "igniteui-webcomponents", section: "dependencies", declared: "workspace:*", skipped: "unsupported spec" }
		] as PackageUpdate[];

		afterEach(() => {
			expect(spawnSync).not.toHaveBeenCalled();
		});

		it("replaces only the planned version values, keeping indentation, line endings and everything else", () => {
			const updated = {
				...pkgJson,
				dependencies: { ...pkgJson.dependencies, "@infragistics/igniteui-react-grids": "19.9.0" },
				devDependencies: { ...pkgJson.devDependencies, "igniteui-cli": "~15.8.2" }
			};
			for (const indent of ["\t", "  ", "    "]) {
				for (const eol of ["\n", "\r\n"]) {
					const format = (json: object) => JSON.stringify(json, null, indent).replace(/\n/g, eol) + eol;
					mockProject(format(pkgJson));
					fs.writeFile.calls.reset();

					applyUpdatePlan(plan);

					expect(fs.writeFile).withContext(JSON.stringify(indent + eol)).toHaveBeenCalledOnceWith("./package.json", format(updated));
				}
			}
		});

		it("keeps compact and irregular whitespace", () => {
			mockProject('{"dependencies" :{"@infragistics/igniteui-react-grids"  :   "~19.6.0" ,"igniteui-react":"~19.6.0"},\r\n' +
				' "devDependencies":{ "igniteui-cli":"~15.7.0" }}');

			applyUpdatePlan(plan);

			expect(fs.writeFile).toHaveBeenCalledOnceWith("./package.json",
				'{"dependencies" :{"@infragistics/igniteui-react-grids"  :   "19.9.0" ,"igniteui-react":"~19.6.0"},\r\n' +
				' "devDependencies":{ "igniteui-cli":"~15.8.2" }}');
		});

		it("writes nothing when a duplicate key would leave the planned version ineffective", () => {
			for (const first of ["~19.0.0", "~19.6.0"]) {
				mockProject('{"dependencies":{"@infragistics/igniteui-react-grids":"' + first + '",' +
					'"@infragistics/igniteui-react-grids":"~19.6.0"},"devDependencies":{"igniteui-cli":"~15.7.0"}}');

				expect(() => applyUpdatePlan(plan)).withContext(first).toThrowError("package.json lists " +
					"@infragistics/igniteui-react-grids more than once in dependencies. Remove the duplicate and run the update again.");
			}
			expect(fs.writeFile).not.toHaveBeenCalled();
		});

		it("does not write when nothing changes", () => {
			mockProject(pkgJson);

			applyUpdatePlan(plan.map(c => ({ ...c, newRange: undefined })));

			expect(fs.writeFile).not.toHaveBeenCalled();
		});

		it("rejects the whole plan when any package has a conflict", () => {
			expect(() => applyUpdatePlan([...plan, { name: "igniteui-react-core", conflict: "no version" } as PackageUpdate]))
				.toThrowError("Unable to update package.json, conflicting versions for: igniteui-react-core");
			expect(fs.readFile).not.toHaveBeenCalled();
			expect(fs.writeFile).not.toHaveBeenCalled();
		});

		it("writes nothing when package.json no longer matches the plan", () => {
			for (const devDependencies of [{ "igniteui-cli": "~15.8.0" }, {}]) {
				mockProject({ ...pkgJson, devDependencies });

				expect(() => applyUpdatePlan(plan)).toThrowError("package.json changed after the update plan was made " +
					"(devDependencies.igniteui-cli). Run the update again.");
			}
			expect(fs.writeFile).not.toHaveBeenCalled();
		});
	});
});
