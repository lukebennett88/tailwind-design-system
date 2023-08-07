import { cva } from 'class-variance-authority';

export const buttonBase =
	'items-center border rounded-full relative border-transparent justify-center cursor-pointer inline-flex transition-colors duration-300 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-focus';

export const buttonVariants = cva([buttonBase, ''], {
	variants: {
		isDisabled: {
			true: '',
			false: '',
		},
		size: {
			small: 'h-24 px-12 text-body-4',
			standard: 'h-32 px-16 text-body-4',
			large: 'h-40 px-20 text-body-3',
		},
		variant: {
			primary: '',
			tertiary: '',
			neutralSecondary: '',
			neutralTertiary: '',
			criticalPrimary: '',
			criticalTertiary: '',
		},
	},
	compoundVariants: [
		{
			variant: 'primary',
			isDisabled: true,
			className: '',
		},
		{
			variant: 'primary',
			isDisabled: false,
			className:
				// twMerge looks to be confusing some classes that are prefixed with "text-" that target different properties, so using arbitrary value syntax
				'bg-accent [color:rgb(var(--text-onPrimary))] hover:bg-accent-hover active:bg-accent-pressed',
		},
		{
			variant: 'tertiary',
			isDisabled: true,
			className: '',
		},
		{
			variant: 'tertiary',
			isDisabled: false,
			className:
				// bg-accent-tertiary doesn't work for dark mode so using neutral instead
				// twMerge looks to be confusing some classes that are prefixed with "text-" that target different properties, so using arbitrary value syntax
				'bg-neutral [color:rgb(var(--text-accent))] hover:bg-accent-tertiary-hover active:bg-accent-tertiary-pressed',
		},
		{
			variant: 'neutralSecondary',
			isDisabled: true,
			className: '',
		},
		{
			variant: 'neutralSecondary',
			isDisabled: false,
			className:
				// twMerge looks to be confusing some classes that are prefixed with "text-" that target different properties, so using arbitrary value syntax
				'bg-neutral [color:rgb(var(--text-primary))] border-secondary hover:bg-neutral-hover active:bg-neutral-pressed',
		},
		{
			variant: 'neutralTertiary',
			isDisabled: true,
			className: '',
		},
		{
			variant: 'neutralTertiary',
			isDisabled: false,
			className:
				// twMerge looks to be confusing some classes that are prefixed with "text-" that target different properties, so using arbitrary value syntax
				'bg-tertiary [color:rgb(var(--text-secondary))] hover:bg-tertiary-hover active:bg-tertiary-pressed',
		},
		{
			variant: 'criticalPrimary',
			isDisabled: true,
			className: '',
		},
		{
			variant: 'criticalPrimary',
			isDisabled: false,
			className:
				// twMerge looks to be confusing some classes that are prefixed with "text-" that target different properties, so using arbitrary value syntax
				'bg-critical [color:rgb(var(--text-onPrimary))] hover:bg-critical-hover active:bg-critical-pressed',
		},
		{
			variant: 'criticalTertiary',
			isDisabled: true,
			className: '',
		},
		{
			variant: 'criticalTertiary',
			isDisabled: false,
			className:
				// twMerge looks to be confusing some classes that are prefixed with "text-" that target different properties, so using arbitrary value syntax
				'bg-critical-tertiary [color:rgb(var(--text-primary))] hover:bg-critical-tertiary-hover active:bg-critical-tertiary-pressed',
		},
	],
});
