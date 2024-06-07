import * as ts from 'typescript';
import { Expression, FormatCodeSettings } from 'typescript';

export interface FormattingService {
  path: string;
  /** Applies formatting to the file after reading it form the `fs`. */
  applyFormatting(sourceFile: ts.SourceFile): string;
}

export interface FormatSettings extends FormatCodeSettings {
  singleQuotes?: boolean;
}

export interface Identifier {
  name: string;
  alias?: string;
}

export interface ImportDeclarationMeta {
  identifiers: Identifier | Identifier[];
  moduleName: string;
}

export interface PropertyAssignment {
  name: string;
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
