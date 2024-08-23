import * as ts from 'typescript';
import {
  FormatSettings,
  ImportDeclarationMeta,
  KeyValuePair,
  PropertyAssignment,
} from '../types';
import {
  createImportDeclaration,
  isPropertyAssignment,
} from './TransformerFactories';
import { IMPORT_IDENTIFIER_NAME, THEN_IDENTIFIER_NAME } from '../util';

/** Wraps some members of the `ts.factory` for easier creation of custom TS nodes. */
export class TypeScriptNodeFactory {
  /**
   * Creates a new TypeScriptNodeFactory instance.
   * @param formatSettings The formatting settings to apply to the newly-created nodes.
   */
  constructor(private formatSettings?: FormatSettings) {}

  /**
   * Creates a `ts.CallExpression` for an identifier with a method call.
   * @param identifierName Identifier text.
   * @param call Method to call, creating `<identifierName>.<call>()`.
   * @param typeArgs Type arguments for the call, translates to type arguments for generic methods - `myMethod<T, T1, ...>`.
   * @param args Arguments for the call, translates to arguments for the method - `myMethod(arg1, arg2, ...)`.
   * @remarks Create `typeArgs` with methods like `ts.factory.createXXXTypeNode`.
   *
   * ```
   * const typeArg = ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
   * const arg = ts.factory.createNumericLiteral('5');
   * const callExpression = astTransformer.createCallExpression(
   *    'x',
   *    'myGenericFunction',
   *    [typeArg],
   *    [arg]
   * );
   *
   * // This would create the function call
   * x.myGenericFunction<number>(5)
   * ```
   */
  public createCallExpression(
    identifierName: string,
    call: string,
    typeArgs?: ts.TypeNode[],
    args?: ts.Expression[]
  ): ts.CallExpression {
    return ts.factory.createCallExpression(
      ts.factory.createPropertyAccessExpression(
        ts.factory.createIdentifier(identifierName),
        call
      ),
      typeArgs,
      args
    );
  }

  /**
   * Creates a new object literal expression with the given properties.
   * @param properties The properties to add to the object literal.
   * @param multiline Whether the object literal should be multiline.
   * @param transform A function to transform the value of the property.
   * @remarks A `transform` function should be provided if the `properties` are of type `KeyValuePair<T>`.
   */
  public createObjectLiteralExpression(
    properties: PropertyAssignment[] | KeyValuePair<string>[],
    multiline: boolean = false,
    transform?: (value: string) => ts.Expression
  ): ts.ObjectLiteralExpression {
    let propertyAssignments: ts.ObjectLiteralElementLike[] = [];
    if (properties.every(isPropertyAssignment)) {
      propertyAssignments = properties.map((property) =>
        ts.factory.createPropertyAssignment(property.name, property.value)
      );
    } else {
      for (const property of properties) {
        propertyAssignments.push(
          ...this.mapKeyValuePairToObjectLiteral(property, (value) =>
            transform
              ? transform(value)
              : ts.factory.createStringLiteral(
                  value,
                  this.formatSettings?.singleQuotes
                )
          )
        );
      }
    }

    return ts.factory.createObjectLiteralExpression(
      propertyAssignments,
      multiline
    );
  }

  /**
   * Creates an array literal expression with the given elements.
   * @param elements The elements to include in the array literal.
   * @param multiline Whether the array literal should be multiline.
   */
  public createArrayLiteralExpression(
    elements: ts.Expression[],
    multiline?: boolean
  ): ts.ArrayLiteralExpression;
  public createArrayLiteralExpression(
    elements: PropertyAssignment[],
    multiline?: boolean
  ): ts.ArrayLiteralExpression;
  public createArrayLiteralExpression(
    elementsOrProperties: ts.Expression[] | PropertyAssignment[],
    multiline: boolean = false
  ): ts.ArrayLiteralExpression {
    if (
      elementsOrProperties.every((element) =>
        ts.isExpression(element as ts.Node)
      )
    ) {
      return ts.factory.createArrayLiteralExpression(
        elementsOrProperties as ts.Expression[],
        multiline
      );
    }

    const propertyAssignments = (
      elementsOrProperties as PropertyAssignment[]
    ).map((property) =>
      this.createObjectLiteralExpression([property], multiline)
    );
    return ts.factory.createArrayLiteralExpression(
      propertyAssignments,
      multiline
    );
  }

  /**
   * Creates a node for a named import declaration.
   * @param importDeclarationMeta Metadata for the new import declaration.
   * @param isDefault Whether the import is a default import.
   * @param isSideEffects Whether the import is a side effects import.
   * @returns A named import declaration of the form `import { MyClass } from "my-module"`.
   * @remarks If `isDefault` is `true`, the first element of `identifiers` will be used and
   * the import will be a default import of the form `import MyClass from "my-module"`.
   * @remarks
   * If `isSideEffects` is `true`, all other options are ignored
   * and the import will be a side effects import of the form `import "my-module"`.
   * @reference {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#description|MDN}
   */
  public createImportDeclaration(
    importDeclarationMeta: ImportDeclarationMeta,
    isDefault: boolean = false,
    isSideEffects: boolean = false
  ): ts.ImportDeclaration {
    return createImportDeclaration(
      importDeclarationMeta,
      isDefault,
      isSideEffects,
      this.formatSettings?.singleQuotes || false
    );
  }

  /**
   * Creates an arrow function with no arity that returns a dynamic import. Takes the form `() => import(path).then(m => m.prop)`.
   * @param path The path to the module to import.
   * @param importedEntity The entity to import from the module.
   */
  public createDynamicImport(
    path: string,
    importedEntity: string
  ): ts.ArrowFunction {
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
        importedEntity
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
  public createArrowFunctionWithCallExpression(
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
   * Maps a `KeyValuePair` type to a `ts.ObjectLiteralElementLike` type.
   * @param kvp The key-value pair to map.
   * @param transform Resolves the `ts.Expression` for the the initializer of the `ts.ObjectLiteralElementLike`.
   */
  private mapKeyValuePairToObjectLiteral<T>(
    kvp: KeyValuePair<T>,
    transform: (value: T) => ts.Expression
  ): ts.ObjectLiteralElementLike[] {
    return Object.entries(kvp).map(([key, value]) =>
      ts.factory.createPropertyAssignment(key, transform(value))
    );
  }
}
