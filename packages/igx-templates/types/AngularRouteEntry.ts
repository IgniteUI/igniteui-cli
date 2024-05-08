import { RouteEntry, RouteTarget } from "@igniteui/cli-core";
import { AngularRouteTarget } from "./enumerations/AngularRouteTarget";

export interface IAngularRouteEntry extends Pick<RouteEntry, 'value'> {
  name: RouteTarget | AngularRouteTarget;
}
