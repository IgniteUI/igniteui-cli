import { App, Config, GoogleAnalytics, ProjectConfig } from "@igniteui/cli-core";
import * as childProcess from "child_process";
import * as fs from "fs";
import * as https from "https";
import * as path from "path";
import * as process from "process";
import { deleteAll } from "../helpers/utils";

describe("Unit - Google Analytic", () => {
	let request;
	let testFolder = path.parse(__filename).name;
	let serviceSpy;

	class GATestClass extends GoogleAnalytics {
		public static userDataFolder = path.join(process.cwd(), `./output/${testFolder}`);
		public static getUserID(): any { return super.getUserID(); }
	}

	beforeEach(() => {
		App.initialize();
		request = jasmine.createSpyObj("request", ["on", "end"]);
		spyOn(https, "request").and.returnValue(request);
		serviceSpy =
			spyOn(childProcess, "execSync").and.returnValue("some string which contains REG_SZ so we can get Machine Key");
		while (fs.existsSync(`./output/${testFolder}`)) {
			testFolder += 1;
		}
		fs.mkdirSync(`./output/${testFolder}`);
	});

	afterEach(() => {
		deleteAll(`./output/${testFolder}`);
		fs.rmdirSync(`./output/${testFolder}`);
	});

	it("Calling post should create post request to 'www.google-analytics.com", async done => {
		// tslint:disable:no-object-literal-type-assertion
		spyOn(ProjectConfig, "getConfig").and.returnValue({} as Config);

		GATestClass.post({});
		expect(https.request).toHaveBeenCalledTimes(1);
		const expectedArguments: Partial<https.RequestOptions> = {
			host: "www.google-analytics.com",
			method: "POST",
			path: ""
		}
		expect(https.request).toHaveBeenCalledWith(
			null,
			expectedArguments as https.RequestOptions,
			null
		);
		expect(request.on).toHaveBeenCalledTimes(1);
		expect(request.on).toHaveBeenCalledWith("error", jasmine.any(Function));

		expect(request.end).toHaveBeenCalledTimes(1);
		done();
	});

	it("Calling post with custom parameters should create post request to 'www.google-analytics.com", async done => {
		// tslint:disable:no-object-literal-type-assertion
		spyOn(ProjectConfig, "getConfig").and.returnValue({} as Config);

		GATestClass.post({ av: "1.2.3" });
		expect(https.request).toHaveBeenCalledTimes(1);
		expect(https.request).toHaveBeenCalledWith(
			null,
			{
				host: "www.google-analytics.com",
				method: "POST",
				path: jasmine.any(String)
			});
		expect(request.on).toHaveBeenCalledTimes(1);
		expect(request.on).toHaveBeenCalledWith("error", jasmine.any(Function));

		expect(request.end).toHaveBeenCalledTimes(1);
		done();
	});

	it("Should not post if 'disableAnalytics' is set to true", async done => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({ disableAnalytics: true } as Config);

		GATestClass.post({});

		expect(https.request).toHaveBeenCalledTimes(0);
		expect(request.on).toHaveBeenCalledTimes(0);
		expect(request.end).toHaveBeenCalledTimes(0);

		done();
	});

	it("Random Guid is generated if the platform check fails", done => {
		serviceSpy.and.throwError("Error!");
		const value = GATestClass.getUserID();

		expect(value).toBeDefined();
		expect(value).toMatch(/\d{1,}/);

		done();
	});
});
