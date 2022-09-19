// tslint:disable:object-literal-sort-keys
import { GoogleAnalytics, GoogleAnalyticsParameters, Package, ProjectConfig, Util } from "@igniteui/cli-core";
import * as fs from "fs-extra";
import { parse } from "path";
import * as cli from "../../packages/cli/lib/cli";

describe("Unit - Update command", () => {
	let testFolder = parse(__filename).name;
	// tslint:disable:no-console
	beforeEach(() => {
		spyOn(console, "log");
		spyOn(console, "error");
		spyOn(GoogleAnalytics, "post");

		// test folder, w/ existing check:
		while (fs.existsSync(`./output/${testFolder}`)) {
			testFolder += 1;
		}
		fs.mkdirSync(`./output/${testFolder}`);
		process.chdir(`./output/${testFolder}`);
	});

	afterEach(() => {
		// clean test folder:
		process.chdir("../../");
		fs.rmdirSync(`./output/${testFolder}`);
	});

	it("Should not work without a project", async done => {
		await cli.run(["update"]);

		expect(console.error).toHaveBeenCalledWith(
			jasmine.stringMatching(/Update command is supported only on existing project created with igniteui-cli\s*/)
		);
		expect(console.log).toHaveBeenCalledTimes(0);
		let expectedPrams: GoogleAnalyticsParameters = {
			t: "screenview",
			cd: "Update"
		};
		expect(GoogleAnalytics.post).toHaveBeenCalledWith(expectedPrams);

		expectedPrams = {
			t: "screenview",
			cd: "error: Update command is supported only on existing project created with igniteui-cli"
		};
		expect(GoogleAnalytics.post).toHaveBeenCalledWith(expectedPrams);
		expect(GoogleAnalytics.post).toHaveBeenCalledTimes(2);
		done();
	});

	it("Should not work in a dirty working tree", async done => {
		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({ project: { framework: "angular" } }));
		spyOn(Util, "checkWorkingTreeIsClean").and.returnValue(false);
		await cli.run(["update"]);

		expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Update command can only be executed on a clean Git state\s*/));
		fs.unlinkSync(ProjectConfig.configFile);
		done();
	});

	it("Should not work with wrong framework", async done => {
		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({ project: { framework: "some-framework" } }));
		spyOn(Util, "checkWorkingTreeIsClean").and.returnValue(true);
		await cli.run(["update"]);

		expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Framework not supported\s*/));
		fs.unlinkSync(ProjectConfig.configFile);
		done();
	});

	it("should list all packages for update if called without args", async done => {
		spyOn(Util, "checkWorkingTreeIsClean").and.returnValue(true);
		fs.writeFileSync(ProjectConfig.configFile, JSON.stringify({
			project: {
				framework: "angular",
				sourceRoot: "./"
			}
		}));
		fs.writeFileSync("package.json", JSON.stringify({
			name: "some-package",
			version: "12.3.45",
			dependencies: {},
			devDependencies: {},
			igCli: {
				migrations: "some/path"
			}
		}));

		const packages: Package[] = [{
			name: "some-package",
			path: "test/test",
			version: "12.3.45",
			versionAfterUpdate: "12.12.12",
			package: {}
		}];
		spyOn(Util, "lookUpPackagesForUpdate").and.returnValue(packages);
		spyOn(Util, "log");
		await cli.run(["update"]);

		expect(Util.log).toHaveBeenCalledTimes(5);

		fs.unlinkSync("package.json");
		fs.unlinkSync(ProjectConfig.configFile);
		done();
	});

	it("should successfully update a package to provided version", async done => {
		// TODO
		done();
	});

	it("should successfully call migrations up to a given version", async done => {
		// TODO
		done();
	});
});
