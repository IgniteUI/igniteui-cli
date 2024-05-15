import * as ts from 'typescript';
import {
  FormattingService,
  FormatSettings,
  FS_TOKEN,
  IFileSystem,
} from '../types';
import { App } from '../util';
import { TypeScriptUtils } from './TypeScriptUtils';

export class TypeScriptFormattingService implements FormattingService {
  private _sourceFile!: ts.SourceFile;
  private _formatSettingsFromConfig: FormatSettings = {};
  private _defaultFormatSettings: FormatSettings = {
    indentSize: 4,
    tabSize: 4,
    newLineCharacter: ts.sys.newLine,
    convertTabsToSpaces: true,
    indentStyle: ts.IndentStyle.Smart,
    insertSpaceAfterCommaDelimiter: true,
    insertSpaceAfterSemicolonInForStatements: true,
    insertSpaceBeforeAndAfterBinaryOperators: true,
    insertSpaceAfterKeywordsInControlFlowStatements: true,
    insertSpaceAfterTypeAssertion: true,
    singleQuotes: true,
  };

  /**
   * Create a new formatting service for the given source file.
   * @param path Path to the source file to format.
   * @param formatSettings Custom formatting settings to apply.
   * @param compilerOptions Compiler options to use when transforming the source file.
   */
  constructor(
    public path: string,
    private readonly formatSettings?: FormatSettings,
    private readonly compilerOptions?: ts.CompilerOptions
  ) {}

  /**
   * Apply formatting to a source file.
   */
  public applyFormatting(): string {
    this.readFormatConfigs();
    this._sourceFile = TypeScriptUtils.getFileSource(this.path);

    if (this.formatOptions.singleQuotes) {
      this._sourceFile = ts.transform<ts.SourceFile>(
        this._sourceFile,
        [this.convertQuotesTransformer],
        this.compilerOptions
      ).transformed[0];
    }

    const changes = this.languageService.getFormattingEditsForDocument(
      this._sourceFile.fileName,
      this.formatOptions
    );
    const text = this.applyChanges(
      TypeScriptUtils.getSourceText(this._sourceFile),
      changes
    );

    TypeScriptUtils.saveFile(this.path, text);
    return text;
  }

  /**
   * The format options to use when printing the source file.
   */
  public get formatOptions(): FormatSettings {
    return Object.assign(
      {},
      this._defaultFormatSettings,
      this._formatSettingsFromConfig,
      this.formatSettings
    );
  }

  /**
   * The language service host used to access the source file.
   */
  private _languageServiceHost: ts.LanguageServiceHost | undefined;
  private get languageServiceHost(): ts.LanguageServiceHost {
    if (!this._languageServiceHost) {
      this._languageServiceHost = this.createLanguageServiceHost();
    }

    return this._languageServiceHost;
  }

  /**
   * The language service instance used to format the source file.
   */
  private get languageService(): ts.LanguageService {
    return ts.createLanguageService(
      this.languageServiceHost,
      ts.createDocumentRegistry()
    );
  }

  /**
   * Create a language service host for the source file.
   * The host is used by TS to access the FS and read the source file.
   * In this case we are operating on a single source file so we only need to provide its name and contents.
   */
  private createLanguageServiceHost(): ts.LanguageServiceHost {
    const servicesHost: ts.LanguageServiceHost = {
      getCompilationSettings: () => ({}),
      getScriptFileNames: () => [this._sourceFile.fileName],
      getScriptVersion: (_fileName) => '0',
      getScriptSnapshot: (_fileName) => {
        return ts.ScriptSnapshot.fromString(
          TypeScriptUtils.getSourceText(this._sourceFile)
        );
      },
      getCurrentDirectory: () => process.cwd(),
      getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
      readDirectory: () => [],
      readFile: () => undefined,
      fileExists: () => true,
    };
    return servicesHost;
  }

  /**
   * Transform string literals to use single quotes.
   */
  private convertQuotesTransformer =
    <T extends ts.Node>(context: ts.TransformationContext) =>
    (rootNode: T): ts.SourceFile => {
      const visit = (node: ts.Node): ts.Node => {
        if (ts.isStringLiteral(node)) {
          return context.factory.createStringLiteral(
            node.text,
            this.formatOptions.singleQuotes
          );
        }
        return ts.visitEachChild(node, visit, context);
      };
      return ts.visitNode(rootNode, visit, ts.isSourceFile);
    };

  /**
   * Apply formatting changes (position based) in reverse
   * from https://github.com/Microsoft/TypeScript/issues/1651#issuecomment-69877863
   */
  private applyChanges(orig: string, changes: ts.TextChange[]): string {
    let result = orig;
    for (let i = changes.length - 1; i >= 0; i--) {
      const change = changes[i];
      const head = result.slice(0, change.span.start);
      const tail = result.slice(change.span.start + change.span.length);
      result = head + change.newText + tail;
    }

    return result;
  }

  /**
   * Try and parse formatting from project `.editorconfig`
   */
  private readFormatConfigs() {
    const fileSystem = App.container.get<IFileSystem>(FS_TOKEN);
    const editorConfigPath = '.editorconfig';
    if (fileSystem.fileExists(editorConfigPath)) {
      // very basic parsing support
      const text = fileSystem.readFile(editorConfigPath, 'utf-8');
      if (!text) return;
      const options = text
        .replace(/\s*[#;].*([\r\n])/g, '$1') //remove comments
        .replace(/\[(?!\*\]|\*.ts).+\][^\[]+/g, '') // leave [*]/[*.ts] sections
        .split(/\r\n|\r|\n/)
        .reduce((obj: any, x) => {
          if (x.indexOf('=') !== -1) {
            const pair = x.split('=');
            obj[pair[0].trim()] = pair[1].trim();
          }
          return obj;
        }, {});

      this._formatSettingsFromConfig.convertTabsToSpaces =
        options['indent_style'] === 'space';
      if (options['indent_size']) {
        this._formatSettingsFromConfig.indentSize =
          parseInt(options['indent_size'], 10) ||
          this._formatSettingsFromConfig.indentSize;
      }
      if (options['quote_type']) {
        this._formatSettingsFromConfig.singleQuotes =
          options['quote_type'] === 'single';
      }
    }
    // TODO: consider adding eslint support
  }
}
