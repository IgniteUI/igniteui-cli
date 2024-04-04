module.exports = {
	"root": true,
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"extends": [
		// TODO: consider extending the recommended by ts rules and overriding them where necessary
		// 'eslint:recommended',
		// 'plugin:@typescript-eslint/recommended'
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": "tsconfig.json",
		"sourceType": "module"
	},
	"plugins": [
		"eslint-plugin-import",
		"eslint-plugin-unicorn",
		"eslint-plugin-prefer-arrow",
		// "@typescript-eslint" - install it if we extend the recommended ts rules
	],
	"ignorePatterns": [
		"/node_modules/**/*",
		"/coverage/**/*",
		"/output/**/*",
		"/packages/cli/quickstart/**/*",
		"/packages/cli/templates/**/*",
		"**/files/**/*"
	],
	"rules": {
		"complexity": "off",
		"import/no-extraneous-dependencies": "warn",
		"import/no-internal-modules": "warn",
		"import/order": [
			"off",
			{
				"alphabetize": {
					"caseInsensitive": true,
					"order": "asc"
				},
				"newlines-between": "ignore",
				"groups": [
					[
						"builtin",
						"external",
						"internal",
						"unknown",
						"object",
						"type"
					],
					"parent",
					[
						"sibling",
						"index"
					]
				],
				"distinctGroup": false,
				"pathGroupsExcludedImportTypes": [],
				"pathGroups": [
					{
						"pattern": "./",
						"patternOptions": {
							"nocomment": true,
							"dot": true
						},
						"group": "sibling",
						"position": "before"
					},
					{
						"pattern": ".",
						"patternOptions": {
							"nocomment": true,
							"dot": true
						},
						"group": "sibling",
						"position": "before"
					},
					{
						"pattern": "..",
						"patternOptions": {
							"nocomment": true,
							"dot": true
						},
						"group": "parent",
						"position": "before"
					},
					{
						"pattern": "../",
						"patternOptions": {
							"nocomment": true,
							"dot": true
						},
						"group": "parent",
						"position": "before"
					}
				]
			}
		],
		"no-constant-condition": "warn",
		"no-case-declarations": "off",
		"no-extra-boolean-cast": "warn",
		"no-unused-vars": "warn",
		"no-unexpected-multiline": "off",
		"no-useless-escape": "off",
		"new-parens": "error",
		"no-bitwise": "off",
		"no-caller": "error",
		"no-cond-assign": "error",
		"no-console": "off",
		"no-debugger": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-empty": "off",
		"no-empty-function": "off",
		"no-eval": "error",
		"no-extra-bind": "error",
		"no-fallthrough": "off",
		"no-invalid-this": "off",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-redeclare": "error",
		"no-return-await": "error",
		"no-sequences": "error",
		"no-shadow": "off",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-underscore-dangle": "off",
		"no-unsafe-finally": "error",
		"no-unused-expressions": "off",
		"no-unused-labels": "error",
		"no-use-before-define": "off",
		"no-var": "error",
		"object-shorthand": "warn",
		"one-var": [
			"error",
			"never"
		],
		"prefer-arrow/prefer-arrow-functions": [
			"warn",
			{
				"allowStandaloneDeclarations": true
			}
		],
		"prefer-const": "warn",
		"prefer-object-spread": "off",
		"radix": "error",
		"space-in-parens": [
			"error",
			"never"
		],
		"unicorn/prefer-ternary": "off",
		"use-isnan": "error",
		"valid-typeof": "off"
	}
};
