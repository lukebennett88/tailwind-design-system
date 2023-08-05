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
			small: 'h-24 px-12',
			standard: 'h-32 px-16',
			large: 'h-40 px-20',
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
				'bg-accent text-onPrimary hover:bg-accent-hover active:bg-accent-pressed',
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
				'bg-accent-tertiary text-primary hover:bg-accent-tertiary-hover active:bg-accent-tertiary-pressed',
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
				'bg-neutral text-primary border-secondary hover:bg-neutral-hover active:bg-neutral-pressed',
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
				'bg-tertiary text-secondary hover:bg-tertiary-hover active:bg-tertiary-pressed',
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
				'bg-critical text-onPrimary hover:bg-critical-hover active:bg-critical-pressed',
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
				'bg-critical-tertiary text-primary hover:bg-critical-tertiary-hover active:bg-critical-tertiary-pressed',
		},
	],
});
