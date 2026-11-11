import * as coreDetect from "../../packages/core/util/detect-framework";
import { GoogleAnalytics, InquirerWrapper, Util } from "@igniteui/cli-core";
import { default as doc } from "../../packages/cli/lib/commands/doc";
import { DocsApi } from "../../packages/cli/lib/commands/types";
import { formatDoc, formatSearchResults, parseSearchResults } from "../../packages/cli/lib/doc-format";
import { PromptSession } from "../../packages/cli/lib/PromptSession";

const SEARCH_RESULT = [
	`Found 2 results for "row editing" in **angular**:`,
	"",
	"- **Row Editing** (`grid-row-editing`)",
	"  Enable inline row editing in the Grid.",
	"  > ...exits >>>edit<<< mode.",
	"continues on a new line...",
	"- **Editing** (`grid-editing`)",
	"  > ...>>>row<<< changes..."
].join("\n");

describe("Unit - Doc command", () => {
	let searchDocs: jasmine.Spy;
	let getDoc: jasmine.Spy;
	let init: jasmine.Spy;
	let detectSpy: jasmine.Spy;

	function stubDocs(): jasmine.Spy {
		searchDocs = jasmine.createSpy("searchDocs").and.resolveTo(SEARCH_RESULT);
		getDoc = jasmine.createSpy("getDoc").and.resolveTo({ text: "---\ncomponent: Grid\n---\n# Grid Editing", found: true });
		init = jasmine.createSpy("init").and.resolveTo();
		const api: DocsApi = {
			LocalDocsProvider: class {
				public init = init;
				public searchDocs = searchDocs;
				public getDoc = getDoc;
			},
			sanitizeSearchDocsQuery: (query: string) => query.trim() ? `"${query.trim()}"` : null
		};
		return spyOn(doc, "loadDocs").and.resolveTo(api);
	}

	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		detectSpy = spyOn(coreDetect, "detectFramework").and.returnValue("angular");
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
		it("Should point jQuery projects to the browser search", async () => {
			const loadDocs = stubDocs();
			detectSpy.and.returnValue("jquery");
			spyOn(Util, "error");
			await doc.handler({ term: "grid", _: ["doc"], $0: "doc" });
			expect((Util.error as jasmine.Spy).calls.mostRecent().args[0]).toContain("no bundled docs for jquery");
			expect((Util.error as jasmine.Spy).calls.mostRecent().args[0]).toContain("--open");
			expect(loadDocs).not.toHaveBeenCalled();
		});
		it("Should report when the docs database is not available", async () => {
			spyOn(doc, "loadDocs").and.rejectWith(new Error("Cannot find module"));
			spyOn(Util, "error");
			await doc.handler({ term: "grid", _: ["doc"], $0: "doc" });
			const message = (Util.error as jasmine.Spy).calls.mostRecent().args[0] as string;
			expect(message).toContain("The bundled docs are not available: Cannot find module");
			expect(message).toContain("--open");
		});
		it("Should report when nothing is found", async () => {
			stubDocs();
			searchDocs.and.resolveTo(`No results found for "nothing" in angular docs.`);
			spyOn(Util, "log");
			await doc.handler({ term: "nothing", _: ["doc"], $0: "doc" });
			const output = (Util.log as jasmine.Spy).calls.mostRecent().args[0] as string;
			expect(output).toContain(`No results found for "nothing" in the angular docs.`);
			expect(output).toContain("--open");
		});
	});

	describe("read", () => {
		it("Should print a doc without its frontmatter", async () => {
			stubDocs();
			spyOn(Util, "log");
			await doc.handler({ read: "grid-editing", _: ["doc"], $0: "doc" });
			expect(getDoc).toHaveBeenCalledWith("angular", "grid-editing");
			expect(Util.log).toHaveBeenCalledWith("# Grid Editing");
		});
		it("Should report a doc that does not exist", async () => {
			stubDocs();
			getDoc.and.resolveTo({ text: "not found", found: false });
			spyOn(Util, "error");
			await doc.handler({ read: "missing", _: ["doc"], $0: "doc" });
			expect((Util.error as jasmine.Spy).calls.mostRecent().args[0])
				.toContain(`Doc "missing" not found in the angular docs.`);
		});
	});

	describe("formatting", () => {
		it("Should parse the provider search results", () => {
			expect(parseSearchResults(SEARCH_RESULT)).toEqual([
				{
					title: "Row Editing",
					name: "grid-row-editing",
					summary: "Enable inline row editing in the Grid.",
					excerpt: "...exits >>>edit<<< mode. continues on a new line..."
				},
				{ title: "Editing", name: "grid-editing", excerpt: "...>>>row<<< changes..." }
			]);
		});
		it("Should drop the hit markers and colour hits only when asked", () => {
			const results = parseSearchResults(SEARCH_RESULT);
			const plain = formatSearchResults(results, "row editing", "angular", false);
			expect(plain).toContain("> ...exits edit mode.");
			expect(plain).not.toContain("\u001b[");

			const coloured = formatSearchResults(results, "row editing", "angular", true);
			expect(coloured).toContain("\u001b[33medit\u001b[39m");
			expect(coloured).not.toContain(">>>");
		});
		it("Should drop frontmatter and mcp link targets from a doc", () => {
			const text = "---\ncomponent: Grid\n---\n# Grid\n\nUse [`IgxGrid`](mcp:get_api_reference?component=IgxGrid) and [docs](https://example.com).";
			expect(formatDoc(text)).toBe("# Grid\n\nUse `IgxGrid` and [docs](https://example.com).");
		});
	});
});
