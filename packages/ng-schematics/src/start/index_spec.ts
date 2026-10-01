import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import { App, Config, FS_TOKEN, FS_TYPE_TOKEN, FsTypes, IFileSystem, ProjectConfig, Util } from "@igniteui/cli-core";
import * as path from "path";

const collectionPath = path.join(__dirname, "../collection.json");

describe("start schematic", () => {
	let runner: SchematicTestRunner;
	let execSpy: jasmine.Spy;

	beforeEach(() => {
		runner = new SchematicTestRunner("schematics", collectionPath);
		spyOn(ProjectConfig, "getConfig").and.returnValue({ project: { defaultPort: 4321 } } as unknown as Config);
		execSpy = spyOn(Util, "execSync").and.returnValue("");
	});

	afterEach(() => {
		App.initialize();
	});

	it("runs npm start on the configured port", async () => {
		await runner.runSchematic("start", {}, Tree.empty());

		expect(execSpy).toHaveBeenCalledOnceWith(
			"npm start -- --port=4321",
			{ cwd: undefined, stdio: "inherit", killSignal: "SIGINT" }
		);
		expect(App.container.get(FS_TYPE_TOKEN)).toBe(FsTypes.virtual);
	});

	it("runs in and scopes the file system to the given directory", async () => {
		const tree = Tree.empty();
		tree.create("my-app/ignite-ui-cli.json", "{}");

		await runner.runSchematic("start", { directory: "my-app" }, tree);

		expect(execSpy).toHaveBeenCalledOnceWith(
			"npm start -- --port=4321",
			{ cwd: "my-app", stdio: "inherit", killSignal: "SIGINT" }
		);
		const fs = App.container.get<IFileSystem>(FS_TOKEN);
		expect(fs.fileExists("ignite-ui-cli.json")).toBeTrue();
		expect(fs.fileExists("my-app/ignite-ui-cli.json")).toBeFalse();
	});
});
