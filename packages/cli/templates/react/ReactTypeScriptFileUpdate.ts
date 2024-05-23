import * as ts from 'typescript';
import {
  FormatSettings,
  PropertyAssignment,
  REACT_ROUTER_DOM_MODULE,
  REACT_ROUTER_DOM_REDIRECT,
  RouteTarget,
  RoutesVariableAsParentCondition,
  TypeScriptFileUpdate,
  Util,
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

  public addRoute(
    route: ReactRouteLike,
    multiline: boolean = false,
    prepend: boolean = false,
    anchorElement?: PropertyAssignment
  ): ts.SourceFile {
    return this.addRedirectOrSimpleRouteEntry(
      {
        ...route,
        identifierName: route.identifierName || route.element,
        name: route.name || route.text,
      },
      RoutesVariableAsParentCondition(this.astTransformer),
      multiline,
      prepend,
      anchorElement
    );
  }

  //#endregion

  //#region Overrides

  protected addRouteEntry(
    route: ReactRouteLike,
    visitCondition: (node: ts.Node) => boolean,
    multiline: boolean = false,
    prepend: boolean = false,
    anchorElement: PropertyAssignment
  ): ts.SourceFile {
    const routeName = Util.lowerDashed(route.name || route.path);
    const modulePath = `./${routeName}/${routeName}`;
    this.requestImportForRouteIdentifier(
      { ...route, modulePath },
      true // is default - for React, we import the component as `import X from 'module'`.
    );
    if (
      route.children &&
      !Array.isArray(route.children) &&
      (route.children.identifierName || route.children.aliasName)
    ) {
      this.requestImportForRouteIdentifier(route.children);
    }

    const structure: ReactRouteEntry[] = [
      {
        name: RouteTarget.Path,
        value: ts.factory.createStringLiteral(route.path),
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
        value: ts.factory.createStringLiteral(route.text || route.name),
      },
    ];
    const newRoute = this.astTransformer.createObjectLiteralExpression(
      structure,
      multiline
    );
    return this.astTransformer.addMembersToArrayLiteral(
      visitCondition,
      [newRoute],
      prepend,
      anchorElement
    );
  }

  protected addRedirectRouteEntry(
    route: ReactRouteLike,
    visitCondition: (node: ts.Node) => boolean,
    multiline: boolean = false,
    prepend: boolean = false,
    anchorElement?: PropertyAssignment
  ): ts.SourceFile {
    const loaderPropertyAssignment = this.createArrowFunctionWithCallExpression(
      ReactRouteTarget.Loader,
      route.loader || REACT_ROUTER_DOM_REDIRECT,
      route.redirectTo
    );

    this.requestImportForRouteLoader(route);

    const structure: ReactRouteEntry[] = [
      {
        name: ReactRouteTarget.Index,
        value: route.index ? ts.factory.createTrue() : ts.factory.createFalse(),
      },
      {
        name: ReactRouteTarget.Loader,
        value: loaderPropertyAssignment.value,
      },
    ];
    const newRoute = this.astTransformer.createObjectLiteralExpression(
      structure,
      multiline
    );
    return this.astTransformer.addMembersToArrayLiteral(
      visitCondition,
      [newRoute],
      prepend,
      anchorElement
    );
  }

  protected addChildRouteEntry(
    route: ReactRouteLike,
    asIdentifier: boolean = true,
    multiline: boolean = false,
    prepend: boolean = false
  ): ts.SourceFile {
    return super.addChildRouteEntry(
      {
        ...route,
        identifierName: route.identifierName || route.element,
      },
      asIdentifier || true, // for React the `children` member should always be added in the form { children: identifier }
      multiline,
      prepend
    );
  }

  //#endregion

  private requestImportForRouteLoader(
    route: ReactRouteLike,
    isDefault?: boolean
  ): ts.SourceFile {
    return this.requestImportForRouteIdentifier(
      {
        ...route,
        identifierName: route.loader || REACT_ROUTER_DOM_REDIRECT,
        modulePath: REACT_ROUTER_DOM_MODULE,
      },
      isDefault
    );
  }
}
