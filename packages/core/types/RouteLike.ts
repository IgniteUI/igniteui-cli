/** A route member in a routes collection. */
export interface RouteLike {
  /** The path of the route. */
  path?: string;
  /** The target of the route - should be the expected identifier. */
  identifierName?: string;
  /** Where to import the identifier from. */
  modulePath?: string;
  /** If the identifier should be lazy loaded. */
  lazyload?: boolean;
  /** A URL to redirect to when the path matches. */
  redirectTo?: string;
  /** The children of the route. */
  children?: RouteLike[];
}
