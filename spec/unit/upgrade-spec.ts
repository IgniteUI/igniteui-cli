import { GoogleAnalytics, ProjectConfig, Util } from "@igniteui/cli-core";
import * as path from "path";
import { default as upgradeCmd } from "../../packages/cli/lib/commands/upgrade";
import { PackageManager } from "../../packages/cli/lib/packages/PackageManager";
import { resetSpy } from "../helpers/utils";

describe("Unit - Upgrade command", () => {
	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		spyOn(Util, "log");
		spyOn(Util, "execSync");
		spyOn(process, "chdir");
		spyOn(PackageManager, "installPackages");
	});

	afterEach(() => {
		// clean test folder:
		process.chdir("../../");
	});

	it("Upgrade an Angular project", async done => {
		// TODO
	});
});
