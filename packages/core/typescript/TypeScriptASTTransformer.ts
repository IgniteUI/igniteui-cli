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
import { TypeScriptFormattingService } from './TypeScriptFormattingService';
import {
  createImportDeclaration,
  importDeclarationCollides,
  isPropertyAssignment,
  newArgumentInMethodCallExpressionTransformerFactory,
  newImportDeclarationTransformerFactory,
  newMemberInArrayLiteralTransformerFactory,
  newMemberInObjectLiteralTransformerFactory,
  updateForObjectLiteralMemberTransformerFactory,
} from './TransformerFactories';
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

    const transformerFactory = newMemberInObjectLiteralTransformerFactory(
      newProperty,
      visitCondition,
      multiline,
      this._expressionCollector
    );
    this.requestChange(
      ChangeType.NewNode,
      transformerFactory,
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
    const transformerFactory = updateForObjectLiteralMemberTransformerFactory(
      visitCondition,
      targetMember
    );

    this.requestChange(
      ChangeType.NodeUpdate,
      transformerFactory,
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

    const transformerFactory = newMemberInArrayLiteralTransformerFactory(
      visitCondition,
      elements,
      prepend,
      anchorElement
    );
    this.requestChange(
      ChangeType.NewNode,
      transformerFactory,
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
   * Creates a request that will resolve during {@link finalize} which adds a new argument to a method call expression.
   * @param visitCondition The condition by which the method call expression is found.
   * @param argument The argument to add to the method call.
   * @param position The position in the argument list to add the new argument.
   * @param override Whether to override the argument at the given position.
   * @remarks If `position` is not provided or is less than zero, the argument will be added at the end of the argument list.
   */
  public requestNewArgumentInMethodCallExpression(
    visitCondition: (node: ts.CallExpression) => boolean,
    argument: ts.Expression,
    position: number = -1,
    override: boolean = false
  ): void {
    const transformerFactory =
      newArgumentInMethodCallExpressionTransformerFactory(
        visitCondition,
        argument,
        position,
        override
      );

    this.requestChange(
      ChangeType.NewNode,
      transformerFactory,
      SyntaxKind.Expression,
      argument
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
    return importDeclarationCollides(
      identifier,
      sourceFile,
      moduleName,
      isSideEffects
    );
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
    const transformerFactory = newImportDeclarationTransformerFactory(
      importDeclarationMeta,
      isDefault,
      isSideEffects,
      this.formatSettings?.singleQuotes || false
    );

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
      transformerFactory,
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
   * @remarks This method should be called after all modifications are ready to be applied to the AST.
   * If a {@link formatter} is present, it will be used to format the source code and update the file on the FS.
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
   * @param obj The object to check.
   */
  public isPropertyAssignment(obj: object): obj is PropertyAssignment {
    return isPropertyAssignment(obj);
  }

  /**
   * Requests a change to the source file.
   * @param type The type of change to request.
   * @param transformerFactory The transformer to apply to the source file during finalization.
   * @param syntaxKind The syntax kind of the node to change.
   * @param node The affected node.
   * @param relatedChangeId The ID of the change request that should be applied before this one.
   * @remarks All aggregated changes will be applied during {@link finalize}.
   */
  private requestChange<T extends ts.Node>(
    type: ChangeType,
    transformerFactory: ts.TransformerFactory<ts.SourceFile>,
    syntaxKind: SyntaxKind,
    node?: T | ts.NodeArray<T>
  ): void {
    const id = crypto.randomUUID();
    this.transformations.set(id, {
      id,
      type,
      transformerFactory,
      syntaxKind,
      node,
    });
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
    const visit = (node: ts.Node, parent: ts.Node | null): void => {
      if (parent) {
        flatNodeRelations.set(node, parent);
      }
      ts.forEachChild(node, (child) => visit(child, node));
    };

    visit(rootNode, null);
    return flatNodeRelations;
  }
}
