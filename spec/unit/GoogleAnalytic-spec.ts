import { Config, GoogleAnalytics, ProjectConfig } from "@igniteui/cli-core";
import child_process from "child_process";
import https from "https";
import * as fs from "fs";
import * as path from "path";
import * as process from "process";
import { deleteAll } from "../helpers/utils";

describe("Unit - Google Analytic", () => {
	let request: jasmine.SpyObj<any>;
	let testFolder = path.parse(__filename).name;
	let serviceSpy: jasmine.Spy;

	class GATestClass extends GoogleAnalytics {
		public static userDataFolder = path.join(process.cwd(), `./output/${testFolder}`);
		public static apiSecret = "test-secret";
		public static getUserID(): any { return super.getUserID(); }
	}

	class GANoSecretTestClass extends GATestClass {
		public static apiSecret = "";
	}

	const sentBody = () => JSON.parse(request.end.calls.mostRecent().args[0]);

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
		expect(sentBody().user_properties.app_version).toEqual({ value: "1.2.3" });
	});

	it("Should post to the GA4 Measurement Protocol endpoint with a JSON body", async () => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({ disableAnalytics: false } as unknown as Config);

		GATestClass.post({ t: "screenview", cd: "New" });

		const requestOptions = (https.request as jasmine.Spy).calls.mostRecent().args[0];
		expect(requestOptions.path).toBe("/mp/collect?measurement_id=G-N2K2PWRTLP&api_secret=test-secret");
		expect(requestOptions.headers["Content-Type"]).toBe("application/json");

		const body = sentBody();
		expect(body.client_id).toMatch(/^[0-9a-f]{64}$/);
		expect(body.events.length).toBe(1);
		expect(body.events[0].name).toBe("page_view");
		expect(body.events[0].params.page_title).toBe("New");
		expect(body.events[0].params.session_id).toMatch(/^\d+$/);
		expect(body.user_properties.node_version).toEqual({ value: process.version });
	});

	it("Should map events and custom dimensions to GA4 event parameters", async () => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({ disableAnalytics: false } as unknown as Config);

		GATestClass.post({
			t: "event",
			ec: "$ig upgrade-packages",
			ea: "a".repeat(150),
			el: "label",
			cd1: "angular",
			cd2: "igx-ts",
			cd11: false,
			cd14: undefined
		});

		const event = sentBody().events[0];
		expect(event.name).toBe("ig_upgrade_packages");
		expect(event.params.event_category).toBe("$ig upgrade-packages");
		expect(event.params.event_action).toBe("a".repeat(100));
		expect(event.params.event_label).toBe("label");
		expect(event.params.framework).toBe("angular");
		expect(event.params.project_type).toBe("igx-ts");
		expect(event.params.skip_git).toBe("false");
		expect(event.params.theme).toBeUndefined();
	});

	it("Should map exceptions to GA4 exception event", async () => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({ disableAnalytics: false } as unknown as Config);

		GATestClass.post({ t: "exception", exd: "Something failed" });

		const event = sentBody().events[0];
		expect(event.name).toBe("exception");
		expect(event.params.description).toBe("Something failed");
	});

	it("Should not post if the API secret is not set", async () => {
		spyOn(ProjectConfig, "getConfig").and.returnValue({ disableAnalytics: false } as unknown as Config);

		GANoSecretTestClass.post({});

		expect(https.request).toHaveBeenCalledTimes(0);
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
