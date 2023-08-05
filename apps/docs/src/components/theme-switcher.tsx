'use client';

import { useTheme } from 'next-themes';

import { Button } from '.';

export function ThemeSwitcher() {
	const { setTheme } = useTheme();
	return (
		<header className="flex items-center justify-end gap-8">
			<Button onClick={() => setTheme('light')} variant="neutralSecondary">
				Light
			</Button>
			<Button onClick={() => setTheme('dark')} variant="neutralSecondary">
				Dark
			</Button>
		</header>
	);
}
