interface GoogleAnalyticsParameters {
	/** Application name. Should be always 'igniteui-cli'. */
	an?: string;

	/** igniteui-cli application version. */
	av?: string;

	/** Command name, e.g. '$ig doc'. */
	cd?: string;

	/** Ths could be:
	 * - 'subcommand [subcommand name]' for command with subcommands;
	 * - 'user parameters' for simple commands;
	 * - the question form the wizard for the wizard command; */
	ea?: string;

	/** Command in which the event happens. */
	ec?: string;

	/** The user input related to the Event Action ('ea'). */
	el?: string;

	/** Specifies the description of an exception. */
	exd?: string;

	/** The type of hit. Must be 'screenview', 'event' or 'exception'.
	 * Use 'screenview' for each command.
	 * Use 'event' for each user input.
	 * Use 'exception' for exceptions.
	 */
	t?: string;

	/** The tracking ID / web property ID. The format is UA-XXXX-Y.
	 *  All collected data is associated by this ID. */
	tid?: string;

	/** User Agent. We will provide here node version as browser version and the user OS. */
	ua?: string;

	/** User unique ID. */
	uid?: string;

	/** The Protocol version. The current value is '1'. */
	v?: number;

	/** Framework name */
	cd1?: string;

	/** Project type */
	cd2?: string;

	/** Project name */
	cd3?: string;

	/** Action */
	cd4?: string;

	/** Component group */
	cd5?: string;

	/** Component name */
	cd6?: string;

	/** Template/Custom view name */
	cd7?: string;

	/** Template/Custom view user name */
	cd8?: string;

	/** Extra configuration */
	cd9?: string;

	/** Skip Config */
	cd10?: string;

	/** Skip Git */
	cd11?: boolean;

	/** Global */
	cd12?: string;

	/** Search term */
	cd13?: string;

	/** Theme */
	cd14?: string;
}
