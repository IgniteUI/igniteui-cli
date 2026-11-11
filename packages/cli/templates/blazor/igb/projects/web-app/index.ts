import { IgbProjectBase } from "../_base";

export class WebAppIgbProject extends IgbProjectBase {
	public id: string = "web-app";
	public name = "Blazor Web App";
	public description = "Ignite UI for Blazor Web App with sample pages, layout and navigation";
	protected readonly empty = false;
}
export default new WebAppIgbProject();
