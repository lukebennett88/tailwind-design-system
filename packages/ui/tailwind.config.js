const {setmorePreset} = require('tailwind-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	presets: [setmorePreset],
};
