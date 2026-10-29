import {
	Config, GoogleAnalytics, GoogleAnalyticsParameters, InquirerWrapper, PackageManager, ProjectConfig, Util
} from "@igniteui/cli-core";
import * as fs from "fs";
import * as cli from "../../packages/cli/lib/cli";
import { stubAngularCli } from "../helpers/angular-cli-stub";
import { deleteAll, filesDiff, resetSpy } from "../helpers/utils";

describe("New command", () => {
	let testFolder;

	beforeEach(() => {
		spyOn(console, "log");
		spyOn(console, "error");
		spyOn(GoogleAnalytics, "post");
		spyOn(PackageManager, "installPackages");
		// Angular projects are created by the Angular CLI
		stubAngularCli();
		// isolate from the user's global config, e.g. custom templates that log errors (extra GA posts)
		spyOn(ProjectConfig, "globalConfig").and.returnValue({} as Config);
		spyOn(InquirerWrapper, "exclusiveCheckbox").and.returnValue(Promise.resolve(["none"]));
		process.chdir("./output");
	});

	afterEach(() => {
		// clean test folder:
		deleteAll(testFolder);
		fs.rmdirSync(testFolder);
		process.chdir("../");
	});

	it("Creates jQuery project", async () => {
		await cli.run(["new", "jQuery Proj", "--framework=jquery"]);

		expect(fs.existsSync("./jQuery Proj")).toBeTruthy();
		expect(filesDiff("../templates/jquery/js/projects/empty/files", "./jQuery Proj")).toEqual([]);
		const packageText = fs.readFileSync("./jQuery Proj/package.json", "utf-8");
		expect(JSON.parse(packageText).name).toEqual("j-query-proj");
		expect(fs.existsSync("./jQuery Proj/.gitignore")).toBeTruthy();
		testFolder = "./jQuery Proj";

		let expectedPrams: GoogleAnalyticsParameters = {
			t: "screenview",
			cd: "New"
		};
		expect(GoogleAnalytics.post).toHaveBeenCalledWith(expectedPrams);
		expect(PackageManager.installPackages).toHaveBeenCalled();

		expectedPrams = {
			t: "event",
			ec: "$ig new",
			ea: "project name: jQuery Proj; framework: jquery; project type: js; theme: infragistics; skip-git: false",
			cd1: "jquery",
			cd2: "js",
			cd3: "jQuery Proj",
			cd11: false,
			cd14: "infragistics"
		};
		expect(GoogleAnalytics.post).toHaveBeenCalledWith(expectedPrams);
		expect(GoogleAnalytics.post).toHaveBeenCalledTimes(2);
	});

	it("Creates React project", async () => {
		// process.argv = ["new", "reactProj", "--framework=react"];

		await cli.run(["new", "React Proj", "--framework=react", "--skip-install"]);

		expect(fs.existsSync("./React Proj")).toBeTruthy();
		expect(filesDiff("../templates/react/igr-ts/projects/empty/files", "./React Proj")).toEqual([]);
		const packageText = fs.readFileSync("./React Proj/package.json", "utf-8");
		expect(JSON.parse(packageText).name).toEqual("react-proj");
		expect(fs.existsSync("./React Proj/.gitignore")).toBeTruthy();
		testFolder = "./React Proj";
	});

	it("Creates Ignite UI for Angular project", async () => {

		await cli.run(["new", "Ignite UI for Angular", "--framework=angular", "--type=igx-ts", "--theme=default", "--skip-install"]);

		expect(fs.existsSync("./Ignite UI for Angular")).toBeTruthy();
		expect(filesDiff("../templates/angular/igx-ts/projects/empty/files", "./Ignite UI for Angular")).toEqual([]);
		const packageText = fs.readFileSync("./Ignite UI for Angular/package.json", "utf-8");
		expect(JSON.parse(packageText).name).toEqual("ignite-ui-for-angular");
		expect(fs.existsSync("./Ignite UI for Angular/.gitignore")).toBeTruthy();
		// the scaffold installs the packages
		expect(JSON.parse(fs.readFileSync("./Ignite UI for Angular/ignite-ui-cli.json", "utf-8")).packagesInstalled).toBeTrue();
		testFolder = "./Ignite UI for Angular";
	});

	it("Creates Ignite UI for Angular project by default", async () => {

		await cli.run(["new", "Default Angular Project", "--theme=default", "--skip-install"]);

		expect(fs.existsSync("./Default Angular Project")).toBeTruthy();
		expect(filesDiff("../templates/angular/igx-ts/projects/empty/files", "./Default Angular Project")).toEqual([]);
		const packageText = fs.readFileSync("./Default Angular Project/package.json", "utf-8");
		expect(JSON.parse(packageText).name).toEqual("default-angular-project");
		expect(fs.existsSync("./Default Angular Project/.gitignore")).toBeTruthy();
		testFolder = "./Default Angular Project";
	});

	it("Should not work on existing folders", async () => {
		fs.mkdirSync("testProj");
		await cli.run(["new", "testProj", "--skip-install"]);
		expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Folder "testProj" already exists!/));

		let expectedPrams: GoogleAnalyticsParameters = {
			t: "screenview",
			cd: "New"
		};
		expect(GoogleAnalytics.post).toHaveBeenCalledWith(expectedPrams);

		expectedPrams = {
			t: "screenview",
			cd: "error: Folder \"testProj\" already exists!"
		};
		expect(GoogleAnalytics.post).toHaveBeenCalledWith(expectedPrams);
		expect(GoogleAnalytics.post).toHaveBeenCalledTimes(2);
		fs.rmdirSync("testProj");

		await cli.run(["new", "testProj2", "--skip-install"]);
		expect(fs.existsSync("./testProj2")).toBeTruthy();
		expect(fs.existsSync("./testProj2/ignite-ui-cli.json")).toBeTruthy();

		fs.writeFileSync("./testProj2/ignite-ui-cli.json", "text");
		await cli.run(["new", "testProj2"]);
		expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Folder "testProj2" already exists!/));
		expect(fs.readFileSync("./testProj2/ignite-ui-cli.json").toString())
			.toEqual("text", "Shouldn't overwrite existing project files!");

		resetSpy(console.error);
		await cli.run(["new", "   testProj2  \t  ", "--skip-install"]);
		expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Folder "testProj2" already exists!/));
		expect(fs.readFileSync("./testProj2/ignite-ui-cli.json").toString())
			.toEqual("text", "Shouldn't overwrite existing project files!");

		testFolder = "./testProj2";
	});

	it("Git Status", async () => {
		const projectName = "angularProj";
		await cli.run(["new", projectName, "--framework=angular", "--type=igx-ts", "--theme=default", "--skip-install"]);

		process.chdir(projectName);
		expect(fs.existsSync(".git")).toBeTruthy();
		expect(Util.execSync("git log -1 --pretty=format:'%s'").toString())
			.toMatch("Initial commit for project");
		process.chdir("../");
		testFolder = "./angularProj";
	});

	it("Skip Git with command option; Angular projects install packages even with --skip-install", async () => {
		spyOn(Util, "gitInit");
		spyOn(console, "warn");
		const projectName = "angularProj";
		await cli.run(["new", projectName, "--framework=angular", "--type=igx-ts", "--skip-git", "--skip-install", "--theme=default"]);
		expect(Util.gitInit).not.toHaveBeenCalled();
		expect(fs.existsSync("./" + projectName + "/.git")).not.toBeTruthy();
		expect(console.warn).toHaveBeenCalledWith(jasmine.stringMatching(/--skip-install does not apply to the initial setup/));
		expect(Util.execSync).toHaveBeenCalledWith(jasmine.stringMatching(/^npm install /), jasmine.anything());

		testFolder = projectName;
	});

	it("Creates project with single word name", async () => {
		spyOn(Util, "gitInit");
		const projectName = "a";
		await cli.run(["new", projectName, "--framework=jquery", "--skip-install"]);

		expect(Util.gitInit).toHaveBeenCalled();
		//TODO: read entire structure from ./templates and verify everything is copied over
		expect(fs.existsSync("./a")).toBeTruthy();

		testFolder = "./a";
	});
});
