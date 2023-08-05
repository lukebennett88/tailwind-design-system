import { type ForwardRefComponent } from '@radix-ui/react-polymorphic';

import { type StyleProps } from '../shared/types';

type Parts = 'center' | 'rail' | 'railEnd' | 'railStart';

export type TrackProps = Partial<StyleProps<Parts>> & {
	/**
	 * The content/components to appear in the fluid center
	 */
	children: React.ReactNode;

	/**
	 * The content/components to appear in the end rail
	 */
	railEnd?: React.ReactNode;

	/**
	 * The content/components to appear in the start rail
	 */
	railStart?: React.ReactNode;

	/**
	 * Whether to visually, not semantically switch railEnd and railStart
	 */
	reverse?: boolean;

	/**
	 * Determines how the rails and center are vertically aligned to each other.
	 * A `typography` or `heading` can be provided to center align icons and with
	 * text that may wrap.
	 *
	 * @default 'middle'
	 */
	verticalAlign?: 'bottom' | 'middle' | 'top';
};

export type PolymorphicTrack = ForwardRefComponent<'div', TrackProps>;
