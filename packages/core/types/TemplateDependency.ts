/** Schema interface for template dependencies */
export interface TemplateDependency {
	/** Add an identifier into `NgModule` imports metadata */
	import?: string | string[];

	/** Add an identifier into `NgModule` declarations metadata */
	declare?: string | string[];

	/** Add an identifier into `NgModule` provides metadata */
	provide?: string | string[];

	/** Add an identifier into `ngModule` schema metadata */
	schema?: string | string[];

	/** The package/path(TBD) to import the dependency from */
	from?: string;

	/** Call `forRoot()` on modules when adding them to the `NgModule` imports metadata */
	root?: boolean;

	/** Add an identifier into `NgModule` exports metadata */
	export?: string | string[];

	/** Describes a dependency for a standalone component's meta */
	standalone?: boolean;
}
