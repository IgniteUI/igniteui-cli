import { App, IFileSystem, ProjectConfig } from "@igniteui/cli-core";
import { detectBlazorFromCsproj, detectFramework, detectFrameworkFromPackageJson } from "../../packages/core/util/detect-framework";

function makeFs(pkgJson?: object): jasmine.SpyObj<IFileSystem> {
	const present = pkgJson !== undefined;
	return {
		fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) =>
			p === "./package.json" && present
		),
		readFile: jasmine.createSpy("readFile").and.returnValue(JSON.stringify(pkgJson ?? {})),
		writeFile: jasmine.createSpy("writeFile"),
		directoryExists: jasmine.createSpy("directoryExists").and.returnValue(false),
		glob: jasmine.createSpy("glob").and.returnValue([]),
	} satisfies jasmine.SpyObj<IFileSystem>;
}

describe("Unit - detectFrameworkFromPackageJson", () => {
	it("returns null when package.json is absent", () => {
		spyOn(App.container, "get").and.returnValue(makeFs());
		expect(detectFrameworkFromPackageJson()).toBeNull();
	});

	it("returns null when package.json is malformed JSON", () => {
		const fs = makeFs({});
		fs.fileExists.and.returnValue(true);
		fs.readFile.and.returnValue("not-valid-json{{{");
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

describe("Unit - detectFramework", () => {
	it("returns framework from ProjectConfig when local config is present", () => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			project: { framework: "angular" }
		} as any);
		expect(detectFramework()).toBe("angular");
	});

	it("falls back to package.json detection when local config is absent", () => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);
		spyOn(App.container, "get").and.returnValue(
			makeFs({ dependencies: { "react": "^19.0.0" } })
		);
		expect(detectFramework()).toBe("react");
	});

	it("prefers ProjectConfig framework over package.json when both are present", () => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(true);
		spyOn(ProjectConfig, "getConfig").and.returnValue({
			project: { framework: "react" }
		} as any);
		// package.json has angular — should be ignored
		spyOn(App.container, "get").and.returnValue(
			makeFs({ dependencies: { "@angular/core": "^17.0.0" } })
		);
		expect(detectFramework()).toBe("react");
	});

	it("falls back to package.json detection when ProjectConfig throws", () => {
		spyOn(ProjectConfig, "hasLocalConfig").and.throwError("config read error");
		spyOn(App.container, "get").and.returnValue(
			makeFs({ dependencies: { "@angular/core": "^17.0.0" } })
		);
		expect(detectFramework()).toBe("angular");
	});

	it("returns null when neither ProjectConfig nor package.json provides a framework", () => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);
		spyOn(App.container, "get").and.returnValue(makeFs()); // no package.json present
		expect(detectFramework()).toBeNull();
	});

	it("returns blazor when no config and no package.json but a .csproj file exists", () => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);
		const fs = makeFs(); // no package.json
		(fs.glob as jasmine.Spy).and.returnValue(["MyApp.csproj"]);
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectFramework()).toBe("blazor");
	});
});

describe("Unit - detectBlazorFromCsproj", () => {
	it("returns true when a .csproj file exists", () => {
		const fs = makeFs();
		(fs.glob as jasmine.Spy).and.returnValue(["MyApp.csproj"]);
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectBlazorFromCsproj()).toBe(true);
	});

	it("returns false when no .csproj files exist", () => {
		const fs = makeFs();
		(fs.glob as jasmine.Spy).and.returnValue([]);
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectBlazorFromCsproj()).toBe(false);
	});
});