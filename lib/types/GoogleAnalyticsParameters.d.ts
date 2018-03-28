interface GoogleAnalyticsParameters {
	/** Application name. Should be always 'igniteui-cli'. */
	an?: string;

	/** igniteui-cli application version. */
	av?: string;

	/** Command name, e.g. '$ig doc'. */
	cd?: string;

	/** Ths could be:
	 * - 'subbcomand [subcomand name]' for command with subcommands;
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

	/** User Agent. We will porvide here node version as browswer version and the user OS. */
	ua?: string;

	/** User unique ID. */
	uid?: string;

	/** The Protocol version. The current value is '1'. */
	v?: number;
}
