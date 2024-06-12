import { RouteEntry, RouteTarget } from "@igniteui/cli-core";
import { AngularRouteTarget } from "./enumerations/AngularRouteTarget";

/** Represents an Angular route entry in a routes collection. */
export interface AngularRouteEntry extends Pick<RouteEntry, "value"> {
  name: RouteTarget | AngularRouteTarget;
}
