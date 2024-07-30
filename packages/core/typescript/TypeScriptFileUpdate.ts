import * as ts from 'typescript';
import { TypeScriptAstTransformer } from './TypeScriptAstTransformer';
import { TypeScriptUtils } from './TypeScriptUtils';
import {
  PropertyAssignmentWithStringLiteralValueCondition,
  variableAsParentCondition,
} from './VisitorConditions';
import {
  Util,
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
  protected readonly astTransformer: TypeScriptAstTransformer;

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
    this.astTransformer = new TypeScriptAstTransformer(
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
          variableAsParentCondition(
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
   * Applies all transformations, parses the AST, formats the source code and saves all changes on the FS.
   * @remarks This method should be called after all modifications are ready to be applied to the AST.
   */
  public finalize(): string {
    return this.astTransformer.finalize();
  }

  //#endregion

  //#region Protected API

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
   * Creates an arrow function with no arity that returns a dynamic import. Takes the form `() => import(path).then(m => m.prop)`.
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
   * Creates a property assignment with a zero arity arrow function as the value, which has a call expression in its body.
   * Takes the form `memberName: () => callExpressionName(callExpressionArgs)`.
   * @param memberName The name that will be used in the object literal property assignment.
   * @param callExpressionName The name of the function that will be invoked in the arrow func's body.
   * @param callExpressionArgs The arguments that will be provided to the called function.
   * @remarks The `callExpressionArgs` is considered to be a string literal.
   */
  protected createArrowFunctionWithCallExpression(
    memberName: string,
    callExpressionName: string,
    callExpressionArgs?: string
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
  protected applyConfigTransformation(
    data: string,
    configuration: KeyValuePair<string>
  ): string {
    let key;
    for (key in configuration) {
      data = data.replace(
        new RegExp(Util.escapeRegExp(key), 'g'),
        configuration[key]
      );
    }

    return data;
  }

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
   * @see {@link TypeScriptAstTransformer.createImportDeclaration}
   */
  protected requestSideEffectsImportForModule(moduleName: string): void {
    const importMeta = {
      identifiers: { name: '<placeholder>' }, // will be ignored since it's a side effects import
      moduleName,
    };
    this.astTransformer.requestNewImportDeclaration(
      importMeta,
      false, // is default
      true // is side effects
    );
  }

  /**
   * Adds an import declaration for an identifier that exists in a route node. Checks if it does not collide with other imports first.
   * @param route The route that contains an identifier to create a declaration for.
   * @see {@link TypeScriptAstTransformer.createImportDeclaration}
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

  //#endregion
}
