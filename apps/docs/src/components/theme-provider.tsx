'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

type ThemeProviderProps = React.ComponentPropsWithoutRef<
	typeof NextThemesProvider
>;

export function ThemeProvider({
	children,
	...consumerProps
}: ThemeProviderProps) {
	return <NextThemesProvider {...consumerProps}>{children}</NextThemesProvider>;
}
