import * as ts from 'typescript';
import {
  KeyValuePair,
  FormattingService,
  PropertyAssignment,
  Identifier,
  ImportDeclarationMeta,
} from '../types';

export class TypeScriptASTTransformer {
  private _printer: ts.Printer | undefined;
  private _defaultCompilerOptions: ts.CompilerOptions = {
    pretty: true,
  };

  /**
   * Create a new source update instance for the given source file.
   * @param sourceFile The source file to update.
   * @param formatter The formatting service to use when printing the source file.
   * @param printerOptions Options to use when printing the source file.
   * @param customCompilerOptions Custom compiler options to use when transforming the source file.
   */
  constructor(
    public sourceFile: ts.SourceFile,
    protected readonly formatter?: FormattingService,
    protected readonly printerOptions?: ts.PrinterOptions,
    protected readonly customCompilerOptions?: ts.CompilerOptions
  ) {}

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
   * Look up a property assignment in the AST.
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
   * Searches the AST for a variable declaration with the given name and type.
   * @param name The name of the variable to look for.
   * @param type The type of the variable to look for.
   * @returns The variable declaration if found, otherwise `undefined`.
   */
  public findVariableDeclaration(
    name: string,
    type: string
  ): ts.VariableDeclaration | undefined {
    this.flush();
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
   * Traverses the AST up to find a node that satisfies the given condition.
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

    if (node.parent) {
      return this.findNodeAncestor(node.parent, condition);
    }

    // no parent node satisfies the condition
    return undefined;
  }

  /**
   * Adds a new property assignment to an object literal expression.
   * @param visitCondition The condition by which the object literal expression is found.
   * @param propertyAssignment The property that will be added.
   */
  public addMemberToObjectLiteral(
    visitCondition: (node: ts.ObjectLiteralExpression) => boolean,
    propertyAssignment: PropertyAssignment
  ): ts.SourceFile;
  /**
   * Adds a new property assignment to an object literal expression.
   * @param visitCondition The condition by which the object literal expression is found.
   * @param propertyName The name of the property that will be added.
   * @param propertyValue The value of the property that will be added.
   */
  public addMemberToObjectLiteral(
    visitCondition: (node: ts.ObjectLiteralExpression) => boolean,
    propertyName: string,
    propertyValue: ts.Expression
  ): ts.SourceFile;
  public addMemberToObjectLiteral(
    visitCondition: (node: ts.ObjectLiteralExpression) => boolean,
    propertyNameOrAssignment: string | PropertyAssignment,
    propertyValue?: ts.Expression
  ): ts.SourceFile {
    let newProperty: ts.PropertyAssignment;
    if (propertyNameOrAssignment instanceof Object) {
      newProperty = ts.factory.createPropertyAssignment(
        propertyNameOrAssignment.name,
        propertyNameOrAssignment.value
      );
    } else if (propertyValue) {
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
            return context.factory.updateObjectLiteralExpression(node, [
              ...node.properties,
              newProperty,
            ]);
          }
          return ts.visitEachChild(node, visitor, context);
        };
        return ts.visitNode(rootNode, visitor, ts.isSourceFile);
      };
    };

    this.sourceFile = ts.transform(
      this.sourceFile,
      [transformer],
      this.compilerOptions
    ).transformed[0];
    return this.flush();
  }

  /**
   * Update the value of a member in an object literal expression.
   * @param visitCondition The condition by which the object literal expression is found.
   * @param targetMember The member that will be updated. The value should be the new value to set.
   * @returns The mutated AST.
   * @remarks This method will not update nodes that were inserted through the compiler API unless the source file is recreated, see {@link flush}.
   */
  public updateObjectLiteralMember(
    visitCondition: (node: ts.ObjectLiteralExpression) => boolean,
    targetMember: PropertyAssignment
  ): ts.SourceFile {
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
                (property.pos < 0 || property.end < 0)
              ) {
                // nodes inserted through the compiler API will have pos & end < 0
                // we cannot update them until the source file is flushed (read anew and the nodes are re-created)
                // since pos & end are set during initial parsing and are readonly
                return property;
              }
              if (
                isPropertyAssignment &&
                property.name.getText() === targetMember.name
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

    this.sourceFile = ts.transform(
      this.sourceFile,
      [transformer],
      this.compilerOptions
    ).transformed[0];
    return this.flush();
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
            transform ? transform(value) : ts.factory.createStringLiteral(value)
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
   * Adds a new element to a given array literal expression.
   * @param visitCondition The condition by which the array literal expression is found.
   * @param elements The elements that will be added to the array literal.
   * @param prepend If the elements should be added at the beginning of the array.
   * @anchorElement The element to anchor the new elements to.
   * @remarks The `anchorElement` must match the type of the elements in the collection.
   */
  public addMembersToArrayLiteral(
    visitCondition: (node: ts.ArrayLiteralExpression) => boolean,
    elements: ts.Expression[],
    prepend?: boolean,
    anchorElement?: ts.Expression | PropertyAssignment
  ): ts.SourceFile;
  /**
   * Adds a new element to a given array literal expression.
   * @param visitCondition The condition by which the array literal expression is found.
   * @param propertyAssignment The elements that will be added to the array literal
   * @prepend If the elements should be added at the beginning of the array.
   * @anchorElement The element to anchor the new elements to.
   * @remarks The `anchorElement` must match the type of the elements in the collection.
   */
  public addMembersToArrayLiteral(
    visitCondition: (node: ts.ArrayLiteralExpression) => boolean,
    propertyAssignment: PropertyAssignment[],
    prepend?: boolean,
    anchorElement?: ts.Expression | PropertyAssignment
  ): ts.SourceFile;
  public addMembersToArrayLiteral(
    visitCondition: (node: ts.ArrayLiteralExpression) => boolean,
    expressionOrPropertyAssignment: ts.Expression[] | PropertyAssignment[],
    prepend: boolean = false,
    anchorElement?: ts.StringLiteral | ts.NumericLiteral | PropertyAssignment
  ): ts.SourceFile {
    let elements: ts.Expression[] | PropertyAssignment[];
    if (
      expressionOrPropertyAssignment.every((e) => ts.isExpression(e as ts.Node))
    ) {
      elements = expressionOrPropertyAssignment as ts.Expression[];
    } else {
      elements = (expressionOrPropertyAssignment as PropertyAssignment[]).map(
        (property) => this.createObjectLiteralExpression([property])
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
                      p.name.getText() === anchorElement.name &&
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

    this.sourceFile = ts.transform(
      this.sourceFile,
      [transformer],
      this.compilerOptions
    ).transformed[0];
    return this.flush();
  }

  /**
   * Create an array literal expression with the given elements.
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
   * Creates a `ts.Expression` for an identifier with a method call.
   * @param x Identifier text.
   * @param call Method to call, creating `x.call()`.
   * @param typeArgs Type arguments for the call, translates to type arguments for generic methods `myMethod<T>`.
   * @param args Arguments for the call, translates to arguments for the method `myMethod(arg1, arg2)`.
   * @remarks Create `typeArgs` with methods like `ts.factory.createXXXTypeNode`.
   *
   * ```
   * const typeArg = ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
   * const arg = ts.factory.createNumericLiteral('5');
   * const callExpression = update.createCallExpression(
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
    x: string,
    call: string,
    typeArgs?: ts.TypeNode[],
    args?: ts.Expression[]
  ): ts.CallExpression {
    return ts.factory.createCallExpression(
      ts.factory.createPropertyAccessExpression(
        ts.factory.createIdentifier(x),
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
   * @returns A named import declaration of the form `import { MyClass } from "my-module"`.
   * @remarks If `isDefault` is `true`, the first element of `identifiers` will be used and
   * the import will be a default import of the form `import MyClass from "my-module"`.
   */
  public createImportDeclaration(
    importDeclarationMeta: ImportDeclarationMeta,
    isDefault: boolean = false
  ): ts.ImportDeclaration {
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
      ts.factory.createStringLiteral(importDeclarationMeta.moduleName) // module specifier
    );

    return importDeclaration;
  }

  /**
   * Checks if an import declaration's identifier or alias would collide with an existing one.
   * @param identifier The identifier to check for collisions.
   */
  public importDeclarationCollides(identifier: Identifier): boolean {
    const allImportedIdentifiers = this.findImportedIdentifiers([
      ...this.sourceFile.statements,
    ]);

    // identifiers are gathered from all import declarations
    // and are kept as separate entries in the map
    return Array.from(allImportedIdentifiers.values()).some(
      (importStatement) =>
        !Array.isArray(importStatement.identifiers) &&
        (importStatement.identifiers.name === identifier.name ||
          (importStatement.identifiers.alias &&
            identifier.alias &&
            importStatement.identifiers.alias === identifier.alias))
    );
  }

  /**
   * Adds an import declaration to the source file.
   * @param importDeclarationMeta Metadata for the new import declaration.
   * @param isDefault Whether the import is a default import.
   * @remarks If `isDefault` is `true`, the first identifier will be used and
   * the import will be a default import of the form `import MyClass from "my-module"`.
   */
  public addImportDeclaration(
    importDeclarationMeta: ImportDeclarationMeta,
    isDefault: boolean = false
  ): ts.SourceFile {
    const transformer: ts.TransformerFactory<ts.SourceFile> = (
      context: ts.TransformationContext
    ) => {
      return (file) => {
        let newStatements = [...file.statements];
        let importDeclarationUpdated = false;

        const identifiers = Array.isArray(importDeclarationMeta.identifiers)
          ? importDeclarationMeta.identifiers
          : [importDeclarationMeta.identifiers];
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
        if (
          !importDeclarationUpdated &&
          identifiers.length > 0 &&
          identifiers.length > 0
        ) {
          const newImportDeclaration = this.createImportDeclaration(
            importDeclarationMeta,
            isDefault
          );
          newStatements = [
            ...file.statements.filter(ts.isImportDeclaration),
            newImportDeclaration,
            ...file.statements.filter((s) => !ts.isImportDeclaration(s)),
          ];
        }

        return ts.factory.updateSourceFile(file, newStatements);
      };
    };

    this.sourceFile = ts.transform(this.sourceFile, [
      transformer,
    ]).transformed[0];
    return this.flush();
  }

  /**
   * Parses the AST and returns the resulting source code.
   * @remarks This method should be called after all modifications have been made to the AST.
   * If a formatter is provided, it will be used to format the source code.
   */
  public finalize(): string {
    if (this.formatter) {
      return this.formatter.applyFormatting();
    }

    return this.printer.printFile(this.sourceFile);
  }

  /**
   * Recreates the source file from the AST to make sure any added nodes have `pos` and `end` set.
   * @returns The recreated source file with updated positions for dynamically added nodes.
   */
  public flush(): ts.SourceFile {
    const content = this.printer.printFile(this.sourceFile);
    return (this.sourceFile = ts.createSourceFile(
      this.sourceFile.fileName,
      content,
      ts.ScriptTarget.Latest,
      true
    ));
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
   * Gathers all imported identifiers from all import declarations.
   * @param statements The statements to search for import declarations.
   */
  private findImportedIdentifiers(
    statements: ts.Statement[]
  ): Map<string, ImportDeclarationMeta> {
    const allImportedIdentifiers = new Map<string, ImportDeclarationMeta>();
    for (const statement of statements) {
      if (ts.isImportDeclaration(statement)) {
        const namedBindings = statement.importClause?.namedBindings;
        if (namedBindings && ts.isNamedImports(namedBindings)) {
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
              moduleName: this.getModuleSpecifierName(
                statement.moduleSpecifier
              ),
            });
          }
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
}
