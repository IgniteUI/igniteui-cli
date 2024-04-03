import { Expression, FormatCodeSettings } from 'typescript';

export interface FormattingService {
  path: string;
  applyFormatting(): string;
}

export interface FormatSettings extends FormatCodeSettings {
  singleQuotes?: boolean;
}

export interface Identifier {
  name: string;
  alias?: string;
}

export interface ImportDeclarationMeta {
  identifier: Identifier | Identifier[];
  moduleName: string;
}

export interface PropertyAssignment {
  name: string;
  value: Expression;
}
