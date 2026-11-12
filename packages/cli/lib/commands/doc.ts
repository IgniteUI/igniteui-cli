import { detectFramework, GoogleAnalytics, InquirerWrapper, Util } from "@igniteui/cli-core";
import { formatSearchResults, parseSearchResults, formatDoc } from "../doc-format";
import { PromptSession } from "../PromptSession";
import { DocCommandType, DocsProvider, PositionalArgs } from "./types";
import { pathToFileURL } from "url";
import { ArgumentsCamelCase } from "yargs";

const DOC_FRAMEWORKS = [
	{ value: "angular", name: "Angular" },
	{ value: "react", name: "React" },
	{ value: "webcomponents", name: "Web Components" },
	{ value: "blazor", name: "Blazor" }
];
const MAX_RESULTS = 20;
const OPEN_HINT = `Use "ig doc <term> --open" to search the Infragistics website instead.`;

async function resolveFramework(argv: ArgumentsCamelCase<PositionalArgs>): Promise<string | null> {
	let framework: string | null | undefined = argv.framework?.toLowerCase() ?? detectFramework();
	if (!framework) {
		if (!Util.canPrompt()) {
			Util.error("Could not detect the project framework. Pass it with --framework. " + OPEN_HINT, "red");
			return null;
		}
		framework = await InquirerWrapper.select({
			message: "Choose framework:",
			choices: DOC_FRAMEWORKS,
			default: "angular"
		});
	}
	if (!DOC_FRAMEWORKS.some(x => x.value === framework)) {
		Util.error(`There are no bundled docs for ${framework}. ` + OPEN_HINT, "red");
		return null;
	}
	return framework;
}

async function getProvider(): Promise<{ provider: DocsProvider, sanitize: (query: string) => string | null } | null> {
	try {
		const api = await doc.loadDocs();
		const provider = new api.LocalDocsProvider();
		await provider.init();
		return { provider, sanitize: api.sanitizeSearchDocsQuery };
	} catch (error) {
		Util.error(`The bundled docs are not available: ${(error as Error).message}` + "\n" + OPEN_HINT, "red");
		return null;
	}
}

async function searchLocal(argv: ArgumentsCamelCase<PositionalArgs>): Promise<void> {
	const term = argv.term!.trim();
	const framework = await resolveFramework(argv);
	if (!framework) {
		return;
	}
	const docs = await getProvider();
	if (!docs) {
		return;
	}

	const query = docs.sanitize(term);
	if (!query) {
		return Util.error(`The search term '${term}' is not valid.`, "red");
	}

	const limit = Math.min(Math.max(Math.floor(Number(argv.limit)) || 10, 1), MAX_RESULTS);
	const results = parseSearchResults(await docs.provider.searchDocs(framework, query)).slice(0, limit);
	if (!results.length) {
		return Util.log(`No results found for "${term}" in the ${framework} docs. ` + OPEN_HINT);
	}
	Util.log(formatSearchResults(results, term, framework, useColor()));
}

async function readDoc(argv: ArgumentsCamelCase<PositionalArgs>): Promise<void> {
	const name = argv.read!.trim();
	const framework = await resolveFramework(argv);
	if (!framework) {
		return;
	}
	const docs = await getProvider();
	if (!docs) {
		return;
	}

	const result = await docs.provider.getDoc(framework, name);
	if (!result.found) {
		return Util.error(`Doc "${name}" not found in the ${framework} docs. ` +
			`Run "ig doc <term>" to list doc names.`, "red");
	}
	Util.log(formatDoc(result.text));
}

async function openInBrowser(term: string): Promise<void> {
	Util.log(`Review your search results in the browser`, "green");
	await doc.open(`https://www.infragistics.com/search?q=${encodeURIComponent(term.trim())}`);
}

function useColor(): boolean {
	return !!process.stdout.isTTY && !process.env.NO_COLOR;
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
				describe: "Number of results to print",
				type: "number",
				default: 10
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

		const detected = argv.framework ? null : detectFramework();
		const noBundledDocs = !!detected && !DOC_FRAMEWORKS.some(x => x.value === detected);
		if ((argv.open || noBundledDocs) && !Util.isAlphanumericExt(argv.term)) {
			return Util.error(`The search term '${argv.term}' is not valid.` + "\n" +
			"Name should start with a letter and can also contain numbers, dashes and spaces.",
			"red");
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
		return searchLocal(argv);
	}
};
export default doc;
