export type CSSProperties = React.CSSProperties & Record<`--${string}`, string>;

export type StyleProps<Part extends string> = {
	className: string;
	classNames: Partial<Record<Part, string>>;
	style: CSSProperties;
	styles: Partial<Record<Part, CSSProperties>>;
};

export type ButtonTranslations = Record<'loadingLabel', string>;

export type Translations = Readonly<{
	button: ButtonTranslations;
	// plop translations type here
}>;

export type Properties = {
	typography:
		| 'heading-1'
		| 'heading-2'
		| 'heading-3'
		| 'heading-4'
		| 'heading-5'
		| 'heading-6'
		| 'body-1'
		| 'body-2'
		| 'body-3'
		| 'body-4'
		| 'body-5'
		| 'body-6';
};
