import { IFileSystem } from "../../packages/core/types";
import { App, Util } from "../../packages/core/util";
import {
	FEED_ANGULAR, FEED_REACT_GRIDS, NPM_ANGULAR, NPM_CLI, NPM_GRID_LITE, NPM_REACT, NPM_REACT_GRIDS, NPM_WEBCOMPONENTS
} from "../../packages/core/update/package-resolve";
import { getUpdateCandidates, UPDATABLE_PACKAGES } from "../../packages/core/update/version-update";

describe("Unit - version update", () => {
	let fs: jasmine.SpyObj<IFileSystem>;

	/** Mocks `./package.json` and the `node_modules` manifests of the given installed versions. */
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
		expect(Util.execSync).not.toHaveBeenCalled();
	});

	it("UPDATABLE_PACKAGES includes React/WC trial and licensed names, OSS packages, grid lite and the CLI, but not Angular", () => {
		for (const name of [NPM_REACT_GRIDS, FEED_REACT_GRIDS, NPM_REACT, NPM_WEBCOMPONENTS, NPM_GRID_LITE, NPM_CLI]) {
			expect(UPDATABLE_PACKAGES.has(name)).withContext(name).toBe(true);
		}
		expect(UPDATABLE_PACKAGES.has(NPM_ANGULAR)).toBe(false);
		expect(UPDATABLE_PACKAGES.has(FEED_ANGULAR)).toBe(false);
	});

	describe("getUpdateCandidates", () => {
		it("collects only allowlisted direct dependencies and devDependencies", () => {
			mockProject({
				dependencies: {
					"igniteui-react": "~19.6.0",
					"@infragistics/igniteui-react-grids": "~19.6.0",
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
				["@infragistics/igniteui-react-grids", "dependencies"],
				["igniteui-grid-lite", "dependencies"],
				["igniteui-cli", "devDependencies"]
			]);
		});

		it("keeps both trial and licensed entries of the same product", () => {
			mockProject({ dependencies: { "igniteui-react-grids": "~19.5.0", "@infragistics/igniteui-react-grids": "~19.6.0" } });

			expect(getUpdateCandidates().map(c => c.name)).toEqual(["igniteui-react-grids", "@infragistics/igniteui-react-grids"]);
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

		it("uses the declared minimum and warns when the installed version is older or newer than the declared range", () => {
			mockProject(
				{ dependencies: { "igniteui-react": "^19.6.0", "igniteui-webcomponents": "^6.5.0", "igniteui-grid-lite": "~0.11.0" } },
				{ "igniteui-react": "19.5.2", "igniteui-webcomponents": "7.4.1", "igniteui-grid-lite": "0.11.4" }
			);

			expect(getUpdateCandidates().map(c => [c.name, c.installed, c.baseline])).toEqual([
				["igniteui-react", "19.5.2", "19.6.0"],
				["igniteui-webcomponents", "7.4.1", "6.5.0"],
				["igniteui-grid-lite", "0.11.4", "0.11.4"]
			]);
			expect(Util.warn).toHaveBeenCalledTimes(2);
			expect(Util.warn).toHaveBeenCalledWith(jasmine.stringMatching(/out of sync.*igniteui-react .*19\.5\.2/), "yellow");
			expect(Util.warn).toHaveBeenCalledWith(jasmine.stringMatching(/out of sync.*igniteui-webcomponents .*7\.4\.1/), "yellow");
		});

		it("supports exact, ^, ~ and x-range specs, using the declared minimum when not installed", () => {
			const baselines = {
				"19.6.0": "19.6.0", "^19.6.0": "19.6.0", "~19.6.0": "19.6.0", "^19.9.0-rc.1": "19.9.0-rc.1",
				"19": "19.0.0", "19.x": "19.0.0", "19.6.x": "19.6.0", "~19.6": "19.6.0", "0.11.x": "0.11.0"
			};
			for (const declared of Object.keys(baselines)) {
				mockProject({ dependencies: { "igniteui-react": declared } });

				const [candidate] = getUpdateCandidates();

				expect(candidate.skipped).withContext(declared).toBeUndefined();
				expect(candidate.installed).withContext(declared).toBeUndefined();
				expect(candidate.baseline).withContext(declared).toBe(baselines[declared]);
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
				expect(candidate.baseline).withContext(declared).toBeUndefined();
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
					// licensed name and prefix matches must not warn for igniteui-react-grids / igniteui-react
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
});
