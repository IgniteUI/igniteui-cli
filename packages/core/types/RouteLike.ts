export interface RouteLike {
  path?: string;
  identifierName?: string;
  modulePath?: string;
  lazyload?: boolean;
  children?: RouteLike[];
}
