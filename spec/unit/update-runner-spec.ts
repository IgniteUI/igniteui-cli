import { Util } from "@igniteui/cli-core";
import fs from "fs";
import { selectRunner } from "../../packages/cli/lib/commands/update-runner";
import * as versionUpdate from "../../packages/core/update/version-update";

describe("Unit - update runner", () => {
	let originalEnv: NodeJS.ProcessEnv;
	let existsSync: jasmine.Spy;
	let version: jasmine.Spy;
	let npmView: jasmine.Spy;

	const manifests = (...versions: string[]) => versions.map(v => ({ version: v }));

	function select(running: string, published: unknown, verbose = false) {
		version.and.returnValue(running);
		npmView.and.returnValue(published);
		return selectRunner(verbose);
	}

	beforeEach(() => {
		originalEnv = process.env;
		process.env = { ...originalEnv };
		delete process.env.IG_DISABLE_VERSION_CHECK;
		existsSync = spyOn(fs, "existsSync").and.returnValue(false);
		version = spyOn(Util, "version");
		npmView = spyOn(versionUpdate, "npmView");
		spyOn(Util, "log");
		spyOn(Util, "warn");
		spyOn(Util, "error");
	});

	afterEach(() => {
		process.env = originalEnv;
	});

	it("looks up the running major once, without retries, and selects its newest version above the running one", () => {
		expect(select("16.0.0", manifests("16.0.0", "16.2.1", "16.1.0"))).toBe("16.2.1");
		expect(npmView).toHaveBeenCalledOnceWith("igniteui-cli@16", ["name", "version", "engines"], false, ["--fetch-retries=0", "--fetch-timeout=15000"]);
	});

	it("selects only versions of at least 16.0.0 that are newer than the running one, from an array or a single match", () => {
		const cases: [string, unknown, string | undefined][] = [
			["16.0.0", manifests("16.0.0"), undefined],
			["16.2.1", manifests("16.0.0", "16.2.1"), undefined],
			["16.3.0-beta.0", manifests("16.2.1"), undefined],
			["16.3.0-beta.0", manifests("16.2.1", "16.3.0"), "16.3.0"],
			["15.8.2", manifests("15.9.0"), undefined],
			["16.0.0-alpha.0", manifests("16.0.0-alpha.1"), undefined],
			["16.0.0", manifests("16.0.1", "latest"), "16.0.1"],
			["16.0.0", { version: "16.0.1" }, "16.0.1"]
		];
		for (const [running, published, runner] of cases) {
			expect(select(running, published)).withContext(`running ${running}, published ${JSON.stringify(published)}`).toBe(runner);
		}
	});

	it("selects the newest version that supports the running Node.js, naming a newer one that doesn't with --verbose", () => {
		const published = [{ version: "16.1.0", engines: { node: ">=1" } }, { version: "16.2.0", engines: { node: ">=999" } }];

		expect(select("16.0.0", published, true)).toBe("16.1.0");
		expect(Util.log).toHaveBeenCalledWith(`Skipped igniteui-cli 16.2.0: it requires Node.js >=999 (running ${process.version}).`, "gray");
		expect(select("16.0.0", [{ version: "16.1.0", engines: { node: "latest" } }])).toBeUndefined();
	});

	it("warns and continues with the running version when the lookup fails", () => {
		version.and.returnValue("16.0.0");
		npmView.and.throwError("Unable to get igniteui-cli@16 from the registry: request failed.");

		expect(selectRunner(false)).toBeUndefined();
		expect(Util.warn).toHaveBeenCalledOnceWith("Unable to get igniteui-cli@16 from the registry: request failed. Continuing with igniteui-cli 16.0.0.", "yellow");
		expect(Util.error).not.toHaveBeenCalled();
	});

	it("skips the lookup for a repository build or when IG_DISABLE_VERSION_CHECK is 1 or true", () => {
		const cases: [string, string | undefined][] = [["1", undefined], ["true", undefined], ["TRUE", undefined], ["0", "16.1.0"], ["false", "16.1.0"]];
		for (const [value, runner] of cases) {
			process.env.IG_DISABLE_VERSION_CHECK = value;

			expect(select("16.0.0", manifests("16.1.0"), true)).withContext(value).toBe(runner);
		}
		expect(Util.log).toHaveBeenCalledWith("Skipped the igniteui-cli version check: IG_DISABLE_VERSION_CHECK is set.", "gray");

		delete process.env.IG_DISABLE_VERSION_CHECK;
		existsSync.and.callThrough();

		expect(select("16.0.0", manifests("16.1.0"), true)).toBeUndefined();
		expect(Util.log).toHaveBeenCalledWith("Skipped the igniteui-cli version check: repository build.", "gray");
		expect(npmView).toHaveBeenCalledTimes(2);
	});
});
