import * as ts from 'typescript';
import { PropertyAssignment } from './types-typescript';
import { RouteTarget } from './enumerations/RouteTarget';

export interface RouteEntry extends PropertyAssignment {
  name: RouteTarget;
  value: ts.Expression;
}
