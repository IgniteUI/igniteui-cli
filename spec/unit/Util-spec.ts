import { Template, Util } from "@igniteui/cli-core";
// default imports give the module objects themselves, so their functions can be spied on
import child_process from "child_process";
import fs from "fs";
import * as path from "path";
import { BaseComponent } from "../../packages/core/templates/BaseComponent";

describe("Unit - Util", () => {
	it("className should replace dashes and empty spaces", async () => {
		const projectNames = [
			{
				name: "name with spaces",
				valid: "NameWithSpaces"
			},
			{
				name: "name-with-dashes",
				valid: "NameWithDashes"
			},
			{
				name: "miXed CaSe",
				valid: "MiXedCaSe"
			}
		];

		for (const item of projectNames) {
			expect(Util.className(item.name)).toEqual(item.valid);
		}
	});

	it("quoteIfNeeded should wrap values with whitespace in double quotes", () => {
		expect(Util.quoteIfNeeded("IG Project")).toEqual(`"IG Project"`);
		expect(Util.quoteIfNeeded("my-app")).toEqual("my-app");
		expect(Util.quoteIfNeeded("plain")).toEqual("plain");
	});

	it("should read the existing app folder name and return incremented app name ", () => {
		const defaultName = "IG Project";

		spyOn(Util, "directoryExists").and.callFake(function name(myParam) {
			if (myParam.endsWith(defaultName)) {
				return true;
			} else {
				return false;
			}
		});

		expect(Util.getAvailableName(defaultName, true)).toEqual("IG Project 1");
		expect(Util.directoryExists).toHaveBeenCalledTimes(2);
	});

	it("should read the existing component folder name and return incremented component name ", () => {
		const defaultComponentName = "grid";

		spyOn(Util, "directoryExists").and.callFake(function name(myParam) {
			if (myParam.endsWith(defaultComponentName)) {
				return true;
			} else {
				return false;
			}
		});

		expect(Util.getAvailableName(defaultComponentName, false)).toEqual("grid 1");
		expect(Util.getAvailableName(defaultComponentName, false, "jQuery")).toEqual("grid 1");
		expect(Util.getAvailableName(defaultComponentName, false, "React")).toEqual("grid 1");
		expect(Util.getAvailableName(defaultComponentName, false, "Angular", "igx-ts")).toEqual("grid 1");
		expect(Util.directoryExists).toHaveBeenCalledTimes(8);
	});

	it("should read the existing component view name and return incremented view name ", () => {
		let defaultViewName = "editors-calculation-form";
		spyOn(Util, "directoryExists").and.callFake(function name(myParam) {
			if (myParam.endsWith(defaultViewName)) {
				return true;
			} else {
				return false;
			}
		});

		expect(Util.getAvailableName("editors-calculation-form", false)).toEqual("editors-calculation-form 1");
		expect(Util.getAvailableName("editors-calculation-form", false, "jQuery")).toEqual("editors-calculation-form 1");
		expect(Util.getAvailableName("editors-calculation-form", false, "Angular", "igx-ts")).
			toEqual("editors-calculation-form 1");
		defaultViewName = "awesome-grid";
		expect(Util.getAvailableName("awesome-grid", false, "Angular", "igx-ts")).toEqual("awesome-grid 1");
		expect(Util.directoryExists).toHaveBeenCalledTimes(8);
	});

	describe("Relative paths", () => {
		it("Creates correct relative path for child structure", async () => {

			// default use, shared root
			expect(Util.relativePath(
				"C:\\src\\app\\app-routing.module.ts",
				"C:\\src\\app\\carousel\\carousel.component.ts", true, true
			))
			.toBe("./carousel/carousel.component", "Shared Win root, file to file => posix ");
			expect(Util.relativePath(
				"/home/app/app-module.ts",
				"/home/app/grid/grid.component.ts", true, true
			))
			.toBe("./grid/grid.component", "Shared posix root, file to file => posix ");

			expect(Util.relativePath(
				"C:\\home\\app-routing.module.ts",
				"C:/home/app/grid/grid.component.ts", true, false
			))
			.toBe("./app/grid/grid.component.ts", "Win style to posix file, keep ext => posix");
		});

		it("Creates correct relative path for parent dir", async () => {
			// going up levels
			expect(Util.relativePath(
				"C:\\common\\folder1\\folder2\\folder3\\file.ts",
				"C:\\common\\dir1\\dir2\\target.ts", false
			))
			.toBe("..\\..\\..\\dir1\\dir2\\target", "Win style, file to file => win");

			expect(Util.relativePath(
				"C:\\Work\\git\\Ignite-UI-CLI\\spec\\unit\\ts-transforms\\TypeScriptUtils-spec.ts",
				"C:\\Work\\git\\Ignite-UI-CLI\\lib\\project-utility\\TypeScriptUtils.ts", true
			))
			// same as top level import above
			.toBe("../../../lib/project-utility/TypeScriptUtils", "Win style, file to file => posix");

			expect(Util.relativePath(
				"C:\\common\\folder1\\folder2\\folder3\\",
				"C:\\common\\dir1\\dir2\\target.ts", true
			))
			.toBe("../../../dir1/dir2/target", "Win style, folder to file => posix");

			expect(Util.relativePath(
				"C:\\common\\folder1\\folder2\\folder3\\",
				"C:\\common\\dir1\\dir2\\target", true
			))
			.toBe("../../../dir1/dir2/target", "Win style, folder to file w/o ext => posix");

			expect(Util.relativePath(
				"C:/common/folder1/folder2/folder3/",
				"C:\\common\\dir1\\dir2\\target.ts", true
			))
			.toBe("../../../dir1/dir2/target", "posix folder to Win style file => posix");

			expect(Util.relativePath(
				"C:/common/folder1/folder2/folder3/",
				"C:\\common\\dir1\\dir2\\target.ts", true, false
			))
			.toBe("../../../dir1/dir2/target.ts", "posix folder to Win style file, keep ext => posix");
		});
	});

	it("spawnSync accepts the 'dotnet' command", () => {
		// compile-time guarantee that 'dotnet' is in the allowed command union
		const cmd: Parameters<typeof Util.spawnSync>[0] = "dotnet";
		expect(cmd).toBe("dotnet");
		expect(typeof Util.spawnSync).toBe("function");
	});

	describe("canPrompt", () => {
		let originalStdoutIsTTY: boolean | undefined;
		let originalStdinIsTTY: boolean | undefined;
		let originalCI: string | undefined;

		beforeEach(() => {
			originalStdoutIsTTY = process.stdout.isTTY;
			originalStdinIsTTY = process.stdin.isTTY;
			originalCI = process.env.CI;
		});

		afterEach(() => {
			(process.stdout as any).isTTY = originalStdoutIsTTY;
			(process.stdin as any).isTTY = originalStdinIsTTY;
			if (originalCI === undefined) {
				delete process.env.CI;
			} else {
				process.env.CI = originalCI;
			}
		});

		it("returns true when stdout and stdin are TTY and CI is not set", () => {
			(process.stdout as any).isTTY = true;
			(process.stdin as any).isTTY = true;
			delete process.env.CI;

			expect(Util.canPrompt()).toBe(true);
		});

		it("returns false when stdout is not TTY", () => {
			(process.stdout as any).isTTY = false;
			(process.stdin as any).isTTY = true;
			delete process.env.CI;

			expect(Util.canPrompt()).toBe(false);
		});

		it("returns false when stdin is not TTY", () => {
			(process.stdout as any).isTTY = true;
			(process.stdin as any).isTTY = false;
			delete process.env.CI;

			expect(Util.canPrompt()).toBe(false);
		});

		it("returns false when CI environment variable is set", () => {
			(process.stdout as any).isTTY = true;
			(process.stdin as any).isTTY = true;
			process.env.CI = "true";

			expect(Util.canPrompt()).toBe(false);
		});
	});

	describe("getOSFriendlyName", () => {
		it("maps known platforms and falls back for others", () => {
			expect(Util.getOSFriendlyName("win32")).toBe("Windows");
			expect(Util.getOSFriendlyName("darwin")).toBe("Mac OS");
			expect(Util.getOSFriendlyName("freebsd")).toBe("FreeBSD");
			expect(Util.getOSFriendlyName("linux")).toBe("Unknown OS");
		});
	});

	describe("merge", () => {
		it("returns the target unchanged without a source", () => {
			const target = { a: 1 };

			expect(Util.merge(target, null)).toBe(target);
			expect(Util.merge(target, undefined)).toEqual({ a: 1 });
		});

		it("merges nested objects and unique array items", () => {
			const target = { nested: { a: 1 }, list: [1, 2] };

			Util.merge(target, { nested: { b: 2 }, list: [2, 3], added: { c: 3 } });

			expect(target).toEqual({ nested: { a: 1, b: 2 }, list: [1, 2, 3], added: { c: 3 } } as any);
		});

		it("skips arrays when the target value is not an array", () => {
			const target = { list: "not an array" };

			Util.merge(target, { list: [1, 2] });

			expect(target.list).toBe("not an array");
		});
	});

	describe("execSync", () => {
		let exitSpy: jasmine.Spy;
		let childExecSpy: jasmine.Spy;

		beforeEach(() => {
			exitSpy = spyOn(process, "exit");
			childExecSpy = spyOn(child_process, "execSync");
		});

		it("returns the command output", () => {
			childExecSpy.and.returnValue("output");

			expect(Util.execSync("cmd", { cwd: "dir" })).toBe("output");
			expect(childExecSpy).toHaveBeenCalledWith("cmd", { cwd: "dir" });
		});

		it("exits when the process was interrupted with ^C", () => {
			childExecSpy.and.throwError(Object.assign(new Error("interrupted"), { stderr: Buffer.from("output^C"), status: 1 }));

			Util.execSync("cmd");

			expect(exitSpy).toHaveBeenCalled();
		});

		it("exits on SIGINT exit codes", () => {
			for (const status of [130, 255, 3221225786]) {
				exitSpy.calls.reset();
				childExecSpy.and.throwError(Object.assign(new Error("killed"), { status }));

				Util.execSync("cmd");

				expect(exitSpy).withContext(`status ${status}`).toHaveBeenCalled();
			}
		});

		it("rethrows other errors", () => {
			childExecSpy.and.throwError(Object.assign(new Error("failed"), { status: 1, stderr: "error" }));

			expect(() => Util.execSync("cmd")).toThrowError("failed");
			expect(exitSpy).not.toHaveBeenCalled();
		});
	});

	describe("gitInit", () => {
		it("initializes and commits the project", () => {
			const execSpy = spyOn(Util, "execSync");
			spyOn(Util, "log");

			Util.gitInit("parent", "proj");

			const options = jasmine.objectContaining({ cwd: path.join("parent", "proj") });
			expect(execSpy.calls.allArgs()).toEqual([
				["git init", options],
				["git add .", options],
				["git commit -m \"Initial commit for project\"", options]
			]);
			expect(Util.log).toHaveBeenCalledWith(jasmine.stringMatching(/Git Initialized and Project 'proj' Committed/));
		});

		it("logs an error when git fails", () => {
			spyOn(Util, "execSync").and.throwError("git not found");
			spyOn(Util, "error");

			Util.gitInit("parent", "proj");

			expect(Util.error).toHaveBeenCalledWith(
				"Git initialization failed. Install Git in order to automatically commit the project.", "yellow");
		});
	});

	describe("truncate", () => {
		it("keeps text within the limit", () => {
			expect(Util.truncate("short", 10)).toBe("short");
			expect(Util.truncate("exactly10!", 10)).toBe("exactly10!");
		});

		it("truncates longer text with the truncate characters", () => {
			expect(Util.truncate("some longer text", 10)).toBe("some lo...");
			expect(Util.truncate("some longer text", 10, 2, "-")).toBe("some lon--");
		});
	});

	describe("createDirectory", () => {
		it("ignores existing folders", () => {
			spyOn(fs, "mkdirSync").and.throwError(Object.assign(new Error("exists"), { code: "EEXIST" }));

			expect(() => Util.createDirectory("existing")).not.toThrow();
		});

		it("logs and rethrows other errors", () => {
			spyOn(fs, "mkdirSync").and.throwError(Object.assign(new Error("permission denied"), { code: "EACCES" }));
			spyOn(Util, "error");

			expect(() => Util.createDirectory("locked")).toThrowError("permission denied");
			expect(Util.error).toHaveBeenCalledWith(`Failed to create ${path.resolve(process.cwd(), "locked")}`, "red");
			expect(Util.error).toHaveBeenCalledWith("permission denied", "red");
		});
	});

	describe("formatChoices", () => {
		const createComponent = (name: string, templates: Partial<Template>[], description = "") => {
			const component = Object.create(BaseComponent.prototype) as BaseComponent;
			return Object.assign(component, { name, description, templates });
		};

		// not defined when stdout isn't a TTY
		let columns: number;
		beforeEach(() => {
			columns = process.stdout.columns;
			process.stdout.columns = 80;
		});
		afterEach(() => {
			process.stdout.columns = columns;
		});

		it("uses the template description for a component with a single template", () => {
			const choices = Util.formatChoices([createComponent("Grid", [{ description: "Grid template" }], "Grid component")]);

			expect(choices[0].value).toBe("Grid");
			expect(choices[0].short).toBe("Grid");
			expect(choices[0].name).toContain("Grid template");
			expect(choices[0].name).not.toContain("Grid component");
		});

		it("uses the component description for a component with multiple templates", () => {
			const choices = Util.formatChoices([
				createComponent("Grid", [{ description: "first" }, { description: "second" }], "Grid component")
			]);

			expect(choices[0].name).toContain("Grid component");
		});

		it("keeps only the name when there is no description", () => {
			const choices = Util.formatChoices([{ name: "Plain", description: "" }]);

			expect(choices).toEqual([{ name: "Plain", short: "Plain", value: "Plain" }]);
		});
	});
});
