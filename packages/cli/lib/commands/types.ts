import { ArgumentsCamelCase, CommandModule } from "yargs";
import { TemplateManager } from "../TemplateManager";
import { AddTemplateArgs, Template } from "@igniteui/cli-core";

export const ADD_COMMAND_NAME = "add";
export const NEW_COMMAND_NAME = "new";
export const BUILD_COMMAND_NAME = "build";
export const START_COMMAND_NAME = "start";
export const GENERATE_COMMAND_NAME = "generate";
export const CONFIG_COMMAND_NAME = "config";
export const DOC_COMMAND_NAME = "doc";
export const TEST_COMMAND_NAME = "test";
export const LIST_COMMAND_NAME = "list";
export const UPGRADE_COMMAND_NAME = "upgrade-packages";
export const ANALYZE_COMMAND_NAME = "analyze";

export const ALL_COMMANDS = new Set([
  ADD_COMMAND_NAME,
  NEW_COMMAND_NAME,
  BUILD_COMMAND_NAME,
  START_COMMAND_NAME,
  GENERATE_COMMAND_NAME,
  CONFIG_COMMAND_NAME,
  DOC_COMMAND_NAME,
  TEST_COMMAND_NAME,
  LIST_COMMAND_NAME,
  UPGRADE_COMMAND_NAME,
  ANALYZE_COMMAND_NAME
]);

export interface PositionalArgs {
	/** The framework that the project will target. */
	framework?: string;

	/** The name of the project */
	name?: string;

	/** The type of the project. (eg. igx-ts, igx-ts-legacy) */
	type?: string;

	/** Which theme to use when creating a new project. */
	theme?: string;

	template?: string;

	module?: string;

	skipRoute?: boolean;

	/** Prevents the execution of a commands handler. For internal use only. */
	skipExecution?: boolean;

	/** Port to run the generated app on. */
	port?: number;

	skipConfig?: boolean;

	/** Property to configure. */
	property?: string;

	/** Specifies if the global configuration should be used. */
	global?: boolean;

	/** The term to search for. */
	term?: string;

	/** Executes end-to-end tests. */
	e2e?: boolean;
}

export interface CommandType extends CommandModule<{}, any> {
	templateManager?: TemplateManager;

	/** Handler function that will be called by yargs after the command line has been parsed. */
	handler(argv: ArgumentsCamelCase<PositionalArgs>);
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

export interface DocCommandType extends CommandType {
	/** Uses the `open` package to open a URL, file etc. */
	open(string): void;
}

export interface TestCommandType extends CommandType {
	/** Executes tests. */
	test(argv: ArgumentsCamelCase<PositionalArgs>): void;
}

export interface UpgradeCommandType extends CommandType {
	/** Upgrades packages for Angular, React & WC projects. */
	upgrade(argv: ArgumentsCamelCase<PositionalArgs>): void;
}
