import { ProjectTemplate } from "@igniteui/cli-core";

export abstract class NewProjectOptions {
	public projTemplate?: ProjectTemplate;
	public templateId?: string;
	public templatePaths?: string[];
	public config?: { [key: string]: any };
	public theme: string;
	public name: string;
}
