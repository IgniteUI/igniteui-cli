import { Util } from "../../lib/Util";

describe("Unit - Util", () => {
	it("className should replace dashes and empty spaces", async done => {
		const projectNames = [
			{
				name: "name with spaces",
				valid: "NameWithSpaces"
			},
			{
				name: "name-with-dashes",
				valid: "NameWithDashes"
			},
			{
				name: "miXed CaSe",
				valid: "MiXedCaSe"
			}
		];

		for (const item of projectNames) {
			expect(Util.className(item.name)).toEqual(item.valid);
		}

		done();
	});

	it("should read the existing app folder name and return incremented app name ", () => {
		const defaultName = "IG Project";

		spyOn(Util, "directoryExists").and.callFake(function name(myParam) {
			if (myParam.endsWith(defaultName)) {
				return true;
			} else {
				return false;
			}
		});

		expect(Util.getAvailableName(defaultName, true)).toEqual("IG Project 1");
		expect(Util.directoryExists).toHaveBeenCalledTimes(2);
});

	it("should read the existing component folder name and return incremented component name ", () => {
		const defaultComponentName = "grid";

		spyOn(Util, "directoryExists").and.callFake(function name(myParam) {
			if (myParam.endsWith(defaultComponentName)) {
				return true;
			} else {
				return false;
			}
		});

		expect(Util.getAvailableName(defaultComponentName, false)).toEqual("grid 1");
		expect(Util.getAvailableName(defaultComponentName, false, "jQuery")).toEqual("grid 1");
		expect(Util.getAvailableName(defaultComponentName, false, "React")).toEqual("grid 1");
		expect(Util.getAvailableName(defaultComponentName, false, "Angular", "ig-ts")).toEqual("grid 1");
		expect(Util.getAvailableName(defaultComponentName, false, "Angular", "igx-ts")).toEqual("grid 1");
		expect(Util.directoryExists).toHaveBeenCalledTimes(10);
	});

	it("should read the existing component view name and return incremented view name ", () => {
		let defaultViewName = "editors-calculation-form";
		spyOn(Util, "directoryExists").and.callFake(function name(myParam) {
			if (myParam.endsWith(defaultViewName)) {
				return true;
			} else {
				return false;
			}
		});

		expect(Util.getAvailableName("editors-calculation-form", false)).toEqual("editors-calculation-form 1");
		expect(Util.getAvailableName("editors-calculation-form", false, "jQuery")).toEqual("editors-calculation-form 1");
		expect(Util.getAvailableName("editors-calculation-form", false, "Angular", "ig-ts")).
		toEqual("editors-calculation-form 1");
		defaultViewName = "awesome-grid";
		expect(Util.getAvailableName("awesome-grid", false, "Angular", "igx-ts")).toEqual("awesome-grid 1");
		expect(Util.directoryExists).toHaveBeenCalledTimes(8);
	});
});
