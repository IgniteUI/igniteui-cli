import { Util } from "@igniteui/cli-core";

describe("Unit - Util", () => {
	it("className should replace dashes and empty spaces", async () => {
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

	describe("Relative paths", () => {
		it("Creates correct relative path for child structure", async () => {

			// default use, shared root
			expect(Util.relativePath(
				"C:\\src\\app\\app-routing.module.ts",
				"C:\\src\\app\\carousel\\carousel.component.ts", true, true
			))
			.toBe("./carousel/carousel.component", "Shared Win root, file to file => posix ");
			expect(Util.relativePath(
				"/home/app/app.module.ts",
				"/home/app/grid/grid.component.ts", true, true
			))
			.toBe("./grid/grid.component", "Shared posix root, file to file => posix ");

			expect(Util.relativePath(
				"C:\\home\\app-routing.module.ts",
				"C:/home/app/grid/grid.component.ts", true, false
			))
			.toBe("./app/grid/grid.component.ts", "Win style to posix file, keep ext => posix");
		});

		it("Creates correct relative path for parent dir", async () => {
			// going up levels
			expect(Util.relativePath(
				"C:\\common\\folder1\\folder2\\folder3\\file.ts",
				"C:\\common\\dir1\\dir2\\target.ts", false
			))
			.toBe("..\\..\\..\\dir1\\dir2\\target", "Win style, file to file => win");

			expect(Util.relativePath(
				"C:\\Work\\git\\Ignite-UI-CLI\\spec\\unit\\ts-transforms\\TypeScriptUtils-spec.ts",
				"C:\\Work\\git\\Ignite-UI-CLI\\lib\\project-utility\\TypeScriptUtils.ts", true
			))
			// same as top level import above
			.toBe("../../../lib/project-utility/TypeScriptUtils", "Win style, file to file => posix");

			expect(Util.relativePath(
				"C:\\common\\folder1\\folder2\\folder3\\",
				"C:\\common\\dir1\\dir2\\target.ts", true
			))
			.toBe("../../../dir1/dir2/target", "Win style, folder to file => posix");

			expect(Util.relativePath(
				"C:\\common\\folder1\\folder2\\folder3\\",
				"C:\\common\\dir1\\dir2\\target", true
			))
			.toBe("../../../dir1/dir2/target", "Win style, folder to file w/o ext => posix");

			expect(Util.relativePath(
				"C:/common/folder1/folder2/folder3/",
				"C:\\common\\dir1\\dir2\\target.ts", true
			))
			.toBe("../../../dir1/dir2/target", "posix folder to Win style file => posix");

			expect(Util.relativePath(
				"C:/common/folder1/folder2/folder3/",
				"C:\\common\\dir1\\dir2\\target.ts", true, false
			))
			.toBe("../../../dir1/dir2/target.ts", "posix folder to Win style file, keep ext => posix");
		});
	});
});
