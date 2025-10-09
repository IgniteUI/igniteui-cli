import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  {
    files: ['**/*.component.ts'],
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true,
      },
    },
    ...compat.extends(
      'plugin:@angular-eslint/recommended',
      'plugin:@angular-eslint/template/process-inline-templates'
    )[0],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],
      '@angular-eslint/prefer-standalone': 'off'
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: '@angular-eslint/template-parser'
    },
    ...compat.extends('plugin:@angular-eslint/template/recommended')[0],
    rules: {
      eqeqeq: 'off'
    },
  },
  {
    files: ['**/*.ts'],
    ignores: ['**/*.component.ts'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true
      },
    },
    ...compat.extends('plugin:@typescript-eslint/recommended')[0]
  },
  {
    ignores: ['projects/**/*']
  },
];
