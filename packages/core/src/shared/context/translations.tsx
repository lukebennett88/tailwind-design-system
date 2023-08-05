import { createContext, useContext, type ReactNode } from 'react';

import { type Translations } from '../types';

const TranslationsContext = createContext<Translations | undefined>(undefined);

export const TranslationsProvider = ({
	children,
	value,
}: {
	children: ReactNode;
	value: Translations;
}) => {
	// TODO: merge with parent
	// const parent = useContext(TranslationsContext);

	return (
		<TranslationsContext.Provider value={value}>
			{children}
		</TranslationsContext.Provider>
	);
};

export function useTranslations() {
	const context = useContext(TranslationsContext);
	if (!context) {
		throw new Error(
			'useTranslations must be used within a TranslationsProvider',
		);
	}
	return context;
}
