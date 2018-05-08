import * as cp from "child_process";
import * as path from "path";
import { PackageManager } from "../../lib/packages/PackageManager";
import { ProjectConfig } from "../../lib/ProjectConfig";
import { Util } from "../../lib/Util";
import { resetSpy } from "../helpers/utils";

describe("Unit - Package Manager", () => {
	it("ensureIgniteUISource - Should run through properly when install now is set to true", async done => {
		const mockRequire = {
			dependencies: {
				"ignite-ui": "17.2"
			}
		};
		const mockTemplateMgr = jasmine.createSpyObj("mockTemplateMgr", {
			getProjectLibrary: {
				getProject() {
					return {
						upgradeIgniteUIPackage: () => false
					};
				}
			}
		});
		spyOn(ProjectConfig, "getConfig").and.returnValue({
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
		spyOn(require("module"), "_load").and.callFake((modulePath: string) => {
			if (modulePath === "fakemodule.json") {
				return mockRequire;
			}
		});
		spyOn(cp, "execSync").and.callFake((cmd: string, opts) => {
			if (cmd.includes("whoami")) {
				throw new Error("");
			}
			return "";
		});
		spyOn(cp, "spawnSync").and.returnValues({
			status: 0
		});
		spyOn(Util, "log");
		spyOn(PackageManager, "removePackage");
		PackageManager.ensureIgniteUISource(true, mockTemplateMgr, true);
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
			`Use you Infragistics account credentials. "@" is not supported,` +
			`use "!!", so "username@infragistics.com" should be entered as "username!!infragistics.com"`,
			"yellow"
		);
		expect(path.join).toHaveBeenCalled();
		expect(cp.spawnSync).toHaveBeenCalledWith(
			/^win/.test(process.platform) ? "npm.cmd" : "npm",
			["adduser", `--registry=trial`, `--scope=@infragistics`, `--always-auth`],
			{
				stdio: "inherit"
			}
		);
		expect(cp.execSync).toHaveBeenCalledWith("npm config set @infragistics:registry trial");
		expect(PackageManager.removePackage).toHaveBeenCalled();
		expect(PackageManager.addPackage).toHaveBeenCalledWith("@infragistics/ignite-ui-full", true);
		done();
	});
	it("ensureIgniteUISource - Should run through properly when install = true && package error", async done => {
		const mockRequire = {
			dependencies: {
				"ignite-ui": "17.2"
			}
		};
		const mockTemplateMgr = jasmine.createSpyObj("mockTemplateMgr", {
			getProjectLibrary: {
				getProject() {
					return {
						upgradeIgniteUIPackage: () => false
					};
				}
			}
		});
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			igPackageRegistry: "trial",
			project: {
				components: ["igGrid", "igExcel"],
				igniteuiSource: `./node_modules/ignite-ui`,
				isBundle: false
			}
		});
		spyOn(ProjectConfig, "setConfig");
		spyOn(PackageManager, "addPackage").and.returnValue(true);
		spyOn(cp, "execSync").and.throwError("no user");
		spyOn(cp, "spawnSync").and.returnValues({
			status: 1
		});
		spyOn(Util, "log");
		spyOn(PackageManager, "removePackage");
		PackageManager.ensureIgniteUISource(true, mockTemplateMgr, true);
		expect(ProjectConfig.getConfig).toHaveBeenCalled();
		expect(Util.log).toHaveBeenCalledTimes(7);
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
			`Use you Infragistics account credentials. "@" is not supported,` +
			`use "!!", so "username@infragistics.com" should be entered as "username!!infragistics.com"`,
			"yellow"
		);
		expect(Util.log).toHaveBeenCalledWith(
			"Something went wrong, " +
			"please follow the steps in this guide: https://www.igniteui.com/help/using-ignite-ui-npm-packages",
			"red"
		);
		expect(Util.log).toHaveBeenCalledWith(
			"Something went wrong with upgrading Ignite UI to the full version." +
			`As a result only views using OSS components will run correctly.`,
			"yellow"
		);
		expect(Util.log).toHaveBeenCalledWith(
			"Please visit https://www.igniteui.com/help/using-ignite-ui-npm-packages" +
			`for instructions on how to install the full package.`,
			"yellow"
		);
		expect(cp.spawnSync).toHaveBeenCalledWith(
			/^win/.test(process.platform) ? "npm.cmd" : "npm",
			["adduser", `--registry=trial`, `--scope=@infragistics`, `--always-auth`],
			{
				stdio: "inherit"
			}
		);
		expect(cp.execSync).toHaveBeenCalledTimes(1);
		expect(cp.execSync).toHaveBeenCalledWith(`npm whoami --registry=trial`,  { stdio: "pipe", encoding: "utf8" });
		done();
	});
	it("ensureIgniteUISource - Should run through properly when install now is set to false", async done => {
		spyOn(Util, "log");
		const mockTemplateMgr = jasmine.createSpyObj("mockTemplateMgr", {
			getProjectLibrary: {
				getProject() {
					return {
						upgradeIgniteUIPackage: () => false
					};
				}
			}
		});
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			igPackageRegistry: "trial",
			project: {
				components: ["igGrid", "igExcel"],
				igniteuiSource: `./node_modules/ignite-ui`,
				isBundle: false
			}
		});
		PackageManager.ensureIgniteUISource(false, mockTemplateMgr, true);
		expect(ProjectConfig.getConfig).toHaveBeenCalled();
		expect(Util.log).toHaveBeenCalledWith(
		"Template(s) that require the full version of Ignite UI found in the project." +
		"You'll might be prompted for credentials on build to install it.", "yellow");
		done();
	});
	it("Should run installPackages properly with error code", async done => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			disableAnalytics: false,
			packagesInstalled: false
		});
		spyOn(Util, "log");
		spyOn(cp, "execSync").and.callFake(() => {
			const err = new Error("Example");
			err["status"] = 1;
			throw err;
		});
		spyOn(ProjectConfig, "setConfig");
		await PackageManager.installPackages(true);
		expect(ProjectConfig.getConfig).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledTimes(3);
		expect(Util.log).toHaveBeenCalledWith(`Installing npm packages`);
		expect(Util.log).toHaveBeenCalledWith(`Error installing npm packages.`);
		expect(Util.log).toHaveBeenCalledWith(`Example`);
		expect(cp.execSync).toHaveBeenCalledWith(`npm install --quiet`, { stdio: "pipe", killSignal: "SIGINT" });
		expect(ProjectConfig.setConfig).toHaveBeenCalledWith({disableAnalytics: false, packagesInstalled: true});
		done();
	});
	it("Should run installPackages properly without error code", async done => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			disableAnalytics: true,
			packagesInstalled: false
		});
		spyOn(Util, "log");
		spyOn(cp, "execSync").and.returnValue("");
		spyOn(ProjectConfig, "setConfig");
		await PackageManager.installPackages(true);
		expect(ProjectConfig.getConfig).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledTimes(2);
		expect(Util.log).toHaveBeenCalledWith(`Installing npm packages`);
		expect(Util.log).toHaveBeenCalledWith(`Packages installed successfully`);
		expect(cp.execSync).toHaveBeenCalledWith(`npm install --quiet`, { stdio: "pipe", killSignal: "SIGINT" });
		expect(ProjectConfig.setConfig).toHaveBeenCalledWith({disableAnalytics: true, packagesInstalled: true});
		done();
	});
	it("Should exit on installPackages if child install is terminated", async done => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			packagesInstalled: false,
			skipAnalytic: true
		});
		spyOn(Util, "log");
		spyOn(ProjectConfig, "setConfig");
		spyOn(process, "exit");
		spyOn(cp, "execSync").and.callFake(() => {
			const err = new Error("Error");
			err["status"] = 3221225786; // ctl + c while child install is running
			throw err;
		});
		await PackageManager.installPackages(true);
		expect(Util.log).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledWith(`Installing npm packages`);
		expect(cp.execSync).toHaveBeenCalledWith(`npm install --quiet`, { stdio: "pipe", killSignal: "SIGINT" });
		expect(process.exit).toHaveBeenCalled();
		expect(ProjectConfig.setConfig).toHaveBeenCalledTimes(0);
		done();
	});
	it("Should run removePackage properly with error code", async done => {
		spyOn(Util, "log");
		spyOn(cp, "execSync").and.callFake(() => {
			const err = new Error("Error");
			err["status"] = 1;
			throw err;
		});
		PackageManager.removePackage("example-package", true);
		expect(Util.log).toHaveBeenCalledTimes(2);
		expect(Util.log).toHaveBeenCalledWith(`Error uninstalling package example-package with npm`);
		expect(Util.log).toHaveBeenCalledWith(`Error`);
		expect(cp.execSync).toHaveBeenCalledWith(
			`npm uninstall example-package --quiet --save`, { stdio: "pipe", encoding: "utf8" }
		);
		done();
	});
	it("Should run removePackage properly without error code", async done => {
		spyOn(Util, "log");
		spyOn(cp, "execSync").and.returnValue("");
		PackageManager.removePackage("example-package");
		expect(Util.log).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledWith(`Package example-package uninstalled successfully`);
		expect(cp.execSync).toHaveBeenCalledWith(
			`npm uninstall example-package --quiet --save`, { stdio: "pipe", encoding: "utf8" });
		done();
	});
	it("Should run addPackage properly with error code", async done => {
		spyOn(Util, "log");
		spyOn(cp, "execSync").and.callFake(() => {
			const err = new Error("Error");
			err["status"] = 1;
			throw err;
		});
		PackageManager.addPackage("example-package", true);
		expect(Util.log).toHaveBeenCalledTimes(2);
		expect(Util.log).toHaveBeenCalledWith(`Error installing package example-package with npm`);
		expect(Util.log).toHaveBeenCalledWith(`Error`);
		expect(cp.execSync).toHaveBeenCalledWith(
			`npm install example-package --quiet --save`, { stdio: "pipe", encoding: "utf8" });
		done();
	});
	it("Should run addPackage properly without error code", async done => {
		spyOn(Util, "log");
		spyOn(cp, "execSync").and.returnValue("");
		PackageManager.addPackage("example-package", true);
		expect(Util.log).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledWith(`Package example-package installed successfully`);
		expect(cp.execSync).toHaveBeenCalledWith(
			`npm install example-package --quiet --save`, { stdio: "pipe", encoding: "utf8" });
		done();
	});

	it("queuePackage should start package install", async done => {
		const mockRequire = {
			dependencies: {}
		};
		spyOn(require("module"), "_load").and.returnValue(mockRequire);
		spyOn(Util, "log");
		const execSpy = spyOn(cp, "exec");
		PackageManager.queuePackage("test-pack");
		expect(Util.log).toHaveBeenCalledTimes(0);
		expect(cp.exec).toHaveBeenCalledTimes(1);
		expect(cp.exec).toHaveBeenCalledWith(
			`npm install test-pack --quiet --save`, {}, jasmine.any(Function));
		done();
	});

	it("queuePackage should ignore existing package installs", async done => {
		const mockRequire = {
			dependencies: {
				"test-pack": "17.2"
			}
		};
		// should ignore already installed
		spyOn(require("module"), "_load").and.returnValue(mockRequire);
		spyOn(Util, "log");
		const execSpy = spyOn(cp, "exec");
		PackageManager.queuePackage("test-pack");
		expect(Util.log).toHaveBeenCalledTimes(0);
		expect(cp.exec).toHaveBeenCalledTimes(0);

		// should ignore if already in queue
		PackageManager.queuePackage("test-pack2");
		PackageManager.queuePackage("test-pack2");
		expect(cp.exec).toHaveBeenCalledTimes(1);
		done();
	});

	it("Should wait for and log queued package installs", async done => {
		PackageManager["installQueue"] = []; //must reset from other tests
		const mockRequire = {
			dependencies: {}
		};
		// should ignore already installed
		spyOn(require("module"), "_load").and.returnValue(mockRequire);
		spyOn(Util, "log");
		const execSpy = spyOn(cp, "exec").and.callFake((cmd, opts, callback) => {
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
