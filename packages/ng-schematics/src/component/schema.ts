import { IgniteUIForAngularTemplate } from "@igniteui/angular-templates";

export abstract class TemplateOptions {
	public templateInst: IgniteUIForAngularTemplate;
	public name: string;
	public projectName?: string;
}

export abstract class ComponentOptions {
	public templateInst?: IgniteUIForAngularTemplate;
	public template?: string;
	public name: string;
	public skipRoute?: boolean;
	public module?: string;
	public skipInstall?: boolean;
	public projectName: string;
}
