import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: await import('@typescript-eslint/parser'),
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true,
      },
    },
    rules: {
      // Basic TypeScript linting without Angular template processing
    },
  },
  {
    files: ['**/*.html'],
    ...compat.extends('plugin:@angular-eslint/template/recommended')[0],
    rules: {
      eqeqeq: 'off'
    },
  },
  {
    ignores: ['projects/**/*', '**/*.spec.ts']
  },
];
