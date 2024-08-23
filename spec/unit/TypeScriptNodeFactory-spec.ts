import * as ts from 'typescript';

import { TypeScriptNodeFactory } from '../../packages/core/typescript/TypeScriptNodeFactory';

const FILE_NAME = 'test-file.ts';
const FILE_CONTENT = '';

describe('TypeScriptNodeFactory', () => {
  let sourceFile: ts.SourceFile;

  const printer = ts.createPrinter();
  const nodeFactory = new TypeScriptNodeFactory();

  it('should create a call expression', () => {
    sourceFile = ts.createSourceFile(
      FILE_NAME,
      FILE_CONTENT,
      ts.ScriptTarget.Latest,
      true
    );

    const typeArg = ts.factory.createKeywordTypeNode(
      ts.SyntaxKind.NumberKeyword
    );
    const arg = ts.factory.createNumericLiteral('5');
    const callExpression = nodeFactory.createCallExpression(
      'x',
      'myGenericFunction',
      [typeArg],
      [arg]
    );

    const result = printer.printNode(
      ts.EmitHint.Unspecified,
      callExpression,
      sourceFile
    );
    expect(result).toEqual(`x.myGenericFunction<number>(5)`);
  });

  it('should create an object literal expression', () => {
    const newObjectLiteral = nodeFactory.createObjectLiteralExpression(
      [{ name: 'key3', value: ts.factory.createStringLiteral('new-value') }],
      true
    );

    const result = printer.printNode(
      ts.EmitHint.Unspecified,
      newObjectLiteral,
      sourceFile
    );
    expect(result).toEqual(`{\n    key3: "new-value"\n}`);
  });

  it('should create an array literal expression with IPropertyAssignment', () => {
    const newArrayLiteral = nodeFactory.createArrayLiteralExpression([
      {
        name: 'key3',
        value: ts.factory.createStringLiteral('new-value'),
      },
      {
        name: 'key4',
        value: ts.factory.createNumericLiteral('5'),
      },
    ]);

    const result = printer.printNode(
      ts.EmitHint.Unspecified,
      newArrayLiteral,
      sourceFile
    );

    expect(result).toEqual(`[{ key3: "new-value" }, { key4: 5 }]`);
  });
});
