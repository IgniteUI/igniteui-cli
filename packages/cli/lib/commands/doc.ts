import { detectFramework, GoogleAnalytics, InquirerWrapper, Util } from "@igniteui/cli-core";
import { formatSearchResults, formatDoc } from "../doc-format";
import { PromptSession } from "../PromptSession";
import { DocCommandType, DocsApi, DocSearchEntry, DocsProvider, PositionalArgs } from "./types";
import { pathToFileURL } from "url";
import { ArgumentsCamelCase } from "yargs";

const DOC_FRAMEWORKS = [
	{ value: "angular", name: "Angular" },
	{ value: "react", name: "React" },
	{ value: "webcomponents", name: "Web Components" },
	{ value: "blazor", name: "Blazor" }
];
const DEFAULT_RESULTS = 10;
const MAX_RESULTS = 20;
const OPEN_HINT = `Use "ig doc <term> --open" to search the Infragistics website instead.`;

function fail(message: string): void {
	Util.error(message, "red");
	process.exitCode = 1;
}

function requestedFramework(argv: ArgumentsCamelCase<PositionalArgs>): string | null {
	return argv.framework?.toLowerCase() ?? detectFramework();
}

/** @param framework the `--framework` option or the detected one; prompts when there is neither */
async function resolveFramework(framework: string | null): Promise<string | null> {
	if (!framework) {
		if (!Util.canPrompt()) {
			fail("Could not detect the project framework. Pass it with --framework. " + OPEN_HINT);
			return null;
		}
		framework = await InquirerWrapper.select({
			message: "Choose framework:",
			choices: DOC_FRAMEWORKS,
			default: "angular"
		});
	}
	if (!DOC_FRAMEWORKS.some(x => x.value === framework)) {
		fail(`There are no bundled docs for ${framework}. ` + OPEN_HINT);
		return null;
	}
	return framework;
}

async function getProvider(): Promise<{ api: DocsApi, provider: DocsProvider } | null> {
	try {
		const api = await doc.loadDocs();
		const provider = new api.LocalDocsProvider();
		await provider.init();
		return { api, provider };
	} catch (error) {
		fail(`The bundled docs are not available: ${(error as Error).message}` + "\n" + OPEN_HINT);
		return null;
	}
}

async function searchLocal(argv: ArgumentsCamelCase<PositionalArgs>, requested: string | null): Promise<void> {
	const term = argv.term!.trim();
	const limit = argv.limit ?? DEFAULT_RESULTS;
	if (!Number.isInteger(limit) || limit < 1) {
		return fail(`--limit takes a whole number from 1 to ${MAX_RESULTS}.`);
	}
	const framework = await resolveFramework(requested);
	if (!framework) {
		return;
	}
	const docs = await getProvider();
	if (!docs) {
		return;
	}

	const query = docs.api.sanitizeSearchDocsQuery(term);
	if (!query) {
		return fail(`The search term '${term}' is not valid.`);
	}

	let found: DocSearchEntry[];
	try {
		found = await docs.provider.searchDocEntries(framework, query);
	} catch (error) {
		return fail(`The search for '${term}' failed: ${(error as Error).message}` + "\n" + OPEN_HINT);
	}
	const results = found.slice(0, Math.min(limit, MAX_RESULTS));
	if (!results.length) {
		return Util.log(`No results found for "${term}" in the ${framework} docs. ` + OPEN_HINT);
	}
	Util.log(formatSearchResults(results, term, framework));
}

async function readDoc(argv: ArgumentsCamelCase<PositionalArgs>): Promise<void> {
	const name = argv.read!.trim();
	const framework = await resolveFramework(requestedFramework(argv));
	if (!framework) {
		return;
	}
	const docs = await getProvider();
	if (!docs) {
		return;
	}

	const result = await docs.api.resolveDoc(docs.provider, framework, name);
	if (!result.found) {
		return fail(`Doc "${name}" not found in the ${framework} docs. ` +
			`Run "ig doc <term>" to list doc names.`);
	}
	if (result.fuzzy) {
		Util.warn(`No doc is named "${name}"; showing the closest match, "${result.servedName}".`, "yellow");
	}
	Util.log(formatDoc(result.text));
}

async function openInBrowser(term: string): Promise<void> {
	Util.log(`Review your search results in the browser`, "green");
	await doc.open(`https://www.infragistics.com/search?q=${encodeURIComponent(term.trim())}`);
}

const doc: DocCommandType = {
	command: "doc [term]",
	describe: "Searches the Ignite UI docs for the given term",
	builder: (yargs) => {
		return yargs
			.positional("term", {
				describe: "Term to search for",
				type: "string"
			})
			.option("open", {
				alias: "o",
				describe: "Open the Infragistics website search in the browser",
				type: "boolean"
			})
			.option("read", {
				describe: "Print a doc by the name listed in the search results",
				type: "string",
				requiresArg: true
			})
			.option("framework", {
				alias: "f",
				describe: "Framework docs to search (detected from the project by default)",
				choices: DOC_FRAMEWORKS.map(x => x.value),
				type: "string"
			})
			.option("limit", {
				describe: `Number of results to print, up to ${MAX_RESULTS}`,
				type: "number",
				default: DEFAULT_RESULTS
			});
	},
	open: async (target) => {
		const open = await import("open");
		await open.default(target);
	},
	loadDocs: async () => {
		// tsc turns import() into require() here, which older Node versions refuse for an ESM package
		const entry = pathToFileURL(require.resolve("@igniteui/mcp-server/docs")).href;
		// eslint-disable-next-line no-new-func
		return new Function("specifier", "return import(specifier)")(entry);
	},
	async handler(argv: ArgumentsCamelCase<PositionalArgs>) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Doc"
		});

		if (argv.read) {
			GoogleAnalytics.post({
				t: "event",
				ec: "$ig doc",
				ea: `doc to read: ${argv.read}`
			});
			return readDoc(argv);
		}

		if (!argv.term) {
			const answer = await PromptSession.chooseTerm();
			argv.term = answer;
			return doc.handler(argv);
		}

		const requested = requestedFramework(argv);
		const detected = argv.framework ? null : requested;
		const noBundledDocs = !!detected && !DOC_FRAMEWORKS.some(x => x.value === detected);
		if ((argv.open || noBundledDocs) && !Util.isAlphanumericExt(argv.term)) {
			return fail(`The search term '${argv.term}' is not valid.` + "\n" +
			"Name should start with a letter and can also contain numbers, dashes and spaces.");
		}

		GoogleAnalytics.post({
			t: "event",
			ec: "$ig doc",
			ea: `term to search: ${argv.term}`,
			cd13: argv.term
		});

		if (argv.open) {
			return openInBrowser(argv.term);
		}
		if (noBundledDocs) {
			Util.log(`There are no bundled docs for ${detected}, searching the Infragistics website instead.`);
			return openInBrowser(argv.term);
		}
		return searchLocal(argv, requested);
	}
};
export default doc;
