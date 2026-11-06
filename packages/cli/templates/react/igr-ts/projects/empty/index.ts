import { ProjectTemplate } from "@igniteui/cli-core";
import { BaseWithHomeIgrTsProject } from "../_base_with_home";

export class EmptyIgrTsProject extends BaseWithHomeIgrTsProject implements ProjectTemplate {
	public id: string = "empty";
	public name = "Empty Project";
	public description = "Starter project with routing and a home page";
	public dependencies: string[] = [];
	public framework: string = "react";
	public projectType: string = "igr-ts";
	public hasExtraConfiguration: boolean = false;
	public isHidden: boolean = false;
}
export default new EmptyIgrTsProject();
