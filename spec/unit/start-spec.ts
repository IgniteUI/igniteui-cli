import { Config, GoogleAnalytics, ProjectConfig, Util } from "@igniteui/cli-core";
import path from "path";
import resolve from "resolve";
import { default as buildCmd } from "../../packages/cli/lib/commands/build";
import { default as startCmd } from "../../packages/cli/lib/commands/start";

describe("Unit - start command", () => {
	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		spyOn(Util, "log");
		spyOn(Util, "error");
		spyOn(Util, "spawnSync");
		spyOn(buildCmd, "build");
	});

	it("Logs error when run outside project", async () => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);

		await startCmd.handler({ _: ["start"], $0: "start" });

		expect(Util.error).toHaveBeenCalledWith(
			"Start command is supported only on existing project created with igniteui-cli",
			"red");
		expect(Util.log).not.toHaveBeenCalled();
		expect(Util.spawnSync).not.toHaveBeenCalled();
	});

	it("Starts an Angular project", async () => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		// tslint:disable-next-line:no-object-literal-type-assertion
		const config: Config = {
			project: {
				framework: "angular",
				projectType: "igx-ts"
			}
		} as Config;
		spyOn(ProjectConfig, "getConfig").and.callFake(() => config);

		await startCmd.handler({ _: ["start"], $0: "start" });
		expect(buildCmd.build).toHaveBeenCalled();
		expect(Util.spawnSync).toHaveBeenCalledWith("npm", ['start'], { stdio: "inherit", killSignal: "SIGINT" });
		expect(Util.log).toHaveBeenCalledWith(`Starting project.`, "green");

		config.project.defaultPort = 3567;
		await startCmd.handler({ _: ["start"], $0: "start" });
		// tslint:disable-next-line: max-line-length
		expect(Util.spawnSync).toHaveBeenCalledWith("npm", ['start', '--', '--port=3567'], { stdio: "inherit", killSignal: "SIGINT" });

		await startCmd.handler({ port: 1234,  _: ["start"], $0: "start"  });
		// tslint:disable-next-line: max-line-length
		expect(Util.spawnSync).toHaveBeenCalledWith("npm", ['start', '--', '--port=1234'], { stdio: "inherit", killSignal: "SIGINT" });

		expect(Util.error).not.toHaveBeenCalled();
	});

	it("Starts a React es6 project", async () => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		// tslint:disable-next-line:no-object-literal-type-assertion
		const config: Config = {
			project: {
				framework: "react",
				projectType: "es6"
			}
		} as Config;
		spyOn(ProjectConfig, "getConfig").and.callFake(() => config);

		await startCmd.handler({ _: ["start"], $0: "start" });
		expect(buildCmd.build).toHaveBeenCalled();
		expect(Util.spawnSync).toHaveBeenCalledWith("npm", ['start'], { stdio: "inherit", killSignal: "SIGINT" });
		expect(Util.log).toHaveBeenCalledWith(`Starting project.`, "green");

		/* the following checks are no longer valid, as `config.project.defaultPort` is deprecated for react projects
			 in favor of using an .env file on project root lv, containing default variables like port. Ex: PORT=3002
			 this change is required by how `react scripts` work, and to ensure passing a PORT via a platform agnostic approach.
			 config.project.defaultPort = 3567;
			 await startCmd.execute({});
			 expect(Util.spawnSync).toHaveBeenCalledWith("npm", ['start', '--', '--port=3567'], { stdio: "inherit", killSignal: "SIGINT" });
			 await startCmd.execute({ port: 1234 });
			 expect(Util.spawnSync).toHaveBeenCalledWith("npm", ['start', '--', '--port=1234'], { stdio: "inherit", killSignal: "SIGINT" });
			*/
		expect(Util.error).not.toHaveBeenCalled();
	});

	it("Starts a React igr-es6 project", async () => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		// tslint:disable-next-line:no-object-literal-type-assertion
		const config: Config = {
			project: {
				framework: "react",
				projectType: "igr-es6"
			}
		} as Config;
		spyOn(ProjectConfig, "getConfig").and.callFake(() => config);

		await startCmd.handler({ _: ["start"], $0: "start" });
		expect(buildCmd.build).toHaveBeenCalled();
		expect(Util.spawnSync).toHaveBeenCalledWith("npm", ['start'], { stdio: "inherit", killSignal: "SIGINT" });
		expect(Util.log).toHaveBeenCalledWith(`Starting project.`, "green");

		config.project.defaultPort = 3567;
		await startCmd.handler({ _: ["start"], $0: "start" });
		expect(process.env.PORT).toEqual("3567");
		expect(Util.spawnSync).toHaveBeenCalledWith("npm", ['start'], { stdio: "inherit", killSignal: "SIGINT" });

		await startCmd.handler({ port: 1234, _: ["start"], $0: "start"  });
		expect(process.env.PORT).toEqual("1234");
		expect(Util.spawnSync).toHaveBeenCalledWith("npm", ['start'], { stdio: "inherit", killSignal: "SIGINT" });

		expect(Util.error).not.toHaveBeenCalled();
	});

	it("Starts a jQuery project", async () => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		const bsConfig = { test: true };
		const bsServMock = jasmine.createSpyObj("browserSync", ["init"]);
		const bsMock = jasmine.createSpyObj("bs", { create: bsServMock });
		spyOn(require("module"), "_load").and.callFake((modulePath: string) => {
			if (modulePath === "browser-sync") {
				return bsMock;
			} else if (path.join(process.cwd(), "bs-config.js")) {
				return bsConfig;
			} else {
				fail(`unexpected require: ${modulePath}`);
			}
		});
		spyOn(resolve, "sync").and.returnValue("browser-sync");
		// tslint:disable-next-line:no-object-literal-type-assertion
		const config: Config = {
			project: {
				framework: "jquery",
				projectType: "igr-es6"
			}
		} as Config;
		spyOn(ProjectConfig, "getConfig").and.callFake(() => config);

		await startCmd.handler({ _: ["start"], $0: "start" });
		expect(buildCmd.build).toHaveBeenCalled();
		expect(resolve.sync).toHaveBeenCalledWith("browser-sync", { basedir: process.cwd() });
		expect(bsMock.create).toHaveBeenCalledWith("igniteui-cli");
		expect(bsServMock.init).toHaveBeenCalledWith({ test: true });
		expect(Util.log).toHaveBeenCalledWith(`Starting project.`, "green");

		config.project.defaultPort = 3567;
		await startCmd.handler({ _: ["start"], $0: "start" });
		expect(bsServMock.init).toHaveBeenCalledWith({ test: true, port: 3567 });

		await startCmd.handler({ port: 1234, _: ["start"], $0: "start"  });
		expect(bsServMock.init).toHaveBeenCalledWith({ test: true, port: 1234 });

		expect(Util.error).not.toHaveBeenCalled();
	});
});
