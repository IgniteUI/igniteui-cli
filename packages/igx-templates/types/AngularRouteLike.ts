import { RouteLike, KeyValuePair } from "@igniteui/cli-core";

/** A route member in an Angular routes collection. */
export interface AngularRouteLike extends RouteLike {
  /** The path-matching strategy, one of 'prefix' or 'full'. Default is 'prefix'. */
  pathMatch?: "prefix" | "full";
  /** For lazy loaded routes - if it should load the routes' children or its component. */
  root?: boolean;
  /** Additional developer-defined data provided to the component via `ActivatedRoute`. */
  data?: KeyValuePair<string>;
}
