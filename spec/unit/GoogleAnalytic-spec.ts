import { Config, FrameworkId, GoogleAnalytics, ProjectConfig } from "@igniteui/cli-core";
import * as childProcess from "child_process";
import * as fs from "fs";
import * as https from "https";
import * as path from "path";
import * as process from "process";
import { deleteAll } from "../helpers/utils";

function createMockConfig(): Config {
    return {
		version: '1.0.0',
		packagesInstalled: true,
		build: {},
		igPackageRegistry: 'https://example.com',
		skipGit: true,
		disableAnalytics: true,
		customTemplates: [],
		stepByStep: {
			frameworks: ["angular", "react"],
			[FrameworkId.angular]: {
				projTypes: ["igx-ts", "igx-es6"]
			},
			[FrameworkId.react]: {
				projTypes: ["igx-react"]
			},
			[FrameworkId.jquery]: {
				projTypes: ["igx-jquery"]
			},
			[FrameworkId.webComponents]: {
				projTypes: ["igx-webcomponents"]
			}
		},
		project: {
			defaultPort: 4200,
			framework: "mock-ng",
			projectType: "mock-igx-ts",
			projectTemplate: "mock-side-nav",
			theme: "default-theme",
			themePath: "/path/to/theme",
			components: ["mock-component"],
			isBundle: true,
			isShowcase: false,
			version: '1.0.0',
			sourceRoot: "/src",
			igniteuiSource: "igniteui-source"
		}
	};
}

function createUrlObject(urlString) {
	const url = new URL(urlString);
	return {
	  href: url.href,
	  origin: url.origin,
	  protocol: url.protocol,
	  username: url.username,
	  password: url.password,
	  host: url.host,
	  hostname: url.hostname,
	  port: url.port,
	  pathname: url.pathname,
	  search: url.search,
	  searchParams: url.searchParams,
	  hash: url.hash,
	  toJSON: url.toJSON.bind(url)
	};
}

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

	it("Calling post should create post request to 'www.google-analytics.com", async done => {
		const mockProjectConfig = createMockConfig();
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		const urlString = 'https://www.example.com:8080/path/to/resource?query=example#section';
        const urlObject = createUrlObject(urlString);

		GATestClass.post({});
		expect(https.request).toHaveBeenCalledTimes(1);
		expect(https.request).toHaveBeenCalledWith(urlObject, jasmine.any(Function));
		expect(request.on).toHaveBeenCalledTimes(1);
		expect(request.on).toHaveBeenCalledWith("error", jasmine.any(Function));

		expect(request.end).toHaveBeenCalledTimes(1);
		done();
	});

	it("Calling post with custom parameters should create post request to 'www.google-analytics.com", async done => {
		const mockProjectConfig = createMockConfig();
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		const urlString = 'https://www.example.com:8080/path/to/resource?query=example#section';
        const urlObject = createUrlObject(urlString);

		GATestClass.post({ av: "1.2.3" });
		expect(https.request).toHaveBeenCalledTimes(1);
		expect(https.request).toHaveBeenCalledWith(urlObject, jasmine.any(Function));
		expect(request.on).toHaveBeenCalledTimes(1);
		expect(request.on).toHaveBeenCalledWith("error", jasmine.any(Function));

		expect(request.end).toHaveBeenCalledTimes(1);
		done();
	});

	it("Should not post if 'disableAnalytics' is set to true", async done => {
		const mockProjectConfig = createMockConfig();
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

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
