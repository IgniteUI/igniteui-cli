/**
 * A set of Templates for a common component
 */
interface Component {
	/** Name of the parent group, e.g. Data Visualization */
	group: string;
	/** Component name, e.g. Pie Chart or Grid  */
	name: string;
	/** Component description, e.g. Choose from available Grids or Choose from available HierarchicalGrids */
	description: string;
	templates: Template[];
}
