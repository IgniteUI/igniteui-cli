import { exec, execSync, spawnSync } from "child_process";
import * as path from "path";
import { ProjectConfig } from "../ProjectConfig";
import { Util } from "../Util";
import { TemplateManager } from "./../TemplateManager";

import componentsConfig = require("./components");
export class PackageManager {
	private static ossPackage: string = "ignite-ui";
	private static fullPackage: string = "@infragistics/ignite-ui-full";

	private static installQueue: Array<Promise<{ packageName, error, stdout, stderr }>> = [];

	/**
	 * Specific for Ignite UI packages handling:
	 *
	 * Checks if a full version is required, if there's a user for the ProGet registry
	 * and swaps the OSS package for the full version.
	 * @param installNow Allow the check to also try installing required Ignite UI package
	 */
	public static ensureIgniteUISource(
		installNow: boolean = false,
		templateManager: TemplateManager,
		verbose: boolean = false
	) {
		const config = ProjectConfig.getConfig();
		const fullComponents = config.project.components.filter(x => {
			return componentsConfig.full.indexOf(x) !== -1 || componentsConfig.dv.indexOf(x) !== -1;
		});
		if (!(fullComponents.length && this.isOSSPackage(config.project.igniteuiSource))) {
			//no upgrade required
			return;
		}

		if (installNow) {
			if (this.ensureRegistryUser(config) && this.addPackage(this.fullPackage, verbose)) {
				if (this.getPackageJSON().dependencies[this.ossPackage]) {
					// TODO: Check if OSS package uninstalled successfully?
					this.removePackage(this.ossPackage, verbose);
				}
				config.project.igniteuiSource = `./node_modules/${this.fullPackage}/en`;
				ProjectConfig.setConfig(config);
				if (!config.project.isBundle) {
					// TODO make param?
					const projectLibrary = templateManager.getProjectLibrary(config.project.framework, config.project.projectType);
					if (projectLibrary) {
						// TODO multiple projects?
						projectLibrary.getProject(config.project.projectTemplate)
						.upgradeIgniteUIPackage(process.cwd(), `./node_modules/${this.fullPackage}/en`);
					}
				}
			} else {
				Util.log("Something went wrong with upgrading Ignite UI to the full version." +
					`As a result only views using OSS components will run correctly.`, "yellow");
				Util.log("Please visit https://www.igniteui.com/help/using-ignite-ui-npm-packages" +
					`for instructions on how to install the full package.`, "yellow");
			}
		} else {
			Util.log("Template(s) that require the full version of Ignite UI found in the project." +
				"You'll might be prompted for credentials on build to install it.", "yellow");
		}
	}

	public static async installPackages(verbose: boolean = false) {
		const config = ProjectConfig.getConfig();
		if (!config.packagesInstalled) {
			let command: string;
			let managerCommand: string;

			const oldSkipAnalytic = config.disableAnalytics;
			config.disableAnalytics = true;

			managerCommand = this.getManager();
			switch (managerCommand) {
				case "npm":
				/* passes through */
				default:
					command = `${managerCommand} install --quiet`;
					break;
			}
			await this.flushQueue(false);
			Util.log(`Installing ${managerCommand} packages`);
			try {
				const result = execSync(command, { stdio: "pipe", killSignal: "SIGINT" });
				Util.log(`Packages installed successfully`);
			} catch (error) {
				// ^C (SIGINT) produces status:3221225786 https://github.com/sass/node-sass/issues/1283#issuecomment-169450661
				if (error.status === 3221225786 || error.status > 128) {
					// drop process on user interrupt
					process.exit();
					return; // just for tests
				}
				Util.log(`Error installing ${managerCommand} packages.`);
				if (verbose) {
					Util.log(error.message);
				}
			}
			config.packagesInstalled = true;
			config.disableAnalytics = oldSkipAnalytic;
			ProjectConfig.setConfig(config);
		}
	}

	public static removePackage(packageName: string, verbose: boolean = false): boolean {
		let command: string;
		const managerCommand = this.getManager();
		switch (managerCommand) {
			case "npm":
			/* passes through */
			default:
				command = `${managerCommand} uninstall ${packageName} --quiet --save`;
				break;
		}
		try {
				// tslint:disable-next-line:object-literal-sort-keys
				const result = execSync(command, { stdio: "pipe", encoding: "utf8" });
		} catch (error) {
			Util.log(`Error uninstalling package ${packageName} with ${managerCommand}`);
			if (verbose) {
				Util.log(error.message);
			}
			return false;
		}

		Util.log(`Package ${packageName} uninstalled successfully`);
		return true;
	}

	public static addPackage(packageName: string, verbose: boolean = false): boolean {
		const managerCommand = this.getManager();
		const command = this.getInstallCommand(managerCommand, packageName);
		try {
				// tslint:disable-next-line:object-literal-sort-keys
				const result = execSync(command, { stdio: "pipe", encoding: "utf8" });
		} catch (error) {
			Util.log(`Error installing package ${packageName} with ${managerCommand}`);
			if (verbose) {
				Util.log(error.message);
			}
			return false;
		}
		Util.log(`Package ${packageName} installed successfully`);
		return true;
	}

	public static async queuePackage(packageName: string, verbose = false) {
		const command = this.getInstallCommand(this.getManager(), packageName);
		const packName = packageName.split(/@[^\/]+$/)[0];
		if (this.getPackageJSON().dependencies[packName] || this.installQueue.find(x => x["packageName"] === packName)) {
			return;
		}
		// D.P. Concurrent install runs should be supported
		// https://github.com/npm/npm/issues/5948
		// https://github.com/npm/npm/issues/2500
		const task = new Promise<{ packageName, error, stdout, stderr }>((resolve, reject) => {
			const child = exec(
				command, { },
				(error, stdout, stderr) => {
					resolve({ packageName, error, stdout, stderr });
				}
			);
		});
		task["packageName"] = packName;
		this.installQueue.push(task);
	}

	/** Waits for queued installs to finish, optionally log results and clear queue */
	public static async flushQueue(logSuccess: boolean, verbose = false) {
		if (this.installQueue.length) {
			Util.log(`Waiting for additional packages to install`);
			const results = await Promise.all(this.installQueue);
			for (const res of results) {
				if (res.error) {
					Util.log(`Error installing package ${res.packageName}`);
					if (verbose) {
						Util.log(res.stderr.toString());
					}
				} else if (logSuccess) {
					Util.log(`Package ${res.packageName} installed successfully`);
				}
			}
			this.installQueue = [];
		}
	}

	private static getInstallCommand(managerCommand: string, packageName: string): string {
		switch (managerCommand) {
			case "npm":
			/* passes through */
			default:
				return `${managerCommand} install ${packageName} --quiet --save`;
		}
	}

	private static getManager(/*config:Config*/): string {
		//stub to potentially swap out managers
		return "npm";
	}

	private static isOSSPackage(original): boolean {
		return original === `./node_modules/${this.ossPackage}`;
	}

	private static ensureRegistryUser(config: Config): boolean {
		const fullPackageRegistry = config.igPackageRegistry;
		try {
				// tslint:disable-next-line:object-literal-sort-keys
				const user = execSync(`npm whoami --registry=${fullPackageRegistry}`, { stdio: "pipe", encoding: "utf8" });
			} catch (error) {
			// try registering the user:
			Util.log(
				"The project you've created requires the full version of Ignite UI from Infragistics private feed.",
				"gray"
			);
			Util.log(
				"We are initiating the login process for you. This will be required only once per environment.",
				"gray"
			);
			Util.log(`Adding a registry user account for ${fullPackageRegistry}`, "yellow");
			Util.log(`Use you Infragistics account credentials. "@" is not supported,` +
				`use "!!", so "username@infragistics.com" should be entered as "username!!infragistics.com"`, "yellow");

			const cmd = /^win/.test(process.platform) ? "npm.cmd" : "npm"; //https://github.com/nodejs/node/issues/3675
			const login = spawnSync(cmd,
				["adduser", `--registry=${fullPackageRegistry}`, `--scope=@infragistics`, `--always-auth`],
				{ stdio: "inherit" }
			);
			if (login.status === 0) {
				//make sure scope is configured:
				try {
					execSync(`npm config set @infragistics:registry ${fullPackageRegistry}`);
					return true;
				} catch (error) {
					return false;
				}
			} else {
				Util.log("Something went wrong, " +
					"please follow the steps in this guide: https://www.igniteui.com/help/using-ignite-ui-npm-packages", "red");
				return false;
			}
		}
		return true;
	}

	private static getPackageJSON(): { "dependencies": {[x: string]: string} } {
		const filePath = path.join(process.cwd(), "package.json");
		return require(filePath);
	}
}
