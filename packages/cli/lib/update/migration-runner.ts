import { Migration, Util } from "@igniteui/cli-core";
import * as fs from "fs";
import * as path from "path";

export interface MigrationRun {
	completed: Migration[];
	failed?: { migration: Migration; error: string };
	notRun: Migration[];
}

interface MigrationHost {
	root: string;
	files(): string[];
	read(file: string): string;
	write(file: string, content: string): void;
	readonly typescript: typeof import("typescript");
}

export function migrationsUnsupported(): string | undefined {
	return process.features.require_module ? undefined : `Running migrations requires Node.js 20.19, 22.12 or later (running ${process.version}).`;
}

/** Runs the migrations in order on the current directory, until one fails; `collection` is an absolute path */
export async function runMigrations(collection: string, migrations: Migration[]): Promise<MigrationRun> {
	for (const [index, migration] of migrations.entries()) {
		Util.log(`  ${migration.name}${migration.description ? `: ${migration.description}` : ""}`);
		const changes = new Map<string, string>();
		try {
			const realRoot = fs.realpathSync(process.cwd());
			const result = await loadFactory(collection, migration)({
				root: process.cwd(),
				files: () => projectFiles(realRoot),
				read: file => {
					const target = projectPath(file, realRoot);
					return changes.get(target) ?? fs.readFileSync(target, "utf8");
				},
				write: (file, content) => changes.set(projectPath(file, realRoot), content),
				get typescript() { return require("typescript"); }
			} satisfies MigrationHost);
			if (typeof result === "function") {
				throw new Error("The factory returned a function, like an Angular DevKit rule; it must change the files through its host instead.");
			}
			for (const [file, content] of changes) {
				const existed = fs.existsSync(file);
				if (!existed || fs.readFileSync(file, "utf8") !== content) {
					fs.mkdirSync(path.dirname(file), { recursive: true });
					fs.writeFileSync(file, content);
					Util.log(`    ${existed ? "UPDATE" : "CREATE"} ${file}`);
				}
			}
		} catch (error) {
			const failed = { migration, error: (error as Error | undefined)?.message ?? String(error) };
			return { completed: migrations.slice(0, index), failed, notRun: migrations.slice(index + 1) };
		}
	}
	return { completed: migrations, notRun: [] };
}

// `require`: in this CommonJS build, TypeScript compiles `import()` to it anyway
function loadFactory(collection: string, { factory }: Migration): (host: MigrationHost) => unknown {
	const [file, exportName = "default"] = factory?.split("#") ?? [];
	if (!file) {
		throw new Error("The migration has no factory.");
	}
	const run = require(path.resolve(path.dirname(collection), file))[exportName];
	if (typeof run !== "function") {
		throw new Error(`The "${exportName}" export of ${file} is not a function.`);
	}
	return run;
}

/** Git's list, without node_modules, links and nested repositories; else, as when there's no repository, `listFiles` */
function projectFiles(realRoot: string): string[] {
	const git = Util.spawnSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"],
		{ cwd: process.cwd(), encoding: "utf8", maxBuffer: 64 * 1024 * 1024, env: { ...process.env, LC_ALL: "C" } });
	const listed = git.status === 0 ? git.stdout.toString().split("\0").filter(Boolean) : [];
	const stderr = git.stderr?.toString().trim() ?? "";
	if (!listed.includes("package.json")) {
		const noRepository = (git.error as NodeJS.ErrnoException | undefined)?.code === "ENOENT" ||
			/^fatal: not a git repository\b/mi.test(stderr);
		if (!noRepository) {
			const reason = git.status === 0 ? "the repository ignores the project"
				: git.error?.message ?? (stderr || git.signal || `exit code ${git.status}`);
			Util.warn(`    Unable to list the files with Git (${reason}): the migrations may also change ignored files.`, "yellow");
		}
		return listFiles("");
	}
	if (stderr) {
		Util.warn(`    ${stderr}`, "yellow");
	}
	const unlinked = new Map<string, boolean>();
	return [...new Set(listed)].filter(file => {
		if (file.split("/").includes("node_modules")) {
			return false;
		}
		let stats: fs.Stats | undefined;
		try {
			stats = fs.lstatSync(file, { throwIfNoEntry: false });
		} catch (error) {
			const code = (error as NodeJS.ErrnoException).code;
			if (code !== "EACCES" && code !== "EPERM") {
				throw error;
			}
			Util.warn(`    Skipped ${file}: no permission to read it (${code}).`, "yellow");
			return false;
		}
		if (stats?.isDirectory()) {
			Util.warn(`    Skipped ${file.replace(/\/$/, "")}: a nested Git repository.`, "yellow");
		}
		if (!stats?.isFile()) {
			return false;
		}
		const dir = path.dirname(file);
		if (!unlinked.has(dir)) {
			unlinked.set(dir, fs.realpathSync(dir) === path.join(realRoot, dir));
		}
		return unlinked.get(dir);
	});
}

/** Skips node_modules, .git, links and, with a warning, folders it may not read */
function listFiles(dir: string): string[] {
	let entries: fs.Dirent[];
	try {
		entries = fs.readdirSync(dir || ".", { withFileTypes: true });
	} catch (error) {
		const code = (error as NodeJS.ErrnoException).code;
		if (!dir || (code !== "EACCES" && code !== "EPERM")) {
			throw error;
		}
		Util.warn(`    Skipped ${dir}: no permission to read it (${code}).`, "yellow");
		return [];
	}
	return entries.flatMap(entry => {
		const file = dir ? `${dir}/${entry.name}` : entry.name;
		if (entry.isDirectory()) {
			return entry.name === "node_modules" || entry.name === ".git" ? [] : listFiles(file);
		}
		return entry.isFile() ? [file] : [];
	});
}

/** Throws for an absolute path, or one leading outside the project, also through a link */
function projectPath(file: string, realRoot: string): string {
	const root = process.cwd();
	const target = path.resolve(root, file);
	const outside = () => new Error(`"${file}" is outside the project.`);
	if (path.isAbsolute(file) || !isWithin(root, target)) {
		throw outside();
	}
	let existing = target;
	while (!fs.lstatSync(existing, { throwIfNoEntry: false })) {
		existing = path.dirname(existing);
	}
	if (!isWithin(realRoot, fs.realpathSync(existing))) {
		throw outside();
	}
	return path.relative(root, target).split(path.sep).join("/");
}

function isWithin(dir: string, file: string): boolean {
	const relative = path.relative(dir, file);
	return relative.split(path.sep)[0] !== ".." && !path.isAbsolute(relative);
}
