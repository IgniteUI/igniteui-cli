import { ProjectTemplate } from "@igniteui/cli-core";

export abstract class NewProjectOptions {
	public projTemplate: ProjectTemplate;
	public theme: string;
	public name: string;
}
