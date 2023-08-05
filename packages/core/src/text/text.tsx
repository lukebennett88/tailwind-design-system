import { forwardRef } from 'react';

import { type PolymorphicText } from './types';

/**
 * Text
 *
 * @description
 * A primitive typographic component for constrained text styles.
 */

export const Text = forwardRef(function Text(
	{
		textAlign,
		as: RootEl = 'span',
		// classNames = {},
		lineClamp,
		// styles = {},
		// sx: overrides = {},
		tabularNumbers,
		// textTransform,
		// tone,
		// typography = 'body.2',
		// fontWeight,
		...consumerProps
	},
	forwardedRef,
) {
	return <RootEl {...consumerProps} ref={forwardedRef} />;
}) as PolymorphicText;
