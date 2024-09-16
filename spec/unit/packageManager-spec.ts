import child_process from "child_process";
import path from "path";
import { App, Config, IFileSystem, PackageManager, ProjectConfig, Util } from "@igniteui/cli-core";
import { resetSpy } from "../helpers/utils";

describe("Unit - Package Manager", () => {
	it("ensureIgniteUISource - Should run through properly when install now is set to true", async done => {
		const mockRequire = {
			dependencies: {
				"ignite-ui": "20.1"
			}
		};
		const mockTemplateMgr = jasmine.createSpyObj("mockTemplateMgr", {
			getProjectLibrary: {
				getProject() {
					return {
						upgradeIgniteUIPackages: () => Promise.resolve(false)
					};
				},
				projectIds: ["empty"]
			}
		});
		spyOn(ProjectConfig, "localConfig").and.returnValue({
			igPackageRegistry: "trial",
			project: {
				components: ["igGrid", "igExcel"],
				igniteuiSource: `./node_modules/ignite-ui`,
				isBundle: false
			}
		});
		spyOn(ProjectConfig, "setConfig");
		spyOn(PackageManager, "addPackage").and.returnValue(true);
		spyOn(path, "join").and.returnValue("fakemodule.json");
		const mockFs: Partial<IFileSystem> = {
			readFile: jasmine.createSpy().and.returnValue(JSON.stringify(mockRequire)),
			writeFile: jasmine.createSpy()
		};
		// should ignore already installed
		spyOn(App.container, "get").and.returnValue(mockFs);
		spyOn(Util, "execSync").and.callFake((cmd: string, opts) => {
			if (cmd.includes("whoami")) {
				throw new Error("");
			}
			return "";
		});
		spyOn(child_process, "spawnSync").and.returnValues({
			status: 0
		});
		spyOn(Util, "log");
		spyOn(PackageManager, "removePackage");
		await PackageManager.ensureIgniteUISource(true, mockTemplateMgr, true);
		expect(Util.log).toHaveBeenCalledTimes(4);
		expect(Util.log).toHaveBeenCalledWith(
			"The project you've created requires the full version of Ignite UI from Infragistics private feed.",
			"gray"
		);
		expect(Util.log).toHaveBeenCalledWith(
			"We are initiating the login process for you. This will be required only once per environment.",
			"gray"
		);
		expect(Util.log).toHaveBeenCalledWith(
			"Adding a registry user account for trial",
			"yellow"
		);
		expect(Util.log).toHaveBeenCalledWith(
			`Use your Infragistics account credentials. "@" is not supported, ` +
			`use "!!", so "username@infragistics.com" should be entered as "username!!infragistics.com"`,
			"yellow"
		);
		expect(path.join).toHaveBeenCalled();
		expect(child_process.spawnSync).toHaveBeenCalledWith(
			/^win/.test(process.platform) ? "npm.cmd" : "npm",
			["adduser", `--registry=trial`, `--scope=@infragistics`, `--always-auth`],
			{
				stdio: "inherit"
			}
		);
		expect(Util.execSync).toHaveBeenCalledWith("npm config set @infragistics:registry trial");
		expect(PackageManager.removePackage).toHaveBeenCalled();
		expect(PackageManager.addPackage).toHaveBeenCalledWith(`@infragistics/ignite-ui-full@"20.1"`, true);
		done();
	});
	it("ensureIgniteUISource - Should run through properly when install = true && package error", async done => {
		class TestPackageManager extends PackageManager {
			public static getPackageJSON(): any { }
		}
		const mockRequire = {
			dependencies: {
				"ignite-ui": "20.1"
			}
		};
		spyOn(require("module"), "_load").and.returnValue(mockRequire);
		const mockTemplateMgr = jasmine.createSpyObj("mockTemplateMgr", {
			getProjectLibrary: {
				getProject() {
					return { upgradeIgniteUIPackages: () => Promise.resolve(false) };
				},
				projectIds: ["empty"]
			}
		});
		spyOn(ProjectConfig, "localConfig").and.returnValue({
			igPackageRegistry: "trial",
			project: {
				components: ["igGrid", "igExcel"],
				igniteuiSource: `./node_modules/ignite-ui`,
				isBundle: false
			}
		});
		spyOn(ProjectConfig, "setConfig");
		spyOn(TestPackageManager, "addPackage").and.returnValue(true);
		spyOn(Util, "execSync").and.throwError("no user");
		spyOn(Util, "log");
		spyOn(TestPackageManager, "removePackage");
		spyOn(TestPackageManager, "getPackageJSON").and.callFake(() => mockRequire);
		spyOn(child_process, "spawnSync").and.returnValues({ status: 1 });
		await TestPackageManager.ensureIgniteUISource(true, mockTemplateMgr, true);
		expect(ProjectConfig.localConfig).toHaveBeenCalled();
		expect(Util.log).toHaveBeenCalledTimes(12);
		expect(Util.log).toHaveBeenCalledWith(
			"The project you've created requires the full version of Ignite UI from Infragistics private feed.",
			"gray"
		); // x2
		expect(Util.log).toHaveBeenCalledWith(
			"We are initiating the login process for you. This will be required only once per environment.",
			"gray"
		); // x2
		expect(Util.log).toHaveBeenCalledWith(
			"Adding a registry user account for trial",
			"yellow"
		); // x2
		expect(Util.log).toHaveBeenCalledWith(
			`Use your Infragistics account credentials. "@" is not supported, ` +
			`use "!!", so "username@infragistics.com" should be entered as "username!!infragistics.com"`,
			"yellow"
		); // x2
		expect(Util.log).toHaveBeenCalledWith(
			"Something went wrong, " +
			"please follow the steps in this guide: https://www.igniteui.com/help/using-ignite-ui-npm-packages",
			"red"
		); // x2
		expect(Util.log).toHaveBeenCalledWith(
			"Something went wrong with upgrading Ignite UI to the full version. " +
			`As a result only views using OSS components will run correctly.`,
			"yellow"
		); // x1
		expect(Util.log).toHaveBeenCalledWith(
			"Please visit https://www.igniteui.com/help/using-ignite-ui-npm-packages " +
			`for instructions on how to install the full package.`,
			"yellow"
		); // x1
		expect(child_process.spawnSync).toHaveBeenCalledWith(
			/^win/.test(process.platform) ? "npm.cmd" : "npm",
			["adduser", `--registry=trial`, `--scope=@infragistics`, `--always-auth`],
			{
				stdio: "inherit"
			}
		);
		expect(Util.execSync).toHaveBeenCalledTimes(2);
		expect(Util.execSync).toHaveBeenCalledWith(`npm whoami --registry=trial`, { stdio: "pipe", encoding: "utf8" });
		done();
	});
	it("ensureIgniteUISource - Should run through properly when install now is set to false", async done => {
		spyOn(Util, "log");
		const mockTemplateMgr = jasmine.createSpyObj("mockTemplateMgr", {
			getProjectLibrary: {
				getProject() {
					return {
						upgradeIgniteUIPackages: () => Promise.resolve(false)
					};
				}
			}
		});
		spyOn(ProjectConfig, "localConfig").and.returnValue({
			igPackageRegistry: "trial",
			project: {
				components: ["igGrid", "igExcel"],
				igniteuiSource: `./node_modules/ignite-ui`,
				isBundle: false
			}
		});
		await PackageManager.ensureIgniteUISource(false, mockTemplateMgr, true);
		expect(ProjectConfig.localConfig).toHaveBeenCalled();
		expect(Util.log).toHaveBeenCalledWith(
			"Template(s) that require the full version of Ignite UI found in the project. " +
			"You might be prompted for credentials on build to install it.", "yellow");
		done();
	});

	it("ensureIgniteUISource - Should respect oss version when upgrading", async done => {
		class TestPackageManager extends PackageManager {
			public static ensureRegistryUser(config: Config): boolean { return true; }
			public static getPackageJSON(): any { }
		}
		const mockDeps = {
			dependencies: {
				"ignite-ui": "~20.1"
			}
		};
		const mockTemplateMgr = jasmine.createSpyObj("mockTemplateMgr", {
			getProjectLibrary: {
				getProject() {
					return { upgradeIgniteUIPackages: () => Promise.resolve(true) };
				},
				projectIds: ["empty"]
			}
		});
		spyOn(ProjectConfig, "localConfig").and.callFake(() => {
			return {
				project: {
					components: ["igGrid", "igExcel"],
					igniteuiSource: `./node_modules/ignite-ui`,
					isBundle: false
				}
			};
		});
		spyOn(ProjectConfig, "setConfig");
		spyOn(TestPackageManager, "addPackage").and.callThrough();
		spyOn(Util, "execSync");
		spyOn(Util, "log");
		spyOn(TestPackageManager, "removePackage");
		spyOn(TestPackageManager, "getPackageJSON").and.callFake(() => mockDeps);

		await TestPackageManager.ensureIgniteUISource(true, mockTemplateMgr, true);
		expect(TestPackageManager.addPackage).toHaveBeenCalledWith(`@infragistics/ignite-ui-full@"~20.1"`, true);
		expect(Util.execSync).toHaveBeenCalledWith(
			`npm install @infragistics/ignite-ui-full@"~20.1" --quiet --save`,
			jasmine.any(Object)
		);
		expect(TestPackageManager.removePackage).toHaveBeenCalledWith("ignite-ui", true);

		mockDeps.dependencies["ignite-ui"] = "^17.1";
		await TestPackageManager.ensureIgniteUISource(true, mockTemplateMgr, true);
		expect(TestPackageManager.addPackage).toHaveBeenCalledWith(`@infragistics/ignite-ui-full@"^17.1"`, true);
		expect(Util.execSync).toHaveBeenCalledWith(
			`npm install @infragistics/ignite-ui-full@"^17.1" --quiet --save`,
			jasmine.any(Object)
		);

		mockDeps.dependencies["ignite-ui"] = ">=0.1.0 <0.2.0";
		await TestPackageManager.ensureIgniteUISource(true, mockTemplateMgr, true);
		expect(TestPackageManager.addPackage).toHaveBeenCalledWith(`@infragistics/ignite-ui-full@">=0.1.0 <0.2.0"`, true);
		expect(Util.execSync).toHaveBeenCalledWith(
			`npm install @infragistics/ignite-ui-full@">=0.1.0 <0.2.0" --quiet --save`,
			jasmine.any(Object)
		);
		done();
	});

	it("Should run installPackages properly with error code", async done => {
		spyOn(ProjectConfig, "localConfig").and.returnValue({
			packagesInstalled: false
		});
		spyOn(Util, "log");
		spyOn(Util, "execSync").and.callFake(() => {
			const err = new Error("Example");
			err["status"] = 1;
			throw err;
		});
		spyOn(ProjectConfig, "setConfig");
		await PackageManager.installPackages(true);
		expect(ProjectConfig.localConfig).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledTimes(3);
		expect(Util.log).toHaveBeenCalledWith(`Installing npm packages`);
		expect(Util.log).toHaveBeenCalledWith(`Error installing npm packages.`);
		expect(Util.log).toHaveBeenCalledWith(`Example`);
		expect(Util.execSync).toHaveBeenCalledWith(`npm install --quiet`,
			{ stdio: ["inherit"], killSignal: "SIGINT" });
		expect(ProjectConfig.setConfig).toHaveBeenCalledWith({ packagesInstalled: true });
		done();
	});
	it("Should run installPackages properly without error code", async done => {
		spyOn(ProjectConfig, "localConfig").and.returnValue({
			packagesInstalled: false
		});
		spyOn(Util, "log");
		spyOn(Util, "execSync").and.returnValue("");
		spyOn(ProjectConfig, "setConfig");
		await PackageManager.installPackages(true);
		expect(ProjectConfig.localConfig).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledTimes(2);
		expect(Util.log).toHaveBeenCalledWith(`Installing npm packages`);
		expect(Util.log).toHaveBeenCalledWith(`Packages installed successfully`);
		expect(Util.execSync).toHaveBeenCalledWith(`npm install --quiet`,
			{ stdio: ["inherit"], killSignal: "SIGINT" });
		expect(ProjectConfig.setConfig).toHaveBeenCalledWith({ packagesInstalled: true });
		done();
	});
	it("Should exit on installPackages if child install is terminated", async done => {
		spyOn(ProjectConfig, "localConfig").and.returnValue({
			packagesInstalled: false,
			skipAnalytic: true
		});
		spyOn(Util, "log");
		spyOn(ProjectConfig, "setConfig");
		spyOn(process, "exit");
		spyOn(Util, "execSync").and.callFake(() => {
			const err = new Error("Error");
			err["status"] = 3221225786; // ctl + c while child install is running
			throw err;
		});
		await PackageManager.installPackages(true);
		expect(Util.log).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledWith(`Installing npm packages`);
		expect(Util.execSync).toHaveBeenCalledWith(`npm install --quiet`,
			{ stdio: ["inherit"], killSignal: "SIGINT" });
		expect(process.exit).toHaveBeenCalled();
		expect(ProjectConfig.setConfig).toHaveBeenCalledTimes(0);
		done();
	});
	it("Should run removePackage properly with error code", async done => {
		spyOn(Util, "log");
		spyOn(Util, "execSync").and.callFake(() => {
			const err = new Error("Error");
			err["status"] = 1;
			throw err;
		});
		PackageManager.removePackage("example-package", true);
		expect(Util.log).toHaveBeenCalledTimes(2);
		expect(Util.log).toHaveBeenCalledWith(`Error uninstalling package example-package with npm`);
		expect(Util.log).toHaveBeenCalledWith(`Error`);
		expect(Util.execSync).toHaveBeenCalledWith(
			`npm uninstall example-package --quiet --save`, { stdio: "pipe", encoding: "utf8" }
		);
		done();
	});
	it("Should run removePackage properly without error code", async done => {
		spyOn(Util, "log");
		spyOn(Util, "execSync").and.returnValue("");
		PackageManager.removePackage("example-package");
		expect(Util.log).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledWith(`Package example-package uninstalled successfully`);
		expect(Util.execSync).toHaveBeenCalledWith(
			`npm uninstall example-package --quiet --save`, { stdio: "pipe", encoding: "utf8" });
		done();
	});
	it("Should run addPackage properly with error code", async done => {
		spyOn(Util, "log");
		spyOn(Util, "execSync").and.callFake(() => {
			const err = new Error("Error");
			err["status"] = 1;
			throw err;
		});
		PackageManager.addPackage("example-package", true);
		expect(Util.log).toHaveBeenCalledTimes(2);
		expect(Util.log).toHaveBeenCalledWith(`Error installing package example-package with npm`);
		expect(Util.log).toHaveBeenCalledWith(`Error`);
		expect(Util.execSync).toHaveBeenCalledWith(
			`npm install example-package --quiet --save`, { stdio: "pipe", encoding: "utf8" });
		done();
	});
	it("Should run addPackage properly without error code", async done => {
		spyOn(Util, "log");
		spyOn(Util, "execSync").and.returnValue("");
		PackageManager.addPackage("example-package", true);
		expect(Util.log).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledWith(`Package example-package installed successfully`);
		expect(Util.execSync).toHaveBeenCalledWith(
			`npm install example-package --quiet --save`, { stdio: "pipe", encoding: "utf8" });
		done();
	});

	it("queuePackage should start package install", async done => {
		const mockRequire = {
			dependencies: {}
		};
		const mockConfig = {
			packagesInstalled: true
		};
		spyOn(require("module"), "_load").and.returnValue(mockRequire);
		spyOn(ProjectConfig, "localConfig").and.returnValue(mockConfig);
		spyOn(Util, "log");
		const mockFs: Partial<IFileSystem> = {
			readFile: jasmine.createSpy().and.returnValue(JSON.stringify(mockRequire)),
			writeFile: jasmine.createSpy()
		};
		// should ignore already installed
		spyOn(App.container, "get").and.returnValue(mockFs);
		const execSpy = spyOn(child_process, "exec");
		PackageManager.queuePackage("test-pack");
		expect(Util.log).toHaveBeenCalledTimes(0);
		expect(child_process.exec).toHaveBeenCalledTimes(1);
		expect(child_process.exec).toHaveBeenCalledWith(
			`npm install test-pack --quiet --no-save`, {}, jasmine.any(Function));
		done();
	});

	it("queuePackage should ignore existing package installs", async done => {
		const mockRequire = {
			dependencies: {
				"test-pack": "20.1"
			}
		};
		const mockFs: Partial<IFileSystem> = {
			readFile: jasmine.createSpy().and.returnValue(JSON.stringify(mockRequire)),
			writeFile: jasmine.createSpy()
		};
		const mockConfig = {
			packagesInstalled: true
		};
		spyOn(ProjectConfig, "localConfig").and.returnValue(mockConfig);
		// should ignore already installed
		spyOn(App.container, "get").and.returnValue(mockFs);
		spyOn(Util, "log");
		const execSpy = spyOn(child_process, "exec");
		PackageManager.queuePackage("test-pack");
		expect(Util.log).toHaveBeenCalledTimes(0);
		expect(child_process.exec).toHaveBeenCalledTimes(0);

		// should ignore if already in queue
		PackageManager.queuePackage("test-pack2");
		PackageManager.queuePackage("test-pack2");
		expect(child_process.exec).toHaveBeenCalledTimes(1);
		done();
	});

	it("Should wait for and log queued package installs", async done => {
		PackageManager["installQueue"] = []; //must reset from other tests
		const mockRequire = {
			dependencies: {}
		};
		// should ignore already installed
		const mockFs: Partial<IFileSystem> = {
			readFile: jasmine.createSpy().and.returnValue(JSON.stringify(mockRequire)),
			writeFile: jasmine.createSpy()
		};
		const mockConfig = {
			packagesInstalled: true
		};
		spyOn(ProjectConfig, "localConfig").and.returnValue(mockConfig);
		// spyOn(require("module"), "_load").and.returnValue(mockRequire);
		spyOn(Util, "log");
		spyOn(App.container, "get").and.returnValue(mockFs);
		const execSpy = spyOn(child_process, "exec").and.callFake((cmd, opts, callback) => {
			setTimeout(() => callback(null, [1], [2]), 20);
		});
		PackageManager.queuePackage("test-pack");
		PackageManager.queuePackage("test-pack2");

		await PackageManager.flushQueue(true, true);
		expect(Util.log).toHaveBeenCalledTimes(3);
		expect(Util.log).toHaveBeenCalledWith(`Waiting for additional packages to install`);
		expect(Util.log).toHaveBeenCalledWith("Package test-pack installed successfully");
		expect(Util.log).toHaveBeenCalledWith("Package test-pack2 installed successfully");
		resetSpy(Util.log);

		// on error
		execSpy.and.callFake((cmd, opts, callback) => {
			setTimeout(() => callback(new Error(), [1], ["stderr"]), 20);
		});
		PackageManager.queuePackage("test-pack3");
		await PackageManager.flushQueue(true, true);

		expect(Util.log).toHaveBeenCalledTimes(3);
		expect(Util.log).toHaveBeenCalledWith(`Waiting for additional packages to install`);
		expect(Util.log).toHaveBeenCalledWith("Error installing package test-pack3");
		expect(Util.log).toHaveBeenCalledWith("stderr");
		done();
	});
});
