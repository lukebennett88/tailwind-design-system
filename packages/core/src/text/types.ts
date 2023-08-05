import { type ForwardRefComponent } from '@radix-ui/react-polymorphic';

import { type Properties } from '../shared/types';

export type TextProps = {
	/** The content of the component. */
	children: React.ReactNode;

	/** The weight of the text. */
	fontWeight?: 'regular' | 'bold' | 'extrabold';

	/** Clamp the text to a specific number of lines. */
	lineClamp?: '1' | '2' | '3' | '4' | true;

	/** When enabled, numbers will be the same width. Similar to a monospaced font. */
	tabularNumbers?: boolean;

	/** The horizontal alignment. */
	textAlign?: 'start' | 'center' | 'end';

	/** Transform the text casing. */
	textTransform?: 'capitalize' | 'lowercase' | 'none' | 'uppercase';

	/** The color of the text. */
	tone?:
		| 'accent'
		| 'critical'
		| 'disabled'
		| 'inverse-secondary'
		| 'inverse'
		| 'onPrimary-disabled'
		| 'onPrimary'
		| 'primary'
		| 'secondary'
		| 'tertiary';

	/** The typographic styles of the text. */
	typography?: Properties['typography'];
};

export type PolymorphicText = ForwardRefComponent<'span', TextProps>;
