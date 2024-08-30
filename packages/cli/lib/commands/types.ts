import { CommandModule } from "yargs";
import { TemplateManager } from "../TemplateManager";
import { AddTemplateArgs, Template } from "@igniteui/cli-core";


export const ADD_COMMAND_NAME = "add";
export const NEW_COMMAND_NAME = "new";
export const QUICKSTART_COMMAND_NAME = "quickstart";
export const BUILD_COMMAND_NAME = "build";
export const START_COMMAND_NAME = "start";
export const GENERATE_COMMAND_NAME = "generate";
export const CONFIG_COMMAND_NAME = "config";
export const DOC_COMMAND_NAME = "doc";
export const TEST_COMMAND_NAME = "test";
export const LIST_COMMAND_NAME = "list";
export const UPGRADE_COMMAND_NAME = "upgrade";

export const ALL_COMMANDS = new Set([
  ADD_COMMAND_NAME,
  NEW_COMMAND_NAME,
  QUICKSTART_COMMAND_NAME,
  BUILD_COMMAND_NAME,
  START_COMMAND_NAME,
  GENERATE_COMMAND_NAME,
  CONFIG_COMMAND_NAME,
  DOC_COMMAND_NAME,
  TEST_COMMAND_NAME,
  LIST_COMMAND_NAME,
  UPGRADE_COMMAND_NAME
]);

export interface PositionalArgs {
	framework: string;
	name: string;
	type: string;
	theme: string;
	template: string;
	module: string;
	skipRoute: boolean;
	skipExecution: boolean;
}

export interface CommandType extends CommandModule<{}, any> {
	templateManager?: TemplateManager;
}

export interface NewCommandType extends CommandType {
	addChoices(choices: string[]): void;
}

export interface AddCommandType extends CommandType {
	addTemplate: (name: string, template: Template, options?: AddTemplateArgs) => Promise<boolean>
	check: (argv: any) => boolean;
}
