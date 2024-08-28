import { CommandModule } from "yargs";
import { TemplateManager } from "../TemplateManager";

export interface PositionalArgs {
	framework: string;
}

export interface CommandType extends CommandModule<{}, any> {
	templateManager?: TemplateManager;
}
