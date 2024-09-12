
import { GoogleAnalytics, Util } from "@igniteui/cli-core";
import * as liteServer from "lite-server";
import * as path from "path";
import { default as quickstartCmd } from "../../packages/cli/lib/commands/quickstart";

describe("Unit - Quickstart command", () => {
	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		spyOn(Util, "log");
		spyOn(Util, "directoryExists").and.returnValue(true);
		spyOn(Util, "processTemplates");
		spyOn(process, "chdir");
	});

	it("Creates quickstart for the specified framework", async done => {
		spyOn(Util, "execSync");

		await quickstartCmd.handler({ framework: "angular", _: ["quickstart"], $0: "quickstart" });
		const outDir = path.join(process.cwd(), "angular-quickstart");
		const quickStartFiles = path.join(__dirname, "../../packages/cli/templates/quickstart", "angular");

		expect(Util.processTemplates).toHaveBeenCalledWith(quickStartFiles, outDir, {}, {}, false);
		expect(Util.execSync).toHaveBeenCalledWith("npm install");
		expect(Util.execSync).toHaveBeenCalledWith("npm start");
		expect(Util.log).toHaveBeenCalledWith("Quick Start!");
		expect(Util.log).toHaveBeenCalledWith("angular-quickstart loaded");
		expect(Util.log).toHaveBeenCalledTimes(2);
		done();
	});

	it("Logs error for wrong framework", async done => {
		spyOn(Util, "error");

		await quickstartCmd.handler({ framework: "lottery", _: ["quickstart"], $0: "quickstart"  });

		expect(Util.error).toHaveBeenCalledWith("The framework is not supported!", "red");
		expect(Util.log).toHaveBeenCalledWith("Quick Start!");
		expect(Util.log).toHaveBeenCalledTimes(1);
		done();
	});

	it("Creates default jquery quickstart when no framework is specified", async done => {
		spyOn(Util, "execSync");
		spyOn(liteServer, "server");
		await quickstartCmd.handler({ framework: "jquery", _: ["quickstart"], $0: "quickstart" });
		expect(Util.execSync).toHaveBeenCalledWith("npm install");
		const outDir = path.join(process.cwd(), "jquery-quickstart");
		const quickStartFiles = path.join(__dirname, "../../packages/cli/templates/quickstart", "jquery");

		expect(Util.processTemplates).toHaveBeenCalledWith(quickStartFiles, outDir, {}, {}, false);
		expect(Util.log).toHaveBeenCalledWith("Quick Start!");
		expect(Util.log).toHaveBeenCalledWith("jquery-quickstart loaded");
		expect(Util.log).toHaveBeenCalledTimes(2);
		done();
	});

	it("Creates quickstart for React framework", async done => {
		spyOn(Util, "execSync");
		spyOn(liteServer, "server");

		await quickstartCmd.handler({ framework: "react", _: ["quickstart"], $0: "quickstart" });
		const outDir = path.join(process.cwd(), "react-quickstart");
		const quickStartFiles = path.join(__dirname, "../../packages/cli/templates/quickstart", "react");

		expect(Util.processTemplates).toHaveBeenCalledWith(quickStartFiles, outDir, {}, {}, false);
		expect(Util.execSync).toHaveBeenCalledWith("npm install");
		expect(Util.execSync).toHaveBeenCalledWith("npm run webpack");
		expect(Util.log).toHaveBeenCalledWith("Quick Start!");
		expect(Util.log).toHaveBeenCalledWith("react-quickstart loaded");
		expect(Util.log).toHaveBeenCalledTimes(2);
		done();
	});
});
