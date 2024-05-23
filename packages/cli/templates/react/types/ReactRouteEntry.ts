import { RouteEntry, RouteTarget } from "@igniteui/cli-core";
import { ReactRouteTarget } from "./ReactRouteTarget";

/** Represents a React route entry in a routes collection. */
export interface ReactRouteEntry extends Pick<RouteEntry, "value"> {
  name: RouteTarget | ReactRouteTarget;
}
