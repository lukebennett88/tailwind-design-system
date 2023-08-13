import { forwardRef } from 'react';

import { cn } from '../lib/utils';
import { getTextStyles } from './styles';
import { type PolymorphicText } from './types';

/**
 * Text
 *
 * @description
 * A primitive typographic component for constrained text styles.
 */

export const Text = forwardRef(function Text(
	{
		as: RootEl = 'span',
		className,
		fontWeight,
		lineClamp,
		tabularNumbers,
		textAlign,
		textTransform,
		tone,
		typography = 'body-2',
		...consumerProps
	},
	forwardedRef,
) {
	return (
		<RootEl
			{...consumerProps}
			className={cn(
				getTextStyles({
					fontWeight,
					lineClamp,
					tabularNumbers,
					textAlign,
					textTransform,
					tone,
					typography,
				}),
				className,
			)}
			ref={forwardedRef}
		/>
	);
}) as PolymorphicText;
