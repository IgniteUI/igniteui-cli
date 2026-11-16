import { App, getMigrationsCollection, readMigrations, Util } from "@igniteui/cli-core";
import * as child_process from "child_process";
import fs = require("fs");
import * as os from "os";
import * as path from "path";
import { migrationsUnsupported, runMigrations } from "../../packages/cli/lib/update/migration-runner";

describe("Integration - update migrations runner", () => {
	const APP = "export const App = () => <div />;\n";
	let originalCwd: string;
	let originalCeiling: string | undefined;
	let tempDir: string;
	let output: string[];

	const fixture: Record<string, string | object> = {
		"package.json": { name: "fixture-lib", type: "module", "ig-update": { migrations: { react: "./migrations/collection.json" } } },
		"migrations/collection.json": {
			schematics: {
				first: { version: "1.0.0", description: "First", factory: "./1.0.0/first.js" },
				second: { version: "2.0.0", description: "Second", factory: "./2.0.0/second.js#second" },
				broken: { version: "2.0.0", factory: "./2.0.0/broken.js" },
				unresolved: { version: "2.0.0", factory: "./2.0.0/unresolved.js" },
				host: { version: "2.0.0", factory: "./2.0.0/host.js" },
				rule: { version: "2.0.0", factory: "./2.0.0/rule.js" },
				paths: { version: "2.0.0", factory: "./2.0.0/paths.js" }
			}
		},
		"migrations/1.0.0/first.js": `import append from "helper";
export default host => append(host, "first");`,
		"migrations/2.0.0/second.js": `import append from "helper";
export async function second(host) { await null; append(host, "second"); host.write("src/new.ts", "new"); }`,
		"migrations/2.0.0/broken.js": `export default host => { host.write("src/app.tsx", "broken"); throw new Error("boom"); };`,
		"migrations/2.0.0/unresolved.js": `import "not-installed"; export default () => {};`,
		"migrations/2.0.0/host.js": `export default host => { host.write(${JSON.stringify(path.join("src", "app.tsx"))}, "staged"); host.write("host.json", JSON.stringify({
	root: host.root, files: host.files().sort(), staged: host.read("./src/app.tsx"),
	typescript: typeof host.typescript.createProgram })); };`,
		"migrations/2.0.0/rule.js": `export default host => { host.write("src/app.tsx", "staged"); return tree => tree; };`,
		"migrations/2.0.0/paths.js": `export default host => {
	const outcome = file => { try { host.write(file, "x"); return "written"; } catch (error) { return error.message; } };
	host.write("outcomes.json", JSON.stringify(JSON.parse(host.read("paths.json")).map(outcome)));
};`
	};
	const helper = `module.exports = (host, line) => host.write("src/app.tsx", host.read("src/app.tsx") + "// " + line + "\\n");`;

	function write(file: string, content: string | object) {
		fs.mkdirSync(path.dirname(file), { recursive: true });
		fs.writeFileSync(file, typeof content === "string" ? content : JSON.stringify(content));
	}

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
	const git = (...args: string[]) => child_process.execFileSync("git", args, { stdio: "pipe" });
	const listed = () => JSON.parse(fs.readFileSync("host.json", "utf8")).files;

	beforeEach(() => {
		originalCwd = process.cwd();
		originalCeiling = process.env.GIT_CEILING_DIRECTORIES;
		tempDir = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), "igniteui-update-migrations-")));
		process.env.GIT_CEILING_DIRECTORIES = path.dirname(tempDir);
		process.chdir(tempDir);
		App.initialize();
		output = [];
		spyOn(Util, "log").and.callFake((message: string) => { output.push(message); });
	});

	afterEach(() => {
		process.chdir(originalCwd);
		if (originalCeiling === undefined) {
			delete process.env.GIT_CEILING_DIRECTORIES;
		} else {
			process.env.GIT_CEILING_DIRECTORIES = originalCeiling;
		}
		fs.rmSync(tempDir, { recursive: true, force: true });
	});

	it("runs the ES module migrations in order, each on the changes of the one before (pnpm layout)", async () => {
		const { collection, pick } = project("pnpm");

		const result = await runMigrations(collection, pick("first", "second"));

		expect(result).toEqual({ completed: pick("first", "second"), notRun: [] });
		expect(app()).toBe(APP + "// first\n// second\n");
		expect(fs.readFileSync("src/new.ts", "utf8")).toBe("new");
		expect(output).toEqual(["  first: First", "    UPDATE src/app.tsx", "  second: Second", "    UPDATE src/app.tsx", "    CREATE src/new.ts"]);
	});

	it("stops at a failing migration and doesn't write its changes (npm layout)", async () => {
		const { collection, pick } = project("npm");

		const result = await runMigrations(collection, pick("first", "broken", "second"));

		expect(result).toEqual({ completed: pick("first"), failed: { migration: pick("broken")[0], error: "boom" }, notRun: pick("second") });
		expect(app()).toBe(APP + "// first\n");
	});

	it("reports a factory that can't be loaded, or a missing factory, as a failed migration", async () => {
		const { collection, pick } = project("pnpm");
		const [unresolved, first] = pick("unresolved", "first");

		expect(await runMigrations(collection, [unresolved, first])).toEqual({
			completed: [],
			failed: { migration: unresolved, error: jasmine.stringMatching(/'not-installed'/) },
			notRun: [first]
		});
		const none = { name: "none" };
		expect((await runMigrations(collection, [none])).failed).toEqual({ migration: none, error: "The migration has no factory." });
		expect(app()).toBe(APP);
	});

	it("fails a factory that returns a function, like an Angular DevKit rule, writing nothing", async () => {
		const { collection, pick } = project("npm");

		const result = await runMigrations(collection, pick("rule"));

		expect(result.failed?.error).toMatch(/^The factory returned a function, like an Angular DevKit rule;/);
		expect(app()).toBe(APP);
	});

	it("confines the host to the project: no absolute, traversing or drive-relative path, nor one through a link", async () => {
		const { collection, pick } = project("npm");
		const outside = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), "igniteui-update-outside-")));
		try {
			fs.symlinkSync(outside, "link", "junction");
			const escaping = ["../a.txt", "src/../../a.txt", "/a.txt", path.join(outside, "a.txt"), "link/a.txt", "link/new/a.txt",
				...process.platform === "win32" ? [`${tempDir.slice(0, 2)}../a.txt`, `${tempDir[0] === "Z" ? "Y" : "Z"}:a.txt`, "\\\\server\\share\\a.txt"] : []];
			const inside = ["src/inside.txt", "./src/new/../inside2.txt"];
			write("paths.json", [...escaping, ...inside]);

			await runMigrations(collection, pick("paths"));

			expect(JSON.parse(fs.readFileSync("outcomes.json", "utf8")))
				.toEqual([...escaping.map(file => `"${file}" is outside the project.`), "written", "written"]);
			expect(fs.readdirSync(outside)).toEqual([]);
			expect(fs.readdirSync("src").sort()).toEqual(["app.tsx", "inside.txt", "inside2.txt"]);
		} finally {
			fs.rmSync(outside, { recursive: true, force: true });
		}
	});

	it("gives the project root, its files without node_modules and .git, and the staged content of normalized paths", async () => {
		const { collection, pick } = project("npm");
		write(".git/HEAD", "ref");

		await runMigrations(collection, pick("host"));

		expect(JSON.parse(fs.readFileSync("host.json", "utf8"))).toEqual({ root: tempDir, files: ["src/app.tsx"], staged: "staged", typescript: "function" });
		expect(app()).toBe("staged");
	});

	it("lists the files Git lists, but deleted, linked, nested-repository and node_modules ones", async () => {
		const { collection, pick } = project("npm");
		const outside = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), "igniteui-update-outside-")));
		const warn = spyOn(Util, "warn");
		try {
			git("init", "-q");
			for (const file of ["package.json", "src/new.ts", "src/gone.ts", "dist/bundle.js", "dist/kept.js", "nested/index.ts", path.join(outside, "a.ts")]) {
				write(file, "");
			}
			write(".gitignore", "dist/\n");
			git("add", ".gitignore", "package.json", "src/app.tsx", "src/gone.ts");
			git("add", "--force", "dist/kept.js");
			fs.rmSync("src/gone.ts");
			git("init", "-q", "nested");
			fs.symlinkSync(outside, "link", "junction");
			fs.symlinkSync(path.join(tempDir, "src"), "inner", "junction");

			await runMigrations(collection, pick("host"));

			expect(listed()).toEqual([".gitignore", "dist/kept.js", "package.json", "src/app.tsx", "src/new.ts"]);
			expect(warn.calls.allArgs()).toEqual([["    Skipped nested: a nested Git repository.", "yellow"]]);
		} finally {
			fs.rmSync(outside, { recursive: true, force: true });
		}
	});

	it("lists every file, with a warning, when the repository ignores the project", async () => {
		git("init", "-q");
		write(".gitignore", "app/\n");
		fs.mkdirSync("app");
		process.chdir("app");
		const { collection, pick } = project("npm");
		write("package.json", "");
		write("dist/bundle.js", "");
		const warn = spyOn(Util, "warn");

		await runMigrations(collection, pick("host"));

		expect(listed()).toEqual(["dist/bundle.js", "package.json", "src/app.tsx"]);
		expect(warn).toHaveBeenCalledOnceWith(
			"    Unable to list the files with Git (the repository ignores the project): the migrations may also change ignored files.", "yellow");
	});

	it("lists every file without Git when it's missing or fails, warning only when it fails", async () => {
		const { collection, pick } = project("npm");
		const warn = spyOn(Util, "warn");
		const spawn = spyOn(Util, "spawnSync").and.returnValues(
			{ status: null, error: Object.assign(new Error("spawnSync git ENOENT"), { code: "ENOENT" }) } as any,
			{ status: 128, stdout: "", stderr: "fatal: detected dubious ownership in repository at 'x'\n" } as any);

		await runMigrations(collection, pick("host"));
		expect(listed()).toEqual(["src/app.tsx"]);
		expect(warn).not.toHaveBeenCalled();

		await runMigrations(collection, pick("host"));
		expect(listed()).toEqual(["host.json", "src/app.tsx"]);
		expect(warn).toHaveBeenCalledOnceWith("    Unable to list the files with Git (fatal: detected dubious ownership in repository at 'x'): " +
			"the migrations may also change ignored files.", "yellow");
		expect(spawn).toHaveBeenCalledWith("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], jasmine.objectContaining({ cwd: tempDir }));
	});

	it("skips, with a warning, a listed file it may not read, and fails on other errors", async () => {
		const { collection, pick } = project("npm");
		write("package.json", "");
		write("src/secret.ts", "");
		spyOn(Util, "spawnSync").and.returnValue({ status: 0, stdout: "package.json\0src/app.tsx\0src/secret.ts\0", stderr: "" } as any);
		const warn = spyOn(Util, "warn");
		const lstat = fs.lstatSync;
		let code = "EACCES";
		spyOn(fs, "lstatSync").and.callFake(((file: fs.PathLike, options?: fs.StatSyncOptions) => {
			if (file === "src/secret.ts") {
				throw Object.assign(new Error(`${code}: lstat src/secret.ts`), { code });
			}
			return lstat(file, options);
		}) as typeof fs.lstatSync);

		await runMigrations(collection, pick("host"));

		expect(listed()).toEqual(["package.json", "src/app.tsx"]);
		expect(warn).toHaveBeenCalledOnceWith("    Skipped src/secret.ts: no permission to read it (EACCES).", "yellow");

		code = "EIO";
		expect((await runMigrations(collection, pick("host"))).failed?.error).toBe("EIO: lstat src/secret.ts");
	});

	it("says when Node.js can't require the ES module migrations", () => {
		const feature = spyOnProperty(process.features, "require_module").and.returnValue(true);
		expect(migrationsUnsupported()).toBeUndefined();

		feature.and.returnValue(false);
		expect(migrationsUnsupported()).toBe(`Running migrations requires Node.js 20.19, 22.12 or later (running ${process.version}).`);
	});

	it("doesn't load DevKit to run migrations", () => {
		const { collection, pick } = project("npm");
		const runner = require.resolve("../../packages/cli/lib/update/migration-runner");
		const loaded = child_process.execFileSync(process.execPath, ["-e",
			`require(${JSON.stringify(runner)}).runMigrations(${JSON.stringify(collection)}, ${JSON.stringify(pick("first"))})
				.then(() => console.log(Object.keys(require.cache).filter(m => m.includes("@angular-devkit")).length));`
		], { encoding: "utf8" });
		expect(loaded.trim().split("\n").pop()).toBe("0");
		expect(app()).toBe(APP + "// first\n");
	});
});
