import { IRouteEntry, RouteTarget } from "@igniteui/cli-core";
import { AngularRouteTarget } from "./AngularRouteTarget";

export interface IAngularRouteEntry extends Pick<IRouteEntry, 'value'> {
  name: RouteTarget | AngularRouteTarget;
}
