import { Template } from "./Template";

export interface ExtensionModule {
	componentDefinitions: Array<{ name: string, group: string }>;
	templates: Template[];
}
