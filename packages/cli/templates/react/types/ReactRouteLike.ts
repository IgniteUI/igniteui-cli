import { RouteLike } from '@igniteui/cli-core';

/** A route member in a React routes collection. */
export interface ReactRouteLike extends RouteLike {
  /**
   * Determines if the route is an index route.
   * Index routes render into their parent's {@link https://reactrouter.com/en/main/components/outlet|Outlet} at their parent's URL (like a default child route).
   */
  index?: boolean;

  /**
   * The route loader is called before the route renders and provides data for the element through {@link https://reactrouter.com/en/main/hooks/use-loader-data|useLoaderData}.
   */
  loader?: string;

  /**
   * The React Element/Component to render when the route matches the URL.
   */
  element?: string;

  /**
   * The name the page.
   */
  text?: string;

  /**
   * An array of child `Route` objects that specifies a nested route configuration.
   */
  children?: ReactRouteLike | ReactRouteLike[];
}
