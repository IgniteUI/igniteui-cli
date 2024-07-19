import { TypeScriptASTTransformer } from '../../packages/core/typescript/TypeScriptASTTransformer';
import * as ts from 'typescript';

const FILE_NAME = 'test-file.ts';
let FILE_CONTENT = ``;

describe('TypeScript AST Transformer', () => {
  let sourceFile: ts.SourceFile;
  let astTransformer: TypeScriptASTTransformer;

  const printer = ts.createPrinter();

  describe('General', () => {
    it('should find a variable declaration by given name & type', () => {
      FILE_CONTENT = `const myVar: string = "hello";`;
      sourceFile = ts.createSourceFile(
        FILE_NAME,
        FILE_CONTENT,
        ts.ScriptTarget.Latest,
        true
      );
      astTransformer = new TypeScriptASTTransformer(sourceFile);

      const result = astTransformer.findVariableDeclaration('myVar', 'string');
      expect(result).toBeDefined();
    });

    it('should find an exported variable declaration by given name & type', () => {
      FILE_CONTENT = `export const myVar: string = "hello";`;
      sourceFile = ts.createSourceFile(
        FILE_NAME,
        FILE_CONTENT,
        ts.ScriptTarget.Latest,
        true
      );
      astTransformer = new TypeScriptASTTransformer(sourceFile);

      const result = astTransformer.findVariableDeclaration('myVar', 'string');
      expect(result).toBeDefined();
    });

    it('should create a call expression', () => {
      sourceFile = ts.createSourceFile(
        FILE_NAME,
        FILE_CONTENT,
        ts.ScriptTarget.Latest,
        true
      );
      astTransformer = new TypeScriptASTTransformer(sourceFile);

      const typeArg = ts.factory.createKeywordTypeNode(
        ts.SyntaxKind.NumberKeyword
      );
      const arg = ts.factory.createNumericLiteral('5');
      const callExpression = astTransformer.createCallExpression(
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

    it('should successfully add and modify arguments in a call expression', () => {
      FILE_CONTENT = `myMethodCall(arg1, arg2, arg3);`;
      sourceFile = ts.createSourceFile(
        FILE_NAME,
        FILE_CONTENT,
        ts.ScriptTarget.Latest,
        true
      );
      astTransformer = new TypeScriptASTTransformer(sourceFile);

      const visitCondition = (node) => ts.isCallExpression(node);
      astTransformer.requestNewArgumentInMethodCallExpression(
        visitCondition,
        ts.factory.createIdentifier('arg4'),
        1, // position
        true // override
      );
      let result = astTransformer.finalize();
      expect(result).toEqual('myMethodCall(arg1, arg4, arg3);\n');

      astTransformer.requestNewArgumentInMethodCallExpression(
        visitCondition,
        ts.factory.createIdentifier('arg4'),
        2 // position
      );
      result = astTransformer.finalize();
      expect(result).toEqual('myMethodCall(arg1, arg2, arg4, arg3);\n');

      astTransformer.requestNewArgumentInMethodCallExpression(
        visitCondition,
        ts.factory.createIdentifier('arg5')
      );
      result = astTransformer.finalize();
      expect(result).toEqual('myMethodCall(arg1, arg2, arg3, arg5);\n');
    });

    it("should correctly find a node's ancenstor", () => {
      FILE_CONTENT = `const myVar: string = "hello";`;
      sourceFile = ts.createSourceFile(
        FILE_NAME,
        FILE_CONTENT,
        ts.ScriptTarget.Latest,
        true
      );
      astTransformer = new TypeScriptASTTransformer(sourceFile);

      const targetChild = astTransformer
        .findVariableDeclaration('myVar', 'string')
        ?.getChildAt(4)!;
      const variableDeclaration = astTransformer.findNodeAncestor(
        targetChild,
        ts.isVariableDeclaration
      )!;

      expect(ts.isVariableDeclaration(variableDeclaration)).toBeTruthy();
    });

    it('should find a property assignment in the AST by a given condition', () => {
      FILE_CONTENT = `const myObj = { key1: "hello", key2: "world" };`;
      sourceFile = ts.createSourceFile(
        FILE_NAME,
        FILE_CONTENT,
        ts.ScriptTarget.Latest,
        true
      );
      astTransformer = new TypeScriptASTTransformer(sourceFile);

      const result = astTransformer.findPropertyAssignment(
        (node) =>
          ts.isPropertyAssignment(node) && node.name.getText() === 'key1'
      );
      expect(result).toBeDefined();
    });

    it('should find the first matched property assignment by the given condition', () => {
      FILE_CONTENT = `const myObj = { key1: "", key2: "world", key3: "hi", children: [{ key1: "", child: "hi" }] };`;
      sourceFile = ts.createSourceFile(
        FILE_NAME,
        FILE_CONTENT,
        ts.ScriptTarget.Latest,
        true
      );
      astTransformer = new TypeScriptASTTransformer(sourceFile);

      const result = astTransformer.findPropertyAssignment(
        (node) =>
          ts.isPropertyAssignment(node) && node.name.getText() === 'key1'
      );
      expect(result).toBeDefined();
      expect(result.name.getText()).toEqual('key1');
      expect(result.initializer.getText()).toEqual('""');

      expect(
        ts.isObjectLiteralExpression(result.parent) &&
          result.parent.properties.length === 4
      ).toBeTruthy('Found incorrect property assignment.');
    });

    it('should find the last matched property assignment by the given condition', () => {
      FILE_CONTENT = `const myObj = { key1: "", key2: "world", key3: "hi", children: [{ key1: "", child: "hi" }] };`;
      sourceFile = ts.createSourceFile(
        FILE_NAME,
        FILE_CONTENT,
        ts.ScriptTarget.Latest,
        true
      );
      astTransformer = new TypeScriptASTTransformer(sourceFile);

      const result = astTransformer.findPropertyAssignment(
        (node) =>
          ts.isPropertyAssignment(node) && node.name.getText() === 'key1',
        true
      );
      expect(result).toBeDefined();
      expect(result.name.getText()).toEqual('key1');
      expect(result.initializer.getText()).toEqual('""');

      expect(
        ts.isObjectLiteralExpression(result.parent) &&
          result.parent.properties.length === 2
      ).toBeTruthy('Found incorrect property assignment.');
    });

    it('should determine correctly if an entity is an IPropertyAssignment', () => {
      const propertyAssignment = {
        name: 'test',
        value: ts.factory.createStringLiteral('value'),
      };
      expect(
        astTransformer.isPropertyAssignment(propertyAssignment)
      ).toBeTruthy();

      const notPropertyAssignment = { name: 'test', value: 'value' };
      expect(
        astTransformer.isPropertyAssignment(notPropertyAssignment)
      ).toBeFalsy();
    });
  });

  describe('Object literals', () => {
    beforeEach(() => {
      FILE_CONTENT = `const myObj = { key1: "hello", key2: "world" };`;
      sourceFile = ts.createSourceFile(
        FILE_NAME,
        FILE_CONTENT,
        ts.ScriptTarget.Latest,
        true
      );
      astTransformer = new TypeScriptASTTransformer(sourceFile);
    });

    it('should add member to an object literal', () => {
      astTransformer.requestNewMemberInObjectLiteral(
        ts.isObjectLiteralExpression,
        'key3',
        ts.factory.createStringLiteral('new-value')
      );

      const result = astTransformer.finalize();
      expect(result).toEqual(
        `const myObj = { key1: "hello", key2: "world", key3: "new-value" };\n`
      );
    });

    it('should add member to an object literal with an IPropertyAssignment', () => {
      astTransformer.requestNewMemberInObjectLiteral(
        ts.isObjectLiteralExpression,
        {
          name: 'key3',
          value: ts.factory.createStringLiteral('new-value'),
        }
      );
      const result = astTransformer.finalize();
      expect(result).toEqual(
        `const myObj = { key1: "hello", key2: "world", key3: "new-value" };\n`
      );
    });

    it('should update an existing member of an object literal', () => {
      astTransformer.requestUpdateForObjectLiteralMember(
        ts.isObjectLiteralExpression,
        {
          name: 'key2',
          value: ts.factory.createStringLiteral('new-value'),
        }
      );
      const result = astTransformer.finalize();
      expect(result).toEqual(
        `const myObj = { key1: "hello", key2: "new-value" };\n`
      );
    });

    it('should not update a non-existing member of an object literal', () => {
      astTransformer.requestUpdateForObjectLiteralMember(
        ts.isObjectLiteralExpression,
        {
          name: 'key3',
          value: ts.factory.createStringLiteral('new-value'),
        }
      );
      const result = astTransformer.finalize();
      expect(result).toEqual(
        `const myObj = { key1: "hello", key2: "world" };\n`
      );
    });

    it('should update an object literal if the target node is dynamically added', () => {
      astTransformer.requestNewMemberInObjectLiteral(
        ts.isObjectLiteralExpression,
        'key3',
        ts.factory.createStringLiteral('new-value')
      );

      astTransformer.requestUpdateForObjectLiteralMember(
        ts.isObjectLiteralExpression,
        {
          name: 'key3',
          value: ts.factory.createStringLiteral('newer-value'),
        }
      );

      const result = astTransformer.finalize();
      expect(result).toEqual(
        `const myObj = { key1: "hello", key2: "world", key3: "newer-value" };\n`
      );
    });

    it('should create an object literal expression', () => {
      const newObjectLiteral = astTransformer.createObjectLiteralExpression(
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
  });

  describe('Array literals', () => {
    beforeEach(() => {
      FILE_CONTENT = `const myArr = [1, 2, 3];`;
      sourceFile = ts.createSourceFile(
        FILE_NAME,
        FILE_CONTENT,
        ts.ScriptTarget.Latest,
        true
      );
      astTransformer = new TypeScriptASTTransformer(sourceFile);
    });

    it('should append element to an array literal', () => {
      astTransformer.requestNewMembersInArrayLiteral(
        ts.isArrayLiteralExpression,
        [ts.factory.createIdentifier('4')]
      );

      const result = astTransformer.finalize();
      expect(result).toEqual(`const myArr = [1, 2, 3, 4];\n`);
    });

    it('should prepend an element to an array literal', () => {
      astTransformer.requestNewMembersInArrayLiteral(
        ts.isArrayLiteralExpression,
        [ts.factory.createIdentifier('4')],
        true
      );

      const result = astTransformer.finalize();
      expect(result).toEqual(`const myArr = [4, 1, 2, 3];\n`);
    });

    it('should create an array literal expression with IPropertyAssignment', () => {
      const newArrayLiteral = astTransformer.createArrayLiteralExpression([
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

    it('should append elements to an array literal with primitive elements and an anchor element', () => {
      astTransformer.requestNewMembersInArrayLiteral(
        ts.isArrayLiteralExpression,
        [ts.factory.createIdentifier('4')],
        true,
        ts.factory.createIdentifier('3')
      );

      const result = astTransformer.finalize();
      expect(result).toEqual(`const myArr = [1, 2, 4, 3];\n`);
    });

    it('should append elements to an array literal with object elements and an anchor element', () => {
      FILE_CONTENT = `const myArr = [{ test: 1 }, { anchor: 2 }, { other: "another-anchor" }];`;
      sourceFile = ts.createSourceFile(
        FILE_NAME,
        FILE_CONTENT,
        ts.ScriptTarget.Latest,
        true
      );
      astTransformer = new TypeScriptASTTransformer(sourceFile);

      const anchor = {
        name: 'anchor',
        value: ts.factory.createNumericLiteral('2'),
      };
      astTransformer.requestNewMembersInArrayLiteral(
        ts.isArrayLiteralExpression,
        [
          astTransformer.createObjectLiteralExpression([
            {
              name: 'key3',
              value: ts.factory.createStringLiteral('new-value'),
            },
          ]),
        ],
        true,
        anchor
      );

      const anotherAnchor = {
        name: 'other',
        value: ts.factory.createStringLiteral('another-anchor'),
      };
      astTransformer.requestNewMembersInArrayLiteral(
        ts.isArrayLiteralExpression,
        [
          astTransformer.createObjectLiteralExpression([
            {
              name: 'key4',
              value: ts.factory.createStringLiteral('newer-value'),
            },
          ]),
        ],
        true,
        anotherAnchor
      );

      const result = astTransformer.finalize();
      expect(result).toEqual(
        `const myArr = [{ test: 1 }, { key3: "new-value" }, { anchor: 2 }, { key4: "newer-value" }, { other: "another-anchor" }];\n`
      );
    });

    it('should create a multilined array literal expression with IPropertyAssignment', () => {
      const newArrayLiteral = astTransformer.createArrayLiteralExpression(
        [
          {
            name: 'key3',
            value: ts.factory.createStringLiteral('new-value'),
          },
          {
            name: 'key4',
            value: ts.factory.createNumericLiteral('5'),
          },
        ],
        true
      );

      const result = printer.printNode(
        ts.EmitHint.Unspecified,
        newArrayLiteral,
        sourceFile
      );
      expect(result).toEqual(
        `[\n    {\n        key3: "new-value"\n    },\n    {\n        key4: 5\n    }\n]`
      );
    });

    it('should create an array literal expression', () => {
      const newArrayLiteral = astTransformer.createArrayLiteralExpression([
        ts.factory.createStringLiteral('new-value'),
        ts.factory.createNumericLiteral('5'),
      ]);

      const result = printer.printNode(
        ts.EmitHint.Unspecified,
        newArrayLiteral,
        sourceFile
      );
      expect(result).toEqual(`["new-value", 5]`);
    });

    it('should create a multilined array literal expression', () => {
      const newArrayLiteral = astTransformer.createArrayLiteralExpression(
        [
          ts.factory.createStringLiteral('new-value'),
          ts.factory.createNumericLiteral('5'),
        ],
        true
      );

      const result = printer.printNode(
        ts.EmitHint.Unspecified,
        newArrayLiteral,
        sourceFile
      );
      expect(result).toEqual(`[\n    "new-value",\n    5\n]`);
    });

    it('should find an element in an array literal by a given condition', () => {
      const result = astTransformer.findElementInArrayLiteral(
        (node) => ts.isNumericLiteral(node) && node.text === '2'
      );
      expect(result).toBeDefined();
    });
  });

  describe('Imports', () => {
    describe('Creating imports', () => {
      beforeEach(() => {
        FILE_CONTENT = ``;
        sourceFile = ts.createSourceFile(
          FILE_NAME,
          FILE_CONTENT,
          ts.ScriptTarget.Latest,
          true
        );
        astTransformer = new TypeScriptASTTransformer(sourceFile);
      });

      it('should create an import declaration', () => {
        const importDeclaration = astTransformer.createImportDeclaration({
          identifiers: { name: 'mock' },
          moduleName: 'module',
        });

        const result = printer.printNode(
          ts.EmitHint.Unspecified,
          importDeclaration,
          sourceFile
        );
        expect(result).toEqual(`import { mock } from "module";`);
      });

      it('should create an import declaration with an alias', () => {
        const importDeclaration = astTransformer.createImportDeclaration({
          identifiers: { name: 'SomeImport', alias: 'mock' },
          moduleName: 'module',
        });

        const result = printer.printNode(
          ts.EmitHint.Unspecified,
          importDeclaration,
          sourceFile
        );
        expect(result).toEqual(`import { SomeImport as mock } from "module";`);
      });

      it('should create a default import declaration', () => {
        const importDeclaration = astTransformer.createImportDeclaration(
          { identifiers: { name: 'SomeMock' }, moduleName: 'module' },
          true
        );

        const result = printer.printNode(
          ts.EmitHint.Unspecified,
          importDeclaration,
          sourceFile
        );
        expect(result).toEqual(`import SomeMock from "module";`);
      });

      it('should default to the first identifier for a default import declaration when multiple identifiers are passed in', () => {
        const importDeclaration = astTransformer.createImportDeclaration(
          {
            identifiers: [{ name: 'SomeMock' }, { name: 'AnotherMock' }],
            moduleName: 'module',
          },
          true
        );

        const result = printer.printNode(
          ts.EmitHint.Unspecified,
          importDeclaration,
          sourceFile
        );
        expect(result).toEqual(`import SomeMock from "module";`);
      });

      it('should create an import declaration with a namespace import', () => {
        pending('consider adding support for namesapced imports');
        const importDeclaration = astTransformer.createImportDeclaration({
          identifiers: { name: '*', alias: 'mock' },
          moduleName: 'another-module',
        });

        const result = printer.printNode(
          ts.EmitHint.Unspecified,
          importDeclaration,
          sourceFile
        );
        expect(result).toEqual(`import * as mock from "another-module";`);
      });
    });

    describe('Adding and verifying imports', () => {
      beforeEach(() => {
        FILE_CONTENT = `import { mock } from "module";`;
        sourceFile = ts.createSourceFile(
          FILE_NAME,
          FILE_CONTENT,
          ts.ScriptTarget.Latest,
          true
        );
        astTransformer = new TypeScriptASTTransformer(sourceFile);
      });
      describe('Adding imports', () => {
        it('should add an import declaration', () => {
          astTransformer.requestNewImportDeclaration({
            identifiers: { name: 'AnotherMock' },
            moduleName: 'another/module',
          });

          const result = astTransformer.finalize();
          expect(result).toEqual(
            `import { mock } from "module";\nimport { AnotherMock } from "another/module";\n`
          );
        });

        it('should add an import declaration with an alias', () => {
          astTransformer.requestNewImportDeclaration({
            identifiers: { name: 'AnotherMock', alias: 'anotherMock' },
            moduleName: 'another/module',
          });

          const result = astTransformer.finalize();
          expect(result).toEqual(
            `import { mock } from "module";\nimport { AnotherMock as anotherMock } from "another/module";\n`
          );
        });

        it('should add an import declaration as a default import', () => {
          astTransformer.requestNewImportDeclaration(
            {
              identifiers: { name: 'AnotherMock' },
              moduleName: 'another/module',
            },
            true
          );

          const result = astTransformer.finalize();
          expect(result).toEqual(
            `import { mock } from "module";\nimport AnotherMock from "another/module";\n`
          );
        });

        it('should add an import declaration with an existing identifier if it is aliased and is from the same module', () => {
          astTransformer.requestNewImportDeclaration({
            identifiers: { name: 'mock', alias: 'anotherMock' },
            moduleName: 'module',
          });

          // this is a confusing edge case that results in valid TypeScript as technically no identifier names collide.
          const result = astTransformer.finalize();
          expect(result).toEqual(
            `import { mock, mock as anotherMock } from "module";\n`
          );
        });

        it('should add an import declaration with an existing identifier if it is aliased and is from a different module', () => {
          astTransformer.requestNewImportDeclaration({
            identifiers: { name: 'mock', alias: 'anotherMock' },
            moduleName: 'another/module',
          });

          const result = astTransformer.finalize();
          expect(result).toEqual(
            `import { mock } from "module";\nimport { mock as anotherMock } from "another/module";\n`
          );
        });

        it('should add identifier to an existing import declaration', () => {
          astTransformer.requestNewImportDeclaration({
            identifiers: { name: 'AnotherMock' },
            moduleName: 'module',
          });

          const result = astTransformer.finalize();
          expect(result).toEqual(
            `import { mock, AnotherMock } from "module";\n`
          );
        });

        it('should add an import declaration with multiple identifiers', () => {
          astTransformer.requestNewImportDeclaration({
            identifiers: [
              { name: 'AnotherMock' },
              { name: 'YetAnotherMock', alias: 'yetAnotherMock' },
            ],
            moduleName: 'module',
          });

          const result = astTransformer.finalize();
          expect(result).toEqual(
            `import { mock, AnotherMock, YetAnotherMock as yetAnotherMock } from "module";\n`
          );
        });

        it('should not add an import declaration if the identifier is already imported', () => {
          astTransformer.requestNewImportDeclaration({
            identifiers: { name: 'mock' },
            moduleName: 'module',
          });

          const result = astTransformer.finalize();
          expect(result).toEqual(`import { mock } from "module";\n`);
        });

        it('should not add an import declaration if the identifier is aliased to an existing identifier', () => {
          astTransformer.requestNewImportDeclaration({
            identifiers: { name: 'someImport', alias: 'mock' },
            moduleName: 'module',
          });

          const result = astTransformer.finalize();
          expect(result).toEqual(`import { mock } from "module";\n`);
        });

        it('should make sure that multiple import declaration identifiers are not added if they are the same', () => {
          astTransformer.requestNewImportDeclaration({
            identifiers: [{ name: 'mock' }, { name: 'mock' }],
            moduleName: 'module',
          });

          const result = astTransformer.finalize();
          expect(result).toEqual(`import { mock } from "module";\n`);
        });
      });
    });
  });
});
