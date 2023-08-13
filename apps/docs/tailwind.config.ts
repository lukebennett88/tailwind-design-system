import { setmorePreset } from 'tailwind-config';
import { withTV } from 'tailwind-variants/transformer';
import { type Config } from 'tailwindcss';

export default withTV({
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/core/dist/**/*.{js,ts,jsx,tsx}',
	],
	presets: [setmorePreset],
} satisfies Config);
