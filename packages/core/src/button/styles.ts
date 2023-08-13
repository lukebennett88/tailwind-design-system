import { clsx } from 'clsx';
import { tv } from 'tailwind-variants';

export const buttonBase =
	'items-center group border rounded-full relative border-transparent justify-center cursor-pointer inline-flex transition-colors duration-300 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-focus';

export const getButtonStyles = tv({
	base: [buttonBase],
	variants: {
		size: {
			small: clsx(['h-24 px-12 text-body-4']),
			standard: clsx(['h-32 px-16 text-body-4']),
			large: clsx(['h-40 px-20 text-body-3']),
		},
		variant: {
			primary: clsx([
				// twMerge looks to be confusing some classes that are prefixed with "text-" that target different properties, so using arbitrary value syntax
				'bg-accent [color:rgb(var(--text-onPrimary))] hover:bg-accent-hover active:bg-accent-pressed',
			]),
			tertiary: clsx([
				// bg-accent-tertiary doesn't work for dark mode so using neutral instead
				// twMerge looks to be confusing some classes that are prefixed with "text-" that target different properties, so using arbitrary value syntax
				'bg-neutral [color:rgb(var(--text-accent))] hover:bg-accent-tertiary-hover active:bg-accent-tertiary-pressed',
			]),
			neutralSecondary: clsx([
				// twMerge looks to be confusing some classes that are prefixed with "text-" that target different properties, so using arbitrary value syntax
				'bg-neutral [color:rgb(var(--text-primary))] border-secondary hover:bg-neutral-hover active:bg-neutral-pressed',
			]),
			neutralTertiary: clsx([
				// twMerge looks to be confusing some classes that are prefixed with "text-" that target different properties, so using arbitrary value syntax
				'bg-tertiary [color:rgb(var(--text-secondary))] hover:bg-tertiary-hover active:bg-tertiary-pressed',
			]),
			criticalPrimary: clsx([
				// twMerge looks to be confusing some classes that are prefixed with "text-" that target different properties, so using arbitrary value syntax
				'bg-critical [color:rgb(var(--text-onPrimary))] hover:bg-critical-hover active:bg-critical-pressed',
			]),
			criticalTertiary: clsx([
				// twMerge looks to be confusing some classes that are prefixed with "text-" that target different properties, so using arbitrary value syntax
				'bg-critical-tertiary [color:rgb(var(--text-primary))] hover:bg-critical-tertiary-hover active:bg-critical-tertiary-pressed',
			]),
		},
	},
	slots: {
		label: 'group-data-[loading]:opacity-0',
		iconStart: '',
		iconEnd: '',
		loading: '',
		loadingLabel:
			'pointer-events-none absolute inset-0 inline-flex items-center justify-center',
	},
});
