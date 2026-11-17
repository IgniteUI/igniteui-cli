import { ArgumentsCamelCase, CommandModule } from "yargs";
import { AddTemplateArgs, Template } from "@igniteui/cli-core";

export interface PositionalArgs {
	/** The framework that the project will target. */
	framework?: string;

	/** The name of the project */
	name?: string;

	/** The type of the project. (eg. igx-ts) */
	type?: string;

	/** Which theme to use when creating a new project. */
	theme?: string;

	/** Blazor hosting model (Blazor projects only). */
	hosting?: string;

	/** Theme variant (Blazor projects only). */
	variant?: string;

	template?: string;

	module?: string;

	skipRoute?: boolean;

	/** Port to run the generated app on. */
	port?: number;

	skipConfig?: boolean;

	/** Property to configure. */
	property?: string;

	/** Specifies if the global configuration should be used. */
	global?: boolean;

	/** The term to search for. */
	term?: string;

	/** Opens the search in the browser instead of printing results. */
	open?: boolean;

	/** Name of a doc to print in full. */
	read?: string;

	/** Maximum number of search results to print. */
	limit?: number;

	/** Prints the doctor results as JSON. */
	json?: boolean;

	/** Skips the doctor checks that need the network. */
	offline?: boolean;

	/** Executes end-to-end tests. */
	e2e?: boolean;
}

export interface CommandType extends CommandModule<{}, any> {
	/** Handler function that will be called by yargs after the command line has been parsed. */
	handler(/** do not use `this` in handler */this: void, argv: ArgumentsCamelCase<PositionalArgs>): void | Promise<void>;
}

export interface NewCommandType extends CommandType {
	/** Adds choices to the `builder.framework` option. */
	addChoices(choices: string[]): void;
}

export interface AddCommandType extends CommandType {
	/** Adds a new template to the project. */
	addTemplate(name: string, template: Template, options?: AddTemplateArgs): Promise<boolean>

	/** Checks if the command can be executed. */
	check(argv: ArgumentsCamelCase<PositionalArgs | { [key: string]: unknown }>): boolean;
}

export interface BuildCommandType extends CommandType {
	/** Builds the project. */
	build(argv?: ArgumentsCamelCase<PositionalArgs>): Promise<void>;
}

export interface StartCommandType extends CommandType {
	/** Starts the project. */
	start(argv: any): Promise<void>
}

export interface ConfigCommandType extends CommandType {
	/** Gets a configuration property. */
	getHandler(argv: ArgumentsCamelCase<PositionalArgs>): void;

	/** Sets a configuration property. */
	setHandler(argv: ArgumentsCamelCase<PositionalArgs>): void;

	/** Adds a value to an existing configuration array. */
	addHandler(argv: ArgumentsCamelCase<PositionalArgs>): void;
}

export interface DocSearchEntry {
	title: string;
	name: string;
	summary?: string;
	/** Hits sit between `>>>` and `<<<`. */
	excerpt?: string;
}

export interface DocsProvider {
	init(): Promise<void>;
	searchDocEntries(framework: string, query: string): Promise<DocSearchEntry[]>;
	getDoc(framework: string, name: string): Promise<{ text: string; found: boolean }>;
}

/** The `@igniteui/mcp-server/docs` entry. */
export interface DocsApi {
	LocalDocsProvider: new () => DocsProvider;
	sanitizeSearchDocsQuery(queryText: string): string | null;
	/** Finds a doc by its name, a component class name or the closest match (`fuzzy`). */
	resolveDoc(provider: DocsProvider, framework: string, name: string):
		Promise<{ text: string; found: boolean; servedName: string; fuzzy: boolean }>;
}

export interface DocCommandType extends CommandType {
	/** Uses the `open` package to open a URL, file etc. */
	open(target: string): void;

	/** Loads the docs database access bundled with the MCP server package. */
	loadDocs(): Promise<DocsApi>;
}

export interface TestCommandType extends CommandType {
	/** Executes tests. */
	test(argv: ArgumentsCamelCase<PositionalArgs>): void;
}

export interface UpgradeCommandType extends CommandType {
	/** Upgrades packages for Angular, React & WC projects. */
	upgrade(argv: ArgumentsCamelCase<PositionalArgs>): void;
}
