import { GoogleAnalytics, Util } from "@igniteui/cli-core";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { IGNITEUI_ANGULAR_PACKAGE, SKIP_AI_CONFIG_ENV } from "../../packages/igx-templates/constants";
import emptyProject from "../../packages/igx-templates/igx-ts/projects/empty";
import authProject from "../../packages/igx-templates/igx-ts/projects/side-nav-auth";
import { stubAngularCli } from "../helpers/angular-cli-stub";

describe("Angular project scaffold", () => {
	const name = "Test Project";
	const dashName = "test-project";
	let cwd: string;
	let tmp: string;
	let execSync: jasmine.Spy;

	const filePath = (file: string) => path.join(tmp, name, file);
	const read = (file: string) => fs.readFileSync(filePath(file), "utf8");
	const readJson = (file: string) => JSON.parse(read(file));
	const architect = () => readJson("angular.json").projects[dashName].architect;
	const commands = (): string[] => execSync.calls.allArgs().map(([command]) => command);

	beforeEach(() => {
		spyOn(console, "log");
		spyOn(console, "warn");
		spyOn(console, "error");
		spyOn(GoogleAnalytics, "post");
		execSync = stubAngularCli();
		cwd = process.cwd();
		tmp = fs.mkdtempSync(path.join(os.tmpdir(), "igx-scaffold-"));
		process.chdir(tmp);
	});

	afterEach(() => {
		process.chdir(cwd);
		fs.rmSync(tmp, { recursive: true, force: true });
	});

	it("creates the project with the Angular major the templates' igniteui-angular supports, and lays the template files over it", async () => {
		expect(await emptyProject.scaffold({ name, theme: "Default" })).toBeTrue();

		expect(commands()).toEqual([
			`npm view "${IGNITEUI_ANGULAR_PACKAGE}" peerDependencies --json`,
			`npm view "@angular/core@22" version --json`,
			`npx -y @angular/cli@22 new ${dashName} --directory ${dashName} --style=scss --routing --ssr=false ` +
				"--zoneless=false --ai-config=none --skip-git --skip-install --package-manager=npm --defaults --interactive=false",
			"npx -y @angular/cli@22 add angular-eslint@22 --skip-confirmation --defaults --interactive=false",
			`npx -y @angular/cli@22 add ${IGNITEUI_ANGULAR_PACKAGE} --skip-confirmation --defaults --interactive=false`,
			"npm install --save-dev playwright --no-audit --no-fund"
		]);
		for (const entry of [".agents", ".claude", "AGENTS.md", ".mcp.json"]) {
			expect(fs.existsSync(filePath(entry))).withContext(`${entry} from ng add is left to ig new`).toBeFalse();
		}
		expect(fs.existsSync(filePath("src/app/error-routing/not-found/not-found.ts"))).toBeTrue();
		expect(fs.existsSync(filePath("src/app/home/home.ts"))).toBeTrue();
		expect(read("README.md")).toContain(`# ${name}`);
		expect(readJson("ignite-ui-cli.json").project).toEqual(jasmine.objectContaining({
			projectTemplate: "empty",
			theme: "Default",
			themePath: "node_modules/igniteui-angular/styles/igniteui-angular.css"
		}));
	});

	it("patches the generated angular.json", async () => {
		await emptyProject.scaffold({ name, theme: "Default" });

		const { build, test } = architect();
		expect(build.options.assets).toEqual([{ glob: "**/*", input: "public" }, "src/assets"]);
		expect(build.options.styles).toEqual(["src/styles.scss", "node_modules/igniteui-angular/styles/igniteui-angular.css"]);
		expect(build.configurations.production.budgets).toEqual([
			{ type: "initial", maximumWarning: "5mb", maximumError: "40mb" },
			{ type: "anyComponentStyle", maximumWarning: "8kB", maximumError: "2mb" }
		]);
		expect(build.configurations.development).toEqual({
			optimization: false,
			fileReplacements: [{
				replace: "src/environments/environment.ts",
				with: "src/environments/environment.development.ts"
			}]
		});
		expect(test.options).toEqual({ runnerConfig: true });
		expect(architect()["extract-i18n"]).toEqual({
			builder: "@angular/build:extract-i18n",
			options: { buildTarget: `${dashName}:build` }
		});
	});

	it("patches the generated package.json", async () => {
		await emptyProject.scaffold({ name, theme: "Default" });

		const { scripts, dependencies, devDependencies } = readJson("package.json");
		expect(scripts).toEqual(jasmine.objectContaining({ start: "ng serve -o", test: "ng test --browsers=chromium" }));
		expect(`igniteui-angular@${dependencies["igniteui-angular"]}`)
			.withContext("the range the component templates are written for, not the ^ ng add saves")
			.toBe(IGNITEUI_ANGULAR_PACKAGE);
		expect(dependencies["@angular/animations"]).toBe(dependencies["@angular/core"]);
		expect(devDependencies["@vitest/browser-playwright"]).toBe(devDependencies.vitest);
		expect(devDependencies.jsdom).toBeUndefined();
		expect(devDependencies["igniteui-cli"]).toBe(`~${Util.version()}`);
		expect(devDependencies["@igniteui/angular-schematics"]).toBeUndefined();
	});

	it("puts the Custom theme in styles.scss instead of angular.json", async () => {
		await emptyProject.scaffold({ name, theme: "Custom" });

		expect(read("src/styles.scss")).toContain("@include theme($app-palette);");
		expect(architect().build.options.styles).toEqual(["src/styles.scss"]);
		expect(readJson("ignite-ui-cli.json").project.themePath).toBe("Custom");
	});

	it("adds the packages and types the authentication templates use, at the project's Angular major where they follow it", async () => {
		await authProject.scaffold({ name, theme: "Default" });

		expect(commands())
			.toContain("npm install --save-dev playwright @angular/language-service@22 @types/facebook-js-sdk --no-audit --no-fund");
		expect(commands()).toContain("npm install angular-auth-oidc-client@22 --no-audit --no-fund");
		const tsconfig = (file: string) => {
			const text = read(file);
			expect(text).withContext(`${file} keeps its leading comments`).toMatch(/^\/\* To learn more/);
			return JSON.parse(text.slice(text.indexOf("{")));
		};
		expect(tsconfig("tsconfig.app.json").compilerOptions.types).toEqual(["facebook-js-sdk"]);
		expect(tsconfig("tsconfig.spec.json").compilerOptions.types).toEqual(["vitest/globals", "facebook-js-sdk"]);
		expect(fs.existsSync(filePath("src/app/authentication/login/login.ts"))).toBeTrue();
	});

	it("keeps @igniteui/angular-schematics, at the running version, for projects created through the schematics", async () => {
		await emptyProject.scaffold({
			name,
			theme: "Default",
			extraConfig: { cliPackage: "@igniteui/angular-schematics", cliVersion: "1.2.3" }
		});

		const { devDependencies } = readJson("package.json");
		expect(devDependencies["@igniteui/angular-schematics"]).toBe("~1.2.3");
		expect(devDependencies["igniteui-cli"]).toBeUndefined();
		expect(readJson("ignite-ui-cli.json").version).toBe("1.2.3");
	});

	it("installs packages even with skipInstall, and says so", async () => {
		expect(await emptyProject.scaffold({ name, theme: "Default", skipInstall: true })).toBeTrue();

		expect(console.warn).toHaveBeenCalledWith(jasmine.stringMatching(/--skip-install is ignored/));
		expect(commands()).toContain("npm install --save-dev playwright --no-audit --no-fund");
	});

	it("tells the Angular CLI calls to skip ng add's ai-config, which ig new and the ng-new schematic run themselves", async () => {
		await emptyProject.scaffold({ name, theme: "Default" });

		for (const [command, options] of execSync.calls.allArgs().filter(([command]) => command.startsWith("npx"))) {
			expect(options.env[SKIP_AI_CONFIG_ENV]).withContext(command).toBe("true");
		}
	});

	it("runs ng new outside the current folder, which may be inside an Angular workspace", async () => {
		await emptyProject.scaffold({ name, theme: "Default" });

		const [, options] = execSync.calls.allArgs().find(([command]) => / new /.test(command));
		expect(options.cwd).not.toBe(process.cwd());
		expect(fs.existsSync(options.cwd)).withContext("the temp folder is removed").toBeFalse();
		expect(fs.existsSync(filePath("angular.json"))).toBeTrue();
	});

	it("reports a failed command and removes the project folder", async () => {
		execSync.withArgs(jasmine.stringMatching(/^npm install/), jasmine.anything()).and.throwError(new Error("Command failed: npm"));

		expect(await emptyProject.scaffold({ name, theme: "Default" })).toBeFalse();
		expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/Project creation failed: Command failed: npm/));
		expect(fs.existsSync(path.join(tmp, name))).withContext("a retry starts clean").toBeFalse();
	});

	it("leaves an existing folder alone", async () => {
		fs.mkdirSync(path.join(tmp, name));
		fs.writeFileSync(filePath("keep.txt"), "");

		expect(await emptyProject.scaffold({ name, theme: "Default" })).toBeFalse();
		expect(console.error).toHaveBeenCalledWith(jasmine.stringMatching(/already exists/));
		expect(commands()).toEqual([]);
		expect(fs.existsSync(filePath("keep.txt"))).toBeTrue();
	});
});
