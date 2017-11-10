/**
 * A set of Templates for a common component
 */
interface Component {
	/** Name of the parent group, e.g. Data Visualization */
	group: string;
	/** Component name, e.g. Pie Chart or Grid  */
	name: string;

	templates: Template[];
}
