import * as semver from "semver";
import { Config, IFileSystem } from "../../packages/core/types";
import { App, ProjectConfig, Util } from "../../packages/core/util";
import {
	FEED_ANGULAR, FEED_REACT_GRIDS, FEED_WEBCOMPONENTS_GRIDS, NPM_ANGULAR, NPM_CLI, NPM_DOCK_MANAGER, NPM_GRID_LITE, NPM_REACT,
	NPM_REACT_GRIDS, NPM_WEBCOMPONENTS, NPM_WEBCOMPONENTS_GRIDS
} from "../../packages/core/update/package-resolve";
import { getUpdateCandidates, getUpdatePlan, PackageUpdate, UPDATABLE_PACKAGES } from "../../packages/core/update/version-update";

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

	afterEach(() => {
		expect(fs.writeFile).not.toHaveBeenCalled();
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
			// plain ranges never match prereleases
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
					// must not match igniteui-react-grids / igniteui-react
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
				// like npm: one entry per matching version, a bare version string when it has none of the requested fields
				const matches = ([] as string[]).concat(versions).filter(v => semver.satisfies(v, range)).map(version => {
					const fields = typeof manifest === "function" ? manifest(version) : manifest;
					return fields ? { version, ...fields } : version;
				});
				return JSON.stringify(matches.length === 1 ? matches[0] : matches);
			});
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

				// core first: it takes 19.7.0 in the first pass and moves back to 19.6.0 once charts has a target
				mockProject({ dependencies: { "igniteui-react-core": "~19.5.2", "igniteui-react-charts": "~19.5.2" } });
				expect(summary(getUpdatePlan())).toEqual([core, charts]);
			});

			it("keeps an older dependent that works with the dependency's major and narrows its range (real React 19.x / WC history)", () => {
				mockProject(
					{ dependencies: { "igniteui-react": "~19.3.0", "igniteui-webcomponents": "^6.3.0" } },
					{ "igniteui-react": "19.3.0", "igniteui-webcomponents": "6.3.3" }
				);
				const wcRanges: Record<string, string> = {
					"19.3.0": "~6.3.3", "19.3.2": "~6.3.6", "19.4.0": "~6.3.6", "19.5.0": "~7.0.0", "19.9.0": "~7.4.1"
				};
				publish("igniteui-react", Object.keys(wcRanges), "19.9.0",
					version => ({ dependencies: { "igniteui-webcomponents": wcRanges[version] } }));
				publish("igniteui-webcomponents", ["6.3.3", "6.3.6", "6.5.1", "7.0.0", "7.4.1"], "7.4.1");

				expect(summary(getUpdatePlan())).toEqual([
					["igniteui-react", "19.4.0", "~19.4.0", undefined],
					["igniteui-webcomponents", "6.3.6", "~6.3.6", undefined]
				]);
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
				// core first, so it gets a target in the first pass that charts later rules out
				mockProject(
					{ dependencies: { "igniteui-react-core": "~19.7.0", "igniteui-react-charts": "~19.6.0", "igniteui-webcomponents": "^7.2.0" } },
					{ "igniteui-react-core": "19.7.0" }
				);
				publish("igniteui-react-charts", ["19.6.0"], "19.6.0",
					{ peerDependencies: { "igniteui-react-core": "19.6.0" }, dependencies: { "igniteui-webcomponents": "npm:other@1" } });
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
	});
});
