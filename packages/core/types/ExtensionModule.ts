import { Template } from "./Template";

export interface ExtensionModule {
	componentDefinitions: ({ name: string, group: string })[];
	templates: Template[];
}
