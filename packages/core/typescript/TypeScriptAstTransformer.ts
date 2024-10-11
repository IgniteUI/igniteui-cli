import * as ts from 'typescript';
import * as crypto from 'crypto';
import {
  FormattingService,
  PropertyAssignment,
  Identifier,
  ImportDeclarationMeta,
  FormatSettings,
  ChangeRequest,
  ChangeType,
  SyntaxKind,
  ObjectLiteralExpressionEditOptions,
  ArrayLiteralExpressionEditOptions,
} from '../types';
import { TypeScriptFormattingService } from './TypeScriptFormattingService';
import {
  importDeclarationCollides,
  newArgumentInMethodCallExpressionTransformerFactory,
  newImportDeclarationTransformerFactory,
  newMemberInArrayLiteralTransformerFactory,
  newMemberInObjectLiteralTransformerFactory,
  sortInArrayLiteralTransformerFactory,
} from './TransformerFactories';
import { TypeScriptExpressionCollector } from './TypeScriptExpressionCollector';
import { TypeScriptNodeFactory } from './TypeScriptNodeFactory';

/**
 * Applies transformations to a source file using TypeScript compiler API.
 */
export class TypeScriptAstTransformer {
  private _defaultCompilerOptions: ts.CompilerOptions;
  private _expressionCollector: TypeScriptExpressionCollector;
  private _factory: TypeScriptNodeFactory;
  private _flatNodeRelations: Map<ts.Node, ts.Node>;
  private _printer: ts.Printer | undefined;

  /**
   * Create a new TypeScriptAstTransformer instance for the given source file.
   * @param sourceFile The source file to update.
   * @param printerOptions Options to use when printing the source file.
   * @param customCompilerOptions Custom compiler options to use when transforming the source file.
   * @param formatSettings Custom formatting settings to apply. If provided, a {@link TypeScriptFormattingService} will be initialized.
   */
  constructor(
    public readonly sourceFile: ts.SourceFile,
    protected readonly printerOptions?: ts.PrinterOptions,
    protected readonly customCompilerOptions?: ts.CompilerOptions,
    private readonly formatSettings?: FormatSettings
  ) {
    if (formatSettings) {
      this.formatter = new TypeScriptFormattingService(
        sourceFile.fileName,
        formatSettings
      );
    }

    this._defaultCompilerOptions = { pretty: true };
    this._expressionCollector = new TypeScriptExpressionCollector();
    this._factory = new TypeScriptNodeFactory(formatSettings);
    this._flatNodeRelations = this.createNodeRelationsMap(this.sourceFile);
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

      return node;
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
   * Creates a request that will resolve during {@link finalize} for a new property assignment in an {@link ts.ObjectLiteralExpression}.
   * @param visitCondition The condition by which the {@link ts.ObjectLiteralExpression} is found.
   * @param propertyAssignment The property that will be added.
   */
  public requestNewMemberInObjectLiteral(
    visitCondition: (node: ts.ObjectLiteralExpression) => boolean,
    propertyAssignment: PropertyAssignment
  ): void;
  /**
   * Creates a request that will resolve during {@link finalize} for a new property assignment in an {@link ts.ObjectLiteralExpression}.
   * @param visitCondition The condition by which the {@link ts.ObjectLiteralExpression} is found.
   * @param propertyName The name of the property that will be added.
   * @param propertyValue The value of the property that will be added.
   * @param options Options to apply when modifying the object literal.
   * @remarks Will update the property's initializer if it already exists.
   */
  public requestNewMemberInObjectLiteral(
    visitCondition: (node: ts.ObjectLiteralExpression) => boolean,
    propertyName: string,
    propertyValue: ts.Expression,
    options?: ObjectLiteralExpressionEditOptions
  ): void;
  public requestNewMemberInObjectLiteral(
    visitCondition: (node: ts.ObjectLiteralExpression) => boolean,
    propertyNameOrAssignment: string | PropertyAssignment,
    propertyValue?: ts.Expression,
    options?: ObjectLiteralExpressionEditOptions
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
      this._expressionCollector,
      options
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
   * Creates a request that will resolve during {@link finalize} which adds a new element to an {@link ts.ArrayLiteralExpression}.
   * @param visitCondition The condition by which the {@link ts.ArrayLiteralExpression} is found.
   * @param elements The elements that will be added to the array literal.
   * @param prepend If the elements should be added at the beginning of the array.
   * @param anchorElement The element to anchor the new elements to.
   * @param multiline Whether the array literal should be multiline.
   * @remarks The `anchorElement` must match the type of the elements in the collection.
   */
  public requestNewMembersInArrayLiteral(
    visitCondition: (node: ts.ArrayLiteralExpression) => boolean,
    elements: ts.Expression[],
    anchorElement?: ts.Expression | PropertyAssignment,
    options?: ArrayLiteralExpressionEditOptions
  ): void;
  /**
   * Creates a request that will resolve during {@link finalize} which adds a new element to an {@link ts.ArrayLiteralExpression}.
   * @param visitCondition The condition by which the {@link ts.ArrayLiteralExpression} is found.
   * @param elements The elements that will be added to the array literal
   * @param anchorElement The element to anchor the new elements to.
   * @param options Options to apply when modifying the array literal.
   * @remarks The `anchorElement` must match the type of the elements in the collection.
   */
  public requestNewMembersInArrayLiteral(
    visitCondition: (node: ts.ArrayLiteralExpression) => boolean,
    elements: PropertyAssignment[],
    anchorElement?: ts.Expression | PropertyAssignment,
    options?: ArrayLiteralExpressionEditOptions
  ): void;
  public requestNewMembersInArrayLiteral(
    visitCondition: (node: ts.ArrayLiteralExpression) => boolean,
    expressionOrPropertyAssignment: ts.Expression[] | PropertyAssignment[],
    anchorElement?: ts.StringLiteral | ts.NumericLiteral | PropertyAssignment,
    options?: ArrayLiteralExpressionEditOptions
  ): void {
    let elements: ts.Expression[] | PropertyAssignment[];
    const isExpression = expressionOrPropertyAssignment.every((e) =>
      ts.isExpression(e as ts.Node)
    );
    if (isExpression) {
      elements = expressionOrPropertyAssignment as ts.Expression[];
    } else {
      elements = (expressionOrPropertyAssignment as PropertyAssignment[]).map(
        (property) =>
          this._factory.createObjectLiteralExpression(
            [property],
            options?.multiline
          )
      );
    }

    const transformerFactory = newMemberInArrayLiteralTransformerFactory(
      visitCondition,
      elements,
      anchorElement,
      options
    );
    this.requestChange(
      ChangeType.NewNode,
      transformerFactory,
      isExpression ? SyntaxKind.Expression : SyntaxKind.PropertyAssignment,
      ts.factory.createNodeArray(elements)
    );
  }

  /**
   * Creates a request that will resolve during {@link finalize} which sorts the elements in an {@link ts.ArrayLiteralExpression}}.
   * @param visitCondition The condition by which the {@link ts.ArrayLiteralExpression} is found.
   * @param sortCondition The sorting function to apply to the array's elements.
   *
   * @remarks The `sortCondition` function should return a negative number if `a` should come before `b`,
   *  a positive number if `a` should come after `b`, or zero if they are equal.
   *
   * It uses `Array.prototype.sort` internally.
   */
  public requestSortInArrayLiteral(
    visitCondition: (node: ts.ArrayLiteralExpression) => boolean,
    sortCondition: (a: ts.Expression, b: ts.Expression) => number
  ): void {
    const transformerFactory = sortInArrayLiteralTransformerFactory(
      visitCondition,
      sortCondition
    );
    this.requestChange(
      ChangeType.NodeUpdate,
      transformerFactory,
      SyntaxKind.ArrayLiteralExpression,
      null // assume the nodes of the matched array literal
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
   * Checks if an {@link ts.ImportDeclaration}'s identifier or alias would collide with an existing one.
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
   * Creates a request that will resolve during {@link finalize} which adds an {@link ts.ImportDeclaration} to the source file.
   * @param importDeclarationMeta Metadata for the new {@link ts.ImportDeclaration}.
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
