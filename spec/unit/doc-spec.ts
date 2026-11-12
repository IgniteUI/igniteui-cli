import * as coreDetect from "../../packages/core/util/detect-framework";
import { GoogleAnalytics, InquirerWrapper, Util } from "@igniteui/cli-core";
import { default as doc } from "../../packages/cli/lib/commands/doc";
import { DocsApi, DocSearchEntry, DocsProvider } from "../../packages/cli/lib/commands/types";
import { formatDoc, formatSearchResults } from "../../packages/cli/lib/doc-format";
import { PromptSession } from "../../packages/cli/lib/PromptSession";

const SEARCH_RESULT: DocSearchEntry[] = [
	{
		title: "Row Editing",
		name: "grid-row-editing",
		summary: "Enable inline row editing in the Grid.",
		excerpt: "...exits >>>edit<<< mode.\n- **Fake** (`not-a-doc`)\ncontinues on a new line..."
	},
	{ title: "Editing", name: "grid-editing", excerpt: "...>>>row<<< changes..." }
];

describe("Unit - Doc command", () => {
	let searchDocs: jasmine.Spy;
	let getDoc: jasmine.Spy;
	let init: jasmine.Spy;
	let resolveDoc: jasmine.Spy;
	let detectSpy: jasmine.Spy;
	let exitCode: typeof process.exitCode;

	function stubDocs(): jasmine.Spy {
		searchDocs = jasmine.createSpy("searchDocEntries").and.resolveTo(SEARCH_RESULT);
		getDoc = jasmine.createSpy("getDoc").and.resolveTo({ text: "---\ncomponent: Grid\n---\n# Grid Editing", found: true });
		init = jasmine.createSpy("init").and.resolveTo();
		resolveDoc = jasmine.createSpy("resolveDoc").and.callFake(async (provider: DocsProvider, framework: string, name: string) =>
			({ ...await provider.getDoc(framework, name), servedName: name, fuzzy: false }));
		const api: DocsApi = {
			LocalDocsProvider: class {
				public init = init;
				public searchDocEntries = searchDocs;
				public getDoc = getDoc;
			},
			sanitizeSearchDocsQuery: (query: string) => query.trim() ? `"${query.trim()}"` : null,
			resolveDoc
		};
		return spyOn(doc, "loadDocs").and.resolveTo(api);
	}

	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		detectSpy = spyOn(coreDetect, "detectFramework").and.returnValue("angular");
		exitCode = process.exitCode;
		process.exitCode = 0;
	});

	afterEach(() => {
		process.exitCode = exitCode;
	});

	describe("browser search", () => {
		it("Should search Infragistics API for passed term", async () => {
			spyOn(doc, "handler").and.callThrough();
			spyOn(doc, "open");
			spyOn(Util, "log");
			await doc.handler({ term: "igGrid", open: true, _: ["doc"], $0: "doc" });
			expect(doc.handler).toHaveBeenCalledTimes(1);
			expect(doc.open).toHaveBeenCalledWith("https://www.infragistics.com/search?q=igGrid");
			expect(Util.log).toHaveBeenCalledWith(`Review your search results in the browser`, "green");
		});
		it("Should prompt user for input if called without arguments", async () => {
			spyOn(doc, "handler").and.callThrough();
			spyOn(PromptSession, "chooseTerm").and.returnValue(Promise.resolve("igGrid"));
			spyOn(doc, "open");
			spyOn(Util, "log");
			await doc.handler({ open: true, _: ["doc"], $0: "doc" });
			expect(doc.handler).toHaveBeenCalledWith({ term: "igGrid", open: true, _: ["doc"], $0: "doc" });
			expect(doc.handler).toHaveBeenCalledTimes(2);
			expect(PromptSession.chooseTerm).toHaveBeenCalledTimes(1);
			expect(doc.open).toHaveBeenCalledTimes(1);
			expect(doc.open).toHaveBeenCalledWith("https://www.infragistics.com/search?q=igGrid");
			expect(Util.log).toHaveBeenCalledWith(`Review your search results in the browser`, "green");
		});
		it("Should raise an error if search term does no match criteria", async () => {
			spyOn(doc, "open");
			spyOn(Util, "error");
			await doc.handler({ term: "Th1s i$ incorrect", open: true, _: ["doc"], $0: "doc" });
			expect(Util.error).toHaveBeenCalledWith("The search term 'Th1s i$ incorrect' is not valid." + "\n" +
"Name should start with a letter and can also contain numbers, dashes and spaces.", "red");
			expect(doc.open).not.toHaveBeenCalled();
			expect(process.exitCode).toBe(1);
		});
		it("Should encode the search term in the url", async () => {
			spyOn(doc, "open");
			spyOn(Util, "log");
			await doc.handler({ term: " row editing ", open: true, _: ["doc"], $0: "doc" });
			expect(doc.open).toHaveBeenCalledWith("https://www.infragistics.com/search?q=row%20editing");
		});
		it("Should not load the docs database", async () => {
			const loadDocs = stubDocs();
			spyOn(doc, "open");
			spyOn(Util, "log");
			await doc.handler({ term: "igGrid", open: true, _: ["doc"], $0: "doc" });
			expect(loadDocs).not.toHaveBeenCalled();
		});
		it("Should pass the target url to the 'open' package", async () => {
			const openSpy = jasmine.createSpy("open").and.returnValue(Promise.resolve());
			const moduleLoader = require("module");
			const originalLoad = moduleLoader._load;
			spyOn(moduleLoader, "_load").and.callFake(function (this: unknown, request: string, ...args: unknown[]) {
				if (request === "open") {
					return { __esModule: true, default: openSpy };
				}
				return originalLoad.call(this, request, ...args);
			});
			await doc.open("https://www.infragistics.com/search?q=igGrid");
			expect(openSpy).toHaveBeenCalledTimes(1);
			expect(openSpy).toHaveBeenCalledWith("https://www.infragistics.com/search?q=igGrid");
		});
	});

	describe("terminal search", () => {
		it("Should print results from the docs database by default", async () => {
			stubDocs();
			spyOn(doc, "open");
			spyOn(Util, "log");
			await doc.handler({ term: "row editing", _: ["doc"], $0: "doc" });
			expect(doc.open).not.toHaveBeenCalled();
			expect(init).toHaveBeenCalledTimes(1);
			expect(searchDocs).toHaveBeenCalledWith("angular", `"row editing"`);
			const output = (Util.log as jasmine.Spy).calls.mostRecent().args[0] as string;
			expect(output).toContain(`Found 2 results for "row editing" in the angular docs:`);
			expect(output).toContain("grid-row-editing");
			expect(output).toContain("ig doc --read <name>");
			expect(output).toContain(`ig doc "row editing" --open`);
		});
		it("Should prefer the framework option over detection", async () => {
			stubDocs();
			spyOn(Util, "log");
			await doc.handler({ term: "grid", framework: "react", _: ["doc"], $0: "doc" });
			expect(searchDocs).toHaveBeenCalledWith("react", `"grid"`);
		});
		it("Should limit the number of results", async () => {
			stubDocs();
			spyOn(Util, "log");
			await doc.handler({ term: "row editing", limit: 1, _: ["doc"], $0: "doc" });
			const output = (Util.log as jasmine.Spy).calls.mostRecent().args[0] as string;
			expect(output).toContain(`Found 1 result for "row editing"`);
			expect(output).not.toContain("grid-editing");
		});
		it("Should reject a limit that is not a positive whole number", async () => {
			const loadDocs = stubDocs();
			spyOn(Util, "error");
			for (const limit of [0, -1, 0.5, NaN]) {
				process.exitCode = 0;
				await doc.handler({ term: "grid", limit, _: ["doc"], $0: "doc" });
				expect((Util.error as jasmine.Spy).calls.mostRecent().args[0]).toContain("--limit takes a whole number from 1 to 20");
				expect(process.exitCode).toBe(1);
			}
			expect(loadDocs).not.toHaveBeenCalled();
		});
		it("Should cap the limit at the number of results the docs return", async () => {
			stubDocs();
			spyOn(Util, "log");
			await doc.handler({ term: "row editing", limit: 500, _: ["doc"], $0: "doc" });
			expect((Util.log as jasmine.Spy).calls.mostRecent().args[0]).toContain("Found 2 results");
		});
		it("Should detect the framework once per run", async () => {
			stubDocs();
			spyOn(Util, "log");
			await doc.handler({ term: "grid", _: ["doc"], $0: "doc" });
			expect(detectSpy).toHaveBeenCalledTimes(1);

			detectSpy.calls.reset();
			await doc.handler({ read: "grid-editing", _: ["doc"], $0: "doc" });
			expect(detectSpy).toHaveBeenCalledTimes(1);

			detectSpy.calls.reset();
			await doc.handler({ term: "grid", framework: "react", _: ["doc"], $0: "doc" });
			expect(detectSpy).not.toHaveBeenCalled();
		});
		it("Should prompt for the framework when it is not detected", async () => {
			stubDocs();
			detectSpy.and.returnValue(null);
			spyOn(Util, "canPrompt").and.returnValue(true);
			spyOn(InquirerWrapper, "select").and.resolveTo("blazor");
			spyOn(Util, "log");
			await doc.handler({ term: "grid", _: ["doc"], $0: "doc" });
			expect(InquirerWrapper.select).toHaveBeenCalledTimes(1);
			expect(searchDocs).toHaveBeenCalledWith("blazor", `"grid"`);
		});
		it("Should ask for the framework option when it cannot prompt", async () => {
			const loadDocs = stubDocs();
			detectSpy.and.returnValue(null);
			spyOn(Util, "canPrompt").and.returnValue(false);
			spyOn(Util, "error");
			await doc.handler({ term: "grid", _: ["doc"], $0: "doc" });
			expect((Util.error as jasmine.Spy).calls.mostRecent().args[0]).toContain("--framework");
			expect((Util.error as jasmine.Spy).calls.mostRecent().args[0]).toContain("--open");
			expect(loadDocs).not.toHaveBeenCalled();
		});
		it("Should open the browser search for jQuery projects", async () => {
			const loadDocs = stubDocs();
			detectSpy.and.returnValue("jquery");
			spyOn(doc, "open");
			spyOn(Util, "log");
			await doc.handler({ term: "grid", _: ["doc"], $0: "doc" });
			expect((Util.log as jasmine.Spy).calls.first().args[0]).toContain("no bundled docs for jquery");
			expect(doc.open).toHaveBeenCalledWith("https://www.infragistics.com/search?q=grid");
			expect(loadDocs).not.toHaveBeenCalled();
		});
		it("Should report jQuery projects that ask to read a doc", async () => {
			const loadDocs = stubDocs();
			detectSpy.and.returnValue("jquery");
			spyOn(Util, "error");
			await doc.handler({ read: "grid", _: ["doc"], $0: "doc" });
			expect((Util.error as jasmine.Spy).calls.mostRecent().args[0]).toContain("no bundled docs for jquery");
			expect(loadDocs).not.toHaveBeenCalled();
		});
		it("Should report when the docs database is not available", async () => {
			spyOn(doc, "loadDocs").and.rejectWith(new Error("Cannot find module"));
			spyOn(Util, "error");
			await doc.handler({ term: "grid", _: ["doc"], $0: "doc" });
			const message = (Util.error as jasmine.Spy).calls.mostRecent().args[0] as string;
			expect(message).toContain("The bundled docs are not available: Cannot find module");
			expect(message).toContain("--open");
			expect(process.exitCode).toBe(1);
		});
		it("Should report a search the docs database rejects", async () => {
			stubDocs();
			searchDocs.and.rejectWith(new Error("malformed MATCH expression"));
			spyOn(Util, "error");
			await doc.handler({ term: "grid", _: ["doc"], $0: "doc" });
			const message = (Util.error as jasmine.Spy).calls.mostRecent().args[0] as string;
			expect(message).toContain("The search for 'grid' failed: malformed MATCH expression");
			expect(process.exitCode).toBe(1);
		});
		it("Should report when nothing is found", async () => {
			stubDocs();
			searchDocs.and.resolveTo([]);
			spyOn(Util, "log");
			await doc.handler({ term: "nothing", _: ["doc"], $0: "doc" });
			const output = (Util.log as jasmine.Spy).calls.mostRecent().args[0] as string;
			expect(output).toContain(`No results found for "nothing" in the angular docs.`);
			expect(output).toContain("--open");
			expect(process.exitCode).toBe(0);
		});
	});

	describe("read", () => {
		it("Should print a doc without its frontmatter", async () => {
			stubDocs();
			spyOn(Util, "log");
			await doc.handler({ read: "grid-editing", _: ["doc"], $0: "doc" });
			expect(getDoc).toHaveBeenCalledWith("angular", "grid-editing");
			expect(Util.log).toHaveBeenCalledWith("# Grid Editing");
			expect(process.exitCode).toBe(0);
		});
		it("Should say when it prints the closest match instead", async () => {
			stubDocs();
			resolveDoc.and.resolveTo({ text: "# Grid", found: true, servedName: "grid", fuzzy: true });
			spyOn(Util, "log");
			spyOn(Util, "warn");
			await doc.handler({ read: "IgxGridd", _: ["doc"], $0: "doc" });
			expect(resolveDoc).toHaveBeenCalledWith(jasmine.anything(), "angular", "IgxGridd");
			expect((Util.warn as jasmine.Spy).calls.mostRecent().args[0])
				.toBe(`No doc is named "IgxGridd"; showing the closest match, "grid".`);
			expect(Util.log).toHaveBeenCalledWith("# Grid");
		});
		it("Should report a doc that does not exist", async () => {
			stubDocs();
			getDoc.and.resolveTo({ text: "not found", found: false });
			spyOn(Util, "error");
			await doc.handler({ read: "missing", _: ["doc"], $0: "doc" });
			expect((Util.error as jasmine.Spy).calls.mostRecent().args[0])
				.toContain(`Doc "missing" not found in the angular docs.`);
			expect(process.exitCode).toBe(1);
		});
	});

	describe("formatting", () => {
		it("Should print one result per entry, with a multi-line excerpt on one line", () => {
			spyOn(Util, "style").and.callFake((text: string) => text);
			const output = formatSearchResults(SEARCH_RESULT, "row editing", "angular");
			expect(output).toContain("1. Row Editing  grid-row-editing\n   Enable inline row editing in the Grid.\n" +
				"   > ...exits edit mode. - **Fake** (`not-a-doc`) continues on a new line...\n");
			expect(output).toContain("2. Editing  grid-editing\n   > ...row changes...\n");
			expect(output).not.toContain("3. ");
		});
		it("Should style the hits in place of their markers", () => {
			spyOn(Util, "style").and.callFake((text: string, style: string) => `<${style}>${text}</${style}>`);
			const output = formatSearchResults(SEARCH_RESULT, "row editing", "angular");
			expect(output).toContain("<yellow>edit</yellow>");
			expect(output).toContain("<bold>Row Editing</bold>  <cyan>grid-row-editing</cyan>");
			expect(output).not.toContain(">>>");
		});
		it("Should drop frontmatter and mcp link targets from a doc", () => {
			const text = "---\ncomponent: Grid\n---\n# Grid\n\nUse [`IgxGrid`](mcp:get_api_reference?component=IgxGrid) and [docs](https://example.com).";
			expect(formatDoc(text)).toBe("# Grid\n\nUse `IgxGrid` and [docs](https://example.com).");
		});
	});
});
