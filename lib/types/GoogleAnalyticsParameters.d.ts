interface GoogleAnalyticsParameters {
	/** Specifies the application name. This field is required for any hit that has app related data
	 * (i.e., app version, app ID, or app installer ID).
	 * For hits sent to web properties, this field is optional. */
	an?: string;

	/** Specifies the application version. */
	av?: string;

	/** This parameter is optional on web properties, and required on mobile properties for screenview hits,
	 *  where it is used for the 'Screen Name' of the screenview hit. On web properties this will default to
	 *  the unique URL of the page by either using the &dl parameter as-is or assembling it from &dh and &dp. */
	cd?: string;

	/** Specifies the event action. Must not be empty. */
	ea?: string;

	/** Specifies the event category. Must not be empty. */
	ec?: string;

	/** Specifies the event label. */
	el?: string;

	/** The type of hit. Must be one of 'pageview', 'screenview', 'event', 'transaction', 'item', 'social', 'exception', 'timing'. */
	t?: string;

	/** The tracking ID / web property ID. The format is UA-XXXX-Y.
	 *  All collected data is associated by this ID. */
	tid?: string;

	/** The User Agent of the browser. Note that Google has libraries to identify real user agents.
	 *  Hand crafting your own agent could break at any time. */
	ua?: string;

	/** This is intended to be a known identifier for a user provided by the site owner/tracking library user.
	 *  It must not itself be PII (personally identifiable information).
	 *  The value should never be persisted in GA cookies or other Analytics provided storage. */
	uid?: string;

	/** The Protocol version. The current value is '1'.
	  * This will only change when there are changes made that are not backwards compatible. */
	v?: number;
}
