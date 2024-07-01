import * as ts from 'typescript';
import * as crypto from 'crypto';
import {
  KeyValuePair,
  FormattingService,
  PropertyAssignment,
  Identifier,
  ImportDeclarationMeta,
  FormatSettings,
  ChangeRequest,
  ChangeType,
  SyntaxKind,
} from '../types';
import { SIDE_EFFECTS_IMPORT_TEMPLATE_NAME, UNDERSCORE_TOKEN } from '../util';
import { TypeScriptFormattingService } from './TypeScriptFormattingService';
import { TypeScriptExpressionCollector } from './TypeScriptExpressionCollector';

export class TypeScriptASTTransformer {
  private _printer: ts.Printer | undefined;
  private _expressionCollector: TypeScriptExpressionCollector;
  private _flatNodeRelations: Map<ts.Node, ts.Node>;
  private _defaultCompilerOptions: ts.CompilerOptions = {
    pretty: true,
  };

  /**
   * Create a new source update instance for the given source file.
   * @param sourceFile The source file to update.
   * @param printerOptions Options to use when printing the source file.
   * @param customCompilerOptions Custom compiler options to use when transforming the source file.
   * @param formatSettings Custom formatting settings to apply. If provided, a {@link TypeScriptFormattingService} will be initialized.
   */
  constructor(
    public readonly sourceFile: ts.SourceFile,
    protected readonly printerOptions?: ts.PrinterOptions,
    protected readonly customCompilerOptions?: ts.CompilerOptions,
    readonly formatSettings?: FormatSettings
  ) {
    if (formatSettings) {
      this.formatter = new TypeScriptFormattingService(
        sourceFile.fileName,
        formatSettings
      );
    }

    this._flatNodeRelations = this.createNodeRelationsMap(this.sourceFile);
    this._expressionCollector = new TypeScriptExpressionCollector();
  }

  /** Map of all transformations to apply to the source file. */
  public readonly transformations = new Map<string, ChangeRequest<ts.Node>>();

  /** The formatting service to use when printing the source file. */
  public formatter: FormattingService;

  /** A map of nodes with their parents. */
  public get flatNodeRelations() {
    return this._flatNodeRelations;
  }

  /**
   * The printer instance to use to print the source file after modifications.
   */
  public get printer(): ts.Printer {
    if (!this._printer) {
      this._printer = ts.createPrinter(this.printerOptions);
    }

    return this._printer;
  }

  /**
   * The compiler options to use when transforming the source file.
   */
  public get compilerOptions(): ts.CompilerOptions {
    return Object.assign(
      {},
      this._defaultCompilerOptions,
      this.customCompilerOptions
    );
  }

  /**
   * Looks up a property assignment in the AST.
   * @param visitCondition The condition by which the property assignment is found.
   * @param lastMatch Whether to return the last match found. If not set, the first match will be returned.
   */
  public findPropertyAssignment(
    visitCondition: (node: ts.PropertyAssignment) => boolean,
    lastMatch: boolean = false
  ): ts.PropertyAssignment | undefined {
    let propertyAssignment: ts.PropertyAssignment | undefined;
    const visitor: ts.Visitor = (node) => {
      if (ts.isPropertyAssignment(node) && visitCondition(node)) {
        return (propertyAssignment = node);
      }
      if (!propertyAssignment || lastMatch) {
        return ts.visitEachChild(node, visitor, undefined);
      }
      return undefined;
    };

    ts.visitNode(this.sourceFile, visitor, ts.isPropertyAssignment);
    return propertyAssignment;
  }

  /**
   * Looks up an object literal expression in the AST with a specific property assignment.
   * @param name The name of the property to look for.
   * @param value The value of the property to look for.
   */
  public findObjectLiteralWithProperty(
    name: string,
    value: string
  ): ts.ObjectLiteralExpression | undefined {
    let objectLiteral: ts.ObjectLiteralExpression | undefined;
    const visitor: ts.Visitor = (node) => {
      if (ts.isObjectLiteralExpression(node)) {
        const property = node.properties.find((property) => {
          if (ts.isPropertyAssignment(property)) {
            return (
              ts.isIdentifier(property.name) &&
              property.name.text === name &&
              ts.isLiteralExpression(property.initializer) &&
              property.initializer.text === value
            );
          }
        });
        if (property) {
          return (objectLiteral = node);
        }
        return ts.visitEachChild(node, visitor, undefined);
      }
    };
    ts.visitNode(this.sourceFile, visitor, ts.isObjectLiteralExpression);
    return objectLiteral;
  }

  /**
   * Searches the AST for a variable declaration with the given name and type.
   * @param name The name of the variable to look for.
   * @param type The type of the variable to look for.
   * @returns The variable declaration if found, otherwise `undefined`.
   */
  public findVariableDeclaration(
    name: string,
    type: string
  ): ts.VariableDeclaration | undefined {
    let declaration;
    ts.forEachChild(this.sourceFile, (node) => {
      if (
        ts.isVariableDeclaration(node) &&
        node.name.getText() === name &&
        node.type?.getText() === type
      ) {
        declaration = node;
      } else if (ts.isVariableStatement(node)) {
        declaration = node.declarationList.declarations.find(
          (declaration) =>
            declaration.name.getText() === name &&
            declaration.type?.getText() === type
        );
      }
      // handle variable declaration lists (ts.isVariableDeclarationList)?
      // const a = 5, b = 6...;
    });

    return declaration;
  }

  /**
   * Traverses the {@link flatNodeRelations} up to find a node that satisfies the given condition.
   * @param node The starting point of the search.
   * @param condition The condition to satisfy.
   * @returns The node's ancestor that satisfies the condition, `undefined` if none is found.
   */
  public findNodeAncestor(
    node: ts.Node,
    condition: (node: ts.Node) => boolean
  ): ts.Node | undefined {
    if (condition(node)) {
      return node;
    }

    const parent = this.flatNodeRelations.get(node);
    if (parent) {
      return this.findNodeAncestor(parent, condition);
    }

    // no parent node satisfies the condition
    return undefined;
  }

  /**
   * Creates a request that will resolve during {@link finalize} for a new property assignment in an object literal expression.
   * @param visitCondition The condition by which the object literal expression is found.
   * @param propertyAssignment The property that will be added.
   */
  public requestNewMemberInObjectLiteral(
    visitCondition: (node: ts.ObjectLiteralExpression) => boolean,
    propertyAssignment: PropertyAssignment
  ): void;
  /**
   * Creates a request that will resolve during {@link finalize} for a new property assignment in an object literal expression.
   * @param visitCondition The condition by which the object literal expression is found.
   * @param propertyName The name of the property that will be added.
   * @param propertyValue The value of the property that will be added.
   * @param multiline Whether the object literal should be multiline.
   */
  public requestNewMemberInObjectLiteral(
    visitCondition: (node: ts.ObjectLiteralExpression) => boolean,
    propertyName: string,
    propertyValue: ts.Expression,
    multiline?: boolean
  ): void;
  public requestNewMemberInObjectLiteral(
    visitCondition: (node: ts.ObjectLiteralExpression) => boolean,
    propertyNameOrAssignment: string | PropertyAssignment,
    propertyValue?: ts.Expression,
    multiline?: boolean
  ): void {
    let newProperty: ts.PropertyAssignment;
    if (propertyNameOrAssignment instanceof Object) {
      newProperty = ts.factory.createPropertyAssignment(
        propertyNameOrAssignment.name,
        propertyNameOrAssignment.value
      );
    } else if (propertyValue && typeof propertyValue !== 'string') {
      newProperty = ts.factory.createPropertyAssignment(
        ts.factory.createIdentifier(propertyNameOrAssignment as string),
        propertyValue
      );
    } else {
      throw new Error('Must provide property value.');
    }

    const transformer: ts.TransformerFactory<ts.SourceFile> = <
      T extends ts.Node
    >(
      context: ts.TransformationContext
    ) => {
      return (rootNode: T) => {
        const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
          if (ts.isObjectLiteralExpression(node) && visitCondition(node)) {
            const existingProperty = node.properties.find(
              (property) =>
                ts.isPropertyAssignment(property) &&
                ts.isIdentifier(property.name) &&
                ts.isIdentifier(newProperty.name) &&
                property.name.text === newProperty.name.text
            );
            if (!existingProperty) {
              return context.factory.updateObjectLiteralExpression(node, [
                ...node.properties,
                newProperty,
              ]);
            }

            /**
             * TODO: Consider supporting also:
             * 1. ts.SpreadAssignment - { ...x }
             * 2. ts.SpreadElement - [ ...x ]
             * 3. ts.JsxSpreadAttribute - <Component {...props} />
             */
            if (
              !ts.isPropertyAssignment(existingProperty) &&
              !ts.isShorthandPropertyAssignment(existingProperty)
            ) {
              // narrow down to ts.PropertyAssignment | ts.ShorthandPropertyAssignment
              return ts.visitEachChild(node, visitor, context);
            }

            const existingPropInitializer = ts.isPropertyAssignment(
              existingProperty
            )
              ? existingProperty.initializer
              : existingProperty.objectAssignmentInitializer;
            if (ts.isArrayLiteralExpression(existingPropInitializer)) {
              return this.updatePropertyAssignmentWithArrayLiteral(
                newProperty,
                existingProperty,
                context,
                node,
                multiline
              );
            }

            return this.updatePropertyAssignmentWithIdentifier(
              newProperty,
              existingProperty,
              context,
              node
            );
          }
          return ts.visitEachChild(node, visitor, context);
        };
        return ts.visitNode(rootNode, visitor, ts.isSourceFile);
      };
    };

    this.requestChange(
      ChangeType.NewNode,
      transformer,
      SyntaxKind.PropertyAssignment,
      newProperty
    );
  }

  /**
   * Creates a request that will resolve during {@link finalize} for a new property assignment that has a JSX value.
   * The member is added in an object literal expression.
   * @param visitCondition The condition by which the object literal expression is found.
   * @param propertyName The name of the property that will be added.
   * @param propertyValue The value of the property that will be added.
   * @param jsxAttributes The JSX attributes to add to the JSX element.
   *
   * @remarks Creates a property assignment of the form `{ propertyName: <propertyValue /> }` in the object literal.
   */
  public requestJsxMemberInObjectLiteral(
    visitCondition: (node: ts.ObjectLiteralExpression) => boolean,
    propertyName: string,
    propertyValue: string,
    jsxAttributes?: ts.JsxAttributes
  ): void {
    const jsxElement = ts.factory.createJsxSelfClosingElement(
      ts.factory.createIdentifier(propertyValue),
      undefined, // type arguments
      jsxAttributes
    );

    this.requestNewMemberInObjectLiteral(
      visitCondition,
      propertyName,
      jsxElement
    );
  }

  /**
   * Creates a request that will resolve during {@link finalize} for an update to the value of a member in an object literal expression.
   * @param visitCondition The condition by which the object literal expression is found.
   * @param targetMember The member that will be updated. The value should be the new value to set.
   */
  public requestUpdateForObjectLiteralMember(
    visitCondition: (node: ts.ObjectLiteralExpression) => boolean,
    targetMember: PropertyAssignment
  ): void {
    const transformer: ts.TransformerFactory<ts.SourceFile> = <
      T extends ts.Node
    >(
      context: ts.TransformationContext
    ) => {
      return (rootNode: T) => {
        const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
          if (ts.isObjectLiteralExpression(node) && visitCondition(node)) {
            const newProperties = node.properties.map((property) => {
              const isPropertyAssignment = ts.isPropertyAssignment(property);
              if (
                isPropertyAssignment &&
                ts.isIdentifier(property.name) &&
                property.name.text === targetMember.name
              ) {
                return context.factory.updatePropertyAssignment(
                  property,
                  property.name,
                  targetMember.value
                );
              }
              return property;
            });

            return context.factory.updateObjectLiteralExpression(
              node,
              newProperties
            );
          }
          return ts.visitEachChild(node, visitor, context);
        };
        return ts.visitNode(rootNode, visitor, ts.isSourceFile);
      };
    };

    this.requestChange(
      ChangeType.NodeUpdate,
      transformer,
      SyntaxKind.PropertyAssignment,
      ts.factory.createPropertyAssignment(targetMember.name, targetMember.value)
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
    if (properties.every(this.isPropertyAssignment)) {
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
   * Creates a request that will resolve during {@link finalize} which adds a new element to an array literal expression.
   * @param visitCondition The condition by which the array literal expression is found.
   * @param elements The elements that will be added to the array literal.
   * @param prepend If the elements should be added at the beginning of the array.
   * @anchorElement The element to anchor the new elements to.
   * @multiline Whether the array literal should be multiline.
   * @remarks The `anchorElement` must match the type of the elements in the collection.
   */
  public requestNewMembersInArrayLiteral(
    visitCondition: (node: ts.ArrayLiteralExpression) => boolean,
    elements: ts.Expression[],
    prepend?: boolean,
    anchorElement?: ts.Expression | PropertyAssignment,
    multiline?: boolean
  ): void;
  /**
   * Creates a request that will resolve during {@link finalize} which adds a new element to an array literal expression.
   * @param visitCondition The condition by which the array literal expression is found.
   * @param elements The elements that will be added to the array literal
   * @prepend If the elements should be added at the beginning of the array.
   * @anchorElement The element to anchor the new elements to.
   * @multiline Whether the array literal should be multiline.
   * @remarks The `anchorElement` must match the type of the elements in the collection.
   */
  public requestNewMembersInArrayLiteral(
    visitCondition: (node: ts.ArrayLiteralExpression) => boolean,
    elements: PropertyAssignment[],
    prepend?: boolean,
    anchorElement?: ts.Expression | PropertyAssignment,
    multiline?: boolean
  ): void;
  public requestNewMembersInArrayLiteral(
    visitCondition: (node: ts.ArrayLiteralExpression) => boolean,
    expressionOrPropertyAssignment: ts.Expression[] | PropertyAssignment[],
    prepend: boolean = false,
    anchorElement?: ts.StringLiteral | ts.NumericLiteral | PropertyAssignment,
    multiline: boolean = false
  ): void {
    let elements: ts.Expression[] | PropertyAssignment[];
    const isExpression = expressionOrPropertyAssignment.every((e) =>
      ts.isExpression(e as ts.Node)
    );
    if (isExpression) {
      elements = expressionOrPropertyAssignment as ts.Expression[];
    } else {
      elements = (expressionOrPropertyAssignment as PropertyAssignment[]).map(
        (property) => this.createObjectLiteralExpression([property], multiline)
      );
    }
    const transformer: ts.TransformerFactory<ts.SourceFile> = <
      T extends ts.Node
    >(
      context: ts.TransformationContext
    ) => {
      return (rootNode: T) => {
        const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
          let anchor: ts.Expression | undefined;
          if (ts.isArrayLiteralExpression(node) && visitCondition(node)) {
            if (anchorElement) {
              anchor = Array.from(node.elements).find((e) => {
                if (ts.isStringLiteral(e) || ts.isNumericLiteral(e)) {
                  // make sure the entry is a string or numeric literal
                  // and that its text matches the anchor element's text
                  return (
                    e.text ===
                    (anchorElement as ts.StringLiteral | ts.NumericLiteral).text
                  );
                } else if (
                  this.isPropertyAssignment(anchorElement) &&
                  ts.isObjectLiteralExpression(e)
                ) {
                  // make sure the entry is a property assignment
                  // and that its name and value match the anchor element's
                  return e.properties.some(
                    (p) =>
                      ts.isPropertyAssignment(p) &&
                      ts.isIdentifier(p.name) &&
                      p.name.text === anchorElement.name &&
                      ((ts.isStringLiteral(p.initializer) &&
                        ts.isStringLiteral(anchorElement.value)) ||
                        (ts.isNumericLiteral(p.initializer) &&
                          ts.isNumericLiteral(anchorElement.value))) &&
                      p.initializer.text === anchorElement.value.text
                  );
                }
                return false;
              });
            }

            if (anchor) {
              let structure!: ts.Expression[];
              if (prepend) {
                structure = node.elements
                  .slice(0, node.elements.indexOf(anchor))
                  .concat(elements)
                  .concat(node.elements.slice(node.elements.indexOf(anchor)));
              } else {
                structure = node.elements
                  .slice(0, node.elements.indexOf(anchor) + 1)
                  .concat(elements)
                  .concat(
                    node.elements.slice(node.elements.indexOf(anchor) + 1)
                  );
              }

              return context.factory.updateArrayLiteralExpression(
                node,
                structure
              );
            }

            if (prepend) {
              return context.factory.updateArrayLiteralExpression(node, [
                ...elements,
                ...node.elements,
              ]);
            }
            return context.factory.updateArrayLiteralExpression(node, [
              ...node.elements,
              ...elements,
            ]);
          }
          return ts.visitEachChild(node, visitor, context);
        };
        return ts.visitNode(rootNode, visitor, ts.isSourceFile);
      };
    };

    this.requestChange(
      ChangeType.NewNode,
      transformer,
      isExpression ? SyntaxKind.Expression : SyntaxKind.PropertyAssignment,
      ts.factory.createNodeArray(elements)
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
   * Finds an element in an array literal expression that satisfies the given condition.
   * @param visitCondition The condition by which the element is found.
   */
  public findElementInArrayLiteral(
    visitCondition: (node: ts.Expression) => boolean
  ): ts.Expression | undefined {
    let target: ts.Expression | undefined;
    const visitor: ts.Visitor = (node) => {
      if (ts.isArrayLiteralExpression(node)) {
        node.elements.find((element) => {
          if (visitCondition(element)) {
            target = element;
          }
        });
        if (target) {
          return target;
        }
      }

      return ts.visitEachChild(node, visitor, undefined);
    };

    ts.visitNode(this.sourceFile, visitor, ts.isExpression);
    return target;
  }

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
    if (isSideEffects) {
      // create a side effects declaration of the form `import "my-module"`
      return ts.factory.createImportDeclaration(
        undefined, // modifiers
        undefined, // import clause
        ts.factory.createStringLiteral(
          importDeclarationMeta.moduleName,
          this.formatSettings?.singleQuotes
        ) // module specifier
      );
    }

    const identifiers = Array.isArray(importDeclarationMeta.identifiers)
      ? importDeclarationMeta.identifiers
      : [importDeclarationMeta.identifiers];
    let importClause: ts.ImportClause;
    // isTypeOnly on the import clause is set to false because we don't import types atm
    // might change it later if we need sth like - import type { X } from "module"
    // TODO: consider adding functionality for namespaced imports of the form - import * as X from "module"
    if (isDefault) {
      importClause = ts.factory.createImportClause(
        false, // is type only
        ts.factory.createIdentifier(identifiers[0].name) as ts.Identifier, // name - import X from "module"
        undefined // named bindings
      );
    } else {
      const namedImport = ts.factory.createNamedImports(
        identifiers.map(this.createImportSpecifierWithOptionalAlias)
      );
      importClause = ts.factory.createImportClause(
        false, // is type only
        undefined, // name
        namedImport // named bindings - import { X, Y... } from "module"
      );
    }

    const importDeclaration = ts.factory.createImportDeclaration(
      undefined, // modifiers
      importClause,
      ts.factory.createStringLiteral(
        importDeclarationMeta.moduleName,
        this.formatSettings?.singleQuotes
      ) // module specifier
    );

    return importDeclaration;
  }

  /**
   * Checks if an import declaration's identifier or alias would collide with an existing one.
   * @param identifier The identifier to check for collisions.
   * @param moduleName The module that the import is for, used for side effects imports.
   * @param isSideEffects If the import is strictly a side effects import.
   * @param sourceFile The source file to check for collisions.
   */
  public importDeclarationCollides(
    identifier: Identifier,
    moduleName?: string,
    isSideEffects: boolean = false,
    sourceFile: ts.SourceFile = this.sourceFile
  ): boolean {
    // identifiers are gathered from all import declarations
    // and are kept as separate entries in the map
    const allImportedIdentifiers = this.gatherImportDeclarations([
      ...sourceFile.statements,
    ]);

    if (isSideEffects && moduleName) {
      return Array.from(allImportedIdentifiers.values()).some(
        (importMeta) => importMeta.moduleName === moduleName
      );
    }

    const collidesWithExisting = Array.from(
      allImportedIdentifiers.values()
    ).some((importMeta) => {
      let collides = false;
      if (Array.isArray(importMeta.identifiers)) {
        return collides;
      }

      if (identifier.name === importMeta.identifiers.name) {
        collides = true;
      }

      if (identifier.alias) {
        return (
          identifier.alias === importMeta.identifiers.name ||
          identifier.alias === importMeta.identifiers.alias
        );
      }

      return collides;
    });

    return collidesWithExisting;
  }

  /**
   * Creates a request that will resolve during {@link finalize} which adds an import declaration to the source file.
   * @param importDeclarationMeta Metadata for the new import declaration.
   * @param isDefault Whether the import is a default import.
   * @remarks If `isDefault` is `true`, the first identifier will be used and
   * the import will be a default import of the form `import MyClass from "my-module"`.
   * @remarks If `isSideEffects` is `true`, all other options are ignored
   * and the import will be a side effects import of the form `import "my-module"`.
   * @reference {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#description|MDN}
   */
  public requestNewImportDeclaration(
    importDeclarationMeta: ImportDeclarationMeta,
    isDefault: boolean = false,
    isSideEffects: boolean = false
  ): void {
    const transformer: ts.TransformerFactory<ts.SourceFile> = <
      T extends ts.Node
    >(
      context: ts.TransformationContext
    ) => {
      return (rootNode: T) => {
        const sourceFile = rootNode.getSourceFile();
        let newStatements = [...sourceFile.statements];
        let importDeclarationUpdated = false;

        let identifiers = Array.isArray(importDeclarationMeta.identifiers)
          ? importDeclarationMeta.identifiers
          : [importDeclarationMeta.identifiers];

        // loop over the identifiers and filter out all that would collide with an existing import
        importDeclarationMeta.identifiers = identifiers = identifiers.filter(
          (identifier) => {
            return !this.importDeclarationCollides(
              identifier,
              importDeclarationMeta.moduleName,
              isSideEffects,
              sourceFile
            );
          }
        );

        // loop over the statements to find and update the necessary import declaration
        for (let i = 0; i < newStatements.length; i++) {
          const statement = newStatements[i];
          if (
            ts.isImportDeclaration(statement) &&
            this.getModuleSpecifierName(statement.moduleSpecifier) ===
              importDeclarationMeta.moduleName
          ) {
            // if there are new identifiers to add to an existing import declaration, update it
            const namedBindings = statement.importClause?.namedBindings;
            if (
              namedBindings &&
              ts.isNamedImports(namedBindings) &&
              identifiers.length > 0
            ) {
              importDeclarationUpdated = true;
              const updatedImportSpecifiers: ts.ImportSpecifier[] = [
                ...namedBindings.elements,
                ...identifiers.map(this.createImportSpecifierWithOptionalAlias),
              ];
              const updatedNamedImports: ts.NamedImports =
                context.factory.updateNamedImports(
                  namedBindings,
                  updatedImportSpecifiers
                );
              const updatedImportClause: ts.ImportClause =
                context.factory.updateImportClause(
                  statement.importClause,
                  false,
                  statement.importClause.name,
                  updatedNamedImports
                );

              newStatements[i] = context.factory.updateImportDeclaration(
                statement,
                statement.modifiers,
                updatedImportClause,
                statement.moduleSpecifier,
                statement.attributes
              );
            }
            // exit the loop after modifying the existing import declaration
            break;
          }
        }

        // if no import declaration was updated and there are identifiers to add,
        // create a new import declaration with the identifiers
        if (!importDeclarationUpdated && identifiers.length > 0) {
          const newImportDeclaration = this.createImportDeclaration(
            importDeclarationMeta,
            isDefault,
            isSideEffects
          );
          newStatements = [
            ...sourceFile.statements.filter(ts.isImportDeclaration),
            newImportDeclaration,
            ...sourceFile.statements.filter((s) => !ts.isImportDeclaration(s)),
          ];
        }

        return ts.factory.updateSourceFile(sourceFile, newStatements);
      };
    };

    const identifiers = Array.isArray(importDeclarationMeta.identifiers)
      ? ts.factory.createNodeArray(
          importDeclarationMeta.identifiers.map((i) =>
            ts.factory.createIdentifier(i.name || i.alias)
          )
        )
      : ts.factory.createIdentifier(
          importDeclarationMeta.identifiers.name ||
            importDeclarationMeta.identifiers.alias
        );

    this.requestChange(
      ChangeType.NewNode,
      transformer,
      SyntaxKind.ImportDeclaration,
      identifiers
    );
  }

  /**
   * Applies the requested changes to the source file.
   * @remarks Does not mutate the original `ts.SourceFile`. Instead, it creates a new one with the changes applied.
   */
  public applyChanges(): ts.SourceFile {
    let clone = this.sourceFile.getSourceFile();
    for (const [_id, transformer] of this.transformations) {
      clone = ts.transform(
        clone,
        [transformer.transformerFactory],
        this.compilerOptions
      ).transformed[0];

      this._flatNodeRelations = this.createNodeRelationsMap(clone);
    }

    this.transformations.clear();
    return clone;
  }

  /**
   * Applies all transformations, parses the AST and returns the resulting source code.
   * @remarks This method should be called after all modifications have been made to the AST.
   * If a {@link formatter} is present, it will be used to format the source code.
   */
  public finalize(): string {
    const finalSource = this.applyChanges();
    if (this.formatter) {
      return this.formatter.applyFormatting(finalSource);
    }

    return this.printer.printFile(finalSource);
  }

  /**
   * Determines if a given object is an instance of `PropertyAssignment`.
   * @param target The object to check.
   */
  public isPropertyAssignment(target: object): target is PropertyAssignment {
    return (
      target &&
      'name' in target &&
      'value' in target &&
      (ts.isExpression(target.value as any) ||
        ts.isNumericLiteral(target.value as any) ||
        ts.isStringLiteral(target.value as any))
    );
  }

  /**
   * Determines if a given object is an instance of `ts.NodeArray`.
   * @param obj The object to check.
   */
  public isNodeArray(obj: object): obj is ts.NodeArray<ts.Node> {
    // #ref typescript/lib/typescript.js/isNodeArray
    return 'pos' in obj && 'end' in obj && !('kind' in obj);
  }

  /**
   * Requests a change to the source file.
   * @param type The type of change to request.
   * @param transformer The transformer to apply to the source file during finalization.
   * @param syntaxKind The syntax kind of the node to change.
   * @param node The affected node.
   * @param relatedChangeId The ID of the change request that should be applied before this one.
   * @remarks All aggregated changes will be applied during {@link finalize}.
   */
  private requestChange<T extends ts.Node>(
    type: ChangeType,
    transformer: ts.TransformerFactory<ts.SourceFile>,
    syntaxKind: SyntaxKind,
    node?: T | ts.NodeArray<T>
  ): void {
    const id = crypto.randomUUID();
    this.transformations.set(id, {
      id,
      type,
      transformerFactory: transformer,
      syntaxKind,
      node,
    });
  }

  /**
   * Gathers all import declarations and separates them by their unique identifiers.
   * Will assign a template identifier for side effects imports.
   * @param statements The statements to search for import declarations.
   *
   * @remarks Distinguishes between the following import types:
   *
   * `import { X, Y... } from "module"` - a named import with an import clause that has named bindings - `{ X, Y... }`
   *
   * `import X from "module"` - a default import, it has an import clause without named bindings, it only has a name - `X`
   *
   * `import "module"` - a side effects import, it has no import clause
   *
   * It considers only top-level imports as valid, any imports that are not at the top of the file will be ignored.
   */
  private gatherImportDeclarations(
    statements: ts.Statement[]
  ): Map<string, ImportDeclarationMeta> {
    const allImportedIdentifiers = new Map<string, ImportDeclarationMeta>();
    let i = 0;
    for (const statement of statements) {
      if (!ts.isImportDeclaration(statement)) {
        // import declarations are at the top of the file,
        // so we can safely break when we reach a node that is not an import declaration
        break;
      }

      if (!statement.importClause) {
        // a side effects import declaration
        const sideEffectsName = `${SIDE_EFFECTS_IMPORT_TEMPLATE_NAME}_${++i}`;
        allImportedIdentifiers.set(sideEffectsName, {
          identifiers: { name: sideEffectsName },
          moduleName: this.getModuleSpecifierName(statement.moduleSpecifier),
        });
        continue;
      }

      const importClause = statement.importClause;
      if (!importClause.namedBindings) {
        // a default import declaration
        allImportedIdentifiers.set(importClause.name.text, {
          identifiers: { name: importClause.name.text },
          moduleName: this.getModuleSpecifierName(statement.moduleSpecifier),
        });
        continue;
      }

      const namedBindings = importClause.namedBindings;
      if (namedBindings && ts.isNamedImports(namedBindings)) {
        // a named import declaration with a list of named bindings
        for (const element of namedBindings.elements) {
          const identifierName = element.propertyName
            ? element.propertyName.text
            : element.name.text;
          const alias = element.propertyName ? element.name.text : undefined;
          allImportedIdentifiers.set(identifierName, {
            identifiers: {
              name: identifierName,
              alias,
            },
            moduleName: this.getModuleSpecifierName(statement.moduleSpecifier),
          });
        }
      }
    }

    return allImportedIdentifiers;
  }

  /**
   * Creates an import specifier with an optional alias.
   * @param identifier The identifier to import.
   */
  private createImportSpecifierWithOptionalAlias(
    identifier: Identifier
  ): ts.ImportSpecifier {
    // the last arg of `createImportSpecifier` is required - this is where the alias goes
    // the second arg is optional, this is where the name goes, hence the following
    const aliasOrName = identifier.alias || identifier.name;
    return ts.factory.createImportSpecifier(
      false, // is type only
      identifier.alias
        ? ts.factory.createIdentifier(identifier.name)
        : undefined,
      ts.factory.createIdentifier(aliasOrName)
    );
  }

  /**
   * Get a module specifier's node text representation.
   * @param moduleSpecifier the specifier to get the name of.
   * @remarks This method is used to get the name of a module specifier in an import declaration.
   *  It should always be a string literal.
   */
  private getModuleSpecifierName(moduleSpecifier: ts.Expression): string {
    if (ts.isStringLiteral(moduleSpecifier)) {
      return moduleSpecifier.text;
    }

    // a module specifier should always be a string literal, so this should never be reached
    throw new Error('Invalid module specifier.');
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

  /**
   * Creates a flat map of nodes with their parent nodes.
   * @param rootNode The node to create a map for.
   */
  private createNodeRelationsMap(rootNode: ts.Node): Map<ts.Node, ts.Node> {
    const flatNodeRelations = new Map<ts.Node, ts.Node>();
    function visit(node: ts.Node, parent: ts.Node | null) {
      if (parent) {
        flatNodeRelations.set(node, parent);
      }
      ts.forEachChild(node, (child) => visit(child, node));
    }

    visit(rootNode, null);
    return flatNodeRelations;
  }

  /**
   * Updates a property assignment with an identifier node, takes the form of `member: <some-value>`.
   * @param newProperty The new property assignment to update with.
   * @param existingProperty The existing property assignment to update.
   * @param context The transformation context.
   * @param node The object literal expression node.
   */
  private updatePropertyAssignmentWithIdentifier(
    newProperty: ts.PropertyAssignment | ts.ShorthandPropertyAssignment,
    existingProperty: ts.PropertyAssignment | ts.ShorthandPropertyAssignment,
    context: ts.TransformationContext,
    node: ts.ObjectLiteralExpression
  ) {
    const newPropInitializer = ts.isPropertyAssignment(newProperty)
      ? newProperty.initializer
      : newProperty.objectAssignmentInitializer;

    const updatedProperty = ts.isPropertyAssignment(existingProperty)
      ? context.factory.updatePropertyAssignment(
          existingProperty,
          existingProperty.name,
          newPropInitializer
        )
      : context.factory.updateShorthandPropertyAssignment(
          existingProperty,
          existingProperty.name,
          newPropInitializer
        );
    const structure = Array.from(node.properties);
    const targetIndex = structure.indexOf(existingProperty);
    if (targetIndex > -1) {
      // attempt to modify the property assignment and preserve the order
      structure[targetIndex] = updatedProperty;
      return context.factory.updateObjectLiteralExpression(node, structure);
    }
    // append the property assignment at the end
    return context.factory.updateObjectLiteralExpression(node, [
      ...node.properties.filter((p) => p !== existingProperty),
      updatedProperty,
    ]);
  }

  /**
   * Updates a property assignment with an array literal node, takes the form of `member: [<some-value>, <some-value>, ...]`.
   * @param newProperty The new property assignment to update with.
   * @param existingProperty The existing property assignment to update.
   * @param context The transformation context.
   * @param node The object literal expression node.
   * @param multiline Whether the array literal should be multiline.
   */
  private updatePropertyAssignmentWithArrayLiteral(
    newProperty: ts.PropertyAssignment | ts.ShorthandPropertyAssignment,
    existingProperty: ts.PropertyAssignment | ts.ShorthandPropertyAssignment,
    context: ts.TransformationContext,
    node: ts.ObjectLiteralExpression,
    multiline: boolean
  ) {
    const existingPropInitializer = ts.isPropertyAssignment(existingProperty)
      ? existingProperty.initializer
      : existingProperty.objectAssignmentInitializer;
    const newPropInitializer = ts.isPropertyAssignment(newProperty)
      ? newProperty.initializer
      : newProperty.objectAssignmentInitializer;

    const initializerAsArray =
      existingPropInitializer as ts.ArrayLiteralExpression;
    const elements = [...initializerAsArray.elements];
    const newElements = ts.isArrayLiteralExpression(newPropInitializer)
      ? [...newPropInitializer.elements]
      : [newPropInitializer];
    const uniqueElements = this._expressionCollector.collectUniqueExpressions([
      ...elements,
      ...newElements,
    ]);

    const valueExpression = context.factory.createArrayLiteralExpression(
      uniqueElements,
      multiline
    );
    const updatedProperty = ts.isPropertyAssignment(existingProperty)
      ? context.factory.updatePropertyAssignment(
          existingProperty,
          existingProperty.name,
          valueExpression
        )
      : context.factory.updateShorthandPropertyAssignment(
          existingProperty,
          existingProperty.name,
          valueExpression
        );

    const structure = Array.from(node.properties);
    const targetIndex = structure.indexOf(existingProperty);
    if (targetIndex > -1) {
      // attempt to modify the property assignment and preserve the order
      structure[targetIndex] = updatedProperty;
      return context.factory.updateObjectLiteralExpression(node, structure);
    }
    // append the property assignment at the end
    return context.factory.updateObjectLiteralExpression(node, [
      ...node.properties.filter((p) => p !== existingProperty),
      updatedProperty,
    ]);
  }
}
