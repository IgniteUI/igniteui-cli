import js from '@eslint/js';
import parser from '@typescript-eslint/parser';
import reactRefresh from 'eslint-plugin-react-refresh';
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    recommendedConfig: js.configs.recommended
});

export default [
  ...compat.extends('eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'),
  {
    languageOptions: {
      globals: {
        browser: true,
        es2020: true,
      },
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      reactRefresh
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^(_|set)',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'reactRefresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: ['dist', 'eslint.config.mjs'],
  }
];
