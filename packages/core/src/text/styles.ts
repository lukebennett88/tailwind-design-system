import { tv } from 'tailwind-variants';

export const getTextStyles = tv({
	base: '',
	variants: {
		fontWeight: {
			regular: 'font-[400]',
			bold: 'font-[500]',
			extrabold: 'font-[600]',
		},
		lineClamp: {
			true: 'block overflow-hidden text-ellipsis whitespace-nowrap',
			'1': 'block overflow-hidden text-ellipsis whitespace-nowrap',
			'2': 'overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]',
			'3': 'overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]',
			'4': 'overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]',
		},
		tabularNumbers: {
			true: 'tabular-nums',
			false: '',
		},
		textAlign: {
			start: 'text-start',
			center: 'text-center',
			end: 'text-end',
		},
		textTransform: {
			capitalize: 'capitalize',
			lowercase: 'lowercase',
			none: 'normal-case',
			uppercase: 'uppercase',
		},
		tone: {
			accent: 'text-accent',
			critical: 'text-critical',
			disabled: 'text-disabled',
			'inverse-secondary': 'text-inverse-secondary',
			inverse: 'text-inverse',
			'onPrimary-disabled': 'text-onPrimary-disabled',
			onPrimary: 'text-onPrimary',
			primary: 'text-primary',
			secondary: 'text-primary',
			tertiary: 'text-tertiary',
		},
		typography: {
			'heading-1': 'text-heading-1',
			'heading-2': 'text-heading-2',
			'heading-3': 'text-heading-3',
			'heading-4': 'text-heading-4',
			'heading-5': 'text-heading-5',
			'heading-6': 'text-heading-6',
			'body-1': 'text-body-1',
			'body-2': 'text-body-2',
			'body-3': 'text-body-3',
			'body-4': 'text-body-4',
			'body-5': 'text-body-5',
			'body-6': 'text-body-6',
		},
	},
});
