import * as ts from "typescript";
import { PropertyAssignment } from "./types-typescript";
import { RouteTarget } from "./enumerations/RouteTarget";

/** Represents a route entry in a routes collection. */
export interface RouteEntry extends PropertyAssignment {
  /** The targeted route member. */
  name: RouteTarget;
  /** The appropriate value for the given member.s */
  value: ts.Expression;
}
