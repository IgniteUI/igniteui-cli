import { DotnetTemplateManager, Util } from "@igniteui/cli-core";

describe("Unit - DotnetTemplateManager", () => {
	let spawnSpy: jasmine.Spy;

	beforeEach(() => {
		spyOn(Util, "log");
		spyOn(Util, "error");
		spyOn(Util, "greenCheck").and.returnValue("√");
		spawnSpy = spyOn(Util, "spawnSync");
	});

	function mockResult(overrides: Partial<{ status: number; stdout: any; error: any }> = {}) {
		return { status: 0, stdout: "", error: undefined, ...overrides } as any;
	}

	describe("getSdkMajorVersion", () => {
		it("parses the leading major version", () => {
			spawnSpy.and.returnValue(mockResult({ stdout: "8.0.100" }));
			expect(DotnetTemplateManager.getSdkMajorVersion()).toBe(8);
			expect(spawnSpy).toHaveBeenCalledWith("dotnet", ["--version"], { encoding: "utf8" });
		});

		it("returns null when dotnet is missing (error)", () => {
			spawnSpy.and.returnValue(mockResult({ error: new Error("ENOENT"), status: null }));
			expect(DotnetTemplateManager.getSdkMajorVersion()).toBeNull();
		});

		it("returns null on non-zero status", () => {
			spawnSpy.and.returnValue(mockResult({ status: 1, stdout: "" }));
			expect(DotnetTemplateManager.getSdkMajorVersion()).toBeNull();
		});
	});

	describe("isTemplateInstalled", () => {
		it("returns true when the short name is present and status is 0", () => {
			spawnSpy.and.returnValue(mockResult({ stdout: "Template Name   Short Name\nigb-blazor ..." }));
			expect(DotnetTemplateManager.isTemplateInstalled()).toBeTrue();
		});

		it("returns false when the short name is absent", () => {
			spawnSpy.and.returnValue(mockResult({ stdout: "nothing here" }));
			expect(DotnetTemplateManager.isTemplateInstalled()).toBeFalse();
		});

		it("returns false on non-zero status (e.g. 103)", () => {
			spawnSpy.and.returnValue(mockResult({ status: 103, stdout: "" }));
			expect(DotnetTemplateManager.isTemplateInstalled()).toBeFalse();
		});
	});

	describe("installTemplate", () => {
		it("installs the latest package (no version pin) and returns true", () => {
			spawnSpy.and.returnValue(mockResult());
			expect(DotnetTemplateManager.installTemplate()).toBeTrue();
			expect(spawnSpy).toHaveBeenCalledWith(
				"dotnet", ["new", "install", "IgniteUI.Blazor.Templates"], { stdio: "inherit" });
		});

		it("returns false and logs an error on failure", () => {
			spawnSpy.and.returnValue(mockResult({ status: 1 }));
			expect(DotnetTemplateManager.installTemplate()).toBeFalse();
			expect(Util.error).toHaveBeenCalled();
		});
	});

	describe("scaffold", () => {
		it("aborts when the SDK is missing", () => {
			spawnSpy.and.returnValue(mockResult({ error: new Error("ENOENT"), status: null }));
			expect(DotnetTemplateManager.scaffold({ name: "app", theme: "bootstrap" })).toBeFalse();
			expect(Util.error).toHaveBeenCalledWith(jasmine.stringMatching("dotnet.microsoft.com/download"), "red");
		});

		it("aborts when the SDK is older than 8", () => {
			spawnSpy.and.returnValue(mockResult({ stdout: "6.0.400" }));
			expect(DotnetTemplateManager.scaffold({ name: "app", theme: "bootstrap" })).toBeFalse();
			expect(Util.error).toHaveBeenCalledWith(jasmine.stringMatching("requires .NET 8"), "red");
		});

		it("builds the exact dotnet args array, omitting the weather flag", () => {
			spawnSpy.and.callFake((_cmd: string, args: string[]) => {
				if (args[0] === "--version") { return mockResult({ stdout: "8.0.100" }); }
				if (args[1] === "list") { return mockResult({ stdout: "igb-blazor" }); }
				return mockResult();
			});

			const result = DotnetTemplateManager.scaffold({
				name: "my-blazor", theme: "material",
				extraConfig: { Hosting: "Auto", Variant: "dark" }
			});

			expect(result).toBeTrue();
			const createCall = spawnSpy.calls.all().find(c => c.args[1][0] === "new" && c.args[1][1] === "igb-blazor");
			expect(createCall.args[1]).toEqual([
				"new", "igb-blazor",
				"-n", "my-blazor",
				"-o", "my-blazor",
				"--Hosting", "Auto",
				"--Theme", "material",
				"--Variant", "dark"
			]);
			expect(createCall.args[1]).not.toContain("--IncludeWeatherSample");
			expect(createCall.args[2]).toEqual({ stdio: "inherit" });
		});

		it("applies Server/light defaults when extraConfig keys are absent", () => {
			spawnSpy.and.callFake((_cmd: string, args: string[]) => {
				if (args[0] === "--version") { return mockResult({ stdout: "9.0.100" }); }
				if (args[1] === "list") { return mockResult({ stdout: "igb-blazor" }); }
				return mockResult();
			});

			DotnetTemplateManager.scaffold({ name: "app", theme: "bootstrap" });

			const createCall = spawnSpy.calls.all().find(c => c.args[1][0] === "new" && c.args[1][1] === "igb-blazor");
			expect(createCall.args[1]).toContain("Server");
			expect(createCall.args[1]).toContain("light");
		});

		it("keeps a name with spaces as a single argv element", () => {
			spawnSpy.and.callFake((_cmd: string, args: string[]) => {
				if (args[0] === "--version") { return mockResult({ stdout: "8.0.100" }); }
				if (args[1] === "list") { return mockResult({ stdout: "igb-blazor" }); }
				return mockResult();
			});

			DotnetTemplateManager.scaffold({ name: "my blazor app", theme: "bootstrap" });

			const createCall = spawnSpy.calls.all().find(c => c.args[1][0] === "new" && c.args[1][1] === "igb-blazor");
			expect(createCall.args[1]).toContain("my blazor app");
		});

		it("adds --SkipRestore only when skipInstall is set", () => {
			spawnSpy.and.callFake((_cmd: string, args: string[]) => {
				if (args[0] === "--version") { return mockResult({ stdout: "8.0.100" }); }
				if (args[1] === "list") { return mockResult({ stdout: "igb-blazor" }); }
				return mockResult();
			});

			DotnetTemplateManager.scaffold({ name: "app", theme: "bootstrap", skipInstall: true });
			let createCall = spawnSpy.calls.all().find(c => c.args[1][0] === "new" && c.args[1][1] === "igb-blazor");
			expect(createCall.args[1]).toContain("--SkipRestore");

			spawnSpy.calls.reset();
			DotnetTemplateManager.scaffold({ name: "app", theme: "bootstrap" });
			createCall = spawnSpy.calls.all().find(c => c.args[1][0] === "new" && c.args[1][1] === "igb-blazor");
			expect(createCall.args[1]).not.toContain("--SkipRestore");
		});

		it("installs the template first when not present", () => {
			const order: string[] = [];
			spawnSpy.and.callFake((_cmd: string, args: string[]) => {
				if (args[0] === "--version") { return mockResult({ stdout: "8.0.100" }); }
				if (args[1] === "list") { order.push("list"); return mockResult({ stdout: "no match" }); }
				if (args[1] === "install") { order.push("install"); return mockResult(); }
				order.push("create");
				return mockResult();
			});

			expect(DotnetTemplateManager.scaffold({ name: "app", theme: "bootstrap" })).toBeTrue();
			expect(order).toEqual(["list", "install", "create"]);
		});

		it("aborts when template install fails (offline)", () => {
			spawnSpy.and.callFake((_cmd: string, args: string[]) => {
				if (args[0] === "--version") { return mockResult({ stdout: "8.0.100" }); }
				if (args[1] === "list") { return mockResult({ stdout: "no match" }); }
				if (args[1] === "install") { return mockResult({ status: 1 }); }
				return mockResult();
			});

			expect(DotnetTemplateManager.scaffold({ name: "app", theme: "bootstrap" })).toBeFalse();
			// no create call attempted
			const createCall = spawnSpy.calls.all().find(c => c.args[1][0] === "new" && c.args[1][1] === "igb-blazor");
			expect(createCall).toBeUndefined();
		});

		it("returns false when project creation fails", () => {
			spawnSpy.and.callFake((_cmd: string, args: string[]) => {
				if (args[0] === "--version") { return mockResult({ stdout: "8.0.100" }); }
				if (args[1] === "list") { return mockResult({ stdout: "igb-blazor" }); }
				return mockResult({ status: 1 });
			});

			expect(DotnetTemplateManager.scaffold({ name: "app", theme: "bootstrap" })).toBeFalse();
			expect(Util.error).toHaveBeenCalledWith(
				"Project creation failed (see dotnet output above).", "red");
		});
	});
});
