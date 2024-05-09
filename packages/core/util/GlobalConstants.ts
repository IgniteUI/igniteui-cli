import * as ts from 'typescript';
import { EOL } from 'os';
import { PropertyAssignment } from '../types';

export const ROUTES_VARIABLE_NAME = 'routes';
export const THEN_IDENTIFIER_NAME = 'then';
export const IMPORT_IDENTIFIER_NAME = 'import';
export const NG_MODULE_DECORATOR_NAME = 'NgModule';
export const NG_SA_DECORATOR_NAME = 'Component';
export const NG_FOR_ROOT_IDENTIFIER_NAME = 'forRoot';
// insert before or after the node that contains this element
export const ANCHOR_ELEMENT: PropertyAssignment = {
  name: 'path',
  value: ts.factory.createStringLiteral('**'),
};
export const TS_PRINTER_OPTIONS: ts.PrinterOptions = {
  newLine:
    EOL === '\n'
      ? ts.NewLineKind.LineFeed
      : ts.NewLineKind.CarriageReturnLineFeed,
};
