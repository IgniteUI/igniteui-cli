import { IgbProjectBase } from "../_base";

export class EmptyIgbProject extends IgbProjectBase {
	public id: string = "empty";
	public name = "Empty Project";
	public description = "Ignite UI for Blazor Web App with one empty page and Ignite UI (Lite) registered";
	protected readonly empty = true;
}
export default new EmptyIgbProject();
