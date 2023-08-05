import { setmorePreset } from 'tailwind-config';
import { type Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/core/dist/**/*.{js,ts,jsx,tsx}',
	],
	presets: [setmorePreset],
} satisfies Config;
