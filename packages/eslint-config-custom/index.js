// @ts-check

const OFF = 0;
const WARN = 1;
const ERROR = 2;

/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		'next',
		'turbo',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'plugin:storybook/recommended',
	],
	rules: {
		'@next/next/no-html-link-for-pages': OFF,
		'@next/next/no-img-element': OFF,
		'@typescript-eslint/ban-ts-comment': OFF,
		'@typescript-eslint/consistent-type-imports': [
			WARN,
			{ prefer: 'type-imports', fixStyle: 'inline-type-imports' },
		],
		'@typescript-eslint/no-empty-function': OFF,
		'@typescript-eslint/no-explicit-any': OFF,
		'import/first': ERROR,
		'import/newline-after-import': ERROR,
		'import/no-duplicates': ERROR,
		'import/no-extraneous-dependencies': ERROR,
		'import/no-unresolved': ERROR,
		'prefer-const': WARN,
		'react/jsx-sort-props': WARN,
		'react/no-children-prop': OFF,
		'react/no-unescaped-entities': OFF,
	},
	overrides: [
		{
			files: ['**/*.{ts,tsx}'],
			rules: {
				/**
				 * TypeScript already checks for the following things and they
				 * cause conflicts.
				 */
				'import/no-unresolved': OFF,
				'no-undef': OFF,
				'no-unused-vars': OFF,
			},
		},
		{
			files: ['**/*stories.*', '**/*test.*'],
			rules: {
				/**
				 * Allow importing from packages that aren't listed in package.json for
				 * test and Storybook files.
				 * TypeScript will still catch uninstalled imports for us as there will
				 * be no modules or type definitions for them.
				 */
				'import/no-extraneous-dependencies': OFF,
			},
		},
	],
};
