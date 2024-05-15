import * as ts from 'typescript';
import { EOL } from 'os';
import { PropertyAssignment } from '../types';

// TypeScript
export const ROUTES_VARIABLE_NAME = 'routes';
export const THEN_IDENTIFIER_NAME = 'then';
export const IMPORT_IDENTIFIER_NAME = 'import';
export const SIDE_EFFECTS_IMPORT_TEMPLATE_NAME = 'side_effects_import';

// Angular
export const NG_MODULE_DECORATOR_NAME = 'NgModule';
export const NG_SA_DECORATOR_NAME = 'Component';
export const NG_FOR_ROOT_IDENTIFIER_NAME = 'forRoot';
export const ANCHOR_ELEMENT: PropertyAssignment = {
  name: 'path',
  value: ts.factory.createStringLiteral('**'),
};

// WC
export const WC_APP_ROUTING_NAME = 'app-routing.ts';
export const WC_ANCHOR_ELEMENT: PropertyAssignment = {
  name: 'path',
  value: ts.factory.createStringLiteral('(.*)'),
};

export const TS_PRINTER_OPTIONS: ts.PrinterOptions = {
  newLine:
    EOL === '\n'
      ? ts.NewLineKind.LineFeed
      : ts.NewLineKind.CarriageReturnLineFeed,
};
