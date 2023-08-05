import { ThemeProvider } from '../components/theme-provider';
import { ThemeSwitcher } from '../components/theme-switcher';

import '../styles/globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className="bg-canvas text-primary" lang="en" suppressHydrationWarning>
			<body className="flex flex-col gap-16 px-8 py-16">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<ThemeSwitcher />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
