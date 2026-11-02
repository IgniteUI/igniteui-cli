import { Migration, Util } from "@igniteui/cli-core";
import * as fs from "fs";
import * as semver from "semver";

export interface MigrationRun {
	completed: Migration[];
	failed?: { migration: Migration; error: string };
	notRun: Migration[];
}

/** Preflight before anything changes: checks that DevKit is installed and supports the running Node.js, then loads it; throws otherwise */
export async function loadDevKit(): Promise<void> {
	let manifest: string;
	try {
		manifest = require.resolve("@angular-devkit/schematics/package.json");
	} catch {
		throw new Error("Running migrations requires @angular-devkit/schematics, an optional dependency of igniteui-cli that isn't installed. " +
			"Package managers skip it on unsupported Node.js versions, or when optional dependencies are omitted. " +
			"Reinstall igniteui-cli on a supported Node.js version.");
	}
	// Yarn Berry and bun install optional dependencies without checking their engines
	const node: string | undefined = JSON.parse(fs.readFileSync(manifest, "utf8")).engines?.node;
	if (node && !semver.satisfies(process.version, node)) {
		throw new Error(`Running migrations requires Node.js ${node} (running ${process.version}).`);
	}
	await import("@angular-devkit/schematics/tools");
}

/** Runs the migrations of the collection at the absolute path `collection` on the current directory, in order, until one fails */
export async function runMigrations(collection: string, migrations: Migration[], packageManager?: string): Promise<MigrationRun> {
	// loaded only here: DevKit is slow to load and needs a newer Node.js than the rest of the CLI
	const { logging } = await import("@angular-devkit/core");
	const { NodeWorkflow } = await import("@angular-devkit/schematics/tools");
	const workflow = new NodeWorkflow(process.cwd(), { packageManager, schemaValidation: true });
	workflow.reporter.subscribe(event => Util.log(`    ${event.kind.toUpperCase()} ${event.path.slice(1)}` +
		(event.kind === "rename" ? ` => ${event.to.slice(1)}` : "")));
	const logger = new logging.Logger("ig-update");
	logger.subscribe(({ level, message }) => {
		if (level === "info") {
			Util.log(message);
		} else if (level !== "debug") {
			// not Util.error, which would post the migration's message to analytics
			Util.warn(message, level === "warn" ? "yellow" : "red");
		}
	});

	for (const [index, migration] of migrations.entries()) {
		Util.log(`  ${migration.name}${migration.description ? `: ${migration.description}` : ""}`);
		try {
			// execute() throws synchronously when the factory can't be loaded, so it runs inside the executor
			await new Promise<void>((resolve, reject) => workflow.execute({ collection, schematic: migration.name, options: {}, logger })
				.subscribe({ complete: resolve, error: reject }));
		} catch (error) {
			const failed = { migration, error: error?.message ?? String(error) };
			return { completed: migrations.slice(0, index), failed, notRun: migrations.slice(index + 1) };
		}
	}
	return { completed: migrations, notRun: [] };
}
