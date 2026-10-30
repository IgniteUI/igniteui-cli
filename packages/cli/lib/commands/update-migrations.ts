import { Migration, Util } from "@igniteui/cli-core";

export interface MigrationRun {
	completed: Migration[];
	failed?: { migration: Migration; error: string };
	notRun: Migration[];
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
