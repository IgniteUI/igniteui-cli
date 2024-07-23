import * as ts from 'typescript';
import {
  FormatSettings,
  PropertyAssignment,
  REACT_ROUTER_DOM_MODULE,
  REACT_ROUTER_DOM_REDIRECT,
  RouteEntry,
  RouteTarget,
  variableAsParentCondition,
  TypeScriptFileUpdate,
  Util,
  ROUTES_VARIABLE_NAME,
} from '@igniteui/cli-core';
import { ReactRouteEntry, ReactRouteTarget, ReactRouteLike } from './types';

export class ReactTypeScriptFileUpdate extends TypeScriptFileUpdate {
  constructor(
    filePath: string,
    formatSettings?: FormatSettings,
    compilerOptions?: ts.CompilerOptions
  ) {
    super(filePath, formatSettings, compilerOptions);
  }

  //#region Overridden Public API

  public override addRoute(
    route: ReactRouteLike,
    multiline: boolean = false,
    prepend: boolean = false,
    anchorElement?: PropertyAssignment
  ): void {
    const _route = {
      ...route,
      identifierName: route.identifierName || route.element,
      name: route.name || route.text,
    };
    if (_route.redirectTo) {
      this.requestImportForRouteLoader(_route);
    } else {
      const routeName = Util.lowerDashed(_route.name || _route.path);
      const modulePath = `./${routeName}/${routeName}`;
      this.requestImportForRouteIdentifier(
        { ..._route, modulePath },
        true // is default - for React, we import the component as `import X from 'module'`.
      );
    }

    const structure = this.buildRouteStructure(_route, multiline);
    const newRoute = this.astTransformer.createObjectLiteralExpression(
      structure,
      multiline
    );
    this.astTransformer.requestNewMembersInArrayLiteral(
      variableAsParentCondition(this.astTransformer, ROUTES_VARIABLE_NAME),
      [newRoute],
      prepend,
      anchorElement
    );
  }

  //#endregion

  //#region Overrides

  protected override buildRouteStructure(
    route: ReactRouteLike,
    _multiline: boolean
  ): RouteEntry[] {
    let structure: ReactRouteEntry[];

    if (route.redirectTo) {
      const loaderPropertyAssignment =
        this.createArrowFunctionWithCallExpression(
          ReactRouteTarget.Loader,
          route.loader || REACT_ROUTER_DOM_REDIRECT,
          route.redirectTo
        );
      structure = [
        {
          name: ReactRouteTarget.Index,
          value: route.index
            ? ts.factory.createTrue()
            : ts.factory.createFalse(),
        },
        {
          name: ReactRouteTarget.Loader,
          value: loaderPropertyAssignment.value,
        },
      ];
    } else {
      structure = [
        {
          name: RouteTarget.Path,
          value: ts.factory.createStringLiteral(
            route.path,
            this.formatSettings.singleQuotes
          ),
        },
        {
          name: ReactRouteTarget.Element,
          value: ts.factory.createJsxSelfClosingElement(
            ts.factory.createIdentifier(route.element || route.identifierName),
            undefined, // type arguments
            undefined // jsx attributes
          ),
        },
        {
          name: ReactRouteTarget.Text,
          value: ts.factory.createStringLiteral(
            route.text || route.name,
            this.formatSettings.singleQuotes
          ),
        },
      ];
    }

    return structure as RouteEntry[];
  }

  //#endregion

  private requestImportForRouteLoader(
    route: ReactRouteLike,
    isDefault?: boolean
  ): void {
    this.requestImportForRouteIdentifier(
      {
        ...route,
        identifierName: route.loader || REACT_ROUTER_DOM_REDIRECT,
        modulePath: REACT_ROUTER_DOM_MODULE,
      },
      isDefault
    );
  }
}
