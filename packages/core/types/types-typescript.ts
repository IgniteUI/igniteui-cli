import { Expression, FormatCodeSettings } from "typescript";

/** Service for applying formatting to a source file. */
export interface FormattingService {
  /** The path to the file to format. */
  path: string;
  /** Applies formatting to the file after reading it form the `fs`. */
  applyFormatting(): string;
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
