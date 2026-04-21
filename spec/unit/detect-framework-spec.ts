import { App, IFileSystem } from "@igniteui/cli-core";
import { detectFrameworkFromPackageJson } from "../../packages/core/util/detect-framework";

function makeFs(pkgJson?: object): IFileSystem {
	const present = pkgJson !== undefined;
	return {
		fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) =>
			p === "./package.json" && present
		),
		readFile: jasmine.createSpy("readFile").and.returnValue(JSON.stringify(pkgJson ?? {})),
		writeFile: jasmine.createSpy("writeFile"),
		directoryExists: jasmine.createSpy("directoryExists").and.returnValue(false),
		glob: jasmine.createSpy("glob").and.returnValue([]),
	} as unknown as IFileSystem;
}

describe("Unit - detectFrameworkFromPackageJson", () => {
	it("returns null when package.json is absent", () => {
		spyOn(App.container, "get").and.returnValue(makeFs());
		expect(detectFrameworkFromPackageJson()).toBeNull();
	});

	it("returns null when package.json is malformed JSON", () => {
		const fs = makeFs({});
		(fs.fileExists as jasmine.Spy).and.returnValue(true);
		(fs.readFile as jasmine.Spy).and.returnValue("not-valid-json{{{");
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectFrameworkFromPackageJson()).toBeNull();
	});

	describe("Angular detection", () => {
		it("detects angular when @angular/core is in dependencies", () => {
			spyOn(App.container, "get").and.returnValue(
				makeFs({ dependencies: { "@angular/core": "^17.0.0" } })
			);
			expect(detectFrameworkFromPackageJson()).toBe("angular");
		});

		it("detects angular when @angular/core is in devDependencies", () => {
			spyOn(App.container, "get").and.returnValue(
				makeFs({ devDependencies: { "@angular/core": "^17.0.0" } })
			);
			expect(detectFrameworkFromPackageJson()).toBe("angular");
		});
	});

	describe("React detection", () => {
		it("detects react when react is in dependencies", () => {
			spyOn(App.container, "get").and.returnValue(
				makeFs({ dependencies: { "react": "^19.0.0", "react-dom": "^19.0.0" } })
			);
			expect(detectFrameworkFromPackageJson()).toBe("react");
		});

		it("detects react when react is in devDependencies", () => {
			spyOn(App.container, "get").and.returnValue(
				makeFs({ devDependencies: { "react": "^19.0.0" } })
			);
			expect(detectFrameworkFromPackageJson()).toBe("react");
		});
	});

	describe("WebComponents / plain-JS fallback", () => {
		it("returns webcomponents for an empty package.json (no known framework)", () => {
			spyOn(App.container, "get").and.returnValue(makeFs({}));
			expect(detectFrameworkFromPackageJson()).toBe("webcomponents");
		});

		it("returns webcomponents when only unrelated packages are present", () => {
			spyOn(App.container, "get").and.returnValue(
				makeFs({ dependencies: { "lit": "^3.0.0", "vite": "^6.0.0" } })
			);
			expect(detectFrameworkFromPackageJson()).toBe("webcomponents");
		});

		it("returns webcomponents when lit is present but no react or angular", () => {
			spyOn(App.container, "get").and.returnValue(
				makeFs({ dependencies: { "lit": "^3.0.0" } })
			);
			expect(detectFrameworkFromPackageJson()).toBe("webcomponents");
		});
	});

	describe("Priority", () => {
		it("prefers angular over react when both are present", () => {
			spyOn(App.container, "get").and.returnValue(
				makeFs({ dependencies: { "@angular/core": "^17.0.0", "react": "^19.0.0" } })
			);
			expect(detectFrameworkFromPackageJson()).toBe("angular");
		});

		it("prefers react over webcomponents fallback when react is present", () => {
			spyOn(App.container, "get").and.returnValue(
				makeFs({ dependencies: { "react": "^19.0.0", "lit": "^3.0.0" } })
			);
			expect(detectFrameworkFromPackageJson()).toBe("react");
		});
	});
});
