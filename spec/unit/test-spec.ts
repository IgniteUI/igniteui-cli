
import { Config, GoogleAnalytics, ProjectConfig, Util } from "@igniteui/cli-core";
import { default as testCmd } from "../../packages/cli/lib/commands/test";

describe("Unit - Test command", () => {
	beforeAll(() => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		spyOn(Util, "execSync");
	});

	it("Run tests for the current project", async done => {
		await testCmd.test({skipAnalytics: true});
		expect (Util.execSync).toHaveBeenCalledWith("npm test", { stdio: "inherit" });

		done();
	});

	it("Run e2e tests for igx-ts Angular project type", async done => {
		// tslint:disable:no-object-literal-type-assertion
		spyOn(ProjectConfig, "getConfig").and.returnValue({ project: {
			framework: "angular",
			projectType: "igx-ts"}} as Config);

		await testCmd.test({e2e: true, skipAnalytics: true});
		expect (Util.execSync).toHaveBeenCalledWith("npm run e2e", { stdio: "inherit" });

		done();
	});

	it("e2e command for ig-ts Angular project type runs test command instead", async done => {
		// tslint:disable:no-object-literal-type-assertion
		spyOn(ProjectConfig, "getConfig").and.returnValue({ project: {
			framework: "angular",
			projectType: "ig-ts"}} as Config);

		await testCmd.test({e2e: true, skipAnalytics: true});
		expect (Util.execSync).toHaveBeenCalledWith("npm test", { stdio: "inherit" });

		done();
	});

	it("e2e command for jQuery project runs test command instead", async done => {
		// tslint:disable:no-object-literal-type-assertion
		spyOn(ProjectConfig, "getConfig").and.returnValue({ project: {
			framework: "jquery"}} as Config);

		await testCmd.test({e2e: true, skipAnalytics: true});
		expect (Util.execSync).toHaveBeenCalledWith("npm test", { stdio: "inherit" });

		done();
	});

	it("e2e command for React project runs test command instead", async done => {
		// tslint:disable:no-object-literal-type-assertion
		spyOn(ProjectConfig, "getConfig").and.returnValue({ project: {
			framework: "react"}} as Config);

		await testCmd.test({e2e: true, skipAnalytics: true});
		expect (Util.execSync).toHaveBeenCalledWith("npm test", { stdio: "inherit" });

		done();
	});
});
