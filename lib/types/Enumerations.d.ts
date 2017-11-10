declare namespace Enumerations {

	//const makes enum ambient https://stackoverflow.com/a/42904083
	/**
	 * Type of the extra configuration that can be required by components/templates.
	 */
	export const enum ControlExtraConfigType {
		/** Available list of values. Just one should be selected. */
		Choice,
		/** Available list of values. Multiple values can be selected. */
		MultiChoice,
		/** Accepts a single manually typed value. */
		Value
	}
}
