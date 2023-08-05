import { type Metadata } from 'next';

import { Button } from '../components';

export const metadata = {
	title: 'Docs',
} satisfies Metadata;

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center px-8 py-16">
			<div className="flex flex-col gap-16">
				<h1 className="text-center text-4xl font-bold">Buttons</h1>
				<div className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-8">
					<Button variant="primary">primary</Button>
					<Button variant="tertiary">tertiary</Button>
					<Button variant="neutralSecondary">neutralSecondary</Button>
					<Button variant="neutralTertiary">neutralTertiary</Button>
					<Button variant="criticalPrimary">criticalPrimary</Button>
					<Button variant="criticalTertiary">criticalTertiary</Button>
				</div>
			</div>
		</main>
	);
}
