import hexRgb from 'hex-rgb';
import { type Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

import { dark } from './setmore-theme/dark';
import { light } from './setmore-theme/light';

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

type ThemeKeys = KeysOfProperties<typeof light>;

function withOpacity(variableName: ThemeKeys) {
	/** @see https://tailwindcss.com/docs/customizing-colors#using-css-variables */
	return `rgba(var(--${variableName}), <alpha-value>)`;
}

export const setmorePreset = {
	content: [],
	theme: {
		backgroundColor: {
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
		} satisfies Record<keyof typeof light.background, string>,
		borderColor: {
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
		} satisfies Record<keyof typeof light.border, string>,
		fill: {
			primary: withOpacity('icon-primary'),
			secondary: withOpacity('icon-secondary'),
			tertiary: withOpacity('icon-tertiary'),
		} satisfies Record<keyof typeof light.icon, string>,
		textColor: {
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
		} satisfies Record<keyof typeof light.text, string>,
	},
	plugins: [
		plugin(function addBaseColor({ addBase }) {
			addBase({
				':root': {
					...toCustomProperties(light.background, 'background'),
					...toCustomProperties(light.border, 'border'),
					...toCustomProperties(light.icon, 'icon'),
					...toCustomProperties(light.text, 'text'),
				},
				'.dark': {
					...toCustomProperties(dark.background, 'background'),
					...toCustomProperties(dark.border, 'border'),
					...toCustomProperties(dark.icon, 'icon'),
					...toCustomProperties(dark.text, 'text'),
				},
			});
		}),
	],
	presets: [],
} satisfies Config;
