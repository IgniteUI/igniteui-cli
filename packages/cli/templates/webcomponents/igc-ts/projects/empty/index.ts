import { ProjectTemplate } from "@igniteui/cli-core";
import { BaseWithHomeIgcProject } from "../_base_with_home";

export class EmptyPageTemplate extends BaseWithHomeIgcProject implements ProjectTemplate {
	public id: string = "empty";
	public name = "Empty Project";
	public description = "Starter project with routing and a home page";
	public framework: string = "webcomponents";
	public projectType: string = "igc-ts";
	public dependencies!: string[];
	public hasExtraConfiguration: boolean = false;
	public isHidden: boolean = false;
}
export default new EmptyPageTemplate();
