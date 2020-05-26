import { Config, GoogleAnalytics, PackageManager, ProjectConfig,  ProjectTemplate, Util } from "@igniteui/cli-core";
import * as path from "path";
import { default as upgradeCmd } from "../../packages/cli/lib/commands/upgrade";
import { resetSpy } from "../helpers/utils";

describe("Unit - Upgrade command", () => {
	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		spyOn(Util, "log");
		spyOn(process, "chdir");
		spyOn(PackageManager, "installPackages");
	});

	afterEach(() => {
		// clean test folder:
		process.chdir("../../");
	});

	it("Upgrade an Angular project", async () => {
		// TODO
	});

	it("Logs error for not supported framework", async done => {
		// tslint:disable-next-line: no-object-literal-type-assertion
		const config: Config = {
			project: {
				framework: "jquery"
			}
		} as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(config);

		await upgradeCmd.execute({});
		expect(Util.log).toHaveBeenCalledTimes(1);
		done();
	});
});
