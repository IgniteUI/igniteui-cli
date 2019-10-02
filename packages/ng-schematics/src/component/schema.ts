import { IgniteUIForAngularTemplate } from "@igniteui/angular-templates";

export abstract class ComponentOptions {
	public templateInst?: IgniteUIForAngularTemplate;
	public template?: string;
	public name: string;
	public skipRoute?: boolean;
	public projectName: string;
}
