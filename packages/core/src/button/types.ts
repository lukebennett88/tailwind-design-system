import { type VariantProps } from 'class-variance-authority';

import { type StyleProps } from '../shared/types';
import { type buttonVariants } from './styles';

type Parts = 'label' | 'iconStart' | 'iconEnd' | 'loading';

type NativeButtonProps = Pick<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	| 'aria-controls'
	| 'aria-expanded'
	| 'aria-haspopup'
	| 'children'
	| 'form'
	| 'id'
	| 'onBlur'
	| 'onClick'
	| 'onFocus'
	| 'onKeyDown'
	| 'type'
>;

export type ButtonProps = NativeButtonProps &
	VariantProps<typeof buttonVariants> &
	Partial<StyleProps<Parts>> & {
		/** The icon to display before the buttons children. */
		iconStart?: any /** @todo */;

		/** The icon to display after the buttons children. */
		iconEnd?: any /** @todo */;

		/** When true, the button will be announced as disabled to screen-readers only. */
		isDisabled?: boolean;

		/** When true, the button will display a loading indicator. */
		isLoading?: boolean;

		/** When true, the button will have aria-pressed set and be styled visually pressed. */
		isPressed?: boolean;

		/** Text to read out to assistive technologies when button is loading. */
		loadingLabel?: string;

		/** The size of the button. */
		size?: 'large' | 'standard' | 'small';

		/** The variant of the button. */
		variant?:
			| 'primary'
			| 'tertiary'
			| 'neutralSecondary'
			| 'neutralTertiary'
			| 'criticalPrimary'
			| 'criticalTertiary';
	};
