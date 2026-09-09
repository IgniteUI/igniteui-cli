import { ProjectLibrary, ProjectTemplate, resolveUpgradeableProject } from "@igniteui/cli-core";

describe("Unit - resolveUpgradeableProject", () => {

	function mockProject(id: string, options: { isHidden?: boolean; upgradeable?: boolean } = {}): ProjectTemplate {
		return {
			id,
			isHidden: !!options.isHidden,
			upgradeIgniteUIPackages: options.upgradeable === false ? undefined : jasmine.createSpy().and.returnValue(Promise.resolve(true))
		} as unknown as ProjectTemplate;
	}

	function mockLibrary(projects: { [id: string]: ProjectTemplate }, projectIds: string[]): ProjectLibrary {
		return {
			projectIds,
			hasProject: jasmine.createSpy().and.callFake((id: string) => projectIds.indexOf(id) > -1),
			getProject: jasmine.createSpy().and.callFake((id: string) => projects[id] || null)
		} as unknown as ProjectLibrary;
	}

	it("returns the configured project template when it exists and is upgradeable", () => {
		const emptyProject = mockProject("empty");
		const library = mockLibrary({ empty: emptyProject }, ["ai-config", "empty"]);

		const result = resolveUpgradeableProject(library, "empty");

		expect(result).toBe(emptyProject);
		expect(library.getProject).toHaveBeenCalledWith("empty");
	});

	it("skips the configured project template when it is hidden and falls back to the first upgradeable project", () => {
		const hiddenConfigured = mockProject("hidden-configured", { isHidden: true });
		const emptyProject = mockProject("empty");
		const library = mockLibrary(
			{ "hidden-configured": hiddenConfigured, empty: emptyProject },
			["ai-config", "empty"]
		);

		const result = resolveUpgradeableProject(library, "hidden-configured");

		expect(result).toBe(emptyProject);
	});

	it("skips hidden projects like ai-config and falls back to the first non-hidden upgradeable project", () => {
		const aiConfig = mockProject("ai-config", { isHidden: true });
		const base = mockProject("base", { isHidden: true });
		const empty = mockProject("empty");
		const library = mockLibrary(
			{ "ai-config": aiConfig, base, empty },
			["ai-config", "base", "empty"]
		);

		const result = resolveUpgradeableProject(library, "invalid-configured-template");

		expect(result).toBe(empty);
	});

	it("skips projects that don't implement upgradeIgniteUIPackages", () => {
		const notUpgradeable = mockProject("not-upgradeable", { upgradeable: false });
		const empty = mockProject("empty");
		const library = mockLibrary(
			{ "not-upgradeable": notUpgradeable, empty },
			["not-upgradeable", "empty"]
		);

		const result = resolveUpgradeableProject(library);

		expect(result).toBe(empty);
	});

	it("returns null when the configured template is invalid and no project in the library is upgradeable", () => {
		const aiConfig = mockProject("ai-config", { isHidden: true });
		const library = mockLibrary({ "ai-config": aiConfig }, ["ai-config"]);

		const result = resolveUpgradeableProject(library, "invalid-configured-template");

		expect(result).toBeNull();
	});

	it("returns null when the library has no projects at all", () => {
		const library = mockLibrary({}, []);

		const result = resolveUpgradeableProject(library);

		expect(result).toBeNull();
	});
});
