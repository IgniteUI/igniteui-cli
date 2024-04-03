import { SourceFile } from "typescript";

export interface IFormattingService {
  sourceFile: SourceFile;
  applyFormatting(): string;
}
