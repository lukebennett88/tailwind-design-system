import hexRgb from 'hex-rgb';
import { type Config } from 'tailwindcss';
// @ts-expect-error: No types available
import animatePlugin from 'tailwindcss-animate';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

import { tokens } from './setmore-tokens';

function toCustomProperties(obj: Record<string, string>, prefix: string) {
	return Object.fromEntries(
		Object.entries(obj).map(([key, value]) => [
			`--${prefix}-${key}`,
			toRgbString(value),
		]),
	);
}

function toRgbString(hex: string) {
	const { red, green, blue } = hexRgb(hex);
	return `${red}, ${green}, ${blue}`;
}

type StringKeyof<T> = Extract<keyof T, string>;

type ObjectKeys<T> = {
	[K in StringKeyof<T>]: T[K] extends object ? K : never;
}[StringKeyof<T>];

type KeysOfProperties<T> = {
	[K in ObjectKeys<T>]: `${K & string}-${StringKeyof<T[K]>}`;
}[ObjectKeys<T>];

type ThemeKeys = KeysOfProperties<typeof tokens.colors.light>;

function withOpacity(variableName: ThemeKeys) {
	/** @see https://tailwindcss.com/docs/customizing-colors#using-css-variables */
	return `rgba(var(--${variableName}), <alpha-value>)`;
}

function pxToRem(value: string) {
	return `${parseFloat(value) / 16}rem`;
}

const colorPlugin = plugin(function addBaseColor({ addBase }) {
	addBase({
		':root': {
			...toCustomProperties(tokens.colors.light.background, 'background'),
			...toCustomProperties(tokens.colors.light.border, 'border'),
			...toCustomProperties(tokens.colors.light.icon, 'icon'),
			...toCustomProperties(tokens.colors.light.text, 'text'),
		},
		'.dark': {
			...toCustomProperties(tokens.colors.dark.background, 'background'),
			...toCustomProperties(tokens.colors.dark.border, 'border'),
			...toCustomProperties(tokens.colors.dark.icon, 'icon'),
			...toCustomProperties(tokens.colors.dark.text, 'text'),
		},
	});
});

const highContrastPlugin = plugin(function addHighContrast({ addVariant }) {
	addVariant(
		'high-contrast',
		'@media (-ms-high-contrast: active), (forced-colors: active)',
	);
});

export const setmorePreset = {
	content: [],
	theme: {
		...defaultTheme,
		spacing: Object.fromEntries(
			Object.entries(tokens.spacing).map(([key, value]) => [
				key,
				pxToRem(value),
			]),
		),
		backgroundColor: {
			transparent: 'transparent',
			'accent-hover': withOpacity('background-accent-hover'),
			'accent-pressed': withOpacity('background-accent-pressed'),
			'accent-secondary-hover': withOpacity(
				'background-accent-secondary-hover',
			),
			'accent-secondary-pressed': withOpacity(
				'background-accent-secondary-pressed',
			),
			'accent-secondary': withOpacity('background-accent-secondary'),
			'accent-tertiary-hover': withOpacity('background-accent-tertiary-hover'),
			'accent-tertiary-pressed': withOpacity(
				'background-accent-tertiary-pressed',
			),
			'accent-tertiary': withOpacity('background-accent-tertiary'),
			accent: withOpacity('background-accent'),
			canvas: withOpacity('background-canvas'),
			'critical-hover': withOpacity('background-critical-hover'),
			'critical-pressed': withOpacity('background-critical-pressed'),
			'critical-tertiary-hover': withOpacity(
				'background-critical-tertiary-hover',
			),
			'critical-tertiary-pressed': withOpacity(
				'background-critical-tertiary-pressed',
			),
			'critical-tertiary': withOpacity('background-critical-tertiary'),
			critical: withOpacity('background-critical'),
			'inverse-hover': withOpacity('background-inverse-hover'),
			'inverse-pressed': withOpacity('background-inverse-pressed'),
			'inverse-secondary': withOpacity('background-inverse-secondary'),
			'inverse-tertiary-hover': withOpacity(
				'background-inverse-tertiary-hover',
			),
			'inverse-tertiary-pressed': withOpacity(
				'background-inverse-tertiary-pressed',
			),
			'inverse-tertiary': withOpacity('background-inverse-tertiary'),
			inverse: withOpacity('background-inverse'),
			'neutral-disabled': withOpacity('background-neutral-disabled'),
			'neutral-hover': withOpacity('background-neutral-hover'),
			'neutral-pressed': withOpacity('background-neutral-pressed'),
			'neutral-secondary-hover': withOpacity(
				'background-neutral-secondary-hover',
			),
			'neutral-secondary-pressed': withOpacity(
				'background-neutral-secondary-pressed',
			),
			'neutral-secondary': withOpacity('background-neutral-secondary'),
			'neutral-tertiary-hover': withOpacity(
				'background-neutral-tertiary-hover',
			),
			'neutral-tertiary': withOpacity('background-neutral-tertiary'),
			neutral: withOpacity('background-neutral'),
		} satisfies Record<keyof typeof tokens.colors.light.background, string> &
			Record<'transparent', 'transparent'>,
		borderColor: {
			transparent: 'transparent',
			accent: withOpacity('border-accent'),
			focus: withOpacity('border-focus'),
			hover: withOpacity('border-hover'),
			'input-active-hover': withOpacity('border-input-active-hover'),
			'input-active-pressed': withOpacity('border-input-active-pressed'),
			'input-active': withOpacity('border-input-active'),
			'input-critical-hover': withOpacity('border-input-critical-hover'),
			'input-critical-pressed': withOpacity('border-input-critical-pressed'),
			'input-critical': withOpacity('border-input-critical'),
			'input-disabled': withOpacity('border-input-disabled'),
			'input-hover': withOpacity('border-input-hover'),
			'input-pressed': withOpacity('border-input-pressed'),
			input: withOpacity('border-input'),
			secondary: withOpacity('border-secondary'),
			tertiary: withOpacity('border-tertiary'),
		} satisfies Record<keyof typeof tokens.colors.light.border, string> &
			Record<'transparent', 'transparent'>,
		fill: {
			transparent: 'transparent',
			primary: withOpacity('icon-primary'),
			secondary: withOpacity('icon-secondary'),
			tertiary: withOpacity('icon-tertiary'),
		} satisfies Record<keyof typeof tokens.colors.light.icon, string> &
			Record<'transparent', 'transparent'>,
		ringColor: {
			transparent: 'transparent',
			accent: withOpacity('border-accent'),
			focus: withOpacity('border-focus'),
			hover: withOpacity('border-hover'),
			'input-active-hover': withOpacity('border-input-active-hover'),
			'input-active-pressed': withOpacity('border-input-active-pressed'),
			'input-active': withOpacity('border-input-active'),
			'input-critical-hover': withOpacity('border-input-critical-hover'),
			'input-critical-pressed': withOpacity('border-input-critical-pressed'),
			'input-critical': withOpacity('border-input-critical'),
			'input-disabled': withOpacity('border-input-disabled'),
			'input-hover': withOpacity('border-input-hover'),
			'input-pressed': withOpacity('border-input-pressed'),
			input: withOpacity('border-input'),
			secondary: withOpacity('border-secondary'),
			tertiary: withOpacity('border-tertiary'),
		} satisfies Record<keyof typeof tokens.colors.light.border, string> &
			Record<'transparent', 'transparent'>,
		textColor: {
			transparent: 'transparent',
			accent: withOpacity('text-accent'),
			'accent-hover': withOpacity('text-accent-hover'),
			'accent-pressed': withOpacity('text-accent-pressed'),
			'inverse-secondary': withOpacity('text-inverse-secondary'),
			'onPrimary-disabled': withOpacity('text-onPrimary-disabled'),
			'secondary-hover': withOpacity('text-secondary-hover'),
			critical: withOpacity('text-critical'),
			disabled: withOpacity('text-disabled'),
			inverse: withOpacity('text-inverse'),
			onPrimary: withOpacity('text-onPrimary'),
			primary: withOpacity('text-primary'),
			secondary: withOpacity('text-secondary'),
			tertiary: withOpacity('text-tertiary'),
		} satisfies Record<keyof typeof tokens.colors.light.text, string> &
			Record<'transparent', 'transparent'>,
	},
	plugins: [animatePlugin, colorPlugin, highContrastPlugin],
	presets: [],
} satisfies Config;
