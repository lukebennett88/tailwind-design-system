'use client';

import { Button } from 'core';
import { useTheme } from 'next-themes';

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
