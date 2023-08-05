import { forwardRef, useId } from 'react';

import { cn } from '../lib/utils';
import { type LoadingProps } from './types';

/**
 * Loading
 *
 * @description
 */

export const Loading = forwardRef<SVGSVGElement, LoadingProps>(function Loading(
	{
		className,
		classNames = {},
		size = 'regular',
		styles = {},
		tone = 'accent',
		...consumerProps
	},
	forwardedRef,
) {
	const id = useId();
	return (
		<svg
			{...consumerProps}
			aria-hidden="true"
			className={cn(
				'high-contrast:border-dashed animate-spin border border-transparent stroke-current',
				iconSizeLookup[size],
				className,
			)}
			fill="none"
			focusable="false"
			preserveAspectRatio="xMidYMid meet"
			ref={forwardedRef}
			role="img"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient id={id} x1="10%" x2="80%" y1="50%" y2="80%">
					<stop
						className={cn(
							'[stop-color:currentColor]',
							toneLookup[tone],
							classNames.ring,
						)}
						offset="0%"
						stopOpacity={0}
						style={styles.ring}
					/>
					<stop
						className={cn(
							'[stop-color:currentColor]',
							toneLookup[tone],
							classNames.ring,
						)}
						offset="100%"
						stopOpacity={1}
						style={styles.ring}
					/>
				</linearGradient>
			</defs>
			<circle
				className={cn('high-contrast:hidden', classNames.circle)}
				cx={12}
				cy={12}
				r={8}
				stroke={`url(#${id})`}
				strokeDasharray="40 48"
				strokeDashoffset={65}
				strokeLinecap="round"
				strokeWidth={3}
				style={styles.circle}
			/>
		</svg>
	);
});

const toneLookup = {
	accent: 'text-accent',
	primary: 'text-primary',
	onPrimary: 'text-onPrimary',
	critical: 'text-critical',
};

export const iconSizeLookup = {
	large: 'w-32 h-32',
	regular: 'w-24 h-24',
	small: 'w-20 h-20',
	xsmall: 'w-16 h-16',
} as const;
