/**
 * A set of Templates for a common component
 */
interface Component {
	/** Component name, e.g. Pie Chart or Grid  */
	name: string;
	/** Name of the parent group, e.g. Data Visualization */
	group: string;
	/**
	 * Controls the position of the component within the group.
	 * Step by step mode lists components with higher values first.
	 */
	groupPriority: number;

	templates: Template[];
}
