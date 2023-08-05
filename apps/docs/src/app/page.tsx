import { type Metadata } from 'next';

import { Button, type ButtonProps } from '../components';

export const metadata = {
	title: 'Docs',
} satisfies Metadata;

const sizes = ['small', 'standard', 'large'] satisfies Array<
	ButtonProps['size']
>;

const variants = [
	'primary',
	'tertiary',
	'neutralSecondary',
	'neutralTertiary',
	'criticalPrimary',
	'criticalTertiary',
] satisfies Array<ButtonProps['variant']>;

const disabledStates = [false, true] satisfies Array<ButtonProps['isDisabled']>;

const loadingStates = [false, true] satisfies Array<ButtonProps['isLoading']>;

export default function Home() {
	return (
		<main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16">
			<h1 className="text-4xl font-bold">Buttons</h1>
			<ul className="grid grid-cols-3 items-center gap-8 md:grid-cols-4 lg:grid-cols-6">
				{variants.map(
					(variant) =>
						sizes.map((size) =>
							loadingStates.map((isLoading) => (
								// isDisabled.map((isDisabled) =>
								<li
									className="flex flex-col items-start gap-8"
									key={`${size}-${variant}-${disabledStates}-${isLoading}`}
								>
									<Button
										// isDisabled={isDisabled}
										isLoading={isLoading}
										size={size}
										variant={variant}
									>
										{variant}
									</Button>
									<div>
										<p>variant: {variant}</p>
										<p>size: {size}</p>
										<p>isLoading: {isLoading}</p>
									</div>
								</li>
							)),
						),
					// ),
				)}
			</ul>
		</main>
	);
}
