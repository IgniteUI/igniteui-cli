import { App, Config, GoogleAnalytics, PackageManager, ProjectConfig, TEMPLATE_MANAGER, Util } from "@igniteui/cli-core";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { default as buildCmd } from "../../packages/cli/lib/commands/build";

describe("Unit - Build command", () => {
	let originalCwd: string;
	let tempRoot: string;

	beforeEach(() => {
		originalCwd = process.cwd();
		tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "igniteui-build-"));

		spyOn(GoogleAnalytics, "post");
		spyOn(Util, "log");
		spyOn(Util, "ensureDirectoryExists").and.callFake((directory: string) => fs.mkdirSync(directory, { recursive: true }));
		spyOn(Util, "isDirectory").and.callFake((directory: string) => fs.statSync(directory).isDirectory());
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		spyOn(PackageManager, "ensureIgniteUISource").and.returnValue(Promise.resolve());
		spyOn(PackageManager, "installPackages").and.returnValue(Promise.resolve());

		App.container.set(TEMPLATE_MANAGER, jasmine.createSpyObj("TemplateManager", ["getProjectLibrary"]));
	});

	afterEach(() => {
		process.chdir(originalCwd);
		fs.rmSync(tempRoot, { recursive: true, force: true });
	});

	describe("jQuery", () => {
		it("Should recursively copy theme folders into the project themes directory", async () => {
			const igniteuiSource = path.join(tempRoot, "node_modules", "ignite-ui");
			const sourceRoot = path.join(tempRoot, "project");
			const sourceThemeRoot = path.join(igniteuiSource, "css", "themes", "infragistics");
			const sourceImage = path.join(sourceThemeRoot, "images", "foo.png");

			fs.mkdirSync(path.dirname(sourceImage), { recursive: true });
			fs.mkdirSync(sourceRoot, { recursive: true });
			fs.writeFileSync(path.join(sourceThemeRoot, "infragistics.theme.css"), "theme css");
			fs.writeFileSync(sourceImage, "image asset");
			process.chdir(sourceRoot);

			const config = {
				project: {
					framework: "jquery",
					igniteuiSource,
					sourceRoot,
					theme: "infragistics.less"
				}
			} as Config;
			spyOn(ProjectConfig, "getConfig").and.returnValue(config);

			await buildCmd.build();

			const copiedImage = path.join(sourceRoot, "themes", "images", "foo.png");
			expect(fs.existsSync(path.join(sourceRoot, "themes", "infragistics.theme.css"))).toBeTrue();
			expect(fs.readFileSync(copiedImage, "utf8")).toBe("image asset");
		});
	});
});
