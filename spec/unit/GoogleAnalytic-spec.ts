import { Config, GoogleAnalytics, ProjectConfig } from "@igniteui/cli-core";
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

	it("Calling post should create post request to 'www.google-analytics.com", async () => {
		const mockProjectConfig = { disableAnalytics: false } as unknown as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		GATestClass.post({});
		expect(https.request).toHaveBeenCalledTimes(1);
		const requestOptions = (https.request as jasmine.Spy).calls.mostRecent().args[0];
		expect(requestOptions.host).toBe('www.google-analytics.com');
		expect(requestOptions.method).toBe('POST');
		expect(request.on).toHaveBeenCalledTimes(1);
		expect(request.on).toHaveBeenCalledWith("error", jasmine.any(Function));

		expect(request.end).toHaveBeenCalledTimes(1);
	});

	it("Calling post with custom parameters should create post request to 'www.google-analytics.com", async () => {
		const mockProjectConfig = { disableAnalytics: false } as unknown as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		GATestClass.post({ av: "1.2.3" });
		expect(https.request).toHaveBeenCalledTimes(1);
		const requestOptions = (https.request as jasmine.Spy).calls.mostRecent().args[0];
		expect(requestOptions.host).toBe('www.google-analytics.com');
		expect(requestOptions.method).toBe('POST');
		expect(request.on).toHaveBeenCalledTimes(1);
		expect(request.on).toHaveBeenCalledWith("error", jasmine.any(Function));

		expect(request.end).toHaveBeenCalledTimes(1);
	});

	it("Should not post if 'disableAnalytics' is set to true", async () => {
		const mockProjectConfig = { disableAnalytics: true } as unknown as Config;
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		GATestClass.post({});

		expect(https.request).toHaveBeenCalledTimes(0);
		expect(request.on).toHaveBeenCalledTimes(0);
		expect(request.end).toHaveBeenCalledTimes(0);
	});

	it("Random Guid is generated if the platform check fails", () => {
		serviceSpy.and.throwError("Error!");
		const value = GATestClass.getUserID();

		expect(value).toBeDefined();
		expect(value).toMatch(/\d{1,}/);

	});
});
