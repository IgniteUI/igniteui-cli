import * as ts from 'typescript';
import { IFormattingService, IFormatSettings } from '../types';
import { IFileSystem } from '../types/FileSystem';
import { Util } from '../util';

const NEW_LINE_PLACEHOLDER = '//I keep the new line';
export class FormattingService implements IFormattingService {
  private _printer: ts.Printer | undefined;
  private _formatSettingsFromConfig: IFormatSettings = {};
  private _defaultFormatSettings: IFormatSettings = {
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
   * The printer instance to use to get the source code from the AST.
   */
  private get printer(): ts.Printer {
    if (!this._printer) {
      this._printer = ts.createPrinter(this.printerOptions);
    }

    return this._printer;
  }

  /**
   * Create a new formatting service for the given source file.
   * @param sourceFile The source file to format.
   * @param fileSystem The file system to use when reading formatting options.
   * @param formatSettings Custom formatting settings to apply.
   * @param printerOptions Options to use when printing the source file.
   * @param compilerOptions Compiler options to use when transforming the source file.
   */
  constructor(
    public sourceFile: ts.SourceFile,
    private readonly fileSystem?: IFileSystem,
    private readonly formatSettings?: IFormatSettings,
    private readonly printerOptions?: ts.PrinterOptions,
    private readonly compilerOptions?: ts.CompilerOptions
  ) {}

  /**
   * Apply formatting to the source file.
   */
  public applyFormatting(): string {
    this.readFormatConfigs();
    const changes = this.languageService.getFormattingEditsForDocument(
      this.sourceFile.fileName,
      this.formatOptions
    );

    if (this.formatOptions.singleQuotes) {
      this.sourceFile = ts.transform(
        this.sourceFile,
        [this.convertQuotesTransformer],
        this.compilerOptions
      ).transformed[0] as ts.SourceFile;
    }

    const text = this.applyChanges(
      this.printer.printFile(this.sourceFile),
      changes
    );
    // clean source of new line placeholders
    return text.replace(
      new RegExp(
        `(\r?\n)\\s*?${Util.escapeRegExp(NEW_LINE_PLACEHOLDER)}(\r?\n)`,
        'g'
      ),
      `$1$2`
    );
  }

  /**
   * The format options to use when printing the source file.
   */
  public get formatOptions(): IFormatSettings {
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
      getScriptFileNames: () => [this.sourceFile.fileName],
      getScriptVersion: (_fileName) => '0',
      getScriptSnapshot: (_fileName) => {
        return ts.ScriptSnapshot.fromString(
          this.printer.printFile(this.sourceFile)
        );
      },
      getCurrentDirectory: () => process.cwd(),
      getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
      readDirectory: ts.sys.readDirectory,
      readFile: ts.sys.readFile,
      fileExists: ts.sys.fileExists,
    };
    return servicesHost;
  }

  /**
   * Transform string literals to use single quotes.
   */
  private convertQuotesTransformer =
    <T extends ts.Node>(context: ts.TransformationContext) =>
    (rootNode: T): ts.Node => {
      const visit = (node: ts.Node): ts.Node => {
        if (ts.isStringLiteral(node)) {
          const text = node.text;
          // the ts.StringLiteral node has a `singleQuote` property that's not part of the public APi for some reason
          // to make our lives easier we can modify it though
          const singleQuote = (node as any).singleQuote;
          const newNode = context.factory.createStringLiteral(text);
          (newNode as any).singleQuote =
            singleQuote || this.formatOptions.singleQuotes;

          return newNode;
        }
        return ts.visitEachChild(node, visit, context);
      };
      return ts.visitNode(rootNode, visit);
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
    if (!this.fileSystem) return;

    const editorConfigPath = '.editorconfig';
    if (this.fileSystem.fileExists(editorConfigPath)) {
      // very basic parsing support
      const text = this.fileSystem.readFile(editorConfigPath, 'utf-8');
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
