import { App, IFileSystem, ProjectConfig } from "@igniteui/cli-core";
import {
	detectBlazorFromCsproj,
	detectFramework,
	detectFrameworkFromPackageJson,
} from "../../packages/core/util/detect-framework";

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

	it("returns blazor when no config and no package.json but a Blazor .csproj file exists", () => {
		spyOn(ProjectConfig, "hasLocalConfig").and.returnValue(false);
		const fs = makeFs(); // no package.json
		fs.glob.and.returnValue(["MyApp.csproj"]);
		fs.readFile.and.callFake((p: string) => {
			if (p === "MyApp.csproj") return `<Project Sdk="Microsoft.NET.Sdk.BlazorWebAssembly"></Project>`;
			return "{}";
		});
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectFramework()).toBe("blazor");
	});
});

describe("Unit - detectBlazorFromCsproj", () => {
	const makeCsProj = (sdk: string, ...refs: string[]) =>
		`<Project Sdk="${sdk}">
			<PropertyGroup>
				<TargetFramework>net10.0</TargetFramework>
			</PropertyGroup>
			${refs.map((dep) =>
				`<ItemGroup>
					<PackageReference Include="${dep}" Version="10.0.0" />
				</ItemGroup>`,
			)}
		</Project>`;

	function makeDotnetFs(
		files: Record<string, string>,
		globResults: Record<string, string[]> = {}
	): jasmine.SpyObj<IFileSystem> {
		return {
			fileExists: jasmine.createSpy("fileExists").and.callFake((p: string) => p in files),
			readFile: jasmine.createSpy("readFile").and.callFake((p: string) => {
				if (p in files) return files[p];
				throw new Error(`File not found: ${p}`);
			}),
			writeFile: jasmine.createSpy("writeFile"),
			directoryExists: jasmine.createSpy("directoryExists").and.returnValue(false),
			glob: jasmine.createSpy("glob").and.callFake(
				(dir: string, pattern: string) => globResults[`${dir}|${pattern}`] ?? []
			),
		} satisfies jasmine.SpyObj<IFileSystem>;
	}

	it("returns true for a BlazorWebAssembly SDK project in CWD", () => {
		const fs = makeDotnetFs(
			{ "MyApp.csproj": makeCsProj("Microsoft.NET.Sdk.BlazorWebAssembly") },
			{ ".|*.csproj": ["MyApp.csproj"] }
		);
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectBlazorFromCsproj()).toBe(true);
	});

	it("returns true for a Web SDK project in CWD", () => {
		const fs = makeDotnetFs(
			{ "MyApp.csproj": makeCsProj("Microsoft.NET.Sdk.Web") },
			{ ".|*.csproj": ["MyApp.csproj"] }
		);
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectBlazorFromCsproj()).toBe(true);
	});

	it("returns true for a Razor SDK project in CWD", () => {
		const fs = makeDotnetFs(
			{ "MyApp.csproj": makeCsProj("Microsoft.NET.Sdk.Razor") },
			{ ".|*.csproj": ["MyApp.csproj"] }
		);
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectBlazorFromCsproj()).toBe(true);
	});

	it("returns true for a .NET SDK project with Components package reference", () => {
		const fs = makeDotnetFs(
			{ "MyApp.csproj": makeCsProj(
				"Microsoft.NET.Sdk",
				"Microsoft.AspNetCore.Components.WebAssembly")
			},
			{ ".|*.csproj": ["MyApp.csproj"] }
		);
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectBlazorFromCsproj()).toBe(true);
	});

	it("returns true for a .NET SDK project with IgniteUI.Blazor package reference", () => {
		const fs = makeDotnetFs(
			{ "MyApp.csproj": makeCsProj(
				"Microsoft.NET.Sdk",
				"IgniteUI.Blazor.GridLite")
			},
			{ ".|*.csproj": ["MyApp.csproj"] }
		);
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectBlazorFromCsproj()).toBe(true);
	});

	it("returns false for a .NET SDK project", () => {
		const fs = makeDotnetFs(
			{ "MyApp.csproj": makeCsProj("Microsoft.NET.Sdk") },
			{ ".|*.csproj": ["MyApp.csproj"] }
		);
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectBlazorFromCsproj()).toBe(false);
	});

	it("returns false when no .csproj or solution files exist", () => {
		const fs = makeDotnetFs({}, {});
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectBlazorFromCsproj()).toBe(false);
	});

	it("finds Blazor project through .sln solution file", () => {
		const slnContent =
			`Project("{FAE04EC0-301F-11D3-BF4B-00805F9B2053}") = "BlazorApp", "src\\BlazorApp\\BlazorApp.csproj", "{00000000-0000-0000-0000-000000000001}"\nEndProject`;
		const fs = makeDotnetFs(
			{ "MySolution.sln": slnContent, "src/BlazorApp/BlazorApp.csproj": makeCsProj("Microsoft.NET.Sdk.Web") },
			{ ".|*.csproj": [], ".|*.sln": ["MySolution.sln"], ".|*.slnx": [] }
		);
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectBlazorFromCsproj()).toBe(true);
	});

	it("finds Blazor project through .slnx solution file", () => {
		const slnxContent = `<Solution>\n  <Project Path="src/BlazorApp/BlazorApp.csproj" />\n</Solution>`;
		const fs = makeDotnetFs(
			{ "MySolution.slnx": slnxContent, "src/BlazorApp/BlazorApp.csproj": makeCsProj("Microsoft.NET.Sdk.Web") },
			{ ".|*.csproj": [], ".|*.sln": [], ".|*.slnx": ["MySolution.slnx"] }
		);
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectBlazorFromCsproj()).toBe(true);
	});

	it("returns false when solution references non-Blazor project", () => {
		const slnContent =
			`Project("{FAE04EC0}") = "ConsoleApp", "src\\ConsoleApp\\ConsoleApp.csproj", "{00000001}"\nEndProject`;
		const fs = makeDotnetFs(
			{ "MySolution.sln": slnContent, "src/ConsoleApp/ConsoleApp.csproj": makeCsProj("Microsoft.NET.Sdk") },
			{ ".|*.csproj": [], ".|*.sln": ["MySolution.sln"], ".|*.slnx": [] }
		);
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectBlazorFromCsproj()).toBe(false);
	});

	it("skips solution-referenced projects that do not exist on disk", () => {
		const slnContent =
			`Project("{FAE04EC0}") = "MissingApp", "missing\\App.csproj", "{00000002}"\nEndProject`;
		const fs = makeDotnetFs(
			{ "MySolution.sln": slnContent },
			{ ".|*.csproj": [], ".|*.sln": ["MySolution.sln"], ".|*.slnx": [] }
		);
		spyOn(App.container, "get").and.returnValue(fs);
		expect(detectBlazorFromCsproj()).toBe(false);
	});
});
