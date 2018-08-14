/**
 * Creates a `ProjectLibrary`-like mock with jasmine.Spy methods
 * @param type Project library type
 * @param groups Component groups to return. Defaults to `["Grids"]`
 * @param components Components to return Defaults to `["Grid"]`
 */
export function mockProLibFactory(
	type,
	groups = [{ name: "Grids", description: "Grids description" }],
	components = ["Grid"]) {
	return {
		getComponentGroupNames: jasmine.createSpy("getComponentGroupNames").and.returnValue(groups),
		getComponentNamesByGroup: jasmine.createSpy("getComponentNamesByGroup").and.returnValue(components),
		hasTemplate: jasmine.createSpy("hasTemplate").and.returnValue(false),
		projectType: type,
		registerTemplate: jasmine.createSpy("registerTemplate")
	};
}
