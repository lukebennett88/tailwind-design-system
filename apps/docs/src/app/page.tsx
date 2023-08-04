import { Button } from 'core';
import { type Metadata } from 'next';

export const metadata = {
	title: 'Docs - Turborepo Example',
} satisfies Metadata;

export default function Home() {
	return (
		<div className="bg-accent text-onPrimary flex min-h-screen flex-col items-center justify-center py-2">
			<main className="mx-auto w-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
				<h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl xl:text-8xl">
					Docs
					<span>Turborepo Example</span>
				</h1>
				<div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
					<Button />
				</div>
			</main>
		</div>
	);
}
