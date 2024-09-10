import { GoogleAnalytics, ProjectConfig } from "@igniteui/cli-core";
import child_process from "child_process";
import https from "https";
import * as fs from "fs";
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
			spyOn(child_process, "execSync").and.returnValue("some string which contains REG_SZ so we can get Machine Key");
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
		spyOn(ProjectConfig, "getConfig").and.returnValue({});

		GATestClass.post({});
		expect(https.request).toHaveBeenCalledTimes(1);
		expect(https.request).toHaveBeenCalledWith(
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

	it("Calling post with custom parameters should create post request to 'www.google-analytics.com", async done => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({});

		GATestClass.post({ av: "1.2.3" });
		expect(https.request).toHaveBeenCalledTimes(1);
		expect(https.request).toHaveBeenCalledWith(
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
		spyOn(ProjectConfig, "getConfig").and.returnValue({ disableAnalytics: true });

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
