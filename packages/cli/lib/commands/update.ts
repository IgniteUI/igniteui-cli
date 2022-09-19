//tslint:disable:ordered-imports
import * as semver from "semver";
import { GoogleAnalytics, ProjectConfig, Util } from "@igniteui/cli-core";

// tslint:disable:object-literal-sort-keys
const command = {
	command: "update [package] [version]",
	desc: "updates a package or lists packages for update",
	templateManager: null,
	builder: {
		package: {
			alias: "p",
			description: "Package to update.",
			global: true,
			type: "string"
		}
	},
	async execute(argv: any) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Update"
		});

		if (!ProjectConfig.hasLocalConfig()) {
			Util.error("Update command is supported only on existing project created with igniteui-cli", "red");
			return;
		}

		if (!Util.checkWorkingTreeIsClean()) {
			Util.error("Update command can only be executed on a clean Git state", "red");
			return;
		}

		const config = ProjectConfig.getConfig();
		const framework = command.templateManager.getFrameworkById(config.project.framework);
		if (!framework) {
			Util.error("Framework not supported", "red");
			return;
		}

		if (!argv.package) {
			// ig update
			const pkgsToUpdate = await Util.lookUpPackagesForUpdate(config);
			Util.listPackagesForUpdate(pkgsToUpdate);
			return;
		}

		// ig update <package>[@<version>]
		const [name, version] = argv.package.split("@");
		if (framework === "angular") {
			// proxy to ng update for angular projects
			Util.execSync(`ng update ${name}${version ? `@${version}` : ""}`);
			return;
		}

		const installedPackage = Util.locatePackageFromDependencies(config, name);
		const installedVersion = semver.coerce(installedPackage.version);
		if (!version) {
			if (!installedPackage) {
				Util.error(`${name} is not a dependency of the project`);
				return;
			}

			const pkgData = await Util.getPackageMetadata(name);
			const remotePkgLatest = semver.coerce(pkgData["dist-tags"].latest);
			if (remotePkgLatest === installedVersion) {
				Util.error(`Package ${name} is already up to date`);
				return;
			}

			// update to latest version of package
			let success = Util.cleanNodeModules() && await Util.installAllDeps();
			if (!success) {
				return;
			}

			success = Util.tryInstallPackage(Util.getPackageManager(), `${name}@latest`);
			if (!success) {
				return;
			}

			// invoke migrations from current pkg ver to latest
			await Util.invokeMigrationsBetweenVersions(installedPackage, remotePkgLatest);
			return;
		}

		// update to specific version of package
		const requestedVersion = semver.coerce(version);
		if (requestedVersion === installedVersion) {
			Util.error(`Package ${name} is already up to date`);
			return;
		}

		await Util.invokeMigrationsBetweenVersions(installedPackage, requestedVersion);
	}
};

export default command;
