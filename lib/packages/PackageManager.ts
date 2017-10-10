import * as path from "path";
import * as chalk from "chalk";
import { exec, ExecOutputReturnValue } from 'shelljs';
import { ProjectConfig } from "../ProjectConfig";
import { TemplateManager } from './../TemplateManager';
import { Util } from "../Util";
import { spawnSync } from "child_process";

var componentsConfig: {oss: string[], full: string[], dv: string[]} = require("./components.json");

export class PackageManager {
	private static ossPackage: string = "ignite-ui";
	private static fullPackage: string = "@infragistics/ignite-ui-full";
	private static fullPackageRegistry: string = "https://packages.infragistics.com/npm/js-licensed";

	private static isOSSPackage(original): boolean {
		return original === `./node_modules/${this.ossPackage}`;
	}

	static getManager(/*config:Config*/): string {
		//stub to potentially swap out managers
		return "npm";
	}

	/**
	 * Specific for Ignite UI packages handling:
	 * 
	 * Checks if a full version is required, if there's a user for the ProGet registry
	 * and swaps the OSS package for the full version.
	 * @param installNow Allow the check to also try installing required Ignite UI package
	 */
	static ensureIgniteUISource(installNow: boolean = false, verbose: boolean = false) {
		let config = ProjectConfig.getConfig();
		let fullComponents = config.project.components.filter(x => { 
			return componentsConfig.full.indexOf(x) !== -1 || componentsConfig.dv.indexOf(x) !== -1
		});
		if (!(fullComponents.length && this.isOSSPackage(config.project.igniteuiSource))) {
			//no upgrade required
			return;
		}

		if (installNow) {
			if (this.ensureRegistryUser() && this.addPackage(this.fullPackage, verbose)) {
				if (this.getPackageJSON().dependencies[this.ossPackage]) {
					// TODO: Check if OSS package uninstalled successfully?
					this.removePackage(this.ossPackage, verbose);
				}
				config.project.igniteuiSource = `./node_modules/${this.fullPackage}`;
				ProjectConfig.setConfig(config);
				if (!config.project.isBundle) {
					// TODO make param?
					var templateManager = new TemplateManager();
					var projectLibrary = templateManager.getProjectLibrary(config.project.framework, config.project.projectType);
					if (projectLibrary) {
						// TODO multiple projects?
						projectLibrary.getProject().upgradeIgniteUIPackage(process.cwd(), `./node_modules/${this.fullPackage}`);
					}
				}
			} else {
				console.log(chalk.yellow(`Something went wrong with upgrading Ignite UI to the full version. As a result only views using OSS components will run correctly.`));
				console.log(chalk.yellow(`Please visit https://www.igniteui.com/help/using-ignite-ui-npm-packages for instructions on how to install the full package.`));
			}
		} else {
			console.log(chalk.yellow("Template(s) that require the full version of Ignite UI found in the project. You'll might be prompted for credentials on build to install it."))
		}
	}

	static installPackages(verbose: boolean = false) {
		let config = ProjectConfig.getConfig();
		if (!config.packagesInstalled) {
			let command:string, managerCommand: string;

			managerCommand = this.getManager();
			switch (managerCommand) {
				case "npm":
				/* passes through */
				default:
					command = `${managerCommand} install --quiet`
					break;
			}
			console.log(`Installing ${managerCommand} packages`);
			var result = exec(command, { silent: true }) as ExecOutputReturnValue;
			if (result.code !== 0) {
				console.log(`Error installing ${managerCommand} packages.`);
				if (verbose) {
					console.log(result.stderr);
				}
			} else {
				console.log(`Packages installed successfully`);
			}
			config.packagesInstalled = true;
			ProjectConfig.setConfig(config);
		}

	}
	static removePackage(packageName: string, verbose: boolean = false): boolean {
		let command:string;
		let managerCommand = this.getManager();
		switch (managerCommand) {
			case "npm":
			/* passes through */
			default:
				command = `${managerCommand} uninstall ${packageName} --quiet --save`
				break;
		}
		var result = exec(command, { silent: true }) as ExecOutputReturnValue;
		
		if (result.code !== 0) {
			console.log(`Error uninstalling package ${packageName} with ${managerCommand}`);
			if (verbose) {
				console.log(result.stderr);
			}
			return false;
		} else {
			console.log(`Package ${packageName} uninstalled successfully`);
			return true;
		}
	}

	static addPackage(packageName: string, verbose: boolean = false): boolean {
		let command:string;
		let managerCommand = this.getManager();
		switch (managerCommand) {
			case "npm":
			/* passes through */
			default:
				command = `${managerCommand} install ${packageName} --quiet --save`
				break;
		}
		var result = exec(command, { silent: true }) as ExecOutputReturnValue;
		
		if (result.code !== 0) {
			console.log(`Error installing package ${packageName} with ${managerCommand}`);
			if (verbose) {
				console.log(result.stderr);
			}
			return false;
		} else {
			console.log(`Package ${packageName} installed successfully`);
			return true;
		}
	}

	
	private static ensureRegistryUser(): boolean {
		var user = exec(`npm whoami --registry=${this.fullPackageRegistry}`, { silent: true }) as ExecOutputReturnValue;
		if (user.code !== 0) {
			// try registering the user:
			console.log(chalk.gray("The project you've created requires the full version of Ignite UI from Infragistics private feed."));
			console.log(chalk.gray("We are initiating the login process for you. This will be required only once per environment."));
			console.log(chalk.yellow(`Adding a registry user account for ${this.fullPackageRegistry}`));
			console.log(chalk.yellow(`Use you Infragistics account credentials. "@" is not supported, use "!!", so "username@infragistics.com" should be entered as "username!!infragistics.com"`));
			
			var cmd = /^win/.test(process.platform) ? "npm.cmd" : "npm"; //https://github.com/nodejs/node/issues/3675
			var login = spawnSync(cmd, ["adduser", `--registry=${this.fullPackageRegistry}`, `--scope=@infragistics`, `--always-auth`], { stdio: 'inherit' });
			if (login.status === 0) {
				//make sure scope is configured:
				return exec(`npm config set @infragistics:registry ${this.fullPackageRegistry}`).code === 0;
			} else {
				console.log(chalk.red("Something went wrong, please follow the steps in this guide: https://www.igniteui.com/help/using-ignite-ui-npm-packages"));
				return false;
			}
		}
		return true;
	}
	
	private static getPackageJSON(): { "dependencies": {[x: string]: string} } {
		var filePath = path.join(process.cwd(), "package.json");
		return require(filePath);
	}
}