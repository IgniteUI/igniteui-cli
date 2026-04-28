import { Config, GoogleAnalytics, ProjectConfig, Util } from "@igniteui/cli-core";
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

	it("Should list all templates with correctly provided parameters", async () => {
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
	});

	it("Should list templates for framework specified in local config if any", async () => {
		const mockProjectConfig = {
			project: {
				framework: "angular",
				projectType: "igx-ts"
			}
		} as unknown as Config;

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
	});

	it("Should log error if called with wrong framework", async () => {
		listCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: undefined
		});

		await listCmd.handler({ framework: "wrongOne", type: "js", _: ["list"], $0: "list" });

		expect(Util.error).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledWith("Wrong framework provided", "red");
	});

	it("Should list all frameworks and their project templates when called without framework outside a project", async () => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);

		const angularFramework = {
			id: "angular",
			name: "Angular",
			projectLibraries: [{
				name: "Ignite UI for Angular",
				projectType: "igx-ts",
				projects: [
					{ id: "default-side-nav", description: "Side navigation project", isHidden: false },
					{ id: "hidden-one", description: "hidden", isHidden: true }
				]
			}]
		};
		const reactFramework = {
			id: "react",
			name: "React",
			projectLibraries: [{
				name: "Ignite UI for React",
				projectType: "igr-ts",
				projects: [
					{ id: "default", description: "Default React project", isHidden: false }
				]
			}]
		};

		listCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkIds: ["angular", "react"],
			getFrameworkById: null
		});
		(listCmd.templateManager.getFrameworkById as jasmine.Spy).and.callFake((id: string) => {
			if (id === "angular") { return angularFramework; }
			if (id === "react") { return reactFramework; }
			return undefined;
		});

		await listCmd.handler({ _: ["list"], $0: "list" });

		expect(Util.error).toHaveBeenCalledTimes(0);
		expect(Util.log).toHaveBeenCalledWith("Available frameworks and project templates:");
		expect(Util.log).toHaveBeenCalledWith("Angular (angular)");
		expect(Util.log).toHaveBeenCalledWith("\tIgnite UI for Angular (igx-ts)");
		const ansi = "(?:\\u001b\\[\\d+m)*";
		expect(Util.log).toHaveBeenCalledWith(jasmine.stringMatching(
			new RegExp(`^\\t\\tdefault-side-nav${ansi}\\.{3}${ansi}Side navigation project${ansi}$`)));
		expect(Util.log).toHaveBeenCalledWith("React (react)");
		expect(Util.log).toHaveBeenCalledWith("\tIgnite UI for React (igr-ts)");
		expect(Util.log).toHaveBeenCalledWith(jasmine.stringMatching(
			new RegExp(`^\\t\\tdefault${ansi}\\.{11}${ansi}Default React project${ansi}$`)));
		expect(Util.log).not.toHaveBeenCalledWith(jasmine.stringMatching(/hidden-one/));
	});

	it("Should log error if called with --type but no --framework outside a project", async () => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);
		listCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkIds: [],
			getFrameworkById: undefined
		});

		await listCmd.handler({ type: "igx-ts", _: ["list"], $0: "list" });

		expect(Util.error).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledWith("'--type' requires '--framework'", "red");
	});

	it("Should log error if called with wrong type", async () => {
		listCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: {},
			getProjectLibrary: undefined
		});

		await listCmd.handler({ framework: "angular", type: "wrongType", _: ["list"], $0: "list" });

		expect(Util.error).toHaveBeenCalledTimes(1);
		expect(Util.error).toHaveBeenCalledWith("Project type 'wrongType' not found in framework 'angular'", "red");
	});

	it("Should list templates for default type when type no provided", async () => {
		const framework = { name: "React" };
		const projectLib = {
			projectType: "igr-ts",
			templates: mockTemplates
		};

		listCmd.templateManager = jasmine.createSpyObj("TemplateManager", {
			getFrameworkById: framework,
			getProjectLibrary: projectLib
		});

		await listCmd.handler({ framework: "react", _: ["list"], $0: "list" });

		expect(Util.error).toHaveBeenCalledTimes(0);

		expect(Util.log).toHaveBeenCalledTimes(9);
		expect(Util.log).toHaveBeenCalledWith("Available templates for 'React' framework 'igr-ts' type");
		expect(Util.log).toHaveBeenCalledWith("'group1' group:");
		expect(Util.log).toHaveBeenCalledWith("	id1.1     Description for 1.1");
		expect(Util.log).toHaveBeenCalledWith("	id1.2     Description for 1.2");
		expect(Util.log).toHaveBeenCalledWith("	id1.3     Description for 1.3");
		expect(Util.log).toHaveBeenCalledWith("'group2' group:");
		expect(Util.log).toHaveBeenCalledWith("	id2.1     Description for 2.1");
		expect(Util.log).toHaveBeenCalledWith("	id2.2     Description for 2.2");
	});
});
