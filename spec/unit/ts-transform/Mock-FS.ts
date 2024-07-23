import { IFileSystem } from '@igniteui/cli-core';

export class MockFS implements IFileSystem {
  constructor(private fsMap?: Map<string, string>) {}

  public fileExists(filePath: string): boolean {
    if (this.fsMap.size === 0) {
      throw new Error('No files in the fsMap.');
    }

    return this.fsMap.has(filePath);
  }

  public readFile(filePath: string, encoding?: string): string {
    const content = this.fsMap.get(filePath);
    if (content) {
      return content;
    }

    throw new Error(`Could not find file for path ${filePath}.`);
  }

  public writeFile(filePath: string, text: string): void {
    if (!this.fileExists(filePath)) {
      throw new Error(`Could not find file for path ${filePath}.`);
    }

    this.fsMap.set(filePath, text);
  }

  public directoryExists(dirPath: string): boolean {
    throw new Error('directoryExists is not implemented.');
  }
  public glob(dirPath: string, pattern: string): string[] {
    throw new Error('glob is not implemented.');
  }
}
