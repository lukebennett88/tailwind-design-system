import hexRgb from 'hex-rgb';
import { type Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
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

function colorWithOpacity(obj: Record<string, string>) {
	return Object.fromEntries(
		Object.entries(obj).map(([key]) => [key, withOpacity(key)]),
	);
}

function toRgbString(hex: string) {
	const { red, green, blue } = hexRgb(hex);
	return `${red}, ${green}, ${blue}`;
}

function withOpacity(variableName: string) {
	return ({ opacityValue }: { opacityValue?: number }) => {
		return `rgba(var(${variableName}), ${opacityValue ?? 0})`;
	};
}

export const setmorePreset = {
	content: [],
	theme: {
		extend: {
			colors: {
				brandblue: colors.blue[500],
				brandred: colors.red[500],
			},
			// @ts-expect-error: Tailwind types don't account for using a function here
			textColor: colorWithOpacity(light.text),
		},
	},
	plugins: [
		plugin(function addBaseColor({ addBase }) {
			addBase({
				':root': toCustomProperties(light.text, 'text'),
				'.dark': toCustomProperties(dark.text, 'text'),
			});
		}),
	],
} satisfies Config;
