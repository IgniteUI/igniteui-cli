import * as ts from 'typescript';
import { TypeScriptASTTransformer } from './TypeScriptASTTransformer';
import { TypeScriptUtils } from './TypeScriptUtils';
import { TypeScriptFormattingService } from './TypeScriptFormattingService';
import {
  PropertyAssignmentWithStringLiteralValueCondition,
  RoutesVariableAsParentCondition,
} from './VisitorConditions';
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
  ChangeRequest,
} from '../types';
import { AngularRouteEntry } from '@igniteui/angular-templates';

export abstract class TypeScriptFileUpdate {
  protected readonly astTransformer: TypeScriptASTTransformer;

  /**
   * Creates a new TypeScriptFileUpdate instance for the given file.
   * @param filePath The path to the file that will be updated.
   * @param formatSettings The formatting settings to apply.
   * @param compilerOptions The compiler options to use when transforming the source file.
   */
  constructor(
    protected filePath: string,
    protected formatSettings?: FormatSettings,
    compilerOptions?: ts.CompilerOptions
  ) {
    this.astTransformer = new TypeScriptASTTransformer(
      TypeScriptUtils.getFileSource(filePath, compilerOptions?.jsx > 0),
      TS_PRINTER_OPTIONS,
      compilerOptions,
      formatSettings
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
  ): void;

  /**
   * Adds a child route to a parent route.
   * @param parentPath The path of the parent route.
   * @param route The child route to add.
   * @param asIdentifier Whether to initialize the {@link RouteTarget.Children} member with an identifier or an array literal.
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to insert the new entry before the anchor element.
   * @param anchorElement The anchor element to insert to.
   * @remarks The `parentPath` is used to determine where the child route should be added.
   */
  public addChildRoute(
    parentPath: string,
    route: RouteLike,
    asIdentifier: boolean = false,
    multiline: boolean = false
  ): void {
    if (!route.lazyload) {
      this.requestImportForRouteIdentifier(route);
    }

    const visitCondition = (node: ts.ObjectLiteralExpression) => {
      return node.properties.some(
        (n) =>
          PropertyAssignmentWithStringLiteralValueCondition(
            RouteTarget.Path,
            parentPath
          )(n) &&
          RoutesVariableAsParentCondition(
            this.astTransformer,
            ROUTES_VARIABLE_NAME
          )(n)
      );
    };

    const initializer = asIdentifier
      ? ts.factory.createIdentifier(route.aliasName || route.identifierName)
      : this.astTransformer.createArrayLiteralExpression(
          [
            this.astTransformer.createObjectLiteralExpression(
              this.buildRouteStructure(route, multiline),
              multiline
            ),
          ],
          multiline
        );
    this.astTransformer.requestNewMemberInObjectLiteral(
      visitCondition,
      RouteTarget.Children,
      initializer,
      multiline
    );
  }

  /**
   * Parses the AST and returns the resulting formatted source code.
   * @remarks This method should be called after all modifications have been made to the AST.
   */
  public finalize(): string {
    return this.astTransformer.finalize();
  }

  //#endregion

  //#region Protected API

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
  ): void {
    if (route.lazyload) return;

    if (route.redirectTo) {
      this.addRedirectRouteEntry(
        route,
        visitCondition,
        multiline,
        prepend,
        anchorElement
      );
    } else if (route.path && (route.identifierName || route.aliasName)) {
      this.addRouteEntry(
        route,
        visitCondition,
        multiline,
        prepend,
        anchorElement
      );
    }
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
    anchorElement: PropertyAssignment
  ): void;

  /**
   * Builds the route structure for the given route per platform.
   * @param route The route to build the structure for.
   * @parma multiline Whether to format the new entry as multiline.
   */
  protected abstract buildRouteStructure(
    route: RouteLike,
    multiline: boolean
  ): RouteEntry[];

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
  ): void {
    this.requestImportForRouteIdentifier(route);

    const structure: RouteEntry[] = [
      {
        name: RouteTarget.Path,
        value: ts.factory.createStringLiteral(
          route.path,
          this.formatSettings?.singleQuotes
        ),
      },
      {
        name: RouteTarget.Component,
        value: ts.factory.createIdentifier(
          route.aliasName || route.identifierName
        ),
      },
    ];
    const newRoute = this.astTransformer.createObjectLiteralExpression(
      structure,
      multiline
    );
    this.astTransformer.requestNewMembersInArrayLiteral(
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
      [ts.factory.createStringLiteral(path, this.formatSettings?.singleQuotes)]
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
        callExpressionArgs
          ? [
              ts.factory.createStringLiteral(
                callExpressionArgs,
                this.formatSettings?.singleQuotes
              ),
            ]
          : []
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

  /**
   * Creates a side effects import declaration for a given module. Checks if the import has been added already.
   * @param moduleName The name of the module to create an import for.
   * @see {@link TypeScriptASTTransformer.createImportDeclaration}
   */
  protected requestSideEffectsImportForModule(moduleName: string): void {
    const importMeta = {
      identifiers: { name: '' },
      moduleName,
    };
    if (
      !this.astTransformer.importDeclarationCollides(
        importMeta.identifiers,
        moduleName,
        true // is side effects
      )
    ) {
      this.astTransformer.requestNewImportDeclaration(
        importMeta,
        false, // is default
        true // is side effects
      );
    }
  }

  /**
   * Adds an import declaration for an identifier that exists in a route node. Checks if it does not collide with other imports first.
   * @param route The route that contains an identifier to create a declaration for.
   * @see {@link TypeScriptASTTransformer.createImportDeclaration}
   */
  protected requestImportForRouteIdentifier(
    route: RouteLike,
    isDefault: boolean = false
  ): void {
    if (route.modulePath) {
      // add an import for the given identifier
      const routeIdentifier: Identifier = {
        name: route.identifierName,
        alias: route.aliasName,
      };
      if (!this.astTransformer.importDeclarationCollides(routeIdentifier)) {
        // if there is an identifierName, there must be a modulePath as well
        this.astTransformer.requestNewImportDeclaration(
          {
            identifiers: routeIdentifier,
            moduleName: route.modulePath,
          },
          isDefault
        );
      }
    }
  }

  //#endregion

  /**
   * Finds a transformation that will add a specific parent route to the AST.
   * @param path The path of the parent route to look for.
   */
  private findParentRouteTransformation(
    path: string
  ): ChangeRequest<ts.Node> | undefined {
    const transformations = Array.from(
      this.astTransformer.transformations.values()
    );
    const findParentObjectLiteral = (
      node: ts.Node
    ): ts.ObjectLiteralExpression => {
      if (!ts.isObjectLiteralExpression(node)) return undefined;
      const property = node.properties.find(
        (p) =>
          ts.isPropertyAssignment(p) &&
          ts.isLiteralExpression(p.initializer) &&
          p.initializer.text === path
      );
      if (property) return node;
    };

    let parentRoute: ts.ObjectLiteralExpression;
    for (const change of transformations) {
      if (!change.node) continue;
      if (this.astTransformer.isNodeArray(change.node)) {
        parentRoute = change.node.find(
          findParentObjectLiteral
        ) as ts.ObjectLiteralExpression;
      } else {
        parentRoute = findParentObjectLiteral(change.node);
      }
      if (parentRoute) return change;
    }
  }

  /**
   * Looks up a parent route in the AST or in the staged transformations.
   * @param path The path of the parent route to look for.
   */
  private resolveParentRoute(
    path: string
  ): ts.ObjectLiteralExpression | undefined {
    const parentRoute = this.astTransformer.findObjectLiteralWithProperty(
      RouteTarget.Path,
      path
    );

    return (
      parentRoute ||
      (this.findParentRouteTransformation(path)
        ?.node as ts.ObjectLiteralExpression)
    );
  }
}
