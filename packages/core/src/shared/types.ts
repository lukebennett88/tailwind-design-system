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
