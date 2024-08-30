import { CommandModule } from "yargs";
import { TemplateManager } from "../TemplateManager";

export interface PositionalArgs {
	framework: string;
	name: string;
	type: string;
	theme: string;
	template: string;
}

export interface CommandType extends CommandModule<{}, any> {
	templateManager?: TemplateManager;
}

export interface NewCommandType extends CommandType {
	addChoices(choices: string[]): void;
}
