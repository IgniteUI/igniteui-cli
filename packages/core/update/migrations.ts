import * as jsonc from "jsonc-parser";
import * as path from "path";
import * as semver from "semver";
import { FS_TOKEN, IFileSystem } from "../types";
import { App } from "../util";

export interface Migration {
	name: string;
	version?: string;
	description?: string;
	optional?: boolean;
}

/** Absolute path of the collection that the package in `packageDir` declares in `ig-update` for `framework`; throws on invalid metadata */
export function getMigrationsCollection(packageDir: string, framework: string): string | undefined {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);
	const pkg = JSON.parse(fs.readFile(path.join(packageDir, "package.json")));
	const invalid = (reason: string) => new Error(`${pkg.name} has an invalid "ig-update" field: ${reason}.`);
	const metadata = pkg["ig-update"];
	if (metadata === undefined) {
		return undefined;
	}
	if (!isObject(metadata)) {
		throw invalid("expected an object");
	}
	const migrations = isObject(metadata.migrations) ? metadata.migrations[framework] : metadata.migrations;
	if (migrations === undefined) {
		return undefined;
	}
	if (typeof migrations !== "string") {
		throw invalid(`"migrations" must be a path, or an object that maps framework ids to paths`);
	}

	const normalized = migrations.replace(/\\/g, "/");
	const collection = path.resolve(packageDir, normalized);
	if (path.isAbsolute(normalized) || path.relative(packageDir, collection).split(path.sep)[0] === "..") {
		throw invalid(`"${migrations}" must be a relative path inside the package`);
	}
	if (!fs.fileExists(collection)) {
		throw invalid(`"${migrations}" was not found`);
	}
	return collection;
}

/** Reads a collection's migrations without loading their factories; throws when the collection is invalid */
export function readMigrations(collectionPath: string): Migration[] {
	const fs = App.container.get<IFileSystem>(FS_TOKEN);
	const errors: jsonc.ParseError[] = [];
	// trailing commas allowed, as DevKit allows them
	const collection = jsonc.parse(fs.readFile(collectionPath), errors, { allowTrailingComma: true });
	if (errors.length || !isObject(collection) || !isObject(collection.schematics)) {
		throw new Error(`${collectionPath} is not a valid migrations collection.`);
	}
	if (collection.extends !== undefined) {
		throw new Error(`${collectionPath}: "extends" is not supported in migrations collections.`);
	}
	return Object.entries(collection.schematics).map(([name, entry]) => {
		if (entry?.version !== undefined && typeof entry.version !== "string") {
			throw new Error(`${collectionPath}: the version of migration "${name}" must be a string.`);
		}
		return { name, version: coerceVersionNumber(entry?.version), description: entry?.description, optional: !!entry?.optional };
	});
}

/**
 * Angular's selection of the migrations in `(from, to]`: a prerelease `from` also selects the earlier prereleases of its version,
 * and a prerelease `to` its whole version. Sorted by version; equal versions keep the collection order.
 */
export function selectMigrations(migrations: Migration[], from: string, to: string): { required: Migration[]; optional: Migration[] } {
	const range = new semver.Range(`>${semver.prerelease(from) ? from.split("-")[0] + "-0" : from} <=${to.split("-")[0]}`);
	const selected = migrations
		.filter(m => m.version && semver.satisfies(m.version, range, { includePrerelease: true }))
		.sort((a, b) => semver.compare(a.version!, b.version!));
	return { required: selected.filter(m => !m.optional), optional: selected.filter(m => m.optional) };
}

/** Angular's `coerceVersionNumber`: completes `1` and `1.2` (prerelease kept) to valid versions */
function coerceVersionNumber(version: string | undefined): string | undefined {
	const numbers = version?.match(/^\d{1,30}(\.\d{1,30}){0,2}/)?.[0];
	if (!numbers) {
		return undefined;
	}
	const padding = [".0.0", ".0", ""][numbers.split(".").length - 1];
	return semver.valid(numbers + padding + version!.slice(numbers.length)) ?? undefined;
}

function isObject(value: unknown): value is Record<string, any> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
