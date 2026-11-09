import { ProjectTemplate } from "@igniteui/cli-core";
import { BaseIgrTsProject } from "../_base";

export class BasePageIgrTsProject extends BaseIgrTsProject implements ProjectTemplate {
	public id: string = "base";
	public name = "Base project";
	public description = "Empty project structure with routing";
	public dependencies: string[] = [];
	public framework: string = "react";
	public projectType: string = "igr-ts";
	public hasExtraConfiguration: boolean = false;
	public isHidden: boolean = true;
}
export default new BasePageIgrTsProject();
