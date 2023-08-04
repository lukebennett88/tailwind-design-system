import { setmorePreset } from 'tailwind-config';
import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	darkMode: ['class'],
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/core/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: defaultTheme,
	},
	presets: [setmorePreset],
} satisfies Config;
