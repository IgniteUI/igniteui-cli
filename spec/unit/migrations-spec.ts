import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { App } from "../../packages/core/util";
import { getMigrationsCollection, Migration, readMigrations, selectMigrations } from "../../packages/core/update/migrations";

describe("Unit - update migrations metadata", () => {
	let packageDir: string;

	function write(file: string, content: string | object) {
		const filePath = path.join(packageDir, file);
		fs.mkdirSync(path.dirname(filePath), { recursive: true });
		fs.writeFileSync(filePath, typeof content === "string" ? content : JSON.stringify(content));
		return filePath;
	}

	const migration = (name: string, version?: string, optional = false): Migration => ({ name, version, optional });
	const names = (migrations: Migration[]) => migrations.map(m => m.name);

	beforeEach(() => {
		packageDir = path.join(fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), "igniteui-migrations-"))), "lib");
		App.initialize();
	});

	afterEach(() => {
		fs.rmSync(path.dirname(packageDir), { recursive: true, force: true });
	});

	describe("getMigrationsCollection", () => {
		function collectionFor(igUpdate: unknown, framework = "react") {
			write("package.json", { name: "lib", "ig-update": igUpdate });
			return getMigrationsCollection(packageDir, framework);
		}

		it("returns the absolute path of a collection declared for every framework", () => {
			const collection = write("migrations/collection.json", "{}");
			expect(collectionFor({ migrations: "./migrations/collection.json" })).toBe(collection);
			expect(collectionFor({ migrations: "migrations\\collection.json" }, "webcomponents")).toBe(collection);
			// only starts with dots, so it is inside the package
			const dotted = write("..migrations/collection.json", "{}");
			expect(collectionFor({ migrations: "..migrations/collection.json" })).toBe(dotted);
		});

		it("picks the framework's collection from a map, and none when the framework has no entry", () => {
			const react = write("migrations/react/collection.json", "{}");
			expect(collectionFor({ migrations: { react: "./migrations/react/collection.json", webcomponents: "./missing.json" } })).toBe(react);
			expect(collectionFor({ migrations: { react: "./migrations/react/collection.json" } }, "webcomponents")).toBeUndefined();
		});

		it("returns none for packages without ig-update migrations, including ng-update-only packages", () => {
			write("migrations/collection.json", "{}");
			write("package.json", { name: "lib", "ng-update": { migrations: "./migrations/collection.json" } });
			expect(getMigrationsCollection(packageDir, "react")).toBeUndefined();
			expect(collectionFor({ packageGroup: ["lib", "lib-extras"] })).toBeUndefined();
		});

		it("rejects invalid metadata", () => {
			expect(() => collectionFor("./collection.json")).toThrowError(/^lib has an invalid "ig-update" field: expected an object\.$/);
			expect(() => collectionFor(null)).toThrowError(/expected an object/);
			for (const migrations of [1, ["./collection.json"], { react: true }]) {
				expect(() => collectionFor({ migrations })).withContext(JSON.stringify(migrations)).toThrowError(/"migrations" must be a path/);
			}
			const outside = [path.join(packageDir, "collection.json"), "../collection.json", "..\\collection.json", "\\collection.json", "./a/../../collection.json"];
			for (const migrations of outside) {
				expect(() => collectionFor({ migrations })).withContext(migrations).toThrowError(/must be a relative path inside the package/);
			}
			expect(() => collectionFor({ migrations: "./missing.json" })).toThrowError(/"\.\/missing\.json" was not found/);
		});
	});

	describe("readMigrations", () => {
		it("reads the entries with coerced versions, accepting comments and trailing commas", () => {
			const migrations = readMigrations(write("collection.json", `{
				// migrations
				"schematics": {
					"full": { "version": "2.1.0", "description": "Full", "factory": "./full" },
					"major": { "version": "3", "optional": true },
					"minor": { "version": "3.1" },
					"prerelease": { "version": "3.1-rc.1" },
					"prefixed": { "version": "v3.2.0" },
					"four-parts": { "version": "3.2.0.1" },
					"none": {},
				},
			}`));
			expect(migrations[0]).toEqual({ name: "full", version: "2.1.0", description: "Full", optional: false });
			expect(names(migrations.filter(m => m.optional))).toEqual(["major"]);
			expect(migrations.map(m => m.version)).toEqual(["2.1.0", "3.0.0", "3.1.0", "3.1.0-rc.1", undefined, undefined, undefined]);
		});

		it("rejects invalid collections, extends and versions that aren't strings", () => {
			for (const content of ["{ \"schematics\": ", "[]", "{}", "{ \"schematics\": [] }"]) {
				expect(() => readMigrations(write("collection.json", content))).withContext(content)
					.toThrowError(/is not a valid migrations collection/);
			}
			expect(() => readMigrations(write("collection.json", { extends: "other", schematics: {} })))
				.toThrowError(/"extends" is not supported/);
			expect(() => readMigrations(write("collection.json", { schematics: { m: { version: 2 } } })))
				.toThrowError(/collection\.json: the version of migration "m" must be a string/);
		});

		it("doesn't load factories when reading and selecting", () => {
			const marker = path.join(packageDir, "loaded");
			write("factory.js", `require("fs").writeFileSync(${JSON.stringify(marker)}, ""); exports.default = () => () => {};`);
			const collection = write("collection.json", { schematics: { m: { version: "2.0.0", factory: "./factory" } } });

			expect(names(selectMigrations(readMigrations(collection), "1.0.0", "2.0.0").required)).toEqual(["m"]);
			expect(fs.existsSync(marker)).toBe(false);
		});
	});

	describe("selectMigrations", () => {
		it("selects versions in (from, to] and skips entries without a version", () => {
			const migrations = [migration("from", "1.0.0"), migration("between", "1.5.0"), migration("to", "2.0.0"),
				migration("after", "2.0.1"), migration("none")];
			expect(selectMigrations(migrations, "1.0.0", "2.0.0")).toEqual({ required: [migrations[1], migrations[2]], optional: [] });
			expect(selectMigrations(migrations, "2.0.0", "2.0.0").required).toEqual([]);
		});

		it("orders by version, keeping the collection order for equal versions, and splits optional migrations", () => {
			const migrations = [migration("c", "3.0.0"), migration("b2", "2.0.0"), migration("opt", "2.5.0", true),
				migration("b1", "2.0.0"), migration("a", "1.1.0"), migration("rc", "3.0.0-rc.1")];
			const { required, optional } = selectMigrations(migrations, "1.0.0", "3.0.0");
			expect(names(required)).toEqual(["a", "b2", "b1", "rc", "c"]);
			expect(names(optional)).toEqual(["opt"]);
		});

		it("handles prereleases like Angular", () => {
			const migrations = [migration("rc0", "2.0.0-rc.0"), migration("rc2", "2.0.0-rc.2"), migration("release", "2.0.0"),
				migration("next-rc", "3.0.0-rc.0"), migration("next", "3.0.0")];
			// a prerelease `from` also selects the earlier prereleases of its version
			expect(names(selectMigrations(migrations, "2.0.0-rc.1", "2.0.0").required)).toEqual(["rc0", "rc2", "release"]);
			// a prerelease `to` selects its whole version
			expect(names(selectMigrations(migrations, "2.0.0", "3.0.0-rc.0").required)).toEqual(["next-rc", "next"]);
			expect(names(selectMigrations(migrations, "1.0.0", "2.0.0").required)).toEqual(["rc0", "rc2", "release"]);
		});
	});
});
