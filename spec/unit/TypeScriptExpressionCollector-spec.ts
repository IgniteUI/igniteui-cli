import * as ts from 'typescript';

import { TypeScriptExpressionCollector } from '../../packages/core/typescript/TypeScriptExpressionCollector';

describe('TypeScriptExpressionCollector', () => {
  const collector = new TypeScriptExpressionCollector();

  /** Parses `code` as the elements of an array literal and returns them. */
  const parse = (code: string): ts.Expression[] => {
    const sourceFile = ts.createSourceFile('test.ts', `[${code}]`, ts.ScriptTarget.Latest, true);
    const statement = sourceFile.statements[0] as ts.ExpressionStatement;
    return [...(statement.expression as ts.ArrayLiteralExpression).elements];
  };

  const print = (expressions: ts.Expression[]): string[] => expressions.map(e => e.getText());

  const unique = (code: string): string[] => print(collector.collectUniqueExpressions(parse(code)));

  it('returns an empty list for no expressions', () => {
    expect(collector.collectUniqueExpressions([])).toEqual([]);
  });

  describe('literals and identifiers', () => {
    it('removes duplicate string and numeric literals', () => {
      expect(unique(`'a', 'b', 'a', 1, 2, 1`)).toEqual([`'a'`, `'b'`, '1', '2']);
    });

    it('does not treat literals of different kinds with the same text as equal', () => {
      expect(unique(`'1', 1`)).toEqual([`'1'`, '1']);
    });

    it('removes duplicate identifiers', () => {
      expect(unique(`Foo, Bar, Foo`)).toEqual(['Foo', 'Bar']);
    });

    it('removes duplicate boolean and null keywords', () => {
      expect(unique(`true, false, null, true, null`)).toEqual(['true', 'false', 'null']);
    });

    it('does not treat expressions of different kinds as equal', () => {
      expect(unique(`Foo, 'Foo', [Foo], { Foo }`)).toEqual(['Foo', `'Foo'`, '[Foo]', '{ Foo }']);
    });

    it('keeps unsupported expressions such as calls', () => {
      expect(unique(`foo(), foo()`)).toEqual(['foo()', 'foo()']);
    });
  });

  describe('object literals', () => {
    it('removes duplicates regardless of property order', () => {
      expect(unique(`{ a: 1, b: 'x' }, { b: 'x', a: 1 }`)).toEqual([`{ a: 1, b: 'x' }`]);
    });

    it('removes duplicates with identifier values', () => {
      expect(unique(`{ path: 'home', component: HomeComponent }, { path: 'home', component: HomeComponent }`))
        .toEqual([`{ path: 'home', component: HomeComponent }`]);
    });

    it('keeps objects with different identifier values', () => {
      expect(unique(`{ component: HomeComponent }, { component: AboutComponent }`))
        .toEqual(['{ component: HomeComponent }', '{ component: AboutComponent }']);
    });

    it('keeps objects with different literal values', () => {
      expect(unique(`{ a: 1 }, { a: 2 }`)).toEqual(['{ a: 1 }', '{ a: 2 }']);
    });

    it('keeps objects with a different number of properties', () => {
      expect(unique(`{ a: 1 }, { a: 1, b: 2 }`)).toEqual(['{ a: 1 }', '{ a: 1, b: 2 }']);
    });

    it('keeps objects with different property names', () => {
      expect(unique(`{ a: 1 }, { b: 1 }`)).toEqual(['{ a: 1 }', '{ b: 1 }']);
    });

    it('compares string literal property names', () => {
      expect(unique(`{ 'a': 1 }, { 'a': 1 }, { 'b': 1 }`)).toEqual([`{ 'a': 1 }`, `{ 'b': 1 }`]);
    });

    it('compares nested object and array values', () => {
      expect(unique(`{ data: { id: 1 }, tags: ['x'] }, { data: { id: 1 }, tags: ['x'] }, { data: { id: 2 }, tags: ['x'] }`))
        .toEqual([`{ data: { id: 1 }, tags: ['x'] }`, `{ data: { id: 2 }, tags: ['x'] }`]);
    });

    it('removes duplicates with shorthand properties', () => {
      expect(unique(`{ Foo }, { Foo }, { Bar }`)).toEqual(['{ Foo }', '{ Bar }']);
    });

    it('does not treat a shorthand property as equal to a property assignment', () => {
      expect(unique(`{ Foo }, { Foo: 1 }`)).toEqual(['{ Foo }', '{ Foo: 1 }']);
    });

    it('compares spread members by their expression', () => {
      expect(unique(`{ ...foo }, { ...bar }, { ...foo }`)).toEqual(['{ ...foo }', '{ ...bar }']);
    });

    it('keeps objects with computed property names', () => {
      expect(unique(`{ [firstKey]: 1 }, { [secondKey]: 1 }`)).toEqual(['{ [firstKey]: 1 }', '{ [secondKey]: 1 }']);
    });

    it('does not treat a computed property name as equal to a spread', () => {
      expect(unique(`{ [key]: 1 }, { ...key }`)).toEqual(['{ [key]: 1 }', '{ ...key }']);
    });

    it('keeps member order significant when objects contain spreads', () => {
      expect(unique(`{ ...base, path: 'home' }, { path: 'home', ...base }`))
        .toEqual([`{ ...base, path: 'home' }`, `{ path: 'home', ...base }`]);
    });

    it('removes duplicates with spreads in the same order', () => {
      expect(unique(`{ path: 'home', ...base }, { path: 'home', ...base }`)).toEqual([`{ path: 'home', ...base }`]);
    });

    it('does not treat a shorthand property as equal to a method with the same name', () => {
      expect(unique(`{ Foo }, { Foo() {} }`)).toEqual(['{ Foo }', '{ Foo() {} }']);
    });

    it('keeps objects with unsupported members such as methods and accessors', () => {
      expect(unique(`{ foo() {} }, { foo() {} }`)).toEqual(['{ foo() {} }', '{ foo() {} }']);
      expect(unique(`{ get foo() { return 1; } }, { get foo() { return 1; } }`))
        .toEqual(['{ get foo() { return 1; } }', '{ get foo() { return 1; } }']);
    });
  });

  describe('array literals', () => {
    it('removes duplicate arrays of literals', () => {
      expect(unique(`['a', 1], ['a', 1], ['a', 2]`)).toEqual([`['a', 1]`, `['a', 2]`]);
    });

    it('keeps arrays of different length', () => {
      expect(unique(`[1], [1, 2]`)).toEqual(['[1]', '[1, 2]']);
    });

    it('compares every object element, not only the first', () => {
      expect(unique(`[{ a: 1 }, { b: 2 }], [{ a: 1 }, { c: 3 }]`))
        .toEqual(['[{ a: 1 }, { b: 2 }]', '[{ a: 1 }, { c: 3 }]']);
    });

    it('removes duplicate arrays of identifiers', () => {
      expect(unique(`[Foo, Bar], [Foo, Bar], [Bar, Foo]`)).toEqual(['[Foo, Bar]', '[Bar, Foo]']);
    });
  });
});
