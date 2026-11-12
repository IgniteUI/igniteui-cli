/**
 * Parameters of a single analytics hit. The names follow the Universal Analytics
 * Measurement Protocol and are mapped to a GA4 event when sent.
 */
export interface GoogleAnalyticsParameters {
	/** @deprecated Not used. The GA4 measurement ID is set internally. */
	tid?: string;

	/** @deprecated Not used. Application name is set internally. */
	an?: string;

	/** igniteui-cli application version. Sent as the 'app_version' user property. */
	av?: string;

	/** @deprecated Not used. Node, npm and OS are sent as user properties. */
	ua?: string;

	/** @deprecated Not used. The anonymous client ID is set internally. */
	uid?: string;

	/** @deprecated Not used. */
	v?: number;

	/**
	 * The type of hit. Must be 'screenview', 'event' or 'exception'.
	 * Use 'screenview' for each command. Sent as GA4 'page_view' event.
	 * Use 'event' for each user input. Sent as GA4 event named after the category.
	 * Use 'exception' for exceptions. Sent as GA4 'exception' event.
	 */
	t?: string;

	/** Command name, e.g. '$ig doc'. */
	cd?: string;

	/** Specifies the description of an exception. */
	exd?: string;

	/** Command in which the event happens, e.g. '$ig new' - sent as event 'ig_new'. */
	ec?: string;

	/**
	 * Ths could be:
	 * - 'subcommand [subcommand name]' for command with subcommands;
	 * - the question form the wizard for the wizard command;
	 */
	el?: string;

	/** The user input related to this action. */
	ea?: string;

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
	cd10?: boolean;

	/** Skip Git */
	cd11?: boolean;

	/** Global */
	cd12?: boolean;

	/** Search term */
	cd13?: string;

	/** Theme */
	cd14?: string;
}
