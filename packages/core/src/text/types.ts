import { type ForwardRefComponent } from '@radix-ui/react-polymorphic';

export type TextProps = {
	/** The horizontal alignment. */
	textAlign?: 'start' | 'center' | 'end';

	/** Clamp the text to a specific number of lines. */
	lineClamp?: '1' | '2' | '3' | '4' | true;

	/** When enabled, numbers will be the same width. Similar to a monospaced font. */
	tabularNumbers?: boolean;

	/** Transform the text casing. */
	// textTransform?: SxProps['text-transform'];

	/** The color of the text. */
	// tone?: SxProps['color'];

	/** The typographic styles of the text. */
	// typography?: SxProps['typography'];

	/** The weight of the text. */
	// fontWeight?: SxProps['font-weight'];

	/** The content of the component. */
	children: React.ReactNode;
};

export type PolymorphicText = ForwardRefComponent<'span', TextProps>;

export type EmojiProps = React.HTMLAttributes<HTMLSpanElement> & {
	/** Label used to describe the symbol that will be announced to screen readers. */
	'aria-label'?: string;

	/** Emoji symbol. */
	children: string;
};
