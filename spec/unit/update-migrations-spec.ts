import { App, getMigrationsCollection, readMigrations, Util } from "@igniteui/cli-core";
import * as child_process from "child_process";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { runMigrations } from "../../packages/cli/lib/commands/update-migrations";

describe("Integration - update migrations runner", () => {
	const APP = "export const App = () => <div />;\n";
	let originalCwd: string;
	let tempDir: string;
	let output: string[];

	const fixture: Record<string, string | object> = {
		"package.json": { name: "fixture-lib", "ig-update": { migrations: { react: "./migrations/collection.json" } } },
		"migrations/collection.json": {
			schematics: {
				first: { version: "1.0.0", description: "First", factory: "./first" },
				second: { version: "2.0.0", description: "Second", factory: "./second" },
				broken: { version: "2.0.0", description: "Broken", factory: "./broken" },
				devkit: { version: "2.0.0", description: "Imports DevKit", factory: "./devkit" }
			}
		},
		"migrations/first.js": `const append = require("helper");
exports.default = () => (tree, { logger }) => { logger.info("first applied"); append(tree, "first"); };`,
		"migrations/second.js": `const append = require("helper");
exports.default = () => (tree, { logger }) => { logger.debug("hidden"); logger.warn("warning"); logger.error("error"); append(tree, "second"); };`,
		"migrations/broken.js": `exports.default = () => tree => { tree.overwrite("src/app.tsx", "broken"); throw new Error("boom"); };`,
		"migrations/devkit.js": `require("@angular-devkit/schematics"); exports.default = () => () => {};`
	};
	const helper = `module.exports = (tree, line) => tree.overwrite("src/app.tsx", tree.read("src/app.tsx").toString() + "// " + line + "\\n");`;

	function write(file: string, content: string | object) {
		fs.mkdirSync(path.dirname(file), { recursive: true });
		fs.writeFileSync(file, typeof content === "string" ? content : JSON.stringify(content));
	}

	/** The fixture installed by npm (hoisted), or by pnpm (linked into the store, with its dependencies next to it) */
	function project(layout: "npm" | "pnpm") {
		write("src/app.tsx", APP);
		const modules = layout === "npm" ? "node_modules" : path.join(tempDir, "node_modules/.pnpm/fixture-lib@2.0.0/node_modules");
		for (const file of Object.keys(fixture)) {
			write(path.join(modules, "fixture-lib", file), fixture[file]);
		}
		write(path.join(modules, "helper/index.js"), helper);
		if (layout === "pnpm") {
			fs.symlinkSync(path.join(modules, "fixture-lib"), "node_modules/fixture-lib", "junction");
		}

		const collection = getMigrationsCollection("node_modules/fixture-lib", "react")!;
		const migrations = readMigrations(collection);
		return { collection, pick: (...names: string[]) => names.map(name => migrations.find(m => m.name === name)!) };
	}

	const app = () => fs.readFileSync("src/app.tsx", "utf8");

	beforeEach(() => {
		originalCwd = process.cwd();
		tempDir = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), "igniteui-update-migrations-")));
		process.chdir(tempDir);
		App.initialize();
		output = [];
		for (const method of ["log", "warn"] as const) {
			spyOn(Util, method).and.callFake((message: string) => { output.push(message); });
		}
	});

	afterEach(() => {
		process.chdir(originalCwd);
		fs.rmSync(tempDir, { recursive: true, force: true });
	});

	for (const layout of ["npm", "pnpm"] as const) {
		it(`runs the migrations in order, each on the changes of the one before (${layout} layout)`, async () => {
			const { collection, pick } = project(layout);

			const result = await runMigrations(collection, pick("first", "second"), "npm");

			expect(result).toEqual({ completed: pick("first", "second"), notRun: [] });
			expect(app()).toBe(APP + "// first\n// second\n");
			expect(output).toEqual(["  first: First", "first applied", "    UPDATE src/app.tsx", "  second: Second", "warning", "error", "    UPDATE src/app.tsx"]);
			expect(Util.warn).toHaveBeenCalledWith("warning", "yellow");
			expect(Util.warn).toHaveBeenCalledWith("error", "red");
		});
	}

	it("stops at a failing migration and doesn't write its changes", async () => {
		const { collection, pick } = project("npm");

		const result = await runMigrations(collection, pick("first", "broken", "second"));

		expect(result).toEqual({ completed: pick("first"), failed: { migration: pick("broken")[0], error: "boom" }, notRun: pick("second") });
		expect(app()).toBe(APP + "// first\n");
	});

	it("reports a factory that can't resolve its imports as a failed migration", async () => {
		const { collection, pick } = project("pnpm");

		const result = await runMigrations(collection, pick("devkit", "first"));

		expect(result).toEqual({
			completed: [],
			failed: { migration: pick("devkit")[0], error: jasmine.stringMatching(/Cannot find module '@angular-devkit\/schematics'/) },
			notRun: pick("first")
		});
		expect(app()).toBe(APP);
	});

	it("doesn't load DevKit until migrations run", () => {
		const runner = require.resolve("../../packages/cli/lib/commands/update-migrations");
		const loaded = child_process.execFileSync(process.execPath, ["-e",
			`require(${JSON.stringify(runner)}); console.log(Object.keys(require.cache).filter(m => m.includes("@angular-devkit")).length);`
		], { encoding: "utf8" });
		expect(loaded.trim()).toBe("0");
	});
});
