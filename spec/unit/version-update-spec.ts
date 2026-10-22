import * as semver from "semver";
import { Config, IFileSystem } from "../../packages/core/types";
import { App, ProjectConfig, Util } from "../../packages/core/util";
import {
	FEED_ANGULAR, FEED_REACT_GRIDS, FEED_WEBCOMPONENTS_GRIDS, NPM_ANGULAR, NPM_CLI, NPM_DOCK_MANAGER, NPM_GRID_LITE, NPM_REACT,
	NPM_REACT_DOCK_MANAGER, NPM_REACT_GRIDS, NPM_WEBCOMPONENTS, NPM_WEBCOMPONENTS_GRIDS
} from "../../packages/core/update/package-resolve";
import { applyUpdatePlan, getUpdateCandidates, getUpdatePlan, PackageUpdate, UPDATABLE_PACKAGES } from "../../packages/core/update/version-update";

describe("Unit - version update", () => {
	let fs: jasmine.SpyObj<IFileSystem>;

	function mockProject(pkgJson: object | string, installed: Record<string, string> = {}) {
		const files: Record<string, string> = {
			"./package.json": typeof pkgJson === "string" ? pkgJson : JSON.stringify(pkgJson)
		};
		for (const name of Object.keys(installed)) {
			files[`node_modules/${name}/package.json`] = JSON.stringify({ name, version: installed[name] });
		}
		fs.fileExists.and.callFake(filePath => filePath in files);
		fs.readFile.and.callFake(filePath => files[filePath]);
	}

	beforeEach(() => {
		fs = jasmine.createSpyObj<IFileSystem>("fs", ["fileExists", "readFile", "writeFile", "directoryExists", "glob"]);
		spyOn(App.container, "get").and.returnValue(fs);
		spyOn(Util, "warn");
		spyOn(Util, "execSync");
	});

	it("UPDATABLE_PACKAGES includes React/WC trial and licensed names, OSS packages, grid lite and the CLI, but not Angular", () => {
		for (const name of [NPM_REACT_GRIDS, FEED_REACT_GRIDS, NPM_REACT, NPM_WEBCOMPONENTS, NPM_WEBCOMPONENTS_GRIDS,
			FEED_WEBCOMPONENTS_GRIDS, NPM_DOCK_MANAGER, NPM_GRID_LITE, NPM_CLI]) {
			expect(UPDATABLE_PACKAGES.has(name)).withContext(name).toBe(true);
		}
		expect(UPDATABLE_PACKAGES.has(NPM_ANGULAR)).toBe(false);
		expect(UPDATABLE_PACKAGES.has(FEED_ANGULAR)).toBe(false);
	});

	describe("getUpdateCandidates", () => {
		afterEach(() => {
			expect(Util.execSync).not.toHaveBeenCalled();
			expect(fs.writeFile).not.toHaveBeenCalled();
		});

		it("collects only allowlisted direct dependencies and devDependencies, keeping trial and licensed names", () => {
			mockProject({
				dependencies: {
					"igniteui-react": "~19.6.0",
					"igniteui-react-grids": "~19.5.0",
					"@infragistics/igniteui-react-grids": "~19.6.0",
					"@infragistics/igniteui-webcomponents-grids": "~7.3.0",
					"igniteui-grid-lite": "~0.11.0",
					"igniteui-angular": "~22.2.0",
					"ignite-ui": "^21.1.0",
					"igniteui-theming": "^20.0.0",
					"igniteui-i18n-resources": "^1.0.3",
					"react": "^19.0.0"
				},
				devDependencies: {
					"igniteui-cli": "~15.7.0",
					"igniteui-sassdoc-theme": "^1.0.0"
				}
			});

			expect(getUpdateCandidates().map(c => [c.name, c.section])).toEqual([
				["igniteui-react", "dependencies"],
				["igniteui-react-grids", "dependencies"],
				["@infragistics/igniteui-react-grids", "dependencies"],
				["@infragistics/igniteui-webcomponents-grids", "dependencies"],
				["igniteui-grid-lite", "dependencies"],
				["igniteui-cli", "devDependencies"]
			]);
		});

		it("uses the installed version as baseline when it satisfies the declared range", () => {
			mockProject(
				{ dependencies: { "igniteui-webcomponents": "~7.4.0", "igniteui-react": "^19.9.0-rc.1" } },
				{ "igniteui-webcomponents": "7.4.1", "igniteui-react": "19.9.0-rc.1" }
			);

			expect(getUpdateCandidates()).toEqual([
				{ name: "igniteui-webcomponents", section: "dependencies", declared: "~7.4.0", installed: "7.4.1", baseline: "7.4.1" },
				{ name: "igniteui-react", section: "dependencies", declared: "^19.9.0-rc.1", installed: "19.9.0-rc.1", baseline: "19.9.0-rc.1" }
			]);
			expect(Util.warn).not.toHaveBeenCalled();
		});

		it("uses the declared minimum when the installed version is older, and skips it when above the declared range", () => {
			mockProject(
				{ dependencies: {
					"igniteui-react": "^19.6.0", "igniteui-webcomponents": "^6.5.0", "igniteui-grid-lite": "~0.11.0", "igniteui-react-grids": "^19.6.0"
				} },
				{ "igniteui-react": "19.5.2", "igniteui-webcomponents": "7.4.1", "igniteui-grid-lite": "0.11.4", "igniteui-react-grids": "19.7.0-beta.1" }
			);

			const [react, webcomponents, gridLite, grids] = getUpdateCandidates();

			expect(react).toEqual(jasmine.objectContaining({ installed: "19.5.2", baseline: "19.6.0" }));
			expect(gridLite).toEqual(jasmine.objectContaining({ installed: "0.11.4", baseline: "0.11.4" }));
			expect([webcomponents, grids].map(c => [c.baseline, c.skipped])).toEqual([
				[undefined, 'installed 7.4.1 is outside the declared range "^6.5.0"; update package.json or reinstall before updating'],
				[undefined, 'installed 19.7.0-beta.1 is outside the declared range "^19.6.0"; update package.json or reinstall before updating']
			]);
			expect(Util.warn).toHaveBeenCalledOnceWith(jasmine.stringMatching(/out of sync.*igniteui-react .*19\.5\.2/), "yellow");
		});

		it("supports exact, ^, ~ and x-range specs, using the declared minimum when not installed", () => {
			const baselines: Record<string, string> = {
				"19.6.0": "19.6.0", "^19.6.0": "19.6.0", "~19.6.0": "19.6.0", "^19.9.0-rc.1": "19.9.0-rc.1",
				"19": "19.0.0", "19.x": "19.0.0", "19.6.x": "19.6.0", "~19.6": "19.6.0", "0.11.x": "0.11.0"
			};
			for (const declared of Object.keys(baselines)) {
				mockProject({ dependencies: { "igniteui-react": declared } });

				expect(getUpdateCandidates()[0].baseline).withContext(declared).toBe(baselines[declared]);
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

				const [candidate] = getUpdateCandidates();

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

			getUpdateCandidates();

			expect(Util.warn).toHaveBeenCalledTimes(4);
			for (const name of ["igniteui-react", "igniteui-webcomponents", "igniteui-grid-lite", "@infragistics/igniteui-react-charts"]) {
				expect(Util.warn).toHaveBeenCalledWith(`${name} is listed in package.json overrides/resolutions, ` +
					"which can override the updated version.", "yellow");
			}
		});

		it("throws when package.json is missing", () => {
			fs.fileExists.and.returnValue(false);

			expect(() => getUpdateCandidates()).toThrowError(/No package.json found/);
		});

		it("throws when package.json is invalid", () => {
			mockProject("{ invalid");

			expect(() => getUpdateCandidates()).toThrowError(/Unable to parse package.json/);
		});
	});

	describe("getUpdatePlan", () => {
		type Manifest = object | ((version: string) => object);
		let registry: Record<string, { versions: string | string[]; latest?: string; manifest?: Manifest } | string | Error>;

		function npmError(code: string, summary = `${code} summary`) {
			return Object.assign(new Error("Command failed"), { stdout: JSON.stringify({ error: { code, summary } }) });
		}

		function publish(name: string, versions: string | string[], latest?: string, manifest?: Manifest) {
			registry[name] = { versions, latest, manifest };
		}

		const REACT_WC_RANGES: Record<string, string> = {
			"19.3.0": "~6.3.3", "19.3.2": "~6.3.6", "19.4.0": "~6.3.6", "19.5.0": "~7.0.0", "19.9.0": "~7.4.1"
		};

		function publishReactWcHistory(reactVersions: string[], wcVersions: string[]) {
			publish(NPM_REACT, reactVersions, "19.9.0", version => ({ dependencies: { [NPM_WEBCOMPONENTS]: REACT_WC_RANGES[version] } }));
			publish(NPM_WEBCOMPONENTS, wcVersions, "7.4.1");
		}

		beforeEach(() => {
			registry = {};
			(Util.execSync as jasmine.Spy).and.callFake((command: string) => {
				const [, name, range] = /^npm view "(@?[^@"]+)(?:@([^"]+))?"/.exec(command)!;
				const entry = registry[name] ?? npmError("E404");
				if (entry instanceof Error) {
					throw entry;
				}
				if (typeof entry === "string") {
					return entry;
				}
				const { versions, latest, manifest } = entry;
				if (!range) {
					return JSON.stringify({ versions, "dist-tags": { latest } });
				}
				const matches = ([] as string[]).concat(versions).filter(v => semver.satisfies(v, range)).map(version => {
					const fields = typeof manifest === "function" ? manifest(version) : manifest;
					return fields ? { version, ...fields } : version;
				});
				return JSON.stringify(matches.length === 1 ? matches[0] : matches);
			});
		});

		afterEach(() => {
			expect(fs.writeFile).not.toHaveBeenCalled();
		});

		it("resolves the newest stable version in the current major, its manifest, and the newer major", () => {
			mockProject({ dependencies: { "igniteui-react": "~19.6.0" } }, { "igniteui-react": "19.6.2" });
			publish("igniteui-react", ["19.6.2", "19.9.0", "20.0.0", "18.9.1", "19.10.0-beta.1"], "20.0.0",
				{ peerDependencies: { "igniteui-grid-lite": "~0.11.0" }, deprecated: "use 20" });

			const [react] = getUpdatePlan();

			expect(react).toEqual(jasmine.objectContaining({ baseline: "19.6.2", target: "19.9.0", nextMajor: "20.0.0" }));
			expect(react.manifest).toEqual(jasmine.objectContaining({
				version: "19.9.0", peerDependencies: { "igniteui-grid-lite": "~0.11.0" }, deprecated: "use 20"
			}));
		});

		it("keeps 0.x packages in their minor line and range style", () => {
			mockProject({ dependencies: { "igniteui-grid-lite": "0.11.x" } });
			publish("igniteui-grid-lite", ["0.11.0", "0.11.3", "0.12.0"], "0.12.0");

			expect(getUpdatePlan()[0]).toEqual(jasmine.objectContaining({ target: "0.11.3", newRange: "^0.11.3", nextMajor: "0.12.0" }));
		});

		it("moves a prerelease baseline to later prereleases and the stable release", () => {
			mockProject({ dependencies: { "igniteui-react": "^19.9.0-rc.1" } });
			publish("igniteui-react", ["19.9.0-rc.1", "19.9.0-rc.2"], "19.6.2");

			expect(getUpdatePlan()[0].target).toBe("19.9.0-rc.2");

			publish("igniteui-react", ["19.9.0-rc.1", "19.9.0-rc.2", "19.9.0"], "19.9.0");

			expect(getUpdatePlan()[0].target).toBe("19.9.0");
		});

		it("targets the installed version when it is the newest in its line, never a lower one", () => {
			mockProject({ dependencies: { "igniteui-webcomponents": "^7.2.0" } }, { "igniteui-webcomponents": "7.4.1" });
			publish("igniteui-webcomponents", "7.4.1", "7.4.1");

			const [webcomponents] = getUpdatePlan();

			expect(webcomponents).toEqual(jasmine.objectContaining({ baseline: "7.4.1", target: "7.4.1" }));
			expect(webcomponents.nextMajor).toBeUndefined();
			expect(webcomponents.manifest).toEqual(jasmine.objectContaining({ version: "7.4.1" }));
		});

		it("does not query the registry for skipped packages", () => {
			mockProject({ dependencies: { "igniteui-react": "workspace:*", "igniteui-webcomponents": "^6.5.0" } },
				{ "igniteui-webcomponents": "7.4.1" });

			expect(getUpdatePlan().every(c => c.skipped && !c.target)).toBe(true);
			expect(Util.execSync).not.toHaveBeenCalled();
		});

		it("skips a package with no published version in its line", () => {
			mockProject({ dependencies: { "igniteui-react": "~19.6.0" } });
			publish("igniteui-react", ["20.0.0"], "20.0.0");

			const [react] = getUpdatePlan();

			expect(react.skipped).toBe('no published version matches "^19.6.0"');
			expect(react.target).toBeUndefined();

			registry["igniteui-react"] = "{}";

			expect(getUpdatePlan()[0].skipped).toBe('no published version matches "^19.6.0"');
		});

		it("tolerates an invalid latest dist-tag", () => {
			mockProject({ dependencies: { "igniteui-react": "~19.6.0" } });
			publish("igniteui-react", ["19.6.0"], "not-a-version");

			const [react] = getUpdatePlan();

			expect(react.target).toBe("19.6.0");
			expect(react.nextMajor).toBeUndefined();
		});

		it("maps registry errors and unexpected output to actionable messages", () => {
			const licensed = "@infragistics/igniteui-react-grids";
			mockProject({ dependencies: { [licensed]: "~19.6.0" } });

			spyOn(ProjectConfig, "getConfig").and.returnValue({ igPackageRegistry: "https://feed.example/npm/" } as Config);

			expect(() => getUpdatePlan()).toThrowError(`${licensed} was not found. Map the @infragistics scope to the ` +
				"Infragistics feed in .npmrc:\n@infragistics:registry=https://feed.example/npm/");

			for (const code of ["E401", "E403", "ENEEDAUTH"]) {
				registry[licensed] = npmError(code);
				expect(() => getUpdatePlan()).withContext(code).toThrowError(/^Not logged in to the Infragistics feed/);
			}

			mockProject({ dependencies: { "igniteui-react": "~19.6.0" } });
			registry["igniteui-react"] = npmError("ETIMEDOUT", "network timeout");
			expect(() => getUpdatePlan()).toThrowError("Unable to get igniteui-react from the registry: network timeout");

			registry["igniteui-react"] = "not json";
			expect(() => getUpdatePlan()).toThrowError(/^Unable to get igniteui-react from the registry: /);
		});

		describe("alignment", () => {
			const summary = (plan: PackageUpdate[]) => plan.map(c => [c.name, c.target, c.newRange, c.conflict]);

			it("aligns to an exact peer and writes it as an exact range, in either package order (React)", () => {
				publish("igniteui-react-charts", ["19.5.2", "19.6.0"], "19.6.0", { peerDependencies: { "igniteui-react-core": "19.6.0" } });
				publish("igniteui-react-core", ["19.5.2", "19.6.0", "19.7.0"], "19.7.0");
				const charts = ["igniteui-react-charts", "19.6.0", "~19.6.0", undefined];
				const core = ["igniteui-react-core", "19.6.0", "19.6.0", undefined];

				mockProject({ dependencies: { "igniteui-react-charts": "~19.5.2", "igniteui-react-core": "~19.5.2" } });
				expect(summary(getUpdatePlan())).toEqual([charts, core]);

				mockProject({ dependencies: { "igniteui-react-core": "~19.5.2", "igniteui-react-charts": "~19.5.2" } });
				expect(summary(getUpdatePlan())).toEqual([core, charts]);
			});

			it("keeps an older dependent that works with the dependency's major and narrows its range (real React 19.x / WC history)", () => {
				mockProject(
					{ dependencies: { "igniteui-react": "~19.3.0", "igniteui-webcomponents": "^6.3.0" } },
					{ "igniteui-react": "19.3.0", "igniteui-webcomponents": "6.3.3" }
				);
				publishReactWcHistory(Object.keys(REACT_WC_RANGES), ["6.3.3", "6.3.6", "6.5.1", "7.0.0", "7.4.1"]);

				expect(summary(getUpdatePlan())).toEqual([
					["igniteui-react", "19.4.0", "~19.4.0", undefined],
					["igniteui-webcomponents", "6.3.6", "~6.3.6", undefined]
				]);
			});

			it("writes a range excluding the newer versions the lookahead rejected for their dependencies, also at the baseline (real React 19.x / WC history)", () => {
				publishReactWcHistory(Object.keys(REACT_WC_RANGES), ["6.3.0", "6.3.3", "6.3.6", "6.5.1", "7.0.0", "7.4.1"]);

				for (const [react, installed] of [
					["^19.3.0", {}], ["^19.4.0", { [NPM_REACT]: "19.4.0", [NPM_WEBCOMPONENTS]: "6.3.6" }], ["^19.4.0", {}]
				] as [string, Record<string, string>][]) {
					mockProject({ dependencies: { [NPM_REACT]: react, [NPM_WEBCOMPONENTS]: "^6.3.0" } }, installed);

					expect(summary(getUpdatePlan())).withContext(`${react} ${JSON.stringify(installed)}`).toEqual([
						[NPM_REACT, "19.4.0", "~19.4.0", undefined],
						[NPM_WEBCOMPONENTS, "6.3.6", "~6.3.6", undefined]
					]);
				}
			});

			it("writes a range excluding the newer versions the lookahead rejected for their peers, also at the baseline (real React 19.x / grid lite history)", () => {
				publish(NPM_REACT, ["19.8.0", "19.8.1", "19.9.0"], "19.9.0",
					version => ({ peerDependencies: { [NPM_GRID_LITE]: version === "19.9.0" ? "~0.11.0" : "~0.9.0" } }));
				publish(NPM_GRID_LITE, ["0.9.0", "0.11.0"], "0.11.0");

				for (const [react, installed] of [
					["^19.8.0", {}], ["^19.8.0", { [NPM_REACT]: "19.8.1", [NPM_GRID_LITE]: "0.9.0" }], ["^19.8.1", {}]
				] as [string, Record<string, string>][]) {
					mockProject({ dependencies: { [NPM_REACT]: react, [NPM_GRID_LITE]: "~0.9.0" } }, installed);

					expect(summary(getUpdatePlan())).withContext(`${react} ${JSON.stringify(installed)}`).toEqual([
						[NPM_REACT, "19.8.1", "~19.8.1", undefined],
						[NPM_GRID_LITE, "0.9.0", undefined, undefined]
					]);
				}
			});

			it("records the newest version in the line only for packages held back below it (real React 19.x / grid lite history)", () => {
				publish(NPM_REACT, ["19.8.0", "19.8.1", "19.9.0"], "19.9.0",
					version => ({ peerDependencies: { [NPM_GRID_LITE]: version === "19.9.0" ? "~0.11.0" : "~0.9.0" } }));
				publish(NPM_GRID_LITE, ["0.9.0", "0.11.0"], "0.11.0");
				const plan = () => getUpdatePlan().map(c => [c.name, c.target, c.newRange, c.newest]);

				mockProject({ dependencies: { [NPM_REACT]: "~19.8.1", [NPM_GRID_LITE]: "~0.9.0" } }, { [NPM_REACT]: "19.8.1", [NPM_GRID_LITE]: "0.9.0" });
				expect(plan()).toEqual([[NPM_REACT, "19.8.1", undefined, "19.9.0"], [NPM_GRID_LITE, "0.9.0", undefined, undefined]]);

				mockProject({ dependencies: { [NPM_REACT]: "~19.8.0", [NPM_GRID_LITE]: "~0.9.0" } });
				expect(plan()).toEqual([[NPM_REACT, "19.8.1", "~19.8.1", "19.9.0"], [NPM_GRID_LITE, "0.9.0", undefined, undefined]]);

				mockProject({ dependencies: { [NPM_REACT]: "~19.8.1", [NPM_GRID_LITE]: "~0.11.0" } }, { [NPM_REACT]: "19.8.1", [NPM_GRID_LITE]: "0.11.0" });
				expect(plan()).toEqual([[NPM_REACT, "19.9.0", "~19.9.0", undefined], [NPM_GRID_LITE, "0.11.0", undefined, undefined]]);
			});

			it("updates past a dependency range no version in the line meets, reporting the nested copy instead of a conflict (real Dock Manager case)", () => {
				publish(NPM_REACT_DOCK_MANAGER, ["19.8.1", "19.9.0"], "19.9.0",
					version => ({ dependencies: { [NPM_DOCK_MANAGER]: version === "19.9.0" ? "~2.2.1" : "~2.1.2" } }));
				publish(NPM_DOCK_MANAGER, ["1.17.0", "1.19.0", "2.1.2", "2.2.1"], "2.2.1");
				const nested = "~2.2.1 (required by igniteui-react-dockmanager@19.9.0)";
				const plan = () => getUpdatePlan().map(c => [c.name, c.target, c.newRange, c.conflict, c.overridable, c.nested]);

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
				const plan = () => getUpdatePlan().map(c => [c.name, c.target, c.newRange, c.conflict, c.nested]);

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

				expect(getUpdatePlan().map(c => [c.name, c.target, c.newRange, c.conflict, c.nested])).toEqual([
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

				const webcomponents = getUpdatePlan()[2];

				expect([webcomponents.target, webcomponents.newRange, webcomponents.conflict, webcomponents.nested])
					.toEqual(["7.4.1", "~7.4.1", undefined, "~7.3.0 (required by igniteui-dockmanager@1.17.0)"]);
			});

			it("still conflicts on a peer range next to an unmet dependency range", () => {
				mockProject({ dependencies: { [NPM_REACT]: "~19.9.0", [NPM_DOCK_MANAGER]: "~1.17.0", [NPM_WEBCOMPONENTS]: "~6.5.0" } });
				publish(NPM_REACT, ["19.9.0"], "19.9.0", { dependencies: { [NPM_WEBCOMPONENTS]: "~7.4.1" } });
				publish(NPM_DOCK_MANAGER, ["1.17.0"], "1.17.0", { peerDependencies: { [NPM_WEBCOMPONENTS]: "7.4.0" } });
				publish(NPM_WEBCOMPONENTS, ["6.5.0", "6.5.1"], "7.4.1");

				const webcomponents = getUpdatePlan()[2];

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

				expect(summary(getUpdatePlan())).toEqual([
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

				const [core, , webcomponents] = getUpdatePlan();

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

				expect(summary(getUpdatePlan())).toEqual([
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

					expect(getUpdatePlan()[0].newRange).withContext(declared).toBe(ranges[declared]);
				}
			});

			it("warns about constraints on skipped packages", () => {
				mockProject({ dependencies: { "igniteui-react": "~19.6.0", "igniteui-webcomponents": "workspace:*" } });
				publish("igniteui-react", ["19.9.0"], "19.9.0", { dependencies: { "igniteui-webcomponents": "~7.4.1" } });

				getUpdatePlan();

				expect(Util.warn).toHaveBeenCalledOnceWith("igniteui-react@19.9.0 requires igniteui-webcomponents@~7.4.1, " +
					"which is not checked because igniteui-webcomponents is skipped.", "yellow");
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

					const blocked = entry(getUpdatePlan(), core);
					const forced = getUpdatePlan({ force: true });
					const forcedCore = entry(forced, core);

					expect([blocked.conflict, blocked.overridable]).toEqual([`no version in "^19.7.0" satisfies ${pinnedByCharts}`, true]);
					expect(forcedCore).toEqual(jasmine.objectContaining({
						target: "19.7.1", newRange: "~19.7.1", nextMajor: "20.0.0", forced: pinnedByCharts, manifest: { version: "19.7.1" }
					}));
					expect([forcedCore.conflict, forcedCore.overridable]).toEqual([undefined, undefined]);
					expect(summary([entry(forced, charts)])).toEqual([[charts, "19.6.0", undefined, undefined, undefined]]);
				}
			});

			it("keeps the declared range when the forced target is the baseline", () => {
				mockProject({ dependencies: { [charts]: "~19.6.0", [core]: "~19.7.1" } }, { [core]: "19.7.1" });
				publish(core, ["19.7.1"], "19.7.1");

				expect(summary(getUpdatePlan({ force: true }))).toEqual([
					[charts, "19.6.0", undefined, undefined, undefined],
					[core, "19.7.1", undefined, undefined, pinnedByCharts]
				]);
			});

			it("overrides incompatible ranges on a 0.x package within its minor line, leaving skipped packages skipped", () => {
				mockProject({ dependencies: {
					[NPM_REACT]: "~19.9.0", [NPM_WEBCOMPONENTS]: "~7.4.0", [NPM_GRID_LITE]: "~0.11.0", [NPM_DOCK_MANAGER]: "workspace:*"
				} });
				publish(NPM_REACT, ["19.9.0"], "19.9.0", { peerDependencies: { [NPM_GRID_LITE]: "0.11.0" } });
				publish(NPM_WEBCOMPONENTS, ["7.4.1"], "7.4.1", { peerDependencies: { [NPM_GRID_LITE]: "0.11.2" } });
				publish(NPM_GRID_LITE, ["0.11.0", "0.11.2", "0.11.4", "0.12.0"], "0.12.0");
				const ranges = "0.11.0 (required by igniteui-react@19.9.0), 0.11.2 (required by igniteui-webcomponents@7.4.1)";

				expect(summary(getUpdatePlan())).toEqual([
					[NPM_REACT, "19.9.0", undefined, undefined, undefined],
					[NPM_WEBCOMPONENTS, "7.4.1", "~7.4.1", undefined, undefined],
					[NPM_GRID_LITE, undefined, undefined, `no version in "^0.11.0" satisfies ${ranges}`, undefined],
					[NPM_DOCK_MANAGER, undefined, undefined, undefined, undefined]
				]);

				const plan = getUpdatePlan({ force: true });

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

				expect(summary(getUpdatePlan())).toEqual([
					[core, undefined, undefined, `no version in "^19.7.0" satisfies ${pinnedByCharts}`, undefined],
					[charts, "19.6.0", undefined, undefined, undefined],
					[NPM_WEBCOMPONENTS, "7.4.1", undefined, undefined, undefined],
					[NPM_GRID_LITE, "0.11.4", "^0.11.4", undefined, undefined]
				]);
				expect(summary(getUpdatePlan({ force: true }))).toEqual([
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

				const [blockedCore, , blockedWC] = getUpdatePlan();

				expect([blockedCore.overridable, blockedWC.overridable]).toEqual([false, false]);
				expect(summary(getUpdatePlan({ force: true }))).toEqual([
					[core, "19.7.0", undefined, undefined, pinnedByCharts],
					[charts, "19.6.0", undefined, undefined, undefined],
					[NPM_WEBCOMPONENTS, undefined, undefined, "--force can't override ranges that aren't valid versions: " +
						"npm:other@1 (required by igniteui-react-charts@19.6.0)", undefined]
				]);

				mockProject({ dependencies: { [core]: "~19.7.0", [charts]: "~19.6.0", [NPM_GRID_LITE]: "~0.11.0" } }, { [core]: "19.7.0" });
				publish(charts, ["19.6.0"], "19.6.0", { peerDependencies: { [core]: "19.6.0" } });
				publish(core, ["19.7.0", "19.7.1"], "19.7.1", version => version === "19.7.1" ? { peerDependencies: { [NPM_GRID_LITE]: "workspace:*" } } : {});
				publish(NPM_GRID_LITE, ["0.11.0"], "0.11.0");

				const blocked = getUpdatePlan();

				expect(entry(blocked, NPM_GRID_LITE).conflict).toBeUndefined();
				expect(entry(blocked, core).overridable).toBe(false);
				expect(summary(getUpdatePlan({ force: true }))).toEqual([
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

					expect(entry(getUpdatePlan(), NPM_WEBCOMPONENTS).conflict).withContext(installed).toBeDefined();
					expect(summary([entry(getUpdatePlan({ force: true }), NPM_WEBCOMPONENTS)])).withContext(installed).toEqual([
						[NPM_WEBCOMPONENTS, "7.4.3", "~7.4.3", undefined, "7.4.0 (required by igniteui-dockmanager@1.17.0)"]
					]);
				}
			});

			it("reports a dependency range a forced target puts on another package as a nested copy, not as forced", () => {
				mockProject({ dependencies: { [charts]: "~19.6.0", [core]: "~19.7.0", [NPM_WEBCOMPONENTS]: "^7.4.0" } },
					{ [core]: "19.7.0", [NPM_WEBCOMPONENTS]: "7.4.1" });
				publish(core, ["19.7.0", "19.7.1"], "19.7.1", version => version === "19.7.1" ? { dependencies: { [NPM_WEBCOMPONENTS]: "7.4.0" } } : {});
				publish(NPM_WEBCOMPONENTS, ["7.4.0", "7.4.1"], "7.4.1");

				expect(entry(getUpdatePlan(), NPM_WEBCOMPONENTS).nested).toBeUndefined();
				const webcomponents = entry(getUpdatePlan({ force: true }), NPM_WEBCOMPONENTS);
				expect([webcomponents.target, webcomponents.newRange, webcomponents.conflict, webcomponents.forced, webcomponents.nested])
					.toEqual(["7.4.1", undefined, undefined, undefined, "7.4.0 (required by igniteui-react-core@19.7.1)"]);
			});

			it("suggests --force only when it would update package.json", () => {
				publish(core, ["19.6.0", "19.7.0"], "19.7.0");
				publish(NPM_REACT, ["19.6.0", "19.9.0"], "19.9.0");

				mockProject({ dependencies: { [charts]: "~19.6.0", [core]: "~19.7.0" } }, { [core]: "19.7.0" });
				const blocked = entry(getUpdatePlan(), core);

				expect([blocked.target, blocked.conflict, blocked.overridable])
					.toEqual([undefined, `no version in "^19.7.0" satisfies ${pinnedByCharts}`, false]);
				expect(summary(getUpdatePlan({ force: true }))).toEqual([
					[charts, "19.6.0", undefined, undefined, undefined],
					[core, "19.7.0", undefined, undefined, pinnedByCharts]
				]);

				mockProject({ dependencies: { [charts]: "~19.6.0", [core]: "~19.7.0", [NPM_REACT]: "~19.6.0" } }, { [core]: "19.7.0" });

				expect(entry(getUpdatePlan(), core).overridable).toBe(true);
			});

			it("updates prerelease ranges within prerelease requirements, and forces an RC keeping the RC range it meets", () => {
				mockProject({ dependencies: { [NPM_REACT]: "^19.9.0-rc.1", [NPM_WEBCOMPONENTS]: "^7.5.0-rc.0" } },
					{ [NPM_REACT]: "19.9.0-rc.1", [NPM_WEBCOMPONENTS]: "7.5.0-rc.0" });
				publish(NPM_REACT, ["19.9.0-rc.1", "19.9.0-rc.2"], "19.8.0", { dependencies: { [NPM_WEBCOMPONENTS]: "^7.5.0-rc.1" } });
				publish(NPM_WEBCOMPONENTS, ["7.5.0-rc.0", "7.5.0-rc.1", "7.5.0-rc.2"], "7.4.1");

				const plan = getUpdatePlan();

				expect(summary(plan)).toEqual([
					[NPM_REACT, "19.9.0-rc.2", "^19.9.0-rc.2", undefined, undefined],
					[NPM_WEBCOMPONENTS, "7.5.0-rc.2", "^7.5.0-rc.2", undefined, undefined]
				]);
				expect(getUpdatePlan({ force: true })).toEqual(plan);

				mockProject({ dependencies: { [NPM_REACT]: "^19.9.0-rc.1", [NPM_DOCK_MANAGER]: "~1.17.0", [NPM_WEBCOMPONENTS]: "^7.5.0-rc.1" } },
					{ [NPM_REACT]: "19.9.0-rc.1", [NPM_WEBCOMPONENTS]: "7.5.0-rc.2" });
				publish(NPM_DOCK_MANAGER, ["1.17.0"], "1.17.0", { peerDependencies: { [NPM_WEBCOMPONENTS]: "7.5.0-rc.1" } });
				publish(NPM_WEBCOMPONENTS, ["7.5.0-rc.1", "7.5.0-rc.2", "7.5.0-rc.3"], "7.4.1");

				expect(entry(getUpdatePlan(), NPM_WEBCOMPONENTS).overridable).toBe(true);
				expect(summary([entry(getUpdatePlan({ force: true }), NPM_WEBCOMPONENTS)])).toEqual([
					[NPM_WEBCOMPONENTS, "7.5.0-rc.3", "^7.5.0-rc.3", undefined, "7.5.0-rc.1 (required by igniteui-dockmanager@1.17.0)"]
				]);
			});

			it("returns the same plan with and without --force when nothing conflicts", () => {
				mockProject(
					{ dependencies: { [charts]: "~19.5.2", [core]: "~19.5.2", [NPM_REACT]: "~19.3.0", [NPM_WEBCOMPONENTS]: "^6.3.0" } },
					{ [NPM_REACT]: "19.3.0", [NPM_WEBCOMPONENTS]: "6.3.3" }
				);
				publish(charts, ["19.5.2", "19.6.0"], "19.6.0", { peerDependencies: { [core]: "19.6.0" } });
				publish(core, ["19.5.2", "19.6.0", "19.7.0"], "19.7.0");
				publishReactWcHistory(["19.3.0", "19.4.0", "19.9.0"], ["6.3.3", "6.3.6", "7.4.1"]);

				const plan = getUpdatePlan();

				expect(plan.filter(c => c.newRange).length).toBe(4);
				expect(plan.some(c => c.conflict || c.forced)).toBe(false);
				expect(getUpdatePlan({ force: true })).toEqual(plan);
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

				const webcomponents = entry(getUpdatePlan({ force: true, verbose: true }), NPM_WEBCOMPONENTS);

				expect(webcomponents.forced).toBe("7.4.0 (required by igniteui-react-core@19.7.1)");
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

			getUpdatePlan();

			expect(Util.log).not.toHaveBeenCalled();

			getUpdatePlan({ verbose: true });

			expect((Util.log as jasmine.Spy).calls.allArgs()).toEqual([
				"igniteui-react-charts (dependencies): declared ~19.5.2, installed 19.5.2, baseline 19.5.2 (installed version)",
				"igniteui-react-core (dependencies): declared ~19.5.2, installed none, baseline 19.5.2 (declared minimum)",
				'igniteui-webcomponents (dependencies): declared workspace:*, installed none, skipped: unsupported spec "workspace:*" ' +
					"(only exact, ^, ~ and x-range versions are supported)",
				'npm view "igniteui-react-charts" versions dist-tags',
				'npm view "igniteui-react-charts@^19.5.2" version dependencies peerDependencies deprecated engines',
				'igniteui-react-charts: 2 version(s) in "^19.5.2", latest 19.6.0',
				'npm view "igniteui-react-core" versions dist-tags',
				'npm view "igniteui-react-core@^19.5.2" version dependencies peerDependencies deprecated engines',
				'igniteui-react-core: 3 version(s) in "^19.5.2", latest 20.0.0 (newer major, not applied)',
				'igniteui-react-charts: target 19.6.0 (newest in "^19.5.2": 19.6.0), range ~19.5.2 -> ~19.6.0',
				'igniteui-react-core: target 19.6.0 (newest in "^19.5.2": 19.7.0), range ~19.5.2 -> 19.6.0, ' +
					"requirements: 19.6.0 (required by igniteui-react-charts@19.6.0); held back by 19.6.0 (required by igniteui-react-charts@19.6.0)"
			].map(message => [message, "gray"]));
		});

		it("explains with --verbose why the lookahead kept an older target", () => {
			spyOn(Util, "log");
			mockProject({ dependencies: { [NPM_REACT]: "~19.3.0", [NPM_WEBCOMPONENTS]: "^6.3.0" } },
				{ [NPM_REACT]: "19.3.0", [NPM_WEBCOMPONENTS]: "6.3.3" });
			publishReactWcHistory(["19.3.0", "19.4.0", "19.9.0"], ["6.3.3", "6.3.6", "7.4.1"]);

			getUpdatePlan({ verbose: true });

			expect(Util.log).toHaveBeenCalledWith('igniteui-react: target 19.4.0 (newest in "^19.3.0": 19.9.0), range ~19.3.0 -> ~19.4.0; ' +
				'held back by 19.9.0 requires igniteui-webcomponents@~7.4.1, outside "^6.3.3"', "gray");
			expect(Util.log).toHaveBeenCalledWith('igniteui-webcomponents: target 6.3.6 (newest in "^6.3.3": 6.3.6), range ^6.3.0 -> ~6.3.6, ' +
				"requirements: ~6.3.6 (required by igniteui-react@19.4.0)", "gray");
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
			expect(Util.execSync).not.toHaveBeenCalled();
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
