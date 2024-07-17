import * as ts from 'typescript';
import { EOL } from 'os';
import { PropertyAssignment } from '../types';

export const ROUTES_VARIABLE_NAME = 'routes';
export const THEN_IDENTIFIER_NAME = 'then';
export const IMPORT_IDENTIFIER_NAME = 'import';
export const SIDE_EFFECTS_IMPORT_TEMPLATE_NAME = 'side_effects_import';
export const UNDERSCORE_TOKEN = '_';
export const TRUE_CLAUSE = 'true';

export const TS_PRINTER_OPTIONS: ts.PrinterOptions = {
  newLine:
    EOL === '\n'
      ? ts.NewLineKind.LineFeed
      : ts.NewLineKind.CarriageReturnLineFeed,
};

// Angular
export const NG_MODULE_DECORATOR_NAME = 'NgModule';
export const NG_SA_DECORATOR_NAME = 'Component';
export const NG_FOR_ROOT_IDENTIFIER_NAME = 'forRoot';
export const WITH_COMPONENT_INPUT_BINDING = 'withComponentInputBinding';
export const PROVIDE_ROUTER = 'provideRouter';
export const NG_DECORATOR_PROVIDERS = 'providers';
export const NG_ROUTER_PACKAGE = '@angular/router';
export const NG_COMMON_HTTP_PACKAGE = '@angular/common/http';
export const NG_HTTP_CLIENT_PROVIDER = 'provideHttpClient';
export const ANCHOR_ELEMENT: PropertyAssignment = {
  name: 'path',
  value: ts.factory.createStringLiteral('**'),
};
