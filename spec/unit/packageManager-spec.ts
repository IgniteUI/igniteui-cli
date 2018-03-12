import * as cp from "child_process";
import * as path from "path";
import * as shell from "shelljs";
import { PackageManager } from "../../lib/packages/PackageManager";
import { ProjectConfig } from "../../lib/ProjectConfig";
import { Util } from "../../lib/Util";

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
		spyOn(path, "join").and.returnValue("../../spec/unit/empty.json");
		spyOn(shell, "exec").and.returnValues({
			code: 1
		}, {
			code: 0
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
		expect(shell.exec).toHaveBeenCalledWith("npm config set @infragistics:registry trial");
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
		spyOn(shell, "exec").and.returnValues({
			code: 1
		});
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
		expect(shell.exec).toHaveBeenCalledTimes(1);
		expect(shell.exec).toHaveBeenCalledWith(`npm whoami --registry=trial`, { silent: true });
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
			packagesInstalled: false
		});
		spyOn(Util, "log");
		spyOn(shell, "exec").and.returnValue({
			code: 1,
			stderr: "Example"
		});
		spyOn(ProjectConfig, "setConfig");
		PackageManager.installPackages(true);
		expect(ProjectConfig.getConfig).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledTimes(3);
		expect(Util.log).toHaveBeenCalledWith(`Installing npm packages`);
		expect(Util.log).toHaveBeenCalledWith(`Error installing npm packages.`);
		expect(Util.log).toHaveBeenCalledWith(`Example`);
		expect(shell.exec).toHaveBeenCalledWith(`npm install --quiet`, {silent: true});
		expect(ProjectConfig.setConfig).toHaveBeenCalledWith({packagesInstalled: true});
		done();
	});
	it("Should run installPackages properly without error code", async done => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			packagesInstalled: false
		});
		spyOn(Util, "log");
		spyOn(shell, "exec").and.returnValue({
			code: 0
		});
		spyOn(ProjectConfig, "setConfig");
		PackageManager.installPackages(true);
		expect(ProjectConfig.getConfig).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledTimes(2);
		expect(Util.log).toHaveBeenCalledWith(`Installing npm packages`);
		expect(Util.log).toHaveBeenCalledWith(`Packages installed successfully`);
		expect(shell.exec).toHaveBeenCalledWith(`npm install --quiet`, {silent: true});
		expect(ProjectConfig.setConfig).toHaveBeenCalledWith({packagesInstalled: true});
		done();
	});
	it("Should run removePackage properly with error code", async done => {
		spyOn(Util, "log");
		spyOn(shell, "exec").and.returnValue({
			code: 1,
			stderr: "Error"
		});
		PackageManager.removePackage("example-package", true);
		expect(Util.log).toHaveBeenCalledTimes(2);
		expect(Util.log).toHaveBeenCalledWith(`Error uninstalling package example-package with npm`);
		expect(Util.log).toHaveBeenCalledWith(`Error`);
		expect(shell.exec).toHaveBeenCalledWith(`npm uninstall example-package --quiet --save`, {silent: true});
		done();
	});
	it("Should run removePackage properly without error code", async done => {
		spyOn(Util, "log");
		spyOn(shell, "exec").and.returnValue({
			code: 0
		});
		PackageManager.removePackage("example-package", true);
		expect(Util.log).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledWith(`Package example-package uninstalled successfully`);
		expect(shell.exec).toHaveBeenCalledWith(`npm uninstall example-package --quiet --save`, {silent: true});
		done();
	});
	it("Should run addPackage properly with error code", async done => {
		spyOn(Util, "log");
		spyOn(shell, "exec").and.returnValue({
			code: 1,
			stderr: "Error"
		});
		PackageManager.addPackage("example-package", true);
		expect(Util.log).toHaveBeenCalledTimes(2);
		expect(Util.log).toHaveBeenCalledWith(`Error installing package example-package with npm`);
		expect(Util.log).toHaveBeenCalledWith(`Error`);
		expect(shell.exec).toHaveBeenCalledWith(`npm install example-package --quiet --save`, {silent: true});
		done();
	});
	it("Should run addPackage properly without error code", async done => {
		spyOn(Util, "log");
		spyOn(shell, "exec").and.returnValue({
			code: 0
		});
		PackageManager.addPackage("example-package", true);
		expect(Util.log).toHaveBeenCalledTimes(1);
		expect(Util.log).toHaveBeenCalledWith(`Package example-package installed successfully`);
		expect(shell.exec).toHaveBeenCalledWith(`npm install example-package --quiet --save`, {silent: true});
		done();
	});
});
