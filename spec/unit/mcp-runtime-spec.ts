import * as path from "path";
import * as fs from "fs";

// Import from built dist/ because the MCP package is ESM and this Jasmine test setup runs through CJS/ts-node. Run build:mcp first.
// Non-literal import paths prevent tsc from resolving these modules at compile time (dist/ is created by build:mcp which runs after tsc).
describe("Unit - MCP runtime", () => {
	const mcpRoot = path.resolve("packages/igniteui-mcp/igniteui-doc-mcp");
	const mcpDist = "../../packages/igniteui-mcp/igniteui-doc-mcp/dist";

	let createGetApiReferenceHandler: any;
	let createSearchApiHandler: any;
	let extractSection: any;
	let searchApiDocs: any;
	let RemoteDocsProvider: any;
	let buildProjectSetupGuide: any;
	let sanitizeSearchDocsQuery: any;
	let ApiDocLoader: any;
	let LocalDocsProvider: any;
	let SETUP_DOCS: any;

	beforeAll(async () => {
		({ createGetApiReferenceHandler, createSearchApiHandler } =
			await import(`${mcpDist}/tools/handlers.js`));
		({ extractSection, searchApiDocs } =
			await import(`${mcpDist}/lib/api-doc-search.js`));
		({ RemoteDocsProvider } =
			await import(`${mcpDist}/providers/RemoteDocsProvider.js`));
		({ buildProjectSetupGuide, sanitizeSearchDocsQuery } =
			await import(`${mcpDist}/tools/doc-tools.js`));
		({ ApiDocLoader } =
			await import(`${mcpDist}/lib/api-doc-loader.js`));
		({ LocalDocsProvider } =
			await import(`${mcpDist}/providers/LocalDocsProvider.js`));
		({ SETUP_DOCS } =
			await import(`${mcpDist}/tools/constants.js`));
	});

	afterAll(() => {
		fs.rmSync(path.join(mcpRoot, "test-fixtures"), { recursive: true, force: true });
	});

	describe("API helper functions", () => {
		it("extracts a named section from markdown content", () => {
			const markdown = [
				"# IgcGridComponent",
				"",
				"## Properties",
				"- width: string",
				"",
				"## Methods",
				"- selectRow(): void",
				"",
				"## Events",
				"- rowSelectionChanging"
			].join("\n");

			const result = extractSection(markdown, "methods");

			expect(result).toBe("## Methods\n- selectRow(): void");
		});

		it("finds and ranks API docs by actual matching terms", () => {
			const docs = [
				{
					component: "IgcGridComponent",
					type: "class",
					platform: "webcomponents",
					keywords: ["selection", "grid"],
					summary: "Grid component",
					content: "The grid supports row selection and keyboard navigation."
				},
				{
					component: "IgcComboComponent",
					type: "class",
					platform: "webcomponents",
					keywords: ["filtering"],
					summary: "Combo component",
					content: "The combo supports filtering."
				}
			];

			const result = searchApiDocs(docs, "grid selection", 10);

			expect(result.length).toBe(1);
			expect(result[0].entry.component).toBe("IgcGridComponent");
			expect(result[0].matches).toBe(2);
			expect(result[0].excerpt).toContain("row selection");
		});

		it("resolves heading aliases when extracting sections", () => {
			const markdown = [
				"# IgxGridComponent",
				"",
				"## Accessors",
				"- get width(): string",
				"",
				"## Methods",
				"- selectRow(): void"
			].join("\n");

			expect(extractSection(markdown, "properties")).toBe("## Accessors\n- get width(): string");
		});

		it("resolves the 'outputs' alias when extracting events", () => {
			const markdown = [
				"# IgxGridComponent",
				"",
				"## Outputs",
				"- rowSelectionChanging",
				"",
				"## Methods",
				"- selectRow(): void"
			].join("\n");

			expect(extractSection(markdown, "events")).toBe("## Outputs\n- rowSelectionChanging");
		});

		it("extracts a section at the end of the document with no trailing heading", () => {
			const markdown = [
				"# IgcComboComponent",
				"",
				"## Properties",
				"- value: string",
				"",
				"## Events",
				"- selectionChanging",
				"- closed"
			].join("\n");

			expect(extractSection(markdown, "events")).toBe("## Events\n- selectionChanging\n- closed");
		});

		it("returns null for an unknown section name", () => {
			const markdown = "# Component\n\n## Properties\n- x: number";

			expect(extractSection(markdown, "slots")).toBeNull();
		});

		it("ranks multiple matching entries by descending match count", () => {
			const docs = [
				{
					component: "IgcTreeComponent",
					type: "class",
					platform: "webcomponents",
					keywords: ["tree"],
					summary: "Tree component",
					content: "A tree with nodes."
				},
				{
					component: "IgcTreeGridComponent",
					type: "class",
					platform: "webcomponents",
					keywords: ["tree", "grid", "selection"],
					summary: "Tree grid component",
					content: "The tree grid supports selection and row expansion."
				},
				{
					component: "IgcGridComponent",
					type: "class",
					platform: "webcomponents",
					keywords: ["grid", "selection"],
					summary: "Grid component",
					content: "The grid supports selection."
				}
			];

			const result = searchApiDocs(docs, "tree grid selection", 10);

			expect(result.length).toBe(3);
			expect(result[0].entry.component).toBe("IgcTreeGridComponent");
			expect(result[0].matches).toBe(3);
			expect(result[1].matches).toBeGreaterThanOrEqual(1);
			expect(result[1].matches).toBeLessThanOrEqual(2);
			expect(result[0].matches).toBeGreaterThan(result[1].matches);
		});

		it("respects the limit parameter when truncating results", () => {
			const docs = Array.from({ length: 15 }, (_, i) => ({
				component: `IgcComponent${i}`,
				type: "class",
				platform: "webcomponents" as const,
				keywords: ["grid"],
				summary: `Component ${i}`,
				content: `This component involves grid features.`
			}));

			const result = searchApiDocs(docs, "grid", 5);

			expect(result.length).toBe(5);
		});

		it("uses summary as excerpt when only keywords match and content does not", () => {
			const docs = [
				{
					component: "IgcSomeComponent",
					type: "class",
					platform: "webcomponents",
					keywords: ["virtualization"],
					summary: "Supports virtualization",
					content: "No relevant text here."
				}
			];

			const result = searchApiDocs(docs, "virtualization", 10);

			expect(result.length).toBe(1);
			expect(result[0].excerpt).toContain("virtualization");
		});
	});

	describe("tool handlers", () => {
		it("returns entry content as the API response", async () => {
			const apiContent = "# IgrGrid\n\n## Properties\n- height: string";
			const docLoader = {
				get: jasmine.createSpy().and.returnValue({
					component: "IgrGrid",
					platform: "react",
					content: apiContent
				}),
				search: jasmine.createSpy().and.returnValue([])
			};

			const handler = createGetApiReferenceHandler(docLoader);
			const result = await handler({
				platform: "react",
				component: "IgrGrid",
				section: "all"
			});

			expect(result.isError).toBeUndefined();
			expect(result.content[0].text).toBe(apiContent);
		});

		it("falls back to case-insensitive component matching", async () => {
			const docLoader = {
				get: jasmine.createSpy().and.returnValue(undefined),
				search: jasmine.createSpy().and.returnValue([
					{ component: "IgcGridComponent", platform: "webcomponents", content: "# IgcGridComponent" }
				])
			};

			const handler = createGetApiReferenceHandler(docLoader);
			const result = await handler({
				platform: "webcomponents",
				component: "igcgridcomponent",
				section: "all"
			});

			expect(docLoader.search).toHaveBeenCalledWith({ platform: "webcomponents", filter: "igcgridcomponent" });
			expect(result.isError).toBeUndefined();
		});

		it("returns an error when an API reference is not found", async () => {
			const docLoader = {
				get: jasmine.createSpy().and.returnValue(undefined),
				search: jasmine.createSpy().and.returnValue([])
			};

			const handler = createGetApiReferenceHandler(docLoader);
			const result = await handler({
				platform: "react",
				component: "MissingGrid",
				section: "all"
			});

			expect(result.isError).toBeTrue();
			expect(result.content[0].text).toContain('API reference for "MissingGrid" not found in React.');
		});

		it("returns an error when API content is not available in memory", async () => {
			const docLoader = {
				get: jasmine.createSpy().and.returnValue({
					component: "IgcGridComponent",
					platform: "webcomponents",
					content: ""
				}),
				search: jasmine.createSpy().and.returnValue([])
			};

			const handler = createGetApiReferenceHandler(docLoader);
			const result = await handler({
				platform: "webcomponents",
				component: "IgcGridComponent",
				section: "all"
			});

			expect(result.isError).toBeTrue();
			expect(result.content[0].text).toContain('API content for "IgcGridComponent" is not available in memory.');
		});

		it("returns a requested markdown section from entry content", async () => {
			const docLoader = {
				get: jasmine.createSpy().and.returnValue({
					component: "IgcGridComponent",
					platform: "webcomponents",
					content: [
						"# IgcGridComponent",
						"",
						"## Properties",
						"- width: string",
						"",
						"## Methods",
						"- selectRow(): void",
						"",
						"## Events",
						"- rowSelectionChanging"
					].join("\n")
				}),
				search: jasmine.createSpy().and.returnValue([])
			};

			const handler = createGetApiReferenceHandler(docLoader);
			const result = await handler({
				platform: "webcomponents",
				component: "IgcGridComponent",
				section: "methods"
			});

			expect(result.isError).toBeUndefined();
			expect(result.content[0].text).toContain("# IgcGridComponent (webcomponents) - methods");
			expect(result.content[0].text).toContain("## Methods");
			expect(result.content[0].text).toContain("selectRow(): void");
		});

		it("formats successful API search results", async () => {
			const docLoader = {
				search: jasmine.createSpy().and.returnValue([
					{
						component: "IgcGridComponent",
						type: "class",
						platform: "webcomponents",
						keywords: ["selection", "grid"],
						summary: "Grid component",
						content: "The grid supports row selection and keyboard navigation."
					}
				])
			};

			const handler = createSearchApiHandler(docLoader);
			const result = await handler({
				query: "grid selection",
				platform: "webcomponents"
			});

			expect(result.isError).toBeUndefined();
			expect(result.content[0].text).toContain("**IgcGridComponent** [webcomponents] [class]");
			expect(result.content[0].text).toContain("Keywords: selection, grid");
			expect(result.content[0].text).toContain("row selection");
		});

		it("returns a no-results response when API search finds nothing", async () => {
			const docLoader = {
				search: jasmine.createSpy().and.returnValue([])
			};

			const handler = createSearchApiHandler(docLoader);
			const result = await handler({
				query: "notfound",
				platform: "webcomponents"
			});

			expect(result.isError).toBeUndefined();
			expect(result.content[0].text).toContain("No results found");
			expect(result.content[0].text).toContain("notfound");
			expect(result.content[0].text).toContain("Web Components");
		});

		it("returns full content when section is requested but extractSection finds no match", async () => {
			const fullContent = "# IgcButtonComponent\n\nButton component docs with no standard sections.";
			const docLoader = {
				get: jasmine.createSpy().and.returnValue({
					component: "IgcButtonComponent",
					platform: "webcomponents",
					content: fullContent
				}),
				search: jasmine.createSpy().and.returnValue([])
			};

			const handler = createGetApiReferenceHandler(docLoader);
			const result = await handler({
				platform: "webcomponents",
				component: "IgcButtonComponent",
				section: "events"
			});

			expect(result.isError).toBeUndefined();
			expect(result.content[0].text).toBe(fullContent);
		});
	});

	describe("remote docs provider", () => {
		it("requests filtered component lists from the remote docs backend", async () => {
			const fetchSpy = spyOn(globalThis, "fetch").and.resolveTo(new Response("grid docs", { status: 200 }));
			const provider = new RemoteDocsProvider("https://docs.example.test/base/");

			const result = await provider.listComponents("angular", "grid");
			const requestUrl = fetchSpy.calls.mostRecent().args[0] as URL;

			expect(result).toBe("grid docs");
			expect(requestUrl.toString()).toBe("https://docs.example.test/api/docs?framework=angular&filter=grid");
		});

		it("returns remote docs successfully when a document exists", async () => {
			spyOn(globalThis, "fetch").and.resolveTo(new Response("# Grid Doc", { status: 200 }));
			const provider = new RemoteDocsProvider("https://docs.example.test/");

			const result = await provider.getDoc("react", "grid");

			expect(result).toEqual({ text: "# Grid Doc", found: true });
		});

		it("returns search results successfully from the remote docs backend", async () => {
			const fetchSpy = spyOn(globalThis, "fetch").and.resolveTo(new Response("matching docs", { status: 200 }));
			const provider = new RemoteDocsProvider("https://docs.example.test/base/");

			const result = await provider.searchDocs("angular", '"grid" OR tree*');
			const requestUrl = fetchSpy.calls.mostRecent().args[0] as URL;

			expect(result).toBe("matching docs");
			expect(requestUrl.toString()).toBe(
				"https://docs.example.test/api/docs/search?framework=angular&query=%22grid%22+OR+tree*"
			);
		});

		it("returns a structured not-found result for missing remote docs", async () => {
			spyOn(globalThis, "fetch").and.resolveTo(new Response("missing", { status: 404 }));
			const provider = new RemoteDocsProvider("https://docs.example.test/");

			const result = await provider.getDoc("react", "missing-grid");

			expect(result.found).toBeFalse();
			expect(result.text).toContain("missing-grid");
			expect(result.text).toContain("react");
			expect(result.text).toContain("not found");
			expect(result.text).toContain("list_components");
		});

		it("throws for generic non-OK getDoc responses", async () => {
			spyOn(globalThis, "fetch").and.resolveTo(new Response("server error", { status: 500 }));
			const provider = new RemoteDocsProvider("https://docs.example.test/");

			await expectAsync(provider.getDoc("react", "grid")).toBeRejectedWithError(
				'Backend returned 500: server error'
			);
		});

		it("throws for generic non-OK searchDocs responses", async () => {
			spyOn(globalThis, "fetch").and.resolveTo(new Response("bad search", { status: 500 }));
			const provider = new RemoteDocsProvider("https://docs.example.test/");

			await expectAsync(provider.searchDocs("angular", '"grid"')).toBeRejectedWithError(
				'Backend returned 500: bad search'
			);
		});
	});

	describe("documentation tool helpers", () => {
		it("sanitizes search_docs queries while preserving hyphens and valid prefix operators", () => {
			const result = sanitizeSearchDocsQuery('grid-editing @"row" tree*');

			expect(result).toBe('"grid-editing" OR "row" OR tree*');
		});

		it("drops invalid all-asterisk terms and returns null when no search terms remain", () => {
			const result = sanitizeSearchDocsQuery("***");

			expect(result).toBeNull();
		});

		it("returns null for an empty string", () => {
			expect(sanitizeSearchDocsQuery("")).toBeNull();
		});

		it("wraps plain space-separated terms in quotes joined by OR", () => {
			const result = sanitizeSearchDocsQuery("column pinning");

			expect(result).toContain('"column"');
			expect(result).toContain('"pinning"');
			expect(result).toContain("OR");
		});

		it("returns the framework prompt when no project setup framework is provided", async () => {
			const docsProvider = {
				getDoc: jasmine.createSpy("getDoc")
			};

			const result = await buildProjectSetupGuide(docsProvider);

			expect(result).toContain("angular");
			expect(result).toContain("react");
			expect(result).toContain("blazor");
			expect(result).toContain("webcomponents");
			expect(docsProvider.getDoc).not.toHaveBeenCalled();
		});

		it("returns the static setup guide for a known SPA framework", async () => {
			const docsProvider = {
				getDoc: jasmine.createSpy("getDoc")
			};

			const result = await buildProjectSetupGuide(docsProvider, "angular");

			expect(typeof result).toBe("string");
			expect(result.length).toBeGreaterThan(0);
			expect(docsProvider.getDoc).not.toHaveBeenCalled();
		});

		it("returns a fallback message for an unknown framework", async () => {
			const docsProvider = {
				getDoc: jasmine.createSpy("getDoc")
			};

			const result = await buildProjectSetupGuide(docsProvider, "flutter");

			expect(result).toContain("flutter");
			expect(result).toContain("No setup guide available");
			expect(docsProvider.getDoc).not.toHaveBeenCalled();
		});

		it("builds the Blazor setup guide by joining the base guide with found remote docs", async () => {
			const docsProvider = {
				getDoc: jasmine.createSpy("getDoc").and.callFake(async (_framework: string, name: string) => {
					if (name === "general-installing-blazor") {
						return { text: "Install Blazor package guide", found: true };
					}

					return { text: "missing", found: false };
				})
			};

			const result = await buildProjectSetupGuide(docsProvider, "blazor");

			expect(result).toContain("# Creating a Blazor Application");
			expect(result).toContain("Install Blazor package guide");
			expect(result).not.toContain("missing");
			const expectedDocArgs = SETUP_DOCS.blazor.map((name: string) => ["blazor", name]);
			expect(docsProvider.getDoc.calls.allArgs()).toEqual(expectedDocArgs);
		});
	});

	describe("ApiDocLoader", () => {
		const fixtureDir = path.join(mcpRoot, "test-fixtures", "api-test");
		const llmsFile = path.join(fixtureDir, "igniteui-wc", "1.0.0", "llms-full.txt");

		const FIXTURE_LLMS_CONTENT = [
			"### [IgcTestGrid](https://example.com/IgcTestGrid)",
			"Test grid component",
			"- width: string — The grid width",
			"- selectRow(): void — Selects a row",
			"",
			"### [IgcTestCombo](https://example.com/IgcTestCombo)",
			"Test combo component",
			"- value: string — Selected value",
		].join("\n");

		beforeAll(() => {
			fs.mkdirSync(path.dirname(llmsFile), { recursive: true });
			fs.writeFileSync(llmsFile, FIXTURE_LLMS_CONTENT);
		});

		function createLoader(): any {
			const loader = new ApiDocLoader([{
				key: "webcomponents",
				displayName: "Test WC",
				submodulePath: "blazor/api-docs",
				docsPath: "test-fixtures/api-test",
				apiSource: { kind: "llms-full-txt", docsPath: "test-fixtures/api-test" }
			}]);
			spyOn(console, "error");
			loader.load();
			return loader;
		}

		it("loads entries and retrieves them by platform:name key", () => {
			const loader = createLoader();
			const entry = loader.get("webcomponents", "IgcTestGrid");

			expect(entry).toBeDefined();
			expect(entry.component).toBe("IgcTestGrid");
			expect(entry.platform).toBe("webcomponents");
			expect(entry.content).toContain("IgcTestGrid");
		});

		it("returns undefined for a missing entry or wrong platform", () => {
			const loader = createLoader();

			expect(loader.get("webcomponents", "NonExistent")).toBeUndefined();
			expect(loader.get("react", "IgcTestGrid")).toBeUndefined();
		});

		it("search() filters entries by platform and keyword", () => {
			const loader = createLoader();

			const all = loader.search({ platform: "webcomponents" });
			expect(all.length).toBe(2);

			const filtered = loader.search({ platform: "webcomponents", filter: "grid" });
			expect(filtered.length).toBe(1);
			expect(filtered[0].component).toBe("IgcTestGrid");
		});

		it("search() filters entries by type", () => {
			const loader = createLoader();

			const classes = loader.search({ platform: "webcomponents", type: "class" });
			expect(classes.length).toBe(2);

			const interfaces = loader.search({ platform: "webcomponents", type: "interface" });
			expect(interfaces.length).toBe(0);
		});
	});

	describe("LocalDocsProvider", () => {
		const dbFixtureDir = path.join(mcpRoot, "test-fixtures", "local-db-test");
		const dbFixturePath = path.join(dbFixtureDir, "test.db");

		beforeAll(() => {
			fs.mkdirSync(dbFixtureDir, { recursive: true });

			// Use better-sqlite3 (dev dep) to build a tiny fixture DB with the real schema
			const Database = require("better-sqlite3");
			const db = new Database(dbFixturePath);
			db.exec(`
				CREATE TABLE docs (
					id INTEGER PRIMARY KEY AUTOINCREMENT,
					framework TEXT NOT NULL,
					filename TEXT NOT NULL,
					component TEXT NOT NULL,
					toc_name TEXT,
					premium INTEGER DEFAULT 0,
					keywords TEXT,
					summary TEXT,
					content TEXT NOT NULL,
					UNIQUE(framework, filename)
				);
				CREATE VIRTUAL TABLE docs_fts USING fts4(
					component, toc_name, keywords, summary, content,
					content='docs', tokenize=porter, prefix="2,3"
				);
				INSERT INTO docs (framework, filename, component, toc_name, keywords, summary, content)
				VALUES ('angular', 'grid-editing.md', 'IgxGridComponent', 'Grid Editing', 'grid,editing', 'Cell and row editing', '# Grid Editing\nEdit cells and rows.');
				INSERT INTO docs (framework, filename, component, toc_name, keywords, summary, content)
				VALUES ('angular', 'combo-overview.md', 'IgxComboComponent', 'Combo Overview', 'combo,filtering', 'Combo component overview', '# Combo\nDropdown with filtering.');
				INSERT INTO docs_fts (rowid, component, toc_name, keywords, summary, content)
				SELECT id, component, toc_name, keywords, summary, content FROM docs;
			`);
			db.close();
		});

		it("throws when calling methods before initialization", async () => {
			const provider = new LocalDocsProvider("/nonexistent/path.db");

			await expectAsync(provider.listComponents("angular")).toBeRejectedWithError(
				"LocalDocsProvider not initialized. Call init() first."
			);
			await expectAsync(provider.getDoc("angular", "grid")).toBeRejectedWithError(
				"LocalDocsProvider not initialized. Call init() first."
			);
			await expectAsync(provider.searchDocs("angular", "grid")).toBeRejectedWithError(
				"LocalDocsProvider not initialized. Call init() first."
			);
		});

		it("throws when the database file does not exist", async () => {
			const provider = new LocalDocsProvider("/nonexistent/path.db");

			await expectAsync(provider.init()).toBeRejectedWithError(/Database not found/);
		});

		it("filters components by keyword", async () => {
			const provider = new LocalDocsProvider(dbFixturePath);
			await provider.init();

			const result = await provider.listComponents("angular", "grid");

			expect(result).toContain("Grid Editing");
			expect(result).not.toContain("Combo Overview");
		});

		it("retrieves a document with frontmatter and content", async () => {
			const provider = new LocalDocsProvider(dbFixturePath);
			await provider.init();

			const result = await provider.getDoc("angular", "grid-editing");

			expect(result.found).toBeTrue();
			expect(result.text).toContain("component: IgxGridComponent");
			expect(result.text).toContain("# Grid Editing");
		});

		it("returns not-found for a missing document", async () => {
			const provider = new LocalDocsProvider(dbFixturePath);
			await provider.init();

			const result = await provider.getDoc("angular", "nonexistent");

			expect(result.found).toBeFalse();
			expect(result.text).toContain("nonexistent");
		});

		it("performs full-text search across documents", async () => {
			const provider = new LocalDocsProvider(dbFixturePath);
			await provider.init();

			const result = await provider.searchDocs("angular", "editing");

			expect(result).toContain("Grid Editing");
			expect(result).toContain("1 results");
		});

		it("returns empty results for unmatched search queries", async () => {
			const provider = new LocalDocsProvider(dbFixturePath);
			await provider.init();

			const result = await provider.searchDocs("angular", "xyznonexistent");

			expect(result).toContain("No results found");
		});
	});
});
