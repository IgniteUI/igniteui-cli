import { GoogleAnalytics, Util } from "@igniteui/cli-core";
import * as run from "../../packages/cli/lib/cli";
import { default as add } from "../../packages/cli/lib/commands/add";
import { default as build } from "../../packages/cli/lib/commands/build";
import { default as doc } from "../../packages/cli/lib/commands/doc";
import { default as list } from "../../packages/cli/lib/commands/list";
import { default as quickstart } from "../../packages/cli/lib/commands/quickstart";
import { default as start } from "../../packages/cli/lib/commands/start";
import { default as test } from "../../packages/cli/lib/commands/test";
import { PromptSession } from "../../packages/cli/lib/PromptSession";

describe("Unit - Cli.ts", () => {
	beforeEach(() => {
	});

	/*
	it("Should fire properly - XX", async done => {
		spyOn(XX , "YY");
		await run.run("--XX");
		expect(XX.YY).toHaveBeenCalled();
		done();
	});
	*/
	it("Should fire properly - Version", async done => {
		spyOn(Util, "showVersion");
		await run.run("--version");
		expect(Util.showVersion).toHaveBeenCalled();
		done();
	});
	it("Should fire properly - quickstart", async done => {
		spyOn(quickstart , "execute").and.returnValue(undefined);
		spyOn(Util , "log");
		await run.run("quickstart");
		expect(quickstart.execute).toHaveBeenCalled();
		expect(Util.log).toHaveBeenCalled();
		done();
	});
	it("Should fire properly - add", async done => {
		spyOn(add , "check").and.returnValue(undefined);
		await run.run("add");
		expect(add.check).toHaveBeenCalled();
		done();
	});
	it("Should fire properly - build", async done => {
		spyOn(build , "execute").and.returnValue(undefined);
		await run.run("build");
		expect(build.execute).toHaveBeenCalled();
		done();
	});
	it("Should fire properly - doc", async done => {
		spyOn(doc , "execute").and.returnValue(undefined);
		await run.run("doc");
		expect(doc.execute).toHaveBeenCalled();
		done();
	});
	it("Should fire properly - test", async done => {
		spyOn(test , "execute").and.returnValue(undefined);
		await run.run("test");
		expect(test.execute).toHaveBeenCalled();
		done();
	});
	it("Should fire properly - start", async done => {
		spyOn(start , "execute").and.returnValue(undefined);
		await run.run("start");
		expect(start.execute).toHaveBeenCalled();
		done();
	});
	it("Should fire properly - list", async done => {
		spyOn(list , "execute").and.returnValue(undefined);
		await run.run("list");
		expect(list.execute).toHaveBeenCalled();
		done();
	});
	it("Should fire properly - fallback to default", async done => {
		spyOn(Util , "log");
		spyOn(GoogleAnalytics, "post");
		spyOn(PromptSession.prototype, "start");
		await run.run("Nonexistent command");

		// expected console output:
		expect(Util.log).toHaveBeenCalledWith("Starting Step by step mode.", "green");
		expect(Util.log).toHaveBeenCalledWith("For available commands, stop this execution and use --help.", "green");
		expect(PromptSession.prototype.start).toHaveBeenCalled();
		done();
	});
});
