import { forwardRef } from 'react';

import { cn } from '../lib/utils';
import { type PolymorphicTrack } from './types';

/**
 * Track
 *
 * @description A layout component which allows you to layout elements with
 * 2 optional fixed "rails" and a fluid center (think railway track).
 */

export const Track = forwardRef(function Track(
	{
		as: RootEl = 'div',
		children,
		className,
		classNames = {},
		railEnd,
		railStart,
		reverse,
		styles = {},
		verticalAlign = 'middle',
		...consumerProps
	},
	forwardedRef,
) {
	const ChildEl = ['button', 'label', 'p', 'span'].includes(RootEl)
		? 'span'
		: 'div';

	return (
		<RootEl
			{...consumerProps}
			className={cn(
				'flex',
				reverse ? 'flex-row-reverse' : 'flex-row',
				verticalAlignMap[verticalAlign],
				className,
			)}
			ref={forwardedRef}
		>
			{railStart ? (
				<ChildEl
					className={cn('inline-flex flex-shrink-0', classNames.railStart)}
					style={styles.railStart}
				>
					{railStart}
				</ChildEl>
			) : null}

			<ChildEl
				className={cn('min-w-0 grow', classNames.center)}
				style={styles.center}
			>
				{children}
			</ChildEl>

			{railEnd ? (
				<ChildEl
					className={cn('inline-flex flex-shrink-0', classNames.railEnd)}
					style={styles.railEnd}
				>
					{railEnd}
				</ChildEl>
			) : null}
		</RootEl>
	);
}) as PolymorphicTrack;

const verticalAlignMap = {
	top: 'items-start',
	middle: 'items-center',
	bottom: 'items-end',
} as const;
