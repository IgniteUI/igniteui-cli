/** A route member in a routes collection. */
export interface RouteLike {
  /** The name of the route. */
  name?: string;
  /** The path of the route. */
  path?: string;
  /** An identifier that exists in a route node. */
  identifierName?: string;
  /** An alias that can be used instead of the identifier name. */
  aliasName?: string
  /** Where to import the identifier from. */
  modulePath?: string;
  /** If the identifier should be lazy loaded. */
  lazyload?: boolean;
  /** A URL to redirect to when the path matches. */
  redirectTo?: string;
}
