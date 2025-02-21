import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...compat.extends('plugin:@angular-eslint/recommended', 'plugin:@angular-eslint/template/process-inline-templates'),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true,
      },
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ]
    },
  },
  ...compat.extends('plugin:@angular-eslint/template/recommended'),
  {
    files: ['**/*.html'],
    rules: {},
  },
  {
    ignores: ['projects/**/*']
  },
];
