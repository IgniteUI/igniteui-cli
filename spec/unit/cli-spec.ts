import { GoogleAnalytics, Util } from "@igniteui/cli-core";
import * as run from "../../packages/cli/lib/cli";
import { default as add } from "../../packages/cli/lib/commands/add";
import { default as build } from "../../packages/cli/lib/commands/build";
import { default as doc } from "../../packages/cli/lib/commands/doc";
import { default as list } from "../../packages/cli/lib/commands/list";
import { default as start } from "../../packages/cli/lib/commands/start";
import { default as test } from "../../packages/cli/lib/commands/test";
import { PromptSession } from "../../packages/cli/lib/PromptSession";

describe("Unit - Cli.ts", () => {
	beforeEach(() => {
	});

	/*
	it("Should fire properly - XX", async () => {
		spyOn(XX , "YY");
		await run.run("--XX");
		expect(XX.YY).toHaveBeenCalled();
	});
	*/
	it("Should fire properly - Version", async () => {
		spyOn(Util, "showVersion");
		await run.run("--version");
		expect(Util.showVersion).toHaveBeenCalled();
	});
	it("Should fire properly - add", async () => {
		spyOn(add , "check").and.returnValue(false);
		await run.run("add");
		expect(add.check).toHaveBeenCalled();
	});
	it("Should fire properly - build", async () => {
		spyOn(build , "handler").and.returnValue(true);
		await run.run("build");
		expect(build.handler).toHaveBeenCalled();
	});
	it("Should fire properly - doc", async () => {
		spyOn(doc , "handler").and.returnValue(true);
		await run.run("doc");
		expect(doc.handler).toHaveBeenCalled();
	});
	it("Should fire properly - test", async () => {
		spyOn(test , "handler").and.returnValue(true);
		await run.run("test");
		expect(test.handler).toHaveBeenCalled();
	});
	it("Should fire properly - start", async () => {
		spyOn(start , "handler").and.returnValue(true);
		await run.run("start");
		expect(start.handler).toHaveBeenCalled();
	});
	it("Should fire properly - list", async () => {
		spyOn(list , "handler").and.returnValue(true);
		await run.run("list");
		expect(list.handler).toHaveBeenCalled();
	});
	it("Should fire properly - fallback to default", async () => {
		spyOn(Util , "log");
		spyOn(GoogleAnalytics, "post");
		spyOn(PromptSession.prototype, "start");
		await run.run("Nonexistent command");

		// expected console output:
		expect(Util.log).toHaveBeenCalledWith("Starting Step by step mode.", "green");
		expect(Util.log).toHaveBeenCalledWith("For available commands, stop this execution and use --help.", "green");
		expect(PromptSession.prototype.start).toHaveBeenCalled();
	});
});
