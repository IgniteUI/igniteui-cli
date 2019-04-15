import * as path from "path";
import * as resolve from "resolve";
import { default as buildCmd } from "../../lib/commands/build";
import { default as startCmd } from "../../lib/commands/start";
import { GoogleAnalytics } from "../../lib/GoogleAnalytics";
import { ProjectConfig } from "../../lib/ProjectConfig";
import { Util } from "../../lib/Util";

describe("Unit - start command", () => {
	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		spyOn(Util, "log");
		spyOn(Util, "error");
		spyOn(Util, "exec");
		spyOn(buildCmd, "build");
	});

	it("Logs error when run outside project", async done => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);

		await startCmd.execute({});

		expect(Util.error).toHaveBeenCalledWith(
			"Start command is supported only on existing project created with igniteui-cli",
			"red");
		expect(Util.log).not.toHaveBeenCalled();
		expect(Util.exec).not.toHaveBeenCalled();
		done();
	});

	it("Starts an Angular project", async done => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		// tslint:disable-next-line:no-object-literal-type-assertion
		const config: Config = {
			project: {
				framework: "angular",
				projectType: "igx-ts"
			}
		} as Config;
		spyOn(ProjectConfig, "getConfig").and.callFake(() => config);

		await startCmd.execute({});
		expect(buildCmd.build).toHaveBeenCalled();
		expect(Util.exec).toHaveBeenCalledWith("npm start");
		expect(Util.log).toHaveBeenCalledWith(`Starting project.`, "green");

		config.project.defaultPort = 3567;
		await startCmd.execute({});
		expect(Util.exec).toHaveBeenCalledWith("npm start -- --port=3567");

		await startCmd.execute({ port: 1234 });
		expect(Util.exec).toHaveBeenCalledWith("npm start -- --port=1234");

		expect(Util.error).not.toHaveBeenCalled();
		done();
	});

	it("Starts a React es6 project", async done => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		// tslint:disable-next-line:no-object-literal-type-assertion
		const config: Config = {
			project: {
				framework: "react",
				projectType: "es6"
			}
		} as Config;
		spyOn(ProjectConfig, "getConfig").and.callFake(() => config);

		await startCmd.execute({});
		expect(buildCmd.build).toHaveBeenCalled();
		expect(Util.exec).toHaveBeenCalledWith("npm start");
		expect(Util.log).toHaveBeenCalledWith(`Starting project.`, "green");

		config.project.defaultPort = 3567;
		await startCmd.execute({});
		expect(Util.exec).toHaveBeenCalledWith("npm start -- --port=3567");

		await startCmd.execute({ port: 1234 });
		expect(Util.exec).toHaveBeenCalledWith("npm start -- --port=1234");

		expect(Util.error).not.toHaveBeenCalled();
		done();
	});

	it("Starts a React igr-es6 project", async done => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		// tslint:disable-next-line:no-object-literal-type-assertion
		const config: Config = {
			project: {
				framework: "react",
				projectType: "igr-es6"
			}
		} as Config;
		spyOn(ProjectConfig, "getConfig").and.callFake(() => config);

		await startCmd.execute({});
		expect(buildCmd.build).toHaveBeenCalled();
		expect(Util.exec).toHaveBeenCalledWith("npm start");
		expect(Util.log).toHaveBeenCalledWith(`Starting project.`, "green");

		config.project.defaultPort = 3567;
		await startCmd.execute({});
		expect(process.env.PORT).toEqual("3567");
		expect(Util.exec).toHaveBeenCalledWith("npm start");

		await startCmd.execute({ port: 1234 });
		expect(process.env.PORT).toEqual("1234");
		expect(Util.exec).toHaveBeenCalledWith("npm start");

		expect(Util.error).not.toHaveBeenCalled();
		done();
	});

	it("Starts a jQuery project", async done => {
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

		await startCmd.execute({});
		expect(buildCmd.build).toHaveBeenCalled();
		expect(resolve.sync).toHaveBeenCalledWith("browser-sync", { basedir: process.cwd() });
		expect(bsMock.create).toHaveBeenCalledWith("igniteui-cli");
		expect(bsServMock.init).toHaveBeenCalledWith({ test: true });
		expect(Util.log).toHaveBeenCalledWith(`Starting project.`, "green");

		config.project.defaultPort = 3567;
		await startCmd.execute({});
		expect(bsServMock.init).toHaveBeenCalledWith({ test: true, port: 3567 });

		await startCmd.execute({ port: 1234 });
		expect(bsServMock.init).toHaveBeenCalledWith({ test: true, port: 1234 });

		expect(Util.error).not.toHaveBeenCalled();
		done();
	});
});
