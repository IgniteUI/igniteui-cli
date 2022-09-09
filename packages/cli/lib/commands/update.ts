//tslint:disable:ordered-imports
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
		if (!version) {
			// TODO
			return;
		}

		// TODO
	}
};

export default command;
