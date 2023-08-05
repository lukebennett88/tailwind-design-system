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
		<main className="flex min-h-screen flex-col items-center justify-center px-8 py-16">
			<div className="flex flex-col gap-16">
				<h1 className="text-center text-4xl font-bold">Buttons</h1>
				<ul className="mx-auto grid max-w-6xl grid-cols-6 items-center justify-center gap-8">
					{variants.map(
						(variant) =>
							sizes.map((size) =>
								loadingStates.map((isLoading) => (
									// isDisabled.map((isDisabled) =>
									<li key={`${size}-${variant}-${disabledStates}-${isLoading}`}>
										<Button
											// isDisabled={isDisabled}
											isLoading={isLoading}
											size={size}
											variant={variant}
										>
											{variant}
										</Button>
									</li>
								)),
							),
						// ),
					)}
				</ul>
			</div>
		</main>
	);
}
