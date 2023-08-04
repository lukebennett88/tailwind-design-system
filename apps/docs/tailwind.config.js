const { setmorePreset } = require('tailwind-config');

module.exports = {
	content: [
		'./apps/**/pages/**/*.{js,jsx,ts,tsx}',
		'./node_modules/ui/**/*.{js,ts,jsx,tsx}',
	],
	presets: [setmorePreset],
};
``
