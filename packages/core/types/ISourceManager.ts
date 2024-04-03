import { VFSLanguageService } from "./VFSLanguageService";
import ts from "typescript";

export interface ISourceManager {
    getSourceFile(filePath: string, content: string): ts.SourceFile | undefined;
    updateEnvironment(filesMap: Map<string, string>): void;
    get languageService(): VFSLanguageService | undefined;
}
