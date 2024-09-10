import { Config, FrameworkId, GoogleAnalytics, ProjectConfig, Util } from "@igniteui/cli-core";
import { default as listCmd } from "../../packages/cli/lib/commands/list";

describe("Unit - List command", () => {
	const mockTemplates = [
		{ controlGroup: "group1", id: "id1.1", description: "Description for 1.1" },
		{ controlGroup: "group1", id: "id1.2", description: "Description for 1.2" },
		{ controlGroup: "group1", id: "id1.3", description: "Description for 1.3" },
		// same id in same group to raise code coverage
		{ controlGroup: "group1", id: "id1.3", description: "Description for 1.3" },
		{ controlGroup: "group2", id: "id2.1", description: "Description for 2.1" },
		{ controlGroup: "group2", id: "id2.2", description: "Description for 2.2" }];
	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		spyOn(Util, "error");
		spyOn(Util, "log");
	});

	afterEach(() => {
	});

	it("Should list all templates with correctly provided parameters", async done => {
		const framework = { name: "jQuery" };
		const projectLib = {
			projectType: "js",
			templates: mockTemplates
		};

		listCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: framework,
			getProjectLibrary: projectLib
		});

		await listCmd.handler({ framework: "jQuery", type: "js", _: ["list"], $0: "list" });

		expect(Util.error).toHaveBeenCalledTimes(0);

		expect(Util.log).toHaveBeenCalledTimes(9);
		expect(Util.log).toHaveBeenCalledWith("Available templates for 'jQuery' framework 'js' type");
		expect(Util.log).toHaveBeenCalledWith("'group1' group:");
		expect(Util.log).toHaveBeenCalledWith("	id1.1     Description for 1.1");
		expect(Util.log).toHaveBeenCalledWith("	id1.2     Description for 1.2");
		expect(Util.log).toHaveBeenCalledWith("	id1.3     Description for 1.3");
		expect(Util.log).toHaveBeenCalledWith("'group2' group:");
		expect(Util.log).toHaveBeenCalledWith("	id2.1     Description for 2.1");
		expect(Util.log).toHaveBeenCalledWith("	id2.2     Description for 2.2");

		done();
	});

	it("Should list templates for framework specified in local config if any", async done => {
		const mockProjectConfig = {
			version: '1.0.0',
			packagesInstalled: true,
			build: {},
			igPackageRegistry: 'https://example.com',
			skipGit: false,
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

		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		spyOn(ProjectConfig, "getConfig").and.returnValue(mockProjectConfig);

		const framework = { name: "Angular" };
		const projectLib = {
			projectType: "igx-ts",
			templates: mockTemplates
		};

		listCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: framework,
			getProjectLibrary: projectLib
		});

		await listCmd.handler({ _: ["list"], $0: "list" });
		expect(Util.error).toHaveBeenCalledTimes(0);

		expect(Util.log).toHaveBeenCalledTimes(10);
		expect(Util.log).toHaveBeenCalledWith("Available templates for 'Angular' framework 'igx-ts' type");
		expect(Util.log).toHaveBeenCalledWith("'group1' group:");
		expect(Util.log).toHaveBeenCalledWith("	id1.1     Description for 1.1");
		expect(Util.log).toHaveBeenCalledWith("	id1.2     Description for 1.2");
		expect(Util.log).toHaveBeenCalledWith("	id1.3     Description for 1.3");
		expect(Util.log).toHaveBeenCalledWith("'group2' group:");
		expect(Util.log).toHaveBeenCalledWith("	id2.1     Description for 2.1");
		expect(Util.log).toHaveBeenCalledWith("	id2.2     Description for 2.2");
		expect(Util.log).toHaveBeenCalledWith(
			"To list available templates for other framework and project type run outside of a project folder");

		done();
	});

	it("Should log error if called with wrong framework", async done => {
		listCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: undefined
		});

		await listCmd.handler({ framework: "wrongOne", type: "js", _: ["list"], $0: "list" });

		expect(Util.error).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledWith("Wrong framework provided", "red");

		done();
	});

	it("Should log error if called without framework outside a project", async done => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);
		listCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: undefined
		});

		await listCmd.handler({ _: ["list"], $0: "list" });

		expect(Util.error).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledWith("Wrong framework provided", "red");

		done();
	});

	it("Should log error if called with wrong type", async done => {
		listCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: undefined
		});

		await listCmd.handler({ framework: "angular", type: "wrongType", _: ["list"], $0: "list" });

		expect(Util.error).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledWith("Project type 'wrongType' not found in framework 'angular'", "red");

		done();
	});

	it("Should list templates for default type when type no provided", async done => {
		const framework = { name: "React" };
		const projectLib = {
			projectType: "es6",
			templates: mockTemplates
		};

		listCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: framework,
			getProjectLibrary: projectLib
		});

		await listCmd.handler({ framework: "react", _: ["list"], $0: "list" });

		expect(Util.error).toHaveBeenCalledTimes(0);

		expect(Util.log).toHaveBeenCalledTimes(9);
		expect(Util.log).toHaveBeenCalledWith("Available templates for 'React' framework 'es6' type");
		expect(Util.log).toHaveBeenCalledWith("'group1' group:");
		expect(Util.log).toHaveBeenCalledWith("	id1.1     Description for 1.1");
		expect(Util.log).toHaveBeenCalledWith("	id1.2     Description for 1.2");
		expect(Util.log).toHaveBeenCalledWith("	id1.3     Description for 1.3");
		expect(Util.log).toHaveBeenCalledWith("'group2' group:");
		expect(Util.log).toHaveBeenCalledWith("	id2.1     Description for 2.1");
		expect(Util.log).toHaveBeenCalledWith("	id2.2     Description for 2.2");

		done();
	});
});
