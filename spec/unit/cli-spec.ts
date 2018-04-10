import chalk from "chalk";
import * as inquirer from "inquirer";
import * as run from "../../lib/cli";
import { default as add } from "../../lib/commands/add";
import { default as build } from "../../lib/commands/build";
import { default as config } from "../../lib/commands/config";
import { default as doc } from "../../lib/commands/doc";
import { default as generate } from "../../lib/commands/generate";
import { default as list } from "../../lib/commands/list";
import { default as newCommand } from "../../lib/commands/new";
import { default as quickstart } from "../../lib/commands/quickstart";
import { default as start } from "../../lib/commands/start";
import { default as test } from "../../lib/commands/test";
import { GoogleAnalytic } from "../../lib/GoogleAnalytic";
import { PromptSession } from "../../lib/PromptSession";
import {TemplateManager} from "../../lib/TemplateManager";
import { Util } from "../../lib/Util";
import * as yargs from "../../node_modules/yargs";

describe("Unit - Cli.ts", () => {
	beforeEach(() => {
		spyOn(GoogleAnalytic, "post");
	});

	/*
	xit("Should fire properly - XX", async done => {
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
		spyOn(quickstart , "execute").and.returnValue(Promise.resolve(true));
		spyOn(Util , "log");
		await run.run("quickstart");
		expect(quickstart.execute).toHaveBeenCalled();
		expect(Util.log).toHaveBeenCalled();
		expect(GoogleAnalytic.post).toHaveBeenCalled();
		done();
	});
	it("Should fire properly - add", async done => {
		spyOn(add , "check").and.returnValue(false);
		await run.run("add");
		expect(add.check).toHaveBeenCalled();
		expect(GoogleAnalytic.post).toHaveBeenCalled();
		done();
	});
	it("Should fire properly - build", async done => {
		spyOn(build , "execute").and.returnValue(true);
		await run.run("build");
		expect(build.execute).toHaveBeenCalled();
		expect(GoogleAnalytic.post).toHaveBeenCalled();
		done();
	});
	it("Should fire properly - doc", async done => {
		spyOn(doc , "execute").and.returnValue(true);
		await run.run("doc");
		expect(doc.execute).toHaveBeenCalled();
		expect(GoogleAnalytic.post).toHaveBeenCalled();
		done();
	});
	it("Should fire properly - test", async done => {
		spyOn(test , "execute").and.returnValue(true);
		await run.run("test");
		expect(test.execute).toHaveBeenCalled();
		expect(GoogleAnalytic.post).toHaveBeenCalled();
		done();
	});
	it("Should fire properly - start", async done => {
		spyOn(start , "execute").and.returnValue(true);
		await run.run("start");
		expect(start.execute).toHaveBeenCalled();
		expect(GoogleAnalytic.post).toHaveBeenCalled();
		done();
	});
	it("Should fire properly - list", async done => {
		spyOn(list , "execute").and.returnValue(true);
		await run.run("list");
		expect(list.execute).toHaveBeenCalled();
		expect(GoogleAnalytic.post).toHaveBeenCalled();
		done();
	});
	xit("Should fire properly - fallback to default", async done => {
		spyOn(Util , "log");
		await run.run("Nonexistent command");
		expect(Util.log).toHaveBeenCalledTimes(2);
		done();
	});
});
