// tslint:disable-next-line:no-implicit-dependencies
import * as ts from 'typescript';
import { FS_TOKEN, IFileSystem } from '../types/FileSystem';
import { App } from '../util';
import { Util } from '../util/Util';

export class TypeScriptUtils {
  public static readonly newLinePlaceHolder = '//I keep the new line';

  /**
   * Returns an source file, adds new line placeholders as the TS parser won't add `SyntaxKind.NewLineTrivia` to the AST.
   * @param filePath Path of file to read
   */
  public static getFileSource(filePath: string): ts.SourceFile {
    const fileSystem = App.container.get<IFileSystem>(FS_TOKEN);
    let targetFile = fileSystem.readFile(filePath);
    targetFile = targetFile.replace(
      /(\r?\n)(\r?\n)/g,
      `$1${this.newLinePlaceHolder}$2`
    );
    const targetSource = ts.createSourceFile(
      filePath,
      targetFile,
      ts.ScriptTarget.Latest,
      true
    );
    return targetSource;
  }

  /**
   * Prints source, removes new line placeholders and saves the output in a target file
   * @param filePath File path
   * @param source Source AST to print
   */
  public static saveFile(filePath: string, source: ts.SourceFile) {
    const fileSystem = App.container.get<IFileSystem>(FS_TOKEN);
    // https://github.com/Microsoft/TypeScript/issues/10786#issuecomment-288987738
    const printer: ts.Printer = ts.createPrinter();
    let text = printer.printFile(source);
    text = text.replace(
      new RegExp(
        `(\r?\n)\\s*?${Util.escapeRegExp(this.newLinePlaceHolder)}(\r?\n)`,
        'g'
      ),
      `$1$2`
    );
    fileSystem.writeFile(filePath, text);
  }
}
