import * as ts from 'typescript';
import { IPropertyAssignment } from './IPropertyAssignment';
import { RouteTarget } from './RouteTarget';

export interface IRouteEntry extends IPropertyAssignment {
  name: RouteTarget;
  value: ts.Expression;
}
