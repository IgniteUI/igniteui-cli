import * as ts from 'typescript';
import { TypeScriptASTTransformer } from './TypeScriptASTTransformer';
import { TypeScriptUtils } from './TypeScriptUtils';
import { TypeScriptFormattingService } from './TypeScriptFormattingService';
import { FindPropertyAssignmentWithStringLiteralValue } from './VisitorConditions';
import {
  Util,
  ANCHOR_ELEMENT,
  TS_PRINTER_OPTIONS,
  ROUTES_VARIABLE_NAME,
  THEN_IDENTIFIER_NAME,
  IMPORT_IDENTIFIER_NAME,
} from '../util';
import {
  KeyValuePair,
  RouteEntry,
  RouteLike,
  RouteTarget,
  Identifier,
  FormatSettings,
  PropertyAssignment,
} from '../types';

export abstract class TypeScriptFileUpdate {
  protected readonly astTransformer: TypeScriptASTTransformer;
  constructor(protected targetPath: string, formatSettings?: FormatSettings) {
    this.astTransformer = new TypeScriptASTTransformer(
      TypeScriptUtils.getFileSource(targetPath),
      new TypeScriptFormattingService(targetPath, formatSettings),
      TS_PRINTER_OPTIONS // TODO: may not be needed
    );
  }

  //#region Public API

  /**
   * Adds a route entry to the specified routes collection.
   * @param route The route to add.
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to insert the new entry before the anchor element.
   *  If no anchor is provided, the new entry will be added to the start or end of the array.
   * @param anchorElement The anchor element to insert to.
   */
  public abstract addRoute(
    route: RouteLike,
    multiline: boolean,
    prepend: boolean,
    anchorElement: PropertyAssignment
  ): ts.SourceFile;

  /**
   * Adds a child route to a parent route.
   * @param parentPath The path of the parent route.
   * @param route The child route to add.
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to prepend the new added routes.
   * @param anchorElement The anchor element to insert to.
   * @remarks The `parentPath` is used to determine where the child route should be added.
   */
  public addChildRoute(
    parentPath: string,
    route: RouteLike,
    multiline: boolean = false,
    prepend: boolean = false,
    anchorElement: PropertyAssignment = ANCHOR_ELEMENT
  ): ts.SourceFile {
    const parentRoute = this.astTransformer.findPropertyAssignment(
      FindPropertyAssignmentWithStringLiteralValue(parentPath)
    );
    if (!parentRoute) return this.astTransformer.sourceFile;

    const parentContainsChildrenKey =
      ts.isObjectLiteralExpression(parentRoute.parent) &&
      parentRoute.parent.properties.find(
        (p) =>
          ts.isPropertyAssignment(p) &&
          p.name?.getText() === RouteTarget.Children
      );

    if (!parentContainsChildrenKey) {
      // if the parent route does not have the children array, create it
      this.astTransformer.addMemberToObjectLiteral(
        (node) =>
          node.properties.some(
            FindPropertyAssignmentWithStringLiteralValue(parentPath)
          ),
        {
          name: RouteTarget.Children,
          value: this.astTransformer.createArrayLiteralExpression(
            [],
            multiline
          ),
        }
      );
    }

    // add the child route to the parent's children array
    return this.addRedirectOrSimpleRouteEntry(
      route,
      (node) =>
        ts.isPropertyAssignment(node.parent) &&
        node.parent.name.getText() === RouteTarget.Children &&
        // check if the parent route is the one we're looking for
        !!this.astTransformer.findNodeAncestor(
          node,
          (node) =>
            ts.isObjectLiteralExpression(node) &&
            node.properties.some(
              FindPropertyAssignmentWithStringLiteralValue(parentPath)
            )
        ),
      multiline,
      prepend,
      anchorElement
    );
  }

  /**
   * Parses the AST and returns the resulting formatted source code.
   * @remarks This method should be called after all modifications have been made to the AST.
   */
  public finalize(): string {
    TypeScriptUtils.saveFile(this.targetPath, this.astTransformer.sourceFile);
    return this.astTransformer.finalize();
  }

  //#endregion

  //#region Inheritables

  /**
   * Adds a new entry to the routes array. With a component identifier and path or with redirect option.
   * @param route The route to add.
   * @param visitCondition The condition used to find the appropriate route node.
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to insert the new entry before the anchor element.
   *  If no anchor is provided, the new entry will be added to the start or end of the array.
   * @param anchorElement The anchor element to insert.
   */
  protected addRedirectOrSimpleRouteEntry(
    route: RouteLike,
    visitCondition: (node: ts.Node) => boolean,
    multiline: boolean = false,
    prepend: boolean = false,
    anchorElement: PropertyAssignment
  ): ts.SourceFile {
    if (route.lazyload) return this.astTransformer.sourceFile;

    if (route.path && route.identifierName) {
      this.addRouteEntry(
        route,
        visitCondition,
        multiline,
        prepend,
        anchorElement
      );
    }

    if (route.redirectTo) {
      this.addRedirectRouteEntry(
        route,
        visitCondition,
        multiline,
        prepend,
        anchorElement,
      );
    }

    if (route.children?.length) {
      route.children.forEach((child) => {
        this.addChildRoute(route.path!, child, multiline, false);
      });
    }

    return this.astTransformer.sourceFile;
  }

  /**
   * Adds a new not lazy-loaded route entry to the routes array. With a redirect option.
   * @param route The route to add.
   * @param visitCondition The condition used to find the appropriate route node.
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to insert the new entry before the anchor element.
   *  If no anchor is provided, the new entry will be added to the start or end of the array.
   * @param anchorElement The anchor element to insert to.
   */
  protected abstract addRedirectRouteEntry(
    route: RouteLike,
    visitCondition: (node: ts.Node) => boolean,
    multiline: boolean,
    prepend: boolean,
    anchorElement: PropertyAssignment,
  ): ts.SourceFile;

  /**
   * Adds a new not lazy-loaded route entry to the routes array. With a component identifier and path.
   * @param route The route to add.
   * @param visitCondition The condition used to find the appropriate route node.
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to insert the new entry before the anchor element.
   *  If no anchor is provided, the new entry will be added to the start or end of the array.
   * @param anchorElement The anchor element to insert to.
   */
  protected addRouteEntry(
    route: RouteLike,
    visitCondition: (node: ts.Node) => boolean,
    multiline: boolean = false,
    prepend: boolean = false,
    anchorElement: PropertyAssignment
  ): ts.SourceFile {
    if (route.modulePath) {
      // add an import for the given identifier
      const routeIdentifier: Identifier = { name: route.identifierName };
      if (!this.astTransformer.importDeclarationCollides(routeIdentifier)) {
        // if there is an identifierName, there must be a modulePath as well
        this.astTransformer.addImportDeclaration({
          identifiers: routeIdentifier,
          moduleName: route.modulePath,
        });
      }
    }

    const structure: RouteEntry[] = [
      {
        name: RouteTarget.Path,
        value: ts.factory.createStringLiteral(route.path),
      },
      {
        name: RouteTarget.Component,
        value: ts.factory.createIdentifier(route.identifierName),
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

  /**
   * Creates an arrow function of the form `() => import(path).then(m => m.prop)`.
   * @param path The path to the module to import.
   * @param importedEntity The entity to import from the module.
   * @param root Whether it should be `loadChildren` or `loadComponent`.
   * @remarks If the `root` param is `true` the function will use `routes` as an `importedEntity`.
   */
  protected createDynamicImport(
    path: string,
    importedEntity: string,
    root: boolean = false
  ): ts.ArrowFunction {
    const thenClause = root ? ROUTES_VARIABLE_NAME : importedEntity;
    // create the 'import(path)' expression
    const importExpression = ts.factory.createCallExpression(
      ts.factory.createIdentifier(IMPORT_IDENTIFIER_NAME),
      undefined, // type arguments
      [ts.factory.createStringLiteral(path)]
    );

    const thenFuncParamName = 'm';
    // create the 'm => m.prop' arrow function
    const thenExprArrowFuncBody = ts.factory.createArrowFunction(
      undefined, // modifiers
      undefined, // type parameters
      [
        ts.factory.createParameterDeclaration(
          undefined, // decorators
          undefined, // modifiers
          ts.factory.createIdentifier(thenFuncParamName)
        ),
      ],
      undefined,
      ts.factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
      ts.factory.createPropertyAccessChain(
        ts.factory.createIdentifier(thenFuncParamName),
        undefined, // question-dot token
        thenClause
      )
    );

    // build the '.then(m => m.prop)' expression and add it to the import expression
    const body = ts.factory.createCallExpression(
      ts.factory.createPropertyAccessExpression(
        importExpression,
        THEN_IDENTIFIER_NAME
      ),
      undefined, // type arguments
      [thenExprArrowFuncBody]
    );

    // Create the '() => import(path).then(m => m.prop)' arrow function
    const dynamicImport = ts.factory.createArrowFunction(
      undefined, // modifiers
      undefined, // type parameters
      [], // parameters
      undefined, // type
      ts.factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
      body
    );

    return dynamicImport;
  }

  /**
   * Creates an arrow function with a call expression that takes the form
   * `memberName: () => callExpressionName(callExpressionArgs)`.
   * @param memberName The name that will be used in the object literal property assignment.
   * @param callExpressionName The name of the function that will be invoked in the arrow func's body.
   * @param callExpressionArgs The arguments that wil lbe provided to the called function.
   * @remarks The `callExpressionArgs` is considered to be a string literal.
   */
  protected createArrowFunctionWithCallExpression(
    memberName: string,
    callExpressionName: string,
    callExpressionArgs: string
  ): PropertyAssignment {
    const arrowFunction = ts.factory.createArrowFunction(
      undefined, // modifiers
      undefined, // type parameters
      [], // parameters
      undefined, // type
      ts.factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
      ts.factory.createCallExpression(
        ts.factory.createIdentifier(callExpressionName),
        undefined, // type arguments
        [ts.factory.createStringLiteral(callExpressionArgs)]
      )
    );

    return {
      name: memberName,
      value: arrowFunction,
    };
  }

  /**
   * Applies a configuration transformation to a string.
   * @param data The string to transform.
   * @param configuration The items to replace in the string.
   */
  protected applyConfigTransformation = (
    data: string,
    configuration: KeyValuePair<string>
  ): string => {
    let key;
    for (key in configuration) {
      data = data.replace(
        new RegExp(Util.escapeRegExp(key), 'g'),
        configuration[key]
      );
    }

    return data;
  };

  /**
   * Converts a string or string array union to array.
   * @param value The value to convert.
   * @param variables Variables to replace in the strings.
   * @remarks Splits strings as comma delimited.
   */
  protected asArray(
    value: string | string[],
    variables: KeyValuePair<string>
  ): string[] {
    let result: string[] = [];
    if (value) {
      result = typeof value === 'string' ? value.split(/\s*,\s*/) : value;
      result = result.map((x) => this.applyConfigTransformation(x, variables));
    }
    return result;
  }

  //#endregion
}
