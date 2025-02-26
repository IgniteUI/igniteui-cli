import js from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
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
        browser: true,
        es2021: true,
        jasmine: true,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: ['dist', 'test']
  }
];
