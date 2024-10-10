import * as ts from 'typescript';
import { Expression, FormatCodeSettings } from 'typescript';

/** Service for applying formatting to a source file. */
export interface FormattingService {
  /** The path to the file to format. */
  path: string;
  /** Applies formatting to the file after reading it form the `fs`. */
  applyFormatting(sourceFile: ts.SourceFile): string;
}

/** Settings for formatting a source file. */
export interface FormatSettings extends FormatCodeSettings {
  /** Use single quotes instead of double quotes. */
  singleQuotes?: boolean;
}

/** TypeScript identifier with an optional alias. */
export interface Identifier {
  /** The name of the identifier. Could represent a variable, a method name, a member in an import declaration, etc. */
  name: string;
  /** The alias of the identifier, taking the form of `MyIdentifier as MyAlias` */
  alias?: string;
}

/** TypeScript import declaration meta data. */
export interface ImportDeclarationMeta {
  /** The identifiers to import. Taking the form of `import { X } from 'Y'` or `import { X, Y... } from 'Z'` */
  identifiers: Identifier | Identifier[];
  /** The module to import from. */
  moduleName: string;
}

/** Simplified version of `ts.PropertyAssignment` */
export interface PropertyAssignment {
  /** The left-hand side of the assignment. */
  name: string;
  /** The right-hand side of the assignment. */
  value: Expression;
}

/**
 * The type of change to apply to the source file.
 */
export enum ChangeType {
  NewNode = 'new-node',
  NodeUpdate = 'node-update',
}

/**
 * The kind of syntax node to transform in the source file.
 */
export enum SyntaxKind {
  PropertyAssignment = 'property-assignment',
  ObjectLiteralExpression = 'object-literal-expression',
  ArrayLiteralExpression = 'array-literal-expression',
  ImportDeclaration = 'import-declaration',
  Primitive = 'primitive',
  Expression = 'expression',
}

/**
 * A request to change the source file.
 */
export interface ChangeRequest<T extends ts.Node> {
  /**
   * A unique identifier for the change request. It can represent the accumulated values of a node's text or properties.
   */
  id: string;
  /**
   * The type of change to apply to the source file.
   */
  type: ChangeType;
  /**
   * The transformer factory to apply to the source file.
   */
  transformerFactory: ts.TransformerFactory<ts.SourceFile>;
  /**
   * The kind of syntax node to transform in the source file.
   */
  syntaxKind: SyntaxKind;
  /**
   * The affected node in the source file.
   */
  node: T | ts.NodeArray<T>;
}

/**
 * Options that can be applied when modifying a literal expression.
 */
export interface LiteralExpressionOptionsBase {
  /**
   * Whether the literal should be on multiple lines.
   * @remarks This option is only applicable to {@link ts.ObjectLiteralExpression} and {@link ts.ArrayLiteralExpression}.
   */
  multiline?: boolean;
}

/**
 * Options that can be applied when modifying an {@link ts.ObjectLiteralExpression}.
 */
export interface ObjectLiteralExpressionEditOptions
  extends LiteralExpressionOptionsBase {
  /**
   * Whether to override all elements of the property's initializer.
   * @remarks This option is only applicable to {@link ts.PropertyAssignment} with an initializer that is {@link ts.ArrayLiteralExpression}.
   */
  override?: boolean;
}

/**
 * Options that can be applied when modifying an {@link ts.ArrayLiteralExpression}.
 */
export interface ArrayLiteralExpressionEditOptions
  extends LiteralExpressionOptionsBase {
  /**
   * Whether to override all elements of the {@link ts.ArrayLiteralExpression}.
   */
  override?: boolean;
  /**
   * If any elements should be added at the beginning of an {@link ts.ArrayLiteralExpression}.
   */
  prepend?: boolean;
}
