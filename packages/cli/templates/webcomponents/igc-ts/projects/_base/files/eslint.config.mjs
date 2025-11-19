import js from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import lit from 'eslint-plugin-lit';
import globals from 'globals';
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    recommendedConfig: js.configs.recommended
});

export default [
  ...compat.extends('eslint:recommended', 'plugin:@typescript-eslint/recommended'),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        jasmine: true,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'lit': lit,
    },
    rules: {
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'argsIgnorePattern': '^_',
          'varsIgnorePattern': '^_'
        }
      ],
      'lit/no-legacy-template-syntax': 'error',
      'lit/no-invalid-html': 'error',
      'lit/no-useless-template-literals': 'warn',
    },
  },
  {
    ignores: ['dist', 'test']
  }
];
